const serviceType = document.getElementById("serviceType");
const locationSelect = document.getElementById("location");
const searchBtn = document.getElementById("searchBtn");
const resultsGrid = document.getElementById("resultsGrid");
const resultMeta = document.getElementById("resultMeta");

const openAuthBtn = document.getElementById("openAuthBtn");
const closeAuthBtn = document.getElementById("closeAuthBtn");
const authModal = document.getElementById("authModal");
const loginForm = document.getElementById("loginForm");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const authMessage = document.getElementById("authMessage");

const adminPanel = document.getElementById("adminPanel");
const adminForm = document.getElementById("adminForm");
const adminMessage = document.getElementById("adminMessage");
const adminList = document.getElementById("adminList");
const adminLogoutBtn = document.getElementById("adminLogoutBtn");

let authToken = localStorage.getItem("petcare_admin_token") || "";
let cachedAdminServices = [];

function titleCase(value) {
  return value
    .split(/[\s-]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function formatRating(value) {
  const n = Number(value);
  if (!Number.isFinite(n)) return "N/A";
  return `${n.toFixed(1)} ★`;
}

async function fetchJson(url, options = {}) {
  const res = await fetch(url, options);
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.error || "Request failed");
  }
  return data;
}

function renderServices(services) {
  resultsGrid.innerHTML = "";
  if (services.length === 0) {
    resultsGrid.innerHTML = `
      <article class="service-card md:col-span-2">
        <h3>No matching services found</h3>
        <p>Try changing your type or location filters.</p>
      </article>
    `;
    resultMeta.textContent = "0 services found.";
    return;
  }
  resultMeta.textContent = `${services.length} services found.`;
  for (const service of services) {
    const card = document.createElement("article");
    card.className = "service-card";
    card.innerHTML = `
      <span class="service-chip">${titleCase(service.type)}</span>
      <span class="service-chip">${titleCase(service.location)}</span>
      <h3>${service.name}</h3>
      <p>${service.description}</p>
      <p><strong>Rating:</strong> ${formatRating(service.rating)}</p>
      <p><strong>Phone:</strong> ${service.phone}</p>
      <p><strong>Address:</strong> ${service.address}</p>
    `;
    resultsGrid.appendChild(card);
  }
}

async function loadServices() {
  const params = new URLSearchParams();
  if (serviceType.value) params.set("type", serviceType.value);
  if (locationSelect.value) params.set("location", locationSelect.value);
  const data = await fetchJson(`/api/services?${params.toString()}`);
  renderServices(data.services || []);
}

function setAuthVisible(show) {
  authModal.classList.toggle("hidden", !show);
  if (show) {
    authMessage.textContent = "";
  }
}

function setAdminVisible(show) {
  adminPanel.classList.toggle("hidden", !show);
}

async function refreshAdminList() {
  if (!authToken) return;
  const data = await fetchJson("/api/admin/services", {
    headers: { Authorization: `Bearer ${authToken}` },
  });
  cachedAdminServices = data.services || [];
  adminList.innerHTML = "";
  for (const item of cachedAdminServices) {
    const row = document.createElement("div");
    row.className = "admin-list-item";
    row.innerHTML = `
      <p><strong>${item.name}</strong> (${titleCase(item.type)} / ${titleCase(item.location)})</p>
      <p class="text-sm text-gray-700">${item.phone} | ${formatRating(item.rating)}</p>
      <p class="text-sm text-gray-600">${item.address}</p>
      <div class="mt-2">
        <button data-id="${item.id}" class="delete-btn">Delete</button>
      </div>
    `;
    adminList.appendChild(row);
  }
}

function persistToken(token) {
  authToken = token || "";
  if (authToken) {
    localStorage.setItem("petcare_admin_token", authToken);
  } else {
    localStorage.removeItem("petcare_admin_token");
  }
}

openAuthBtn.addEventListener("click", () => setAuthVisible(true));
closeAuthBtn.addEventListener("click", () => setAuthVisible(false));

authModal.addEventListener("click", (event) => {
  if (event.target === authModal) setAuthVisible(false);
});

searchBtn.addEventListener("click", async () => {
  try {
    await loadServices();
  } catch (error) {
    resultMeta.textContent = error.message;
  }
});

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  authMessage.textContent = "Signing in...";
  try {
    const data = await fetchJson("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: loginEmail.value.trim(),
        password: loginPassword.value,
      }),
    });
    persistToken(data.token);
    authMessage.textContent = "Login successful.";
    setAuthVisible(false);
    setAdminVisible(true);
    await refreshAdminList();
  } catch (error) {
    authMessage.textContent = error.message;
  }
});

adminForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(adminForm);
  const payload = Object.fromEntries(formData.entries());
  payload.rating = Number(payload.rating);
  adminMessage.textContent = "Saving service...";
  try {
    await fetchJson("/api/admin/services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(payload),
    });
    adminForm.reset();
    adminMessage.textContent = "Service saved successfully.";
    await Promise.all([refreshAdminList(), loadServices()]);
  } catch (error) {
    adminMessage.textContent = error.message;
  }
});

adminList.addEventListener("click", async (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  if (!target.classList.contains("delete-btn")) return;
  const { id } = target.dataset;
  if (!id) return;
  adminMessage.textContent = "Deleting service...";
  try {
    await fetchJson(`/api/admin/services/${encodeURIComponent(id)}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${authToken}` },
    });
    adminMessage.textContent = "Service deleted.";
    await Promise.all([refreshAdminList(), loadServices()]);
  } catch (error) {
    adminMessage.textContent = error.message;
  }
});

adminLogoutBtn.addEventListener("click", async () => {
  try {
    if (authToken) {
      await fetchJson("/api/admin/logout", {
        method: "POST",
        headers: { Authorization: `Bearer ${authToken}` },
      });
    }
  } catch {
    // Ignore logout failures; local cleanup still happens.
  }
  persistToken("");
  setAdminVisible(false);
});

async function bootstrap() {
  try {
    await loadServices();
    if (authToken) {
      setAdminVisible(true);
      await refreshAdminList();
    }
  } catch (error) {
    resultMeta.textContent = error.message;
  }
}

bootstrap();

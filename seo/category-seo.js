const {
  CANONICAL_ORIGIN,
  getBlogPostBySlug,
  buildOrganizationNode,
  buildWebSiteNode,
} = require("./blog-seo");
const { buildProviderItemList, getMostRecentLastVerified, formatVerifiedMonth } = require("./provider-schema");

const SEO_CONTENT_START = "<!-- peedee-seo-content:start -->";
const SEO_CONTENT_END = "<!-- peedee-seo-content:end -->";
const DIRECTORY_CONTACT_EMAIL = "hello@peedeepetcare.com";

const PATH_ALIASES = {
  "/vet": "/vet-care",
  "/sitters-walkers": "/sitters",
};

const GROOMING_SEO = {
  pathname: "/grooming",
  title: "Dog Groomers Directory | Darlington SC | Pee Dee Pet Care",
  description:
    "Free directory of dog and cat groomers in Darlington & Florence, SC. Compare phone-verified local listings. We do not provide grooming.",
  h1: "Dog & Cat Grooming Directory — Darlington County & Florence, SC",
  guideHeading: "How to find a dog groomer in the Pee Dee",
  guideIntro:
    "Use the listings above to compare independent groomers in Florence, Darlington, and Hartsville. Pee Dee Pet Care is a free directory — we do not provide grooming services. Contact each business directly to ask about availability, pricing, and breed experience.",
  intro:
    "Pee Dee Pet Care lists independent pet grooming businesses serving the Pee Dee region. We are an online directory — not a grooming salon, mobile groomer, or veterinary clinic. Use this page to compare local groomers in Florence, Darlington, Hartsville, and nearby communities.",
  sections: [
    {
      heading: "Grooming services you can find",
      paragraphs: [
        "Listings on Pee Dee Pet Care may include full-service salon grooming, bath and brush packages, nail trims, ear cleaning, de-shedding treatments, breed-specific cuts, cat grooming, and mobile grooming that comes to your home. Many Pee Dee groomers work with anxious, senior, or special-needs pets — ask about temperament and coat type before you book.",
        "Whether you need a routine maintenance groom every four to eight weeks or a one-time appointment before travel, browsing by location helps you find providers near Florence SC, Darlington County, or Hartsville.",
      ],
    },
    {
      heading: "How to choose a groomer in the Pee Dee",
      paragraphs: [
        "Start with your dog's breed, coat type, and temperament. A doodle, double-coated shepherd, and short-haired senior dog do not need the same groomer. Read our guide on The Daily Wag for questions to ask before booking, then return here to browse current listings and reviews from local pet owners.",
      ],
    },
    {
      heading: "Service area",
      paragraphs: [
        "This directory focuses on Darlington County and the Florence, South Carolina area, including Hartsville, Lamar, Society Hill, and surrounding Pee Dee communities. Each listed business sets its own hours, pricing, and service area — contact them directly for availability.",
      ],
    },
    {
      heading: "Questions to ask before you book",
      paragraphs: [
        "Ask about breed or coat-type experience, how they handle anxious dogs, what products they use on sensitive skin, and what is included in the quoted price. A professional groomer should welcome these questions.",
        "Confirm typical appointment length and whether vaccination records are required before the first visit. Contact listed businesses directly — Pee Dee Pet Care does not book appointments.",
      ],
    },
    {
      heading: "Salon grooming vs mobile grooming",
      paragraphs: [
        "Salon groomers in Florence and Darlington often handle many breeds each day and may offer faster turnaround for standard cuts. Mobile groomers come to your home, which helps pets who struggle with car rides, lobby noise, or separation from their owner.",
        "Both options appear in the listings above. Compare reviews, location, and your dog's temperament rather than choosing on price alone.",
      ],
    },
  ],
  faqs: [
    {
      q: "Does Pee Dee Pet Care provide grooming services?",
      a: "No. Pee Dee Pet Care is a free directory that lists independent local groomers. We do not groom pets ourselves.",
    },
    {
      q: "How do I find a dog groomer near Florence SC?",
      a: "Browse the grooming listings on this page, compare reviews, and contact providers directly. Listings include salon and mobile groomers serving the Pee Dee region.",
    },
    {
      q: "Is it free to use this grooming directory?",
      a: "Yes. Pet owners can search and read reviews at no charge. Businesses can list at no charge.",
    },
    {
      q: "Are mobile dog groomers listed?",
      a: "Yes. Many Pee Dee area listings include mobile grooming services that come to your home.",
    },
  ],
  externalLinks: [
    {
      href: "https://www.akc.org/expert-advice/health/questions-ask-potential-groomers/",
      label: "AKC: questions to ask a potential groomer",
    },
    {
      href: "https://www.avma.org/resources-tools/pet-owners/petcare",
      label: "AVMA pet care resources",
    },
  ],
  relatedLinks: [
    { href: "/blog/how-to-find-good-dog-groomer-pee-dee", label: "Tips for finding the right dog groomer" },
    { href: "/training", label: "Dog trainers" },
    { href: "/boarding", label: "Pet boarding" },
    { href: "/vet-care", label: "Veterinary care" },
    { href: "/", label: "Pee Dee Pet Care home" },
  ],
  relatedBlogSlug: "how-to-find-good-dog-groomer-pee-dee",
  resourcesHeading: "Trusted grooming resources",
  schemaName: "Dog Groomers Directory — Darlington & Florence SC",
  schemaAbout: "Pet grooming services directory",
};

const TRAINING_SEO = {
  pathname: "/training",
  title: "Dog Trainers Directory | Darlington SC | Pee Dee Pet Care",
  description:
    "Free directory of dog trainers in Darlington & Florence, SC. Compare phone-verified local listings. We do not provide training.",
  h1: "Dog Trainers Directory — Darlington County & Florence, SC",
  guideHeading: "How to find a dog trainer in the Pee Dee",
  guideIntro:
    "Use the listings above to compare independent trainers in Florence, Darlington, and Hartsville. Pee Dee Pet Care is a free directory — we do not provide training services. Contact each provider directly about class formats, methods, and availability.",
  intro:
    "Pee Dee Pet Care lists independent dog trainers and training programs serving the Pee Dee region. We are an online directory — not a dog trainer, behaviorist, or veterinary clinic. Use this page to compare local trainers in Florence, Darlington, Hartsville, and nearby communities.",
  sections: [
    {
      heading: "Training services you can find",
      paragraphs: [
        "Listings may include puppy socialization classes, basic obedience, leash manners, recall training, behavior modification, reactive-dog support, and in-home private sessions. Some trainers work with specific breeds or age groups; others focus on family pets, working dogs, or rescue transitions.",
        "Whether you need help with a new puppy or an adult dog with established habits, browsing local trainers helps you find someone whose approach and schedule fit your goals.",
      ],
    },
    {
      heading: "How to choose a trainer in the Pee Dee",
      paragraphs: [
        "Decide what you want to accomplish first — puppy basics, obedience, or a specific behavior issue. Then look for trainers who specialize in that area and ask about their methods, class size, and what you should practice between sessions. Read our guide on The Daily Wag for more on finding a local trainer, then browse listings and reviews here.",
      ],
    },
    {
      heading: "Service area",
      paragraphs: [
        "This directory focuses on Darlington County and the Florence, South Carolina area, including Hartsville, Lamar, Society Hill, and surrounding Pee Dee communities. Trainers set their own service areas, rates, and availability — contact them directly to confirm they serve your location.",
      ],
    },
    {
      heading: "Group classes vs private lessons",
      paragraphs: [
        "Puppy socialization and basic manners often work well in group classes where dogs learn around distractions. Reactivity, severe fear, or specific behavior issues may need private or in-home training with fewer triggers.",
        "Ask trainers listed above whether they offer both formats and which they recommend for your dog's age and goals before you commit to a package.",
      ],
    },
    {
      heading: "Puppy training vs behavior help",
      paragraphs: [
        "Puppy basics — house training, leash manners, and socialization — are different from adult behavior work such as reactivity or resource guarding. Match the trainer's experience to your situation, not just their location.",
        "Read reviews from Pee Dee pet owners with similar breeds or issues, then schedule a consultation with a shortlist of trainers from this directory.",
      ],
    },
  ],
  faqs: [
    {
      q: "Does Pee Dee Pet Care offer dog training?",
      a: "No. Pee Dee Pet Care is a free directory that lists independent local dog trainers. We do not provide training services ourselves.",
    },
    {
      q: "How do I find a dog trainer near Florence SC?",
      a: "Browse the training listings on this page, compare reviews, and contact providers directly. Listings include group-class and in-home trainers serving the Pee Dee region.",
    },
    {
      q: "Is it free to use this training directory?",
      a: "Yes. Pet owners can search and read reviews at no charge. Businesses can list at no charge.",
    },
    {
      q: "Can I find puppy training classes locally?",
      a: "Yes. Many Pee Dee area trainers offer puppy socialization and basic obedience classes. Check individual listings for age requirements and schedules.",
    },
  ],
  externalLinks: [
    {
      href: "https://www.akc.org/expert-advice/training/",
      label: "AKC dog training resources",
    },
    {
      href: "https://www.avma.org/resources-tools/pet-owners/petcare",
      label: "AVMA pet care resources",
    },
  ],
  relatedLinks: [
    { href: "/blog/affordable-dog-training-classes-florence-darlington-pee-dee", label: "Affordable dog training classes in the Pee Dee" },
    { href: "/grooming", label: "Dog groomers" },
    { href: "/boarding", label: "Pet boarding" },
    { href: "/sitters", label: "Pet sitters and walkers" },
    { href: "/", label: "Pee Dee Pet Care home" },
  ],
  relatedBlogSlug: "affordable-dog-training-classes-florence-darlington-pee-dee",
  resourcesHeading: "Trusted dog training resources",
  schemaName: "Dog Trainers Directory — Darlington & Florence SC",
  schemaAbout: "Dog training services directory",
};

const BOARDING_SEO = {
  pathname: "/boarding",
  title: "Pet Boarding Directory | Darlington SC | Pee Dee Pet Care",
  description:
    "Free directory of pet boarding and daycare in Darlington & Florence, SC. Compare phone-verified local listings. We do not provide boarding.",
  h1: "Pet Boarding & Daycare Directory — Darlington County & Florence, SC",
  guideHeading: "How to find pet boarding in the Pee Dee",
  guideIntro:
    "Use the listings above to compare independent kennels and daycare facilities in Florence, Darlington, and Hartsville. Pee Dee Pet Care is a free directory — we do not board pets. Contact each facility directly for tours, rates, and availability.",
  intro:
    "Pee Dee Pet Care lists independent pet boarding kennels, daycare facilities, and overnight care providers serving the Pee Dee region. We are an online directory — not a boarding facility or veterinary clinic. Use this page to compare local options in Florence, Darlington, Hartsville, and nearby communities.",
  sections: [
    {
      heading: "Boarding and daycare services you can find",
      paragraphs: [
        "Listings may include overnight dog boarding, cat boarding, daycare with group play, private suite accommodations, medication administration, and holiday or extended-stay options. Some facilities specialize in small dogs, senior pets, or quieter environments for anxious animals.",
        "Whether you need a single overnight stay or regular daycare while you work, comparing local facilities helps you find a fit for your pet's temperament and routine.",
      ],
    },
    {
      heading: "How to choose a boarding facility in the Pee Dee",
      paragraphs: [
        "Ask about daily routines, feeding schedules, supervision, vaccination requirements, and emergency vet plans before you book. Tour the facility if possible and read reviews from local pet owners. Our guide on The Daily Wag covers key questions to ask when comparing boarding in Darlington and Florence.",
      ],
    },
    {
      heading: "Service area",
      paragraphs: [
        "This directory focuses on Darlington County and the Florence, South Carolina area, including Hartsville, Lamar, Society Hill, and surrounding Pee Dee communities. Each facility sets its own hours, pricing, and drop-off policies — contact them directly for availability.",
      ],
    },
    {
      heading: "Questions to ask before you book",
      paragraphs: [
        "Ask about daily routines, staff supervision, vaccination requirements, medication handling, and emergency veterinary plans. Reputable facilities in the Pee Dee region expect these questions and should answer clearly.",
        "Tour the facility when possible. Cleanliness, fresh water, and calm handling are good signs. Pee Dee Pet Care lists providers — we do not operate a boarding facility.",
      ],
    },
    {
      heading: "Boarding vs in-home pet sitting",
      paragraphs: [
        "Boarding suits pets who do well with structured routines and supervised play. Anxious pets or multi-pet households may prefer in-home sitting listed on our sitters directory.",
        "Compare both options on Pee Dee Pet Care, read local reviews, and choose based on your pet's temperament and trip length — not price alone.",
      ],
    },
  ],
  faqs: [
    {
      q: "Does Pee Dee Pet Care provide pet boarding?",
      a: "No. Pee Dee Pet Care is a free directory that lists independent local boarding and daycare facilities. We do not board pets ourselves.",
    },
    {
      q: "How do I find pet boarding near Florence SC?",
      a: "Browse the boarding listings on this page, compare reviews, and contact facilities directly. Listings include kennels and daycare providers serving the Pee Dee region.",
    },
    {
      q: "Is it free to use this boarding directory?",
      a: "Yes. Pet owners can search and read reviews at no charge. Businesses can list at no charge.",
    },
    {
      q: "Are cat boarding options listed?",
      a: "Yes. Some Pee Dee area facilities accept cats as well as dogs. Check individual listings for species, size limits, and requirements.",
    },
  ],
  externalLinks: [
    {
      href: "https://www.akc.org/expert-advice/training/how-to-prepare-your-dog-for-boarding/",
      label: "AKC: preparing your dog for boarding",
    },
    {
      href: "https://www.avma.org/resources-tools/pet-owners/petcare",
      label: "AVMA pet care resources",
    },
  ],
  relatedLinks: [
    { href: "/blog/finding-pet-sitter-dog-walker-pee-dee", label: "How to find the best pet sitter or dog walker" },
    { href: "/grooming", label: "Dog groomers" },
    { href: "/training", label: "Dog trainers" },
    { href: "/sitters", label: "Pet sitters and walkers" },
    { href: "/", label: "Pee Dee Pet Care home" },
  ],
  relatedBlogSlug: "finding-pet-sitter-dog-walker-pee-dee",
  resourcesHeading: "Trusted pet boarding resources",
  schemaName: "Pet Boarding Directory — Darlington & Florence SC",
  schemaAbout: "Pet boarding and daycare directory",
};

const SITTERS_SEO = {
  pathname: "/sitters",
  title: "Pet Sitters Directory | Darlington SC | Pee Dee Pet Care",
  description:
    "Free directory of pet sitters and dog walkers in Darlington & Florence, SC. Compare phone-verified local listings. We do not provide sitting.",
  h1: "Pet Sitters Directory — Darlington County & Florence, SC",
  guideHeading: "How to find a pet sitter in the Pee Dee",
  guideIntro:
    "Use the listings above to compare independent sitters and dog walkers in Florence, Darlington, and Hartsville. Pee Dee Pet Care is a free directory — we do not provide sitting services. Contact each provider directly about coverage area, rates, and meet-and-greets.",
  intro:
    "Pee Dee Pet Care lists independent pet sitters, dog walkers, and in-home care providers serving the Pee Dee region. We are an online directory — not a pet sitting agency or veterinary clinic. Use this page to compare local sitters in Florence, Darlington, Hartsville, and nearby communities.",
  sections: [
    {
      heading: "Pet sitting services you can find",
      paragraphs: [
        "Listings may include daily dog walking, drop-in visits for cats and dogs, overnight in-home pet sitting, vacation care, puppy check-ins, and medication administration. Some sitters specialize in multi-pet households, senior pets, or reactive dogs that do better at home than in a facility.",
        "Whether you need a midday walk while at work or full in-home care during travel, browsing local sitters helps you find someone reliable near Florence SC or Darlington County.",
      ],
    },
    {
      heading: "How to choose a pet sitter in the Pee Dee",
      paragraphs: [
        "Ask about experience with your pet's species, breed, and temperament. Confirm scheduling, backup coverage, insurance or bonding if offered, and how they handle emergencies. Meet the sitter before a long trip when possible, and read reviews from other local pet owners on this directory.",
      ],
    },
    {
      heading: "Service area",
      paragraphs: [
        "This directory focuses on Darlington County and the Florence, South Carolina area, including Hartsville, Lamar, Society Hill, and surrounding Pee Dee communities. Each sitter sets their own service area, rates, and availability — contact them directly to confirm they cover your address.",
      ],
    },
    {
      heading: "Pet sitter vs boarding — which fits your pet?",
      paragraphs: [
        "In-home sitting keeps your pet in familiar surroundings, which suits many cats, senior dogs, and anxious pets. Boarding works well when you need supervised group play or a facility with structured routines. Browsing both directories on Pee Dee Pet Care lets you compare options side by side.",
        "For short weekday absences, a dog walker or drop-in visit may be enough. For multi-day travel, compare overnight in-home sitters with local boarding facilities and read reviews from Pee Dee pet owners who faced similar decisions.",
      ],
    },
    {
      heading: "What to prepare before hiring a sitter",
      paragraphs: [
        "Leave clear feeding instructions, medication schedules, vet contact information, and emergency contacts. Share your pet's quirks — hiding spots, leash reactivity, or separation anxiety — so the sitter can plan ahead. Many local sitters offer meet-and-greets; use that time to watch how they interact with your pet before you commit to a longer trip.",
      ],
    },
  ],
  faqs: [
    {
      q: "Does Pee Dee Pet Care provide pet sitting?",
      a: "No. Pee Dee Pet Care is a free directory that lists independent local pet sitters and dog walkers. We do not provide sitting services ourselves.",
    },
    {
      q: "How do I find a dog walker near Florence SC?",
      a: "Browse the sitter and walker listings on this page, compare reviews, and contact providers directly. Listings include in-home sitters and walkers serving the Pee Dee region.",
    },
    {
      q: "Is it free to use this pet sitter directory?",
      a: "Yes. Pet owners can search and read reviews at no charge. Businesses can list at no charge.",
    },
    {
      q: "Can I find in-home pet sitting for vacations?",
      a: "Yes. Many Pee Dee area sitters offer overnight or extended in-home care while you travel. Check individual listings for availability and policies.",
    },
    {
      q: "What is the difference between a pet sitter and a dog walker?",
      a: "Dog walkers typically provide scheduled walks and brief check-ins. Pet sitters may offer longer drop-in visits, overnight stays, or vacation care in your home. Many providers on this directory offer both.",
    },
  ],
  externalLinks: [
    {
      href: "https://www.avma.org/resources-tools/pet-owners/petcare",
      label: "AVMA pet care resources",
    },
    {
      href: "https://www.akc.org/expert-advice/home-living/",
      label: "AKC home and living tips for dog owners",
    },
  ],
  relatedLinks: [
    { href: "/blog/finding-pet-sitter-dog-walker-pee-dee", label: "How to find the best pet sitter or dog walker" },
    { href: "/boarding", label: "Pet boarding" },
    { href: "/grooming", label: "Dog groomers" },
    { href: "/training", label: "Dog trainers" },
    { href: "/", label: "Pee Dee Pet Care home" },
  ],
  relatedBlogSlug: "finding-pet-sitter-dog-walker-pee-dee",
  resourcesHeading: "Trusted pet sitting resources",
  schemaName: "Pet Sitters Directory — Darlington & Florence SC",
  schemaAbout: "Pet sitting and dog walking directory",
};

const VET_CARE_SEO = {
  pathname: "/vet-care",
  title: "Veterinarians in Darlington & Florence SC | Pee Dee Pet Care",
  description:
    "Vet directory for Darlington & Florence, SC. Compare independent clinics. Pee Dee Pet Care does not provide grooming, training, boarding, or veterinary care.",
  h1: "Veterinary Care Directory — Darlington County & Florence, SC",
  guideHeading: "How to find a veterinarian in the Pee Dee",
  guideIntro:
    "Use the listings above to compare independent veterinary clinics and animal hospitals in Florence, Darlington, and Hartsville. Pee Dee Pet Care is a free directory — we do not provide medical care. Contact clinics directly for appointments and emergencies.",
  intro:
    "Pee Dee Pet Care is a free online directory that lists independent third-party veterinary clinics, animal hospitals, and vet practices serving the Pee Dee region. We do not provide veterinary care ourselves — and we are not a groomer, trainer, or boarding facility. All services are offered by the listed businesses; contact them directly. Use this page to compare local veterinarians in Florence, Darlington, Hartsville, and nearby communities.",
  sections: [
    {
      heading: "Veterinary services listed by independent providers",
      paragraphs: [
        "Directory listings may include general practice veterinary clinics, wellness exams, vaccinations, surgery, dental care, diagnostics, and specialty referrals. These services are provided by independent Pee Dee area clinics — not by Pee Dee Pet Care.",
        "For life-threatening emergencies, contact the nearest emergency veterinary hospital directly. This directory helps you find routine and ongoing care providers in the Pee Dee area.",
      ],
    },
    {
      heading: "How to choose a veterinarian in the Pee Dee",
      paragraphs: [
        "Consider location, hours, services offered, and how the practice handles after-hours concerns. Read reviews from local pet owners, confirm they accept your pet's species, and ask about appointment availability for new clients. Building a relationship with a local vet before an urgent need arises is one of the best things you can do for your pet.",
      ],
    },
    {
      heading: "Service area",
      paragraphs: [
        "This directory focuses on Darlington County and the Florence, South Carolina area, including Hartsville, Lamar, Society Hill, and surrounding Pee Dee communities. Each clinic sets its own hours, services, and policies — contact them directly for appointments and pricing.",
      ],
    },
    {
      heading: "Routine wellness vs emergency veterinary care",
      paragraphs: [
        "Use this directory to find a primary care veterinarian for annual exams, vaccines, dental cleanings, and ongoing health management. Emergency hospitals handle life-threatening situations after hours — if your pet is in immediate danger, call an emergency clinic directly rather than searching a directory.",
        "Establishing care with a local Florence or Darlington vet before an urgent situation helps clinics access your pet's history quickly when minutes matter.",
      ],
    },
    {
      heading: "What to ask a new veterinary clinic",
      paragraphs: [
        "Ask about appointment availability for new clients, species served, payment options, and how after-hours calls are handled. If your pet has ongoing conditions, confirm the clinic can coordinate specialist referrals within the region. Reviews from Darlington and Florence pet owners on Pee Dee Pet Care can highlight wait times, communication, and bedside manner.",
      ],
    },
  ],
  faqs: [
    {
      q: "Does Pee Dee Pet Care provide veterinary care?",
      a: "No. Pee Dee Pet Care is a free directory that lists independent local veterinary clinics. We do not provide medical care for pets.",
    },
    {
      q: "How do I find a vet near Florence SC?",
      a: "Browse the veterinary listings on this page, compare reviews, and contact clinics directly. Listings include general practice veterinarians serving the Pee Dee region.",
    },
    {
      q: "Is it free to use this vet directory?",
      a: "Yes. Pet owners can search and read reviews at no charge. Businesses can list at no charge.",
    },
    {
      q: "Are emergency veterinary hospitals listed?",
      a: "Some listings may include urgent or extended-hours care. For immediate emergencies, call the nearest emergency veterinary hospital or animal poison control.",
    },
    {
      q: "Can I find a vet for cats or exotic pets?",
      a: "Yes. Some Pee Dee area clinics focus on cats, exotics, or specific species. Check individual listings or call ahead to confirm they treat your pet.",
    },
  ],
  externalLinks: [
    {
      href: "https://www.avma.org/resources-tools/pet-owners/petcare",
      label: "AVMA pet care resources",
    },
    {
      href: "https://llr.sc.gov/vet/",
      label: "South Carolina Board of Veterinary Medical Examiners",
    },
  ],
  relatedLinks: [
    { href: "/blog", label: "The Daily Wag pet care guides" },
    { href: "/grooming", label: "Dog groomers" },
    { href: "/training", label: "Dog trainers" },
    { href: "/boarding", label: "Pet boarding" },
    { href: "/", label: "Pee Dee Pet Care home" },
  ],
  resourcesHeading: "Trusted veterinary resources",
  schemaName: "Veterinarians Directory — Darlington & Florence SC",
  schemaAbout: "Veterinary care directory",
};

const PRODUCTS_SEO = {
  pathname: "/products",
  title: "Recommended Pet Products | Pee Dee Pet Care",
  description:
    "Hand-picked pet product recommendations from Pee Dee Pet Care — beds, toys, treats, and gear for Pee Dee pet parents. We may earn a commission; we do not sell products.",
  h1: "Recommended Pet Products — Curated Picks for Pee Dee Pet Parents",
  guideHeading: "How we choose these products",
  guideIntro:
    "The products on this page are a small, curated set of recommendations — not a store directory. We feature items we think Pee Dee pet parents will genuinely find useful, link to where you can buy them online, and may earn a small commission on purchases at no extra cost to you.",
  intro:
    "This page is a curated list of pet products recommended by Pee Dee Pet Care — beds, toys, treats, grooming gear, and travel accessories, organized by category. We are a free local pet services directory; we do not sell products ourselves, and purchases happen on the retailer's site.",
  sections: [
    {
      heading: "What you'll find on this page",
      paragraphs: [
        "A short, hand-picked list of products for dogs and cats — everyday gear like beds, toys, and treats, plus seasonal and travel picks. Each product card describes what the item is, why we like it, and links to the retailer where you can buy it.",
      ],
    },
    {
      heading: "Affiliate disclosure",
      paragraphs: [
        "Some product links are affiliate links, which means Pee Dee Pet Care may earn a small commission when you buy through them — at no extra cost to you. This helps support our free local directory. Products are chosen by us, not by advertisers, and payment never determines what we recommend.",
      ],
    },
    {
      heading: "Looking for local pet services instead?",
      paragraphs: [
        "If you need grooming, training, boarding, pet sitters, or veterinary care in Florence, Darlington, or Hartsville, browse our local service directory — every listing is checked by phone. For prescription diets or health products, your veterinarian remains the best source of advice.",
      ],
    },
  ],
  faqs: [
    {
      q: "Does Pee Dee Pet Care sell these products?",
      a: "No. We link to outside retailers and your purchase happens on their site. We may earn a small affiliate commission at no extra cost to you.",
    },
    {
      q: "Is this a directory of local pet stores?",
      a: "No. This page is a curated set of product recommendations. Our directory covers local pet services — grooming, training, boarding, sitters, and vet care in the Pee Dee region.",
    },
    {
      q: "How are the products chosen?",
      a: "We pick items we think Pee Dee pet parents will genuinely find useful. Advertisers do not choose or rank the products.",
    },
  ],
  externalLinks: [
    {
      href: "https://www.avma.org/resources-tools/pet-owners/petcare",
      label: "AVMA pet care resources",
    },
    {
      href: "https://www.akc.org/expert-advice/nutrition/",
      label: "AKC dog nutrition resources",
    },
  ],
  relatedLinks: [
    { href: "/grooming", label: "Dog groomers" },
    { href: "/training", label: "Dog trainers" },
    { href: "/vet-care", label: "Veterinary care" },
    { href: "/blog", label: "The Daily Wag" },
    { href: "/", label: "Pee Dee Pet Care home" },
  ],
  resourcesHeading: "Trusted pet product resources",
  schemaName: "Recommended Pet Products — Pee Dee Pet Care",
  schemaAbout: "Curated pet product recommendations",
};

const CATEGORY_PAGES = {
  "/grooming": GROOMING_SEO,
  "/training": TRAINING_SEO,
  "/boarding": BOARDING_SEO,
  "/sitters": SITTERS_SEO,
  "/vet-care": VET_CARE_SEO,
  "/products": PRODUCTS_SEO,
};

// Simple informational pages: meta tags only, no injected listings/guide content.
const SIMPLE_PAGE_SEO = {
  "/about": {
    title: "About Us | Pee Dee Pet Care",
    description:
      "The story behind Pee Dee Pet Care — a free local pet services directory for Darlington County & Florence, SC, built by a Hartsville local.",
  },
  "/privacy": {
    title: "Privacy Policy | Pee Dee Pet Care",
    description:
      "How Pee Dee Pet Care handles your information: what we collect, what we use it for, and what we never do. We never sell or share your info.",
  },
  "/review": {
    title: "Share Your Experience | Pee Dee Pet Care",
    description:
      "Leave a review for a local pet business in Darlington County or Florence, SC. Your experience helps other pet parents across the Pee Dee.",
  },
  "/how-we-verify": {
    title: "How We Verify Listings | Pee Dee Pet Care",
    description:
      "We try to reach every business on Pee Dee Pet Care by phone to confirm its information. Verified listings carry a dated badge. Here is what we confirm and what Verified does and does not mean.",
  },
};

function resolveSimplePageSeo(pathname) {
  const config = SIMPLE_PAGE_SEO[normalizeCategoryPath(pathname)];
  if (!config) {
    return null;
  }
  return {
    title: config.title,
    description: config.description,
    canonical: `${CANONICAL_ORIGIN}${normalizeCategoryPath(pathname)}`,
    ogImage: `${CANONICAL_ORIGIN}/share-card.jpg`,
    ogType: "website",
  };
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function normalizeCategoryPath(pathname) {
  const normalized = pathname.replace(/\/+$/, "") || "/";
  return PATH_ALIASES[normalized] || normalized;
}

function getCategoryConfig(pathname) {
  return CATEGORY_PAGES[normalizeCategoryPath(pathname)] || null;
}

function resolveCategorySeoForPathname(pathname) {
  const config = getCategoryConfig(pathname);
  if (!config) {
    return resolveSimplePageSeo(pathname);
  }
  return {
    title: config.title,
    description: config.description,
    canonical: `${CANONICAL_ORIGIN}${config.pathname}`,
    ogImage: `${CANONICAL_ORIGIN}/share-card.jpg`,
    ogType: "website",
  };
}

function buildListingsSectionHtml(listings, heading = "Local listings on Pee Dee Pet Care") {
  if (!listings.length) {
    return "";
  }
  const items = listings
    .map((listing) => {
      const cityWithZip = listing.city ? `${listing.city}${listing.zipCode ? `, SC ${listing.zipCode}` : ""}` : "";
      const location = [cityWithZip, listing.address].filter(Boolean).join(" — ");
      const phone = listing.phone ? ` Phone: ${escapeHtml(listing.phone)}.` : "";
      const desc = listing.description ? ` ${escapeHtml(listing.description)}` : "";
      const verifiedMonth = formatVerifiedMonth(listing.lastVerified);
      const verifiedNote = verifiedMonth ? ` Verified by phone ${escapeHtml(verifiedMonth)}.` : "";
      return `<li><strong>${escapeHtml(listing.name)}</strong>${location ? ` — ${escapeHtml(location)}` : ""}.${desc}${phone}${verifiedNote}</li>`;
    })
    .join("\n    ");
  const latestVerified = formatVerifiedMonth(getMostRecentLastVerified(listings));
  const freshnessHtml = latestVerified
    ? `\n  <p>Listings on this page were most recently verified by phone in ${escapeHtml(latestVerified)}.</p>`
    : "";
  return `<h2>${escapeHtml(heading)}</h2>
  <p>Independent businesses listed on Pee Dee Pet Care. Every listing is checked by phone by a real person before it appears — we confirm the business is open, reachable, and offering the services shown. Listing and verification are free and cannot be bought; read <a href="/how-we-verify">how we verify listings</a>. Contact providers directly for hours, pricing, and availability.</p>${freshnessHtml}
  <ul>
    ${items}
  </ul>`;
}

function buildCategoryJsonLd(config, listings = []) {
  const faqEntities = (config.faqs || []).map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  }));

  const pageDateModified = getMostRecentLastVerified(listings);
  const graph = [
    buildOrganizationNode(),
    buildWebSiteNode(),
    {
      "@type": "CollectionPage",
      "@id": `${CANONICAL_ORIGIN}${config.pathname}#collection`,
      name: config.schemaName || config.title,
      description: config.description,
      url: `${CANONICAL_ORIGIN}${config.pathname}`,
      about: config.schemaAbout,
      inLanguage: "en-US",
      isPartOf: { "@id": `${CANONICAL_ORIGIN}/#website` },
      publisher: { "@id": `${CANONICAL_ORIGIN}/#organization` },
      ...(pageDateModified ? { dateModified: pageDateModified } : {}),
    },
    {
      "@type": "WebPage",
      "@id": `${CANONICAL_ORIGIN}${config.pathname}#webpage`,
      url: `${CANONICAL_ORIGIN}${config.pathname}`,
      name: config.title,
      description: config.description,
      isPartOf: { "@id": `${CANONICAL_ORIGIN}${config.pathname}#collection` },
      about: { "@type": "Thing", name: config.schemaAbout },
      inLanguage: "en-US",
      ...(pageDateModified ? { dateModified: pageDateModified } : {}),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${CANONICAL_ORIGIN}${config.pathname}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${CANONICAL_ORIGIN}/` },
        { "@type": "ListItem", position: 2, name: config.h1, item: `${CANONICAL_ORIGIN}${config.pathname}` },
      ],
    },
  ];

  if (faqEntities.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${CANONICAL_ORIGIN}${config.pathname}#faq`,
      mainEntity: faqEntities,
    });
  }

  const providerItemList = buildProviderItemList(listings, {
    id: `${CANONICAL_ORIGIN}${config.pathname}#listings`,
    name: config.schemaName || config.title,
  });
  if (providerItemList) {
    graph.push(providerItemList);
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

function renderBlogPreview(post) {
  if (Array.isArray(post.blocks)) {
    return post.blocks
      .filter((block) => block.type === "p" && block.text)
      .slice(0, 3)
      .map((block) => `<p>${escapeHtml(block.text)}</p>`)
      .join("\n  ");
  }
  if (Array.isArray(post.body)) {
    return post.body
      .slice(0, 3)
      .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
      .join("\n  ");
  }
  return "";
}

function appendRelatedBlogExcerpt(config) {
  if (!config.relatedBlogSlug) {
    return "";
  }
  const post = getBlogPostBySlug(config.relatedBlogSlug);
  if (!post) {
    return "";
  }
  const excerpt = post.excerpt || "";
  const bodyPreview = renderBlogPreview(post);
  const href = `/blog/${encodeURIComponent(post.slug)}`;
  return `<h2>From The Daily Wag</h2>
  <h3><a href="${href}">${escapeHtml(post.title)}</a></h3>
  <p>${escapeHtml(excerpt)}</p>
  ${bodyPreview}
  <p><a href="${href}">Read the full article</a></p>`;
}

function buildSectionsHtml(sections) {
  return (sections || [])
    .map(
      (section) =>
        `<h3>${escapeHtml(section.heading)}</h3>${section.paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join("")}`,
    )
    .join("\n  ");
}

function buildCategoryGuideHtml(config) {
  const heading = config.guideHeading;
  const intro = config.guideIntro;
  const sections = config.sections || [];
  if (!heading && !intro && !sections.length) {
    return "";
  }
  const parts = [];
  if (heading) {
    parts.push(`<h2>${escapeHtml(heading)}</h2>`);
  }
  if (intro) {
    parts.push(`<p>${escapeHtml(intro)}</p>`);
  }
  if (sections.length) {
    parts.push(buildSectionsHtml(sections));
  }
  return parts.join("\n  ");
}

const CITY_LINK_CITIES = { florence: "Florence", darlington: "Darlington", hartsville: "Hartsville" };

const CITY_LINK_ANCHORS = {
  "/grooming": {
    florence: "compare local dog groomers in Florence SC",
    darlington: "dog groomers in Darlington SC",
    hartsville: "dog groomers in Hartsville SC",
  },
  "/training": {
    florence: "dog trainers in Florence SC",
    darlington: "dog trainers in Darlington SC",
    hartsville: "dog trainers in Hartsville SC",
  },
  "/boarding": {
    florence: "pet boarding in Florence SC",
    darlington: "pet boarding in Darlington SC",
    hartsville: "pet boarding in Hartsville SC",
  },
  "/sitters": {
    florence: "pet sitters in Florence SC",
    darlington: "pet sitters in Darlington SC",
    hartsville: "pet sitters in Hartsville SC",
  },
  "/vet-care": {
    florence: "veterinarians in Florence SC",
    darlington: "veterinarians in Darlington SC",
    hartsville: "veterinarians in Hartsville SC",
  },
};

function buildCityLinksHtml(pathname) {
  const anchors = CITY_LINK_ANCHORS[pathname];
  if (!anchors) {
    return "";
  }
  const links = Object.keys(CITY_LINK_CITIES)
    .map((slug) => `<a href="${escapeHtml(`${pathname}/${slug}`)}">${escapeHtml(anchors[slug])}</a>`)
    .join(", ");
  return `<h2>Browse by city</h2>
  <p>Find providers near you: ${links}.</p>`;
}

// "Local guide: …" links for published guides only; drafts render nothing.
function buildLocalGuideLinksHtml(categoryPath, citySlug = null) {
  const { getPublishedGuidesForCategory } = require("./guides");
  const guides = getPublishedGuidesForCategory(categoryPath, citySlug);
  if (!guides.length) {
    return "";
  }
  return guides
    .map(
      (guide) =>
        `<p>Local guide: <a href="/guides/${escapeHtml(guide.slug)}">${escapeHtml(guide.title)}</a></p>`,
    )
    .join("\n  ");
}

function buildCategorySeoContentHtml(config, listings = []) {
  const faqs = (config.faqs || [])
    .map((faq) => `<p><strong>${escapeHtml(faq.q)}</strong> ${escapeHtml(faq.a)}</p>`)
    .join("\n  ");
  const external = (config.externalLinks || [])
    .map((link) => `<a href="${escapeHtml(link.href)}" rel="noopener noreferrer">${escapeHtml(link.label)}</a>`)
    .join(", ");
  const related = (config.relatedLinks || [])
    .map((link) => `<a href="${escapeHtml(link.href)}">${escapeHtml(link.label)}</a>`)
    .join(", ");
  const resourcesHeading = config.resourcesHeading || "Trusted pet care resources";

  return `<div id="seo-content" class="seo-content">
  <h1>${escapeHtml(config.h1)}</h1>
  <p>${escapeHtml(config.intro)}</p>
  <p>Directory questions or listing requests: <a href="mailto:${escapeHtml(DIRECTORY_CONTACT_EMAIL)}">${escapeHtml(DIRECTORY_CONTACT_EMAIL)}</a>.</p>
  ${buildListingsSectionHtml(listings)}
  ${buildLocalGuideLinksHtml(config.pathname)}
  ${buildCityLinksHtml(config.pathname)}
  ${buildCategoryGuideHtml(config)}
  ${appendRelatedBlogExcerpt(config)}
  <h2>Frequently asked questions</h2>
  ${faqs}
  <h2>${escapeHtml(resourcesHeading)}</h2>
  <p>${external}.</p>
  <h2>Related pages</h2>
  <p>${related}.</p>
</div>`;
}

function replaceSeoContentBlock(html, seoContentHtml) {
  const pattern = new RegExp(
    `${SEO_CONTENT_START.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[\\s\\S]*?${SEO_CONTENT_END.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`,
  );
  return html.replace(
    pattern,
    `${SEO_CONTENT_START}\n    ${seoContentHtml}\n    ${SEO_CONTENT_END}`,
  );
}

function replaceJsonLd(html, jsonLd) {
  return html.replace(
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/i,
    `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`,
  );
}

function injectCategoryEnhancements(html, pathname, listings = []) {
  const config = getCategoryConfig(pathname);
  if (!config) {
    return html;
  }
  let result = html;
  result = replaceSeoContentBlock(result, buildCategorySeoContentHtml(config, listings));
  result = replaceJsonLd(result, buildCategoryJsonLd(config, listings));
  return result;
}

function buildCategorySeoClientScript() {
  const payload = {};
  for (const config of Object.values(CATEGORY_PAGES)) {
    payload[config.pathname] = {
      title: config.title,
      description: config.description,
      canonical: `${CANONICAL_ORIGIN}${config.pathname}`,
      ogImage: `${CANONICAL_ORIGIN}/share-card.jpg`,
      ogType: "website",
    };
  }
  for (const [pathname, config] of Object.entries(SIMPLE_PAGE_SEO)) {
    payload[pathname] = {
      title: config.title,
      description: config.description,
      canonical: `${CANONICAL_ORIGIN}${pathname}`,
      ogImage: `${CANONICAL_ORIGIN}/share-card.jpg`,
      ogType: "website",
    };
  }
  return `window.__peedeeCategorySeo=${JSON.stringify(payload)};`;
}

module.exports = {
  resolveCategorySeoForPathname,
  injectCategoryEnhancements,
  getCategoryConfig,
  buildCategoryGuideHtml,
  buildLocalGuideLinksHtml,
  buildCategorySeoClientScript,
};

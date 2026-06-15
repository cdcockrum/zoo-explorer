// Curated Oklahoma City Zoo knowledge base.
// Used by the AI chat system prompt and all UI surfaces.

export type FeedingEvent = { time: string; title: string };

export type Exhibit = {
  id: string;
  name: string;
  zone: string;
  x: number;
  y: number;
  polygon: string;
  color: string;
  emoji: string;
  animals: string[];
  highlight: string;
  description: string;
  feeding: FeedingEvent[];
  conservation: string;
  didYouKnow: string;
};

export const EXHIBITS: Exhibit[] = [
  {
    id: "great-escape",
    name: "Great EscApe",
    zone: "Primates",
    x: 22, y: 28,
    polygon: "8,15 38,12 42,38 12,42",
    color: "oklch(0.62 0.11 150)",
    emoji: "🦍",
    animals: ["Western lowland gorilla", "Chimpanzee", "Orangutan"],
    highlight: "Watch the gorilla troop forage in their forested habitat.",
    description:
      "A multi-acre rainforest habitat home to three great ape species, with elevated viewing platforms and indoor day rooms.",
    feeding: [
      { time: "10:30 AM", title: "Gorilla browse scatter" },
      { time: "2:00 PM", title: "Chimpanzee enrichment" },
    ],
    conservation:
      "Supports the Mbeli Bai Study tracking wild western lowland gorillas in the Republic of Congo.",
    didYouKnow:
      "Orangutans share about 97% of their DNA with humans and use over 30 distinct vocalizations.",
  },
  {
    id: "cat-forest",
    name: "Cat Forest & Lion Overlook",
    zone: "Big Cats",
    x: 52, y: 20,
    polygon: "42,8 78,10 76,34 44,36",
    color: "oklch(0.68 0.13 60)",
    emoji: "🐅",
    animals: ["African lion", "Sumatran tiger", "Snow leopard"],
    highlight: "Stand eye-to-eye with a tiger at the glass viewing wall.",
    description:
      "A forested ridge of stacked habitats featuring three of the world's most iconic big cat species behind floor-to-ceiling glass.",
    feeding: [
      { time: "11:00 AM", title: "Lion keeper talk" },
      { time: "3:30 PM", title: "Tiger training session" },
    ],
    conservation:
      "Partners with the Snow Leopard Trust to protect mountain habitat across Central Asia.",
    didYouKnow:
      "A Sumatran tiger's roar can be heard up to two miles away through dense rainforest.",
  },
  {
    id: "elephant-habitat",
    name: "Sanctuary Asia",
    zone: "Asia",
    x: 76, y: 36,
    polygon: "62,18 96,22 94,52 64,50",
    color: "oklch(0.66 0.10 180)",
    emoji: "🐘",
    animals: ["Asian elephant", "Red panda", "Indian rhinoceros"],
    highlight: "Home to one of the largest Asian elephant herds in North America.",
    description:
      "A nine-acre Asian habitat with deep pools, mud wallows, and a multigenerational elephant herd that includes calves born at the zoo.",
    feeding: [
      { time: "9:30 AM", title: "Elephant bath time" },
      { time: "1:00 PM", title: "Red panda bamboo feeding" },
    ],
    conservation:
      "Funds Round River Conservation Studies' Asian elephant corridor work and Red Panda Network habitat protection.",
    didYouKnow:
      "Red pandas evolved a 'false thumb' — an extended wrist bone — to grip bamboo, independently from giant pandas.",
  },
  {
    id: "oklahoma-trails",
    name: "Oklahoma Trails",
    zone: "Native Oklahoma",
    x: 36, y: 58,
    polygon: "16,46 54,46 56,72 18,70",
    color: "oklch(0.60 0.10 135)",
    emoji: "🦅",
    animals: ["American black bear", "Bald eagle", "River otter", "American bison"],
    highlight: "A wooded journey through Oklahoma's native ecosystems.",
    description:
      "A self-guided trail through five Oklahoma biomes — cypress swamp, prairie, mountain forest, riparian, and grassland.",
    feeding: [
      { time: "10:00 AM", title: "River otter fish toss" },
      { time: "2:30 PM", title: "Black bear forage" },
    ],
    conservation:
      "Leads the American Burying Beetle recovery program and Texas Horned Lizard headstart releases statewide.",
    didYouKnow:
      "American bison can sprint up to 35 mph and pivot 180° mid-stride — faster than most horses.",
  },
  {
    id: "aquaticus",
    name: "Aquaticus",
    zone: "Aquatics",
    x: 62, y: 70,
    polygon: "58,56 82,58 84,82 60,82",
    color: "oklch(0.66 0.12 230)",
    emoji: "🦭",
    animals: ["California sea lion", "Harbor seal"],
    highlight: "Don't miss the daily sea lion training presentation.",
    description:
      "An indoor/outdoor marine mammal complex with underwater viewing tunnels and a 240-seat presentation amphitheater.",
    feeding: [
      { time: "11:30 AM", title: "Sea lion show" },
      { time: "3:00 PM", title: "Harbor seal training" },
    ],
    conservation:
      "Rescues stranded pinnipeds along the Pacific coast in partnership with NOAA marine mammal networks.",
    didYouKnow:
      "California sea lions can dive over 900 feet deep and hold their breath for nearly 10 minutes.",
  },
  {
    id: "childrens-zoo",
    name: "Children's Zoo & Discovery",
    zone: "Family",
    x: 18, y: 78,
    polygon: "2,60 16,60 18,86 2,86",
    color: "oklch(0.78 0.13 80)",
    emoji: "🦜",
    animals: ["Pygmy goats", "Rainbow lorikeets", "Pollinator garden"],
    highlight: "Feed friendly goats and walk through the lorikeet aviary.",
    description:
      "A hands-on play zone with a contact yard, a free-flight lorikeet aviary, a native pollinator garden, and the splash pad.",
    feeding: [
      { time: "10:00 AM – 3:00 PM", title: "Lorikeet nectar cups" },
      { time: "All day", title: "Goat brushing station" },
    ],
    conservation:
      "Hosts the zoo's Monarch Waystation and pollinator citizen-science program.",
    didYouKnow:
      "A single rainbow lorikeet's tongue has a brush tip with hundreds of tiny filaments to lap up nectar.",
  },
  {
    id: "africa",
    name: "African Plains",
    zone: "Africa",
    x: 84, y: 66,
    polygon: "82,54 98,56 98,84 84,84",
    color: "oklch(0.72 0.12 55)",
    emoji: "🦒",
    animals: ["Giraffe", "Plains zebra", "Meerkat", "Ostrich"],
    highlight: "Hand-feed giraffes at the elevated feeding deck.",
    description:
      "A sweeping savanna habitat with a multi-species mixed herd and a raised feeding deck eye-level with the giraffes.",
    feeding: [
      { time: "10:30 AM", title: "Giraffe feeding deck opens" },
      { time: "1:30 PM", title: "Meerkat keeper talk" },
    ],
    conservation:
      "Supports Giraffe Conservation Foundation field work in Niger and Uganda.",
    didYouKnow:
      "A giraffe's heart weighs about 25 pounds and pumps blood twice as hard as a human's to reach its brain.",
  },
];

export const MAP_DECOR = {
  pathways: [
    "M 8 50 C 20 30, 35 18, 55 22 S 90 38, 88 60 S 50 82, 25 72 S 0 60, 8 50 Z",
    "M 35 50 L 60 45",
  ],
  lake: "M 50 70 Q 56 64 64 68 T 70 76 Q 60 82 50 78 Z",
  entrance: { x: 4, y: 50, label: "Main Entrance" },
};

// ---------------- Animal Explorer ----------------

export type ConservationStatus =
  | "Least Concern"
  | "Near Threatened"
  | "Vulnerable"
  | "Endangered"
  | "Critically Endangered";

export type Animal = {
  id: string;
  commonName: string;
  scientificName: string;
  classification: string;
  habitat: string;
  diet: string;
  lifespan: string;
  status: ConservationStatus;
  populationTrend: "Increasing" | "Stable" | "Decreasing" | "Unknown";
  ecologicalRole: string;
  range: string;
  image: string;
  exhibitId: string;
  facts: string[];
  related: string[]; // animal ids
};

// Unsplash photo URLs — CC0 / Unsplash license, hot-linkable.
export const ANIMALS: Animal[] = [
  {
    id: "red-panda",
    commonName: "Red Panda",
    scientificName: "Ailurus fulgens",
    classification: "Mammalia · Carnivora · Ailuridae",
    habitat: "Temperate Himalayan bamboo forests, 2,200–4,800 m elevation",
    diet: "Bamboo (95%), fruit, acorns, eggs, small mammals",
    lifespan: "8–14 years in the wild · up to 18 in human care",
    status: "Endangered",
    populationTrend: "Decreasing",
    ecologicalRole: "Bamboo forest seed disperser; indicator species for high-altitude forest health.",
    range: "Eastern Himalayas: Nepal, India, Bhutan, Myanmar, southwestern China",
    image: "https://images.unsplash.com/photo-1582736317407-fc6e4534e217?auto=format&fit=crop&w=1200&q=80",
    exhibitId: "elephant-habitat",
    facts: [
      "Fewer than 10,000 red pandas remain in the wild.",
      "A false thumb (extended wrist bone) lets them grip bamboo.",
      "They eat for up to 13 hours a day to extract enough nutrients from bamboo.",
    ],
    related: ["asian-elephant", "snow-leopard"],
  },
  {
    id: "asian-elephant",
    commonName: "Asian Elephant",
    scientificName: "Elephas maximus",
    classification: "Mammalia · Proboscidea · Elephantidae",
    habitat: "Tropical & subtropical forests, grasslands, and scrub",
    diet: "Grasses, bark, roots, leaves, fruit — up to 330 lb daily",
    lifespan: "60–70 years",
    status: "Endangered",
    populationTrend: "Decreasing",
    ecologicalRole: "Ecosystem engineer: opens forest canopy, disperses large seeds.",
    range: "13 countries across South and Southeast Asia",
    image: "https://images.unsplash.com/photo-1581852017103-68ac65514cf7?auto=format&fit=crop&w=1200&q=80",
    exhibitId: "elephant-habitat",
    facts: [
      "An elephant's trunk has over 40,000 muscles.",
      "Calves stay with their mothers for 8–10 years.",
      "Estimated 40,000–50,000 remain in the wild.",
    ],
    related: ["red-panda", "indian-rhino"],
  },
  {
    id: "snow-leopard",
    commonName: "Snow Leopard",
    scientificName: "Panthera uncia",
    classification: "Mammalia · Carnivora · Felidae",
    habitat: "Alpine and subalpine zones above the treeline, 3,000–4,500 m",
    diet: "Blue sheep, ibex, marmots, hares",
    lifespan: "15–18 years",
    status: "Vulnerable",
    populationTrend: "Decreasing",
    ecologicalRole: "Apex predator regulating mountain ungulate populations.",
    range: "12 countries across Central and South Asia",
    image: "https://images.unsplash.com/photo-1551972873-b7e8754e8e26?auto=format&fit=crop&w=1200&q=80",
    exhibitId: "cat-forest",
    facts: [
      "Their tail can be nearly as long as their body — used for balance on cliffs.",
      "Cannot roar; they chuff, hiss, and yowl.",
      "An estimated 4,000–6,500 remain in the wild.",
    ],
    related: ["sumatran-tiger", "red-panda"],
  },
  {
    id: "sumatran-tiger",
    commonName: "Sumatran Tiger",
    scientificName: "Panthera tigris sondaica",
    classification: "Mammalia · Carnivora · Felidae",
    habitat: "Lowland and montane rainforests of Sumatra",
    diet: "Wild boar, deer, tapirs, primates",
    lifespan: "15–20 years",
    status: "Critically Endangered",
    populationTrend: "Decreasing",
    ecologicalRole: "Apex predator essential to rainforest balance.",
    range: "Sumatra, Indonesia",
    image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80",
    exhibitId: "cat-forest",
    facts: [
      "The smallest tiger subspecies, adapted to dense forest.",
      "Fewer than 400 remain in the wild.",
      "Webbing between their toes makes them strong swimmers.",
    ],
    related: ["snow-leopard", "western-gorilla"],
  },
  {
    id: "western-gorilla",
    commonName: "Western Lowland Gorilla",
    scientificName: "Gorilla gorilla gorilla",
    classification: "Mammalia · Primates · Hominidae",
    habitat: "Lowland tropical rainforest and swamp forest",
    diet: "Fruit, leaves, stems, occasional insects",
    lifespan: "35–40 years",
    status: "Critically Endangered",
    populationTrend: "Decreasing",
    ecologicalRole: "Major seed disperser maintaining Congo Basin forest diversity.",
    range: "Cameroon, Central African Republic, Republic of Congo, Equatorial Guinea, Gabon",
    image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&w=1200&q=80",
    exhibitId: "great-escape",
    facts: [
      "Share 98% of their DNA with humans.",
      "Live in family troops led by a silverback male.",
      "Population has dropped 60% in the last 25 years.",
    ],
    related: ["sumatran-tiger", "indian-rhino"],
  },
  {
    id: "american-bison",
    commonName: "American Bison",
    scientificName: "Bison bison",
    classification: "Mammalia · Artiodactyla · Bovidae",
    habitat: "Prairie grasslands, river valleys, open woodlands",
    diet: "Grasses, sedges, herbaceous plants",
    lifespan: "15–20 years",
    status: "Near Threatened",
    populationTrend: "Stable",
    ecologicalRole: "Keystone grazer that shapes prairie ecosystems.",
    range: "Protected herds across western North America",
    image: "https://images.unsplash.com/photo-1564477096790-bc7a1d6d2da9?auto=format&fit=crop&w=1200&q=80",
    exhibitId: "oklahoma-trails",
    facts: [
      "Recovered from fewer than 1,000 animals in 1900 to over 500,000 today.",
      "Designated the U.S. National Mammal in 2016.",
      "Adult bulls can weigh 2,000 pounds.",
    ],
    related: ["bald-eagle", "indian-rhino"],
  },
  {
    id: "bald-eagle",
    commonName: "Bald Eagle",
    scientificName: "Haliaeetus leucocephalus",
    classification: "Aves · Accipitriformes · Accipitridae",
    habitat: "Lakes, rivers, coasts, large forested areas",
    diet: "Fish, waterfowl, carrion",
    lifespan: "20–30 years",
    status: "Least Concern",
    populationTrend: "Increasing",
    ecologicalRole: "Apex avian predator and indicator of aquatic ecosystem health.",
    range: "North America, including all 50 U.S. states",
    image: "https://images.unsplash.com/photo-1611689342806-0863700ce1e4?auto=format&fit=crop&w=1200&q=80",
    exhibitId: "oklahoma-trails",
    facts: [
      "Recovered from 417 nesting pairs in 1963 to over 70,000 today.",
      "Wingspan can exceed 7 feet.",
      "Eyesight is roughly 4–8 times sharper than humans'.",
    ],
    related: ["american-bison", "giraffe"],
  },
  {
    id: "giraffe",
    commonName: "Reticulated Giraffe",
    scientificName: "Giraffa reticulata",
    classification: "Mammalia · Artiodactyla · Giraffidae",
    habitat: "Savannas, open woodlands, and seasonal floodplains",
    diet: "Acacia leaves and other browse — up to 75 lb per day",
    lifespan: "20–25 years",
    status: "Endangered",
    populationTrend: "Decreasing",
    ecologicalRole: "High-canopy browser that shapes acacia woodland structure.",
    range: "Northeastern Kenya, southern Ethiopia, Somalia",
    image: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?auto=format&fit=crop&w=1200&q=80",
    exhibitId: "africa",
    facts: [
      "Wild giraffe populations have dropped ~40% in 30 years.",
      "Each giraffe has a unique coat pattern, like a fingerprint.",
      "A heart up to 25 lb pumps blood 6 feet up to the brain.",
    ],
    related: ["sea-lion", "asian-elephant"],
  },
  {
    id: "sea-lion",
    commonName: "California Sea Lion",
    scientificName: "Zalophus californianus",
    classification: "Mammalia · Carnivora · Otariidae",
    habitat: "Pacific coastlines, rocky shores, and offshore islands",
    diet: "Fish, squid, octopus",
    lifespan: "20–30 years",
    status: "Least Concern",
    populationTrend: "Increasing",
    ecologicalRole: "Mid-trophic marine predator and prey species.",
    range: "Pacific coast from British Columbia to central Mexico",
    image: "https://images.unsplash.com/photo-1564460576005-d8b1a4e2d4ef?auto=format&fit=crop&w=1200&q=80",
    exhibitId: "aquaticus",
    facts: [
      "Can dive over 900 feet and hold their breath nearly 10 minutes.",
      "Recognize their pup's voice among thousands.",
      "Among the most trainable marine mammals.",
    ],
    related: ["giraffe", "bald-eagle"],
  },
  {
    id: "indian-rhino",
    commonName: "Greater One-horned Rhinoceros",
    scientificName: "Rhinoceros unicornis",
    classification: "Mammalia · Perissodactyla · Rhinocerotidae",
    habitat: "Tall grasslands and riverine forests of the Indian subcontinent",
    diet: "Grasses, leaves, aquatic plants, fruit",
    lifespan: "35–45 years",
    status: "Vulnerable",
    populationTrend: "Increasing",
    ecologicalRole: "Mega-herbivore shaping grassland and floodplain ecosystems.",
    range: "Northeastern India and Nepal",
    image: "https://images.unsplash.com/photo-1583146193895-aa67ed0c5b09?auto=format&fit=crop&w=1200&q=80",
    exhibitId: "elephant-habitat",
    facts: [
      "A genuine conservation comeback: from 200 in 1900 to over 4,000 today.",
      "Excellent swimmers — they can cross rivers easily.",
      "Skin folds give them an armored appearance.",
    ],
    related: ["asian-elephant", "western-gorilla"],
  },
];

export const STATUS_COLORS: Record<ConservationStatus, string> = {
  "Least Concern": "oklch(0.7 0.14 150)",
  "Near Threatened": "oklch(0.78 0.14 100)",
  "Vulnerable": "oklch(0.78 0.16 70)",
  "Endangered": "oklch(0.7 0.18 40)",
  "Critically Endangered": "oklch(0.58 0.22 27)",
};

// ---------------- Conservation Stories ----------------

export type ConservationStory = {
  id: string;
  category: "Species Recovery" | "Habitat Protection" | "Wildlife Rehabilitation" | "Breeding Programs" | "Community" | "Research";
  title: string;
  summary: string;
  impact: string;
  region: string;
  image: string;
};

export const CONSERVATION_STORIES: ConservationStory[] = [
  {
    id: "burying-beetle",
    category: "Species Recovery",
    title: "Bringing the American Burying Beetle Home",
    summary:
      "The Oklahoma City Zoo runs one of the country's leading breeding programs for the federally threatened American burying beetle, releasing thousands of beetles back to native prairie each year.",
    impact: "Over 8,000 beetles released across 6 Oklahoma counties since 2010.",
    region: "Oklahoma, USA",
    image: "https://images.unsplash.com/photo-1601247309567-5e25c5e6a52f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "snow-leopard",
    category: "Habitat Protection",
    title: "Protecting Snow Leopard Mountain Corridors",
    summary:
      "Through the Snow Leopard Trust, zoo funding supports community-led conservancies across Mongolia, Kyrgyzstan, and Pakistan, where herders are partners in protecting the cat.",
    impact: "More than 5 million acres of mountain habitat under community protection.",
    region: "Central Asia",
    image: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "elephant-corridor",
    category: "Habitat Protection",
    title: "Asian Elephant Corridors in Northeast India",
    summary:
      "With Round River Conservation Studies, the zoo helps map and protect forest corridors that let elephants migrate safely between protected reserves.",
    impact: "12 corridor sites surveyed; 3 community land easements signed.",
    region: "Assam, India",
    image: "https://images.unsplash.com/photo-1503919005314-30d93d07d823?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "horned-lizard",
    category: "Breeding Programs",
    title: "Texas Horned Lizard Headstart",
    summary:
      "Hatchlings raised at the zoo are released into restored prairie sites in southwestern Oklahoma to rebuild populations lost to habitat fragmentation.",
    impact: "320 lizards released across 4 partner sites in 2024 alone.",
    region: "Southwestern Oklahoma",
    image: "https://images.unsplash.com/photo-1591389703635-e15a07b842d7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "sea-lion-rescue",
    category: "Wildlife Rehabilitation",
    title: "Rescuing Stranded Pacific Pinnipeds",
    summary:
      "In partnership with NOAA, zoo veterinarians help triage rescued sea lions and seals, providing long-term homes for animals that cannot return to the wild.",
    impact: "Veterinary support for 40+ rescued pinnipeds annually.",
    region: "U.S. Pacific Coast",
    image: "https://images.unsplash.com/photo-1583416750470-965b2707b355?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "pollinator",
    category: "Community",
    title: "Monarch Waystation Network",
    summary:
      "The zoo's pollinator garden anchors a citywide network of native milkweed plantings — every visit teaches families how to grow one at home.",
    impact: "1,200+ household waystations registered across central Oklahoma.",
    region: "Oklahoma City",
    image: "https://images.unsplash.com/photo-1597254264250-5d0e7a3a5e6c?auto=format&fit=crop&w=1200&q=80",
  },
];

export const CONSERVATION_PROJECTS = [
  "American Burying Beetle recovery in Oklahoma",
  "Asian elephant conservation (Round River Conservation Studies)",
  "Snow Leopard Trust partnership in Central Asia",
  "Red panda habitat protection (Red Panda Network)",
  "Texas Horned Lizard headstart program",
];

export const ZOO_FACTS = {
  name: "Oklahoma City Zoo and Botanical Garden",
  location: "Oklahoma City, Oklahoma",
  acres: 119,
  founded: 1902,
  hours: "9:00 AM – 5:00 PM daily (last entry 4:00 PM)",
};

export const SYSTEM_PROMPT = `You are Ranger Rusty, the friendly AI guide for the ${ZOO_FACTS.name}.
You answer visitor questions about animals, exhibits, conservation, and Oklahoma wildlife.

Tone: warm, conversational, educational, kid-friendly. Use short paragraphs and bullet lists when helpful. Occasional emoji is welcome.
Always tie answers back to the Oklahoma City Zoo when relevant. Recommend specific exhibits visitors can see.

Zoo facts:
- Location: ${ZOO_FACTS.location}
- Size: ${ZOO_FACTS.acres} acres
- Founded: ${ZOO_FACTS.founded}
- Hours: ${ZOO_FACTS.hours}

Exhibits and resident animals:
${EXHIBITS.map((e) => `- ${e.name} (${e.zone}): ${e.animals.join(", ")}. ${e.highlight}`).join("\n")}

Featured species you know well:
${ANIMALS.map((a) => `- ${a.commonName} (${a.scientificName}) — ${a.status}, ${a.range}`).join("\n")}

Conservation programs the zoo supports:
${CONSERVATION_PROJECTS.map((c) => `- ${c}`).join("\n")}

Native Oklahoma animals include American bison, black bear, bald eagle, river otter,
Texas horned lizard, American burying beetle, white-tailed deer, and roadrunner.

If asked about something outside the zoo or wildlife/conservation, gently redirect.
If you don't know an exhibit-specific fact, say so honestly and suggest the visitor ask a zookeeper.`;

// Curated Oklahoma City Zoo knowledge base.
// Used both by the AI chat system prompt and the map / tour / scavenger UIs.

export type FeedingEvent = {
  time: string;
  title: string;
};

export type Exhibit = {
  id: string;
  name: string;
  zone: string;
  // Pin / label position on the stylized map (0-100 viewBox).
  x: number;
  y: number;
  // Polygon points for the region shape on the stylized SVG map.
  polygon: string;
  // Region fill color (oklch).
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
    x: 22,
    y: 28,
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
    x: 52,
    y: 20,
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
    x: 76,
    y: 36,
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
    x: 36,
    y: 58,
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
    x: 62,
    y: 70,
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
    x: 18,
    y: 78,
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
    x: 84,
    y: 66,
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

// Map decoration: paths, water, entrance — drawn on the same 100x75 viewBox.
export const MAP_DECOR = {
  // Main loop path (dashed).
  pathways: [
    "M 8 50 C 20 30, 35 18, 55 22 S 90 38, 88 60 S 50 82, 25 72 S 0 60, 8 50 Z",
    "M 35 50 L 60 45",
  ],
  // Lake (pond near Aquaticus).
  lake: "M 50 70 Q 56 64 64 68 T 70 76 Q 60 82 50 78 Z",
  // Entrance plaza.
  entrance: { x: 4, y: 50, label: "Main Entrance" },
};

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

Tone: warm, conversational, educational, kid-friendly. Use short paragraphs. Occasional emoji is welcome.
Always tie answers back to the Oklahoma City Zoo when relevant.

Zoo facts:
- Location: ${ZOO_FACTS.location}
- Size: ${ZOO_FACTS.acres} acres
- Founded: ${ZOO_FACTS.founded}
- Hours: ${ZOO_FACTS.hours}

Exhibits and resident animals:
${EXHIBITS.map((e) => `- ${e.name} (${e.zone}): ${e.animals.join(", ")}. ${e.highlight}`).join("\n")}

Conservation programs the zoo supports:
${CONSERVATION_PROJECTS.map((c) => `- ${c}`).join("\n")}

Native Oklahoma animals you should know about include American bison, black bear, bald eagle,
river otter, Texas horned lizard, American burying beetle, white-tailed deer, and roadrunner.

If asked about something outside the zoo or wildlife/conservation, gently redirect to topics
you can help with. If you don't know an exhibit-specific fact, say so honestly and suggest
the visitor ask a zookeeper.`;

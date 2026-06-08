// Curated Oklahoma City Zoo knowledge base.
// Used both by the AI chat system prompt and the map / tour / scavenger UIs.

export type Exhibit = {
  id: string;
  name: string;
  zone: string;
  // Approximate position on our stylized map (percentage 0-100).
  x: number;
  y: number;
  animals: string[];
  highlight: string;
  emoji: string;
};

export const EXHIBITS: Exhibit[] = [
  {
    id: "great-escape",
    name: "Great EscApe",
    zone: "Primates",
    x: 28,
    y: 30,
    animals: ["Western lowland gorilla", "Chimpanzee", "Orangutan"],
    highlight: "Watch the gorilla troop forage in their forested habitat.",
    emoji: "🦍",
  },
  {
    id: "cat-forest",
    name: "Cat Forest & Lion Overlook",
    zone: "Big Cats",
    x: 55,
    y: 22,
    animals: ["African lion", "Sumatran tiger", "Snow leopard"],
    highlight: "Stand eye-to-eye with a tiger at the glass viewing wall.",
    emoji: "🐅",
  },
  {
    id: "elephant-habitat",
    name: "Sanctuary Asia",
    zone: "Asia",
    x: 72,
    y: 38,
    animals: ["Asian elephant", "Red panda", "Indian rhinoceros"],
    highlight: "Home to one of the largest Asian elephant herds in North America.",
    emoji: "🐘",
  },
  {
    id: "oklahoma-trails",
    name: "Oklahoma Trails",
    zone: "Native Oklahoma",
    x: 40,
    y: 60,
    animals: ["American black bear", "Bald eagle", "River otter", "American bison"],
    highlight: "A wooded journey through Oklahoma's native ecosystems.",
    emoji: "🦅",
  },
  {
    id: "aquaticus",
    name: "Aquaticus",
    zone: "Aquatics",
    x: 62,
    y: 70,
    animals: ["California sea lion", "Harbor seal"],
    highlight: "Don't miss the daily sea lion training presentation.",
    emoji: "🦭",
  },
  {
    id: "childrens-zoo",
    name: "Children's Zoo & Discovery",
    zone: "Family",
    x: 22,
    y: 75,
    animals: ["Goats", "Lorikeets", "Pollinator garden"],
    highlight: "Feed friendly goats and walk through the lorikeet aviary.",
    emoji: "🦜",
  },
  {
    id: "africa",
    name: "African Plains",
    zone: "Africa",
    x: 82,
    y: 62,
    animals: ["Giraffe", "Zebra", "Meerkat", "Ostrich"],
    highlight: "Hand-feed giraffes at the elevated feeding deck.",
    emoji: "🦒",
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

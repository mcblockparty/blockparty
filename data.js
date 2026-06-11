// ============================================================
//  BLOCK PARTY — MODEL DATA
//  To add a new model, copy one of the entries below and fill
//  in your details. No other files need to be changed.
// ============================================================

const COLLECTIONS = {
  ssc: {
    name: "Seaside Suburbs Collection",
    code: "ssc",
    description: "Coastal-inspired furniture with a relaxed, sun-bleached aesthetic.",
  }
};

const MODELS = [
  {
    id: "ssc077",
    name: "Floor Hammock Stand",
    collection: "ssc",
    number: "077",
    category: "seating",
    room: ["outdoor", "bedroom", "living"],
    description: "A freestanding hammock with rope detailing converted from The Sims 4. Comes in 13 fabric colors.",
    baseItem: "Leather Horse Armor",
    anvilCode: "ssc077",
    variants: [
      { code: "a", name: "Natural", color: "#D4B483" },
      { code: "b", name: "White",   color: "#F0EDE8" },
      { code: "c", name: "Light Gray", color: "#C8C5BF" },
      { code: "d", name: "Slate",   color: "#8A8C8F" },
      { code: "e", name: "Sage",    color: "#B8CBBA" },
      { code: "f", name: "Muted Green", color: "#899E8B" },
      { code: "g", name: "Sky Blue", color: "#B8D0DC" },
      { code: "h", name: "Ocean",   color: "#5A7EA0" },
      { code: "i", name: "Blush",   color: "#E8C4C0" },
      { code: "j", name: "Cream",   color: "#EAE0D0" },
      { code: "k", name: "Tan",     color: "#B09878" },
      { code: "l", name: "Terracotta", color: "#C07060" },
      { code: "m", name: "Peach",   color: "#D4956A" },
    ],
    positions: [
      { code: "",       name: "Default", description: "Standard floor placement" },
      { code: "center", name: "Center",  description: "Centered on block" },
    ],
    tags: ["hammock", "relaxed", "rope", "coastal"],
    colorTags: ["neutral", "green", "blue", "pink", "brown"],
    images: {
      // format: variantCode -> filename in images/ssc077/
      a: "a.png", b: "b.png", c: "c.png", d: "d.png", e: "e.png",
      f: "f.png", g: "g.png", h: "h.png", i: "i.png", j: "j.png",
      k: "k.png", l: "l.png", m: "m.png",
      pos_default: "ssc077.png",
      pos_center:  "ssc077center.png",
    }
  },
  {
    id: "ssc076",
    name: "Hanging Fern Sphere",
    collection: "ssc",
    number: "076",
    category: "decor",
    room: ["outdoor", "living", "garden"],
    description: "A lush spherical fern topiary on a stand. Converted from The Sims 4 with vibrant foliage colors.",
    baseItem: "Iron Horse Armor",
    anvilCode: "ssc076",
    variants: [
      { code: "a", name: "Bright Green", color: "#6A9E3A" },
      { code: "b", name: "Forest Green", color: "#4A7A30" },
      { code: "c", name: "Teal",         color: "#2A8A78" },
      { code: "d", name: "Purple",       color: "#8A4A9E" },
    ],
    positions: [
      { code: "",       name: "Default", description: "Standard floor placement" },
      { code: "corner", name: "Corner",  description: "Corner placement" },
    ],
    tags: ["plant", "fern", "topiary", "nature", "garden"],
    colorTags: ["green", "purple"],
    images: {
      a: "a.png", b: "b.png", c: "c.png", d: "d.png",
      pos_default: "ssc076.png",
      pos_corner:  "ssc076corner.png",
    }
  },
  {
    id: "ssc082",
    name: "Wall Electricity Meter",
    collection: "ssc",
    number: "082",
    category: "utility",
    room: ["outdoor", "garage", "hallway"],
    description: "A realistic wall-mounted electricity meter. Great for adding functional detail to suburban builds.",
    baseItem: "Golden Horse Armor",
    anvilCode: "ssc082",
    variants: [
      { code: "a", name: "Warm Gray",  color: "#A89E90" },
      { code: "b", name: "Tan",        color: "#A07840" },
      { code: "c", name: "Cool Gray",  color: "#989898" },
      { code: "d", name: "Charcoal",   color: "#484848" },
      { code: "e", name: "Silver",     color: "#C0C0C8" },
      { code: "f", name: "Light Blue", color: "#8AAAC8" },
      { code: "g", name: "Navy",       color: "#2A3A7A" },
      { code: "h", name: "Mauve",      color: "#B07080" },
    ],
    positions: [
      { code: "",    name: "Default", description: "Wall-mounted standard" },
      { code: "top", name: "Top",     description: "Top of wall placement" },
    ],
    tags: ["utility", "electrical", "wall", "modern", "realistic"],
    colorTags: ["neutral", "blue", "pink", "brown"],
    images: {
      a: "a.png", b: "b.png", c: "c.png", d: "d.png",
      e: "e.png", f: "f.png", g: "g.png", h: "h.png",
      pos_default: "ssc082.png",
      pos_top:     "ssc082top.png",
    }
  },
  {
    id: "ssc085",
    name: "Modern Mailbox",
    collection: "ssc",
    number: "085",
    category: "outdoor",
    room: ["outdoor", "garden", "garage"],
    description: "A sleek horizontal slatted mailbox converted from The Sims 4. Pairs beautifully with modern builds.",
    baseItem: "Diamond Horse Armor",
    anvilCode: "ssc085",
    variants: [
      { code: "a", name: "Warm Taupe",  color: "#B0A090" },
      { code: "b", name: "Cool Gray",   color: "#A8A8A8" },
      { code: "c", name: "Stone Gray",  color: "#989088" },
      { code: "d", name: "Silver",      color: "#C0BCBA" },
      { code: "e", name: "Tan",         color: "#A07848" },
      { code: "f", name: "Oak Brown",   color: "#886030" },
      { code: "g", name: "Walnut",      color: "#704830" },
      { code: "h", name: "Espresso",    color: "#403028" },
      { code: "i", name: "Charcoal",    color: "#404040" },
      { code: "j", name: "Near Black",  color: "#282828" },
    ],
    positions: [
      { code: "", name: "Default", description: "Standard wall placement" },
    ],
    tags: ["mailbox", "postal", "modern", "outdoor", "wall"],
    colorTags: ["neutral", "brown"],
    images: {
      a: "a.png", b: "b.png", c: "c.png", d: "d.png", e: "e.png",
      f: "f.png", g: "g.png", h: "h.png", i: "i.png", j: "j.png",
      pos_default: "ssc085.png",
    }
  },
];

// Filter options shown in the catalog
const FILTER_OPTIONS = {
  category: [
    { value: "seating",  label: "Seating" },
    { value: "decor",    label: "Décor" },
    { value: "utility",  label: "Utility" },
    { value: "outdoor",  label: "Outdoor" },
  ],
  room: [
    { value: "living",   label: "Living Room" },
    { value: "bedroom",  label: "Bedroom" },
    { value: "outdoor",  label: "Outdoor" },
    { value: "garden",   label: "Garden" },
    { value: "garage",   label: "Garage" },
    { value: "hallway",  label: "Hallway" },
  ],
  color: [
    { value: "neutral",  label: "Neutral" },
    { value: "brown",    label: "Brown / Wood" },
    { value: "green",    label: "Green" },
    { value: "blue",     label: "Blue" },
    { value: "pink",     label: "Pink / Mauve" },
    { value: "purple",   label: "Purple" },
  ],
};

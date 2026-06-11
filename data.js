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
    id: "ssc061",
    name: "Grass Patch",
    collection: "ssc",
    number: "061",
    category: "plants",
    room: ["garden", "outdoor"],
    description: "A small 1x1 patch of grass",
    baseItem: "Birch Trapdoor",
    anvilCode: "ssc061",
    variants: [
      { code: "a", name: "Green", color: "#FB5F21" }
      ],
    positions: [
      { code: "",       name: "Default", description: "Standard floor placement" },
      { code: "center", name: "Corner",  description: "Corner between two blocks" },
      { code: "center", name: "Raised Back",  description: "Raises 0.5 up and spawns behind item frame" },
      { code: "center", name: "Raised Forward",  description: "Raises 0.5 up and spawns in front of item frame" },
    ],
    tags: ["grass", "garden", "green", "bush", "plant"],
    colorTags: ["green"],
    images: {
      // format: variantCode -> filename in images/ssc061/
      a: "a.png", 
      pos_default: "ssc061.png",
      pos_corner:  "ssc061corner.png",
      pos_raisedback:  "ssc061raisedback.png",
      pos_raisedforward:  "ssc061raisedforward.png",
    }
  },
  {
    id: "ssc062",
    name: "Tall Untrimmed Bush",
    collection: "ssc",
    number: "062",
    category: "Plants",
    room: ["garden", "outdoor"],
    description: "A skinny, tall, untrimmed bush spanning 1x2",
    baseItem: "Birch Pressure Plate",
    anvilCode: "ssc062",
    variants: [
      { code: "a", name: "Lime", color: "#BEAF59" }
      ],
    positions: [
      { code: "",       name: "Default", description: "Standard floor placement" }
    ],
    tags: ["bush", "tree", "plant", "green", "garden"],
    colorTags: ["green", "yellow"],
    images: {
      a: "a.png",
      pos_default: "ssc062.png",
    }
  },
  {
    id: "ssc063",
    name: "Potted Lemon Tree",
    collection: "ssc",
    number: "063",
    category: "Potted Plants",
    room: ["outdoor", "misc"],
    description: "A potted lemon tree and a potted orange tree, spanning slightly larger than 1x2",
    baseItem: "Birch Button",
    anvilCode: "ssc063",
    variants: [
      { code: "a", name: "Lemon",  color: "#BBA622" },
      { code: "b", name: "Orange",        color: "#D89118" }
    ],
    positions: [
      { code: "",    name: "Default", description: "Standard Block Placement" }
    ],
    tags: ["potted", "plant", "tree", "garden", "green", "orange", "lemon", "fruit"],
    colorTags: ["yellow", "orange", "green", "beige", "brown"],
    images: {
      a: "a.png", b: "b.png",
      pos_default: "ssc063.png"
    }
  },
  {
    id: "ssc064",
    name: "Large River Rocks",
    collection: "ssc",
    number: "064",
    category: "rocks",
    room: ["outdoor", "garden"],
    description: "A trio of river rocks spanning less than 1x1",
    baseItem: "Jungle Log",
    anvilCode: "ssc064",
    variants: [
      { code: "a", name: "Brownstone",  color: "#89837A" },
      { code: "b", name: "Dark Grey",   color: "#575042" },
      { code: "c", name: "Sandstone",  color: "#B6A991" },
      { code: "d", name: "Light Grey",      color: "#B4B2AE" },
      { code: "e", name: "Dark Charcoal",         color: "#4D4D4A" },
      { code: "f", name: "Mauve Grey",   color: "#786663" },
      { code: "g", name: "Mossy Green",      color: "#718E28" }
     ],
    positions: [
      { code: "", name: "Default", description: "Standard Block Placement" },
      { code: "", name: "Back", description: "Placed Back on Block" },
      { code: "", name: "Corner", description: "Placed Corner on Block" },
      { code: "", name: "Raised Back", description: "Raises 0.5 above block, and spawns behind item frame" },
      { code: "", name: "Raised Forward", description: "Raises 0.5 above block and spawns behind item frame" }
    ],
    tags: ["rock", "stone", "pebble", "garden"],
    colorTags: ["black", "brown", "grey"],
    images: {
      a: "a.png", b: "b.png", c: "c.png", d: "d.png", e: "e.png",
      f: "f.png", g: "g.png",
      pos_default: "ssc064.png",
      pos_back: "ssc064back.png",
      pos_corner: "ssc064corner.png",
      pos_raisedback: "ssc064raisedback.png",
      pos_raisedforward: "ssc064raisedforward.png"
    }
  },
];

// Filter options shown in the catalog
const FILTER_OPTIONS = {
  category: [
    { value: "plants",  label: "Plants" },
    { value: "potted plants",    label: "Potted Plants" },
    { value: "rocks",  label: "Rocks" },
    { value: "outdoor",  label: "Outdoor" }
  ],
  room: [
    { value: "living",   label: "Living Room" },
    { value: "bedroom",  label: "Bedroom" },
    { value: "outdoor",  label: "Outdoor" },
    { value: "garden",   label: "Garden" },
    { value: "garage",   label: "Garage" },
    { value: "hallway",  label: "Hallway" }
  ],
  color: [
    { value: "black",  label: "Black" },
    { value: "brown",    label: "Brown / Wood" },
    { value: "green",    label: "Green" },
    { value: "blue",     label: "Blue" },
    { value: "pink",     label: "Pink / Mauve" },
    { value: "purple",   label: "Purple" },
    { value: "lime",  label: "Lime" }

  ],
}

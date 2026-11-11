// Images shown on the Craft photo map (/craft). Add, remove or reorder freely —
// placements are randomized on every visit, so order doesn't matter.
//
// src:         path inside /public, e.g. "/images/work/apple/sky.png"
// title:       shown when hovering the image
// description: shown under the title on hover (can be "")

export type CraftItem = {
  src: string;
  title: string;
  description: string;
};

export const craftItems: CraftItem[] = [
  {
    src: "/images/work/rockumentary/rockumentary.png",
    title: "Rockumentary",
    description: "Berklee senior recital poster",
  },
  {
    src: "/images/work/typography.jpg",
    title: "Basics of Typography Poster",
    description: "",
  },
  {
    src: "/images/work/sunfall.jpg",
    title: "Sunfall",
    description: "",
  },
  {
    src: "/images/work/textDiagramBW.png",
    title: "\"Ubiquitous Icons\" Text Diagram",
    description: "",
  },
  {
    src: "/images/work/radien/radien.png",
    title: "Radien",
    description: "Ticket-tracking system for cross-team project management",
  },
  {
    src: "/images/work/cooper/cooper.png",
    title: "Cooper",
    description: "Cooper",
  },

  // ALI Hacks — internal portal
  {
    src: "/images/work/alihacks/full_proto.mov",
    title: "ALI Hacks",
    description: "Application portal for a hackathon",
  },
  // ALI Hacks — sponsorship package
  ...[3, 4].map((n) => ({
    src: `/images/work/alihacks/sp${n}.png`,
    title: "ALI Hacks",
    description: "Sponsorship package",
  })),
];

// Product family color definitions
// Each product family has a distinct color that persists across all layers

export interface ProductFamily {
  id: string;
  keywords: string[]; // Keywords to match in title or description
  color: {
    accent: string;      // HSL for accent color (border, dot, title)
    bg: string;          // HSL for subtle background
    bgHover: string;     // HSL for hover state
  };
  label: string;         // Display name
}

export const productFamilies: ProductFamily[] = [
  {
    id: "subgraphs",
    keywords: ["subgraph"],
    label: "Subgraphs",
    color: {
      accent: "25 95% 55%",         // Orange
      bg: "25 95% 55% / 0.08",
      bgHover: "25 95% 55% / 0.15",
    },
  },
  {
    id: "amp",
    keywords: ["amp"],
    label: "Amp",
    color: {
      accent: "217 91% 60%",      // Bright blue
      bg: "217 91% 60% / 0.08",
      bgHover: "217 91% 60% / 0.15",
    },
  },
  {
    id: "substreams",
    keywords: ["substreams", "firehose"],
    label: "Substreams",
    color: {
      accent: "45 93% 58%",       // Golden yellow
      bg: "45 93% 58% / 0.08",
      bgHover: "45 93% 58% / 0.15",
    },
  },
  {
    id: "horizon",
    keywords: ["horizon"],
    label: "Horizon",
    color: {
      accent: "271 81% 65%",      // Purple
      bg: "271 81% 65% / 0.08",
      bgHover: "271 81% 65% / 0.15",
    },
  },
  {
    id: "tycho",
    keywords: ["tycho"],
    label: "Tycho",
    color: {
      accent: "186 94% 50%",      // Cyan
      bg: "186 94% 50% / 0.08",
      bgHover: "186 94% 50% / 0.15",
    },
  },
  {
    id: "token-api",
    keywords: ["token api"],
    label: "Token API",
    color: {
      accent: "142 71% 45%",      // Green
      bg: "142 71% 45% / 0.08",
      bgHover: "142 71% 45% / 0.15",
    },
  },
  {
    id: "rpc",
    keywords: ["rpc"],
    label: "RPC",
    color: {
      accent: "340 82% 60%",      // Pink/magenta
      bg: "340 82% 60% / 0.08",
      bgHover: "340 82% 60% / 0.15",
    },
  },
];

// Find the product family for a given item based on title and description
export function getProductFamily(title: string, description: string): ProductFamily | null {
  const text = `${title} ${description}`.toLowerCase();
  
  for (const family of productFamilies) {
    for (const keyword of family.keywords) {
      if (text.includes(keyword)) {
        return family;
      }
    }
  }
  
  return null;
}

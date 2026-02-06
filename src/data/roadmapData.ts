export interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  quarter: string;
  spanQuarters?: string; // e.g., "Q2 2026 - Q3 2026"
  status?: "experimental" | "tbc" | "redacted";
  tooltip?: string;
}

export interface Layer {
  id: string;
  name: string;
  tagline: string;
  description: string;
  colorClass: "product" | "protocol" | "tokenomics";
  items: RoadmapItem[];
}

export const quarters = ["Q4 2025", "Q1 2026", "Q2 2026", "Q3 2026", "Q4 2026"];

export const roadmapLayers: Layer[] = [
  {
    id: "product-layer",
    name: "Product Layer",
    tagline: "The Growth Engine",
    description: "Pragmatic development: Building specialized products for specific market needs first, then integrating them into the network via Horizon.",
    colorClass: "product",
    items: [
      { id: "amp-q4", title: "Amp", description: "Developer Preview", quarter: "Q4 2025" },
      { id: "tycho-q1", title: "Tycho", description: "Private MVP", quarter: "Q1 2026" },
      { id: "substreams-q1", title: "Substreams", description: "Reth & Besu Instrumentation", quarter: "Q1 2026" },
      { id: "token-api-q4", title: "Token API", description: "Beta: Billing & AI Compability", quarter: "Q4 2025" },
      { id: "token-api-q1", title: "Token API", description: "Production-Grade Latency", quarter: "Q1 2026" },
      { id: "token-api-realtime", title: "Token API", description: "Real-Time Token Pricing with DEX & Chain Expansion", quarter: "Q2 2026", spanQuarters: "Q2 2026 - Q3 2026" },
      {
        id: "amp-sql",
        title: "Amp",
        description: "SQL Platform",
        quarter: "Q3 2026",
        spanQuarters: "Q3 2026 - Q4 2026",
        status: "experimental",
      },
      {
        id: "tycho-beta",
        title: "Tycho",
        description: "Public Beta Launch",
        quarter: "Q2 2026",
      },
    ],
  },
  {
    id: "protocol-layer",
    name: "Protocol Layer",
    tagline: "The Foundation",
    description: "Expanding from a single service to a modular platform. Horizon is the framework enabling multiple data services with distinct economic models and trust guarantees.",
    colorClass: "protocol",
    items: [
      { id: "horizon-q4", title: "Subgraphs", description: "Horizon-Based Subgraph Service (Testnet & Mainnet)\n", quarter: "Q4 2025", spanQuarters: "Q4 2025 - Q1 2026" },
      { id: "substreams-p2p", title: "Substreams", description: "Trust-Minimized P2P Data Service Specification", quarter: "Q4 2025" },
      {
        id: "amp-network",
        title: "Amp",
        description: "Horizon-Based Data Service (Testnet & Mainnet)",
        quarter: "Q2 2026",
        spanQuarters: "Q2 2026 - Q4 2026"
      },
      {
        id: "amp-raw-data",
        title: "Amp",
        description: "Verifiable Raw Blockchain Data",
        quarter: "Q3 2026",
        spanQuarters: "Q3 2026 - Q4 2026"
      },
      {
        id: "tycho-network",
        title: "Tycho",
        description: "Horizon-Based Data Service (Testnet & Mainnet)",
        quarter: "Q3 2026",
        spanQuarters: "Q3 2026 - Q4 2026",
        status: "experimental",
      },
      {
        id: "agentic-subgraph",
        title: "Subgraphs",
        description: "Agentic Subgraph Service w/ x402 & A2A Support",
        quarter: "Q1 2026",
        spanQuarters: "Q1 2026 - Q2 2026",
      },
      {
        id: "substreams-horizon",
        title: "Substreams",
        description: "Horizon-Based P2P Data Service MVP w/ GraphTally",
        quarter: "Q2 2026",
      },
      {
        id: "amp-subgraph",
        title: "Subgraphs",
        description: "Amp-Powered Subgraphs (Verifiable Raw Data)",
        quarter: "Q3 2026",
        spanQuarters: "Q3 2026 - Q4 2026"
      },
      {
        id: "substreams-oracle",
        title: "Substreams",
        description: "Probabilistic Verifier for Data Integrity & Service Availability",
        quarter: "Q4 2026",
      },
      {
        id: "substreams-mainnet",
        title: "Substreams",
        description: "Data Service Mainnet\n& Provider Selection Oracle",
        quarter: "Q3 2026",
        status: "experimental",
      },
      {
        id: "rpc-service",
        title: "JSON-RPC",
        description: "Experimental JSON-RPC Data Service\n",
        quarter: "Q3 2026",
        status: "experimental",
      },
    ],
  },
  {
    id: "economics-layer",
    name: "Economics Layer",
    tagline: "The Incentive Engine",
    description: "Designing sustainable economic models that align incentives across the network. GRT powers the ecosystem through staking, curation, and service payments.",
    colorClass: "tokenomics",
    items: [
      {
        id: "rewards-oracle-span",
        title: "Subgraphs",
        description: "Final REO Specification (v1 Eligibility), Eligibility Tracker & Dashboard Design",
        quarter: "Q4 2025",
        spanQuarters: "Q4 2025 - Q1 2026"
      },
      {
        id: "rewards-oracle-q2",
        title: "Subgraphs",
        description: "Subgraphs REO Testnet & Mainnet",
        quarter: "Q2 2026",
      },
      {
        id: "rewards-oracle-substreams",
        title: "Substreams",
        description: "Substreams REO Testnet & Mainnet",
        quarter: "Q4 2026",
      },
      {
        id: "cip-q2",
        title: "Subgraphs",
        description: "Network-First Chain Integration Process w/ DIPs",
        quarter: "Q2 2026",
        spanQuarters: "Q2 2026 - Q3 2026"
      },
      {
        id: "liquid-staking",
        title: "GRT",
        description: "Liquid Staking Testnet (Q2), Mainnet (Q3), & Morpho Launch (Q4)",
        quarter: "Q2 2026",
        spanQuarters: "Q2 2026 - Q4 2026"
      },
      {
        id: "indexer-payments",
        title: "Amp",
        description: "DIPs Amp Service",
        quarter: "Q2 2026",
        spanQuarters: "Q2 2026 - Q3 2026"
      },
      {
        id: "indexer-payments-dips",
        title: "Subgraphs",
        description: "DIPs Subgraph Service",
        quarter: "Q2 2026",
      },
      {
        id: "grt-ccip",
        title: "GRT",
        description: "Multi-Chain Expansion (Chainlink's CCIP)",
        quarter: "Q4 2025",
      },
      {
        id: "grt-crosschain",
        title: "GRT",
        description: "Cross-Chain GRT Liquid Staking",
        quarter: "Q3 2026",
      },
    ],
  },
];

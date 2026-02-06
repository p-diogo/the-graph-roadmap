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
      { id: "tycho-q1", title: "Tycho Indexer", description: "Tycho Private MVP", quarter: "Q1 2026" },
      { id: "substreams-q1", title: "Substreams", description: "Reth & Besu Instrumentation", quarter: "Q1 2026" },
      { id: "dtcc-q2", title: "DTCC Pilot", description: "Confidential", quarter: "Q2 2026", status: "redacted" },
      { id: "token-api-q4", title: "Token API (Beta)", description: "Spam Filtering, Billing, Webhooks, DeFi API, Chain Expansion", quarter: "Q4 2025" },
      { id: "token-api-q1", title: "Token API", description: "v2.0 - Stability & Improvements", quarter: "Q1 2026" },
      { id: "token-api-realtime", title: "Token API", description: "Real-time Token Pricing\nDEX & Chain Expansion", quarter: "Q2 2026", spanQuarters: "Q2 2026 - Q3 2026" },
      {
        id: "amp-sql",
        title: "Amp",
        description: "SQL Platform — Verifiable Raw Blockchain Data",
        quarter: "Q3 2026",
        spanQuarters: "Q3 2026 - Q4 2026",
        status: "experimental",
      },
      {
        id: "tycho-beta",
        title: "Tycho Indexer",
        description: "Public Beta launch",
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
      { id: "horizon-q4", title: "Horizon", description: "Testnet Rollout & Subgraph Data Service Rollout", quarter: "Q4 2025" },
      { id: "substreams-p2p", title: "Substreams", description: "Trust-minimized P2P Data Service Specification", quarter: "Q4 2025" },
      {
        id: "amp-network",
        title: "Amp",
        description: "Data Service Network Rollout (Verifiable Real-time Raw Data)",
        quarter: "Q2 2026",
        spanQuarters: "Q2 2026 - Q4 2026"
      },
      {
        id: "tycho-network",
        title: "Tycho Indexer",
        description: "Data Service Network Rollout",
        quarter: "Q3 2026",
        spanQuarters: "Q3 2026 - Q4 2026"
      },
      {
        id: "agentic-subgraph",
        title: "Agentic Subgraph Service",
        description: "x402-compatible Subgraph Gateway",
        quarter: "Q1 2026",
        spanQuarters: "Q1 2026 - Q2 2026",
      },
      {
        id: "substreams-horizon",
        title: "Substreams",
        description: "Horizon-based P2P Data Service MVP rollout w/ GraphTally",
        quarter: "Q2 2026",
      },
      {
        id: "amp-subgraph",
        title: "Amp-powered Subgraphs",
        description: "Amp as a verifiable Data Source",
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
        description: "Data Service mainnet rollout\nProvider Selection Oracle",
        quarter: "Q3 2026",
        status: "experimental",
      },
      {
        id: "rpc-service",
        title: "RPC",
        description: "Experimental RPC Data Service",
        quarter: "Q3 2026",
        status: "experimental",
      },
    ],
  },
  {
    id: "tokenomics-layer",
    name: "Tokenomics Layer",
    tagline: "The Incentive Engine",
    description: "Designing sustainable economic models that align incentives across the network. GRT powers the ecosystem through staking, curation, and service payments.",
    colorClass: "tokenomics",
    items: [
      { id: "horizon-mainnet", title: "Horizon", description: "Mainnet Launch", quarter: "Q1 2026" },
      {
        id: "rewards-oracle-span",
        title: "Subgraphs Rewards Eligibility Oracle",
        description: "Final REO Design & Implementation\nEligibility Tracker & Dashboard",
        quarter: "Q4 2025",
        spanQuarters: "Q4 2025 - Q1 2026"
      },
      {
        id: "rewards-oracle-q2",
        title: "Rewards Eligibility Oracle",
        description: "Testnet & Mainnet Rollout",
        quarter: "Q2 2026",
      },
      {
        id: "rewards-oracle-substreams",
        title: "Rewards Eligibility Oracle",
        description: "Substreams Data Service Support",
        quarter: "Q4 2026",
      },
      {
        id: "cip-q2",
        title: "Subgraphs Chain Integration Process (CIP)",
        description: "Network-centric Chain Integrations w/ DIPs",
        quarter: "Q2 2026",
        spanQuarters: "Q2 2026 - Q3 2026"
      },
      {
        id: "liquid-staking",
        title: "Liquid Staking",
        description: "Testnet rollout (Q2), Mainnet rollout (Q3), Morpho Launch (Q4)",
        quarter: "Q2 2026",
        spanQuarters: "Q2 2026 - Q4 2026"
      },
      {
        id: "indexer-payments",
        title: "Indexer Payments (fka DIPs)",
        description: "Verifiable Amp Raw Datasets",
        quarter: "Q2 2026",
        spanQuarters: "Q2 2026 - Q3 2026"
      },
      {
        id: "indexer-payments-dips",
        title: "Indexer Payments (fka DIPs)",
        description: "DIPs Subgraph Service rollout",
        quarter: "Q2 2026",
      },
      {
        id: "grt-ccip",
        title: "GRT",
        description: "Multi-chain expansion (Chainlink's CCIP)",
        quarter: "Q4 2025",
      },
      {
        id: "grt-crosschain",
        title: "GRT",
        description: "Cross-chain GRT Liquid Staking",
        quarter: "Q3 2026",
      },
    ],
  },
];

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
      { id: "substreams-q2", title: "Substreams", description: "Substreams w/ GraphTally testing", quarter: "Q2 2026" },
      { id: "substreams-p2p", title: "Substreams", description: "Trust-minimized P2P Data Service Specification", quarter: "Q4 2025" },
      { 
        id: "amp-sql", 
        title: "Amp", 
        description: "SQL Platform — Verifiable Raw Blockchain Data", 
        quarter: "Q2 2026", 
        spanQuarters: "Q2 2026 - Q3 2026",
        status: "experimental",
        tooltip: "Amp SQL Platform brings verifiable blockchain data through SQL queries. This experimental feature enables developers to query raw blockchain data with SQL syntax while maintaining cryptographic verification."
      },
      { 
        id: "tycho-beta", 
        title: "Tycho Indexer", 
        description: "GTM Planning & Public Beta launch", 
        quarter: "Q1 2026",
        spanQuarters: "Q1 2026 - Q2 2026",
        tooltip: "Tycho Indexer enables fast, efficient indexing of blockchain data. The GTM (Go-To-Market) Planning phase prepares for public beta launch."
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
      { id: "token-api-q4", title: "Token API", description: "Spam Filtering, Billing, Webhooks, DeFi API, Chain Expansion", quarter: "Q4 2025" },
      { 
        id: "amp-network", 
        title: "Amp", 
        description: "Data Service Network Rollout (Verifiable Real-time Raw Data)", 
        quarter: "Q2 2026",
        spanQuarters: "Q2 2026 - Q4 2026"
      },
      { 
        id: "indexer-payments", 
        title: "Indexer Payments", 
        description: "Amp Raw Datasets", 
        quarter: "Q2 2026",
        spanQuarters: "Q2 2026 - Q3 2026"
      },
      { id: "token-api-q3", title: "Token API", description: "Data Service Network Rollout", quarter: "Q3 2026", status: "tbc" },
      { id: "tycho-network", title: "Tycho Indexer", description: "Data Service Network Rollout", quarter: "Q3 2026", status: "tbc" },
      { 
        id: "substreams-horizon", 
        title: "Substreams", 
        description: "Horizon-based Data Service MVP rollout w/ GraphTally", 
        quarter: "Q2 2026",
        tooltip: "Substreams provides high-throughput blockchain data streaming. The Horizon-based MVP integrates with GraphTally for verifiable data delivery."
      },
      { 
        id: "amp-subgraph", 
        title: "Amp-powered Subgraph Service", 
        description: "Amp as a verifiable Data Source", 
        quarter: "Q3 2026",
        spanQuarters: "Q3 2026 - Q4 2026"
      },
      {
        id: "substreams-oracle",
        title: "Substreams",
        description: "Service Provider Selection Oracle",
        quarter: "Q3 2026",
        spanQuarters: "Q3 2026 - Q4 2026"
      },
      {
        id: "rpc-service",
        title: "RPC",
        description: "Experimental RPC Data Service",
        quarter: "Q3 2026",
        status: "experimental",
        tooltip: "Experimental RPC Data Service - exploring decentralized RPC infrastructure for The Graph ecosystem."
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
        id: "rewards-oracle", 
        title: "Rewards Eligibility Oracle", 
        description: "Subgraphs & Substreams", 
        quarter: "Q1 2026",
        spanQuarters: "Q1 2026 - Q2 2026"
      },
      { id: "cip-q2", title: "CIP", description: "Chain Integration Process Revamp", quarter: "Q2 2026" },
      { 
        id: "liquid-staking", 
        title: "Liquid Staking", 
        description: "GRT Liquid Staking Protocol", 
        quarter: "Q3 2026",
        spanQuarters: "Q3 2026 - Q4 2026",
        status: "tbc"
      },
      { 
        id: "agentic-subgraph", 
        title: "Agentic Subgraph Service", 
        description: "AI-powered Subgraph Discovery & Optimization", 
        quarter: "Q4 2026",
        status: "experimental"
      },
    ],
  },
];

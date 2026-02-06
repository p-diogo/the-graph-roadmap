import { useState, useCallback, useMemo } from "react";
import { RoadmapItem, Layer } from "@/data/roadmapData";

// Keywords to track across cards
const MAIN_KEYWORDS = [
  "substreams",
  "amp",
  "tycho",
  "horizon",
  "token api",
  "indexer payments",
  "rewards eligibility oracle",
  "cip",
  "liquid staking",
  "agentic subgraph",
  "subgraph",
];

function extractKeywords(item: RoadmapItem): string[] {
  const text = `${item.title} ${item.description}`.toLowerCase();
  const found: string[] = [];
  
  for (const keyword of MAIN_KEYWORDS) {
    if (text.includes(keyword)) {
      found.push(keyword);
    }
  }
  
  // Fallback: use first word of title
  if (found.length === 0) {
    found.push(item.title.toLowerCase().split(" ")[0]);
  }
  
  return found;
}

export function useRoadmapFilter(layers: Layer[]) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [activeLayerFilter, setActiveLayerFilter] = useState<string | null>(null);

  // Build a map of item IDs to their keywords
  const itemKeywords = useMemo(() => {
    const map = new Map<string, string[]>();
    for (const layer of layers) {
      for (const item of layer.items) {
        map.set(item.id, extractKeywords(item));
      }
    }
    return map;
  }, [layers]);

  const isItemVisible = useCallback((itemId: string, layerId: string) => {
    // If filtering by layer
    if (activeLayerFilter) {
      return layerId === activeLayerFilter;
    }

    // If filtering by keyword
    if (activeFilter) {
      const keywords = itemKeywords.get(itemId) || [];
      return keywords.includes(activeFilter.toLowerCase());
    }

    // No filter active
    return true;
  }, [activeFilter, activeLayerFilter, itemKeywords]);

  const isItemHighlighted = useCallback((itemId: string) => {
    if (!activeFilter) return false;
    const keywords = itemKeywords.get(itemId) || [];
    return keywords.includes(activeFilter.toLowerCase());
  }, [activeFilter, itemKeywords]);

  const toggleCardFilter = useCallback((itemId: string) => {
    const keywords = itemKeywords.get(itemId) || [];
    const primaryKeyword = keywords[0];
    
    if (!primaryKeyword) return;
    
    if (activeFilter === primaryKeyword) {
      // Clicking same filter clears it
      setActiveFilter(null);
    } else {
      setActiveFilter(primaryKeyword);
      setActiveLayerFilter(null);
    }
  }, [activeFilter, itemKeywords]);

  const toggleLayerFilter = useCallback((layerId: string) => {
    if (activeLayerFilter === layerId) {
      setActiveLayerFilter(null);
    } else {
      setActiveLayerFilter(layerId);
      setActiveFilter(null);
    }
  }, [activeLayerFilter]);

  const clearFilter = useCallback(() => {
    setActiveFilter(null);
    setActiveLayerFilter(null);
  }, []);

  const hasActiveFilter = activeFilter !== null || activeLayerFilter !== null;

  return {
    activeFilter,
    activeLayerFilter,
    hasActiveFilter,
    isItemVisible,
    isItemHighlighted,
    toggleCardFilter,
    toggleLayerFilter,
    clearFilter,
  };
}

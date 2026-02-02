import { cn } from "@/lib/utils";
import { Layer, quarters } from "@/data/roadmapData";
import { RoadmapCard } from "./RoadmapCard";
import { Sparkles, Layers, Coins } from "lucide-react";

interface LayerSectionProps {
  layer: Layer;
  isLayerActive?: boolean;
  isItemVisible: (itemId: string, layerId: string) => boolean;
  isItemHighlighted: (itemId: string) => boolean;
  onCardClick: (itemId: string) => void;
  onLayerClick: (layerId: string) => void;
  hasActiveFilter: boolean;
}

const iconMap = {
  product: Sparkles,
  protocol: Layers,
  tokenomics: Coins,
};

const colorMap = {
  product: {
    iconBg: "bg-layer-product/10 border-layer-product/30",
    iconColor: "text-layer-product",
    tagBg: "bg-layer-product/10 border-layer-product/20",
    tagText: "text-layer-product",
    activeBg: "bg-layer-product/15 border-layer-product/50",
  },
  protocol: {
    iconBg: "bg-layer-protocol/10 border-layer-protocol/30",
    iconColor: "text-layer-protocol",
    tagBg: "bg-layer-protocol/10 border-layer-protocol/20",
    tagText: "text-layer-protocol",
    activeBg: "bg-layer-protocol/15 border-layer-protocol/50",
  },
  tokenomics: {
    iconBg: "bg-layer-tokenomics/10 border-layer-tokenomics/30",
    iconColor: "text-layer-tokenomics",
    tagBg: "bg-layer-tokenomics/10 border-layer-tokenomics/20",
    tagText: "text-layer-tokenomics",
    activeBg: "bg-layer-tokenomics/15 border-layer-tokenomics/50",
  },
};

export function LayerSection({ 
  layer, 
  isLayerActive,
  isItemVisible,
  isItemHighlighted,
  onCardClick,
  onLayerClick,
  hasActiveFilter,
}: LayerSectionProps) {
  const Icon = iconMap[layer.colorClass];
  const colors = colorMap[layer.colorClass];

  // Check if any items in this layer are visible
  const hasVisibleItems = layer.items.some(item => isItemVisible(item.id, layer.id));

  // Group items by quarter for simpler display
  const getItemsForQuarter = (quarter: string) => {
    return layer.items.filter(item => item.quarter === quarter && !item.spanQuarters);
  };

  const getSpanningItems = () => {
    return layer.items.filter(item => item.spanQuarters);
  };

  return (
    <div 
      className={cn(
        "flex flex-col lg:flex-row gap-6 lg:gap-8 pb-10 border-b border-border/50 transition-opacity duration-300",
        hasActiveFilter && !hasVisibleItems && "opacity-30"
      )}
    >
      {/* Layer Sidebar - Clickable for filtering */}
      <div 
        onClick={() => onLayerClick(layer.id)}
        className={cn(
          "lg:w-56 xl:w-64 flex-shrink-0 lg:border-r border-border lg:pr-6",
          "layer-sidebar group",
          isLayerActive && colors.activeBg
        )}
      >
        <div className="flex items-center gap-3 mb-3">
          <div className={cn("p-2 rounded-lg border", colors.iconBg)}>
            <Icon className={cn("w-5 h-5", colors.iconColor)} />
          </div>
          <h2 className="text-xl font-bold text-foreground">{layer.name}</h2>
        </div>
        
        <div className="mb-3 flex items-center gap-2">
          <span className={cn(
            "px-2 py-1 text-xs font-bold uppercase tracking-wider rounded border",
            colors.tagBg,
            colors.tagText
          )}>
            {layer.tagline}
          </span>
          <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
            Click to filter
          </span>
        </div>
        
        <p className="text-sm text-muted-foreground leading-relaxed">
          {layer.description}
        </p>
      </div>

      {/* Roadmap Grid */}
      <div className="flex-grow">
        {/* Quarter columns on desktop */}
        <div className="hidden lg:grid grid-cols-5 gap-4">
          {quarters.map((quarter) => (
            <div key={quarter} className="space-y-3">
              {getItemsForQuarter(quarter).map((item) => (
                <RoadmapCard 
                  key={item.id} 
                  item={item} 
                  colorClass={layer.colorClass}
                  isVisible={isItemVisible(item.id, layer.id)}
                  isHighlighted={isItemHighlighted(item.id)}
                  onClick={() => onCardClick(item.id)}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Spanning items */}
        {getSpanningItems().length > 0 && (
          <div className="hidden lg:grid grid-cols-5 gap-4 mt-4">
            {getSpanningItems().map((item) => {
              if (!isItemVisible(item.id, layer.id)) return null;
              
              const startQ = item.spanQuarters?.split(" - ")[0] || "";
              const endQ = item.spanQuarters?.split(" - ")[1] || "";
              const startIdx = quarters.indexOf(startQ);
              const endIdx = quarters.indexOf(endQ);
              const span = endIdx - startIdx + 1;

              return (
                <div
                  key={item.id}
                  style={{
                    gridColumn: `${startIdx + 1} / span ${span}`,
                  }}
                >
                  <RoadmapCard 
                    item={item} 
                    colorClass={layer.colorClass} 
                    isSpanning
                    isVisible={true}
                    isHighlighted={isItemHighlighted(item.id)}
                    onClick={() => onCardClick(item.id)}
                  />
                </div>
              );
            })}
          </div>
        )}

        {/* Mobile: Simple list */}
        <div className="lg:hidden space-y-3">
          {layer.items.map((item) => {
            if (!isItemVisible(item.id, layer.id)) return null;
            
            return (
              <div key={item.id}>
                <span className="text-xs text-muted-foreground font-medium mb-1 block">
                  {item.spanQuarters || item.quarter}
                </span>
                <RoadmapCard 
                  item={item} 
                  colorClass={layer.colorClass}
                  isSpanning={!!item.spanQuarters}
                  isVisible={true}
                  isHighlighted={isItemHighlighted(item.id)}
                  onClick={() => onCardClick(item.id)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

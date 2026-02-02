import { cn } from "@/lib/utils";
import { Layer, quarters } from "@/data/roadmapData";
import { RoadmapCard } from "./RoadmapCard";
import { Sparkles, Layers, Coins } from "lucide-react";

interface LayerSectionProps {
  layer: Layer;
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
  },
  protocol: {
    iconBg: "bg-layer-protocol/10 border-layer-protocol/30",
    iconColor: "text-layer-protocol",
    tagBg: "bg-layer-protocol/10 border-layer-protocol/20",
    tagText: "text-layer-protocol",
  },
  tokenomics: {
    iconBg: "bg-layer-tokenomics/10 border-layer-tokenomics/30",
    iconColor: "text-layer-tokenomics",
    tagBg: "bg-layer-tokenomics/10 border-layer-tokenomics/20",
    tagText: "text-layer-tokenomics",
  },
};

export function LayerSection({ layer }: LayerSectionProps) {
  const Icon = iconMap[layer.colorClass];
  const colors = colorMap[layer.colorClass];

  // Group items by quarter for simpler display
  const getItemsForQuarter = (quarter: string) => {
    return layer.items.filter(item => item.quarter === quarter && !item.spanQuarters);
  };

  const getSpanningItems = () => {
    return layer.items.filter(item => item.spanQuarters);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 pb-10 border-b border-border/50">
      {/* Layer Sidebar */}
      <div className="lg:w-56 xl:w-64 flex-shrink-0 lg:border-r border-border lg:pr-6">
        <div className="flex items-center gap-3 mb-3">
          <div className={cn("p-2 rounded-lg border", colors.iconBg)}>
            <Icon className={cn("w-5 h-5", colors.iconColor)} />
          </div>
          <h2 className="text-xl font-bold text-foreground">{layer.name}</h2>
        </div>
        
        <div className="mb-3">
          <span className={cn(
            "px-2 py-1 text-xs font-bold uppercase tracking-wider rounded border",
            colors.tagBg,
            colors.tagText
          )}>
            {layer.tagline}
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
                />
              ))}
            </div>
          ))}
        </div>

        {/* Spanning items */}
        {getSpanningItems().length > 0 && (
          <div className="hidden lg:grid grid-cols-5 gap-4 mt-4">
            {getSpanningItems().map((item) => {
              // Calculate span based on quarter range
              const startQ = item.spanQuarters?.split(" - ")[0] || "";
              const endQ = item.spanQuarters?.split(" - ")[1] || "";
              const startIdx = quarters.indexOf(startQ);
              const endIdx = quarters.indexOf(endQ);
              const span = endIdx - startIdx + 1;

              return (
                <div
                  key={item.id}
                  className={cn("col-span-1")}
                  style={{
                    gridColumn: `${startIdx + 1} / span ${span}`,
                  }}
                >
                  <RoadmapCard 
                    item={item} 
                    colorClass={layer.colorClass} 
                    isSpanning 
                  />
                </div>
              );
            })}
          </div>
        )}

        {/* Mobile: Simple list */}
        <div className="lg:hidden space-y-3">
          {layer.items.map((item) => (
            <div key={item.id}>
              <span className="text-xs text-muted-foreground font-medium mb-1 block">
                {item.spanQuarters || item.quarter}
              </span>
              <RoadmapCard 
                item={item} 
                colorClass={layer.colorClass}
                isSpanning={!!item.spanQuarters}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";
import { RoadmapItem } from "@/data/roadmapData";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";

interface RoadmapCardProps {
  item: RoadmapItem;
  colorClass: "product" | "protocol" | "tokenomics";
  isSpanning?: boolean;
}

const colorMap = {
  product: {
    border: "border-layer-product/30 hover:border-layer-product/60",
    text: "text-layer-product",
    bg: "bg-layer-product/10",
    line: "bg-layer-product/50",
  },
  protocol: {
    border: "border-layer-protocol/30 hover:border-layer-protocol/60",
    text: "text-layer-protocol",
    bg: "bg-layer-protocol/10",
    line: "bg-layer-protocol/50",
  },
  tokenomics: {
    border: "border-layer-tokenomics/30 hover:border-layer-tokenomics/60",
    text: "text-layer-tokenomics",
    bg: "bg-layer-tokenomics/10",
    line: "bg-layer-tokenomics/50",
  },
};

export function RoadmapCard({ item, colorClass, isSpanning }: RoadmapCardProps) {
  const colors = colorMap[colorClass];

  const statusBadge = () => {
    if (item.status === "experimental") {
      return (
        <span className="inline-block px-1.5 py-0.5 bg-graph-blue/20 text-graph-blue rounded text-xs font-semibold">
          Experimental
        </span>
      );
    }
    if (item.status === "tbc") {
      return (
        <span className="inline-block px-2 py-0.5 bg-graph-yellow/10 text-graph-yellow rounded text-xs font-bold border border-graph-yellow/20">
          TBC
        </span>
      );
    }
    if (item.status === "redacted") {
      return (
        <span className="inline-block px-2 py-0.5 bg-muted text-muted-foreground rounded text-xs font-bold border border-border">
          Redacted
        </span>
      );
    }
    return null;
  };

  const cardContent = (
    <div
      className={cn(
        isSpanning ? "roadmap-card-span" : "roadmap-card",
        colors.border,
        "group"
      )}
    >
      <div className="flex justify-between items-start gap-2">
        <h4 className={cn("font-bold", isSpanning ? "text-lg" : "text-base", colors.text)}>
          {item.title}
        </h4>
        <div className="flex items-center gap-2">
          {statusBadge()}
          {item.tooltip && (
            <Info className="w-3.5 h-3.5 text-muted-foreground opacity-50 group-hover:opacity-100 transition-opacity" />
          )}
        </div>
      </div>
      <p className={cn(
        "mt-2",
        isSpanning ? "text-foreground" : "text-sm text-foreground/80",
        item.status === "redacted" && "italic text-muted-foreground"
      )}>
        {item.description}
      </p>
      
      {item.spanQuarters && (
        <div className="mt-auto pt-4 flex items-center text-xs font-mono opacity-75">
          <span className={colors.text}>{item.spanQuarters.split(" - ")[0]}</span>
          <div className={cn("h-px flex-grow mx-2", colors.line)} />
          <span className={colors.text}>{item.spanQuarters.split(" - ")[1]}</span>
        </div>
      )}
    </div>
  );

  if (item.tooltip) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          {cardContent}
        </TooltipTrigger>
        <TooltipContent 
          side="top" 
          className="max-w-xs bg-popover border-border text-foreground p-3"
        >
          <p className="text-sm leading-relaxed">{item.tooltip}</p>
        </TooltipContent>
      </Tooltip>
    );
  }

  return cardContent;
}

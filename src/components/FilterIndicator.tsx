import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FilterIndicatorProps {
  activeFilter: string | null;
  activeLayerFilter: string | null;
  onClear: () => void;
}

export function FilterIndicator({ activeFilter, activeLayerFilter, onClear }: FilterIndicatorProps) {
  if (!activeFilter && !activeLayerFilter) return null;

  const filterType = activeLayerFilter ? "Layer" : "Project";
  const filterValue = activeLayerFilter 
    ? activeLayerFilter.replace("-layer", "").replace("-", " ")
    : activeFilter;

  return (
    <div className="mb-6 px-4 py-3 bg-primary/10 rounded-lg border border-primary/30 flex items-center gap-3 animate-fade-in">
      <span className="text-primary text-sm font-semibold">Filtering:</span>
      <span className="text-primary/70 text-xs font-medium uppercase tracking-wide">
        {filterType}
      </span>
      <span className="text-foreground text-sm font-medium capitalize">
        {filterValue}
      </span>
      <Button
        variant="ghost"
        size="sm"
        onClick={onClear}
        className="ml-auto text-xs text-primary hover:text-foreground hover:bg-primary/20 h-7 px-2"
      >
        <X className="w-3 h-3 mr-1" />
        Clear
      </Button>
    </div>
  );
}

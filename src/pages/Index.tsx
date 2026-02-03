import { roadmapLayers, quarters } from "@/data/roadmapData";
import { LayerSection } from "@/components/LayerSection";
import { FilterIndicator } from "@/components/FilterIndicator";
import { useRoadmapFilter } from "@/hooks/useRoadmapFilter";

const Index = () => {
  const {
    activeFilter,
    activeLayerFilter,
    hasActiveFilter,
    isItemVisible,
    isItemHighlighted,
    toggleCardFilter,
    toggleLayerFilter,
    clearFilter,
  } = useRoadmapFilter(roadmapLayers);

  return (
    <div className="min-h-screen bg-background" onClick={() => hasActiveFilter && clearFilter()}>
      <div 
        className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <header className="mb-8 pb-6 border-b border-border">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-3">
            Core Dev Roadmap
          </h1>
          <p className="text-muted-foreground text-base lg:text-lg max-w-3xl leading-relaxed">
            Building the decentralized data infrastructure of tomorrow. Our strategic roadmap outlines how we're scaling The Graph protocol across multiple data services while pioneering new economic models through Horizon.
          </p>
        </header>

        {/* Filter Indicator */}
        <FilterIndicator 
          activeFilter={activeFilter}
          activeLayerFilter={activeLayerFilter}
          onClear={clearFilter}
        />

        {/* Quarter Headers - Desktop only, Sticky */}
        <div className="hidden lg:grid grid-cols-[theme(spacing.64)_1fr] gap-8 mb-6 sticky top-0 z-10 bg-background/95 backdrop-blur-sm py-3 -mx-10 px-10">
          <div /> {/* Spacer for sidebar */}
          <div className="grid grid-cols-5 gap-4">
            {quarters.map((quarter) => (
              <div key={quarter} className="text-center border-b border-border pb-2">
                <h3 className="text-lg font-semibold text-foreground/80">{quarter}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Layers */}
        <div className="space-y-10">
          {roadmapLayers.map((layer) => (
            <LayerSection 
              key={layer.id} 
              layer={layer}
              isLayerActive={activeLayerFilter === layer.id}
              isItemVisible={isItemVisible}
              isItemHighlighted={isItemHighlighted}
              onCardClick={toggleCardFilter}
              onLayerClick={toggleLayerFilter}
              hasActiveFilter={hasActiveFilter}
            />
          ))}
        </div>

        {/* Footer note */}
        <footer className="mt-12 pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            Roadmap is subject to change based on community feedback and technical developments.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;

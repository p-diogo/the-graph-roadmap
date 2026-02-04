import { productFamilies } from "@/data/productFamilies";
import { ColorMode } from "./ColorModeSelector";
import { cn } from "@/lib/utils";

interface ProductFamilyLegendProps {
  colorMode: ColorMode;
}

export function ProductFamilyLegend({ colorMode }: ProductFamilyLegendProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      <span className="text-sm text-muted-foreground self-center">Products:</span>
      {productFamilies.map((family) => (
        <div
          key={family.id}
          className={cn(
            "flex items-center gap-2 px-2.5 py-1 rounded-md text-sm",
            colorMode === "gradient" && `bg-[hsl(${family.color.bg})]`
          )}
        >
          {colorMode === "border" && (
            <div
              className="w-1 h-4 rounded-full"
              style={{ backgroundColor: `hsl(${family.color.accent})` }}
            />
          )}
          {colorMode === "dot" && (
            <div
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: `hsl(${family.color.accent})` }}
            />
          )}
          <span
            className={cn(
              "font-medium",
              colorMode === "title" ? "" : "text-foreground/80"
            )}
            style={colorMode === "title" ? { color: `hsl(${family.color.accent})` } : undefined}
          >
            {family.label}
          </span>
        </div>
      ))}
    </div>
  );
}

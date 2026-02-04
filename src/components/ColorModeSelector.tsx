import { cn } from "@/lib/utils";

export type ColorMode = "border" | "title" | "dot" | "gradient";

interface ColorModeSelectorProps {
  activeMode: ColorMode;
  onModeChange: (mode: ColorMode) => void;
}

const modes: { id: ColorMode; label: string; description: string }[] = [
  { id: "border", label: "Border Accent", description: "Colored left border" },
  { id: "title", label: "Title Color", description: "Colored title text" },
  { id: "dot", label: "Corner Dot", description: "Colored indicator dot" },
  { id: "gradient", label: "Background", description: "Subtle tinted background" },
];

export function ColorModeSelector({ activeMode, onModeChange }: ColorModeSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2 p-3 bg-card/50 rounded-lg border border-border mb-6">
      <span className="text-sm text-muted-foreground mr-2 self-center">Color mode:</span>
      {modes.map((mode) => (
        <button
          key={mode.id}
          onClick={() => onModeChange(mode.id)}
          className={cn(
            "px-3 py-1.5 rounded-md text-sm font-medium transition-all",
            activeMode === mode.id
              ? "bg-primary text-primary-foreground"
              : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
          )}
        >
          {mode.label}
        </button>
      ))}
    </div>
  );
}

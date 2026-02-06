# Tooltip Documentation

## Overview
This document describes how the tooltip functionality was implemented before removal. The tooltip feature allowed roadmap cards to display additional information on hover, providing context about specific milestones or features.

## Implementation

### Data Structure
Tooltips were defined in the `RoadmapItem` interface in `src/data/roadmapData.ts`:

```typescript
export interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  quarter: string;
  spanQuarters?: string;
  status?: "experimental" | "tbc" | "redacted";
  tooltip?: string;  // <-- Tooltip content
}
```

### Example Usage
```typescript
{
  id: "amp-sql",
  title: "Amp",
  description: "SQL Platform — Verifiable Raw Blockchain Data",
  quarter: "Q3 2026",
  spanQuarters: "Q3 2026 - Q4 2026",
  status: "experimental",
  tooltip: "Amp SQL Platform brings verifiable blockchain data through SQL queries. This experimental feature enables developers to query raw blockchain data with SQL syntax while maintaining cryptographic verification."
}
```

### UI Component Implementation

The tooltip functionality was implemented in `src/components/RoadmapCard.tsx`:

#### 1. Imports
```tsx
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";
```

#### 2. Info Icon Display
An Info icon was displayed in the card header to indicate additional information:

```tsx
<div className="flex items-center gap-2">
  {statusBadge()}
  {item.tooltip && (
    <Info className="w-3.5 h-3.5 text-muted-foreground opacity-50 group-hover:opacity-100 transition-opacity" />
  )}
</div>
```

#### 3. Conditional Tooltip Wrapper
The entire card was wrapped in a Tooltip component when `item.tooltip` was present:

```tsx
const cardContent = (
  <div
    onClick={onClick}
    className={getCardStyles()}
    style={getInlineStyles()}
  >
    {/* Card content */}
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
        className="max-w-xs bg-popover border-border text-foreground p-3 z-50"
      >
        <p className="text-sm leading-relaxed">{item.tooltip}</p>
      </TooltipContent>
    </Tooltip>
  );
}

return cardContent;
```

## Tooltip Component (shadcn/ui)

The tooltip uses shadcn/ui's Tooltip component located at `src/components/ui/tooltip.tsx`. Key properties:

- **side**: "top" - Tooltip appears above the card
- **className**: Custom styling for the tooltip content
- **max-w-xs**: Maximum width constraint
- **z-50**: High z-index to appear above other content

## Visual Behavior

1. **Info Icon**: Appears in the top-right corner of cards with tooltips
   - Default opacity: 50%
   - Hover opacity: 100%
   - Smooth transition

2. **Tooltip Display**:
   - Trigger: Hover over the entire card
   - Position: Above the card
   - Style: Popup with background, border, padding
   - Animation: Fade in (handled by shadcn/ui)

3. **Click Behavior**:
   - Card click (for filtering) still works with tooltip
   - TooltipTrigger wraps the card but doesn't interfere with onClick

## Restoring Tooltips

To restore the tooltip functionality:

1. **Add tooltip content back to data** (`src/data/roadmapData.ts`):
   - Add `tooltip: "Your description"` to any RoadmapItem

2. **Restore the Info icon** in `src/components/RoadmapCard.tsx`:
   ```tsx
   {item.tooltip && (
     <Info className="w-3.5 h-3.5 text-muted-foreground opacity-50 group-hover:opacity-100 transition-opacity" />
   )}
   ```

3. **Restore conditional tooltip wrapper** in `src/components/RoadmapCard.tsx`:
   ```tsx
   if (item.tooltip) {
     return (
       <Tooltip>
         <TooltipTrigger asChild>
           {cardContent}
         </TooltipTrigger>
         <TooltipContent side="top" className="max-w-xs bg-popover border-border text-foreground p-3 z-50">
           <p className="text-sm leading-relaxed">{item.tooltip}</p>
         </TooltipContent>
       </Tooltip>
     );
   }
   ```

4. **Restore imports** in `src/components/RoadmapCard.tsx`:
   ```tsx
   import {
     Tooltip,
     TooltipContent,
     TooltipTrigger,
   } from "@/components/ui/tooltip";
   import { Info } from "lucide-react";
   ```

## Cards That Previously Had Tooltips

Before removal, these cards had tooltips:
- Amp SQL Platform - "Amp SQL Platform brings verifiable blockchain data through SQL queries..."
- Tycho Indexer (GTM Planning) - "Tycho Indexer enables fast, efficient indexing..."
- Substreams (Horizon-based MVP) - "Substreams provides high-throughput blockchain data streaming..."
- RPC - "Experimental RPC Data Service - exploring decentralized RPC infrastructure..."

## Design Considerations

When adding new tooltips:
- Keep descriptions concise (1-2 sentences)
- Focus on "why" and "what" rather than obvious details
- Use technical language appropriate for the audience
- Maintain consistency in tone and style
- Consider tooltip length relative to card importance

## Alternative Enhancement Ideas

- Add expandable/collapsible detail section instead of tooltips
- Use modal popups for longer descriptions
- Implement inline expandable text
- Add a "Learn More" link to external documentation

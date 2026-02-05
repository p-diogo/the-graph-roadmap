# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **React-based roadmap visualization** for The Graph's core development strategic roadmap (2025-2026). The project uses Vite for fast development and shadcn/ui for UI components.

**Current Version:** v0.1.0 (Release: 2026-02-04)

**Purpose:** Interactive, visually appealing roadmap with filtering capabilities organized by Time (quarters) and Strategic Layer (Product, Protocol, Tokenomics).

## Tech Stack

- **Vite** - Fast build tool and dev server
- **React 18** - UI library
- **TypeScript** - Type safety
- **shadcn/ui** - Pre-built UI components
- **Tailwind CSS** - Utility-first CSS
- **React Router** - Client-side routing
- **Recharts** - Data visualization

## Development Commands

```bash
# Install dependencies (recommended: use bun)
bun install
# or: npm install

# Start development server (runs on http://localhost:8080)
bun run dev
# or: npm run dev

# Build for production
bun run build
# or: npm run build

# Run tests
bun run test
# or: npm run test

# Run tests in watch mode
bun run test:watch
# or: npm run test:watch

# Lint code
bun run lint
# or: npm run lint
```

## Versioning

This project uses **Semantic Versioning (SemVer)** for all changes.

**Version Format:** `vMAJOR.MINOR.PATCH`

- **MAJOR:** Breaking changes (e.g., complete redesign, major structural changes)
- **MINOR:** New features, adding roadmap items, significant content additions
- **PATCH:** Bug fixes, minor text updates, small visual tweaks

## Commit Message Format

This project uses **Conventional Commits** format:

```
<type>: <description>

<optional detailed description>

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

**Commit types:**
- `feat:` - New features (triggers MINOR version bump)
- `fix:` - Bug fixes (triggers PATCH version bump)
- `chore:` - Maintenance tasks, dependencies, etc. (triggers PATCH version bump)
- `docs:` - Documentation changes
- `refactor:` - Code refactoring
- `style:` - Code style changes (formatting, etc.)
- `test:` - Adding or updating tests
- `perf:` - Performance improvements

**Examples:**

```bash
# Feature - new roadmap item
git commit -m "feat: add RPC card to protocol layer

Add new RPC card targeting Q3 2026 with experimental tag.
Milestone: Experimental RPC Data Service.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"

# Bug fix
git commit -m "fix: correct card alignment on mobile

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"

# Chore
git commit -m "chore: update dependencies

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

## Release Workflow

### Creating a New Release

1. **Make your changes** and commit with conventional commit format
2. **Bump the version** in `package.json` based on the changes:
   - MAJOR: Breaking changes
   - MINOR: New features
   - PATCH: Bug fixes
3. **Create a git tag:**
   ```bash
   git tag -a v0.1.0 -m "Release v0.1.0"
   ```
4. **Create GitHub release:**
   ```bash
   gh release create v0.1.0 --notes "Release notes here"
   ```
5. **Push to GitHub:**
   ```bash
   git push origin main --follow-tags
   ```

### Version Bump Guidelines

- **Content updates** (moving cards, renaming items): `PATCH` (e.g., v0.1.0 → v0.1.1)
- **Adding new roadmap items**: `MINOR` (e.g., v0.1.0 → v0.2.0)
- **Major restructuring or redesign**: `MAJOR` (e.g., v0.1.0 → v1.0.0)

**Always update the version in:**
- `package.json` - `"version"` field
- `CLAUDE.md` - Project Overview section (this file)

## File Structure

```
.
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── LayerSection.tsx
│   │   ├── RoadmapCard.tsx
│   │   └── FilterIndicator.tsx
│   ├── data/               # Static data
│   │   └── roadmapData.ts  # Main roadmap configuration
│   ├── hooks/              # Custom React hooks
│   │   └── useRoadmapFilter.ts
│   ├── pages/              # Page components
│   │   ├── Index.tsx       # Main roadmap page
│   │   └── NotFound.tsx
│   ├── lib/                # Utilities
│   ├── App.tsx             # Root component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
│   └── fonts/              # Euclid Circular A fonts
├── index.html              # HTML template
├── vite.config.ts          # Vite configuration
├── tailwind.config.ts      # Tailwind configuration
├── package.json            # Dependencies and scripts
├── README.md               # Project documentation
└── CLAUDE.md               # This file
```

## Data Structure

Roadmap data is defined in `src/data/roadmapData.ts`:

```typescript
export interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  quarter: string;
  spanQuarters?: string;    // e.g., "Q2 2026 - Q3 2026"
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
```

### Adding New Roadmap Items

Edit `src/data/roadmapData.ts` and add items to the appropriate layer:

```typescript
{
  id: "unique-id",
  title: "Card Title",
  description: "Milestone or description",
  quarter: "Q3 2026",
  spanQuarters: "Q3 2026 - Q4 2026",  // Optional
  status: "experimental",              // Optional: "experimental" | "tbc" | "redacted"
  tooltip: "Additional info on hover", // Optional
}
```

### Layer Color Classes

| Layer | Color Class | Description |
|-------|-------------|-------------|
| Product Layer | `product` | Cyan/Blue theme |
| Protocol Layer | `protocol` | Indigo/Purple theme |
| Tokenomics Layer | `tokenomics` | Emerald/Green theme |

## Product Family Color-Coding

Cards are automatically color-coded by **product family** based on keywords in their title or description. This allows users to visually identify related items across different layers at a glance.

### How It Works

The system is defined in `src/data/productFamilies.ts`. Each product family has:
- **keywords**: Array of strings to match (case-insensitive) in card title or description
- **color**: HSL accent color applied to the card title
- **label**: Display name shown in the legend

### Current Product Families

| Product | Keywords | Color (HSL) |
|---------|----------|-------------|
| Subgraphs | `subgraph` | Orange (25 95% 55%) |
| Amp | `amp` | Blue (217 91% 60%) |
| Substreams | `substreams`, `firehose` | Yellow (45 93% 58%) |
| Horizon | `horizon` | Purple (271 81% 65%) |
| Tycho | `tycho` | Cyan (186 94% 50%) |
| Token API | `token api` | Green (142 71% 45%) |
| RPC | `rpc` | Pink (340 82% 60%) |

### Adding a New Product Family

Edit `src/data/productFamilies.ts` and add a new entry:

```typescript
{
  id: "new-product",
  keywords: ["keyword1", "keyword2"],
  label: "New Product",
  color: {
    accent: "HUE SAT% LUM%",      // Main color for title
    bg: "HUE SAT% LUM% / 0.08",   // Subtle background (if using gradient mode)
    bgHover: "HUE SAT% LUM% / 0.15",
  },
},
```

### Inheritance Rule

**Important:** If a card mentions a product keyword anywhere in its title or description, it automatically inherits that product's color—regardless of which layer it belongs to.

Example: A card titled "Rewards Eligibility Oracle on Substreams" in the Tokenomics layer will display with the **Substreams yellow** color because "substreams" appears in the title.

### Keyword Priority

Keywords are matched in the order they appear in the `productFamilies` array. If a card contains multiple product keywords, it will use the color of the **first matching** product family.

## Status Badges

- **experimental** - Purple badge for experimental features
- **tbc** (To Be Confirmed) - Yellow/amber badge
- **redacted** - Grayed out card for confidential items

## Known Issues

1. **Card overlapping** - When adding spanning cards, ensure proper DOM order or explicit grid placement
2. **Mobile responsiveness** - Test on mobile after adding new items

## Design Patterns

- **Dark mode first** - Uses slate color scheme
- **Glassmorphism** - Subtle transparency and blur effects
- **Sticky headers** - Quarter headers stick to top on desktop
- **Interactive filtering** - Click cards or layers to filter

## Working on This Roadmap

The typical workflow for updating the roadmap:

1. **Add/edit items** - Modify `src/data/roadmapData.ts`
2. **Test locally** - Run `bun run dev` and visit http://localhost:8080
3. **Commit changes** - Use conventional commit format
4. **Create release** - Follow the release workflow above

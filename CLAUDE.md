# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

Navigate to the `vite-test/` directory for the main React application:

```bash
cd vite-test/
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## Project Architecture

This is a React learning repository with multiple example files and a main Vite-based application in the `vite-test/` directory.

### Main Application Structure

The main application is a word puzzle game (similar to Spelling Bee) with the following architecture:

- **Context-based state management**: Uses React Context with custom hooks pattern
- **Component hierarchy**: App → Header + Game → GameControls + PointSection
- **Data fetching**: Loads game data from `/public/api/data.json`
- **CSS Modules**: Uses modular CSS with `.module.css` files

### Key Architectural Patterns

1. **Context + Custom Hook Pattern**:
   - `GameContext` provides game state
   - `GameProvider` handles data fetching and state management
   - `useGame` custom hook provides type-safe context access

2. **Component Organization**:
   - Components are organized in feature-based folders
   - Each component has its own CSS module
   - Shared logic extracted to custom hooks

3. **Data Flow**:
   - Game data fetched in `GameProvider` on mount
   - Data flows down through context to child components
   - Form validation handled locally in `GameControls`

### File Structure (vite-test/)

```
src/
├── Components/           # All React components
│   ├── GameControls/    # Game input and controls
│   ├── PointSection/    # Score display
│   ├── Header.jsx       # App header
│   └── Game.jsx         # Main game layout
├── contexts/            # React Context setup
│   ├── GameContext.js   # Context definition
│   └── GameProvider.jsx # Provider with data fetching
├── hooks/               # Custom React hooks
│   └── useGame.js       # Game context hook
├── data/                # Data utilities (incomplete)
└── assets/              # Static assets
```

### Game Data Structure

The game data in `/public/api/data.json` contains:
- `centerLetter`: Required letter for all words
- `outerLetters`: Available letters for word formation
- `answers`: Valid word list
- `pangrams`: Words using all letters

### Development Notes

- The app uses React 19 with Vite for development
- ESLint configuration includes React hooks rules
- CSS modules are used for component styling
- The main app is wrapped in `GameProvider` for state management
- Form validation is handled with real-time feedback
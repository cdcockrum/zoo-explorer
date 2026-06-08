## Oklahoma City Zoo Visitor App

### Features
1. **AI Chat Assistant** — streaming AI chat that answers questions about animals, conservation, and the zoo. Uses localStorage for conversation persistence.
2. **Interactive Zoo Map** — visual exhibit map with animal locations, icons, and clickable areas.
3. **Personalized Tour Planner** — generates routes based on user interests and time available.
4. **Educational Scavenger Hunts** — gamified challenges around the zoo with checklist UI.

### Technical Plan

**Backend**
- Create `src/lib/ai-gateway.server.ts` — Lovable AI Gateway provider helper
- Create `src/routes/api/chat.ts` — streaming chat server route with zoo-specific system prompt
- The AI answers from a curated knowledge base about Oklahoma City Zoo (animals, conservation, geography)

**Frontend**
- Install `ai`, `@ai-sdk/react`, and AI Elements
- Create `src/routes/index.tsx` — landing page with zoo branding, hero, and navigation cards
- Create `src/routes/chat.tsx` — full-screen chat page with AI Elements
- Create `src/routes/map.tsx` — interactive zoo map with exhibit areas
- Create `src/routes/tours.tsx` — personalized tour planner with interest selection and generated route
- Create `src/routes/scavenger-hunt.tsx` — educational scavenger hunt with progress tracking
- localStorage chat persistence (one conversation, saved in browser)

**Design System**
- Nature-inspired color palette: deep greens, warm earth tones, amber accents
- Clean, friendly typography
- Animal mascot/branding

**Data**
- Curated Oklahoma City Zoo data (exhibits, animals, conservation facts) embedded as JSON
- No external database needed for this phase
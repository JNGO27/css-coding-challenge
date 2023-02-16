**Coding Challenge: CSS**:

*Problem*:
- Make Navbar HTML markup with corresponding CSS code to render a Chartmetric navbar.

*Rules*:
- Navbar should be fluid and span 100% width in all cases (desktop + mobile).
- Height of navbar is 50px.

*General Notes*
- Ignore gray padding from screenshot.
- Will use `heroicons` instead of `FontAwesome`(some free ones I wanted weren't available).
- No CSS frameworks. Ideally use your own raw code.

*Bonus Points*:
- Accessibility
- SEO
- Best Practices with React

**Initial Plan**

*Thinking in React*
- Initial component structure thought process:

```
.
└── components/
    ├── Navbar/
    │   ├── Navbar.tsx
    │   └── styles.css
    ├── Logo/
    │   ├── Logo.tsx
    │   └── styles.css
    ├── Search/
    │   ├── Search.tsx
    │   └── styles.css
    ├── Icon/
    │   ├── Icon.tsx
    │   └── styles.css
    └── index.ts
```
 - *Components*
   - Navbar
     - Will be the main component that gets rendered and will be container to hold all other components.
   - Logo
     - Will hold company logo with company name.
     - Will likely be a link that redirects to home.
     - Text will disappear on mobile screens.
     - Container with image and text
     - Need to think about accessibility and SEO if image doesn't appear and not to remove text from DOM tree when smaller. Instead make hidden.
   - Search
     - input with placeholder
     - Probably will use a an i tag with, container and positioning.
     - Will need React state for input value.
     - Will need to think about fluid sizing of search input. Maybe set a max-width width and use flex.
     - Should think about color on focus.
   - Icon
    - Should have unique logic on click for each icon.
    - For pointer devices. Probably should have some hover effect.

  *CSS*
  - Going to use Raw CSS using BEM naming convention.
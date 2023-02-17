**Coding Challenge: CSS**:

Starter thoughts on `StarterNotes.md`.

---

**Final Component Structure**

```
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
    ├── Announcements/
    │   ├── Announcements.tsx
    │   └── styles.css
    ├── Notifications/
    │   ├── Notifications.tsx
    │   └── styles.css
    ├── Menu/
    │   ├── Menu.tsx
    │   └── styles.css
    └── index.ts
```

**Decision on `px` vs `rem`:**

- Usage of the `px` unit.
  - When thinking about accessibility and responsiveness, I believe that on average, the `rem` unit is usually more accessible in a lot of cases. However, I believe that the `px` unit is the more accessible choice in this case. When considering px vs rem, the key question to ask is, _`Should the content I'm making grow if the user decides to change the default font-size?'`_ With the navbar, there isn't really content in terms of text to read. Instead, it's very structural. There are some tricky choices, like the text of the logo. I chose to use the px unit for that too because the logo and the text act together as one. However, in the search bar, if the default font-size is changed by the user, it still changes, as I believe that makes sense.

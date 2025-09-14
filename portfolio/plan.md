I have already set up a Vue 3 + TypeScript + Vite project with TailwindCSS configured inside a folder called "portfolio". Continue building my personal portfolio website in this folder based on the following requirements.

Project requirements
1. Use Vue 3 with TypeScript and Vite.
2. TailwindCSS is already installed and working.
3. Use Vue Router for multiple pages (Home, About, Experience, Projects, Contact).
4. Configure ESLint and Prettier with sensible defaults if not already done.

Layout and styling
1. Minimalist, modern, mobile-first UI with responsive breakpoints.
2. Navbar with logo and links to all pages, including a mobile hamburger menu.
3. Dark mode toggle that persists selection to localStorage.
4. Footer with social icons and copyright text.
5. Smooth transitions for route changes and small animations on sections.

Pages and sections
1. Home - Hero section with name, tagline, profile image placeholder, and CTA button (scroll to Projects or open Contact).
2. About - Short bio, skills list (chips), and a profile image placeholder. Include a download resume button.
3. Experience - Timeline or card layout rendering from a data file (src/data/experiences.ts). Include the following entries:
   - Acorn Globus – Full Stack Engineer (Jun 2025 – Present) – Remote, Gachibowli, Hyderabad
     Description: Maintainer for an in-house product, releasing new features, enhancing UI, and resolving bugs.
     Tech: Vue.js, React.js, and additional skills.
   - Acorn Globus – Full Stack Intern (Feb 2025 – Jun 2025) – Remote, Gachibowli, Hyderabad
     Description: Contributed to in-house product by adding features, improving UI/UX, and fixing bugs.
     Tech: Vue.js, React.js, and additional skills.
   - CodeQuotient – Software Engineer Intern (Jun 2024 – Jul 2024) – Remote, Mohali, India
     Description: Learned low-level C/C++ and web development. Built a text editor and snake game in C++, plus a landing page and to-do app.
     Tech: C++, Web Development.
   Ensure internship and full-time role at Acorn Globus are separate entries.
4. Projects - Grid of ProjectCard components fed by src/data/projects.ts. Each entry should have a title, description, tech stack, image placeholder, GitHub link, and live demo link.
5. Contact - Simple form with name, email, and message. Add client-side validation. On submit, log to console (placeholder for backend).

Components
- Navbar.vue
- Footer.vue
- DarkModeToggle.vue
- SectionTitle.vue (reusable for section headers)
- ProjectCard.vue
- ExperienceCard.vue (or TimelineItem.vue)
- InputField.vue and TextArea.vue for reusable form inputs
- Button.vue for consistent buttons

Code style and architecture
1. Use Composition API with <script setup lang="ts">.
2. Strong typing for props and emits.
3. Organize files into src/components, src/pages, src/router, src/data.
4. Experience and Projects sections must render dynamically from data files (src/data/experiences.ts and src/data/projects.ts).
5. Keep components modular and reusable.

Extra features
1. Add SEO meta tags using Vue Router meta and update document head dynamically.
2. Implement dark mode persistence in localStorage.
3. Add animations for section reveals and page transitions.
4. Provide a README.md in the portfolio folder with setup instructions and notes on how to edit data in src/data.
5. Add placeholder images and clear comments for where to replace them.
6. Validate contact form fields and display error messages.

Acceptance criteria
1. All five pages exist and are routed via Vue Router.
2. Navbar and footer are shared across pages.
3. Experience and Projects render data-driven entries.
4. Dark mode toggle works and persists.
5. Animations and transitions are functional.
6. README includes setup instructions and data-editing notes.

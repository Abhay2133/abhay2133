# Portfolio Website

A modern, responsive portfolio website built with Vue 3, TypeScript, and TailwindCSS. Features dark mode, smooth animations, and a mobile-first design approach.

![Portfolio Screenshot](https://github.com/user-attachments/assets/3434303e-adee-4ce6-925c-8e96a928f911)

## ✨ Features

- **Modern Stack**: Vue 3 with Composition API, TypeScript, and Vite
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Dark Mode**: Toggle between light and dark themes with localStorage persistence
- **Smooth Animations**: Page transitions and micro-interactions
- **SEO Optimized**: Dynamic meta tags for each page
- **Accessible**: WCAG compliant navigation and form validation
- **Performance**: Optimized build with Vite

## 🛠️ Tech Stack

- **Frontend**: Vue 3, TypeScript, TailwindCSS
- **Build Tool**: Vite
- **Routing**: Vue Router 4
- **Code Quality**: ESLint, Prettier
- **Icons**: Heroicons (embedded SVGs)

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/          # Reusable Vue components
│   │   ├── Button.vue
│   │   ├── DarkModeToggle.vue
│   │   ├── ExperienceCard.vue
│   │   ├── Footer.vue
│   │   ├── InputField.vue
│   │   ├── Navbar.vue
│   │   ├── ProjectCard.vue
│   │   ├── SectionTitle.vue
│   │   └── TextArea.vue
│   ├── data/                # Data files for dynamic content
│   │   ├── experiences.ts
│   │   └── projects.ts
│   ├── pages/               # Page components
│   │   ├── About.vue
│   │   ├── Contact.vue
│   │   ├── Experience.vue
│   │   ├── Home.vue
│   │   └── Projects.vue
│   ├── router/              # Vue Router configuration
│   │   └── index.ts
│   ├── App.vue              # Root component
│   ├── main.ts              # Application entry point
│   └── style.css            # Global styles
├── public/                  # Static assets
│   └── placeholder-*.jpg    # Placeholder images
├── package.json
├── tailwind.config.js       # TailwindCSS configuration
├── vite.config.ts           # Vite configuration
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📝 Customization Guide

### Updating Personal Information

#### 1. Experience Data (`src/data/experiences.ts`)

Update the `experiences` array with your professional experience:

```typescript
export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Your Company Name',
    position: 'Your Position',
    period: 'Start Date – End Date',
    location: 'Location',
    description: 'Description of your role and achievements',
    technologies: ['Tech1', 'Tech2', 'Tech3']
  }
  // Add more experiences...
]
```

#### 2. Projects Data (`src/data/projects.ts`)

Update the `projects` array with your projects:

```typescript
export const projects: Project[] = [
  {
    id: '1',
    title: 'Project Name',
    description: 'Project description',
    technologies: ['Vue.js', 'TypeScript'],
    imageUrl: '/path-to-your-image.jpg',
    githubUrl: 'https://github.com/username/project',
    liveUrl: 'https://project-demo.com'
  }
  // Add more projects...
]
```

#### 3. Personal Details

Update personal information in the following files:

- **Home Page** (`src/pages/Home.vue`): Update name, tagline, and description
- **About Page** (`src/pages/About.vue`): Update bio, skills, and contact details
- **Contact Page** (`src/pages/Contact.vue`): Update contact information and social links
- **Footer** (`src/components/Footer.vue`): Update social media links

#### 4. Images

Replace placeholder images in the `public` directory:

- `placeholder-profile.jpg` - Your profile photo for the home page
- `placeholder-about.jpg` - Your photo for the about page
- `placeholder-project-*.jpg` - Screenshots of your projects

**Image Requirements:**
- Profile images: 400x400px (square, will be displayed in a circle)
- Project images: 800x400px (2:1 aspect ratio)
- Use JPG or PNG format
- Optimize images for web (< 200KB recommended)

### Styling Customization

#### Colors

Update the color scheme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        500: '#3b82f6',
        600: '#2563eb',
        // ... add your brand colors
      }
    }
  }
}
```

#### Fonts

Add custom fonts in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    fontFamily: {
      sans: ['Your Font', 'system-ui', 'sans-serif'],
    }
  }
}
```

Don't forget to import the font in your CSS or HTML.

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and use it in the relevant page component
3. Update the navigation if needed in `src/components/Navbar.vue`

## 📱 Responsive Design

The portfolio is built with a mobile-first approach:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components are fully responsive and tested across different screen sizes.

## 🌙 Dark Mode

Dark mode is implemented using TailwindCSS dark mode classes:

- Toggle button in the navigation
- Persists preference to localStorage
- Automatically detects system preference on first visit
- Smooth transitions between themes

## 🔧 Development Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Format code
npm run format
```

## 📧 Contact Form

The contact form includes:

- Client-side validation
- Error message display
- Success feedback
- Console logging (replace with your backend integration)

To integrate with a backend:

1. Update the `submitForm` function in `src/pages/Contact.vue`
2. Replace the console.log with your API call
3. Handle success/error responses appropriately

## 🚀 Deployment

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure redirects for SPA routing in `_redirects` file

### Vercel

1. Connect your repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script: `"deploy": "gh-pages -d dist"`
3. Run: `npm run build && npm run deploy`

## 🐛 Troubleshooting

### Common Issues

1. **Images not loading**: Ensure images are in the `public` directory and paths start with `/`
2. **Dark mode not working**: Check if TailwindCSS dark mode is configured correctly
3. **Build errors**: Ensure all TypeScript types are properly defined

### Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

Built with ❤️ using Vue 3, TypeScript & TailwindCSS

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Experience from '../pages/Experience.vue'
import Projects from '../pages/Projects.vue'
import Contact from '../pages/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Home | Portfolio',
        description: 'Welcome to my portfolio website'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        title: 'About | Portfolio',
        description: 'Learn more about my background and skills'
      }
    },
    {
      path: '/experience',
      name: 'experience',
      component: Experience,
      meta: {
        title: 'Experience | Portfolio',
        description: 'My professional experience and work history'
      }
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
      meta: {
        title: 'Projects | Portfolio',
        description: 'Showcase of my development projects'
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      meta: {
        title: 'Contact | Portfolio',
        description: 'Get in touch with me'
      }
    }
  ],
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// SEO meta tags update
router.beforeEach((to, _from, next) => {
  const title = (to.meta?.title as string) || 'Portfolio'
  const description = (to.meta?.description as string) || 'My personal portfolio website'

  document.title = title

  // Update meta description
  let metaDescription = document.querySelector('meta[name="description"]')
  if (!metaDescription) {
    metaDescription = document.createElement('meta')
    metaDescription.setAttribute('name', 'description')
    document.head.appendChild(metaDescription)
  }
  metaDescription.setAttribute('content', description)

  next()
})

export default router

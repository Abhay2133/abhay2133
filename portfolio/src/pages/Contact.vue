<script setup lang="ts">
import { ref, reactive } from 'vue'
import SectionTitle from '../components/SectionTitle.vue'
import InputField from '../components/InputField.vue'
import TextArea from '../components/TextArea.vue'
import Button from '../components/Button.vue'

// Form data
const formData = reactive({
  name: '',
  email: '',
  message: ''
})

// Form errors
const errors = reactive({
  name: '',
  email: '',
  message: ''
})

// Form state
const isSubmitting = ref(false)
const isSubmitted = ref(false)

// Validation functions
const validateName = () => {
  if (!formData.name.trim()) {
    errors.name = 'Name is required'
    return false
  }
  if (formData.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters'
    return false
  }
  errors.name = ''
  return true
}

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!formData.email.trim()) {
    errors.email = 'Email is required'
    return false
  }
  if (!emailRegex.test(formData.email)) {
    errors.email = 'Please enter a valid email address'
    return false
  }
  errors.email = ''
  return true
}

const validateMessage = () => {
  if (!formData.message.trim()) {
    errors.message = 'Message is required'
    return false
  }
  if (formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters'
    return false
  }
  errors.message = ''
  return true
}

// Submit form
const submitForm = async () => {
  // Validate all fields
  const isNameValid = validateName()
  const isEmailValid = validateEmail()
  const isMessageValid = validateMessage()

  if (!isNameValid || !isEmailValid || !isMessageValid) {
    return
  }

  isSubmitting.value = true

  try {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Log form data to console (placeholder for backend)
    console.log('Form submitted:', {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      timestamp: new Date().toISOString()
    })

    // Show success state
    isSubmitted.value = true

    // Reset form after successful submission
    setTimeout(() => {
      formData.name = ''
      formData.email = ''
      formData.message = ''
      isSubmitted.value = false
    }, 3000)
  } catch (error) {
    console.error('Error submitting form:', error)
    alert('There was an error submitting the form. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}

// Contact information
const contactInfo = [
  {
    icon: 'M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    label: 'Email',
    value: 'abhay2133@example.com',
    href: 'mailto:abhay2133@example.com'
  },
  {
    icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
    label: 'Phone',
    value: '+91 XXX XXX XXXX',
    href: 'tel:+91xxxxxxxxxx'
  },
  {
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
    label: 'Location',
    value: 'India',
    href: null
  }
]

// Social links
const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/abhay2133',
    icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/abhay2133',
    icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/abhay2133',
    icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z'
  }
]
</script>

<template>
  <div class="min-h-screen pt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionTitle title="Get In Touch" subtitle="Let's work together on your next project" />

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Send me a message
          </h3>

          <!-- Success Message -->
          <div
            v-if="isSubmitted"
            class="mb-6 p-4 bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-600 rounded-lg"
          >
            <div class="flex items-center">
              <svg
                class="w-5 h-5 text-green-600 dark:text-green-400 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span class="text-green-800 dark:text-green-200"
                >Message sent successfully! I'll get back to you soon.</span
              >
            </div>
          </div>

          <form @submit.prevent="submitForm" class="space-y-6">
            <InputField
              label="Name"
              v-model="formData.name"
              :error="errors.name"
              placeholder="Your full name"
              required
              @blur="validateName"
            />

            <InputField
              label="Email"
              type="email"
              v-model="formData.email"
              :error="errors.email"
              placeholder="your.email@example.com"
              required
              @blur="validateEmail"
            />

            <TextArea
              label="Message"
              v-model="formData.message"
              :error="errors.message"
              placeholder="Tell me about your project or just say hello..."
              :rows="6"
              required
              @blur="validateMessage"
            />

            <Button type="submit" :disabled="isSubmitting" full-width size="lg">
              <svg
                v-if="isSubmitting"
                class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </Button>
          </form>
        </div>

        <!-- Contact Information -->
        <div class="space-y-8">
          <!-- Contact Details -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>
            <div class="space-y-4">
              <div v-for="contact in contactInfo" :key="contact.label" class="flex items-center">
                <div
                  class="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4"
                >
                  <svg
                    class="w-5 h-5 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      :d="contact.icon"
                    />
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-500 dark:text-gray-400">{{ contact.label }}</p>
                  <a
                    v-if="contact.href"
                    :href="contact.href"
                    class="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    {{ contact.value }}
                  </a>
                  <span v-else class="text-gray-900 dark:text-white">
                    {{ contact.value }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Connect with me
            </h3>
            <div class="flex space-x-4">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                :aria-label="social.name"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path :d="social.icon" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Availability -->
          <div
            class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-white"
          >
            <h3 class="text-2xl font-semibold mb-4">Let's work together!</h3>
            <p class="text-blue-100 mb-4">
              I'm currently available for freelance projects and full-time opportunities. Whether
              you have a project in mind or just want to chat about technology, I'd love to hear
              from you.
            </p>
            <div class="flex items-center">
              <div class="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span class="text-sm">Available for new projects</span>
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="mt-20">
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Common questions about working with me"
        />

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              What's your typical response time?
            </h4>
            <p class="text-gray-600 dark:text-gray-300">
              I usually respond to emails within 24 hours during weekdays. For urgent matters, feel
              free to mention it in your message.
            </p>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Do you work on weekends?
            </h4>
            <p class="text-gray-600 dark:text-gray-300">
              While I typically work Monday to Friday, I'm flexible with deadlines and can
              accommodate urgent projects when needed.
            </p>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              What technologies do you specialize in?
            </h4>
            <p class="text-gray-600 dark:text-gray-300">
              I specialize in Vue.js, React.js, Node.js, and TypeScript. I'm also experienced with
              various databases and modern development tools.
            </p>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Do you provide ongoing support?
            </h4>
            <p class="text-gray-600 dark:text-gray-300">
              Yes, I offer maintenance and support services for projects I've worked on. We can
              discuss the terms based on your specific needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

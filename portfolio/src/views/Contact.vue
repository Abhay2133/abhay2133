<template>
  <div class="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto space-y-16">
      <!-- Header -->
      <SectionTitle
        title="Get In Touch"
        subtitle="Let's discuss your project or just say hello"
      />

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <!-- Contact Info -->
        <div class="space-y-8">
          <div>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Let's Connect
            </h3>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              I'm always excited to discuss new opportunities, collaborate on interesting projects, 
              or simply connect with fellow developers. Feel free to reach out!
            </p>
          </div>

          <!-- Contact Methods -->
          <div class="space-y-6">
            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p class="text-gray-900 dark:text-white font-medium">Email</p>
                <a href="mailto:abhay2133@example.com" class="text-primary-600 dark:text-primary-400 hover:underline">
                  abhay2133@example.com
                </a>
              </div>
            </div>

            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div>
                <p class="text-gray-900 dark:text-white font-medium">GitHub</p>
                <a href="https://github.com/abhay2133" target="_blank" rel="noopener noreferrer" class="text-primary-600 dark:text-primary-400 hover:underline">
                  @abhay2133
                </a>
              </div>
            </div>

            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div>
                <p class="text-gray-900 dark:text-white font-medium">LinkedIn</p>
                <a href="https://linkedin.com/in/abhay2133" target="_blank" rel="noopener noreferrer" class="text-primary-600 dark:text-primary-400 hover:underline">
                  @abhay2133
                </a>
              </div>
            </div>
          </div>

          <!-- Response Time -->
          <div class="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-6">
            <div class="flex items-center space-x-3">
              <svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p class="text-primary-900 dark:text-primary-100 font-medium">Quick Response</p>
                <p class="text-primary-700 dark:text-primary-300 text-sm">I typically respond within 24 hours</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
          <form @submit.prevent="submitForm" class="space-y-6">
            <InputField
              id="name"
              label="Name"
              v-model="form.name"
              placeholder="Your full name"
              required
              :error="errors.name"
            />

            <InputField
              id="email"
              label="Email"
              type="email"
              v-model="form.email"
              placeholder="your.email@example.com"
              required
              :error="errors.email"
            />

            <InputField
              id="subject"
              label="Subject"
              v-model="form.subject"
              placeholder="What's this about?"
              required
              :error="errors.subject"
            />

            <TextArea
              id="message"
              label="Message"
              v-model="form.message"
              placeholder="Tell me about your project or just say hello..."
              required
              :rows="6"
              :error="errors.message"
            />

            <Button
              type="submit"
              variant="primary"
              size="lg"
              :disabled="isSubmitting"
              class="w-full"
            >
              <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </Button>
          </form>

          <!-- Success Message -->
          <Transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <div v-if="showSuccess" class="mt-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-green-600 dark:text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <p class="text-green-800 dark:text-green-200 font-medium">
                  Message sent successfully! I'll get back to you soon.
                </p>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import Button from '../components/ui/Button.vue';
import InputField from '../components/ui/InputField.vue';
import TextArea from '../components/ui/TextArea.vue';
import SectionTitle from '../components/SectionTitle.vue';

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const errors = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const isSubmitting = ref(false);
const showSuccess = ref(false);

const validateForm = () => {
  // Reset errors
  Object.keys(errors).forEach(key => {
    errors[key as keyof typeof errors] = '';
  });

  let isValid = true;

  // Name validation
  if (!form.name.trim()) {
    errors.name = 'Name is required';
    isValid = false;
  }

  // Email validation
  if (!form.email.trim()) {
    errors.email = 'Email is required';
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address';
    isValid = false;
  }

  // Subject validation
  if (!form.subject.trim()) {
    errors.subject = 'Subject is required';
    isValid = false;
  }

  // Message validation
  if (!form.message.trim()) {
    errors.message = 'Message is required';
    isValid = false;
  } else if (form.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long';
    isValid = false;
  }

  return isValid;
};

const submitForm = async () => {
  if (!validateForm()) {
    return;
  }

  isSubmitting.value = true;

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Log form data to console (placeholder)
    console.log('Form submitted:', form);
    
    // Reset form
    Object.keys(form).forEach(key => {
      form[key as keyof typeof form] = '';
    });
    
    // Show success message
    showSuccess.value = true;
    setTimeout(() => {
      showSuccess.value = false;
    }, 5000);
    
  } catch (error) {
    console.error('Error submitting form:', error);
    // In a real app, you would show an error message here
  } finally {
    isSubmitting.value = false;
  }
};
</script>
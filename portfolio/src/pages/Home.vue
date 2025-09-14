<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Button from '../components/Button.vue'

const scrollToProjects = () => {
  // This will scroll to projects when implemented on the home page
  // For now, navigate to projects page
  window.location.href = '/projects'
}
</script>

<template>
  <div class="min-h-screen pt-16">
    <!-- Hero Section -->
    <section
      class="relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20 lg:py-32"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Content -->
          <div class="text-center lg:text-left">
            <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm
              <span class="text-blue-600 dark:text-blue-400">Abhay</span>
            </h1>
            <p class="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Full Stack Developer passionate about creating innovative web solutions
            </p>
            <p class="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-2xl">
              I specialize in Vue.js, React.js, and modern web technologies. I love building
              user-friendly applications that solve real-world problems.
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button @click="scrollToProjects" size="lg"> View My Work </Button>
              <RouterLink to="/contact">
                <Button variant="outline" size="lg" class="w-full sm:w-auto"> Get In Touch </Button>
              </RouterLink>
            </div>
          </div>

          <!-- Profile Image -->
          <div class="flex justify-center lg:justify-end">
            <div class="relative">
              <div
                class="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-2"
              >
                <div
                  class="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden"
                >
                  <!-- Placeholder for profile image -->
                  <img
                    src="/placeholder-profile.jpg"
                    alt="Abhay's Profile"
                    class="w-full h-full object-cover rounded-full"
                    @error="($event.target as HTMLImageElement).style.display = 'none'"
                  />
                  <!-- Fallback icon when image is not available -->
                  <svg
                    class="w-32 h-32 text-gray-400 dark:text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    style="display: none"
                    @load="($event.target as HTMLElement).style.display = 'block'"
                  >
                    <path
                      d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
              </div>
              <!-- Decorative elements -->
              <div
                class="absolute -top-4 -right-4 w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded-full opacity-60 animate-pulse"
              ></div>
              <div
                class="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full opacity-60 animate-pulse delay-300"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Background decorations -->
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div
          class="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300 dark:bg-blue-700 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-20 animate-blob"
        ></div>
        <div
          class="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-20 animate-blob animation-delay-2000"
        ></div>
        <div
          class="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-300 dark:bg-pink-700 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-20 animate-blob animation-delay-4000"
        ></div>
      </div>
    </section>

    <!-- Quick Stats Section -->
    <section class="py-16 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div class="p-6">
            <div class="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">2+</div>
            <div class="text-lg text-gray-600 dark:text-gray-300">Years Experience</div>
          </div>
          <div class="p-6">
            <div class="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">10+</div>
            <div class="text-lg text-gray-600 dark:text-gray-300">Projects Completed</div>
          </div>
          <div class="p-6">
            <div class="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</div>
            <div class="text-lg text-gray-600 dark:text-gray-300">Technologies</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>

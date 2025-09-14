<script setup lang="ts">
import SectionTitle from '../components/SectionTitle.vue'
import Button from '../components/Button.vue'

const skills = [
  'Vue.js',
  'React.js',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Express.js',
  'MongoDB',
  'PostgreSQL',
  'TailwindCSS',
  'CSS',
  'HTML',
  'Git',
  'C++',
  'Python',
  'Web Development'
]

const downloadResume = () => {
  // This would typically download a resume file
  // For now, we'll just log to console as a placeholder
  console.log('Downloading resume...')
  // In a real application, you would:
  // window.open('/resume.pdf', '_blank')
  alert('Resume download functionality will be implemented with actual file.')
}
</script>

<template>
  <div class="min-h-screen pt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionTitle title="About Me" subtitle="Get to know me better" />

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Profile Image -->
        <div class="flex justify-center lg:justify-start">
          <div class="relative">
            <div class="w-80 h-80 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-500 p-2">
              <div
                class="w-full h-full rounded-2xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden"
              >
                <!-- Placeholder for profile image -->
                <img
                  src="/placeholder-about.jpg"
                  alt="Abhay's About Photo"
                  class="w-full h-full object-cover rounded-2xl"
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
              class="absolute -top-4 -right-4 w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded-2xl opacity-60 rotate-12"
            ></div>
            <div
              class="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-2xl opacity-60 -rotate-12"
            ></div>
          </div>
        </div>

        <!-- Bio Content -->
        <div class="space-y-6">
          <div class="prose prose-lg dark:prose-invert max-w-none">
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              Hello! I'm Abhay, a passionate Full Stack Developer with a love for creating
              innovative web solutions. Currently working at Acorn Globus as a Full Stack Engineer,
              I specialize in modern JavaScript frameworks and have a strong foundation in both
              frontend and backend technologies.
            </p>

            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              My journey in software development started with learning C++ and has evolved into
              expertise in web technologies like Vue.js, React.js, and Node.js. I'm particularly
              passionate about creating user-friendly interfaces and scalable backend systems.
            </p>

            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or learning about the latest trends in software development. I
              believe in continuous learning and always strive to improve my skills.
            </p>
          </div>

          <!-- Download Resume Button -->
          <div class="pt-4">
            <Button @click="downloadResume" size="lg">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 10v6m0 0l-4-4m4 4l4-4m5-8V7a2 2 0 00-2-2H5a2 2 0 00-2 2v11a2 2 0 002 2h14a2 2 0 002-2v-1"
                />
              </svg>
              Download Resume
            </Button>
          </div>
        </div>
      </div>

      <!-- Skills Section -->
      <div class="mt-20">
        <SectionTitle
          title="Skills & Technologies"
          subtitle="The tools and technologies I work with"
        />

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <div
            v-for="skill in skills"
            :key="skill"
            class="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            <span class="text-gray-800 dark:text-gray-200 font-medium">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>

      <!-- Personal Info Section -->
      <div class="mt-20">
        <SectionTitle title="Personal Information" />

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Contact Details
            </h3>
            <div class="space-y-3">
              <div class="flex items-center">
                <svg
                  class="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span class="text-gray-700 dark:text-gray-300">abhay2133@example.com</span>
              </div>
              <div class="flex items-center">
                <svg
                  class="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span class="text-gray-700 dark:text-gray-300">India</span>
              </div>
            </div>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Interests</h3>
            <div class="space-y-2">
              <div class="flex items-center">
                <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                <span class="text-gray-700 dark:text-gray-300">Web Development</span>
              </div>
              <div class="flex items-center">
                <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                <span class="text-gray-700 dark:text-gray-300">Open Source</span>
              </div>
              <div class="flex items-center">
                <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                <span class="text-gray-700 dark:text-gray-300">UI/UX Design</span>
              </div>
              <div class="flex items-center">
                <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                <span class="text-gray-700 dark:text-gray-300">Technology Trends</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

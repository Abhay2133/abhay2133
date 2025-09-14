<script setup lang="ts">
import SectionTitle from '../components/SectionTitle.vue'
import ProjectCard from '../components/ProjectCard.vue'
import { projects } from '../data/projects'
</script>

<template>
  <div class="min-h-screen pt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionTitle title="My Projects" subtitle="A showcase of my development work" />

      <!-- Featured Project -->
      <div class="mb-16">
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Featured Project
        </h3>
        <div class="max-w-4xl mx-auto">
          <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h4 class="text-3xl font-bold mb-4">Portfolio Website</h4>
                <p class="text-blue-100 mb-6 text-lg">
                  This very portfolio website you're viewing! Built with modern technologies
                  including Vue 3, TypeScript, and TailwindCSS. Features dark mode, responsive
                  design, and smooth animations.
                </p>
                <div class="flex flex-wrap gap-2 mb-6">
                  <span class="px-3 py-1 bg-white/20 rounded-full text-sm">Vue.js</span>
                  <span class="px-3 py-1 bg-white/20 rounded-full text-sm">TypeScript</span>
                  <span class="px-3 py-1 bg-white/20 rounded-full text-sm">TailwindCSS</span>
                  <span class="px-3 py-1 bg-white/20 rounded-full text-sm">Vite</span>
                </div>
                <div class="flex space-x-4">
                  <a
                    href="#"
                    class="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
                  >
                    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                      />
                    </svg>
                    View Code
                  </a>
                  <a
                    href="#"
                    class="inline-flex items-center px-6 py-3 bg-white/10 border border-white/20 text-white rounded-lg font-medium hover:bg-white/20 transition-colors duration-200"
                  >
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
              <div class="hidden lg:block">
                <div class="w-full h-64 bg-white/10 rounded-xl flex items-center justify-center">
                  <svg
                    class="w-24 h-24 text-white/60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- All Projects Grid -->
      <div class="mb-8">
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          All Projects
        </h3>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
      </div>

      <!-- Project Categories -->
      <div class="mt-20">
        <SectionTitle
          title="Project Categories"
          subtitle="Different types of projects I've worked on"
        />

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            class="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div
              class="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-8 h-8 text-blue-600 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Web Applications
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Full-stack web applications with modern frameworks and responsive design
            </p>
          </div>

          <div
            class="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div
              class="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-8 h-8 text-green-600 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              API Development
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              RESTful APIs and backend services with proper authentication and data management
            </p>
          </div>

          <div
            class="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div
              class="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-8 h-8 text-purple-600 dark:text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Frontend UI/UX</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Beautiful and intuitive user interfaces with focus on user experience
            </p>
          </div>
        </div>
      </div>

      <!-- Technologies Used -->
      <div class="mt-20">
        <SectionTitle
          title="Technologies I Use"
          subtitle="My preferred tech stack for different types of projects"
        />

        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Frontend</h4>
              <ul class="space-y-2">
                <li class="text-gray-600 dark:text-gray-300">• Vue.js 3</li>
                <li class="text-gray-600 dark:text-gray-300">• React.js</li>
                <li class="text-gray-600 dark:text-gray-300">• TypeScript</li>
                <li class="text-gray-600 dark:text-gray-300">• TailwindCSS</li>
              </ul>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Backend</h4>
              <ul class="space-y-2">
                <li class="text-gray-600 dark:text-gray-300">• Node.js</li>
                <li class="text-gray-600 dark:text-gray-300">• Express.js</li>
                <li class="text-gray-600 dark:text-gray-300">• MongoDB</li>
                <li class="text-gray-600 dark:text-gray-300">• PostgreSQL</li>
              </ul>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Tools</h4>
              <ul class="space-y-2">
                <li class="text-gray-600 dark:text-gray-300">• Vite</li>
                <li class="text-gray-600 dark:text-gray-300">• Git</li>
                <li class="text-gray-600 dark:text-gray-300">• VS Code</li>
                <li class="text-gray-600 dark:text-gray-300">• Figma</li>
              </ul>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Others</h4>
              <ul class="space-y-2">
                <li class="text-gray-600 dark:text-gray-300">• C++</li>
                <li class="text-gray-600 dark:text-gray-300">• Python</li>
                <li class="text-gray-600 dark:text-gray-300">• REST APIs</li>
                <li class="text-gray-600 dark:text-gray-300">• Responsive Design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

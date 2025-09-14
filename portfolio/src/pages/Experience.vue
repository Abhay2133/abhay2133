<script setup lang="ts">
import SectionTitle from '../components/SectionTitle.vue'
import ExperienceCard from '../components/ExperienceCard.vue'
import { experiences } from '../data/experiences'
</script>

<template>
  <div class="min-h-screen pt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionTitle title="Professional Experience" subtitle="My journey in software development" />

      <!-- Timeline -->
      <div class="max-w-4xl mx-auto">
        <div class="relative">
          <ExperienceCard
            v-for="(experience, index) in experiences"
            :key="experience.id"
            :experience="experience"
            :is-last="index === experiences.length - 1"
          />
        </div>
      </div>

      <!-- Additional Experience Section -->
      <div class="mt-20">
        <SectionTitle title="Key Achievements" subtitle="Highlights from my professional journey" />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div class="flex items-center mb-4">
              <div
                class="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center"
              >
                <svg
                  class="w-6 h-6 text-blue-600 dark:text-blue-400"
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
              </div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white ml-3">
                Product Maintenance
              </h3>
            </div>
            <p class="text-gray-600 dark:text-gray-300">
              Successfully maintained and enhanced in-house products at Acorn Globus, implementing
              new features and resolving critical bugs.
            </p>
          </div>

          <div
            class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div class="flex items-center mb-4">
              <div
                class="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center"
              >
                <svg
                  class="w-6 h-6 text-green-600 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white ml-3">
                UI/UX Enhancement
              </h3>
            </div>
            <p class="text-gray-600 dark:text-gray-300">
              Improved user interfaces and experiences across multiple projects, focusing on
              accessibility and responsive design principles.
            </p>
          </div>

          <div
            class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div class="flex items-center mb-4">
              <div
                class="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center"
              >
                <svg
                  class="w-6 h-6 text-purple-600 dark:text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white ml-3">
                Technical Learning
              </h3>
            </div>
            <p class="text-gray-600 dark:text-gray-300">
              Continuously expanding technical skills from C++ fundamentals to modern web
              development frameworks and best practices.
            </p>
          </div>
        </div>
      </div>

      <!-- Skills Growth Section -->
      <div class="mt-20">
        <SectionTitle
          title="Technical Growth"
          subtitle="Evolution of my technical skills over time"
        />

        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <div class="space-y-8">
            <!-- Frontend Skills -->
            <div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Frontend Development
              </h3>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="text-center">
                  <div
                    class="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-2"
                  >
                    <span class="text-blue-600 dark:text-blue-400 font-bold">Vue</span>
                  </div>
                  <span class="text-sm text-gray-600 dark:text-gray-300">Vue.js</span>
                </div>
                <div class="text-center">
                  <div
                    class="w-16 h-16 bg-cyan-100 dark:bg-cyan-900 rounded-full flex items-center justify-center mx-auto mb-2"
                  >
                    <span class="text-cyan-600 dark:text-cyan-400 font-bold">React</span>
                  </div>
                  <span class="text-sm text-gray-600 dark:text-gray-300">React.js</span>
                </div>
                <div class="text-center">
                  <div
                    class="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-2"
                  >
                    <span class="text-yellow-600 dark:text-yellow-400 font-bold">JS</span>
                  </div>
                  <span class="text-sm text-gray-600 dark:text-gray-300">JavaScript</span>
                </div>
                <div class="text-center">
                  <div
                    class="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-2"
                  >
                    <span class="text-blue-600 dark:text-blue-400 font-bold">TS</span>
                  </div>
                  <span class="text-sm text-gray-600 dark:text-gray-300">TypeScript</span>
                </div>
              </div>
            </div>

            <!-- Backend Skills -->
            <div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Backend Development
              </h3>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="text-center">
                  <div
                    class="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-2"
                  >
                    <span class="text-green-600 dark:text-green-400 font-bold">Node</span>
                  </div>
                  <span class="text-sm text-gray-600 dark:text-gray-300">Node.js</span>
                </div>
                <div class="text-center">
                  <div
                    class="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-2"
                  >
                    <span class="text-gray-600 dark:text-gray-300 font-bold">API</span>
                  </div>
                  <span class="text-sm text-gray-600 dark:text-gray-300">Express.js</span>
                </div>
                <div class="text-center">
                  <div
                    class="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-2"
                  >
                    <span class="text-green-600 dark:text-green-400 font-bold">DB</span>
                  </div>
                  <span class="text-sm text-gray-600 dark:text-gray-300">MongoDB</span>
                </div>
                <div class="text-center">
                  <div
                    class="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-2"
                  >
                    <span class="text-blue-600 dark:text-blue-400 font-bold">C++</span>
                  </div>
                  <span class="text-sm text-gray-600 dark:text-gray-300">C++</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

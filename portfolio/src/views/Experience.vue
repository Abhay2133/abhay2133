<template>
  <div class="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto space-y-16">
      <!-- Header -->
      <SectionTitle
        title="Experience"
        subtitle="My professional journey and career milestones"
      />

      <!-- Timeline -->
      <div class="space-y-8">
        <ExperienceCard
          v-for="(experience, index) in experiences"
          :key="experience.id"
          :experience="experience"
          :class="{ 'pb-0': index === experiences.length - 1 }"
        />
      </div>

      <!-- Skills Summary -->
      <div class="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 space-y-6">
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white text-center">
          Technical Expertise
        </h3>
        <p class="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Throughout my career, I've worked with various technologies and gained expertise in multiple domains.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Core Technologies -->
          <div class="space-y-4">
            <h4 class="text-lg font-semibold text-gray-900 dark:text-white">
              Core Technologies
            </h4>
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-gray-700 dark:text-gray-300">Vue.js</span>
                <div class="flex-1 mx-4 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div class="bg-primary-600 h-2 rounded-full" style="width: 90%"></div>
                </div>
                <span class="text-sm text-gray-500">90%</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-700 dark:text-gray-300">React.js</span>
                <div class="flex-1 mx-4 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div class="bg-primary-600 h-2 rounded-full" style="width: 85%"></div>
                </div>
                <span class="text-sm text-gray-500">85%</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-700 dark:text-gray-300">TypeScript</span>
                <div class="flex-1 mx-4 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div class="bg-primary-600 h-2 rounded-full" style="width: 80%"></div>
                </div>
                <span class="text-sm text-gray-500">80%</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-700 dark:text-gray-300">Node.js</span>
                <div class="flex-1 mx-4 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div class="bg-primary-600 h-2 rounded-full" style="width: 75%"></div>
                </div>
                <span class="text-sm text-gray-500">75%</span>
              </div>
            </div>
          </div>

          <!-- Additional Skills -->
          <div class="space-y-4">
            <h4 class="text-lg font-semibold text-gray-900 dark:text-white">
              Additional Skills
            </h4>
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-gray-700 dark:text-gray-300">UI/UX Design</span>
                <div class="flex-1 mx-4 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div class="bg-green-600 h-2 rounded-full" style="width: 70%"></div>
                </div>
                <span class="text-sm text-gray-500">70%</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-700 dark:text-gray-300">Database Design</span>
                <div class="flex-1 mx-4 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div class="bg-green-600 h-2 rounded-full" style="width: 75%"></div>
                </div>
                <span class="text-sm text-gray-500">75%</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-700 dark:text-gray-300">API Development</span>
                <div class="flex-1 mx-4 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div class="bg-green-600 h-2 rounded-full" style="width: 80%"></div>
                </div>
                <span class="text-sm text-gray-500">80%</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-700 dark:text-gray-300">Problem Solving</span>
                <div class="flex-1 mx-4 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div class="bg-green-600 h-2 rounded-full" style="width: 95%"></div>
                </div>
                <span class="text-sm text-gray-500">95%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionTitle from '../components/SectionTitle.vue';
import ExperienceCard from '../components/ExperienceCard.vue';
import { experiences } from '../data/experiences';
</script>
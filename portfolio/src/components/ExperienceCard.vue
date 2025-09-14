<template>
  <div class="relative">
    <!-- Timeline line -->
    <div class="absolute left-4 top-8 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
    
    <!-- Experience card -->
    <div class="relative flex items-start space-x-6">
      <!-- Timeline dot -->
      <div class="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center z-10 border-4 border-white dark:border-gray-900">
        <div class="w-2 h-2 bg-white rounded-full"></div>
      </div>
      
      <!-- Card content -->
      <div class="flex-1 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow duration-300">
        <div class="space-y-4">
          <!-- Header -->
          <div>
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                {{ experience.role }}
              </h3>
              <span class="text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 px-3 py-1 rounded-full">
                {{ experience.period }}
              </span>
            </div>
            <div class="mt-2 space-y-1">
              <p class="text-lg font-medium text-gray-700 dark:text-gray-300">
                {{ experience.company }}
              </p>
              <p class="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {{ experience.location }}
              </p>
            </div>
          </div>

          <!-- Description -->
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            {{ experience.description }}
          </p>

          <!-- Technologies -->
          <div class="space-y-2">
            <h4 class="text-sm font-medium text-gray-900 dark:text-white">Technologies & Skills</h4>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in experience.technologies"
                :key="tech"
                class="inline-block bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-3 py-1 rounded-full font-medium"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Experience } from '../data/experiences';

interface Props {
  experience: Experience;
}

defineProps<Props>();
</script>
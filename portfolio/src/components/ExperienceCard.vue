<script setup lang="ts">
import type { Experience } from '../data/experiences'

interface Props {
  experience: Experience
  isLast?: boolean
}

defineProps<Props>()
</script>

<template>
  <div class="flex">
    <!-- Timeline line -->
    <div class="flex flex-col items-center mr-6">
      <!-- Timeline dot -->
      <div
        class="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full ring-4 ring-white dark:ring-gray-900 flex-shrink-0"
      >
        <div class="w-3 h-3 bg-white rounded-full"></div>
      </div>
      <!-- Timeline line -->
      <div v-if="!isLast" class="w-0.5 bg-gray-200 dark:bg-gray-700 h-full mt-2"></div>
    </div>

    <!-- Content -->
    <div class="pb-8 flex-1">
      <div
        class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
      >
        <!-- Header -->
        <div class="mb-4">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            {{ experience.position }}
          </h3>
          <p class="text-lg font-medium text-blue-600 dark:text-blue-400">
            {{ experience.company }}
          </p>
          <div
            class="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-gray-600 dark:text-gray-400 mt-2"
          >
            <span class="flex items-center">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 4h6m-6 0V7m6 4V7M3 15h18l2-8H1l2 8z"
                />
              </svg>
              {{ experience.period }}
            </span>
            <span class="flex items-center mt-1 sm:mt-0">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              {{ experience.location }}
            </span>
          </div>
        </div>

        <!-- Description -->
        <p class="text-gray-700 dark:text-gray-300 mb-4">
          {{ experience.description }}
        </p>

        <!-- Technologies -->
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in experience.technologies"
            :key="tech"
            class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

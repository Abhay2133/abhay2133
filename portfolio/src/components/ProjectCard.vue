<script setup lang="ts">
import type { Project } from '../data/projects'

interface Props {
  project: Project
}

defineProps<Props>()
</script>

<template>
  <div
    class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
  >
    <!-- Project Image -->
    <div class="aspect-video bg-gray-200 dark:bg-gray-700 overflow-hidden">
      <img
        :src="project.imageUrl"
        :alt="project.title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        @error="
          ($event.target as HTMLImageElement).src =
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDQwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xODQgOTBIMjE2VjEyMkgxODRWOTBaIiBmaWxsPSIjOUI5QjlCIi8+Cjxwb2x5Z29uIHBvaW50cz0iMTg0LDEwMSAyMDAsOTAgMjE2LDEwMSAyMTYsMTA4IDIwNyw5OCAyMDAsOTggMTkzLDk4IDE4NCwxMDgiIGZpbGw9IiM5QjlCOUIiLz4KPGNpcmNsZSBjeD0iMTkzIiBjeT0iOTciIHI9IjMiIGZpbGw9IiM5QjlCOUIiLz4KPC9zdmc+'
        "
      />
    </div>

    <!-- Project Content -->
    <div class="p-6">
      <!-- Title -->
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {{ project.title }}
      </h3>

      <!-- Description -->
      <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
        {{ project.description }}
      </p>

      <!-- Tech Stack -->
      <div class="flex flex-wrap gap-2 mb-4">
        <span
          v-for="tech in project.technologies"
          :key="tech"
          class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded"
        >
          {{ tech }}
        </span>
      </div>

      <!-- Links -->
      <div class="flex space-x-4">
        <a
          :href="project.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
        >
          <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            />
          </svg>
          Code
        </a>
        <a
          :href="project.liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
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
  </div>
</template>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

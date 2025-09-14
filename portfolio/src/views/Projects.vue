<template>
  <div class="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto space-y-16">
      <!-- Header -->
      <SectionTitle
        title="Projects"
        subtitle="A showcase of my recent work and side projects"
      />

      <!-- Filter Buttons -->
      <div class="flex justify-center">
        <div class="inline-flex rounded-lg bg-gray-100 dark:bg-gray-800 p-1">
          <button
            @click="activeFilter = 'all'"
            :class="[
              'px-6 py-2 text-sm font-medium rounded-md transition-colors',
              activeFilter === 'all'
                ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            ]"
          >
            All Projects
          </button>
          <button
            @click="activeFilter = 'featured'"
            :class="[
              'px-6 py-2 text-sm font-medium rounded-md transition-colors',
              activeFilter === 'featured'
                ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            ]"
          >
            Featured
          </button>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Transition
          v-for="project in filteredProjects"
          :key="project.id"
          name="project"
          appear
        >
          <ProjectCard :project="project" />
        </Transition>
      </div>

      <!-- Empty State -->
      <div
        v-if="filteredProjects.length === 0"
        class="text-center py-16"
      >
        <svg class="w-16 h-16 mx-auto text-gray-400 dark:text-gray-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
        <p class="text-gray-500 dark:text-gray-400">No projects found for the current filter.</p>
      </div>

      <!-- Technologies Used -->
      <div class="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 space-y-6">
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white text-center">
          Technologies I Work With
        </h3>
        <div class="flex flex-wrap justify-center gap-3">
          <span
            v-for="tech in allTechnologies"
            :key="tech"
            class="inline-block bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm px-4 py-2 rounded-full border border-gray-200 dark:border-gray-600 font-medium hover:border-primary-300 dark:hover:border-primary-600 transition-colors"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center space-y-4">
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
          Interested in working together?
        </h3>
        <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities and exciting projects. 
          Let's create something amazing together!
        </p>
        <Button variant="primary" size="lg" @click="$router.push('/contact')">
          Get In Touch
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import Button from '../components/ui/Button.vue';
import SectionTitle from '../components/SectionTitle.vue';
import ProjectCard from '../components/ProjectCard.vue';
import { projects } from '../data/projects';

const activeFilter = ref<'all' | 'featured'>('all');

const filteredProjects = computed(() => {
  if (activeFilter.value === 'featured') {
    return projects.filter(project => project.featured);
  }
  return projects;
});

const allTechnologies = computed(() => {
  const techs = new Set<string>();
  projects.forEach(project => {
    project.technologies.forEach(tech => techs.add(tech));
  });
  return Array.from(techs).sort();
});
</script>

<style scoped>
.project-enter-active,
.project-leave-active {
  transition: all 0.3s ease;
}

.project-enter-from,
.project-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center space-y-8">
        <!-- Profile Image -->
        <div class="relative inline-block">
          <div class="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full bg-gradient-to-br from-primary-400 to-primary-600 p-1">
            <div class="w-full h-full rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <svg class="w-16 h-16 sm:w-20 sm:h-20 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>
          <div class="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center">
            <div class="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>

        <!-- Name and Title -->
        <div class="space-y-4">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
            Hi, I'm <span class="text-primary-600 dark:text-primary-400">Abhay</span>
          </h1>
          <p class="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Full Stack Engineer passionate about creating innovative solutions and exceptional user experiences
          </p>
        </div>

        <!-- Call to Action -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="primary"
            size="lg"
            @click="scrollToProjects"
            class="w-full sm:w-auto"
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            @click="$router.push('/contact')"
            class="w-full sm:w-auto"
          >
            Get In Touch
          </Button>
        </div>

        <!-- Scroll Indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      <!-- Background Elements -->
      <div class="absolute inset-0 -z-10 overflow-hidden">
        <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-100 dark:bg-primary-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div class="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-100 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style="animation-delay: 2s;"></div>
      </div>
    </section>

    <!-- Featured Projects Preview -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div class="max-w-7xl mx-auto space-y-12">
        <SectionTitle
          title="Featured Projects"
          subtitle="A selection of my recent work and side projects"
        />
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            v-for="project in featuredProjects"
            :key="project.id"
            :project="project"
          />
        </div>

        <div class="text-center">
          <Button variant="outline" @click="$router.push('/projects')">
            View All Projects
          </Button>
        </div>
      </div>
    </section>

    <!-- Quick Stats -->
    <section class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div class="space-y-2">
            <div class="text-3xl font-bold text-primary-600 dark:text-primary-400">3+</div>
            <div class="text-gray-600 dark:text-gray-400">Years Experience</div>
          </div>
          <div class="space-y-2">
            <div class="text-3xl font-bold text-primary-600 dark:text-primary-400">{{ projects.length }}+</div>
            <div class="text-gray-600 dark:text-gray-400">Projects Completed</div>
          </div>
          <div class="space-y-2">
            <div class="text-3xl font-bold text-primary-600 dark:text-primary-400">10+</div>
            <div class="text-gray-600 dark:text-gray-400">Technologies Mastered</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Button from '../components/ui/Button.vue';
import SectionTitle from '../components/SectionTitle.vue';
import ProjectCard from '../components/ProjectCard.vue';
import { projects } from '../data/projects';

const featuredProjects = computed(() => projects.filter(p => p.featured));

const scrollToProjects = () => {
  const projectsSection = document.querySelector('section:nth-child(2)');
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>
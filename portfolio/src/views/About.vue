<template>
  <div class="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto space-y-16">
      <!-- Header -->
      <SectionTitle
        title="About Me"
        subtitle="Learn more about my background, skills, and passion for technology"
      />

      <!-- Bio Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Profile Image -->
        <div class="relative">
          <div class="aspect-square rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 p-8 flex items-center justify-center">
            <div class="w-full h-full rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <svg class="w-32 h-32 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>
          <!-- Decorative elements -->
          <div class="absolute -top-4 -right-4 w-24 h-24 bg-primary-100 dark:bg-primary-900/30 rounded-full -z-10"></div>
          <div class="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full -z-10"></div>
        </div>

        <!-- Bio Text -->
        <div class="space-y-6">
          <div class="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
            <p>
              I'm a passionate Full Stack Engineer with over 3 years of experience in building 
              innovative web applications and user experiences. My journey in technology started 
              with a curiosity about how things work, which led me to pursue a career in software development.
            </p>
            <p>
              Currently working at Acorn Globus as a Full Stack Engineer, where I maintain and enhance 
              an in-house product, focusing on delivering new features and improving user experience. 
              I have experience working with modern technologies like Vue.js, React.js, TypeScript, 
              and various backend technologies.
            </p>
            <p>
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source 
              projects, and sharing knowledge with the developer community. I believe in continuous 
              learning and staying updated with the latest trends in web development.
            </p>
          </div>

          <!-- Download Resume Button -->
          <div>
            <Button variant="primary" size="lg" @click="downloadResume">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </Button>
          </div>
        </div>
      </div>

      <!-- Skills Section -->
      <div class="space-y-8">
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white text-center">
          Skills & Technologies
        </h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Frontend -->
          <div class="space-y-4">
            <h4 class="text-lg font-semibold text-gray-900 dark:text-white">
              <svg class="w-5 h-5 mr-2 text-primary-600 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Frontend
            </h4>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="skill in frontendSkills" 
                :key="skill"
                class="inline-block bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200 text-sm px-3 py-1 rounded-full font-medium"
              >
                {{ skill }}
              </span>
            </div>
          </div>

          <!-- Backend -->
          <div class="space-y-4">
            <h4 class="text-lg font-semibold text-gray-900 dark:text-white">
              <svg class="w-5 h-5 mr-2 text-primary-600 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
              Backend
            </h4>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="skill in backendSkills" 
                :key="skill"
                class="inline-block bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200 text-sm px-3 py-1 rounded-full font-medium"
              >
                {{ skill }}
              </span>
            </div>
          </div>

          <!-- Tools -->
          <div class="space-y-4">
            <h4 class="text-lg font-semibold text-gray-900 dark:text-white">
              <svg class="w-5 h-5 mr-2 text-primary-600 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Tools & Others
            </h4>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="skill in toolsSkills" 
                :key="skill"
                class="inline-block bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200 text-sm px-3 py-1 rounded-full font-medium"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '../components/ui/Button.vue';
import SectionTitle from '../components/SectionTitle.vue';

const frontendSkills = [
  'Vue.js', 'React.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 
  'TailwindCSS', 'Sass', 'Vite', 'Webpack'
];

const backendSkills = [
  'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'MySQL', 
  'RESTful APIs', 'GraphQL', 'Socket.io'
];

const toolsSkills = [
  'Git', 'Docker', 'AWS', 'Vercel', 'Netlify', 'Linux', 
  'VS Code', 'Figma', 'Postman', 'Jest'
];

const downloadResume = () => {
  // Placeholder for resume download
  console.log('Resume download clicked');
  // In a real implementation, this would trigger a file download
  alert('Resume download feature will be implemented soon!');
};
</script>
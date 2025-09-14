<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
    <Navbar />

    <main>
      <RouterView v-slot="{ Component, route }">
        <Transition
          name="page"
          mode="out-in"
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 translate-y-4"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-4"
        >
          <component :is="Component" :key="route.path" />
        </Transition>
      </RouterView>
    </main>

    <Footer />
  </div>
</template>

<style scoped>
/* Additional transition styles if needed */
</style>

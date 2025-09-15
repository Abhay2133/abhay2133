<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
}

defineProps<Props>()
</script>

<template>
  <div class="text-center mb-8">
    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="text-lg text-gray-600 dark:text-gray-300">
      {{ subtitle }}
    </p>
  </div>
</template>

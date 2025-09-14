<template>
  <div class="space-y-1">
    <label
      v-if="label"
      :for="id"
      class="block text-sm font-medium text-gray-700 dark:text-gray-300"
    >
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :required="required"
      :class="[
        'w-full rounded-lg border px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
        error
          ? 'border-red-300 bg-red-50 dark:bg-red-900/20 dark:border-red-600'
          : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800'
      ]"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <p v-if="error" class="text-sm text-red-600 dark:text-red-400">
      {{ error }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  id: string;
  label?: string;
  type?: string;
  modelValue: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
}

withDefaults(defineProps<Props>(), {
  type: 'text',
  required: false,
});

defineEmits<{
  'update:modelValue': [value: string];
}>();
</script>
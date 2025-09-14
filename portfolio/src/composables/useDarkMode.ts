import { ref, onMounted, watch } from 'vue';

export function useDarkMode() {
  const isDark = ref(false);

  const toggleDarkMode = () => {
    isDark.value = !isDark.value;
  };

  const setDarkMode = (value: boolean) => {
    isDark.value = value;
  };

  // Watch for changes and update DOM + localStorage
  watch(
    isDark,
    (newValue) => {
      if (newValue) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('darkMode', 'true');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('darkMode', 'false');
      }
    },
    { immediate: true }
  );

  // Initialize dark mode on mount
  onMounted(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      isDark.value = saved === 'true';
    } else {
      // Use system preference as default
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
  });

  return {
    isDark,
    toggleDarkMode,
    setDarkMode,
  };
}
import { ref, onUnmounted } from "vue";

export const useFetch = (url: string) => {
  const data = ref(null);
  const error = ref(null);
  const isLoading = ref(false);

  const fetchData = async () => {
    isLoading.value = true;
    error.value = null;
    try {
      const response = await fetch(url);
      data.value = await response.json();
    } catch (err) {
      error.value = err;
    } finally {
      isLoading.value = false;
    }
  };

  return { data, error, isLoading, fetchData };
};

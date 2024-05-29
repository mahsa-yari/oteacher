import { ref, onMounted, onUnmounted } from "vue";
import type { SidebarItem } from "@/types/SidebarItem";
import { useSidebarItemsStore } from "~/store";

export const useSidebarItems = () => {
  const sidebarItemsStore = useSidebarItemsStore();
  const { data, error, isLoading, fetchData } = useFetch(
    "https://run.mocky.io/v3/63120735-7fbe-428a-9226-c10ca1ab43b6"
  );

  const fetchSidebarItems = async () => {
    await fetchData();
    sidebarItemsStore.$patch((state) => {
      state.sidebarItems = data;
    });
  };

  return { fetchSidebarItems, error, isLoading };
};

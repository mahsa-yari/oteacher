import { defineStore } from "pinia";
import type { SidebarItem } from "@/types/sidebarItems";

export const useSidebarItemsStore = defineStore("sidebarItems",{
  id: "sidebarItems",
  state: () => ({
    sidebarItems: [] as SidebarItem[],
  })
});

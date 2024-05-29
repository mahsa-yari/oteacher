<script setup lang="ts">
import type { SidebarItem } from "@/types/sidebarItem";
import { computed } from "vue";

const { id, name, title, slug, icon, children } = defineProps<SidebarItem>();
const tabComponent = computed(() => {
  return children.length ? "div" : "router-link";
});
</script>

<template>
  <Component
    :is="tabComponent"
    :to="{ path: `/${slug}` }"
    :title="title"
    :class="[
      'sm:justify-start px-4 h-12 flex items-center',
      tabComponent == 'router-link' && 'hover:bg-gray-800 cursor-pointer',
    ]"
  >
    <img
      width="24"
      height="24"
      class="object-cover w-[24px] h-[24px] md:h-[24px] skeleton"
      :src="icon"
      alt="icon"
      loading="eager"
      format="webp"
      fit="outside"
      sizes="sm:18 md:20px"
    />

    <span
      :class="[
        'text-nowrap ml-3 text-gray-400 font-semibold ',
        tabComponent == 'router-link' && 'hover:text-white transition-colors',
      ]"
    >
      {{ name }}
    </span>
  </Component>
</template>

<script setup lang="ts">
import type { SidebarItem } from "@/types/sidebarItem";

const sidebarItem = defineProps<SidebarItem>();

</script>

<template>
  <AppSidebarItem v-bind="sidebarItem" />

  <ul v-if="!!sidebarItem?.children">
    <li
      v-for="sidebarItem in sidebarItem.children"
      :key="sidebarItem.id"
      class="pl-2"
    >
      <AppSidebarItems v-bind="sidebarItem" />
    </li>
  </ul>
</template>

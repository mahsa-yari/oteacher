<script setup lang="ts">
import { useSidebarItemsStore } from "~/store";

const sidebarItemsStore = useSidebarItemsStore();
const { fetchSidebarItems } = useSidebarItems();

await fetchSidebarItems();
</script>

<template>
  <aside
    class="AppSidebar text-white bg-gray-900 min-h-screen w-72 pt-4 transition-all px-1"
  >
    <h2 class="text-center m-5">OTeacher</h2>

    <div v-if="!sidebarItemsStore.sidebarItems">
      <p class="text-3xl text-center my-10">sidebarItems not found.</p>
    </div>
    <div v-else>
      <nav>
        <ul>
          <li v-for="sidebarItem in sidebarItemsStore.sidebarItems" :key="sidebarItem.id">
            <AppSidebarItems v-bind="sidebarItem" />
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

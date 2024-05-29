<script setup lang="ts">
import { ref, onServerPrefetch } from "vue";
import { useSidebarItemsStore } from "~/store";

const { fetchSidebarItems } = useSidebarItems();
const store = useSidebarItemsStore();
const sidebarItems = ref(store.sidebarItems);

onServerPrefetch(async () => {
  await fetchSidebarItems();
});

</script>

<template>
  <aside
    class="AppSidebar text-white bg-gray-900 min-h-screen w-1/4 pt-4 transition-all px-1"
  >
    <h2 class="text-center m-5">OTeacher</h2>

    <div v-if="!sidebarItems">
      <p class="text-3xl text-center my-10">sidebarItems not found.</p>
    </div>
    <div v-else>
      <nav>
        <ul>
          <li v-for="sidebarItem in sidebarItems" :key="sidebarItem.id">
            <AppSidebarItems v-bind="sidebarItem" />
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

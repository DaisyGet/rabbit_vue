<script setup>
import LayoutNav from "./components/nav.vue";
import LayoutHeader from "./components/header.vue";
import LayoutFooter from "./components/footer.vue";
import LayoutSticky from "./components/sticky.vue";
import { usecategoryStore } from "@/stores/usecategory";
import { onMounted } from "vue";

const categoryStore = usecategoryStore();
onMounted(() => categoryStore.getcategory());
</script>

<template class="layout">
  <LayoutSticky />
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>

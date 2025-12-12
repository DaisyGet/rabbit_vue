<script setup>
import LayoutNav from "./components/nav.vue";
import LayoutHeader from "./components/header.vue";
import LayoutFooter from "./components/footer.vue";
</script>

<template class="layout">
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>

<style scoped>
.layout :deep(.container) {
  width: 100%;
  margin: 0;
}
</style>

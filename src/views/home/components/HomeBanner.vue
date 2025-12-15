<script setup>
import { getbannerapi } from "@/api/banner";
import { ref, onMounted } from "vue";
const banner = ref([]);

const getbanner = async () => {
  const res = await getbannerapi();
  banner.value = res.result;
};
onMounted(() => getbanner());
</script>

<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in banner" :key="item.id">
        <img :src="item.imgUrl" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang="scss">
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>

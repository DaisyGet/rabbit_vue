<script setup>
import { gethotapi } from "@/api/hot.js";
import { ref, onMounted } from "vue";
import Homepanel from "./Homepanel.vue";
const hotList = ref([]);
const gethot = async () => {
  const res = await gethotapi();
  hotList.value = res.result;
};
onMounted(() => gethot());
</script>

<template>
  <Homepanel title="人气推荐" subTitle="人气爆款 不容错过">
    <!-- 下面是插槽主体内容模版 -->
    <template #main>
      <ul class="goods-list">
        <li v-for="item in hotList" :key="item.id">
          <RouterLink to="/">
            <img :src="item.picture" alt="" />
            <p class="name">{{ item.title }}</p>
            <p class="desc">{{ item.alt }}</p>
          </RouterLink>
        </li>
      </ul>
    </template>
  </Homepanel>
</template>

<style scoped lang="scss">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;

    background: #f0f9f4;
    transition: all 0.5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .price {
      color: $priceColor;
    }
  }
}
</style>

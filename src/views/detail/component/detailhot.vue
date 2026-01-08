<script setup>
import { getHotGoodsAPI } from "@/api/good";
import { compose } from "element-plus/es/components/table/src/util";
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
const prop = defineProps({
  hottype: {
    type: Number,
  },
});
const titieMap = {
  1: "24小时热销榜",
  2: "周热销榜",
};

const title = computed(() => titieMap[prop.hottype]); // 初始化：title = "24小时热销榜"

const route = useRoute();
const hotgood = ref([]);
const getHotGoods = async () => {
  const res = await getHotGoodsAPI({
    id: route.params.id,
    type: prop.hottype,
  });
  hotgood.value = res.result;
};
onMounted(() => getHotGoods());
</script>

<template>
  <div class="goods-hot">
    <h3>{{ title }}</h3>
    <!-- 商品区块 -->
    <RouterLink
      :to="`/detail/${item.id}`"
      class="goods-item"
      v-for="item in hotgood"
      :key="item.id"
    >
      <img :src="item.picture" alt="" />
      <p class="name ellipsis">{{ item.name }}</p>
      <p class="desc ellipsis">{{ item.desc }}</p>
      <p class="price">&yen;{{ item.price }}</p>
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }
}
</style>

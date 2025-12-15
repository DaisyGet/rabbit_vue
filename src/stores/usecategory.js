import { defineStore } from "pinia";
import { getcategoryapi } from "@/api/layout.js";
import { ref, onMounted } from "vue";
export const usecategoryStore = defineStore("category", () => {
  const categoryList = ref([]);
  const getcategory = async () => {
    const res = await getcategoryapi();
    categoryList.value = res.result;
  };
  return { categoryList, getcategory };
});

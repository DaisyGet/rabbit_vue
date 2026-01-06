import { gettopcategoryapi } from "@/api/category";
import { ref, onMounted } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";

export function usecategory() {
  const categorydata = ref({});
  const route = useRoute();

  const gettopcategory = async (id) => {
    const res = await gettopcategoryapi(id);
    categorydata.value = res.result;
  };

  onMounted(() => {
    gettopcategory(route.params.id);
  });

  onBeforeRouteUpdate((to) => {
    gettopcategory(to.params.id);
  });
  return {
    categorydata,
  };
}

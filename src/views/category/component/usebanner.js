import { ref, onMounted } from "vue";
import { getbannerapi } from "@/api/banner";

export function usebanner() {
  const banner = ref([]);

  const getbanner = async () => {
    const res = await getbannerapi({
      distributionSite: "2",
    });
    banner.value = res.result;
  };

  onMounted(() => {
    getbanner();
  });

  return {
    banner,
  };
}

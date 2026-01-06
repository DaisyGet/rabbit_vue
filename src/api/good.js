import http from "@/utils/http";

export const getGoodsAPI = () => {
  return http({
    url: "/home/goods",
  });
};

import http from "@/utils/http";

export const getGoodsAPI = () => {
  return http({
    url: "/home/goods",
  });
};

// 获取商品详细信息
export const getDetail = (id) => {
  return http({
    url: "/goods",
    params: {
      id,
    },
  });
};

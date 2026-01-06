import request from "@/utils/http";

export const gettopcategoryapi = (id) => {
  return request({
    url: "/category",
    params: {
      id,
    },
  });
};

import http from "@/utils/http";

export function getbannerapi(params = {}) {
  const { distributionSite = "1" } = params;
  return http({
    url: "home/banner",
    params: {
      distributionSite,
    },
  });
}

import http from "@/utils/http";

export function getbannerapi() {
  return http({
    url: "home/banner",
  });
}

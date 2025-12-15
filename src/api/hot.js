import http from "@/utils/http";

export function gethotapi() {
  return http({
    url: "home/hot",
  });
}

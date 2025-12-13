import http from "@/utils/http";

export function getcategoryapi() {
  return http({
    url: "/home/category/head",
  });
}

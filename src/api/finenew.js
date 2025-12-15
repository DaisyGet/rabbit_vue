import http from "@/utils/http";

export function getfindnewapi() {
  return http({
    url: "/home/new",
  });
}

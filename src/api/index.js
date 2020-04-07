import request from "@/utils/httpservice/index";

export const getMenu = () => {
  return request({
    url: "/list",
    method: "get"
  });
};


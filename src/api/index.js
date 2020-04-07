// import request from "@/utils/request";
import request from "@/utils/httpservice/index";

export const getMenu = () => {
  console.log('export const getMenu = () => {');
  return request({
    url: "/list",
    method: "get"
  });
};


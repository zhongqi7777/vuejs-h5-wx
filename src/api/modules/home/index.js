import request from "@/utils/flyio/lib/request";
export const getMenu = params => {
  return request({
    ...params,
    // url: "/vuejs-h5-wx/routes"
    url: "/article/list"
  });
};

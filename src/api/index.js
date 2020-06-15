import request from "@/utils/flyio/lib/request";
const api = {
  getMenu: params => {
    return request({
      ...params,
      url: "/vuejs-h5-wx/routes"
    });
  }
};
export default api;

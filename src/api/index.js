import request from "@/utils/httpservice/index";

export const getMenu = () => {
  return request({
    url: "/vuejs-h5-wx/routes",
    method: "get"
  });
};


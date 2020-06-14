// import request from "@/utils/httpservice/index";

// export const getMenu = () => {
//   return request({
//     url: "/vuejs-h5-wx/routes",
//     method: "get"
//   });
// };


//封装httpApi
import request from '@/utils/flyio/index'
//const host = "https://easy-mock.com/mock/5b3047469b9262598cb0933d/example"
const host = "";
const api = {
  // test地址
  policy: (params) => request.get(`${host}/mock/vuejs-h5-wx/routes`, params),
  checkTeamUserInfo: (params) => request.post(`${host}/checkTeamUserInfo`, params),
  testPut: (params) => request.put(`${host}/checkTeamUserInfo`, params),
  testDel: (params) => request.delete(`${host}/checkTeamUserInfo` + params.id, params),
}
// export default api
export default api

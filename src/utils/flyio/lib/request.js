import request from "./index";


let baseURL = process.env.BASE_URL ? process.env.BASE_URL : "/";
let baseENV = process.env.BASE_ENV;
baseURL += baseENV;

console.log("baseURL", baseURL);
// console.log("baseENV",baseENV);

const getRequest = val => {
  switch (val.type) {
    case "get":
      return request.get(`${baseURL}${val.url}`, val.params);
    case "post":
      return request.post(`${baseURL}${val.url}`, val.params);
    case "put":
      return request.put(`${baseURL}${val.url}`, val.params);
    case "delete":
      return request.delete(`${baseURL}${val.url}`, val.params);
    default:
  }
};
export default getRequest;

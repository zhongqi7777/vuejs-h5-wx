var Mock = require("../../mokjs/WxMock.js");
Mock.mock("http://localhost:8081/mock/vuejs-h5-wx/routes", {
  code: 200,
  "data|1-20": [
    {
      name: function() {
        return Mock.Random.cname();
      },
      lastLogin: function() {
        return Mock.Random.datetime();
      }
    }
  ]
});

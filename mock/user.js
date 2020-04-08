
// const tokens = {
//   admin: {
//     token: 'admin-token'
//   },
//   editor: {
//     token: 'editor-token'
//   }
// }

// const users = {
//   'admin-token': {
//     roles: ['admin'],
//     introduction: 'I am a super administrator',
//     avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
//     name: 'Super Admin'
//   },
//   'editor-token': {
//     roles: ['editor'],
//     introduction: 'I am an editor',
//     avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
//     name: 'Normal Editor'
//   }
// }
var userlist = [
  {
    name: "admin"
  },
  {
    name: "user1"
  }
];

// console.log(process.env.npm_config_baseenv);

// console.log("baseURL", baseURL);

module.exports = [
  // mock get all routes form server
  {
    url: '/vuejs-h5-wx/routes',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: userlist
      }
    }
  }
  // user login
  // {
  //   url: '/vuejs-h5-wx/user/login',
  //   type: 'post',
  //   response: config => {
  //     const { username } = config.body
  //     const token = tokens[username]

  //     // mock error
  //     if (!token) {
  //       return {
  //         code: 60204,
  //         message: 'Account and password are incorrect.'
  //       }
  //     }

  //     return {
  //       code: 20000,
  //       data: token
  //     }
  //   }
  // },

  // // get user info
  // {
  //   url: '/vuejs-h5-wx/user/info\.*',
  //   type: 'get',
  //   response: config => {
  //     const { token } = config.query
  //     const info = users[token]

  //     // mock error
  //     if (!info) {
  //       return {
  //         code: 50008,
  //         message: 'Login failed, unable to get user details.'
  //       }
  //     }

  //     return {
  //       code: 20000,
  //       data: info
  //     }
  //   }
  // },

  // // user logout
  // {
  //   url: '/vuejs-h5-wx/user/logout',
  //   type: 'post',
  //   response: _ => {
  //     return {
  //       code: 20000,
  //       data: 'success'
  //     }
  //   }
  // }
]



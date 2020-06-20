import request from '@/utils/request'

export default {
  getLogin (loginForm) {
    return request({
      url: '/login',
      method: 'post',
      data: {
        username: loginForm.username,
        password: loginForm.password
      }
    })
  }
}

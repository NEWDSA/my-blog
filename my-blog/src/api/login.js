import request from '@/utils/request'

export default {
  getLogin (form) {
    return request({
      url: '/login',
      method: 'post',
      data: {
        username: form.username,
        password: form.password
      }
    })
  }
}

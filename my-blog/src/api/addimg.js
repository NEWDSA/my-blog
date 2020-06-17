import request from '@/utils/request'

export default {
  upimg (title, data) {
    return request({
      url: '/img',
      method: 'get',
      data: {
        title: title,
        content: data
      }
    })
  }
}

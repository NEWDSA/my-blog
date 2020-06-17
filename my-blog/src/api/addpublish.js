import request from '@/utils/request'

export default {
  getPublish (title, data) {
    return request({
      url: '/publish',
      method: 'post',
      data: {
        title: title,
        content: data
      }
    })
  }
}

import request from '@/utils/request'

export default {
  getalbums () {
    return request({
      url: '/photo',
      method: 'get'
    })
  }
}

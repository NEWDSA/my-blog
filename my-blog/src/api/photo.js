import request from '@/utils/request'

export default {
  getPhotos () {
    return request({
      url: '/photo',
      method: 'get'
    })
  }
}

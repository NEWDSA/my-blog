import request from '@/utils/request'

export default {
  getPhotos (userId) {
    return request({
      method: 'get',
      url: '/photo',
      params: {
        userId
    }
      
    })
  }
}

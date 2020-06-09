import request from '@/utils/request'

export default {
  getPhotos (ph) {
    return request({
      method: 'get',
      url: '/photo',
      params: {
        ph
      }

    })
  }
}

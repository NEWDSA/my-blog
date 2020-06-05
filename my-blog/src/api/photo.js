import request from '@/utils/request'

export default {
  getPhotos (id) {
     const a =id;
    return request({
      url: `/photo/${a}`,
      params:{
        id:a
      },
      method: 'get',
      
    })
  }
}

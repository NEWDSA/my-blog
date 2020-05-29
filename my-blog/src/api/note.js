import request from '@/utils/request'

export default {
  getNotes () {
    return request({
      url: '/note',
      method: 'get'
    })
  }
}

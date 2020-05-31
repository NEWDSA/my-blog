import reqb from '@/utils/robot'

export default {
  getRobot (text) {
    return reqb({
      params: text,
      url: '/',
      method: 'get'
    })
  }
}

<template>

  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide><img width="100%" height="500px" src="https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1590673103198&amp;di=9c13f4b2a64cfa88efd759cce95ce14f&amp;imgtype=0&amp;src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201411%2F25%2F20141125151026_fK8tV.jpeg" alt="Image"></swiper-slide>
    <swiper-slide><img width="100%" height="500px"    src="https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1590673103198&amp;di=9c13f4b2a64cfa88efd759cce95ce14f&amp;imgtype=0&amp;src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201411%2F25%2F20141125151026_fK8tV.jpeg" alt="Image"></swiper-slide>
    <swiper-slide><img width="100%" height="500px"   src="https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1590673103198&amp;di=9c13f4b2a64cfa88efd759cce95ce14f&amp;imgtype=0&amp;src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201411%2F25%2F20141125151026_fK8tV.jpeg" alt="Image"></swiper-slide>
    <swiper-slide><img width="100%" height="500px"    src="https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1590673103198&amp;di=9c13f4b2a64cfa88efd759cce95ce14f&amp;imgtype=0&amp;src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201411%2F25%2F20141125151026_fK8tV.jpeg" alt="Image"></swiper-slide>
    <swiper-slide><img width="100%" height="500px"    src="https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1590673103198&amp;di=9c13f4b2a64cfa88efd759cce95ce14f&amp;imgtype=0&amp;src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201411%2F25%2F20141125151026_fK8tV.jpeg" alt="Image"></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'carrousel',
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        }
        // Some Swiper option/callback...
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted () {
    console.log('Current Swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  }
}
</script>
<style scoped>

</style>

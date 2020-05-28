<template>
  <div>
    <b-card-group deck>
      <b-card  v-for="ab in albums" :key="ab.id"
        :title="ab.title"
        :img-src="ab.url"
        img-alt="Image"
        img-top
      >
        <b-card-text>
          {{ab.describtion}}
        </b-card-text>
        <template v-slot:footer>
          <small class="text-muted">最后更改 {{ab.updateTime}}</small>
        </template>
      </b-card>
    </b-card-group>
  </div>
</template>
<script>
import albumsApi from '@/api/albums'
export default {
  data () {
    return {
      albums: []
    }
  },
  mounted () {
    albumsApi.getalbums().then(res => {
      const resp = res.data
      console.log(res)
      this.albums = resp
    })
  }
}
</script>
<style lang="scss" scoped>
 div{
   overflow-x: hidden;
   margin-top: 20px;
 }
</style>

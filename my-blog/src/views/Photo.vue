<template>
  <div class="flex" ref="flex">
    <div @click="photos(ab.url)" class="box" v-for="ab in albums" :key="ab.id">
      <img :src="ab.url" />
      <p>{{ab.title}}</p>
    </div>
    <div :class="[this.flag?'show':'hidden']"><img width="50%" height="50%" :src="this.img"/><span class="close" @click="close()">关闭</span></div>
  </div>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.flex {
  display: flex;
  flex-flow: row wrap;
  height: 200px;
  margin-top: 70px;
  margin-left: 10px;
  margin-right: 10px;
}
.box {
  width: 200px;
  height: 200px;
  margin-top: 40px;
  margin-left: 40px;
  margin-right: 20px;
  text-align: center;
  background: grey;
  margin-bottom: 20px;
  cursor: pointer;
}
img {
  width: 100%;
  height: 100%;
  text-align: center;
}
.box > p {
  background: white;
  cursor: pointer;
}
.hidden {
  display: none;
}
.close{
    position: relative;
    top: -100%;
    font-size: 10px;
}
.show{
    position: fixed;
    top:70px;
    left: 50%;
    width: 500px;
    margin-left: -250px;
    bottom: 20px;
    display:block;
    z-index: 1;
    background: gray;
    cursor: pointer;

}

@media screen and (max-width: 800px) {
  * {
    margin: 0;
    padding: 0;
  }
  .flex {
    display: block;
  }
  .box {
    width: 100%;
    height: 100%;
    background: gray;
    text-align: center;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 30px;
  }
  img {
    width: 100%;
    height: 100%;
    background: gray;
    text-align: center;
  }

  .flex-box {
    flex: 1;
  }
  .show{
    position: fixed;
    top:70px;
    left: 0;
    width: 100%;
    margin-left: 0;
    bottom: 20px;
    display:block;
    z-index: 1;
    background: gray;
    cursor: pointer;
}
}
</style>
<script>
import photoApi from '@/api/photo'
export default {
  data () {
    return {
      albums: [],
      flag: false,
      img: ''
    }
  },
  methods: {
    photos (id) {
      this.flag = !this.flag
      this.img = id
      console.log(this.albums[0].url)
    },
    close () {
      this.flag = !this.flag
    }
  },
  mounted () {
    photoApi.getPhotos(this.$route.query.ph).then(res => {
      const resp = res.data
      console.log(res)
      this.albums = resp
    })
  }
}
</script>

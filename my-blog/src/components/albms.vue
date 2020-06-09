<template>
  <div class="flex" ref="flex">
    <div class="box" v-for="ab in albums" :key="ab.id" @click="search(ab.id)">
      <img :src="ab.thumbnail" />
      <p>{{ab.title}}</p>
    </div>
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
    background: black;
    text-align: center;
    margin-bottom: 30px;
    margin-left: 0;
    margin-right: 0;
    border: 1px solid gray;
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
}
</style>
<script>
import albumsApi from '@/api/albums'
export default {
  data () {
    return {
      albums: []
    }
  },
  methods: {
    search (id) {
      const ph = id
      this.$router.push({ path: '/photo', query: { ph } })
    }
  },
  mounted () {
    albumsApi.getalbums().then(res => {
      const resp = res.data
      this.albums = resp
    })
  }
}
</script>

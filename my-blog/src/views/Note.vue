<template>
  <div class="note">
    <b-container >
      <b-col cols="12" md="auto" v-for="aa in note" :key="aa.id">
        <div class="sty">
          <p v-html="aa.content">{{aa.content}}</p><br>
          <!-- <h5 class="title">《{{aa.title}}》</h5> -->
        </div>
      </b-col>
    </b-container>
  </div>
</template>
<script>
import NoteApi from '@/api/note'
export default {
  data () {
    return {
      note: []
    }
  },
  mounted () {
    NoteApi.getNotes().then(res => {
      const resp = res.data
      console.log(res)
      this.note = resp
      console.log(this)
    })
  }
}
</script>
<style scoped>
.note {
  position: relative;
  text-align: center;
  top: 70px;
}
.title {
  position: relative;
  text-align: center;
  top: 20px;

}
.sty{
    position: relative;
    /*background:pink;*/
    background:rgba(0, 0, 17,0.1);
    width: 800px;
    /*height: 800px;*/
    height: auto;
    margin-bottom: 30px;
    left: 50%;
    margin-left: -400px;

}
p img{
  width:100%;
}
@media screen and (max-width: 800px) {
  .sty{
    position: relative;
    background:rgba(0, 0, 17,0.1);
    width: 100%;
    /*height: 800px;*/
    margin-bottom: 30px;
    left: 0%;
    margin-left: 0;
    height: auto;
}
p img{
  width:100%;
}
}
</style>

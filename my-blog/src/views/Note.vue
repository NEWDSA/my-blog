<template>
  <div class="note">
    <b-container >
      <b-col cols="12" md="auto" v-for="aa in note" :key="aa.id">
        <div class="sty">
          <h1 class="title">{{aa.title}}</h1>
          <p>{{aa.content}}</p>
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
  text-align: center;
}
.sty{
    position: relative;
    background:pink;
    width: 800px;
    height: 800px;
    margin-bottom: 30px;
    left: 50%;
    margin-left: -400px;
    border-radius: 5%;
    
}

</style>

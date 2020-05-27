<template>
  <div class="note">
    <b-container v-for="aa in note" :key="aa.id">
      <b-col cols="12" md="auto">
        <div class="sty">
          <h1 class="title">{{aa.title}}</h1>
          <p>{{aa.content}}</p>
        </div>
      </b-col>
    </b-container>
  </div>
</template>
<script>
import NoteApi from "@/api/note";
export default {
  data() {
    return {
      note: []
    };
  },
  mounted() {
    NoteApi.getNotes().then(res => {
      const resp = res.data;
      console.log(res);
      this.note = resp;
    });
  }
};
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
    background:pink;
}
</style>

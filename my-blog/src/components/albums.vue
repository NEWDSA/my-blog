<template>
  <div>
    <b-card-group deck>
      <b-card
        title="Title"
        img-src="https://picsum.photos/300/300/?image=41"
        img-alt="Image"
        img-top
      >
        <b-card-text>
          This is a wider card with supporting text below as a natural lead-in to additional content.
          This content is a little bit longer.
        </b-card-text>
        <template v-slot:footer>
          <small class="text-muted">Last updated 3 mins ago</small>
        </template>
      </b-card>

      <b-card
        title="Title"
        img-src="https://picsum.photos/300/300/?image=41"
        img-alt="Image"
        img-top
      >
        <b-card-text>This card has supporting text below as a natural lead-in to additional content.</b-card-text>
        <template v-slot:footer>
          <small class="text-muted">Last updated 3 mins ago</small>
        </template>
      </b-card>

      <b-card
        title="Title"
        img-src="https://picsum.photos/300/300/?image=41"
        img-alt="Image"
        img-top
      >
        <b-card-text>
          This is a wider card with supporting text below as a natural lead-in to additional content.
          This card has even longer content than the first to show that equal height action.
        </b-card-text>
        <template v-slot:footer>
          <small class="text-muted">Last updated 3 mins ago</small>
        </template>
      </b-card>
    </b-card-group>
  </div>
</template>
<script>
import albumsApi from "@/api/albums";
export default {
  data() {
    return {
      albums: []
    };
  },
  mounted() {
    albumsApi.getalbums().then(res => {
      const resp = res.data;
      console.log(res);
      this.albums = resp;
    });
  }
};
</script>
<style lang="scss" scoped>
 div{
   overflow-x: hidden;
   margin-top: 20px;
 }
</style>
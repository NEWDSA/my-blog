<template>
<div id="app">
<navbar/>
<router-view/>
</div>
</template>
<script>
import navbar from '@/components/navbar.vue'
export default {
  components: {
    navbar
  }
}
</script>
<style scoped>
  .edit{
    position: relative;
    top: 70px;
    height:50vh;
    /*border: 1px solid red;*/
  }
</style>

<template>
<div id="app">
<navbar/>
<router-view class="rr"/>
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
  .rr{
    background: #000;
    width: 100%;
    height: 100%;
  }
</style>

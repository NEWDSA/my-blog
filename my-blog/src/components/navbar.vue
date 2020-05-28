<template>
  <b-navbar toggleable="lg" type="dark" variant="info" fixed="top">
    <b-navbar-brand href="#">Luciano</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#" to="/albums">相册</b-nav-item>
        <b-nav-item href="#" to="/note">随笔</b-nav-item>
        <b-nav-item href="#">心情</b-nav-item>
        <b-nav-item href="#" to="/about">关于我</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" v-model="text" placeholder="搜你想搜"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit"  @click="search()">查询</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="语言" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>Luciano</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">登出</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
export default {
  data(){
    return {
      text: null
    };
  },
  methods:{
    search(){
      // alert(this.text);
      this.$route.push({name:'search'});
    }
  }
}
</script>
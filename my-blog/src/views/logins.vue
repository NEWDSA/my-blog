<template>
  <div class="dd">
    <input type="text" v-model="loginForm.username" placeholder="用户名" />

    <input type="text" v-model="loginForm.password" placeholder="密码" />

    <button @click="login">登录</button>
  </div>
</template>
<style scoped>
.dd {
  margin-top: 300px;
  margin-left: 50%;
}
</style>
<script>
import { mapMutations } from 'vuex'
import Login from '@/api/login'
export default {
  data() {
    return {
      loginForm: {
        username: "",

        password: ""
      }
    };
  },

  methods: {
      ...mapMutations(['storeLogin']),

    login() {
     
       Login.getLogin(this.loginForm).then(res => {
          // const resp = res.data
          console.log(res.data[0].username)
          this.userToken = 'Bearer' + res.data[0].username
          // 将用户token保存到vuex中
          this.storeLogin({ Authorization: this.userToken });
          this.$router.push('/edit')
        }).catch(er => {
          alert('账号或密码错误')
          console.log(er)
        })
      }
    }
  }

</script>
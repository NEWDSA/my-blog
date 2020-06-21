<template>
  <div class="dd">
    <b-form  @reset="onReset" v-if="show" class="fr">
      <svg
        t="1592193533741"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="3277"
        width="128"
        height="128"
      >

        <path
          d="M938.666667 938.666667c0 23.466667-19.2 42.666667-42.666667 42.666666H128c-23.466667 0-42.666667-19.2-42.666667-42.666666 0-198.4 96-377.6 243.2-462.933334-44.8-44.8-72.533333-108.8-72.533333-177.066666 0-140.8 115.2-256 256-256s256 115.2 256 256c0 68.266667-27.733333 132.266667-72.533333 177.066666C842.666667 561.066667 938.666667 740.266667 938.666667 938.666667zM172.8 896h678.4c-12.8-168.533333-106.666667-311.466667-236.8-362.666667-32 14.933333-66.133333 21.333333-104.533333 21.333334-36.266667 0-72.533333-8.533333-104.533334-21.333334-125.866667 51.2-219.733333 194.133333-232.533333 362.666667zM512 128c-93.866667 0-170.666667 76.8-170.666667 170.666667s76.8 170.666667 170.666667 170.666666 170.666667-76.8 170.666667-170.666666-76.8-170.666667-170.666667-170.666667z"
          fill="#2F3CF4"
          p-id="3278"
        />
      </svg>
      <b-form-group id="input-group-1" label="用户名:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.username"
          type="text"
          required
          placeholder="输入管理员账号"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="密码:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          required
          placeholder="输入管理员密码"
        ></b-form-input>
      </b-form-group>
      <!-- 使用@click.prevent 阻止默认事件 -->
      <b-button type="submit" @click.prevent="login" class="mybtn" variant="primary">登录</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Login from '@/api/login'
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      show: true
    }
  },
  methods: {
    ...mapMutations(['storeLogin']),
    login () {
      console.log(this.form)
      if (this.form.username === '' || this.form.password === '') {
        alert('账号或密码不能为空')
      } else {
        Login.getLogin(this.form).then(res => {
          // const resp = res.data
          console.log(res.data[0].username)
          this.userToken = 'Bearer' + res.data[0].username
          // 将用户token保存到vuex中
          this.storeLogin({ Authorization: this.userToken })
          this.$router.push('/edit')
        }).catch(er => {
          alert('账号或密码错误')
          console.log(er)
        })
      }
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
<style scoped>
.dd {
  position: absolute;
  top: 50%;
  width: 500px;
  height: 500px;
  left: 50%;
  margin-left: -250px;
  margin-top: -250px;
  border: 1px solid blue;
  background: rgba(0, 0, 17, 0.1);
}
.form-control {
  border: 1px solid blue;
  display: block;
  width: 300px;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.mybtn {
  width: 300px;
}
.fr {
  position: relative;
  /* border: 1px solid red; */
  top: 50%;
  width: 300px;
  left: 50%;
  margin-left: -150px;
  margin-top: -104.8px;
}
svg {
  position: relative;
  overflow: hidden;
  margin-top: -90px;
  text-align: center;
  margin-left: 64px;
}
@media screen and (max-width: 500px) {
  .dd {
    position: absolute;
    top: 50%;
    width: 100%;
    height: 300px;
    left: 0;
    margin-left: 0;
    margin-top: -250px;
    border: 1px solid blue;
    background: rgba(0, 0, 17, 0.1);
  }
}
</style>

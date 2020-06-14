<template>
  <div class="dd">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="fr">
      <b-form-group
        id="input-group-1"
        label="用户名:"
        label-for="input-1"
      >
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
      <b-button type="submit" class="mybtn" variant="primary">登录</b-button>
    </b-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          username: '',
          password: ''
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        // evt.preventDefault()
        // alert(JSON.stringify(this.form))
       alert('登录成功！');
        this.$router.push({name:'edit'});
      },
      onReset(evt) {
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
    .dd{
        position: absolute;
        top: 50%;
        width: 500px;
        height: 500px;
        left: 50%;
        margin-left: -250px;
        margin-top: -250px;
        border: 1px solid blue;
        background:rgba(0, 0, 17,0.1);
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
.mybtn{
    width: 300px;
}
.fr{
    position: relative;
    /* border: 1px solid red; */
    top: 50%;
    width: 300px;
    left: 50%;
    margin-left: -150px;
    margin-top: -104.8px;
}
@media screen and (max-width: 500px){
.dd{
        position: absolute;
        top: 50%;
        width: 100%;
        height: 300px;
        left: 0;
        margin-left: 0;
        margin-top: -250px;
        border: 1px solid blue;
        background:rgba(0, 0, 17,0.1);
    }
}
</style>
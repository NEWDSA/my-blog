<template>
    <div class="login">
    <div class="content">
        <div class="header">11111</div>
        <label for="male">用戶名:</label>
        <input v-model="username"  name="username" type="text" style="margin-bottom:50px;" size="50px"><br>
        <label for="male">密  碼:</label>
         <input v-model="password" name="password" type="password"  size="50px">
         <label for="male"></label>
        <button type="submit" @click="Login()">提交</button>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            username:'',
            password:''
        }
    },
    methods:{
        Login(){
          if(this.username=='Luciano'&& this.password=='123'){
              this.$router.push({path:'/edit'})
          }else{
              if(this.username==''){
                  alert('请输入用户名!');
              }else if(this.password==''){
                  alert('请输入密码!');
              }else{
                 alert('请检查用户名或密码!');
              }
          }
        }
    }
}
</script>
<style scoped>
  .login{
      position: absolute;
      top: 50%;
      left: 50%;
      width: 500px;
      height: 500px;
      margin-top: -250px;
      margin-left: -250px;
      background: #000;
      display: block;
  }
  .content{
      position: relative;
      top: 50%;
      left: 50%;
      width: 500px;
      margin-top: -131px;
      margin-left: -250px;
      /*border: 1px solid red;*/
      text-align: center;
  }
  label{
    width: 70px;
  }
  button{
      width: 200px;
      margin-top: 100px;
      background:green;
      
  }
</style>

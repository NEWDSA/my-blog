<template>
  <div class="flex" ref="flex">
    <div class="box"><img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3565578506,42843461&fm=26&gp=0.jpg">1111</div>
    <div class="box"><img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3565578506,42843461&fm=26&gp=0.jpg">1111</div>
    <div class="box"><img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3565578506,42843461&fm=26&gp=0.jpg">1111</div>
    <div class="box"><img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3565578506,42843461&fm=26&gp=0.jpg">1111</div>
    <div class="box"><img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3565578506,42843461&fm=26&gp=0.jpg">1111</div>
    <div class="box"><img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3565578506,42843461&fm=26&gp=0.jpg">1111</div> 
    <div class="box"><img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3565578506,42843461&fm=26&gp=0.jpg">1111</div> 
    <div class="box"><img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3565578506,42843461&fm=26&gp=0.jpg">1111</div> 
    <div class="box"><img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3565578506,42843461&fm=26&gp=0.jpg">1111</div> 
    </div>
</template>
<style scoped>
 *{
            margin:0;
            padding:0;
        }
        .flex{
            display: flex;
            height: 200px;
            margin-top: 70px;
            margin-left: 10px;
            margin-right: 10px;
          
        }
        .box,img{
            width:200px;
            height: 200px;
            margin-right: 10px;
            text-align: center;
            background:grey;
        }
        .flex-box{
            flex:1
        }
        @media screen and (max-width: 800px) {
            
        *{
            margin:0;
            padding:0;
        }
        .flex{
            display:block;
          
        }
        .box{
            width:100%;
            height:100%;
            background: red;
            text-align: center;
             margin-bottom: 30px;
            
        }
        img{
             width:100%;
            height:100%;
            background: red;
            text-align: center;
           
        }
        
        .flex-box{
            flex:1
        }
    }

</style>
<script>
export default {
    mounted(){
        let a=this.$refs.flex.clientWidth;
        let b=this.$refs.flex.scrollWidth;
        if(b>a){
            alert('您的内容超出范围');
        }
    }
}
</script>
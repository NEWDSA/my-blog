<template>
  <div class="ro">
    <!--<b-form-input  placeholder="小Q智能聊天机器人" @change="robot($event)"></b-form-input>-->
    <svg
      t="1590720662618"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="1207"
      width="200"
      height="200"
      id="popover-target-1"
    >
      <path d="M490.656 31.876h42.688v168.376h-42.688z" fill="#CCD1D9" p-id="1208" />
      <path
        d="M149.344 618.688V832c0 11.782 9.532 21.344 21.312 21.344S192 843.782 192 832V618.688H149.344zM832 618.688v212.656c0 11.782 9.562 21.344 21.344 21.344s21.312-9.562 21.312-21.344V618.688H832z"
        fill="#434A54"
        p-id="1209"
      />
      <path
        d="M170.656 469.344h142.218V640H170.656c-47.124 0-85.312-38.188-85.312-85.312 0-47.156 38.188-85.344 85.312-85.344zM853.344 469.344h-142.218V640h142.218c47.124 0 85.312-38.188 85.312-85.312 0-47.156-38.188-85.344-85.312-85.344z"
        fill="#CCD1D9"
        p-id="1210"
      />
      <path
        d="M512 853.344m-170.656 0a170.656 170.656 0 1 0 341.312 0 170.656 170.656 0 1 0-341.312 0Z"
        fill="#434A54"
        p-id="1211"
      />
      <path
        d="M810.656 490.688C810.656 325.718 676.938 192 512 192s-298.656 133.718-298.656 298.688V896c0 23.562 19.094 42.688 42.656 42.688h512c23.562 0 42.656-19.124 42.656-42.688V490.688z"
        fill="#E6E9ED"
        p-id="1212"
      />
      <path
        d="M213.344 490.688V512h597.312v-21.312c0-7.188-0.25-14.312-0.75-21.344H214.094a301.06 301.06 0 0 0-0.75 21.344z"
        fill="#AAB2BD"
        p-id="1213"
      />
      <path d="M512 64m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="#E6E9ED" p-id="1214" />
      <path
        d="M640 618.688c0 11.782-9.562 21.312-21.344 21.312s-21.312-9.532-21.312-21.312 9.532-21.344 21.312-21.344S640 606.906 640 618.688z"
        fill="#A0D468"
        p-id="1215"
      />
      <path
        d="M436.906 362.688c0 11.782-9.562 21.312-21.344 21.312s-21.344-9.532-21.344-21.312 9.562-21.344 21.344-21.344 21.344 9.562 21.344 21.344z"
        fill="#434A54"
        p-id="1216"
      />
      <path
        d="M725.344 618.688c0 11.782-9.562 21.312-21.344 21.312s-21.344-9.532-21.344-21.312 9.562-21.344 21.344-21.344 21.344 9.562 21.344 21.344z"
        fill="#ED5565"
        p-id="1217"
      />
      <path
        d="M607.562 362.688c0 11.782-9.562 21.312-21.344 21.312s-21.312-9.532-21.312-21.312 9.532-21.344 21.312-21.344 21.344 9.562 21.344 21.344zM405.344 597.344H320c-11.782 0-21.344 9.562-21.344 21.344S308.218 640 320 640h85.344c11.782 0 21.312-9.532 21.312-21.312s-9.532-21.344-21.312-21.344z"
        fill="#434A54"
        p-id="1218"
      />
    </svg>
    <b-popover target="popover-target-1" triggers="hover" placement="right">
      <template v-slot:title>小Q提示您</template>
      Hi
      我的
      <b>小主</b>人!
    </b-popover>
    <div>
      <b-form-textarea
        id="textarea"
        class="tar"
        ref="tarea"
        placeholder="Can we chat something intersting ?"
        rows="3"
        v-model="text"
        max-rows="6"
      ></b-form-textarea>
      <b-form-input id="input-sm" class="in" v-model.trim="content" size="sm" placeholder="请输入您的内容！(按回车以提交)" @keyup.enter="robot(this)"></b-form-input>
    </div>
  </div>
</template>

<script>
import RobotApi from "@/api/robot";
export default {
  data() {
    return {
      text: "",
      content: null
    };
  },
  mounted(){
   //vue 设置超时时间
  //  if(this.timer){
  //    clearInterval(this.timer)
  //  }else{
  //    this.timer=setInterval(()=>{
  //      this.content="";
  //    },1000*30)
  //  }
  },
  methods: {
    robot() {
      console.log(this.$refs.tarea.$el.__vue__);
      
      // if (!this.content == null || !this.content == "") {
      //   this.content = "您: " + this.content;
      // }
      RobotApi.getRobot(this.content).then(res => {
        const resp = res.data.content;
        this.text+=this.content+ " 小Q回复:" + resp+'\n';
      });
      //设置超时时间

    }
  },
  destroyed(){
    // clearInterval(this.timer)
  }
};
</script>
<style scoped>
.ro {
  position: relative;
  top: 70px;
}

.icon {
  position: relative;
  left: 50%;
  margin-left: -100px;
}
.tar {
  text-align: center;
}
.in{
  text-align: center;
}
</style>

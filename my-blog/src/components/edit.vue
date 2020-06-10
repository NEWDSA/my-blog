<template>
  <div class="edit">
  <table class="tbsr" border="1px solid " style="width:600px;">
    <tr>
    <td style="text-algin:center;">标题</td>
    <td><input type="text" size="40"></td>
    </tr>
   <tr>
   <td colspan="2">
  <!-- bidirectional data binding（双向数据绑定） -->
    <quill-editor
      class="quill-editor"
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @ready="onEditorReady($event)"
      @change="onEditorChange($event)"
    ></quill-editor>
    </td>
    </tr>
    <tr>
    <td style="text-algin:center;"><b-form-select v-model="selected" :options="options"></b-form-select></td>
    <td style="padding-left:120px;"><b-button class="b" variant="primary" @click="publish($event)">发布</b-button></td>
    </tr>
  
   
   
    </table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      content: '<h2>I AM EXAMPLE</h2>',
      editorOption: {
        // some quill options
        
      },
      selected:null,
      options:[
        { value: null, text: '请选择需要发布到的模块' },
          { value: 'a', text: '说说' },
          { value: 'b', text: '相册' },
          { value: 'c', text: '关于我' }
          // { value: 'd', text: 'This one is disabled', disabled: true }
      ]
    }
  },
  methods: {
    onEditorBlur () {
      console.log('blur', this.messages)
    },

    onEditorFocus () {
      console.log('focus', this.messages)
      // this.content = "";
    },
    onEditorChange () {
      console.log('change', this.$el.__vue__.$children[0]._content)
    },
    onEditorReady () {
      console.log('ready', this.messages)
    },
    publish () {
      if (this.$el.__vue__.$children[0]._content === '') { window.alert('TEST OK' + this.$el.__vue__.$children[0]._content) } else { console.log('HI LINDA !!!!') }
    }
  },
  mounted () {
    console.log('this is current quill insance object', this.content)
  }
}
</script>
<style scoped>
  .tbsr{
    position: relative;
    left: 50%;
    margin-left:-300px;
  }
</style>

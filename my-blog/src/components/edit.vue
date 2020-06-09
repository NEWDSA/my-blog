<template>
  <div class="edit">
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
    <b-button class="b" variant="primary" @click="publish($event)">发布</b-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      content: '<h2>I AM EXAMPLE</h2>',
      editorOption: {
        // some quill options
        
      }
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
  .b{
    position: relative;
    top: 10px;
    left: 50%;
    width: 200px;
    margin-left: -100px;
    text-align: center;
  }
</style>

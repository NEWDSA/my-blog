<template>
  <!-- bidirectional data binding（双向数据绑定） -->
  <quill-editor class="ql-editor" v-model="content"
                ref="myQuillEditor"
                :options="editorOption"
                @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)"
                @ready="onEditorReady($event)">
  </quill-editor>
 </template>
<script>
export default {
  methods: {

    onEditorBlur () {
      console.log('blur', this.messages)
    },

    onEditorFocus () {
      console.log('focus', this.messages)
    },

    onEditorReady () {
      console.log('ready', this.messages)
    }
  }

}
</script>
<style lang="scss" scoped>
 .ql-editor{
   height: 500px;
 }
</style>

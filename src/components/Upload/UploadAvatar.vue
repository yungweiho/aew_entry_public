<template lang="pug">
.avatar-container
  el-upload.avatar-uploader(
      ref='avatar'
      :limit='1'
      :auto-upload='false'
      :multiple='false'
      :file-list='fileList'
      :on-change='handleChange'
      action='#'
      list-type='picture'
    )
    i.el-icon-upload.el-upload__text
      em  點擊上傳
</template>

<script>

export default {
  name: 'UploadAvatar',
  props: {},
  data() {
    return {
      tempUrl: '',
      fileList: [],
    };
  },
  computed: {
    imageUrl() {
      return this.tempUrl;
    },
  },
  methods: {
    rmImage() {
      this.emitInput('');
    },
    emitSelected(file) {
       console.log(file);
      this.$emit('onSelected', file);
    },
    handleImageSuccess(response, file, fileList) {
      // this.emitUploaded(file.files.file);
    },
    handleChange(file, fileList){
      this.emitSelected(fileList[0].raw);
      console.log('拉拉拉',fileList[0]);
    },
    beforeUpload(file) {
      // console.log(file);
    },
    clearList() {
      this.$refs['avatar'].clearFiles();
      this.emitSelected('');
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
// @import '~@/styles/mixin.scss';
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>

<template lang="pug">
.upload-container
  el-upload.image-uploader(
      :multiple='true'
      :show-file-list='false'
      :on-success='handleImageSuccess'
      drag=''
      action='#'
      :http-request='UploadImage'
      :before-upload='beforeUpload'
    )
    i.el-icon-upload
      .el-upload__text
        | 將圖片拖曳到這裡 或
        em  點擊上傳
  //- .image-preview-title 一般預覽
  .image-preview.image-app-preview
    .image-preview-wrapper(v-if='imageUrl.length>1')
      el-image(:src='imageUrl')
      .image-preview-action
        i.el-icon-delete(@click='rmImage')
    .image-preview-wrapper(v-else-if='coverImg.length>1')
      el-image(:src='coverImg')
      .image-preview-action
        i.el-icon-delete(@click='rmImage')
  //- .image-preview-title 縮圖預覽
  .image-preview.hidden-sm-and-down
    .image-preview-wrapper(v-if='imageUrl.length>1')
      el-image(:src='imageUrl' :fit='"cover"' style='height: 100%;')
      .image-preview-action
        i.el-icon-delete(@click='rmImage')
    .image-preview-wrapper(v-else-if='coverImg.length>1')
      el-image(:src='coverImg' :fit='"cover"' style='height: 100%;')
      .image-preview-action
        i.el-icon-delete(@click='rmImage')
</template>

<script>
import { CreateMediaByPhotoType } from '@/api/admin/Media';

export default {
  name: 'UploadImage',
  props: {
    currentProject: {
      type: String,
      default: '',
    },
    coverImg: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      tempUrl: '',
    };
  },
  computed: {
    imageUrl() {
      return this.tempUrl;
    },
    coverImgUrl() {
      return this.coverImg;
    },
  },
  methods: {
    rmImage() {
      this.emitInput('');
    },
    emitUploaded(url, id) {
      this.$emit('onUploaded', url);
      this.$emit('getMediaID', id);
    },
    handleImageSuccess(response, file, fileList) {
      // this.emitUploaded(file.files.file);
    },
    UploadImage(param) {
      const formData = new FormData();
      formData.append('photo', param.file);
      formData.append('name', param.file.name);
      formData.append('description', 'description test');
      formData.append('parent_id', '');

      CreateMediaByPhotoType(this.currentProject, formData)
        .then(response => {
          console.log(response.data);
          this.tempUrl = response.data.info.thumbnail;
          this.emitUploaded(this.tempUrl, response.data.id);
        })
        .catch(err => {
          console.log(err);
        });
    },
    beforeUpload(file) {
      // console.log(file);
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
//@import '~@/styles/mixin.scss';
@import '@/assets/mixin.sass';
.upload-container {
  width: 100%;
  position: relative;
  @include clearfix;
  .image-uploader {
    width: 35%;
    float: left;
  }
  .image-preview-title {
    float: left;
    position: relative;
    margin-left: 50px;
  }
  .image-preview {
    width: 150px;
    height: 150px;
    position: relative;
    border: 1px dashed #d9d9d9;
    float: left;
    margin-left: 50px;
    .image-preview-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .image-preview-action {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      cursor: default;
      text-align: center;
      color: #fff;
      opacity: 0;
      font-size: 20px;
      background-color: rgba(0, 0, 0, 0.5);
      transition: opacity 0.3s;
      cursor: pointer;
      text-align: center;
      line-height: 200px;
      .el-icon-delete {
        font-size: 36px;
      }
    }
    &:hover {
      .image-preview-action {
        opacity: 1;
      }
    }
  }
  .image-app-preview {
    width: 240px;
    height: 150px;
    position: relative;
    border: 1px dashed #d9d9d9;
    float: left;
    margin-left: 50px;
    .app-fake-conver {
      height: 44px;
      position: absolute;
      width: 100%; // background: rgba(0, 0, 0, .1);
      text-align: center;
      line-height: 64px;
      color: #fff;
    }
  }
}

@media (max-width: 1199.98px) {
  .upload-container {
    .image-uploader {
      width: 55%;
    }
  }
  .hidden-sm-and-down {
    display: none;
  }
}
</style>

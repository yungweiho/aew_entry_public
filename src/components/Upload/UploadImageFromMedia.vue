<template lang="pug">
.upload-from-media-container
  el-button(icon='el-icon-upload' type='primary' @click='openMediaDialog()') 上傳圖片

  el-dialog(title='選擇圖片' :visible.sync='dialogVisible' append-to-body)
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

    .media-container
      .media-gird.display-flex-grid(v-if='imgData.length>0')
        el-card.margin-space(v-for='img in imgData' :key='img.id')
          el-image(:src='img.info.thumbnail' :fit='"cover"' style='height: 100px;' @click='handleImageSelected($event, img)')

    pagination(v-show='total>0' :total='total' :page.sync='query.page' :limit.sync='query.limit' @pagination='getMediaList()')

    .dialog-footer(slot='footer')
      el-button(@click='dialogVisible = false')
        | {{ $t('table.cancel') }}
      el-button(type='primary' @click='submit()')
        | {{ $t('table.confirm') }}

  //- //- .image-preview-title 一般預覽
  //- .image-preview.image-app-preview
  //-   .image-preview-wrapper(v-if='imageUrl.length>1')
  //-     el-image(:src='imageUrl')
  //-     .image-preview-action
  //-       i.el-icon-delete(@click='rmImage')
  //-   .image-preview-wrapper(v-else-if='coverImg.length>1')
  //-     el-image(:src='coverImg')
  //-     .image-preview-action
  //-       i.el-icon-delete(@click='rmImage')
  //- //- .image-preview-title 縮圖預覽
  //- .image-preview.hidden-sm-and-down
  //-   .image-preview-wrapper(v-if='imageUrl.length>1')
  //-     el-image(:src='imageUrl' :fit='"cover"' style='height: 100%;')
  //-     .image-preview-action
  //-       i.el-icon-delete(@click='rmImage')
  //-   .image-preview-wrapper(v-else-if='coverImg.length>1')
  //-     el-image(:src='coverImg' :fit='"cover"' style='height: 100%;')
  //-     .image-preview-action
  //-       i.el-icon-delete(@click='rmImage')
</template>

<script>

import Pagination from '@/components/Pagination';
import { CreateMediaByPhotoType } from '@/api/admin/Media';
import { ListMedias } from '@/api/admin/Media';

export default {
  name: 'UploadImageFromMedia',
  components: {
    Pagination,
  },
  props: {
    id: {
      type: Number,
      default: -1,
    },
    currentProject: {
      type: String,
      default: '',
    },
    coverImg: {
      type: String,
      default: '',
    },
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      tempUrl: '',
      dialogVisible: false,
      imgData: '',
      total: 0,
      query: {
        page: 1,
        limit: 24,
        keyword: '',
      },
      selectedImages: [],
      lastSelect: '',
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
          this.getMediaList();
        })
        .catch(err => {
          console.log(err);
        });
    },
    beforeUpload(file) {
      // console.log(file);
    },
    openMediaDialog() {
      this.dialogVisible = true;
      this.getMediaList();
    },
    handleImageSelected(event, img) {
      const target = event.target.parentElement.parentElement.parentElement;
      if (!this.multiple){
        if (this.selectedImages.length > 0) {
          this.lastSelect.classList.remove('selectedCard');
          this.selectedImages.pop();
        }
        target.classList.add('selectedCard');
        this.lastSelect = target;
        // this.selectedImages.push(target);
        this.selectedImages.push(img);
      } else {
        if (target.classList.contains('selectedCard')) {
          target.classList.remove('selectedCard');
          this.selectedImages.splice(this.selectedImages.indexOf(img), 1);
        } else {
          target.classList.add('selectedCard');
          this.selectedImages.push(img);
        }
      }
      console.log('this.selectedImages :', this.selectedImages);
    },
    getMediaList() {
      // const params = Object.assign({ page: this.query.page });
      ListMedias(this.currentProject, { page: this.query.page })
        .then(response => {
          this.imgData = response.data;
          this.total = response.meta.total;
          this.query.page = response.meta.current_page;

          // console.log(this.imgData);
        })
        .catch(err => {
          console.log(err);
          // this.$router.push({ path: `/login` });
        });
    },
    submit() {
      this.dialogVisible = false;
      const emitObj = { id: this.id, medias: this.selectedImages };
      this.$emit('onImageSelected', emitObj);
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import '~@/styles/mixin.scss';
.upload-container {
  width: 100%;
  position: relative;
  @include clearfix;
  .image-uploader {
    width: 100%;
    float: left;
    text-align: center;
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
      width: 100%;
      text-align: center;
      line-height: 64px;
      color: #fff;
    }
  }
}

.media-container {
  .media-gird {
    .margin-space {
      margin: 10px;
      width: 150px;
      height: 150px;
      /deep/ .el-card__body {
        padding: 14px;
        padding-bottom: 2px;
      }
    }
    .bottom {
      margin-top: 13px;
      line-height: 12px;
      .button {
        padding: 0;
        float: right;
      }
    }
    .image {
      width: 30%;
      display: block;
    }
    /deep/ .selectedCard {
      border: 2px solid #ccc;
    }
  }
  .display-flex-grid {
    @include display-flex-grid;
  }
}

.upload-from-media-container{
  /deep/ .el-dialog {
    width: 75%;
  }
}

@media (max-width: 1199.98px) {
  .hidden-sm-and-down {
    display: none;
  }
}
</style>

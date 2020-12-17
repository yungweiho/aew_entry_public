<template lang="pug">
#activity_list(v-if="my_apply.length > 0")
  //- popup 說明
  v-row(justify="center")
    v-dialog(v-model="dialog" max-width="1800px")
      v-card.notice_card
        v-card-title.notice_title 重要提醒
        v-card-text.notice_content 文化美感輕旅行系列活動報名完成後，需要依照您的志願進行排序，排序流程如圖中所示，提醒您，排序為媒合各場館之重要依據，為保障您的權益，請務必記得儲存您的志願排序。
        .display_block  
          .display_img01
          .display_img02
        v-card-action
          v-btn(@click="dialog = false").notice_btn 我已瞭解

  .atlBOTTOM(v-if="my_apply.length > 0")
    .atl_mold(v-for="item in my_apply" :key="item.id" v-if="my_apply.length > 0")
      .atl_num_block
        .atl_num_label 志願排序
        .atl_dropdown_box(v-for="datas in item.fields.data" v-if="datas && datas.order" tabIndex="0" @click="datas.order.open = !datas.order.open" @blur="datas.order.open = false")
          .atl_dropdown_label {{ datas.order.get }}
            .atl_dropdown_arrow
          .atl_num_box(v-if="datas.order.open===true")
            .atl_num(v-for="number in datas.order.options" :key="number" @click.stop="datas.order.get=number, datas.order.open=false") {{number}}
          .notice_text(v-if="datas.order.get === null") 請在此選擇志願序。
      .atl_text_block
        .atl_title {{item.form.title}}
        .atl_date(v-for="datas in item.fields.data" v-if="datas") {{datas.date}}
        .atl_time(v-for="datas in item.fields.data" v-if="datas") {{datas.time}}
        .atl_place {{ get_place(item) }}
      .atl_mode_block
        .atl_mode_label 狀態
        .atl_mode_box_done(v-if="item.fields.status === 1")
          .atl_mode 已報名
        .atl_mode_box_remove(v-if="item.fields.status === 0")
          .atl_mode 已取消
      .atl_mode_block
        .atl_mode_label 操作
        .atl_mode_box_done.bg_blue(@click="editItem(item)")
          .atl_mode 編輯
      //- .atl.edit_block
      //-   .atl_edit 編輯
  .atl_submmit_button(@click="update_order()") 送出
  v-snackbar(
            v-model="snackbar"
            :color="snackColor"
          ) {{snackTxt}}

</template>

<script>
import { ListApplications } from '@/api/client/Application';
import { UpdateApplication } from '@/api/client/Application';
export default {
  data(){
    return{
      dialog: true,
      my_apply: [],
      snackbar: false,
      snackTxt: '',
      snackColor: '',
      switchTxt: '',
    }
  },
  created() {
    this.getMyApplyList()
  },
  mounted() {
    if(this.my_apply.length > 0) {
      this.$emit('exist2')
    }
  },
  methods: {
    //拿到自己的報名list
    getMyApplyList() {
      ListApplications()
      .then(response => {
        var temp_arr = [];
        temp_arr = response.data;
        for(var i = 0; i < temp_arr.length; i++) {
          if(temp_arr[i].form.fields.actionType === 4) {
            this.my_apply.push(temp_arr[i])
          }
        }
        if(this.my_apply.length > 0) {
          this.$emit('exist2')
        }
      })
      .catch(
        err => {
          console.log(err);
        }
      )
    },
    //更新志願序
    update_order() {
      var order_check = [];
      for(var i = 0; i < this.my_apply.length; i++) {
        this.my_apply[i].fields.data.forEach(item => {
          order_check.push(item.order.get)
        })
      };
      var repeat_order = order_check.filter((item, index, arr) => arr.indexOf(item) !== index)
      if(repeat_order.length > 0) {
        this.showSnackbar('請勿選擇相同的志願序。', '#bd7373')
      } else {
        var data = [];
        var newForm = {};
        for(var i = 0; i < this.my_apply.length; i++) {
          var submitData = new FormData()
          newForm = {
            status: 1,
            data: this.my_apply[i].fields.data
          };
          submitData.append('fields', JSON.stringify(newForm));
          var id = this.my_apply[i].id;
          UpdateApplication(id, submitData)
          .then(
            response => {
              this.showSnackbar('儲存完成！', '#69917a')
            }
            
          )
          .catch(err => {
            console.log(err);
          })
        }
      }
      
    },
    //place
    get_place(apply) {
      var obj_school;
      for(var i = 0; i < apply.form.fields.fieldsData.length; i++) {
        for(var j = 0; j < apply.form.fields.fieldsData[i].value.length; j++) {
          obj_school = apply.form.fields.fieldsData[i].value[j].value.find(item => item.type === 'school')
        }
      }
      return obj_school.place
    },
    //alert
    showSnackbar(str, color) {
      this.snackbar = false;
      this.snackTxt = str;
      this.snackColor = color;
      this.snackbar = true;
    },
    //to edit appyment
    editItem(item) {
      const url = window.location.href.split('/')[0] + '/applicationForm/' + item.form.id + '#/update/' + item.id;
      window.location.href = url
    },
  }
}
</script>
<style lang="sass">
#activity_list
  .el-form-item__content
    line-height: initial
  .v-dialog__container
    display: block !important
</style>
<style scoped lang="sass">
@import '@/assets/style_activity.sass'

.bg_blue
  background-color: #75869c !important

#activity_list
  width: 100%
  box-sizing: border-box

  .notice_card
    width: 100%
    +flexcolumn
    align-items: center
    padding: 20px
    +phone
      padding: 5px 5px 20px 5px
    .notice_title
      font-size: 30px
      letter-spacing: 3px
      font-weight: bold
      +phone
        font-size: 25px
    .notice_content
      font-size: 20px
      letter-spacing: 2px
      margin-top: 20px
      text-align: justify
      line-height: 30px
      +phone
        margin-top: 10px
        letter-spacing: 3px
        text-align: justify
        font-size: 17px
    .display_block
      width: 100%
      +flexrow
      justify-content: space-between
      +pad
        +flexcolumn
      .display_img01
        // border: solid 1px #333
        width: 40%
        height: 31.5vw
        background: url('../../assets/activity/notice_img01.png')
        background-size: 100% auto
        background-repeat: no-repeat
        margin-right: 20px
        +pad
          width: 100%
          height: 70vw
        +phone
          background: url('../../assets/activity/notice_mobile_img01.png')
          background-size: 100% auto
          background-repeat: no-repeat

      .display_img02
        // border: solid 1px #333
        width: 60%
        height: 31.5vw
        background: url('../../assets/activity/notice_img02.png')
        background-size: 100% auto
        background-repeat: no-repeat
        +pad
          margin-top: 10px
          width: 100%
          height: 50vw
        +phone
          background: url('../../assets/activity/notice_mobile_img02.png')
          background-size: 100% auto
          background-repeat: no-repeat
    .notice_btn
      font-size: 18px
      letter-spacing: 1.5px
      font-weight: bold
      margin-top: 20px
      +pad
        margin-top: 20px


  .atlTOP
    width: 100%
    box-sizing: border-box
    +flexrow
    border-bottom: solid 1px $lightgray
    padding-bottom: 5px

    .atl_pagename
      display: flex
      align-items: center
      font-size: 22px
      font-weight: 800
      letter-spacing: 1px
      color: $darkgray
      box-sizing: border-box

  .atlBOTTOM
    width: 100%
    box-sizing: border-box
    margin-top: 50px
    +flexcolumn
    +smallcom
      margin-top: 3.5vw
    +pad
      +flex_center
      margin-top: 5vw
    +phone
      margin-top: 8vw

    .atl_mold
      width: 100%
      box-sizing: border-box
      padding: 30px 0
      margin-bottom: 20px
      +flexrow
      background: rgba($lightgray,0.2)
      &:last-child
        margin-bottom: 0
      +padpro
        +flexcolumn-reverse
        padding: 30px
      
      .atl_num_block
        width: 15%
        box-sizing: border-box
        +flexcolumn
        +flex_center
        +com
          width: 20%
        +padpro
          +flexrow
          +flex_start
          width: 100%
          margin-top: 15px

        .atl_num_label
          font-size: 15px
          letter-spacing: 1px
          color: rgba($darkgray,0.7)
          margin-bottom: 5px
          +padpro
            margin: 0 10px 0 0

        .atl_dropdown_box
          +size(50%,30px)
          background: white
          position: relative
          cursor: pointer
          outline: none
          +lgcom
            +size(60%,30px)
          +smallcom
            +size(70%,30px)
          +padpro
            +size(20%,30px)
          +pad
            +size(25%,30px)
          +phone
            +size(55%,30px)
          +phone5
            +size(60%,30px)

          .atl_dropdown_label
            text-align: center
            position: relative
            width: 100%
            font-size: 15px
            letter-spacing: 1px
            padding: 5px
            box-sizing: border-box
            color: $lightgray
            &.atl_dropdown_label_click
              color: black

            .atl_dropdown_arrow
              display: block
              +size(6px,6px)
              border-top: solid 2px $lightgray
              border-left: solid 2px $lightgray
              transform: rotate(-135deg)
              position: absolute
              top: 10px
              right: 10px
              &.atl_dropdown_arrow_click
                top: 13px
                transform: rotate(45deg)

          .atl_num_box
            width: 100%
            box-sizing: border-box
            text-align: center
            position: absolute
            border: solid 1px rgba($lightgray,0.2)
            color: $lightgray
            background: white
            top: 32px
            z-index: 2

            .atl_num
              font-size: 15px
              padding: 8px 0
              box-sizing: border-box
              border-bottom: solid 3px rgba($lightgray,0.2)
              cursor: pointer
              &:last-child
                border-bottom: none
              &:hover
                background: $lightgray
                color: white
          .notice_text
            position: absolute
            top: 35px
            left: -25px
            width: max-content
            background-color: #fff
            padding: 2px
            box-shadow: 0px 1px 10px 1px rgba(#333, 0.3)
            // z-index: 99
            color: #ab6d68
            border-radius: 5px
            +pad
              left: 0px

      .atl_text_block
        width: 70%
        box-sizing: border-box
        +flexcolumn
        +com
          width: 65%
        +padpro
          width: 100%

        .atl_title
          font-size: 25px
          font-weight: 800
          text-align: justify
          line-height: 30px
          letter-spacing: 1px

        .atl_date
          font-size: 15px
          letter-spacing: 1px
          margin-top: 15px
          padding-left: 50px
          &:after
            content: '日期'
            display: block
            font-size: 15px
            letter-spacing: 1px
            color: rgba($darkgray,0.7)
            position: absolute
            top: 0
            left: 0
          &:before
            content: '|'
            display: block
            font-size: 13px
            letter-spacing: 1px
            color: rgba($darkgray,0.5)
            position: absolute
            top: 1px
            left: 38px

        .atl_time
          font-size: 15px
          letter-spacing: 1px
          margin-top: 8px
          padding-left: 50px
          &:after
            content: '場次'
            display: block
            font-size: 15px
            letter-spacing: 1px
            color: rgba($darkgray,0.7)
            position: absolute
            top: 0
            left: 0
          &:before
            content: '|'
            display: block
            font-size: 13px
            letter-spacing: 1px
            color: rgba($darkgray,0.5)
            position: absolute
            top: 1px
            left: 38px

        .atl_place
          font-size: 15px
          letter-spacing: 1px
          margin-top: 8px
          padding-left: 50px
          &:after
            content: '地點'
            display: block
            font-size: 15px
            letter-spacing: 1px
            color: rgba($darkgray,0.7)
            position: absolute
            top: 0
            left: 0
          &:before
            content: '|'
            display: block
            font-size: 13px
            letter-spacing: 1px
            color: rgba($darkgray,0.5)
            position: absolute
            top: 1px
            left: 38px

      .atl_mode_block
        width: 15%
        box-sizing: border-box
        +flexcolumn
        +flex_center
        +padpro
          width: 100%
          justify-content: flex-start
          align-items: self-start
          margin-bottom: 15px

        .atl_mode_label
          font-size: 15px
          letter-spacing: 1px
          color: rgba($darkgray,0.7)
          margin-bottom: 5px
          +padpro
            display: none

        .atl_mode_box_done
          +size(90px, 30px)
          border-radius: 7px
          background: $darkgray
          box-shadow: 1px 1px 3px rgba($darkgray,0.3)
          cursor: pointer

          .atl_mode
            font-size: 16px
            font-weight: 800
            letter-spacing: 1.5px
            top: 4.5px
            text-align: center
            color: white

        .atl_mode_box_remove
          +size(90px, 30px)
          border-radius: 7px
          background: white
          box-shadow: 1px 1px 3px rgba($darkgray,0.3)
          cursor: pointer

          .atl_mode
            font-size: 16px
            font-weight: 800
            letter-spacing: 1.5px
            top: 4.5px
            text-align: center
            color: $gray

        .atl_mode_box_removing
          +size(90px, 30px)
          border-radius: 7px
          background: $gray
          box-shadow: 1px 1px 3px rgba($darkgray,0.3)
          cursor: pointer

          .atl_mode
            font-size: 16px
            font-weight: 800
            letter-spacing: 1.5px
            top: 4.5px
            text-align: center
            color: white
  .atl_submmit_button
    width: max-content
    // border: solid 1px black
    cursor: pointer
    background-color: $gray
    font-weight: bold
    color: #fff
    padding: 2px 10px
    font-size: 20px
    margin-top: 1vw

</style>
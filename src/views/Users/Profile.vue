<template lang="pug">
.reg
  //用戶資料
  .left(:class="{active: $route.query.tab}")
    //大頭照
    router-link.avatar(v-if="showUser!=null" to="/me" :key="showUser.id" :style="{background:　'url(' + (showUser.avatar==null? require('../../assets/default.png') : showUser.avatar) + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
    .content_block
      .text_block
        //姓名
        .name(v-if="showUser!=null") {{ showUser.name }}
        //Email
        .email(v-if="showUser!=null") {{ showUser.email }}
        //自我介紹
        .intro(v-if="showUser!=null") {{ showUser.introduction }}
      .button_block
        //編輯按鈕
        .wright(@click="toEdit()") 編輯
        //活動按鈕
        .ac_button(@click="toActivity()") 我的活動
          .tip_card(v-if="$route.fullPath === '/me'") 查看已報名活動、排序文化輕旅行相關活動
    

  //收藏文章、報名活動
  transition(name="fade" mode="out-in")
    .right(v-if="$route.query.tab")
      //  TAB區
      .tabBlock(v-if="$route.query.tab==='activity' || $route.query.tab==='favorite'")
        .tab(v-for="item in tabArray")
          .tab_title(@click="selecttab = item.title" :class="{select: selecttab==item.title}") {{ item.title }}
      
      //內容
      .no_content(v-if="have_school_activity !== true && have_normal_activity !== true && $route.query.tab==='activity'") 您尚未報名任何活動。
      .contentBlock(v-if="$route.query.tab==='activity'" :class="{nodata: have_school_activity !== true && have_normal_activity !== true}")
        .school_activity_title(v-if="have_school_activity === true")
          .school_activity_text 學校專屬活動
        activity_list(@exist2="have_school_activity=true")
        .normal_activity_title(v-if="have_normal_activity === true")
          .normal_activity_text 一般活動
        applictionList(@exist="have_normal_activity=true")
      update(v-if="$route.query.tab==='edit'")


</template>
<script>
import { getInfo } from '@/api/client/Auth'
import { getToken, removeToken } from '@/utils/auth';
import profileicon from '@/views/Users/profileicon'
import collect_articles from '@/views/Users/collect_articles'
import applictionList from '@/views/Users/applicationList'
import activity_list from '@/views/activity_school/activity_list'
import update from '@/views/Users/update'
export default {
  components: {profileicon,applictionList,collect_articles, update, activity_list},
  // props: {
  //   userData: {}
  // },
  data(){
    return {
      tip: true,
      have_school_activity: false,
      have_normal_activity: false,
      selecttab: '報名的活動',
      userData: null,
      tabArray: [
        // {
        //   title: '收藏的文章'
        // },
        {
          title: '您已報名的活動'
        },
      ]
    }
  },
  created() {
    this.APIgetInfo()
    
  },
  mounted () {
    if(this.have_token===undefined) {
      this.$router.replaced('/')
    }
  },
  computed: {
    //User的資料
    showUser() {
      if(this.userData != null) {
        return this.userData
      } else {
        return null
      }
    },
    //有沒有登入
    have_token() {
      return getToken()
    }
  },
  methods: {
    APIgetInfo() {
      getInfo()
      .then(respones => {
        this.userData = respones.data
        // console.log(this.userData);
      })
      .catch(err => {
        console.log(err);
      })
    },
    toActivity() {
      this.$router.push({query: {tab: 'activity'}})
    },
    toEdit() {
      this.$router.push({query: {tab: 'edit'}})
    },
    
      
  }
}

</script>
<style scoped lang="sass">
@import '@/assets/style.sass'

.reg
  position: relative
  width: 100%
  background-color: #E5E5E5
  +flexrow
  flex-wrap: wrap
  +maxcom
    padding: 0 0 100px 0
  
  
  .left
    position: relative
    width: 25%
    margin-left: 37.5%
    min-height: 100vh
    background-color: #E5E5E5
    z-index: 1
    +flexcolumn
    align-items: center
    padding: 100px 0px 450px 10px
    // flex-wrap: wrap

    +maxcom
      // padding: 100px 50px 550px 50px
    +pad
      position: relative
      width: 100%
      min-height: 100vh
      margin-left: 0
      padding: 0 50px 100px 50px
    +phone
      // height: 25vw
      // min-height: 96.5px
      padding: 0 20px 600px 20px

    &.active
      width: 20%
      transition: 1s ease
      margin-left: 0%
      +maxcom
        // padding: 100px 0 550px 0
      +pad
        width: 100%
        min-height: 20vh
        padding: 20px
        +flexrow
      .avatar
        width: 200px
        height: 200px
        +com
          width: 180px
          height: 180px
        +pad
          width: 30vw
          height: 30vw
          margin-top: 0
        +phone
          // flex: 
          flex-shrink: 0
          width: 115px
          height: 115px
      .content_block
        width: 100%
        +pad
          width: 70vw
          justify-content: flex-start
          align-items: flex-start
          margin-left: 20px
        .text_block
          width: 100%
          // +bb
          +pad
            align-items: flex-start
          .name
            +pad
              margin-top: 0
          .email
            word-break: break-all
            +phone5
              font-size: 10px
          .intro

        .button_block
          +pad
            align-items: flex-start

    //大頭照
    .avatar
      position: relative
      width: 200px
      height: 200px
      border-radius: 10px
      margin-top: 80px
      z-index: 1
      background: url("https://drive.google.com/uc?export=view&id=1OtKYDmi_aNQ7Pw9Kls-gh2UXRkF7frbo")
      +bgcover
      border: solid 0.5px #D2D2D2
      &:hover
        box-shadow: 3px 3px 5px 2px #cccccc
        transition: 0.3s
        
      +pad
        width: 150px
        height: 150px
      +phone 

    .content_block
      +flexcolumn
      +flexCenter
      
      .text_block
        +flexcolumn
        +flexCenter
        //姓名
        .name
          font-size: 23px
          font-weight: bold
          margin-top: 1.5vw
          letter-spacing: 1.5px


        //Email
        .email
          font-size: 15px
          letter-spacing: 1px
          margin-top: 0.5vw
        .intro
          margin-top: 10px
          font-size: 15px
          letter-spacing: 1.5px
          line-height: 30px
          +pad
          +phone
            display: none

      .button_block
        +flexrow
        //編輯按鈕
        .wright 
          font-size: 15px
          letter-spacing: 1.5px
          border-radius: 6px
          background-color: #fff
          padding: 3px 5px
          font-weight: bold
          color: #535353
          margin-top: 20px
          cursor: pointer
          // z-index: 1
          margin-right: 5px
          border: solid 0.5px #D2D2D2
          &:active
            color: white
            background-color: #333
            box-shadow: 0
          &:hover
            box-shadow: 1px 1px 5px 1px #cccccc
            
        .ac_button
          margin-top: 20px
          // +bb
          position: relative
          background-color: #fff
          font-weight: bold
          color: #535353
          letter-spacing: 1px
          cursor: pointer
          border-radius: 6px
          font-size: 15px
          padding: 3px 5px
          transition: 0.3s  
          border: solid 0.5px #D2D2D2
          &:hover
            box-shadow: 1px 1px 5px 1px #cccccc
            transition: 0.3s
          &:active
            background-color: #333
            color: #fff
          .tip_card
            position: absolute
            width: max-content
            background-color: #fff
            padding: 10px
            border: solid 1px #111
            border-radius: 6px
            top: 40px
            left: -120px
            &:after
              content: ''
              position: absolute
              width: 15px
              height: 15px
              background-color: #fff
              border-left: solid 1px #111
              border-top: solid 1px #111
              transform: rotate(45deg)
              top: -8px
              left: 150px
              z-index: 1
            +phone
              left: -150px
              &:after
                left: 160px
            +phone5
              padding: 10px 5px
              left: -145px

    .intro_big

  .right
    position: relative
    width: 80%
    min-height: 100vh
    background-color: #E5E5E5
    box-sizing: border-box
    padding: 100px 0 400px 0
    // z-index: 
    +maxcom
      padding: 100px 0 500px 0
    +pad
      position: relative
      width: 100%
      left: 0
      height: auto
      padding: 30px 0 200px 0
      min-height: 80vh
    +phone
      min-height: 600px
      padding: 30px 0 600px 0

    .tabBlock
      margin-left: 3%
      +flexrow
      .tab
        +flexrow
        margin-right: 1vw
        +pad
          margin-right: 2vw
        .icon
          margin-right: 0.5vw
        .tab_title
          font-size: 20px
          font-weight: bold
          color: #555
          margin-top: 1.5px
          letter-spacing: 1.5px
          cursor: pointer
          padding: 3px 25px 3px 0
          border-bottom: solid 1px #555
          &.select
            color: #333
          &:after
            content: ''
            width: 12px
            border-top: solid 1px #333
            position: absolute
            transform: rotate(45deg)
            top: 28.5px
            right: -1px

      .sort_button
        font-size: 18px
        padding: 5px 10px 0 10px
        box-shadow: 1px 1px 5px 1px #cccccc
        cursor: pointer
        font-weight: bold
        color: #555
        // +bb
        border-radius: 6px
        background-color: #fff
    .no_content
      width: max-content
      margin-top: 50px
      padding: 10px
      font-size: 30px
      letter-spacing: 2px
      font-weight: bold
      background-color: #fff
      color: #DEDEDE
      opacity: 0.8
      +pad
        margin-left: 20px
        font-size: 25px
    .contentBlock
      width: 92%
      background-color: #F7F7F7
      box-shadow: 0px -1px 10px 1px rgba($darkgray, 0.2)
      margin-left: 3%
      margin-top: 1.5vw
      padding: 2vw
      +pad
        width: 94%
        padding: 5vw 3vw 3vw 3vw
      &.nodata
        display: none
      
      .school_activity_title
        display: inline-block
        padding: 6px 12px
        background: $gray
        position: absolute
        top: 30px
        left: -11px
        box-shadow: 2px 2px 5px rgba($darkgray,0.3)
        &:after
          content: ''
          display: inline-block
          border-top: 8px solid rgba(white,0)
          border-bottom: 8px solid rgba(white,0)
          border-left: 8px solid rgba($darkgray,0.8)
          position: absolute
          top: -10px
          left: 4.2px
          transform: rotate(45deg)
          z-index: 0
        .school_activity_text
          color: #fff
          letter-spacing: 1.5px
          font-size: 15px
      .normal_activity_title
        display: inline-block
        padding: 6px 12px
        background: $gray
        position: relative
        // top: 30px
        // left: -10px
        margin-top: 30px
        margin-left: calc(-3% - 11px )
        box-shadow: 2px 2px 5px rgba($darkgray,0.3)
        +pad
          margin-left: -10px

        &:after
          content: ''
          display: inline-block
          border-top: 8px solid rgba(white,0)
          border-bottom: 8px solid rgba(white,0)
          border-left: 8px solid rgba($darkgray,0.8)
          position: absolute
          top: -10px
          left: 4.2px
          transform: rotate(45deg)
          z-index: 0
        .normal_activity_text
          color: #fff
          letter-spacing: 1.5px
          font-size: 15px

</style>

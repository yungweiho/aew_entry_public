<template lang="pug">
#activity
  //- popup notice description
  v-row(justify="center" v-if="$route.path === '/activity/school'")
    v-dialog(v-model="dialog" max-width="1800px" )
      v-card.description_card
        v-card-title.description_title 文化美感輕旅行-教育部補助偏遠地區學校學子前往藝文場館參訪實施計畫
        v-card-text.description_content 本計畫係為提升偏遠地區學生美感體驗之機會，培養其接觸美感場域習慣，鼓勵偏遠地區公立高級中等以下學校至合作場館參觀展演，由本部補助交通費及保險費(極度偏遠、特殊偏遠學校另補助住宿費)，各合作場館視申請狀況提供本館或特展之免費導覽服務及門票費用。
        v-card-title.description_subtitle 報名流程說明
        a(href="https://aew.moe.edu.tw/storage/files/0f5dc3dfb9e07701c1183a5b007e19c9f1da9be8a55f0c1bf06e94077cb3991a.pdf" target="_blank").paper 
          v-btn.paper_text 操作手冊
        .enter_notice 請盡量使用Chrome瀏覽器報名，以確保您的使用體驗。
        .enter_notice 提醒：在進行所有報名流程之前，請先閱讀操作手冊，並註冊美感教育平台帳號且登入，才可以報名活動喔！
        .apply_description_pic
        v-carousel.slider_for_pad
          v-carousel-item(v-for="item in pad_description")
            .pic_for_pad(:style="{background: 'url(' + item.pic + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
        v-carousel.slider_for_phone
          v-carousel-item(v-for="item in phone_description")
            .pic_for_phone(:style="{background: 'url(' + item.pic + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
        v-card-actions
          v-btn(depressed @click="dialog = false").button_text 瞭解

  .atTOP(v-if="$route.params.postid==null && $route.path != '/activity/school/list'")
    router-link.at_pagename(to="/activity/school") {{atList.pageName}}
    .at_tabs_block
      router-link.at_tabs(v-for="tabs in place_tab" :to="'/activity/school/tab/'+tabs.id" :class="{at_tabs_click: tabs.id == $route.params.category}") {{tabs.name}}
    .at_tabs_dropdown_block
      .at_tabs_dropdown(@click="dropdown_open=!dropdown_open" @blur="dropdown_open=false")
        .at_tabs_dropdown_title(:class="{at_tabs_dropdown_title_click: atList.label!='全部'}") {{atList.label}}
          .at_tabs_dropdown_arrow(:class="{at_tabs_dropdown_arrow_click: dropdown_open==true}")
        .at_tabs_dropdown_box(v-if="dropdown_open==true" :class="{at_tabs_dropdown_box_open: dropdown_open==true}")
          router-link(v-for="tabs in atList.tabs" :to="'/activity/school/tab/'+ tabs.id")
            .at_dropdown_tabs(@click.stop="atList.label=tabs.name, dropdown_open=false" :class="{active: $route.params.category === tabs.id}") {{tabs.name}}
    //- .at_search_block
      .at_search_mold
        .at_icon
        input.at_search_box(type='text', placeholder='搜尋...')
  .atBOTTOM(v-if="$route.params.category==null && $route.params.postid==null && $route.path != '/activity/school/list'")
    .atCard_Mold(v-for="cards in articles_data")
      router-link(:to="'/activity/school/post/' + cards.id")
        .atCard_top
          .atCard_img(:style="{background: 'url('+ (cards.media === null? require('../../assets/default.png') : cards.media.info.src) + ')',backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}")
      .atCard_bottom
        .atCard_textarea
          router-link.atCard_title(:to="'/activity/school/post/'+cards.id") {{cards.title}}
          .atCard_date {{cards.date}}
          .atCard_button(v-if="cards.mode == '我要報名'")
            .atCard_button_text {{cards.mode}}
          .atCard_button_mode(v-if="cards.mode == '已截止'")
            .atCard_mode_text {{cards.mode}}
      .atCard_ribbon
        .atCard_ribbon_name {{get_place(cards)}}
      .atCard_ribbon_special(v-if="get_junior(cards) != null")
        .atCard_ribbon_text {{ get_junior(cards) }}
    //自動排版計算
    .atCard_Mold_row(v-for="item in (row-len%row)")
  .atBUTTON(v-if="$route.params.category==null && $route.params.postid==null && $route.path != '/activity/school/list'")
    .atButton_block
      .atButton_arrow_left(@click="previous_page(Math.ceil(Number(currentPage) - 1))")
      .atButton_page_number {{ currentPage }} / {{ articles_last_page }}
      .atButton_arrow_right(@click="next_page(Math.ceil(Number(currentPage) +1))")
  .atPOST
    router-view
</template>

<script>
import { ListArticles } from '@/api/client/Articles';
import { GetPage } from '@/api/client/Page';
export default {
  data(){
    return{
      dialog: true,
      dropdown_open: false,
      //自動計算排版
      len: 12,
      row: 4,
      articles_data: [],
      articles_last_page: null,
      place_tab: [],
      pageData: null,
      pad_description: [
        {
          pic: require('../../assets/activity/culture_description_img_1.png'),
        },
        {
          pic: require('../../assets/activity/culture_description_img_2.png'),
        },
        {
          pic: require('../../assets/activity/culture_description_img_3.png'),
        },
        {
          pic: require('../../assets/activity/culture_description_img_4.png'),
        },
      ],
      phone_description: [
        {
          pic: require('../../assets/activity/culture_description_img_5.png'),
        },
        {
          pic: require('../../assets/activity/culture_description_img_6.png'),
        },
        {
          pic: require('../../assets/activity/culture_description_img_7.png'),
        },
        {
          pic: require('../../assets/activity/culture_description_img_8.png'),
        },
      ],
      //假資料
      atList: {
        pageName: '活動報名',
        label: '全部',
        tabs: [
          {
            id: 1,
            name: '臺北市立美術館',
          },
          {
            id: 2,
            name: '國立故宮博物院(北院)',
          },
          {
            id: 3,
            name: '國立故宮博物院(南院)',
          },
          {
            id: 4,
            name: '臺中國家歌劇院',
          },
          {
            id: 5,
            name: '國立臺灣美術館',
          },
          {
            id: 6,
            name: '臺南市美術館',
          },
          {
            id: 7,
            name: '高雄市立美術館',
          },
          {
            id: 8,
            name: '衛武營國家藝術文化中心',
          },
          {
            id: 6,
            name: '臺南市美術館',
          },
        ],
      },
    }
  },
  created() {
    this.ApiGetArticles(1, this.currentPage)
    this.ApiGetPage(1, 1)
  },
  computed: {
    //current page
    currentPage() {
      if(this.$route.query.p) {
        return this.$route.query.p;
      } else {
        return 1;
      }
    }
  },
  methods: {
    //get page
    ApiGetPage(project, id) {
      GetPage(project, id)
      .then(response => {
        this.pageData = response.data
        this.place_tab = this.pageData.type.section.tabs
        // console.log(this.place_tab);
        // console.log(this.pageData);
      })
      .catch(err => {
        console.log(err);
      })
    },
    //get articles
    ApiGetArticles(project, page) {
      ListArticles(project, {page: page})
      .then(response => {
        this.articles_data = response.data;
        this.articles_last_page = response.meta.last_page
        // console.log(this.articles_data);
      })
      .catch(err => {
        console.log(err);
      })
    },
    //get place
    get_place(article) {
      var category = article.categories.find(item => item.id !== 1 && item.id !== 10)
      return category.name
    },
    //get 國中限定
    get_junior(article) {
      var category = article.categories.find(item => item.id === 10)
      if(category !== undefined) {
        return category.name;
      } else {
        return null;
      }
    },
    //next page
    next_page(page) {
      if(this.currentPage >= this.articles_last_page) {
        return;
      } else {
        this.$router.push({query: {p: page}})
      }
    },
    //previous page
    previous_page(page) {
      if(this.currentPage <= 1) {
        return;
      } else {
        this.$router.push({query: {p: page}})
      }
    }
    
  }
}
</script>
<style lang="sass">
@import '@/assets/style_activity.sass'

#activity
  .v-dialog__container
    display: block !important
  .v-dialog__content
    // background-color: rgba(#333, 0.5)
  .v-window__next
    right: 1% !important
    // +phone
      // bottom: 50%
  .v-window__next, .v-window__prev
    // +phone
    //   display: none

</style>
<style scoped lang="sass">
@import '@/assets/style_activity.sass'

#activity
  width: 100%
  box-sizing: border-box
  padding: 100px 5vw 500px 5vw
  +com
    padding: 100px 5vw 500px 5vw
  +smallcom
    padding: 100px 5vw 500px 5vw
  +pad
    padding: 6vw 6vw 500px 6vw
  +phone
    padding: 8vw 8vw 500px 8vw
  .description_card
    +flexcolumn
    align-items: center
    padding: 0 0 50px 0
    .description_title
      font-size: 30px
      font-weight: bold
      letter-spacing: 1.5px
      margin-top: 10px
      // line-height: 30px
      +smallcom
        line-height: 45px
      +pad
        font-size: 25px
        line-height: 35px
    .description_content
      font-size: 18px
      margin-top: 10px
      letter-spacing: 1.5px
      line-height: 30px
    .description_subtitle
      font-size: 18px
      font-weight: bold
      letter-spacing: 1.5px
      border: solid 1px #111
      width: max-content
      background-color: #DEDEDE
      height: 50px
      padding: 0 10px
    .enter_notice
      font-size: 20px
      letter-spacing: 2px
      border: solid 1px red
      color: red
      font-weight: bold
      padding: 2px 5px
      margin-top: 10px
      +smallcom
        width: 95%
    .apply_description_pic
      width: 100%
      height: 51vw
      background: url('../../assets/activity/culture_description_img.png')
      background-size: 100% auto
      background-repeat: no-repeat
      background-position: -16px 0
      +pad
        display: none
    .slider_for_pad
      display: none
      +pad
        display: block
      +phone
        display: none
      .pic_for_pad
        width: 90%
        margin-left: 5%
        height: 90%
        background-size: contain !important
    .slider_for_phone
      display: none
      +phone
        display: block
      .pic_for_phone
        width: 90%
        margin-left: 5%
        height: 90%
        background-size: contain !important
    .button_text
      font-size: 20px
      border: solid 1px #333
      margin-top: 20px
    .paper
      // font-size: 30px
      margin-top: 20px
      margin-bottom: 20px
      // height: max-content
      // box-shadow: 1px 1px 6px 3px rgba(#333, 0.5)
      .paper_text
        font-size: 18px
  .atTOP
    width: 100%
    box-sizing: border-box
    +flexrow
    border-bottom: solid 1px $lightgray
    padding-bottom: 5px
    +com
      padding-bottom: 10px
    +phone
      flex-wrap: wrap

    .at_pagename
      display: flex
      align-items: center
      width: 10%
      font-size: 22px
      font-weight: 800
      letter-spacing: 1px
      color: $darkgray
      box-sizing: border-box
      +smallcom
        width: 12%
        font-size: 20px
      +padpro
        width: 20%
        font-size: 22px
      +phone
        width: 100%
        margin-bottom: 2vw

    .at_tabs_block
      width: 90%
      +flexrow
      display: flex
      align-items: center
      box-sizing: border-box
      margin-bottom: -2px
      +smallcom
        // width: 70%
      +padpro
        display: none

      .at_tabs
        flex-wrap: wrap
        font-size: 16px
        letter-spacing: 1px
        color: $lightgray
        margin-right: 1.5vw
        cursor: pointer
        transition-duration: 0.3s
        text-decoration: none
        width: max-content
        &:last-child
          margin-right: 0
        &:after
          content: ''
          display: inline-block
          +size(100%,3px)
          background: $lightgray
          position: absolute
          bottom: -9px
          left: 0
          opacity: 0
          transition-duration: 0.3s
        &:hover
          color: $darkgray
          transition-duration: 0.3s
          &:after
            opacity: 1
            transition-duration: 0.3s
        &.active
          color: $darkgray
          transition-duration: 0.3s
          &:after
            opacity: 1
            transition-duration: 0.3s
        &.at_tabs_click
          color: $darkgray
          &:after
            opacity: 1

    .at_tabs_dropdown_block
      display: none
      +padpro
        display: block
        width: 55%
      +phone
        width: 100%

      .at_tabs_dropdown
        +size(85%,30px)
        border: solid 1px $lightgray
        +phone
          +size(100%,30px)
          margin-bottom: 2.5vw

        .at_tabs_dropdown_title
          width: 100%
          font-size: 16px
          padding: 5px
          box-sizing: border-box
          color: $lightgray
          &.at_tabs_dropdown_title_click
            color: black

          .at_tabs_dropdown_arrow
            display: block
            +size(6px,6px)
            border-top: solid 2px $lightgray
            border-left: solid 2px $lightgray
            transform: rotate(-135deg)
            position: absolute
            top: 10px
            right: 10px
            &.at_tabs_dropdown_arrow_click
              top: 13px
              transform: rotate(45deg)

        .at_tabs_dropdown_box
          width: 100%
          box-sizing: border-box
          text-align: center
          border: solid 1px $lightgray
          color: $lightgray
          background: white
          top: 3px
          z-index: 2
          display: none
          &.at_tabs_dropdown_box_open
            display: block

          .at_dropdown_tabs
            font-size: 16px
            padding: 8px 0
            box-sizing: border-box
            border-bottom: solid 1px $lightgray
            cursor: pointer
            &:last-child
              border-bottom: none
            &:hover
              background: $lightgray
              color: white

    .at_search_block
      width: 15%
      box-sizing: border-box
      +flex_end
      +smallcom
        width: 18%
      +padpro
        width: 25%
      +phone
        width: 100%

      .at_search_mold
        +flexrow

        .at_icon
          +size(16px,16px)
          display: inline-block
          border: solid 2px $lightgray
          border-radius: 100%
          cursor: pointer
          top: 5px
          +padpro
            top: 10px
          &:after
            content: ''
            width: 7px
            display: block
            border: solid 1px $lightgray
            transform: translateX(11px) translateY(12px) rotate(38deg)

        .at_search_box
          +size(150px,23px)
          border: solid 1px $lightgray
          margin-left: 15px
          padding-left: 5px
          font-family: '微軟正黑體'
          font-size: 15px
          color: $darkgray
          letter-spacing: 0.5px
          +com
            +size(10vw,23px)
            margin-left: 10px
          +smallcom
            +size(11vw,23px)
          +padpro
            +size(18vw,30px)
            margin-left: 15px
          +phone
            +size(73vw,30px)
            margin-left: 15px

  .atBOTTOM
    width: 100%
    box-sizing: border-box
    margin-top: 50px
    display: flex
    justify-content: space-between
    flex-wrap: wrap
    +maxcom
      display: grid
      grid-template-columns: auto auto auto auto
      grid-gap: 30px
    +smallcom
      margin-top: 3.5vw
    +pad
      +flex_center
      margin-top: 5vw
    +phone
      margin-top: 8vw

    .atCard_Mold
      width: 20vw
      // min-width: 450px
      box-sizing: border-box
      margin-bottom: 2vw
      +maxcom
        min-width: 450px
      +lgcom
        min-width: 20vw
      +com
        min-width: 28vw
        margin-bottom: 3.5vw
      +smallcom
        min-width: 42vw
        margin-bottom: 5.5vw
      +pad
        min-width: 80vw
        margin-bottom: 8vw
        &:last-child
          margin-bottom: 0

      .atCard_top
        +size(100%,10vw)
        min-height: 220px
        overflow: hidden
        cursor: pointer
        +com
          min-height: 15vw
        +smallcom
          min-height: 22vw
        +pad
          min-height: 40vw
        +phone
          min-height: 45vw
        +phone5
          min-height: 48vw
        &:hover
          .atCard_img
            transform: scale(1.1)
            transition-duration: 0.5s

        .atCard_img
          +size(100%,100%)
          transition-duration: 0.5s

      .atCard_bottom
        +size(100%,7vw)
        min-height: 160px
        box-sizing: border-box
        padding: 1vw
        background: rgba($lightgray,0.2)
        +lgcom
          padding: 1.3vw
        +com
          min-height: 11.8vw
          padding: 1.5vw
        +smallcom
          min-height: 16vw
          padding: 2vw
        +pad
          min-height: 25vw
          padding: 3vw
        +phone
          min-height: 45vw
          padding: 5vw
        +phone5
          min-height: 50vw

        .atCard_textarea
          +size(100%,100%)
          box-sizing: border-box

          .atCard_title
            +text_title
            letter-spacing: 1px
            color: black
            cursor: pointer
            transition-duration: 0.3s
            text-decoration: none
            +phone
              font-size: 20px
              line-height: 28px
            &:hover
              color: $darkgray
              transition-duration: 0.3s

          .atCard_date
            font-size: 15px
            letter-spacing: 1px
            color: $darkgray
            position: absolute
            bottom: 0
            +phone
              position: relative
              margin-top: 10px

          .atCard_button
            +size(90px, 30px)
            border-radius: 7px
            background: white
            box-shadow: 1px 1px 3px rgba($darkgray,0.3)
            position: absolute
            bottom: 0
            right: 0
            cursor: pointer
            &:hover
              background: $darkgray
              .atCard_button_text
                color: white

            .atCard_button_text
              font-size: 16px
              font-weight: 800
              letter-spacing: 1.5px
              top: 4.5px
              text-align: center
              color: black

          .atCard_button_mode
            +size(90px, 30px)
            border-radius: 7px
            background: white
            box-shadow: 1px 1px 3px rgba($darkgray,0.3)
            position: absolute
            bottom: 0
            right: 0
            
            .atCard_mode_text
              font-size: 16px
              font-weight: 800
              letter-spacing: 1.5px
              top: 4.5px
              text-align: center
              color: $gray

      .atCard_ribbon
        display: inline-block
        padding: 6px 12px
        background: $gray
        position: absolute
        top: 203px
        left: -10px
        box-shadow: 2px 2px 5px rgba($darkgray,0.3)
        &:after
          content: ''
          display: inline-block
          border-top: 8px solid rgba(white,0)
          border-bottom: 8px solid rgba(white,0)
          border-left: 8px solid rgba($darkgray,0.8)
          position: absolute
          top: -10px
          left: 4.5px
          transform: rotate(45deg)
          z-index: -1
        +com
          top: 13.8vw
        +smallcom
          top: 20.5vw
        +pad
          top: 38vw
        +phone
          top: 39vw

        .atCard_ribbon_name
          font-size: 16px
          letter-spacing: 2px
          color: white

      .atCard_ribbon_special
        display: inline-block
        padding: 6px 12px
        background: $darkgray
        position: absolute
        top: 0
        right: -15px
        transform: rotate(10deg)
        box-shadow: -2px 2px 5px rgba($darkgray,0.5)
        &:after
          content: ''
          display: inline-block
          border-top: 8px solid rgba(white,0)
          border-bottom: 7px solid rgba(white,0)
          border-right: 8px solid rgba($darkgray,0.8)
          position: absolute
          bottom: -9px
          right: 4.5px
          transform: rotate(45deg)
          z-index: -1

        .atCard_ribbon_text
          font-size: 16px
          letter-spacing: 2px
          top: -1px
          color: white

    .atCard_Mold_row
      content: ''
      overflow: hidden
      width: 20vw
      // min-width: 450px
      box-sizing: border-box
      margin-bottom: 2vw
      +maxcom
        min-width: 450px
      +com
        min-width: 28vw
        margin-bottom: 3.5vw
      +smallcom
        min-width: 42vw
        margin-bottom: 5.5vw
      +pad
        min-width: 80vw
        margin-bottom: 8vw
        &:last-child
          margin-bottom: 0

  .atBUTTON
    width: 100%
    box-sizing: border-box
    +smallcom
      margin-top: -7vw
    +pad
      margin-top: -8vw
    +phone
      margin-top: -11vw

    .atButton_block
      +flex_center

      .atButton_arrow_left
        border-top: 8px solid rgba(white,0)
        border-bottom: 8px solid rgba(white,0)
        border-right: 15px solid $lightgray
        display: inline-block
        cursor: pointer
        &:hover
          border-right: 15px solid $darkgray

      .atButton_page_number
        font-size: 18px
        color: $lightgray
        margin: 0 15px

      .atButton_arrow_right
        border-top: 8px solid rgba(white,0)
        border-bottom: 8px solid rgba(white,0)
        border-left: 15px solid $lightgray
        display: inline-block
        cursor: pointer
        &:hover
          border-left: 15px solid $darkgray

</style>
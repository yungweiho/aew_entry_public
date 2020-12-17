<template lang="pug">
#activity_post
  .atpTOP
    .atp_top_left
      .atp_img(v-if="post_data != null" :key="post_data.id" :style="{background: 'url(' + (post_data.media === null? require('../../assets/default.png') : post_data.media.info.src) + ')',backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}")
    .atp_top_right
      .atp_title(v-if="post_data != null") {{ post_data.title }}
      //- .atp_date {{post_data.date}}
      .atp_tab {{ tab }}
      .atp_button_box
        .atp_button_text(@click="to_apply()") 我要報名
      //- .atp_button_mode_box
      //-   .atp_mode_text {{post_data.mode}}
  .atpBOTTOM
    .atp_bottom_left
      .atp_body(v-if="post_data != null" v-html="post_data.body")
    .atp_bottom_right
      .atp_tags_box
        //- .atp_tags(v-for="tag in post_data.tags") # {{tag.name}}
</template>

<script>
import { GetArticle } from '@/api/client/Articles'
export default {
  data(){
    return{
      tab: null,
      post_data: null,
      //假資料
      post_list: {
        src: 'https://www.npm.gov.tw/att/exbit/04011058/b_08018742.jpg',
        title: '國寶有藝思 — 臺北故宮國寶文物導覽活動',
        date: '2020/05/09 - 2020/11/08',
        tab: '國立故宮博物院(北院)',
        mode: '我要報名',
        tags: [
          {
            id: 1,
            name: '臺北故宮',
          },
          {
            id: 2,
            name: '國寶有藝思',
          },
          {
            id: 3,
            name: '導覽活動',
          },
        ],
        body: `<p>國立故宮博物院藏有宋代已降重要皇室收藏約69萬件，質精量豐，更是國外旅客來臺灣必覽之地，除了翠玉白菜與肉型石，還有許多有趣的物件等著我們去發現探索。為使偏鄉學子到故宮觀覽故宮精品，故宮將利用1至1.5小時，由專業導覽人員帶領學子，利用輕鬆有趣的方式，認識故宮重要典藏，給予孩童一個不一樣的博物館參觀經驗。</p>
<p>可申請時間 :<br />週一、週四、週五下午13：30<br />周二10：30</p>
<p>※本活動以學生藝術體驗為主，若同行親友入場觀演需求，請自行購票。</p>`
      },
    }
  },
  created() {
    this.ApiGetArticle(1, this.$route.params.postid);
    // console.log(this.post_data);
  },
  methods: {
    to_apply() {
      const url = window.location.href.split('/')[0] + '/applicationForm/' + this.post_data.tags[0].name;
      window.open(url, '_blank');
    },
    //get article
    ApiGetArticle(project, id) {
      GetArticle(project, id)
      .then(response => {
        this.post_data = response.data;
        var tab_arr = this.post_data.categories.find(item => item.id != 1)
        this.tab = tab_arr.name
        console.log(this.post_data.tags);
      })
      .catch(err => {
        console.log(err);
      })
    }
  }
}
</script>

<style lang="sass">
@import '@/assets/style_activity.sass'


#activity_post
  width: 100%
  box-sizing: border-box
  +flexcolumn
  
  .atpTOP
    width: 100%
    box-sizing: border-box
    +flexrow
    +padpro
      +flexcolumn

    .atp_top_left
      width: 60%
      box-sizing: border-box
      padding: 0 2vw 0 0
      +padpro
        width: 100%
        padding: 0

      .atp_img
        background-repeat: no-repeat !important
        background-size: 100% auto !important
        +size(100%,25vw)
        +lgcom
          +size(100%,28vw)
        +com
          +size(100%,31vw)
        +smallcom
          +size(100%,34vw)
        +padpro
          +size(100%,45vw)

    .atp_top_right
      width: 40%
      box-sizing: border-box
      padding: 10vw 0 0 0
      border-bottom: solid 1px $lightgray
      margin-left: 2vw
      +padpro
        width: 100%
        margin-left: 0
        padding: 30px 0 15px 0
      +phone
        padding: 15px 0 15px 0

      .atp_title
        font-size: 35px
        font-weight: 800
        text-align: justify
        line-height: 45px
        letter-spacing: 2px
        color: $darkgray
        +padpro
          font-size: 30px
          line-height: 40px
        +phone
          font-size: 25px
          line-height: 35px
          letter-spacing: 1px

      .atp_date
        font-size: 16px
        letter-spacing: 1px
        margin-top: 60px
        +padpro
          margin-top: 30px
        +phone
          margin-top: 20px

      .atp_tab
        font-size: 16px
        letter-spacing: 1px
        // margin-top: 15px
        margin-top: 60px
        +padpro
          // margin-top: 10px
          margin-top: 30px
        +phone
          // margin-top: 5px
          margin-top: 20px

      .atp_button_box
        padding: 5px 12px
        border: solid 1px $darkgray
        border-radius: 7px
        position: absolute
        bottom: 15px
        right: 0
        cursor: pointer
        text-decoration: none
        color: black
        +padpro
          position: relative
          float: right
          margin-top: 20px
          bottom: 0
        +phone
          margin-top: 10px
        &:hover
          background: $darkgray
          .atp_button_text
            color: white

        .atp_button_text
          font-size: 16px
          font-weight: 800
          letter-spacing: 1px
          text-align: center
          color: black

      .atp_button_mode_box
        padding: 5px 12px
        border: solid 1px $gray
        border-radius: 7px
        position: absolute
        bottom: 15px
        right: 0
        +padpro
          position: relative
          float: right
          margin-top: 20px
          bottom: 0
        +phone
          margin-top: 10px

        .atp_mode_text
          font-size: 16px
          font-weight: 800
          letter-spacing: 1px
          text-align: center
          color: $gray

  .atpBOTTOM
    width: 100%
    box-sizing: border-box
    +flexrow
    margin-top: 2vw
    +padpro
      +flexcolumn

    .atp_bottom_left
      width: 60%
      box-sizing: border-box
      padding: 0 2vw 0 0
      +padpro
        width: 100%
        padding: 0

      .atp_body
        font-size: 16px
        text-align: justify
        line-height: 28px
        letter-spacing: 1px

    .atp_bottom_right
      width: 40%
      box-sizing: border-box
      margin: 18px 0 0 2vw
      +padpro
        width: 100%
        margin: 30px 0 0 0

      .atp_tags_box
        +flexrow
        +phone
          +flexcolumn

        .atp_tags
          font-size: 15px
          color: $lightgray
          margin-right: 20px
          cursor: pointer
          +phone
            margin: 0 0 10px 0
          &:hover
            color: black

</style>
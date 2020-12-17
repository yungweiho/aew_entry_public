<template lang="pug">
#activity_category
  .atcBOTTOM(v-if="$route.params.postid==null")
    .atcCard_Mold(v-for="cards in articles_data")
      router-link(:to="'/activity/school/post/'+cards.id")
        .atcCard_top
          .atcCard_img(:style="{background: 'url('+(cards.media === null? require('../../assets/default.png') : cards.media.info.src)+')',backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}")
      .atcCard_bottom
        .atcCard_textarea
          router-link.atcCard_title(:to="'/activity/school/post/'+cards.id") {{cards.title}}
          .atcCard_date {{cards.date}}
          .atcCard_button(v-if="cards.mode == '我要報名'")
            .atcCard_button_text {{cards.mode}}
          .atcCard_button_mode(v-if="cards.mode == '已截止'")
            .atcCard_mode_text {{cards.mode}}
      .atcCard_ribbon
        .atcCard_ribbon_name {{get_place(cards)}}
      .atcCard_ribbon_special(v-if="get_junior(cards) != null")
        .atcCard_ribbon_text {{ get_junior(cards) }}
    //自動排版計算
    .atcCard_Mold_row(v-for="item in (row-len%row)")
  .atcBUTTON(v-if="$route.params.postid==null")
    .atcButton_block
      .atcButton_arrow_left(@click="previous_page(currentPage - 1)")
      .atcButton_page_number {{ currentPage }} / {{ articles_last_page }}
      .atcButton_arrow_right(@click="next_page(currentPage +1)")
  .atPOST
    router-view
</template>

<script>
import { ListArticlesOfCategory } from '@/api/client/Articles';
export default {
  data(){
    return{

      dropdown_open: false,
      //自動計算排版
      len: 12,
      row: 4,
      articles_data: [],
      articles_last_page: null,
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
        ],
        cards: [
          {
            id: 1,
            tab: '臺北市立美術館',
            src: 'https://scontent-hkg4-1.xx.fbcdn.net/v/t1.0-9/95531419_2868292789951373_9079028734475894784_o.jpg?_nc_cat=104&_nc_sid=6e5ad9&_nc_ohc=Url59p4QxikAX-yzSML&_nc_ht=scontent-hkg4-1.xx&oh=ca6623244557ffe3c6a13078e2959695&oe=5EE8CDA6',
            title: '我是標題我是標題我是標題我是標題我是標題我是標題我是標題我是標題我是標題我是標題',
            date: '2020/05/09 - 2020/11/08',
            special: '',
          },
          {
            id: 2,
            tab: '國立故宮博物院(北院)',
            src: 'https://www.npm.gov.tw/att/exbit/04011058/b_08018742.jpg',
            title: '國寶有藝思 — 臺北故宮國寶文物導覽活動',
            date: '2020/05/09 - 2020/11/08',
            special: '',
          },
          {
            id: 3,
            tab: '國立故宮博物院(南院)',
            src: 'https://event.moc.gov.tw/public/data/01815451371.jpg',
            title: '皇帝的多寶格',
            date: '2019/12/25 - 2021/12/26',
            special: '',
          },
          {
            id: 4,
            tab: '國立故宮博物院(南院)',
            src: 'https://scontent-hkg4-1.xx.fbcdn.net/v/t1.0-9/94927049_2728557130714010_7459484721358045184_o.png?_nc_cat=107&_nc_sid=dd9801&_nc_ohc=F1fJwPyLMjkAX_l9LRZ&_nc_ht=scontent-hkg4-1.xx&oh=7b184b01a5a41d4d293bc13a8d6db25d&oe=5EE8AE56',
            title: '翰墨空間 - 故宮書畫賞析',
            date: '2020/06/09 - 2021/01/03',
            special: '',
          },
          {
            id: 5,
            tab: '臺北市立美術館',
            src: 'https://static.accupass.com/eventbanner/1909130812048037242550.jpg',
            title: '2020 台北雙年展',
            date: '2020/11/21 - 2021/03/14',
            special: '',
          },
          {
            id: 6,
            tab: '臺中國家歌劇院',
            src: 'https://www.npac-ntt.org/dispUploadBox/HomeProgram/202004271811455399ECZ.JPG',
            title: '《藝起進劇場》 戲劇篇',
            date: '2020/10/29 午場',
            special: '國中限定場次',
          },
          {
            id: 7,
            tab: '臺中國家歌劇院',
            src: 'https://www.npac-ntt.org/dispUploadBox/HomeProgram/202004241035458693P7J.JPG',
            title: '《劇場大冒險》',
            date: '2020/11/18 午場',
            special: '國中限定場次',
          },
          {
            id: 8,
            tab: '國立臺灣美術館',
            src: 'https://scontent-hkg4-1.xx.fbcdn.net/v/t1.0-9/39453158_266538360637440_5577304922673643520_o.jpg?_nc_cat=100&_nc_sid=6e5ad9&_nc_ohc=D9TX8BBdO3MAX-8VS1B&_nc_ht=scontent-hkg4-1.xx&oh=a7c663d67ed4443424d88274679be60a&oe=5EE8B429',
            title: '2020 台灣美術雙年展',
            date: '2020/10/07 - 2021/02/28',
            special: '',
          },
          {
            id: 9,
            tab: '國立臺灣美術館',
            src: 'https://mocfile.moc.gov.tw/banner/small/8dbc2e43-b34f-4b29-8b29-944cb180e571.jpg',
            title: '漫畫藝術特展',
            date: '2020/09 - 2020/12',
            special: '',
          },
          {
            id: 10,
            tab: '臺南市美術館',
            src: 'https://art.turn.tw/event-image/600x600/88379fbb02fe9d308691858ace32da72.jpg',
            title: '原臺南警察署建築修復展',
            date: '',
            special: '常設展',
          },
          {
            id: 11,
            tab: '臺南市美術館',
            src: 'https://lh6.googleusercontent.com/proxy/7hqEKE7N6Cfi_VY3GBiBu1rz9s84ZmsGwRdtweHtOj4CArG6ksXcHH1P-9IxjBBLa7ezCxUChatIfTO3PntgZDt1Zj7yt7dSViKr3_nSGdpc8VYg-VlhCbYSh94nzacz0xrEvDJy8LD_C1Fi1PM7Sdlr7_SADgzdpcWo',
            title: '南薰藝韻－陳澄波、郭柏川、許武勇、沈哲哉專室',
            date: '2019/01/27 - 2021/01/27',
            special: '',
          },
          {
            id: 12,
            tab: '臺南市美術館',
            src: 'https://pad.chinatimes.com/action/b/20200111/b16aa16/img/18787_002081004.109.81958261_846278302492721_5855903692930154496_N.jpg',
            title: '天 · 地 · 人－洪通百歲誕辰展',
            date: '2019/11/12 - 2021/03/07',
            special: '',
          },
        ],
      },
    }
  },
  created() {
    this.ApiGetCategoryArticles(this.$route.params.category, this.currentPage)
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
    //get category articles
    ApiGetCategoryArticles(id, page) {
      ListArticlesOfCategory(id, {page: page})
      .then(response => {
        this.articles_data = response.data;
        this.articles_last_page = response.meta.last_page
      })
      .catch(err => {
        console.log(err);
      })
    },
    get_place(article) {
      var category = article.categories.find(item => item.id !== 1)
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
@import '../../assets/style_activity.sass'
#activity_category
  width: 100%
  box-sizing: border-box
  position: relative

  .atcBOTTOM
    position: relative
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

    .atcCard_Mold
      position: relative
      width: 18vw
      min-width: 450px
      box-sizing: border-box
      margin-bottom: 2vw
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

      .atcCard_top
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
          .atcCard_img
            transform: scale(1.1)
            transition-duration: 0.5s

        .atcCard_img
          +size(100%,100%)
          transition-duration: 0.5s

      .atcCard_bottom
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

        .atcCard_textarea
          +size(100%,100%)
          box-sizing: border-box

          .atcCard_title
            +text_title
            letter-spacing: 1px
            color: black
            cursor: pointer
            transition-duration: 0.3s
            text-decoration: none
            word-break: break-all
            +phone
              font-size: 20px
              line-height: 28px
            &:hover
              color: $darkgray
              transition-duration: 0.3s

          .atcCard_date
            font-size: 15px
            letter-spacing: 1px
            color: $darkgray
            position: absolute
            bottom: 0
            +phone
              position: relative
              margin-top: 10px

          .atcCard_button
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

            .atcCard_button_text
              font-size: 16px
              font-weight: 800
              letter-spacing: 1.5px
              top: 4.5px
              text-align: center
              color: black

          .atcCard_button_mode
            +size(90px, 30px)
            border-radius: 7px
            background: white
            box-shadow: 1px 1px 3px rgba($darkgray,0.3)
            position: absolute
            bottom: 0
            right: 0
            
            .atcCard_mode_text
              font-size: 16px
              font-weight: 800
              letter-spacing: 1.5px
              top: 4.5px
              text-align: center
              color: $gray

      .atcCard_ribbon
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

        .atcCard_ribbon_name
          font-size: 16px
          letter-spacing: 2px
          color: white

      .atcCard_ribbon_special
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

        .atcCard_ribbon_text
          font-size: 16px
          letter-spacing: 2px
          top: -1px
          color: white

    .atcCard_Mold_row
      content: ''
      overflow: hidden
      width: 18vw
      min-width: 450px
      box-sizing: border-box
      margin-bottom: 2vw
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

  .atcBUTTON
    width: 100%
    box-sizing: border-box
    +smallcom
      margin-top: -7vw
    +pad
      margin-top: -8vw
    +phone
      margin-top: -11vw

    .atcButton_block
      +flex_center

      .atcButton_arrow_left
        border-top: 8px solid rgba(white,0)
        border-bottom: 8px solid rgba(white,0)
        border-right: 15px solid $lightgray
        display: inline-block
        cursor: pointer
        &:hover
          border-right: 15px solid $darkgray

      .atcButton_page_number
        font-size: 18px
        color: $lightgray
        margin: 0 15px

      .atcButton_arrow_right
        border-top: 8px solid rgba(white,0)
        border-bottom: 8px solid rgba(white,0)
        border-left: 15px solid $lightgray
        display: inline-block
        cursor: pointer
        &:hover
          border-left: 15px solid $darkgray

</style>
<template lang="pug">
.hv
  .hvBlock(v-for="item in vArray")
    //影片
    .hvVideo(v-html="item.video")
    //文字
    .hvTextBlock
      .hvTitle {{ item.title }}
      .hvSubTitle {{ item.subtitle }}
      .hvContent {{ HtoS(item.content) }}
    
</template>

<script>
export default {
  data() {
    return {
      vArray: [
        {
          video: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dST2G7-tCPU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          title: '學美‧美學│設計進場．校園美學改造王出列',
          subtitle: '台灣創意設計中心Taiwan Design Center',
          content: `<p>「學美．美學-校園美感設計實踐計畫」以全國公私立高級中等學校及國民中小學為對象，透過公開徵件，由學校自行提出校園改造需求的提案申請。今年首度辦理即有來自北、中、南、東部及外島共172所學校申請，經過評審團隊兩階段評選及實地考察後，選出9所學校成為合作對象。而在設計團隊的徵選上，則有來自各領域的25間設計公司提出34案參加，最後由7個設計團隊雀屏中選並進行各校的美學改造專案。改造內容相當多元，有教室、司令台、川堂、中廊、垃圾與資源回收站、師生餐廳、指標系統、電纜線及管線整理等。</p>
            <p>指導單位 : 教育部 <br />執行單位 : 台灣創意設計中心</p>`,
        },
        
      ]
    }
  },
  methods: {
    //轉換HTML
    HtoS(s) {
      return s.replace(/<(?:.|\s)*?>/g,"").replace(/&nbsp;/ig, "").replace(/&hellip;/ig, "").replace(/&mdash;/ig,"")
    },
  }
}
</script>

<style lang="sass">
@import '@/assets/style.sass'

.hv
  position: relative
  width: 80%
  height: 41.7vw
  margin-top: 11vw
  margin-left: 10%
  background: url('../assets/video.png')
  +bgcon
  background-size: 100% 100%
  background-position: 0 0
  box-sizing: border-box
  // +bb
  +pad
    width: 95%
    height: 100.5vw
    margin-left: 0%
    margin-top: 20vw
    background-size: 100% auto
    +ie
      margin-top: 2vw
  +phone
    margin-top: 40vw
    margin-bottom: 5vw
    +ie
      margin-top: 2vw
  .hvBlock
    width: 100%
    height: 100%
    box-sizing: border-box
    position: relative
    //影片
    .hvVideo
      position: absolute
      width: 93%
      height: 40.5%
      margin-top: 6.3%
      // +bb
    //文字
    .hvTextBlock
      position: absolute
      width: 93.1%
      height: 47.9%
      top: 46.4%
      box-sizing: border-box
      padding: 3%
      // margin-top: 6%
      // +bb
      .hvTitle
        position: relative
        height: 18%
        color: #717071
        // +bb
        font-size: 1.2vw
        font-weight: 800
        overflow: hidden
        text-overflow: ellipsis
        display: -webkit-box
        -webkit-line-clamp: 2
        -webkit-box-orient: vertical
        +pad
          font-size: 3.5vw
        +phone
          // height: 16%
          font-size: 4vw
          -webkit-line-clamp: 1

      .hvSubTitle
        height: 20%
        font-size: 1vw
        color: #717071
        // +bb
        overflow: hidden 
        text-overflow: ellipsis 
        white-space: nowrap 
        line-height: 2.5vw
        +pad
          font-size: 3vw
        +phone
          font-size: 3.5vw
          // height: 21%
          line-height: 3vw
      .hvContent
        height: 58%
        color: #717071
        // +bb
        font-size: 0.9vw
        letter-spacing: 0.1vw
        line-height: 2vw
        overflow: hidden
        text-overflow: ellipsis
        display: -webkit-box
        -webkit-line-clamp: 5
        -webkit-box-orient: vertical
        +smallcom
          line-height: 2.1vw
        +pad
          font-size: 2vw
          line-height: 5vw
        +phone
          // font-size: 1vw
          line-height: 6vw
          -webkit-line-clamp: 4
          font-size: 3vw


</style>
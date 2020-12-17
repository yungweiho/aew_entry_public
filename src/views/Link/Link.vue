<template lang="pug">
.lin
  .linTop
    .LinName {{ pageName }}
  .linBottom
    a.linCard(v-for="item in connectArray" :href="item.link")
      .linPic(:style="{background:　'url(' + item.firstpic + ')', backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
      .linTitle {{ item.title }}
</template>

<script>
export default {
  data() {
    return { 
      pageName: '網網相連',
      connectArray: [
        {
          title: '臺灣藝術教育網',
          link: 'https://ed.arte.gov.tw/ch/index.aspx',
          firstpic: require('../../assets/connect/Arts.jpg'),
        },
        {
          title: '教育部文藝創作獎',
          link: 'http://web.arte.gov.tw/wap_philology/',
          firstpic: require('../../assets/connect/article.jpg'),
        },
        {
          title: '全國學生音樂比賽',
          link: 'http://web.arte.gov.tw/wap_music/',
          firstpic: require('../../assets/connect/music.jpg'),
        },
        {
          title: '全國學生美術比賽',
          link: 'http://web.arte.gov.tw/wap_nsac/',
          firstpic: require('../../assets/connect/nsac.jpg'),
        },
        {
          title: '全國學生舞蹈比賽',
          link: 'https://studentdance.perdc.ntnu.edu.tw/dance_y2019/index.php',
          firstpic: require('../../assets/connect/dance.jpg'),
        },
        {
          title: '全國學生創意戲劇比賽',
          link: 'http://web.arte.gov.tw/drama/',
          firstpic: require('../../assets/connect/drama.jpg'),
        },
        {
          title: '全國學生圖畫書創作獎',
          link: 'http://web.arte.gov.tw/painting/index.aspx',
          firstpic: require('../../assets/connect/book.jpg'),
        },
        {
          title: '全國師生鄉土歌謠比賽',
          link: 'http://web.arte.gov.tw/country/',
          firstpic: require('../../assets/connect/song.jpg'),
        },
        {
          title: '藝術教育貢獻獎',
          link: 'http://web.arte.gov.tw/aecp/',
          firstpic: require('../../assets/connect/art.jpg'),
        },
      ],
    }
  }
}
</script>

<style lang="sass">
@import '@/assets/style.sass'
.lin
  width: 80%
  margin-top: 6vw
  margin-left: 10%
  box-sizing: border-box
  padding: 0 0 200px 0
  +pad
    width: 95%
    margin-left: 2.5%
  +phone
    width: 100%
    margin-left: 0%
    margin-top: 0vw
    padding: 0 0 350px 0
  .linTop
    width: 100%
    height: 3vw
    margin-top: 3%
    box-sizing: border-box
    border-bottom: solid 1px #878787
    +flexrow
    +pad
      height: 4vw
      margin-top: 1%
    +phone
      height: 10vw
      border: 0
      margin-top: 0
    .LinName
      width: 15%
      // +bb
      font-size: 2vw
      font-weight: 800
      color: #878787
      +pad
        width: 15%
        font-size: 2.5vw
      +phone
        width: 26%
        font-size: 6vw
        font-weight: 800
        line-height: 170%
        color: black
        margin-left: 2vw
  .linBottom
    width: 100%
    +flexrow
    flex-wrap: wrap
    +phone
      +flexcolumn
    .linCard
      width: 30%
      height: 20vw
      margin-top: 2vw
      margin-right: 2vw
      +pad
        margin-top: 3vw
      +phone
        width: 100%
        margin-right: 0
        height: 40vw
        margin-top: 2vw
        margin-bottom: 8vw
      .linPic
        width: 100%
        height: 80%
        +bb
        border-color: #EEE
      .linTitle
        font-size: 1.2vw
        font-weight: 800
        text-align: center
        color: #878787
        margin-top: 0.5vw
        +pad
          font-size: 2vw
          letter-spacing: 0.2vw
          // margin-top: 0.8vw
        +phone
          font-size: 5vw
          margin-top: 2vw


</style>
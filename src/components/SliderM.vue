<template lang="pug">
.slm
  .slmBlock
    .slmTop(v-for="item in vedioArray" v-html="item.video")
    .slmBottom(v-for="item in slideshowArray.slice(p,p+1)" :key="item.title" @mouseover.prevent="havemouse()" @mouseleave="nomouse()" :style="{background: 'url(' + item.pic + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
      .slmPrev(@click="p==0? p=4 :p--")
      .slmNext(@click="p==4? p=0 :p++")
      //文字框
      router-link.slmTextBlock(:to="'/post/' + item.postid")
        .slmTitle {{ item.title }}
        .slmSubTitle {{ item.subTitle }}
  .slmDotBlock
    .slmDot(v-for="item in dot" :key="item" :class="{active: item==p}" @click="p=item")

</template>

<script>
export default {
  data() {
    return {
      p: 0,
      slideshowArray: [
        {
          pic: require('../assets/slide/slide1.jpg'),
          title: '日常景框 X 美感生活 X 藝術實踐 2th「補助執行跨域整合美感教案徵選活動」',
          subTitle: '中小學在職教師暨行政人員素養提升計畫',
          link: '/最新消息/post/86548532',
          text: '',
          postid: 86548532,
        },
        {
          pic: require('../assets/slide/slide2.jpg'),
          title: '阮璽X美感素養提升計畫「有溫度的影像」工作坊',
          subTitle: '中小學在職教師暨行政人員素養提升計畫',
          link: '最新消息/post/8658654248532',
          text: '',
          postid: 8658654248532,

        },
        {
          pic: require('../assets/proimg/shue/home.png'),
          title: '學美．美學｜總紀錄片',
          subTitle: '學美．美學-校園美感設計實踐計畫',
          link: '/成果專區/post/6879446862656453',
          text: '',
          postid: 6879446862656453,
          
        },
        {
          pic: require('../assets/slide/slide4.jpg'),
          title: '2019美感教育教師參訪荷蘭美感與藝術教育滿載而歸',
          subTitle: '美感教育出國計畫',
          link: '/成果專區/post/88958654521',
          text: '',
          postid: 88958654521,

        },
        {
          pic: require('../assets/ARCHI/yui/img09.jpg'),
          title: '【北】區運用鬆散素材於美感教育社群活動─鬆散素材運用於視覺藝術',
          subTitle: '幼兒園美感教育扎根計畫',
          link: '/成果專區/post/66545656564543',
          text: '',
          postid: 66545656564543,

        },
      ],
      vedioArray: [
        {
          video: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Rpqp8Guq4-k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        }
      ]
    }
  },
  mounted() {
    // let that = this
    var s = this.p
    // var slide = setInterval(function(){ this.setSlide() }, 500)
    
    this.slide = setInterval(() => this.setSlide(), 8000)
      

  },
  computed: {
    dot() {
      var d = []
      for(var i=0; i< 5 ; i++) {
        d.push(i)
      }
      return d
    }
  },
  methods: {
    setSlide() {
      if(this.p == 4) {
        this.p = 0
      }else{
        this.p += 1
      }
    },
    havemouse() {
      clearInterval(this.slide)
    },
    nomouse() {
      this.slide = setInterval(() => this.setSlide(), 8000)
    }
  },
  beforeDestroy() {
    clearInterval(this.slide)
  }
}
</script>

<style lang="sass">
@import '@/assets/style.sass'
.slm
  position: relative
  width: 95%
  height: 115vw
  min-height: 600px
  min-width: 300px
  box-sizing: border-box
  // +bb
  +flexcolumn
  +phone
    height: 190vw
  .slmBlock
    width: 100%
    height: 95%
    box-sizing: border-box
    position: relative
    .slmTop
      position: absolute
      width: 100%
      height: 53.5%
      top: 0
      // +bb
      background-color: black
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 83%)
      +phone
        height: 53.9%
      +ie
        height: 49.5%
        
    .slmBottom
      position: absolute
      width: 100%
      height: 53.5%
      bottom: 0
      // +bb
      clip-path: polygon(0 0, 100% 17%, 100% 100%, 0 100%)
      animation: fade 0.5s ease
      +phone
        height: 53.9%
      +ie
        height: 49.5%
      .slmPrev
        position: absolute
        +size(40px)
        background: url('../assets/slide/prev.png')
        z-index: 9
        +bgcon
        top: 50%
        left: 2%
        margin-top: -20px
        cursor: pointer
        opacity: 0.8
        
      .slmNext
        position: absolute
        +size(40px)
        background: url('../assets/slide/next.png')
        z-index: 9
        +bgcon
        top: 50%
        right: 2%
        margin-top: -20px
        cursor: pointer
        opacity: 0.8
        
      //文字框
      .slmTextBlock
        position: absolute
        width: 100%
        height: 40%
        // opacity: 0
        background-color: rgba(black,0.7) 
        bottom: 0
        padding: 10px
        box-sizing: border-box
        transition: 0.3s
        +phone
          // display: none
        .slmTitle
          width: 94%
          color: white
          font-weight: 700
          height: 60%
          font-size: 35px
          overflow: hidden
          text-overflow: ellipsis
          display: -webkit-box
          -webkit-line-clamp: 2
          -webkit-box-orient: vertical
          +pad
            // +bb
            font-size: 4vw
          +phone
            width: 100%
            height: 50%
            font-size: 5vw
            line-height: 9.5vw
        .slmSubTitle
          color: white
          height: 30%
          padding: 15px 0 0 0
          font-size: 25px
          overflow: hidden
          text-overflow: ellipsis
          white-space: nowrap
          +pad
            font-size: 3vw
          +phone
            font-size: 4vw
            letter-spacing: 0.2vw

            // font-size: 20px
            // display: none


  .slmDotBlock
    width: 100%
    height: 5%
    +flexrow
    align-items: center
    .slmDot
      +size(6%, 10%)
      +bb
      border-color: #878787
      margin-right: 1.5%
      border-radius: 20px
      cursor: pointer
      &.active
        background-color: #878787
</style>
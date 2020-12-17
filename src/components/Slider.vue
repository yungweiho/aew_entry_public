<template lang="pug">
.Slider
  //因為斜度要重疊，所以要有個東西把左右包起來
  .SliderBlock
    //圖文
    transition(name="fade" mode="out-in")
      .SliderLeft(v-for="item in slideshowArray.slice(p,p+1)" :key="item.title" @mouseover.prevent="havemouse()" @mouseleave="nomouse()"  :style="{background: 'url(' + item.pic + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
        .SliderPrev(@click="p==0? p=4 :p--")
        .SliderNext(@click="p==4? p=0 :p++")
        //文字框
        router-link.SliderTextBlock(:to="'/post/' + item.postid")
          .SliderTitle {{ item.title }}
          .SliderSubTitle {{ item.subTitle }}
      
    //影片
    .SliderRight(v-for="item in vedioArray" v-html="item.video")
  .SliderDot
    .DotItem(v-for="item in dot" :key="item" :class="{active: item==p}" @click="p=item")
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

.Slider
  width: 100%
  height: 45vw
  // +bb
  background: url('../assets/sliderbg.png')
  +bgcon
  background-size: 100% 100%
  background-position: center 0
  box-sizing: border-box
  padding: 2% 0 0 0
  position: relative
  +flexcolumn
  align-items: center
  
  .SliderBlock
    width: 95%
    height: 80%
    position: relative
    box-sizing: border-box
    // +flexcolumn
    // align-items: center
    
    .SliderLeft
      position: absolute
      width: 52.5%
      height: 100%
      // +bb
      clip-path: polygon(0 0, 88% 0%, 100% 100%, 0% 100%)
      left: 0
      // animation: fade 0.5s ease
      // transition: 0.3s
      &:hover
        .SliderTextBlock
          transition: 0.3s
          opacity: 1
      +ie
        width: 49.5%
      .SliderPrev
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
        &:hover
          filter: brightness(5)
          opacity: 1

      .SliderNext
        position: absolute
        +size(40px)
        background: url('../assets/slide/next.png')
        z-index: 9
        +bgcon
        top: 50%
        right: 8%
        margin-top: -20px
        cursor: pointer
        opacity: 0.8
        &:hover
          filter: brightness(5)
          opacity: 1
      .SliderTextBlock
        position: absolute
        width: 100%
        height: 40%
        opacity: 0
        background-color: rgba(black,0.7) 
        bottom: 0
        padding: 10px
        box-sizing: border-box
        transition: 0.3s
        
        .SliderTitle
          width: 94%
          color: white
          font-weight: 700
          height: 50%
          font-size: 2.3vw
          overflow: hidden
          text-overflow: ellipsis
          display: -webkit-box
          -webkit-line-clamp: 2
          -webkit-box-orient: vertical
          +com
            font-size: 2.3vw
          
        .SliderSubTitle
          color: white
          height: 30%
          padding: 15px 0 0 0
          font-size: 1.8vw
          overflow: hidden
          text-overflow: ellipsis
          white-space: nowrap
          +com
            font-size: 2vw
      
      


    .SliderRight
      position: absolute
      right: 0
      width: 52.5%
      height: 100%
      // +bb
      clip-path: polygon(0 0, 100% 0, 100% 100%, 12% 100%)
      +ie
        width: 49.5%
  .SliderDot
    position: absolute
    width: 50%
    height: 5%
    // +bb
    bottom: 11%
    left: 2.5%
    // z-index: 110
    +flexrow
    .DotItem
      +size(6%, 10%)
      +bb
      border-color: #878787
      margin-right: 1.5%
      border-radius: 20px
      cursor: pointer
      &.active
        background-color: #878787

</style>
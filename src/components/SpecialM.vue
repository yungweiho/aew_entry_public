<template lang="pug">
.spm
  .spmTitle 快速連結
  .spmTop
    .spm1
      router-link.f1window(:to="'/categories/' + item.title" v-for="item in cate.slice(0,1)")
        .block {{ item.title }}
        Flower11
      a.f2window(v-for="item in cate.slice(1,2)" :href="item.url")
        .block {{ item.title }}
        Flower12 
    .spm2
      a.f3window(v-for="item in cate.slice(2,3)" :href="item.url")
        .block {{ item.title }}
        Flower21
      a.f4window(v-for="item in cate.slice(3,4)" :href="item.url")
        .block {{ item.title }}
        Flower22 

      
  .spmBottom
    .spm3
      a.f5window(v-for="item in cate.slice(4,5)" :href="item.url")
        .block {{ item.title }}
        Flower31
      a.f6window(v-for="item in cate.slice(5,6)" :href="item.url")
        .block {{ item.title }}
        Flower32
    .spm4
      a.f7window(v-for="item in cate.slice(6,7)" :href="item.url")
        .block {{ item.title }}
        Flower41
      a.f8window(v-for="item in cate.slice(7,8)" :href="item.url")
        .block {{ item.title }}
        Flower42
    
</template>

<script>
import Flower11 from '@/components/Flower/Flower11'
import Flower12 from '@/components/Flower/Flower12'
import Flower21 from '@/components/Flower/Flower21'
import Flower22 from '@/components/Flower/Flower22'
import Flower31 from '@/components/Flower/Flower31'
import Flower32 from '@/components/Flower/Flower32'
import Flower41 from '@/components/Flower/Flower41'
import Flower42 from '@/components/Flower/Flower42'
export default {
  components: {Flower11, Flower12, Flower21, Flower22, Flower31, Flower32, Flower41, Flower42},
  data() {
    return {
      cate: [
        {
          id: 1,
          title: '人物專訪'
        },
        {
          id: 2,
          title: '樂器銀行',
          url: 'https://musicbank.moe.gov.tw/'
        },
        {
          id: 3,
          title: '美角',
          url: 'https://www.aade.org.tw/'
        },
        {
          id: 4,
          title: '校園美感環境再造',
          url: 'https://caepo.org/project'

        },
        {
          id: 5,
          title: '廣達游於藝',
          url: 'https://iic.quanta-edu.org/exhibition/14/exhibition_exhibits_info/24'

        },
        {
          id: 6,
          title: '廣達設計學習計畫',
          url: 'http://new.quanta-edu.org/zh-tw/educate.php?act=design_plan'

        },
        {
          id: 7,
          title: '臺灣藝術教育網',
          url: 'https://ed.arte.gov.tw/ch/index.aspx'
        },
        {
          id: 8,
          title: '藝起來學學',
          url: 'http://www.xuexuefoundation.org.tw/color-up/'
        },
      ]
    }
  }
}
</script>

<style lang="sass">
@import '@/assets/style.sass'
.spm
  width: 95%
  height: 57vw
  box-sizing: border-box
  background: url('../assets/spblock.png')
  +bgcon
  // +bb
  background-position: 0 0
  background-size: 100% auto
  position: relative
  margin-top: 2%
  +flexcolumn
  +phone
    background: url('../assets/spp.png')
    +bgcon
    background-position: 0 0
    background-size: 100% auto
    // +bb
    height: 162vw
    padding: 7.9% 0 0 0
    +ie
      padding: 7.9% 0 8% 0
  .spmTitle
    width: 20%
    font-size: 3.5vw
    text-align: center
    font-weight: 800
    color: #878787
    margin-left: -10%
    left: 50%
    top: 0.5%
    // +bb
    position: absolute
    +phone
      width: 20%
      font-size: 3.5vw
      margin-left: -10%
      left: 50%
      top: 1%


    
    



  .spmTop
    width: 100%
    height: 50%
    +flexrow
    // +bb
    border-color: #878787
    // margin-top: 2%
    // box-sizing: border-box
    +phone
      +flexcolumn
    .spm1
      +size(50%, 100%)
      // background: url('../assets/l1.png')
      +bgcon
      background-position: 0 0
      // +bb
      // border-right: solid 1px
      border-color: #878787
      position: relative
      // margin-left: 2%
      // margin-right: 1.5%
      // +flexrow
      box-sizing: border-box
      +phone
        +size(85.5%, 100%)
        margin-left: 7.5%

      .f1window
        position: absolute
        margin-top: 17%
        margin-left: 17%
        width: 40%
        height: 67%
        z-index: 12
        +bb
        border-color: #DADBDB
        transition: 0.5s
        cursor: pointer
        +phone
          margin-top: 5%
          margin-left: 5%
          height: 85%
        // #flower11
        //   width: 100%
        //   left: 0
        //   top: 0

        .block
          position: absolute
          z-index: 13
          width: 100%
          height: 30%
          bottom: 0
          background-color: rgba(#333,0.7)
          transition: 0.5s
          font-size: 2.2vw
          letter-spacing: 0.5vw
          color: white
          font-weight: 800
          padding: 7% 0
          box-sizing: border-box
          text-align: center
          +phone
            font-size: 4.5vw
            padding: 6% 0


        

          
        

      .f2window
        position: absolute
        margin-top: 17%
        margin-left: 62%
        width: 40%
        height: 67%
        z-index: 12
        // +bb
        border-color: #DADBDB
        cursor: pointer
        +phone
          height: 85%
          margin-top: 5%
          margin-left: 52%

        .block
          position: absolute
          z-index: 13
          width: 100%
          height: 30%
          bottom: 0
          background-color: rgba(#333,0.7)
          transition: 0.5s
          font-size: 2.2vw
          letter-spacing: 0.5vw
          color: white
          font-weight: 800
          padding: 7% 0
          box-sizing: border-box
          text-align: center
          +phone
            font-size: 4.5vw
            padding: 6% 0
    .spm2
      // +bb
      border-color: #878787
      box-sizing: border-box
      +size(50%, 100%)
      // background: url('../assets/r1.png')
      +bgcon
      background-position: 0 0
      position: relative
      +phone
        +size(85.5%, 100%)
        margin-left: 7.5%

      .f3window
        position: absolute
        margin-top: 17%
        margin-left: 7%
        width: 40%
        height: 67%
        z-index: 12
        +bb
        border-color: #DADBDB
        cursor: pointer
        +phone
          height: 85%
          margin-top: 3%
          margin-left: 5%
        .block
          position: absolute
          z-index: 13
          width: 100%
          height: 30%
          bottom: 0
          background-color: rgba(#333,0.7)
          transition: 0.5s
          font-size: 2.2vw
          letter-spacing: 0.5vw
          color: white
          font-weight: 800
          padding: 7% 0
          box-sizing: border-box
          text-align: center
          +phone
            font-size: 4.5vw
            padding: 6% 0

        

      .f4window
        position: absolute
        // margin-top: 10%
        margin-top: 17%
        margin-left: 52.5%
        // margin-left: 52%
        width: 40%
        height: 67%
        z-index: 12
        +bb
        border-color: #DADBDB
        cursor: pointer
        +phone
          height: 85%
          margin-top: 3%
          margin-left: 52%

        .block
          position: absolute
          z-index: 13
          width: 100%
          height: 30%
          bottom: 0
          background-color: rgba(#333,0.7)
          transition: 0.5s
          font-size: 2vw
          letter-spacing: 0.2vw
          color: white
          font-weight: 800
          padding: 8% 0
          box-sizing: border-box
          text-align: center
          +phone
            font-size: 3.5vw
            padding: 7.5% 0

        

      

  .spmBottom
    width: 100%
    height: 50%
    +flexrow
    // justify-content: space-around
    // +bb
    border-color: #878787
    +phone
      +flexcolumn

    .spm3
      +size(50%, 100%)
      // background: url('../assets/l2.png')
      +bgcon
      // +bb
      border-color: #878787
      box-sizing: border-box
      background-position: 0 0
      position: relative
      +phone
        +size(85%, 100%)
        margin-left: 7.5%
        box-sizing: initial
      .f5window
        position: absolute
        margin-top: 2%
        margin-left: 17%
        width: 40%
        height: 67%
        z-index: 12
        +bb
        border-color: #DADBDB
        cursor: pointer
        box-sizing: border-box
        +phone
          height: 85%
          margin-left: 5%
          margin-top: 2%

        .block
          position: absolute
          z-index: 13
          width: 100%
          height: 30%
          bottom: 0
          background-color: rgba(#333,0.7)
          transition: 0.5s
          font-size: 2.2vw
          letter-spacing: 0.5vw
          color: white
          font-weight: 800
          padding: 7% 0
          box-sizing: border-box
          text-align: center
          +phone
            font-size: 4.5vw
            padding: 6% 0

        

      .f6window
        position: absolute
        margin-top: 2%
        margin-left: 62%
        width: 40%
        height: 67%
        z-index: 12
        +bb
        border-color: #DADBDB
        cursor: pointer
        box-sizing: border-box
        +phone
          height: 85%
          margin-left: 52%
          margin-top: 2%

        .block
          position: absolute
          z-index: 13
          width: 100%
          height: 30%
          bottom: 0
          background-color: rgba(#333,0.7)
          transition: 0.5s
          font-size: 2vw
          letter-spacing: 0.2vw
          color: white
          font-weight: 800
          padding: 8% 0
          box-sizing: border-box
          text-align: center
          +phone
            font-size: 3.5vw
            padding: 7.5% 0
            width: 101%

        


    .spm4
      +size(50.1%, 100%)
      // background: url('../assets/r2.png')
      +bgcon
      // +bb
      // border-left: solid 1px
      border-color: #878787
      box-sizing: border-box
      background-position: 0 0
      position: relative
      +phone
        +size(85.5%, 100%)
        margin-left: 7.5%
        box-sizing: initial
      .f7window
        position: absolute
        margin-top: 2%
        margin-left: 7%
        width: 40%
        height: 67%
        z-index: 12
        +bb
        border-color: #DADBDB
        cursor: pointer
        box-sizing: border-box
        +phone
          height: 85%
          margin-top: 0%
          margin-left: 5%


        .block
          position: absolute
          z-index: 13
          width: 100%
          height: 30%
          bottom: 0
          background-color: rgba(#333,0.7)
          transition: 0.5s
          font-size: 2.2vw
          letter-spacing: 0.2vw
          color: white
          font-weight: 800
          padding: 7% 0
          box-sizing: border-box
          text-align: center
          +phone
            font-size: 3.5vw
            padding: 7.5% 0

        
        

      .f8window
        position: absolute
        margin-top: 2%
        margin-left: 52%
        width: 40%
        height: 67%
        z-index: 12
        +bb
        border-color: #DADBDB
        cursor: pointer
        box-sizing: border-box
        +phone
          height: 85%
          margin-left: 52%
          margin-top: 0%

        .block
          position: absolute
          z-index: 13
          width: 100%
          height: 30%
          bottom: 0
          background-color: rgba(#333,0.7)
          transition: 0.5s
          font-size: 2.2vw
          letter-spacing: 0.5vw
          color: white
          font-weight: 800
          padding: 7% 0
          box-sizing: border-box
          text-align: center
          +phone
            font-size: 4.5vw
            padding: 6% 0

        


</style>
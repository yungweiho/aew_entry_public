<template lang="pug">
.sp
  .title 快速連結
  .spTop
    .sp1
      router-link.f1window(:to="'/categories/'+item.title" v-for="item in cate.slice(0,1)")
        .block {{ item.title }}
        Flower11
      a.f2window(v-for="item in cate.slice(1,2)" :href="item.url")
        .block {{ item.title }}
        Flower12 
    .sp2
      a.f3window(v-for="item in cate.slice(2,3)" :href="item.url")
        .block {{ item.title }}
        Flower21
      a.f4window(v-for="item in cate.slice(3,4)" :href="item.url")
        .block {{ item.title }}
        Flower22 

      
  .spBottom
    .sp3
      a.f5window(v-for="item in cate.slice(4,5)" :href="item.url")
        .block {{ item.title }}
        Flower31
      a.f6window(v-for="item in cate.slice(5,6)" :href="item.url")
        .block {{ item.title }}
        Flower32
    .sp4
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

.sp
  width: 96%
  height: 29vw
  margin-left: 2.5%
  // max-width: 770px
  // +bb
  border-color: #878787
  +flexcolumn
  background: url('../assets/spblock.png')
  +bgcon
  background-position: 0 0
  background-size: 100% auto
  position: relative
  .title
    width: 12%
    text-align: center
    // +bb
    position: absolute
    font-size: 1.2vw
    font-weight: 800
    color: #878787
    left: 50%
    margin-left: -6%
    margin-top: 1%
    letter-spacing: 0.1vw
    +smallcom
      width: 15%


  .spTop
    width: 100%
    height: 50%
    +flexrow
    // +bb
    border-color: #878787
    // margin-top: 2%
    // box-sizing: border-box

    .sp1
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


        .block
          position: absolute
          z-index: 13
          width: 100%
          height: 100%
          opacity: 0
          background-color: rgba(#333,0)
          transition: 0.5s
          font-size: 1.2vw
          color: white
          font-weight: 800
          line-height: 9vw
          text-align: center
          letter-spacing: 2px

        &:hover
          .block
            opacity: 0.7
            transition: 0.5s
            background-color: rgba(#333,0.7)
          [id="_11bigflo"]
            transform: scale(0.8, 0.8)
            transform-origin: 10% 90%
            transition-duration: 0.5s
          [id="_11bigflo-2"]
            transform: scale(0.8, 0.8)
            transform-origin: 35% 90%
            transition-duration: 0.5s

          [id="_11bigflo-3"]
            transform: scale(0.8, 0.8)
            transform-origin: 10% 60%
            transition-duration: 0.5s

          [id="_11bigflo-4"]
            transform: scale(0.8, 0.8)
            transform-origin: 35% 60%
            transition-duration: 0.5s

          [id="_11bigflo-5"]
            transform: scale(0.8, 0.8)
            transform-origin: 60% 90%
            transition-duration: 0.5s

          [id="_11bigflo-6"]
            transform: scale(0.8, 0.8)
            transform-origin: 90% 90%
            transition-duration: 0.5s

          [id="_11bigflo-7"]
            transform: scale(0.8, 0.8)
            transform-origin: 60% 60%
            transition-duration: 0.5s

          [id="_11bigflo-8"]
            transform: scale(0.8, 0.8)
            transform-origin: 90% 60%
            transition-duration: 0.5s

          [id="_11bigflo-9"]
            transform: scale(0.8, 0.8)
            transform-origin: 10% 40%
            transition-duration: 0.5s

          [id="_11bigflo-10"]
            transform: scale(0.8, 0.8)
            transform-origin: 35% 40%
            transition-duration: 0.5s

          [id="_11bigflo-11"]
            transform: scale(0.8, 0.8)
            transform-origin: 10% 10%
            transition-duration: 0.5s

          [id="_11bigflo-12"]
            transform: scale(0.8, 0.8)
            transform-origin: 35% 10%
            transition-duration: 0.5s

          [id="_11bigflo-13"]
            transform: scale(0.8, 0.8)
            transform-origin: 60% 40%
            transition-duration: 0.5s

          [id="_11bigflo-14"]
            transform: scale(0.8, 0.8)
            transform-origin: 90% 40%
            transition-duration: 0.5s

          [id="_11bigflo-15"]
            transform: scale(0.8, 0.8)
            transform-origin: 60% 10%
            transition-duration: 0.5s

          [id="_11bigflo-16"]
            transform: scale(0.8, 0.8)
            transform-origin: 90% 10%
            transition-duration: 0.5s
          [id="_11flo"]
            animation: rot 3s linear infinite
            transform-origin: 25% 75%
            
          [id="_11flo-2"]
            animation: rot 3s linear  infinite
            transform-origin: 50% 75%
          [id="_11flo-3"]
            animation: rot 3s linear infinite
            transform-origin: 25% 50%
          [id="_11flo-4"]
            animation: rot 3s linear infinite
            transform-origin: 50% 50%

          [id="_11flo-5"]
            animation: rot 3s linear infinite
            transform-origin: 75% 50%

          [id="_11flo-6"]
            animation: rot 3s linear infinite
            transform-origin: 75% 75%

          [id="_11flo-7"]
            animation: rot 3s linear infinite
            transform-origin: 25% 25%

          [id="_11flo-8"]
            animation: rot 3s linear infinite
            transform-origin: 50% 25%

          [id="_11flo-9"]
            animation: rot 3s linear infinite
            transform-origin: 75% 25%

          [data-name="11bigflo"]
            fill: #111

          
        

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

        .block
          position: absolute
          z-index: 13
          width: 100%
          height: 100%
          opacity: 0
          background-color: rgba(#333,0)
          transition: 0.5s
          font-size: 1.2vw
          color: white
          font-weight: 800
          line-height: 9vw
          text-align: center
          letter-spacing: 2px


        &:hover
          .block
            opacity: 0.7
            transition: 0.5s
            background-color: rgba(#333,0.7)
          [data-name="fla"]
            transition-duration: 0.5s
            stroke: #CCE7E2
          [id="flo12"]
            // transform: scale(0.8)
            transform-origin: 25% 25%
            animation: rot2 3s linear infinite
            // transition-duration: 0.5s
          [id="flo12-2"]
            transform: scale(0.8)
            transform-origin: 50% 25%
            animation: rot2 3s linear infinite
            // transition-duration: 0.5s
          [id="flo12-3"]
            transform: scale(0.8)
            transform-origin: 25% 50%
            animation: rot2 3s linear infinite
            // transition-duration: 0.5s
          [id="flo12-4"]
            transform: scale(0.8)
            transform-origin: 50% 50%
            animation: rot2 3s linear infinite
            // transition-duration: 0.5s
          [id="flo12-5"]
            transform: scale(0.8)
            transform-origin: 75% 25%
            animation: rot2 3s linear infinite
            // transition-duration: 0.5s
          [id="flo12-6"]
            transform: scale(0.8)
            transform-origin: 75% 50%
            animation: rot2 3s linear infinite
            // transition-duration: 0.5s
          #flo12-7
            transform: scale(0.8)
            transform-origin: 25% 75%
            animation: rot2 3s linear infinite
            // transition-duration: 0.5s
          [id="flo12-8"]
            transform: scale(0.8)
            transform-origin: 50% 75%
            animation: rot2 3s linear infinite
            // transition-duration: 0.5s
          [id="flo12-9"]
            transform: scale(0.8)
            transform-origin: 75% 75%
            animation: rot2 3s linear infinite
    .sp2
      // +bb
      border-color: #878787
      box-sizing: border-box
      +size(50%, 100%)
      // background: url('../assets/r1.png')
      +bgcon
      background-position: 0 0
      position: relative
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
        .block
          position: absolute
          z-index: 13
          width: 100%
          height: 100%
          opacity: 0
          background-color: rgba(#333,0)
          transition: 0.5s
          font-size: 1.2vw
          color: white
          font-weight: 800
          line-height: 9vw
          text-align: center
          letter-spacing: 2px


        &:hover
          .block
            opacity: 0.7
            transition: 0.5s
            background-color: rgba(#333,0.7)
          #flo21
            animation: changecolorgray 3s linear infinite
             

          #flo21-2
            animation: changecolorgray 3s 0.5s linear infinite
             

          #flo21-3
            animation: changecolorgray 3s 1s linear infinite
             

          #flo21-4
            animation: changecolorgray 3s 1.5s linear infinite
            

          #flo21-5
            animation: changecolorgray 3s 2s linear infinite
            

          #flo21-6
            animation: changecolorgray 3s 0.5s linear infinite
            

          #flo21-7
            animation: changecolorgray 3s 1s linear infinite
            

          #flo21-8
            animation: changecolorgray 3s 1.5s linear infinite
            

          #flo21-9
            animation: changecolorgray 3s 2s linear infinite
            

          #flo21-10
            animation: changecolorgray 3s 0.5s linear infinite
            

          #flo21-11
            animation: changecolorgray 3s 1s linear infinite
            

          #flo21-12
            animation: changecolorgray 3s 1.5s linear infinite
            

          #flo21-13
            animation: changecolorgray 3s 2s linear infinite
            

          #flo21-14
            animation: changecolorgray 3s 0.5s linear infinite
            

          #flo21-15
            animation: changecolorgray 3s 1s linear infinite
            

          #flo21-16
            animation: changecolorgray 3s 1.5s linear infinite
            

          #flo21-17
            animation: changecolorgray 3s 2s linear infinite
            

          #flo21-18
            animation: changecolorgray 3s 0.5s linear infinite
            

          #flo21-19
            animation: changecolorgray 3s 1s linear infinite
            

          #flo21-20
            animation: changecolorgray 3s 1.5s linear infinite
            

          #flo21-21
            animation: changecolorgray 3s 2s linear infinite
            

          #flo21-22
            animation: changecolorgray 3s 0.5s linear infinite
            

          #flo21-23
            animation: changecolorgray 3s 1s linear infinite
            

          #flo21-24
            animation: changecolorgray 3s 1.5s linear infinite
            

          #flo21-25
            animation: changecolorgray 3s 2s linear infinite
            

          #flo21-26
            animation: changecolorgray 3s 0.5s linear infinite
            

          #flo21-27
            animation: changecolorgray 3s 1s linear infinite
            

          #flo21-28
            animation: changecolorgray 3s 1.5s linear infinite
            

          #flo21-29
            animation: changecolorgray 3s 2s linear infinite
            

          #flo21-30
            animation: changecolorgray 3s 0.5s linear infinite
            

          #flo21-31
            animation: changecolorgray 3s 1s linear infinite
            

          #flo21-32
            animation: changecolorgray 3s 1.5s linear infinite
            

          #flo21-33
            animation: changecolorgray 3s 2s linear infinite
            

          #flo21-34
            animation: changecolorgray 3s 0.5s linear infinite
            

          #flo21-35
            animation: changecolorgray 3s 1s linear infinite
            

          #flo21-36
            animation: changecolorgray 3s 1.5s linear infinite
            

          #flo21-37
            animation: changecolorgray 3s 2s linear infinite
            

          #flo21-38
            animation: changecolorgray 3s 0.5s linear infinite
            

          #flo21-39
            animation: changecolorgray 3s 1s linear infinite
            

          #flo21-40
            animation: changecolorgray 3s 1.5s linear infinite
            

          #flo21-41
            animation: changecolorgray 3s 2s linear infinite
            

          #flo21-42
            animation: changecolorgray 3s 0.5s linear infinite
            

          #flo21-43
            animation: changecolorgray 3s 1s linear infinite
            

          #flo21-44
            animation: changecolorgray 3s 1.5s linear infinite
            

          #flo21-45
            animation: changecolorgray 3s 2s linear infinite
            

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

        .block
          position: absolute
          z-index: 13
          width: 100%
          height: 100%
          opacity: 0
          background-color: rgba(#333,0)
          transition: 0.5s
          font-size: 1.2vw
          color: white
          font-weight: 800
          // line-height: 9vw
          padding: 3.5vw 0 3.5vw 0
          box-sizing: border-box
          text-align: center
          letter-spacing: 2px


        &:hover
          .block
            opacity: 0.7
            transition: 0.5s
            background-color: rgba(#333,0.7)
          #flo22
            animation: rot 2s linear infinite
            transform-origin: 12.2% 37.5%
          #flo22-2
            animation: rot 2s linear infinite
            transform-origin: 37.5% 37.5%
          #flo22-3
            animation: rot 2s linear infinite
            transform-origin: 37.5% 12.2%
          #flo22-4
            animation: rot 2s linear infinite
            transform-origin: 12.2% 12.2%
          #flo22-5
            animation: rot 2s linear infinite
            transform-origin: 62.8% 37.5%
          #flo22-6
            animation: rot 2s linear infinite
            transform-origin: 88.1% 37.5%
          #flo22-7
            animation: rot 2s linear infinite
            transform-origin: 12.2% 88.1%
          #flo22-8
            animation: rot 2s linear infinite
            transform-origin: 37.5% 88.1%
          #flo22-9
            animation: rot 2s linear infinite
            transform-origin: 62.8% 88.1%
          #flo22-10
            animation: rot 2s linear infinite
            transform-origin: 88.1% 88.1%
          #flo22-11
            animation: rot 2s linear infinite
            transform-origin: 88.1% 12.2%
          #flo22-12
            animation: rot 2s linear infinite
            transform-origin: 62.8% 12.2%
          #flo22-13
            animation: rot 2s linear infinite
            transform-origin: 37.5% 62.8%
          #flo22-14
            animation: rot 2s linear infinite
            transform-origin: 12.2% 62.8%
          #flo22-15
            animation: rot 2s linear infinite
            transform-origin: 88.1% 62.8%
          #flo22-16
            animation: rot 2s linear infinite
            transform-origin: 62.8% 62.8%

      

  .spBottom
    width: 100%
    height: 50%
    +flexrow
    // justify-content: space-around
    // +bb
    border-color: #878787

    .sp3
      +size(50%, 100%)
      // background: url('../assets/l2.png')
      +bgcon
      // +bb
      border-color: #878787
      box-sizing: border-box
      background-position: 0 0
      position: relative
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

        .block
          position: absolute
          z-index: 13
          width: 100%
          height: 100%
          opacity: 0
          background-color: rgba(#333,0)
          transition: 0.5s
          font-size: 1.2vw
          color: white
          font-weight: 800
          line-height: 9vw
          text-align: center
          letter-spacing: 2px


        &:hover
          .block
            opacity: 0.7
            transition: 0.5s
            background-color: rgba(#333,0.7)
          #flo31
            animation: gray2 2s ease infinite
          #flo31-2
            animation: gray2 2s 0.5s ease infinite
          #flo31-3
            animation: gray2 2s 1s ease infinite
          #flo31-4
            animation: gray2 2s 1.5s ease infinite
          #flo31-5
            animation: gray2 2s 2s ease infinite
          #flo31-6
            animation: gray2 2s 0.5s ease infinite
          #flo31-7
            animation: gray2 2s 1s ease infinite
          #flo31-8
            animation: gray2 2s 1.5s ease infinite
          #flo31-9
            animation: gray2 2s 2s ease infinite
          #flo31-10
            animation: gray2 2s 0.5s ease infinite
          #flo31-11
            animation: gray2 2s 1s ease infinite
          #flo31-12
            animation: gray2 2s 1.5s ease infinite
          #flo31-13
            animation: gray2 2s 2s ease infinite
          #flo31-14
            animation: gray2 2s 0.5s ease infinite
          #flo31-15
            animation: gray2 2s 1.5s ease infinite
          #flo31-16
            animation: gray2 2s 2s ease infinite
          #flo31-17
            animation: gray2 2s 0.5s ease infinite
          #flo31-18
            animation: gray2 2s 1s ease infinite
          #flo31-19
            animation: gray2 2s 1.5s ease infinite
          #flo31-20
            animation: gray2 2s 2s ease infinite
          #flo31-21
            animation: gray2 2s 0.5s ease infinite
          #flo31-22
            animation: gray2 2s 1s ease infinite
          #flo31-23
            animation: gray2 2s 1.5s ease infinite
          #flo31-24
            animation: gray2 2s 2s ease infinite
          #flo31-25
            animation: gray2 2s 0.5s ease infinite
          #flo31-26
            animation: gray2 2s 1s ease infinite
          #flo31-27
            animation: gray2 2s 1.5s ease infinite
          #flo31-28
            animation: gray2 2s 2s ease infinite
          #flo31-29
            animation: gray2 2s 0.5s ease infinite
          #flo31-30
            animation: gray2 2s 1s ease infinite
          #flo31-31
            animation: gray2 2s 1.5s ease infinite
          #flo31-32
            animation: gray2 2s 2s ease infinite
          #flo31-33
            animation: gray2 2s 0.5s ease infinite
          #flo31-34
            animation: gray2 2s 1s ease infinite
          #flo31-35
            animation: gray2 2s 1.5s ease infinite
          #flo31-36
            animation: gray2 2s 2s ease infinite
          #flo31-37
            animation: gray2 2s 0.5s ease infinite
          #flo31-38
            animation: gray2 2s 1s ease infinite
          #flo31-39
            animation: gray2 2s 1.5s ease infinite
          #flo31-40
            animation: gray2 2s 2s ease infinite
          #flo31-41
            animation: gray2 2s 0.5s ease infinite
          #flo31-42
            animation: gray2 2s 1s ease infinite
          #flo31-43
            animation: gray2 2s 1.5s ease infinite
          #flo31-44
            animation: gray2 2s 2s ease infinite
          #flo31-45
            animation: gray2 2s 0.5s ease infinite
          #flo31-46
            animation: gray2 2s 1s ease infinite
          #flo31-47
            animation: gray2 2s 1.5s ease infinite
          #flo31-48
            animation: gray2 2s 2s ease infinite

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

        .block
          position: absolute
          z-index: 13
          width: 100%
          height: 100%
          opacity: 0
          background-color: rgba(#333,0)
          transition: 0.5s
          font-size: 1.2vw
          color: white
          font-weight: 800
          // line-height: 9vw
          padding: 3.5vw 0 3.5vw 0
          box-sizing: border-box
          text-align: center
          letter-spacing: 2px


        &:hover
          .block
            opacity: 0.7
            transition: 0.5s
            background-color: rgba(#333,0.7)
          #flo32
            animation: long 2s linear infinite
            transform-origin: 100%
            // animation-direction: reverse
            // transform-direction: left
          #flo32-2
            animation: long 2s linear infinite
            // transform-origin: 100%
          #flo32-3
            animation: short 2s linear infinite
            // transform-origin: 100%
          #flo32-4
            animation: long 2s linear infinite
            // transform-origin: 100%
          #flo32-5
            animation: short 2s linear infinite
            // transform-origin: 100%
          #flo32-6
            animation: long 2s linear infinite
            // transform-origin: 100%
          #flo32-7
            animation: short 2s linear infinite
            // transform-origin: 100%
          #flo32-8
            animation: long 2s linear infinite
            // transform-origin: 100%
          #flo32-9
            animation: short 2s linear infinite
            // transform-origin: 100%
          #flo32-10
            animation: short 2s linear infinite
            transform-origin: 100%
          #flo32-11
            // animation: long 2s linear infinite
            animation: long 2s linear infinite
            transform-origin: 100%
          #flo32-12
            animation: short 2s linear infinite
            transform-origin: 100%
          #flo32-13
            // animation: long 2s linear infinite
            animation: long 2s linear infinite
            transform-origin: 100%
          #flo32-14
            animation: short 2s linear infinite
            transform-origin: 100%
          #flo32-15
            animation: long 2s linear infinite
            transform-origin: 100%
            // animation: long 2s linear infinite
            
          #flo32-16
            animation: short 2s linear infinite
            transform-origin: 100%



    .sp4
      +size(50.1%, 100%)
      // background: url('../assets/r2.png')
      +bgcon
      // +bb
      // border-left: solid 1px
      border-color: #878787
      box-sizing: border-box
      background-position: 0 0
      position: relative
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

        .block
          position: absolute
          z-index: 13
          width: 100%
          height: 100%
          opacity: 0
          background-color: rgba(#333,0)
          transition: 0.5s
          font-size: 1.2vw
          // word-wrap: wrap
          word-break: break-all
          color: white
          font-weight: 800
          box-sizing: border-box
          // line-height: 9vw
          padding: 3.8vw 0 3.5vw 0
          text-align: center
          letter-spacing: 2px


        &:hover
          .block
            opacity: 0.7
            transition: 0.5s
            background-color: rgba(#333,0.7)
          [data-name="flo41"]
            animation: rot2 3s linear infinite
          #flo41
            transform-origin: 38% 38%
          #flo41-2
            transform-origin: 12.5% 38%
          #flo41-3
            transform-origin: 38% 12.5%
          #flo41-4
            transform-origin: 12.5% 12.5%
          #flo41-5
            transform-origin: 87.5% 38%
          #flo41-6
            transform-origin: 63% 38%
          #flo41-7
            transform-origin: 87.5% 12.5%
          #flo41-8
            transform-origin: 63% 12.5%
          #flo41-9
            transform-origin: 38% 87.5%
          #flo41-10
            transform-origin: 12.5% 87.5%
          #flo41-11
            transform-origin: 38% 63%
          #flo41-12
            transform-origin: 12.5% 63%
          #flo41-13
            transform-origin: 87.5% 87.5%
          #flo41-14
            transform-origin: 63% 87.5%
          #flo41-15
            transform-origin: 87.5% 63%
          #flo41-16
            transform-origin: 63% 63%

        

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

        .block
          position: absolute
          z-index: 13
          width: 100%
          height: 100%
          opacity: 0
          background-color: rgba(#333,0)
          transition: 0.5s
          font-size: 1.2vw
          color: white
          font-weight: 800
          line-height: 9vw
          text-align: center
          letter-spacing: 2px


        &:hover
          .block
            opacity: 0.7
            transition: 0.5s
            background-color: rgba(#333,0.7)
          [data-name="flo42s"]
            transition-duration: 0.5s
          [data-name="flo42d"]
            transition-duration: 0.5s
          #flo42s
            animation: smaller 2s 0.5s linear infinite
            // transform-origin: 50% 50%
          #flo42s-2
            animation: smaller 2s 1.5s linear infinite
            // transform-origin: 50% 50%
          #flo42s-3
            animation: smaller 2s 0.5s linear infinite
            // transform-origin: 50% 50%
          #flo42s-4
            animation: smaller 2s 1.5s linear infinite
            // transform-origin: 50% 50%
          #flo42s-5
            animation: smaller 2s 0.5s linear infinite
            // transform-origin: 50% 50%
          #flo42s-6
            animation: smaller 2s 1.5s linear infinite
            // transform-origin: 50% 50%
          #flo42s-7
            animation: smaller 2s 0.5s linear infinite
            // transform-origin: 50% 50%
          #flo42s-8
            animation: smaller 2s 1.5s linear infinite
            // transform-origin: 50% 50%
          #flo42s-9
            animation: smaller 2s 0.5s linear infinite
            // transform-origin: 50% 50%
          #flo42s-10
            animation: smaller 2s 1.5s linear infinite
            // transform-origin: 50% 50%
          #flo42s-11
            animation: smaller 2s 0.5s linear infinite
            // transform-origin: 50% 50%
          #flo42s-12
            animation: smaller 2s 1.5s linear infinite
            // transform-origin: 50% 50%
          #flo42s-13
            animation: smaller 2s 0.5s linear infinite
            // transform-origin: 50% 50%
          #flo42s-14
            animation: smaller 2s 1.5s linear infinite
            // transform-origin: 50% 50%
          #flo42s-15
            animation: smaller 2s 0.5s linear infinite
            // transform-origin: 50% 50%
          #flo42s-16
            animation: smaller 2s 1.5s linear infinite
            // transform-origin: 50% 50%
          #flo42s-17
            animation: smaller 2s 0.5s linear infinite
            // transform-origin: 50% 50%
          #flo42s-18
            animation: smaller 2s 1.5s linear infinite
            // transform-origin: 50% 50%
          #flo42s-19
            animation: smaller 2s 0.5s linear infinite
            // transform-origin: 50% 50%
          #flo42s-20
            animation: smaller 2s 1.5s linear infinite
            // transform-origin: 50% 50%
          #flo42d
            animation: smaller 2s 1s linear infinite
            // transform-origin: 50% 50%
          #flo42d-2
            animation: smaller 2s 2s linear infinite
            // transform-origin: 50% 50%
          #flo42d-3
            animation: smaller 2s linear infinite
            // transform-origin: 50% 50%
          #flo42d-4
            animation: smaller 2s linear infinite
            // transform-origin: 50% 50%
          #flo42d-5
            animation: smaller 2s 1s linear infinite
            // transform-origin: 50% 50%
          #flo42d-6
            animation: smaller 2s 2s linear infinite
            // transform-origin: 50% 50%
          #flo42d-7
            animation: smaller 2s 1s linear infinite
            // transform-origin: 50% 50%
          #flo42d-8
            animation: smaller 2s 2s linear infinite
            // transform-origin: 50% 50%
          #flo42d-9
            animation: smaller 2s linear infinite
            // transform-origin: 50% 50%
          #flo42d-10
            animation: smaller 2s 1s linear infinite
            // transform-origin: 50% 50%
          #flo42d-11
            animation: smaller 2s 2s linear infinite
            // transform-origin: 50% 50%
          #flo42d-12
            animation: smaller 2s linear infinite
            // transform-origin: 50% 50%
          #flo42d-13
            animation: smaller 2s linear infinite
            // transform-origin: 50% 50%
          #flo42d-14
            animation: smaller 2s 1s linear infinite
            // transform-origin: 50% 50%
          #flo42d-15
            animation: smaller 2s 2s linear infinite
            // transform-origin: 50% 50%
          #flo42d-16
            animation: smaller 2s linear infinite
            // transform-origin: 70% 70%
          #flo42d-17
            animation: smaller 2s 1s linear infinite
            // transform-origin: 50% 50%
          #flo42d-18
            animation: smaller 2s 2s linear infinite
            // transform-origin: 50% 50%
          #flo42d-19
            animation: smaller 2s linear infinite
            // transform-origin: 50% 50%
          #flo42d-20
            animation: smaller 2s 1s linear infinite
            // transform-origin: 50% 50%
          #flo42d-21
            animation: smaller 2s 2s linear infinite
            // transform-origin: 50% 50%
          #flo42d-22
            animation: smaller 2s 1s linear infinite
            // transform-origin: 50% 50%
          #flo42d-23
            animation: smaller 2s 2s linear infinite
            // transform-origin: 50% 50%
          #flo42d-24
            animation: smaller 2s linear infinite
            // transform-origin: 50% 50%
          #flo42d-25
            animation: smaller 2s linear infinite
            // transform-origin: 50% 50%
          #flo42d-26
            animation: smaller 2s 1s linear infinite
            // transform-origin: 50% 50%
          #flo42d-27
            animation: smaller 2s 2s linear infinite
            // transform-origin: 50% 50%
          #flo42d-28
            animation: smaller 2s 1s linear infinite
            // transform-origin: 50% 50%
          #flo42d-29
            animation: smaller 2s 2s linear infinite
            // transform-origin: 50% 50%
          #flo42d-30
            animation: smaller 2s linear infinite
            // transform-origin: 50% 50%
          #flo42d-31
            animation: smaller 2s linear infinite
            // transform-origin: 50% 50%
          #flo42d-32
            animation: smaller 2s 1s linear infinite
            // transform-origin: 50% 50%
          #flo42d-33
            animation: smaller 2s 2s linear infinite

      
</style>
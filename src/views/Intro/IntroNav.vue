<template lang="pug">
.introNav
  .introContainer
    .introNavBlock(v-for="item in introProArray" @click="selected=item")
      .introproBlock1(:class="{active: selected==item}") {{ item.title }}
        .intropro1(:class="{intropro1selected : selected==item}")
          router-link.intropro1Text(v-for="pro in item.pro" :to="'/project/' + pro.proid") ▶  {{ pro.title }}



</template>

<script>
export default {
  data() {
    return {
      selected: '',
      introProArray: [
        {
          title: '支持體系',
          pro: [
            {
              title: '美感教育資源整合平台建置計畫',
              proid: '1',
            },
            {
              title: '亞太地區美感教育研究室',
              proid: '2',
            },
          ],
        },
        {
          title: '人才培育',
          pro: [
            // {
            //   title: '推動幼兒園教育階段師資生美感素養提升計畫',
            //   proid: '1',
            // },
            // {
            //   title: '中小學師資生美感素養培力課程發展計畫 ',
            //   proid: '2',
            // },
            {
              title: '美感教育出國計畫',
              proid: '3',
            },
            {
              title: '中小學在職教師暨行政人員美感素養提升計畫',
              proid: '4',
            },
          ],
        },
        {
          title: '課程與活動',
          pro: [
            {
              title: '幼兒園美感教育扎根計畫',
              proid: '5',
            },
            {
              title: '跨領域美感教育卓越領航計畫 ',
              proid: '6',
            },
            {
              title: '美感與設計創新計畫',
              proid: '7',
            },
            {
              title: '樂器銀行',
              proid: '8',
            },
            {
              title: '偏鄉藝術美感育苗計畫',
              proid: '9',
            },
            {
              title: '學長姐好優秀巡演計畫',
              proid: '17',
            },
            // {
            //   title: '藝起來學學－臺灣藝術與人文教育啟蒙計畫',
            //   proid: '7',
            // },
            {
              title: '廣達游於藝計畫',
              proid: '10',
            },
            {
              title: '廣達設計學習計畫',
              proid: '19',
            },
            {
              title: '原住民歌謠、舞蹈傳習計畫',
              proid: '11',
            },
            {
              title: '藝起來尋美-美感體驗教育計畫',
              proid: '18',
            },
            {
              title: '文化輕旅行',
              proid: '12',
            },
            
          ],
        },
        {
          title: '學習環境',
          pro: [
            {
              title: '學美．美學－校園美感設計實踐計畫',
              proid: '13',
            },
            {
              title: '見美．踐美．漸美－建構美感生活學習地圖之方案實踐實施計畫',
              proid: '14',
            },
          ],
        },
        {
          title: '其他',
          pro: [
            {
              title: '校園美感環境再造計畫 ',
              proid: '15',
            },{
              title: '各級學校教育人員生活美感電子書發展計畫 ',
              proid: '16',
            },
          ],
        },
      ],
    };
  },

}
</script>

<style lang="sass">
@import "@/assets/style.sass"

.introNav
  position: relative
  width: 100%
  // overflow-y: scroll
  // margin-top: 16vw
  +flexcolumn
  +pad
    // width: 20%
  +phone
    // display: none
  .introContainer
    +bb
    border-color: #878787 
    +flexcolumn
    align-items: center
    padding: 0.5vw
    .introNavBlock
      width: 90%
      position: relative
      // margin-top: 1vw
      .introproBlock1
        +font
        +c
        font-size: 1vw
        font-weight: bold
        cursor: pointer
        padding: 2%
        margin-left: 5%
        color: #878787

        +pad
          margin-left: 10%
          font-size: 2vw
        &.active
          color: $colorBrown
        &:before
          content: '▶'
          +shakeleft
          position: absolute
          // margin-left: -3%
          left: -3%
          +pad
            left: -8%

          
        .intropro1
          // display: none
          transform: translateY(-10%)
          opacity: 0
          visibility: hidden
          // transition-duration: 1s
          height: 0
          margin-top: 0.5vw
          margin-bottom: 0.5vw
          // +bb
          // transition: all 0.5s
          .intropro1Text
            // +borderblack
            +font
            +c
            font-size: 0.9vw
            font-weight: normal
            text-align: left
            // flex-wrap: wrap
            display: block
            margin-top: 0.5vw
            text-decoration: none
            color: #878787
            letter-spacing: 0.1vw
            +pad
              margin-top: 1vw
              // font-size: 3.5vw
              line-height: 2.6vw
          &.intropro1selected
            opacity: 1
            visibility: visible
            transform: translateY(0%)
            height: auto
            transition: all 0.5s







</style>
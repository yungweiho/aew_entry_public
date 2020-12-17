<template lang="pug">
.li
  //標題區
  .liTop
    //頁面名稱
    router-link.liName(:to="'/list/' + $route.params.listid") {{ pageName }}
    //TAB區
    .liTabBlock
      .liTab(v-for="item in cate" @click="tab=item" :class="{active: tab==item}") {{ item }}
  //手機標題區
  .liTopP
    //頁面名稱
    router-link.liName(:to="'/list/' + $route.params.listid") {{ pageName }}
    //TAB區
    .liTabBlock
      .liTab(v-for="item in cate" @click="tab=item" :class="{active: tab==item}") {{ item }}
  //內容區
  .liContent
    a.liLink(v-for="item in showlist" :href="item.link" :key="item.title") {{ item.title }}
</template>

<script>
export default {
  data() {
    return {
      tab: '',
      pageName: '法規與政策',
      cate: ['法規命令','行政規則','政策'],
      lawsArray: [
        {
          title: '▶ 藝術教育法',
          link: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=H0170037',
          category: '法規命令',
        },
        {
          title: '▶ 藝術教育法施行細則',
          link: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?PCode=H0170038',
          category: '法規命令',

        },
        {
          title: '▶ 學校辦理藝術家及專業藝術團體駐校實施辦法',
          link: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=H0080095',
          category: '法規命令',
        },
        {
          title: '▶ 高級中等以下學校藝術才能班設立標準',
          link: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=H0060026',
          category: '法規命令',
        },
        {
          title: '▶ 教育部補助辦理藝術教育活動實施要點',
          link: 'https://edu.law.moe.gov.tw/LawContent.aspx?id=GL001044',
          category: '行政規則',
        },
        {
          title: '▶ 教育部藝術教育會設置要點',
          link: 'https://edu.law.moe.gov.tw/LawContent.aspx?id=GL000537',
          category: '行政規則',
        },
        {
          title: '▶ 教育部藝術教育貢獻獎作業要點',
          link: 'https://edu.law.moe.gov.tw/LawContent.aspx?id=GL001283&KeyWord=%e6%95%99%e8%82%b2%e9%83%a8%e8%97%9d%e8%a1%93%e6%95%99%e8%82%b2%e8%b2%a2%e7%8d%bb%e7%8d%8e%e4%bd%9c%e6%a5%ad%e8%a6%81%e9%bb%9e',
          category: '行政規則',
        },
        {
          title: '▶ 高級中等以下學校藝術才能班空間設備經費設立基準',
          link: 'https://edu.law.moe.gov.tw/LawContent.aspx?id=FL045543',
          category: '行政規則',
        },
        {
          title: '▶ 國民中小學藝術才能班課程基準',
          link: 'https://edu.law.moe.gov.tw/LawContent.aspx?id=GL000631&KeyWord=%e5%9c%8b%e6%b0%91%e4%b8%ad%e5%b0%8f%e5%ad%b8%e8%97%9d%e8%a1%93%e6%89%8d%e8%83%bd%e7%8f%ad%e8%aa%b2%e7%a8%8b%e5%9f%ba%e6%ba%96',
          category: '行政規則',
        },
        {
          title: '▶ 高中高職藝術才能班特色招生甄選入學作業要點',
          link: 'https://edu.law.moe.gov.tw/LawContent.aspx?id=GL000647&KeyWord=%e9%ab%98%e4%b8%ad%e9%ab%98%e8%81%b7%e8%97%9d%e8%a1%93%e6%89%8d%e8%83%bd%e7%8f%ad%e7%89%b9%e8%89%b2%e6%8b%9b%e7%94%9f%e7%94%84%e9%81%b8%e5%85%a5%e5%ad%b8%e4%bd%9c%e6%a5%ad%e8%a6%81%e9%bb%9e',
          category: '行政規則',
        },
        {
          title: '▶ 教育部國民及學前教育署補助高級中等以下學校辦理藝術教育作業要點',
          link: 'https://edu.law.moe.gov.tw/LawContent.aspx?id=GL001300&KeyWord=%e6%95%99%e8%82%b2%e9%83%a8%e5%9c%8b%e6%b0%91%e5%8f%8a%e5%ad%b8%e5%89%8d%e6%95%99%e8%82%b2%e7%bd%b2%e8%a3%9c%e5%8a%a9%e9%ab%98%e7%b4%9a%e4%b8%ad%e7%ad%89%e4%bb%a5%e4%b8%8b%e5%ad%b8%e6%a0%a1%e8%be%a6%e7%90%86%e8%97%9d%e8%a1%93%e6%95%99%e8%82%b2%e4%bd%9c%e6%a5%ad%e8%a6%81%e9%bb%9e',
          category: '行政規則',
        },
        {
          title: '▶ 教育部補助高級中等以下學校辦理藝術才能班活動實施要點',
          link: 'https://edu.law.moe.gov.tw/LawContent.aspx?id=GL001656',
          category: '行政規則',
        },
        {
          title: '▶ 藝術才能班相關之特殊需求專長領域課程綱要（草案）',
          link: 'https://www.naer.edu.tw/ezfiles/0/1000/img/67/112936228.pdf',
          category: '行政規則',
        },
        {
          title: '▶ 美感教育中長程計畫(第一期)',
          link: 'https://ws.moe.edu.tw/001/Upload/8/relfile/0/2073/e221c236-b969-470f-9cc2-ecb30bc9fb47.pdf',
          category: '政策',
        },
        {
          title: '▶ 美感教育中長程計畫(第二期)',
          link: 'https://ws.moe.edu.tw/001/Upload/8/relfile/7844/61296/e0a9702c-1f05-44ec-9207-f9abf1504abc.pdf',
          category: '政策',
        },
      ],
    }
  },
  mounted() {
    this.tab = this.cate[0]
  },
  computed: {
    showlist() {
      var t = this.tab
      return this.lawsArray.filter(function(item) {return JSON.stringify(item.category).indexOf(t)!=-1})
    }
  }
}
</script>

<style scoped lang="sass">
@import '@/assets/style.sass'

.li
  position: relative
  width: 80%
  margin-top: 6vw
  margin-left: 10%
  min-height: 360px
  min-width: 375px
  +com
    min-height: 34vw
  +smallcom
    min-height: 56vw
  +pad
    min-height: 92vw
  +phone
    width: 100%
    margin-left: 0%
    margin-top: 0vw
    min-height: 112vw
  +phone5
    min-height: 150vw

    +ie
      min-height: 200vw
  .liTop
    position: relative
    width: 100%
    +flexrow
    border-bottom: solid 1px #878787
    +pad
      height: 4vw
      margin-top: 1%
    +phone
      display: none
    //頁面名稱
    .liName 
      width: 15%
      font-weight: 800
      font-size: 2vw
      color: #878787
      +pad
        width: 20%
        font-size: 2.5vw
    //TAB區
    .liTabBlock
      width: 70%
      +flexrow
      .liTab
        font-size: 1vw
        margin-right: 1vw
        line-height: 2.5vw
        letter-spacing: 0.2vw
        color: #878787
        cursor: pointer
        &.active
          color: black
        +pad
          font-size: 1.8vw
          line-height: 3.5vw
        
  //手機標題區
  .liTopP
    width: 100%
    height: 20vw
    position: relative
    display: none
    margin-left: 3%
    +phone
      display: block
      min-height: 60px
      
    //頁面名稱
    .liName
      width: 100%
      font-size: 6vw
      font-weight: 800
      line-height: 170%
    //TAB區
    .liTabBlock
      width: 95%
      // height: 50%
      position: relative
      border-bottom: solid 1px #878787
      padding: 0 0 1.5% 0
      +flexrow
      .liTab
        position: relative
        font-size: 4vw
        padding: 1% 1%
        top: 20%
        +bb
        border-color: #878787
        color: #878787
        margin-right: 2%
        // width: 17%
        text-align: center
        min-width: 60px
        &.active
          background-color: #878787
          color: white
        +ie
          +phone
            font-size: 3.5vw

  .liContent
    width: 100%
    margin-top: 2vw
    +flexcolumn
    +phone
      width: 95%
      margin-left: 2.5%
      margin-top: 3vw
    .liLink
      margin-bottom: 1vw
      color: #878787
      font-size: 1.1vw
      letter-spacing: 0.1vw
      +phone
        font-size: 4vw
        letter-spacing: 0.3vw
        margin-bottom: 2vw

</style>
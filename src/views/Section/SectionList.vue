<template lang="pug">
.secl
  //卡片
  router-link.seclCard(v-for="item in showPost.slice(dp,dp+10)" :key="item.title" :to="'/post/' + item.postid")
    .seclPic(:style="{background:　'url(' + item.firstpic + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
    .seclTextBox
      .seclDate {{ item.date }}
      .seclTitle {{ item.title }}
      .seclSubTitle ➤ {{ item.pro }}
  //頁碼
  .seclPageList
    router-link.seclPrev(:to="'/section/' + $route.params.sectionid + '/tab/' + $route.params.tabid + '/page/' + ($route.params.pageid<=1?$route.params.pageid=1:Math.ceil($route.params.pageid-1))")
    router-link.seclPage(v-for="item in showPage" :class="{active: item==p}" :to="'/section/' + $route.params.sectionid + '/tab/' + $route.params.tabid + '/page/' + item") {{ item }}
    .secDot(v-if="totalPage.length>8") ...
    router-link.seclFinal(v-if="totalPage.length>8" :to="'/section/' + $route.params.sectionid + '/tab/' + $route.params.tabid + '/page/' + totalPage.length") {{ totalPage.length }}
    router-link.seclNext(:to="'/section/' + $route.params.sectionid + '/tab/' + $route.params.tabid + '/page/' + ($route.params.pageid>=totalPage.length?$route.params.pageid=totalPage.length:Number($route.params.pageid)+1)")
</template>

<script>
export default {
  props: ['NewsArray', 'searchInput'],
  data() {
    return {
      // p: this.$route.params.pageid
    }
  },
  mounted() {
    console.log(this.totalPage)
  },
  computed: {
    //撈取資料的陣列
    showPost() {
      var s = this.searchInput
      var t = this.$route.params.tabid
      if(s!=null) {
        return this.NewsArray.filter(function(item) {return JSON.stringify(item.tab).indexOf(t)!=-1 && JSON.stringify(item.pro + item.date + item.title + item.content + item.hashtag).indexOf(s)!=-1})
      }else {
        return this.NewsArray.filter(function(item) {return JSON.stringify(item.tab).indexOf(t)!=-1}) 
      }
    },
    //撈第幾筆資料
    dp() {
      return (this.p-1)*10
    },
    //總頁碼
    totalPage() {
      var page=[];
      for(var i = 1 ; i <= Math.ceil(this.showPost.length / 10) ; i++) {
        page.push(i)
      }
      return page
    },
    //顯示的頁碼
    showPage() {
      var p = this.p
      var totalPage = this.totalPage
      if(totalPage.length <= 8){
        return totalPage
      }else if(totalPage.length>8 && p <=8){
        return totalPage.slice(0,8)
      }else if (totalPage.length>8 && p>8) {
        return totalPage.slice(Number(p)-1, Number(p)+2)
      }
    },
    //現在第幾頁
    p() {
      return this.$route.params.pageid
    }
  },
}
</script>

<style lang="sass">
@import '@/assets/style.sass'
.secl
  width: 100%
  height: 100%
  // +bb
  +flexrow
  flex-wrap: wrap
  .seclCard
    width: 20%
    height: 43%
    margin-bottom: 4%
    // +bb
    +smallcom
      margin-bottom: 6%
    +pad
      width: 33%
      height: 33vw
      margin-bottom: 4vw
    +phone
      width: 100%
      // height: 33vw
      +flexrow
      border-bottom: solid 1px #878787
    *
      // +bb
    .seclPic
      width: 85%
      height: 68%
      +pad
        width: 90%
        height: 65%
        margin-left: 5%
        margin-right: 5%
      +phone
        width: 40%
        height: 90%
        margin-left: 0
        margin-right: 0
    .seclTextBox
      width: 100%
      +phone
        width: 60%
      .seclDate
        width: 85%
        font-size: 0.8vw
        margin-top: 2%
        color: #878787
        +pad
          font-size: 1.8vw
          width: 90%
          letter-spacing: 0.1vw
          margin-left: 5%
          margin-right: 5%
        +phone
          width: 90%
          font-size: 3.3vw
      .seclSubTitle
        width: 85%
        font-size: 0.8vw
        margin-top: 1%
        overflow: hidden
        text-overflow: ellipsis
        display: -webkit-box
        -webkit-line-clamp: 2
        -webkit-box-orient: vertical
        color: #878787

        +pad
          font-size: 1.8vw
          width: 90%
          letter-spacing: 0.1vw
          margin-left: 5%
          margin-right: 5%
        +phone
          width: 90%
          font-size: 3.3vw
          margin-top: 5%
          letter-spacing: 0.3vw
          -webkit-line-clamp: 1

      .seclTitle
        width: 85%
        font-size: 0.85vw
        margin-top: 2%
        overflow: hidden
        text-overflow: ellipsis
        display: -webkit-box
        -webkit-line-clamp: 2
        -webkit-box-orient: vertical
        font-weight: 800
        +pad
          width: 90%
          font-size: 1.8vw
          letter-spacing: 0.1vw
          margin-left: 5%
          margin-right: 5%
        +phone
          width: 90%
          font-size: 4vw
          line-height: 7vw
          margin-top: 3%
  .seclPageList
    width: 100%
    height: 6%
    // +bb
    +flexrow
    justify-content: center
    +phone
      height: 6vw
      margin-top: 10%
    .seclPrev
      width: 1%
      height: 40%
      background: url('../../assets/slide/prev.png')
      +bgcon
      // +bb
      background-position: 0 0
      background-size: 100% auto
      margin-right: 0.5vw
      opacity: 0.5
      margin-top: 0.1%
      cursor: pointer
      +pad
        width: 3%
        height: 100%
        margin-right: 1.8vw
      +phone
        width: 5%
        margin-right: 6vw
    .seclPage
      font-size: 0.8vw
      margin-right: 0.5vw
      color: #878787
      cursor: pointer
      +pad
        font-size: 1.8vw
        margin-right: 1.8vw
      +phone
        // width: 5%
        margin-right: 6vw
        font-size: 4vw

      &.active
        color: black
    .secDot 
      font-size: 0.8vw
      color: #878787
      margin-right: 0.5vw
      +pad
        font-size: 1.8vw
        margin-right: 1.8vw
      +phone
        width: 5%
        margin-right: 3.5vw

    .seclFinal
      font-size: 0.8vw
      margin-right: 0.5vw
      color: #878787
      cursor: pointer
      +pad
        font-size: 1.8vw
        margin-right: 1.8vw
      +phone
        width: 5%
        margin-right: 3.5vw
        font-size: 3.5vw

    .seclNext
      width: 1%
      height: 40%
      background: url('../../assets/slide/next.png')
      +bgcon
      // +bb
      background-position: 0 0
      background-size: 100% auto
      opacity: 0.5
      margin-top: 0.1%
      cursor: pointer
      +pad
        width: 3%
        height: 100%
      +phone
        width: 5%


</style>
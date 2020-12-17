<template lang="pug">
.Menu(:class="{active: s> 100}")
  router-link.MenuItem(v-for="item in navbarArray" :to="item.url" :class="{active: s> 100, select: now_path_word() == menu_path_word(item.url)}") {{ item.title }}
    .second_block(v-if="item.sub")
      router-link(v-for="item2 in item.sub" :to="item2.url")
        .item {{ item2.title }}
</template>

<script>
export default {
  data() {
    return {
      s: '',
      navbarArray: [
        {
          title: '最新消息',
          url: '/section/1',
        },
        {
          title: '法規與政策',
          url: '/list/1',
        },
        {
          title: '美感計畫',
          url: '/project/1',
        },
        {
          title: '教學資源',
          url: '/module/page/1',
        },
        {
          title: '成果專區',
          url: '/section/2',
        },
        {
          title: '報名專區',
          url: '',
          sub: [
            // {
            //   title: '一般活動',
            //   url: '/activity/normal'
            // },
            {
              title: '學校專區',
              url: '/activity/school'
            },
            // {
            //   title: '縣市填報',
            //   url: '/activity/apply'
            // },
          ]
        },
        // {
        //   title: '活動報名',
        //   url: '/activities',
        // },
        // {
        //   title: '美感人才',
        //   navid: 'HR',
        // },
        // {
        //   title: '計畫申請',
        //   navid: 'Apply',
        // },
        {
          title: '網網相連',
          url: '/link/1',
        },
      ],
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scroll);
  },
  methods:{
    scroll() {
      this.s = window.scrollY || window.pageYOffset || document.documentElement.scrollTop
    },
    //網頁上的路徑字符
    now_path_word() {
      if(this.$route.path.split('/')[1] == 'project') {
        return this.$route.path.split('/')[1]
      } else {
        return this.$route.path.split('/')[1] + this.$route.path.split('/')[2]
      }
    },
    //當前menu path的字符
    menu_path_word(menuItem) {
      if(this.$route.path.split('/')[1] == 'project') {
        return menuItem.split('/')[1]
      } else {
        return menuItem.split('/')[1] + menuItem.split('/')[2]
      }
    }
  },
}
</script>

<style scoped lang="sass">
@import '@/assets/style.sass'

.Menu
  position: absolute
  right: 11%
  top: 7vw
  width: 42%
  height: 2.5vw
  box-sizing: border-box
  z-index: 100
  +flexrow
  align-items: center
  +lgcom
    width: 60%
    right: 6.5%
  +com
    // width: 53%
    right: 9%
  +smallcom
    right: 11%
    width: 70%
  &.active
    right: 49%
    top: 1.1vw
    +smallcom
      right: 45%
  +pad
    display: none
  .MenuItem
    letter-spacing: 2px
    margin-right: 20px
    // margin-right: 15px
    font-size: 16px
    color: #878787
    padding: 8px 5px 8px 5px
    border-radius: 5px
    position: relative

    // +bb
    +maxcom
      font-size: 20px
    +lgcom
      font-size: 16px
    +com
      font-size: 14px

    +smallcom
      min-width: 68px
      // font-size: 1.5vw
      // margin-right: 0.55vw
    &.active
      
      +smallcom
        font-size: 1.4vw
        margin-right: 0.55vw
    &.select
      background-color: rgba(#333,0.7)
      color: white
    &:hover
      .second_block
        display: block
    .second_block
      width: 130%
      margin-left: -18%
      margin-top: 5px
      // top: 5px
      // margin-top: 5px
      position: absolute
      background-color: #fff
      padding: 10px 0
      display: none
      box-shadow: 2px 2px 6px 1px rgba(#777,0.5)
      
      
      .item
        font-size: 16px
        text-align: center
        line-height: 25px
        letter-spacing: 2px
        +com
          font-size: 13px
        &:hover
          background-color: #999
          color: #fff


</style>
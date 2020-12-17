<template lang="pug">
.smmb(:class="{active: s > 100}")
  router-link(v-for="item in navbarArray" :to="item.url").smmbItem {{ item.title }}
    router-link(v-for="item2 in item.sub" :to="item2.url")
      .smmb_second_item {{ item2.title }}
</template>

<script>
export default {
  data() {
    return {
      s: null,
      t: null,
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
      this.t = window.screenTop
    }
  },
}
</script>
<style lang="sass">
.smmb
  a
    color: #fff !important
</style>
<style scoped lang="sass">
@import '@/assets/style.sass'
.smmb
  position: fixed
  width: 100%
  min-height: 200vw
  background-color: rgba(#333,0.8)
  z-index: 23
  top: 80px
  box-sizing: border-box
  padding: 5vw 0 3vw 0
  +flexcolumn
  align-items: center
  display: none
  +pad
    display: flex
  +phone
    z-index: 19
    padding: 8vw 0 5vw 0
  

  .smmbItem
    color: white
    font-size: 20px
    letter-spacing: 0.5vw
    margin-bottom: 20px
    width: max-content
    // +bb
    +phone
      // font-size: 5vw
      letter-spacing: 1vw
      font-weight: 800
      // margin-bottom: 60px
    .smmb_second_item
      font-size: 15px
      font-weight: 300
      margin-top: 8px
      color: #fff !important


@keyframes open
  0%
    // transform-origin: 50% 0%
    transform: translateY(-10%)
    opacity: 0
    filter: blur(10)
  100%
    transform: translateY(0%)
    opacity: 1
    filter: blur(0)




    

</style>
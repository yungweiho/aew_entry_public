<template lang="pug">
.side_menu
  .side_menu_block(v-for="item in navbarArray")
    router-link.side_menu_item(:to="item.url" @click.native="$emit('close')") {{ item.title }}
      router-link(v-for="item2 in item.sub" :to="item2.url")
        .side_menu_second {{ item2.title }}
  .side_menu_close_button(@click="$emit('close')")
</template>

<script>
export default {
  data() {
    return {
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
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/style.sass'
.side_menu
  // +bb
  background-color: rgba(#333, 0.8)
  position: fixed
  z-index: 30
  height: 100vh
  width: 20vw
  box-sizing: border-box
  padding: 2vw 0 0 2vw
  // transform: translateX(-100%)
  +pad
    display: none

  .side_menu_block
    width: 100%
    +flexcolumn
    // justify-content: center
    // align-items: center
    .side_menu_item
      width: max-content
      color: #fff
      font-size: 20px
      letter-spacing: 1.5px
      font-weight: bold
      margin-bottom: 20px
      +com
        font-size: 15px
      .side_menu_second
        color: #fff
        font-weight: 300
        font-size: 15px
        margin-top: 10px
        +com
          font-size: 12px
  .side_menu_close_button
    position: absolute
    top: 15px
    right: 15px
    background: url('../assets/side_menu_close.png')
    width: 15px
    height: 15px
    opacity: 0.8
    +bgcon
    cursor: pointer
    transition: 0.1s
    transform-origin: 50%
    &:hover
      transform: scale(1.1)
      transition: 0.1s
      transform-origin: 50%




</style>
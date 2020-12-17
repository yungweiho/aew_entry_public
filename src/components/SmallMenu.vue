<template lang="pug">
.smm(:class="{active: s> 100}")
  .smmBlock(@click="push=!push" )
    .smmLine1(:class="{active: push==true}")
    .smmLine2(:class="{active: push==true}")


</template>

<script>
export default {
  data() {
    return {
      s: '',
      push: false,
    }
  },
  watch: {
    '$route'(to,from){
      this.push=false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scroll);
  },
  methods:{
    scroll() {
      this.s = window.scrollY || window.pageYOffset || document.documentElement.scrollTop
    }
  },
}
</script>

<style lang="sass">
@import '@/assets/style.sass'
.smm
  position: fixed
  z-index: 22
  width: 40px
  height: 50px
  // box-sizing: border-box
  // +bb
  top: 50px
  left: 1.5vw
  // background-color: #878787
  display: none
  cursor: pointer
  // z-index: 99
  +pad
    display: block
  +phone
    top: 9vw
  //捲下來後
  &.active
    top: 30px
    +pad
      // top: 1vw
    +phone
      top: 6vw

  .smmBlock
    width: 100%
    height: 100%
    .smmLine1
      position: relative
      width: 40%
      height: 3%
      background-color: #333
      // margin-top: 35%
      margin-left: 15%
      transform-origin: 30% 130%
      transition: 0.3s
      +pad
        transform-origin: 25% 180%
        // margin-top: 25%
        width: 70%
        height: 8%
      &.active
        transition: 0.3s
        transform: rotate(45deg)
    .smmLine2
      position: relative
      width: 40%
      height: 3%
      background-color: #333
      margin-top: 8px
      margin-left: 15%
      transform-origin: 28% -20%
      transition: 0.3s
      +pad
        transform-origin: 28% -15%
        // margin-top: 20%
        width: 70%
        height: 8%


      &.active
        transition: 0.3s
        transform: rotate(-45deg)
</style>
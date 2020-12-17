<template lang="pug">
.ft(:class="{home: $route.path != '/profile' && $route.path != '/newUser'}")
  .ftLeft
    .text(v-html="text.left")
    .edulogo
  .ftRight
    .text(v-html="text.right")

</template>

<script>
export default {
  data() {
    return {
      text: {
        left: '<div><div>教育部版權所有</div><div>地址：臺北市中正區中山南路5號</div><div>電話總線：(02)7736-6666 (代表號)</div></div>',
        right: '<p>網站更新日期：2020/03/07</p>',
      },
    }
  }
}
</script>

<style lang="sass">
@import '@/assets/style.sass'
.ft
  position: absolute
  bottom: 0
  width: 100%
  height: 22vw
  // +bb
  background: url('../assets/footer.png')
  +bgcon
  background-position: 0 100%
  background-size: 100% auto
  box-sizing: border-box
  z-index: 10
  +flexrow
  +pad
    background: url('../assets/footerpad.png')
    +bgcon
    background-position: 0 0
    background-size: 100% auto
    height: 25vw
    // margin-top: 1vw
  +phone
    background: url('../assets/footerphone.png')
    +bgcon
    background-position: 0 0
    background-size: 100% auto
    height: 96vw
    +flexcolumn
    min-height: 360px
  &.home
    position: relative
    bottom: initial

  .ftLeft
    width: 65%
    height: 100%
    position: relative
    // +bb
    +phone
      width: 97%
      height: 70%
      min-height: 252px
      // +bb
    .text
      position: absolute
      line-height: 1.5vw
      letter-spacing: 0.1vw
      text-align: right
      // +bb
      font-size: 0.9vw
      width: 30%
      margin-top: 23%
      margin-left: 25%
      color: #878787
      +smallcom
        width: 40%
        margin-left: 20%
        line-height: 2vw
        +ie
          font-size: 1vw
      +pad
        width: 52%
        // +bb
        // font-size: 0.7vw
        line-height: 2.8vw
        margin-left: 23%
        margin-top: 20%
        +ie
          font-size: 1.5vw
      +phone
        width: 70%
        line-height: 7vw
        font-size: 4vw
        margin-top: 30%
        margin-left: 32%
        text-align: left
        box-sizing: border-box
        padding: 0 50px 0 0 
    .edulogo
      position: absolute
      width: 8%
      height: 30%
      margin-left: 58%
      margin-top: 23%
      // +bb
      background: url('../assets/edulogo.png')
      +bgcon
      background-position: 0 0
      +smallcom
        margin-left: 63%
        margin-top: 24%      
      +pad
        margin-left: 78%
        margin-top: 21%
        width: 10%
      +phone
        width: 13%
        margin-left: 32%
        margin-top: 11%
        
  .ftRight
    position: relative
    width: 35%
    // +bb
    +phone
      width: 97%
      height: 30%
      min-height: 108px
    .text
      // width: 40%
      position: absolute
      color: #878787
      font-size: 0.9vw
      line-height: 0.7vw
      letter-spacing: 0.1vw
      margin-top: 52%
      margin-left: -1%
      +smallcom
        line-height: 20px
        +ie
          // font-size: 1.5vw
      +pad
        // width: 46%
        margin-left: 1%
        line-height: 2.5vw
        margin-top: 38%
      +phone
        margin-top: 20%
        line-height: 3vw
        font-size: 3.5vw
        margin-left: 2%
        letter-spacing: 0.2vw
        // padding: 0 0 0 10px
      
</style>
<template lang="pug">
.Home
  Slider.slC
  SliderM.slM
  HomeLink.hlC
  HomeLinkM.hlM
  homeanimate
  aniplane
  .cat

</template>

<script>
import Slider from '@/components/Slider'
import HomeLink from '@/components/HomeLink'
import SliderM from '@/components/SliderM'
import HomeLinkM from '@/components/HomeLinkM'
import homeanimate from '@/components/homeanimate'
import aniplane from '@/components/aniplane'
export default {
  components: {Slider, HomeLink, SliderM, HomeLinkM, homeanimate, aniplane}
}
</script>

<style lang="sass">
@import '@/assets/style.sass'

.Home
  width: 100%
  box-sizing: border-box
  +flexcolumn
  align-items: center
  padding: 0 0 350px 0
  .slC
    +pad
      display: none
  .slM
    display: none
    +pad
      display: flex
  .hlC
    +pad
      display: none
  .hlM
    display: none
    +pad
      display: flex
  .cat
    position: absolute
    width: 30%
    height: 7vw
    background: url('../../assets/cat.png')
    +bgcon
    background-position: 0 0
    margin-top: 78.5vw
    margin-left: -27vw
    +pad
      // width: 50%
      // +bb
      margin-top: 250vw
      height: 15vw
      margin-left: -10vw
      +ie
        display: none
    +phone
      margin-top: 473vw
      height: 30vw
      margin-left: -24vw
    +ie
      margin-top: -49.4vw
      margin-left: -36vw
      display: none
    

</style>
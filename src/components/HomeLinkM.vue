<template lang="pug">
.hlm
  HomeNewsM
  SpecialM
  HomeVideo
  RCardM
</template>

<script>
import HomeNewsM from '../components/HomeNewsM'
import SpecialM from '../components/SpecialM'
import HomeVideo from '@/components/HomeVideo'
import RCardM from '@/components/RCardM'

export default {
  components: {HomeNewsM, SpecialM, HomeVideo, RCardM}
}
</script>

<style lang="sass">
@import '@/assets/style.sass'

.hlm
  width: 100%
  +flexcolumn
  // justify-content: center
  align-items: center

</style>
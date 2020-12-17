<template lang="pug">
.hl
  .hlLeft
    Special
    HomeVideo
  .hlRight
    HomeNews
    RCard

</template>

<script>
import Special from '@/components/Special'
import HomeNews from '@/components/HomeNews'
import HomeVideo from '@/components/HomeVideo'
import RCard from '@/components/RCard'

export default {
  components: {Special, HomeNews, HomeVideo, RCard}

}
</script>

<style lang="sass">
@import '@/assets/style.sass'
.hl
  width: 100%
  // min-height: 1000px
  +flexrow
  padding: 0 0 0 0
  // +bb
  .hlLeft
    width: 50%
    // +bb
  .hlRight
    width: 50%
    // +bb

</style>
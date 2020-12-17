<template lang="pug">
.api-container
  h1 API Cross Test
  div
    pre {{ JSON.stringify( data, null, 2) }}

</template>

<script>
import { ListArticles } from "@/api/client/Articles";

export default {
  components: {},
  data() {
    return {
      currentProject: 1, // 首頁固定是 1
      data: null
    };
  },
  created() {
    this.apiListArticle(this.currentProject);
  },
  methods: {
    async apiListArticle(project) {
      ListArticles(project)
        .then(response => {
          this.data = response.data;
          console.log(this.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="sass" scoped>
.api-container
  width: 60vw
  margin: 0 auto
  padding: 2vh
</style>
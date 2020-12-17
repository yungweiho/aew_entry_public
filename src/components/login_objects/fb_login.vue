<template lang="pug">
.hello
  h1 {{msg}}
  button.btn.el-button--success(@click='login') fb-login
</template>

<script>
export default {
  props: ['profile'],
  name: 'hello',
  computed: {
    msg () {
      if (this.profile.name) {
        return `歡迎 <b><i> ${this.profile.name} </i></b> 登入系統`
      } else {
        return '請點選Login登入系統'
      }
    },
    profilePicture () {
      return (this.profile.id) ? `https://graph.facebook.com/${this.profile.id}/picture?width=300` : `/static/man.gif`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.profile-picture {
  width: 150px;
  border-radius: 75px;
}
</style>

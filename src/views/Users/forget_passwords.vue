<template lang="pug">
.forget_ps
  .forget_ps_block
    .forget_ps_title 請輸入您的Email以重設密碼。
    input.forget_ps_input(v-model="email")
    v-btn.forget_ps_button(@click="ApiForgotPasswordsEmail()") 送出
  v-snackbar(
            v-model="snackbar"
            :color="snackColor"
          ) {{snackTxt}}

</template>

<script>
import { ForgotPassword } from '@/api/client/UserAccount'
export default {
  data() {
    return {
      email: null,
      snackbar: false,
      snackTxt: '',
      snackColor: '',
      switchTxt: '',
    }
  },
  methods: {
    //alert
    showSnackbar(str, color) {
      this.snackbar = false;
      this.snackTxt = str;
      this.snackColor = color;
      this.snackbar = true;
    },
    // API email forgot passwords
    ApiForgotPasswordsEmail() {
      var data = {
        email: this.email
      }
      if (this.email !== null) {
        ForgotPassword(data)
        .then(response => {
          this.showSnackbar('請至' + this.email + '收信以重設您的密碼', '#69917a');
          setTimeout(() => {
            this.$router.replace('/');
          }, 1500)
        })
        .catch(err => {
          this.showSnackbar('寄出失敗，請檢查Email。', '#bd7373')
          console.log(err);
        })
      } else if (this.email === null || this.email === '') {
        this.showSnackbar('請輸入Email', '#bd7373')
      }
      
    }
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/style.sass'
.forget_ps
  width: 100%
  min-height: 100vh
  padding: 250px 0 0 0
  +flexcolumn
  align-items: center
  // justify-content: center
  .forget_ps_block
    +flexcolumn
    .forget_ps_title
      font-size: 25px
      font-weight: bold
      color: #777
      text-align: center
      letter-spacing: 2px
    .forget_ps_input
      width: 200px
      margin-top: 30px
      border-radius: 5px
      font-size: 20px
      // +bb
      border: solid 1px #DEDEDE
      outline: none
      // margin-right: 10px
    .forget_ps_button
      font-size: 18px
      font-weight: bold
      width: max-content
      margin-top: 10px




</style>
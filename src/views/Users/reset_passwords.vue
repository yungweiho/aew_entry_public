<template lang="pug">
.reset_psw
  .reset_psw_notice_text 認證成功！請在下方重設密碼。
  v-form(ref="form" v-model="valid" lazy-validation).reset_psw_input_block
    v-text-field(label="新密碼" filled v-model="password" :rules="[Rules.password]").reset_psw_passwords
    v-text-field(label="再次輸入新密碼" filled v-model="password_repeat" :rules="[Rules.password_repeat]").reset_psw_passwords_repeat
    v-btn.reset_psw_button(@click="reset_passwords()") 送出
  v-snackbar(
            v-model="snackbar"
            :color="snackColor"
          ) {{snackTxt}}
</template>

<script>
import { checkVerificationToResetPassword } from '@/api/client/UserAccount';
export default {
  data() {
    return {
      valid: false,
      password: null,
      password_repeat: null,
      snackbar: false,
      snackTxt: '',
      snackColor: '',
      switchTxt: '',
      Rules: {
        password:
          (v) => {
            if (!v || (!!v && v.length <= 0 )) {
              return '請輸入新密碼';
            } else if (v.length < 8) {
              return '密碼需大於8個字元';
            } else {
              return true;
            }
          },
        password_repeat:
          (v) => {
            if (!v || (!!v && v.length <= 0 )) {
              return '請再次輸入新密碼';
            } else if (this.password !== this.password_repeat) {
              return '與新密碼不相符';
            } else {
              return true;
            }
          }
        
      }

    }
  },
  created() {
  },
  methods: {
    // get email
    get_email(email) {
      var real_email = email.replace('%40', '@')
      return real_email;
    },
    // reset passwords API
    reset_passwords() {
      var data = {
        email: this.get_email(this.$route.params.email),
        password: this.password,
        token: this.$route.params.token
      }
      if (this.$refs['form'].validate()) {
        checkVerificationToResetPassword(data)
        .then(response => {
          this.showSnackbar('更改成功，請重新登入。', '#69917a')
        })
        .catch(err => {
          this.showSnackbar('發生錯誤，請聯繫管理員。', '#bd7373')
        });
      }
      
    },
    //alert
    showSnackbar(str, color) {
      this.snackbar = false;
      this.snackTxt = str;
      this.snackColor = color;
      this.snackbar = true;
    },
  }
}
</script>
<style lang="sass">
.reset_psw
  .v-messages__message
    color: red !important
</style>
<style lang="sass" scoped>
@import '@/assets/style.sass'
.reset_psw
  width: 100%
  padding: 100px 0 0 0
  +flexcolumn
  align-items: center
  +phone5
    padding: 20px 10px 0 10px
  .reset_psw_notice_text
    font-size: 25px
    font-weight: bold
    color: #777
  .reset_psw_input_block
    width: 30%
    margin-top: 10px
    +pad
      width: 40%
    +phone
      width: 350px
    +phone5
      width: 300px
    .reset_psw_passwords
      font-size: 20px
    .reset_psw_passwords_repeat
      font-size: 20px

    .reset_psw_button



</style>
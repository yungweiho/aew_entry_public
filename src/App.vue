<template lang="pug">
#app
  .enter(:class="{active: s > 100}")
    .button_right_side_reg(v-if="have_token===undefined" @click="userRegister") 註冊
    .button_right_side_login(@click="dialogVisible = true", v-if="have_token===undefined") 登入
    router-link.button_right_side_reg(v-if="have_token" to="/me") 會員
    .button_right_side_login(v-if="have_token" @click="Userlogout") 登出

  transition(name="side_animate")
    side_menu(v-if="sideMenuOpen === true && s > 100" @close="close_side_menu")
  //登入的dialog畫面
  el-dialog(width="45%", title="請使用以下方式註冊或登入", :visible.sync="dialogVisible", top="5vh").logpop
    el-form(:model="form")
      el-form-item(label="email帳號:")
        el-input(v-model="form.email", autocomplete="on" placeholder="請輸入email帳號")
      el-form-item(label="輸入密碼:")
        el-input(v-model="form.password" type="password", placeholder="請輸入密碼" @keyup.enter.native="userLogin")
    .dialog-footer(slot="footer")
      el-row(:gutter = "24")
        .el-button(@click="userRegister", type="info") 註冊
        router-link.el-button(to="/forgot_passwords" @click.native="dialogVisible = false", type="info") 忘記密碼
        .el-button(@click="userLogin", type="info") 登入
        .el-button(@click="dialogVisible=false", type="danger") 取消
  .space
  //原本的header
  header.top(:class="{active: s > 100}")
    router-link.logo(to="/")
    Menu
    //user
    .pad_user_re(v-if="have_token===undefined" @click="userRegister", type="info") 註冊
    .pad_user_log(v-if="have_token===undefined" @click="dialogVisible = true") 登入
    router-link.pad_user_re(v-if="have_token" to="/me") 會員
    .pad_user_log(v-if="have_token" @click="Userlogout") 登出



  //滑下來會出現的header
  header.topS(:class="{active: s > 100}")
    transition(name="fade")
      .side_menu_open_button(v-if="sideMenuOpen === false" @click="sideMenuOpen = true")
    router-link.logo(to="/")
    
    //使用者資料
    .enbutton_scroll_re(v-if="have_token===undefined" @click="userRegister", type="info") 註冊
    .enbutton_scroll_login(v-if="have_token===undefined" @click="dialogVisible = true") 登入
    router-link.enbutton_scroll_re(v-if="have_token" to="/me") 會員
    .enbutton_scroll_login(v-if="have_token" @click="Userlogout") 登出

  SmallMenu(@click.native="open=!open")
  transition(name="mobile_menu_animate")
    SmallMenuBlock(v-if="open==true")

  .middle(:class="{home: $route.path=='/' || $route.path == '/newUser', pofile: $route.path === '/me'}")
    transition(name="fade" mode="out-in")
      router-view(:key="$route.fullPath" :user-data="userData")
  footer.bottom
    Footer
</template>

<script>
import { getToken, removeToken } from '@/utils/auth';
import { getInfo } from '@/api/client/Auth'
import headerpic from '@/components/pic/headerpic'
import Menu from '@/components/Menu'
import SmallMenu from '@/components/SmallMenu'
import Footer from '@/components/Footer'
import SmallMenuBlock from '@/components/SmallMenuBlock'
import fb_login from '@/components/login_objects/fb_login'
import side_menu from '@/components/side_menu'
import { login, logout } from '@/api/client/Auth'
export default {
  props: {
    dialogVisible: Boolean
  },
  components: {Menu, SmallMenu, SmallMenuBlock, fb_login, Footer, headerpic, side_menu},
  data() {
    return {
      sideMenuOpen: false,
      userData: null,
      open: false,
      s: null,
      profile: {},
      authorized: false,
      form:{
        email: '',
        password:''
      },
      user: require('./assets/user.jpg'),
      loginNow: 'no'
    }
  },
  watch: {
    '$route'(to,from){
      this.open=false
      window.scroll(0,0)
    },
    
  },
  created() {
    if(this.have_token!=undefined) {
      getInfo()
      .then(respones => {
        this.userData = respones.data
      })
      .catch(err => {
        console.log(err);
      })
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scroll);
  },
  computed:{
    have_token() {
      var now_token = getToken()
      return now_token
    }
  },
  methods:{
    //close side menu
    close_side_menu() {
      this.sideMenuOpen = false;
    },
    userRegister(){
      this.dialogVisible = false;
      this.$router.push({path:"/newUser"})
    },
    userLogin(){
      this.dialogVisible = false;
      var data = {
        email: this.form.email,
        password: this.form.password
      };
      login(data)
      .then(
        () => {
          this.loginNow = 'yes'
          this.$router.push({path:"/me"})
          getInfo()
          .then(respones => {
            this.userData = respones.data
            window.location.reload()
          })
          .catch(err => {
            console.log(err);
          })
        }
      )
      .catch(err => {
        console.log(err);
        alert('帳號或密碼錯誤，請重新登入。')
      })
    },

    scroll() {
      this.s = window.scrollY || window.pageYOffset || document.documentElement.scrollTop
    },

    Userlogout () {
      logout()
      .then(
        () => {
          removeToken();
          window.location.href = window.location.href.split('/')[0] + '/'
        }
      )
      .catch(err => {
        console.log(err);
        removeToken();
        window.location.href = window.location.href.split('/')[0] + '/'
      })
    },

    statusChangeCallback (response) {
      let vm = this
      if (response.status === 'connected') {
        vm.authorized = true
        vm.getProfile()
      } else if (response.status === 'not_authorized') {
        vm.authorized = false
      } else if (response.status === 'unknown') {
        vm.profile = {}
        vm.authorized = false
      } else {
        vm.authorized = false
      }
    },
  },

  // beforeDestroy() {
  //   removeToken()
  //   logout()
  // },

  // destroyed() {
  //   removeToken()
  //   logout()
  // }
}
</script>

<style lang="sass">
@import '@/assets/style.sass'
*
  position: relative

.el-popup-parent--hidden
  padding: 0 !important  
.el-input__inner
  border: 0 
  border: solid 0.5px #D2D2D2 !important
  // outline: none
  // box-shadow: 1px 1px 5px 2px #DEDEDE
body,html
  width: 100%
  min-height: 100vh
  box-sizing: border-box
  margin: 0
  padding: 0

#app
  width: 100%
  min-height: 100vh
  box-sizing: border-box
  margin: 0
  padding: 0
  position: relative
  overflow-x: hidden
  // margin-bottom: -5px


  +ie
    // overflow-x: visible
  .el-dialog
    +phone
      width: 90% !important
  .enter
    position: fixed
    // +bb
    +size(18%,28vw)
    right: -7%
    top: -8vw
    z-index: 20
    background: url('./assets/enter.png')
    +bgcon
    opacity: 0.8
    background-size: 100% auto
    background-position: 0, 0
    +flexrow
    +pad
      display: none

    &.active
      display: none
    
    .button_right_side_reg
      position: relative
      width: 2.5vw
      min-width: 29.42px
      height: max-content
      font-size: 13px
      margin-top: 8.3vw
      margin-left: 0.3vw
      letter-spacing: 1.5px
      color: #878787
      border-radius: 5px
      +flexcolumn
      +flexCenter
      cursor: pointer
      // +bb
      +smallcom
        font-size: 0.5vw
        min-width: initial
      +ie
        margin-top: -10.5vw
        +maxcom
          margin-top: -10.6vw
        +com
          margin-top: -10vw
        +smallcom
          font-size: 13px
          margin-top: -10vw

      
    .button_right_side_login
      position: relative
      width: 2.5vw
      min-width: 29.42px
      height: max-content
      font-size: 13px
      border-radius: 5px
      letter-spacing: 1.5px
      margin-top: 8.3vw
      margin-left: 1vw
      color: #878787
      cursor: pointer
      +smallcom
        margin-left: 0.5vw
        font-size: 0.5vw
        min-width: initial
        +ie
          font-size: 13px

  .space
    width: 100%
    height: 8.5vw
    box-sizing: border-box
    +pad
      height: 15vw
    +phone
      height: 20vw
      min-height: 76.1px
  .top
    width: 100%
    height: 11.5vw
    // +bb
    background: url('./assets/head.png')
    position: fixed
    box-sizing: border-box
    top: 0
    +bgcover
    background-size: 100% auto
    background-position-y: 0
    z-index: 10
    // +bb
    +pad
      background: url('./assets/headM.png')
      height: 15vw
      +bgcover
      // background-position: 0 0
    +phone
      height: 20vw
      z-index: 20
      width: 101%
      margin-left: -1%
      min-height: 75px
    &.active
      // position: relative
      // height: 0
      display: none


    .logo
      position: absolute
      +size(7%, 40%)
      background: url('./assets/logo.png')
      +bgcon
      top: 20%
      left: 3%
      // +bb
      +pad
        +size(16%, 65%)
        left: 50%
        margin-left: -8%
      +phone
        +size(18%, 70%)
        margin-left: -9%
    .pad_user_re
      position: absolute
      right: 2vw
      top: 2vw
      letter-spacing: 1.5px
      display: none
      color: #777
      cursor: pointer

      +pad
        display: block
      +phone
        border: solid 0.5px #999
        border-radius: 6px
        padding: 1.5px
    .pad_user_log
      position: absolute
      display: none
      right: 8vw
      top: 2vw
      letter-spacing: 1.5px
      color: #777
      cursor: pointer
      +pad
        display: block
      +phone
        top: 40px
        right: 2vw
        border: solid 0.5px #999
        border-radius: 6px
        padding: 1.5px
  .topS
    position: fixed
    top: 0
    z-index: 20
    width: 100%
    height: 80px
    box-sizing: border-box
    // +bb
    background-color: #F7F7F7
    box-shadow: 0px 0px 15px 0.5px #999
    display: none
    +pad
      height: 80px
    +phone
      // height: 18vw
      // +bb
    &.active
      display: block
    .side_menu_open_button
      background: url('./assets/side_menu_open.png')
      width: 30px
      height: 30px
      +bgcon
      margin-left: 3vw
      margin-top: 25px
      cursor: pointer
      +pad
        display: none
    .logo
      position: absolute
      +size(89px, 56px)
      background: url('./assets/logo.png')
      +bgcon
      top: 15%
      left: 50%
      margin-left: -44.5px

    .enbutton_scroll_re
      position: absolute
      right: 20px
      top: 1vw
      font-size: 18px
      letter-spacing: 1.5px
      color: #555
      cursor: pointer
    .enbutton_scroll_login
      position: absolute
      right: 70px
      top: 1vw
      font-size: 18px
      letter-spacing: 1.5px
      color: #555
      cursor: pointer




    
        





    
  .el-button-pos
    margin-left: 80%
    z-index: 0
    background-color: #238FEF
    color: #fff

  .space-LF
    margin-left: 50%
    margin-right: 50%


  .middle
    width: 100%
    // min-height: 63vw
    box-sizing: border-box
    // +bb
    min-height: 100vh
    padding: 0 0 100px 0
    // z-index: 999
    // margin-top: 3vw

    // padding: 0 0 5vw 0
    // overflow-x: hidden
    +maxcom
      // min-height: 80vw
    // +lgcom
    //   min-height: 101vw
    // +com
    //   min-height: 129vw
    // +smallcom
    //   min-height: 176vw
    &.pofile
      background-color: #E5E5E5

    &.home
      margin-top: 1vw


    +pad
      min-height: 89vw
    +phone
      // min-width: 375px
      padding: 0 0 18.750px 0
      min-height: 1000px
    +phone5
      min-height: 800px

  .bottom
    position: absolute
    bottom: 0
    width: 100%
    // margin-top: -1vw
    +phone
      min-width: 375px
      min-height: 360px
    +ie
      margin-top: 20vw
    &.home
      position: relative
      // margin-top: 10vw !important
      // bottom: -2vw !important

</style>

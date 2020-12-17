<template lang="pug">
.up
  .title 編輯基本資料
  el-form.textBlock(:model="form" ref="formData" :rules="rules")
    //大頭貼
    .pic(:key="userData.avatar" :style="{background:　'url(' + (userData.avatar==null? require('../../assets/default.png') : userData.avatar) + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
    //- .newPic(v-if="avatarFile != null" :style="{background:　'url(' + avatarFile + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
    UploadAvatar(@onSelected='Selected')
    //姓名
    el-form-item.name(label="姓名" prop="name")
      el-input(v-model="form.name")
    //密碼
    el-form-item.passwords(label="密碼" prop="pass")
      el-input(v-model="form.passwords")
    //確認密碼
    el-form-item.passwords(label="再輸入一次密碼" prop="checkPass")
      el-input(v-model="form.passwords2")
    //自我介紹
    el-form-item.intro(label="自我介紹")
      el-input(type="textarea" v-model="form.intro")
  .button(@click="submit()") 送出

</template>

<script>
import { getInfo, login, logout } from '@/api/client/Auth'
import { getToken, removeToken } from '@/utils/auth';
import { Message } from 'element-ui';
import { UpdateProfile, UpdateAvatar } from '@/api/client/UserAccount';
import UploadAvatar from '@/components/Upload/UploadAvatar';
export default {
  components: {UploadAvatar},
  data() {
    //密碼驗證
    var validatePass = (rule, value, callback) => {
      if (this.form.passwords === '' ) {
        callback(new Error('請輸入密碼'));
      }else if(this.form.passwords.length < 8){
        callback(new Error('密碼最少須8個字元以上'));
      } else {
        callback();
      }
    };
    //再次輸入密碼驗證
    var validatePass2 = (rule, value, callback) => {
      if (this.form.passwords2 === '') {
        callback(new Error('請再次輸入密碼'));
      } else if (this.form.passwords2 != this.form.passwords) {
        callback(new Error('兩次輸入的密碼不一致!'));
      } else {
        callback();
      }
    };
    return {
      form: {
        name: '',
        passwords: '',
        passwords2: '',
        intro: '',
      },
      rules: {
        name: [{required: true, message: '請填寫您的名稱', trigger: 'blur'}],
        pass: [{ required: true, validator: validatePass, trigger: 'blur' }],
        checkPass: [{ required: true, validator: validatePass2, trigger: 'blur' }],
      },
      userData: '',
      avatarFile: null,
    }
  },
  created() {
    this.getAvatar()
  },
  methods: {
    //拿現在的大頭貼
    getAvatar() {
      getInfo()
      .then(response => {
        this.userData = response.data;
      })
      .catch(err => {
        console.log(err);
      })
    },
    //選擇更新的頭貼照片
    Selected(file){
      this.avatarFile = file;
      console.log("收到檔案路徑");
      console.log(this.avatarFile);
    },
    //送出按鈕
    submit() {
      this.$refs['formData'].validate(valid => {
        if(valid) {
          var data = {
            name: this.form.name,
            password: this.form.passwords,
            introduction: this.form.intro
          };
          
          if(this.avatarFile != null) {
            console.log('走對了');
            
            UpdateProfile(data)
            .then( () => {
              const formData = new FormData();
              formData.append('avatar', this.avatarFile);
              UpdateAvatar(formData)
              .then( () => {
                alert('更改成功，請重新登入。')
                logout()
                removeToken()
                this.$router.replace('/')
                location.reload();
              })
              .catch(err => {
                console.log(err);
              })
            })
            .catch(err => {
              console.log(err);
            })
          } else if(this.avatarFile==null) {
            console.log('走錯路了');
            UpdateProfile(data)
            .then( () => {
                  alert('更新成功，請重新登入。')
                  logout()
                  removeToken()
                  this.$router.replace('/')
                  location.reload();
            })
            .catch(err => {
              console.log(err);
            })
          }
        } else {
          alert('資料錯誤，請重新校正。')
        }
      })
    }
  }
}
</script>

<style lang="sass">
@import '@/assets/style.sass'
.up
  .el-form-item__label
    font-size: 18px
    letter-spacing: 1.5px
  .el-input__inner
    outline: none !important
    border: 0
    border: solid 0.5px #D2D2D2

  input
    outline: none !important
  .el-input
    outline: none !important
    border: 0

</style>

<style lang="sass" scoped>
@import '@/assets/style.sass'
.up
  width: 100%
  box-sizing: border-box
  padding: 20px
  +flexcolumn
  +flexCenter
  
  .title
    width: 100%
    font-size: 25px
    font-weight: bold
    letter-spacing: 1px
  
  .textBlock
    width: 100%
    margin-top: 10px !important
    .pic
      width: 150px
      height: 150px
      border: solid 0.5px #D2D2D2
      border-radius: 6px
      margin-top: 10px
      margin-bottom: 10px
    .name
      margin-top: 10px
    .passwords
    .intro
  .button
    font-size: 20px
    border-radius: 6px
    background-color: #D2D2D2
    width: 80px
    letter-spacing: 1px
    font-weight: bold
    padding: 5px 0
    text-align: center
    cursor: pointer
    transition: 0.3s

    &:hover
      box-shadow: 0px 3px 5px 2px #cccccc
      transition: 0.3s
      

</style>
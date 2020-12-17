<template lang="pug">
.re
  blockShow1
    h2 更新基本資料
      el-form(:model="ruleForm", status-icon, :rules="rules", ref="ruleForm", label-width="100px" width="50%")
        el-form-item(label="您的名稱" prop="name")
          el-input(v-model="ruleForm.name" placeholder="王大明")
        el-form-item(label="email" prop="email")
          el-input(v-model="ruleForm.email" placeholder="email帳號")
        el-form-item(label="密碼" prop="pass")
          el-input(type="password" v-model="ruleForm.password" placeholder="輸入密碼")
        el-form-item(label="確認密碼" prop="checkPass")
          el-input(type="password" v-model="ruleForm.checkPass" placeholder="再次確認密碼")
        el-form-item(label="大頭貼" prop="avatar")
          UploadAvatar(ref='avatar' @onSelected='Selected')
        el-form-item(label="自我介紹" prop="intro")
          el-input(v-model="ruleForm.introduction" placeholder="自我介紹" type="textarea")
        el-form-item(label="uuid")
          el-input(v-model="ruleForm.uuid" placeholder="")
        el-form-item(label="")
          .el-button(type="primary" @click="submitForm('ruleForm')") 送出
          .el-button(@click="resetForm('ruleForm')") 重置

  blockShow2(v-if="actionView === 'success'")
    h2 已註冊成功
      
  blockShow3(v-if="actionView === 'sent'")
    h2 送出
  blockShow4(v-if="actionView === 'verify'")
    h2 驗證您的帳號
  blockShow5(v-if="actionView === 'returnPassword'")
    h2 找回密碼
</template>

<script>
import { UpdateProfile, UpdateAvatar } from '@/api/client/UserAccount';
import UploadAvatar from '@/components/Upload/UploadAvatar';
import { Message } from 'element-ui';
export default {
  components: {
    UploadAvatar,
  },
  data(){
    var typeAction = '';
    var validatePass = (rule, value, callback) => {
      if (value === '' ) {
        callback(new Error('請輸入密碼'));
      }else if(this.ruleForm.password.length < 8){
        callback(new Error('密碼最少須8個字元以上'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('請再次輸入密碼'));
      } else if (value !== this.ruleForm.password) {
        callback(new Error('兩次輸入的密碼不一致!'));
      } else {
        callback();
      }
    };
    return {
      avatarFile:'',
      ruleForm:{
        name: '',
        email: '',
        password: '',
        avator:'',
        introduction: '',
        phone:'',
        uuid:'',
        oauth:'',
      },
      rules: {
        name: [{required: true, message: '請填寫您的名稱', trigger: 'blur'}],
        email: [{type:'email', required: true, message:'請填寫Email作為登入帳號', trigger: 'blur'}],
        pass: [{ required: true, validator: validatePass, trigger: 'blur' }],
        checkPass: [{ required: true,validator: validatePass2, trigger: 'blur' }],
        }
    }
  },
  created() {
    this.actionView = this.$route.params.action;
    this.typeAction = this.$route.params.action
  },
  mounted () {
    this.typeAction = this.$route.params.action
  },
  methods: {
      submitForm(){
        //console.log(this.ruleForm);
        this.$refs['ruleForm'].validate( valid => {
        if(valid){
          const formData = new FormData();
          formData.append('name', this.ruleForm.name);
          formData.append('email', this.ruleForm.email);
          formData.append('password', this.ruleForm.password);
          formData.append('avatar', this.avatarFile);
          formData.append('introduction', this.ruleForm.introduction);
          formData.append('phone', this.ruleForm.phone);
          formData.append('uuid', this.ruleForm.uuid);
          formData.append('oauth', "test");
          Register(formData)
            .then(response=>{
                console.log("寫入成功");
                console.log(response.data);
                this.$router.push({ path: `/users/newUser/success`});
            })
            .catch(err=>{
                console.log(err);
                let errMsg;
                if(err.response.status === 403){
                  if(err.response.data.message.email){
                    errMsg = '此Email已被使用，請輸入另一個E-mail';
                  }else{
                    errMsg = '發生錯誤，請重試或連繫管理員';
                  }
                  Message({
                    message: errMsg,
                    type: 'error',
                    duration: 5 * 1000,
                  });
                }
            });
            }
        });
      },
      resetForm(){
        console.log("重置")
        name = '';
        email = '';
        password = '';
        checkPass = '';
        introduction = '';
        avator = '';
      },
      Selected(file){
        this.avatarFile = file;
        console.log("收到檔案路徑");
        console.log(this.avatarFile);
      },
  },
}
</script>

<style lang="sass" scoped>
@import "@/assets/style.sass";
.re


</style>
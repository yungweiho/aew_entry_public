<template lang="pug">
.reg
  .law_block
    el-dialog(title="資通安全及隱私權政策聲明", :visible.sync="open_law").law
      .law_text(v-html="doc")
    el-dialog(title="註冊前請閱讀教育部資通安全及隱私權政策聲明，並點選同意。", :visible.sync="agree").law
  blockShow1
    h2.title 註冊帳號
    el-form.formBlock(:model="ruleForm", status-icon, :rules="rules", ref="ruleForm", label-width="100px" width="50%")
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
      //- el-form-item(label="電話")
        //- el-input(v-model="ruleForm.phone" placeholder="手機號碼")
      //- el-form-item(label="uuid")
        //- el-input(v-model="ruleForm.uuid" placeholder="")
      el-form-item(label="隱私權聲明")
        el-radio(v-model="law" label="1") 同意
        el-radio(v-model="law" label="2") 不同意
        .law_button(@click="open_law=true") 隱私權政策
      el-form-item(label="")
        .el-button.put(type="primary" @click="submitForm('ruleForm')") 送出
        .el-button.delet(@click="resetForm('ruleForm')") 重置

  blockShow2(v-if="actionView === 'success'")
    h2 已註冊成功
      
  blockShow3(v-if="actionView === 'sent'")
    h2 送出
  blockShow4(v-if="actionView === 'verify'")
    h2 驗證您的帳號
  blockShow5(v-if="actionView === 'returnPassword'")
    h2 找回密碼
  v-snackbar(
            v-model="snackbar"
            :color="snackColor"
          ) {{snackTxt}}
</template>
<script>
import { Register } from '@/api/client/UserAccount';
import UploadAvatar from '@/components/Upload/UploadAvatar';
import { Message } from 'element-ui';
export default {
  components: {
    UploadAvatar,
  },
  name: 'Register',
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
      snackbar: false,
      snackTxt: '',
      snackColor: '',
      switchTxt: '',
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
      },
      law: null,
      open_law: false,
      agree: false,
      doc: "<p>歡迎蒞臨美感教育資源整合平台（以下簡稱本網站），本網站尊重並保護您在使用教育部網路時的安全及隱私保護權利，為了幫助您瞭解本網站如何保護您在使用本網站各項服務的安全、及如何蒐集、運用及保護您所提供的資訊，特於此說明本網站的資通安全及隱私政策。</p><p>一、 適用範圍</p><p style='padding-left: 40px';>本資通安全及隱私政策適用於您在本網站，以及其延伸服務網站等所涉及的個人資料之蒐集、運用與保護。但不適用於您經由本網站搜尋連結至其他網站後所進行之活動，關於其他網站的個人資料之保護，適用其各自之隱私權保護政策，本網站不負任何連帶責任。</p><p>二、 個人資料之蒐集及運用</p><p style='padding-left: 40px;'>1. 當您在瀏覽本網站或下載檔案時，不會蒐集任何您的個人身分有關之資訊。</p><p style='padding-left: 40px;'>2. 當您參與本網站之各項線上服務時，將視服務需求請您提供相關之個人資料。對於您所提供之個人資料，我們將會遵循「個人資料保護法」及相關法令規定，在本部所提供之業務範圍內使用，不會將其應用於蒐集特定目的以外之用途。</p><p style='padding-left: 40px;'>3. 本網站將在特定目的或法令許可範圍內，對取得之個人資料進行處理、利用、保管及傳輸，期間自該項服務啟始日起，至該項服務之保存年限為止，利用地區為中華民國領域。</p><p style='padding-left: 40px;'>4. 本網站有義務保護您的個人隱私，不會任意修改或刪除您的個人資料及檔案。除非經過您同意或符合以下情況：<br />(1) 依法配合相關權責機關之要求。<br />(2) 保護或防衛相關網路民眾的權利。<br />(3) 為保護本網站各相關單位之權益。</p><p style='padding-left: 40px;'>5. 本網站絕不會任意出售、交換或出租任何您的個人資料給其他團體、個人或私人企業。除非經過您同意或符合以下情況：<br />(1) 配合司法單位合法的調查。<br />(2) 依法配合相關權責機關職務需要之調查或使用。<br />(3) 符合相關法令與規範之安全保護要求下，進行網站服務維護管理及系統調整等作業。</p><p style='padding-left: 40px;'>6. 本網站在您瀏覽或查詢網頁資料時，伺服器會自動產生並儲存相關使用紀錄，包括您使用連線設備的IP位址、使用時間、瀏覽網頁及點擊資料等紀錄，這些資料將僅作為本網站網路流量和行為的統計分析，以利於改進系統效能與提升服務品質。絕不會涉及使用者個人資料與行為之對應或分析。</p><p>三、 資通安全機制</p><ol><li>本網站為確保各項服務之正常運作，以及維護個人資料之安全，防範未經授權之變造竄改，或企圖入侵伺服器主機等惡意行為，提供了以下的安全保護措施</li></ol><p style='padding-left: 40px;'>(1) 裝設防火牆及入侵偵測防禦系統IDP (Intrusion Detection Prevention)防止非法入侵，避免非法存取使用。<br />(2) 建置網路流量管理系統，有效管制異常網路流量。<br />(3) 建立資通安全事件監控、通報與應變處理機制。<br />(4) 網站資料定期備份，並備份到備援主機。<br />(5) 網站主機不定期進行弱點掃描與系統漏洞修補。</p><p style='padding-left: 40px;'>2. 為了提供您最佳的服務，本網站會在您的電腦中放置並取用我們的小型文字檔案（以下簡稱Cookie），若您不願接受Cookie的寫入，您可在您使用的瀏覽器功能項中設定隱私權等級為高，即可拒絕Cookie的寫入，但可能會導致網站某些功能無法正常執行。</p><p style='padding-left: 40px;'>3. 為了提供更好、更個人化的服務以及方便您參與個人化的互動活動，Cookies會在您註冊或登入時建立，並在您登出時修改其狀態。</p><p>四、 使用者條款</p><p style='padding-left: 40px;'>1. 使用者之義務及承諾</p><p style='padding-left: 80px;'>使用者須恪遵『臺灣學術網路管理規範』及相關法令等規定，承諾絕不為任何非法目的或以任何非法方式使用本服務。您同意並保證不得利用本網站從事侵害他人權益或違法之行為，任何危害本網站資通安全之行為人，視情節輕重追究其法律責任。</p><p style='padding-left: 40px;'>2. 個人自我保護措施</p><p style='padding-left: 80px;'>請妥善保管您的帳號、密碼及任何個人資料，切勿將個人資料提供給任何人，尤其是密碼。提醒您於登入本網站所提供之各項服務之網頁後，在離開本網站之前，務必登出(Logout)帳號。若您使用共用或公共電腦（如：圖書館、電腦教室等），切記要關閉瀏覽器視窗，以防止他人讀取您的個人資料並保障您的權益。</p><p>五、 資通安全及隱私權政策修訂</p><p style='padding-left: 40px;'>本網站將因應社會環境、法令規定及科技技術之變遷，不定時修訂本資訊通安全及隱私權政策聲明，並公告於本網站，以維護您瀏覽網站的安全及相關權益，並落實保障網路安全的立意。</p><p>六、 教育部個人資料保護聯絡窗口</p><p style='padding-left: 40px;'>連絡電話：(03)5715-131#78806 何先生</p>"
    }
  },
  created() {
    this.actionView = this.$route.params.action;
    // console.log(this.$route.params.action)

    this.typeAction = this.$route.params.action
    // console.log(this.typeAction)
  },
  mounted () {
    // console.log(this.$route.params.action)
    this.typeAction = this.$route.params.action
    // console.log(this.typeAction)
  },
  methods: {
    submitForm(){
      //console.log(this.ruleForm);
      this.$refs['ruleForm'].validate( valid => {
      if(valid && this.law == '1'){
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
            // console.log("寫入成功");
            // console.log(response.data);
            this.showSnackbar('註冊成功，請重新登入。', '#69917a');
            setTimeout(() => {
              this.$router.push('/');
            },2000)
          })
          .catch(err => {
            // console.log(err);
            if(err.response.status === 403){
              if(err.response.data.message.email){
                this.showSnackbar('此Email已被使用過，請登入或使用另一組Email註冊。', '#bd7373');
              }else{
                this.showSnackbar('發生錯誤，請聯繫管理員。', '#bd7373');
              }
            }
          });
      } else if(valid && (this.law==null || this.law == '2')) {
        this.agree=true
        }
      });
    },
    resetForm(){
      // console.log("重置")
      name = '';
      email = '';
      password = '';
      checkPass = '';
      introduction = '';
      avator = '';
    },
    Selected(file){
      this.avatarFile = file;
      // console.log("收到檔案路徑");
      // console.log(this.avatarFile);
    },
    //alert
    showSnackbar(str, color) {
      this.snackbar = false;
      this.snackTxt = str;
      this.snackColor = color;
      this.snackbar = true;
    },
  },
}

</script>
<style lang="sass">
@import '@/assets/style.sass'

.reg
  .el-input__inner
    // border: 0 !important
    // box-shadow: 1px 1px 5px 2px #DEDEDE
  .el-textarea__inner
    // border: 0 !important
    // box-shadow: 1px 1px 5px 2px #DEDEDE
  //單選框
  .el-radio__inner
    border-radius: 2px !important
    &:hover
      border-color: black
  .el-radio__input.is-checked .el-radio__inner
    border-color: black
    background: black
  .el-radio__inner::after
    display: none
  .el-radio__input.is-checked+.el-radio__label
    color: black

  .el-dialog
    +smallcom
      width: 80%


</style>
<style lang="sass">
@import '@/assets/style.sass'


.reg
  .law_block
    
    .law
  .el-button
    +phone5
      padding: 10px
</style>
<style scoped lang="sass">
@import '@/assets/style.sass'
.law_button
  font-style: italic
  letter-spacing: 1.5px
  text-decoration: underline
  cursor: pointer
  width: 15%
  // +bb
  &:hover
    color: gray
  +com
    width: 20%
  +smallcom
    width: 30%
  +pad
    width: 25%
  +phone
    width: 100%
  
.reg
  // margin-left: 50px
  margin-top: -1vw
  // margin-right: 50px
  box-sizing: border-box
  padding: 5vw 5vw 300px 5vw !important
  width: 100%
  background-color: #EDEDEE
  +flexcolumn
  min-height: 60vw
  +com
    min-height: 70vw
  +smallcom
    min-height: 88vw
  +pad
    min-height: 127vw
  +phone
    min-height: 260vw
  +phone5
    min-height: 320vw

  .title
    // margin-left: 25%
    width: 100%
    text-align: center
    letter-spacing: 1.5px
    color: #777
    margin-bottom: 2vw
    +pad
      // margin-left: 5%
    +phone
      // margin-left: 0
  .formBlock
    width: 50%
    margin-left: 25%
    position: relative
    margin-top: 2vw
    +pad
      width: 90%
      margin-left: 5%
    +phone
      width: 90%
      margin-left: 0
    +phone5
      width: 100%
      margin-left: -5%
      margin-top: 5vw

    .put
      border: 0 !important
      box-shadow: 1px 1px 5px 2px #DEDEDE
      font-weight: bold
      color: black
      letter-spacing: 1.5px
      &:hover
        background-color: #333
        color: white
      &:active
        box-shadow: 0
        background-color: white
        color: black

        
    .delet
      border: 0 !important
      box-shadow: 0px 0px 5px 2px #DEDEDE
      letter-spacing: 1.5px
      font-weight: bold
      background-color: #EEE
      color: black
      &:hover
        background-color: #333
        color: white
      &:active
        box-shadow: 0
        background-color: white
        color: black





        


</style>

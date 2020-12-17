<template lang="pug">
.reg
  
  


</template>

<script>
export default {
  // components: {profileicon},
  data(){
    // var typeAction = '';
    // var validatePass = (rule, value, callback) => {
    //     if (value === '') {
    //       callback(new Error('請輸入密碼'));
    //     } else {
    //       if (this.ruleForm.checkPass !== '') {
    //         this.$refs.ruleForm.validateField('checkPass');
    //       }
    //       callback();
    //     }
    //   };
    // var validatePass2 = (rule, value, callback) => {
    //     if (value === '') {
    //       callback(new Error('請再次輸入密碼'));
    //     } else if (value !== this.ruleForm.pass) {
    //       callback(new Error('兩次輸入的密碼不一致!'));
    //     } else {
    //       callback();
    //     }
    //   };
    return {
      // tabArray: [
      //   {
      //     title: '收藏的文章'
      //   },
      //   {
      //     title: '報名的活動'
      //   },
      // ]
      // ruleForm:{
      //   pass: '',
      //   checkPass: '',

      // },
      // rules: {
      //   pass: [
      //       { validator: validatePass, trigger: 'blur' }
      //     ],
      //     checkPass: [
      //       { validator: validatePass2, trigger: 'blur' }
      //     ],
      // }
    }
    // methods: {

    // }

  },
  created() {
    setTimeout(() => this.$router.push('/profile'), 3000)
    //  console.log(this.$route.params.action)

    // this.typeAction = this.$route.params.action
    // setTimeout(() => this.$router.push(''))
    //  console.log(this.typeAction)
  },
  mounted () {
    //  console.log(this.$route.params.action)
    // this.typeAction = this.$route.params.action
    //  console.log(this.typeAction)
  }
}

</script>
<style scoped lang="sass">
@import '@/assets/style.sass'

.reg
  
          

</style>

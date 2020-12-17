<template lang="pug">
  .container
    .listApp
      v-card-title
        .card-title
        v-spacer
        v-text-field(
                    v-model="search"
                    append-icon="mdi-magnify"
                    single-line
                    hide-details
                    width="150px"
                    clearable
                    )
      v-data-table(
                  :no-data-text="'尚未報名任何活動。'"
                  :headers="headers"
                  :items="data"
                  :items-per-page="10"
                  :search="search"
                  )
        template(v-slot:item.status="{ item }")
          v-chip(:color="item.status.color" dark) {{item.status.msg}}
        template(v-slot:item.action="{ item }")
          v-btn(x-small
                fab
                color="cyan darken-1" 
                dark
                @click="editItem(item)"
                ) 
            v-icon mdi-pencil
      v-snackbar(
        v-model="snackbar"
        color="red darken-2"
      ) {{snackTxt}}
</template>

<script>
import { ListApplications, GetApplication } from '@/api/client/Application';

export default {
  data() {
    return {
      headers: [
        { text: '狀態', value: 'status', },
        { text: '排序', value: 'index', },
        { text: '活動日期', value: 'date', },
        { text: '活動名稱', value: 'applicationTitle', },
        { text: '所屬計劃', value: 'project', },
        { text: '操作', value: 'action', sortable: false},
      ],
      data: [],
      search: '',
      snackbar: false,
      snackTxt: '',
    };
  },
  methods: {
    ApiListApplications() {
      ListApplications()
        .then(response => {
          console.log('c9 c9 ',response.data);
          const d = response.data;
          let i = 0;
          for (i = 0; i < d.length; i++){
            const subData = {};
            let df = d[i].fields;
            if (typeof d[i].fields !== 'object') {
              df = JSON.parse(d[i].fields);
            }
            if(d[i].form.fields.actionType !== 4) {
              subData['status'] = this.statusName(d[i].status, df.status, d[i].form.fields.switch);
              subData['index'] = i + 1;
              subData['date'] = this.setLocalDate(d[i].form.event_from) + '　' + this.setLocalTime(d[i].form.event_from);
              subData['applicationTitle'] = d[i].form.title;
              subData['project'] = d[i].project.name;
              subData['action'] = '';
              subData['applicationID'] = d[i].id;
              subData['applicationFormID'] = d[i].form.id;
              this.data.push(subData);
            }
            
          }
          if(this.data.length > 0) {
            this.$emit('exist')
          }
        })
        .catch(err => {
          // console.log(err);
          // console.log(err.response.status);
          if (err.response.status === 401) {
            this.snackbar = false;
            this.snackTxt = '請先登入';
            this.snackbar = true;
            // setTimeout(() => {
            //   var url = window.location.href.split('/')[0] + '/'
            //   window.open(url, '_blank'); // 進入登入畫面(或開對話框進行登入)
            // }, 1000);
          }
        });
    },
    statusName(adminStatus, ClientStatus, formSwitch){
      // console.log(adminStatus + ' + ' + ClientStatus);
      let formMode = '';
      if (this.project === '美感教育平台 入口首頁') {
        formMode = '填報';
      } else {
        formMode = '報名';
      }

      if (!formSwitch){
        return { msg: formMode + '取消', color: 'black' };
      }
      if (adminStatus == 1) {
        if (ClientStatus == 1) {
          return { msg: formMode + '成功', color: 'green' };
        } else {
          return { msg: '取消中', color: 'orange' };
        }
      } else {
        if (ClientStatus == 1) {
          return { msg: formMode + '失敗', color: 'red' };
        } else {
          return { msg: '已取消', color: 'black' };
        }
      }
    },
    setLocalDate(day) {
      return new Date(day).toLocaleDateString();
    },
    setLocalTime(day) {
      let time = new Date(day).toLocaleTimeString('zh',{hour12: false}).slice(0,5);
      time = time.replace('24:', '00:');
      return time;
    },
    editItem(item) {
      const url = window.location.href.split('/')[0] + '/applicationForm/' + item.applicationFormID + '#/update/' + item.applicationID;
      window.open(url, '_blank');
    },
    
  },
  mounted() {
    
  },
  created() {
    this.ApiListApplications();
  },
};
</script>
<style lang="sass">
.listApp
  .text-start
    text-align: center
</style>
<style scoped lang="sass">
@import "@/assets/style.sass";
.container
  position: relative
  padding: 3vw 0
  margin-top: 2vw
  // padding: 0

.listApp
  font-weight: bold
  // margin-top: 6vw
  padding: 10px
  // border-radius: 10px
  background-color: #EBEBEB
  // border: 1px solid #AEAEAE
  // box-shadow: 0px 0px 5px 5px #EDEDEE

.card-title
  font-size: 24px
  font-weight: bold

.theme--light.v-data-table
  // box-shadow: 1px 1px 5px 3px #eaeaea
.v-data-table__empty-wrapper
  // display: none


</style>

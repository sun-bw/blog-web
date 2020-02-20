<template>
  <div class="timeline">
    <ul>
      <li v-for="(item,index) in data" :key="index" class="timeline-li">
        <div class="tl-vertical-line"></div>
        <div class="tl-circle"></div>
        <div v-if="index % 2 == 0">
          <div class="tl-content time dd">{{item.timelineTime}}</div>
          <div class="tl-content timecontent pp" style="top:-20px;">{{item.timelineContent}}</div>
        </div>
        <div v-if="index % 2 != 0">
          <div class="tl-content time pp">{{item.timelineTime}}</div>
          <div class="tl-content timecontent dd rightContent" style="top:-20px">{{item.timelineContent}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from '@/api/api'
  export default {
    data(){
      return{
        data:[],
      }
    },
    mounted(){
      this.findTimeline();
    },
    methods:{
      findTimeline(){
        axios.post('/timeline/findTimeline','').then(res => {
          this.data = res.data;
          // 进行时间降序排列
          this.data.sort((a,b) => {
            if(a.timelineTime > b.timelineTime){
              return -1;
            }else{
              return 1;
            }
          });
        })
      }
    }
  }
</script>
<style scoped>
.timeline{
  padding: 0 20%;
  margin-top: 100px;
  position: relative;
  z-index: 999;
}
.timeline-li{
  position:relative;
  height:90px;
  padding-bottom:20px;
  list-style:none;
  left:50%
}
.tl-vertical-line{
  border-left:2px solid #23b7e5;
  position:absolute;
  height:80px;
  left:1%;
  margin-top:20px;
}
.tl-circle{
  border-radius:50%;
  background-color: #23b7e5;
  height:12px;
  width:12px
}
.tl-content{
  height:50px;
  line-height:50px;
  position: absolute;
  font-size:14px;
}
.timecontent{
  background:#23b7e5;
  min-width:500px;
  padding: 0 15px;
  color: #ffffff;
}
.time{
  top:-20px;
  width:100px;
  text-align:center;
  
}
.pp{
  margin-left:20px;
}
.dd{
  right:102%;
}
.rightContent{
  display: flex;
  justify-content: flex-end;
}
</style>

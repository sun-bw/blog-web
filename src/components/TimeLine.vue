<template>
  <div style="padding: 0 20%;margin-top: 100px">
    <el-timeline>
      <el-timeline-item placement="top" v-for="item in data" :key="item.id" :timestamp="item.timelineTime">
        <el-card>
          <p>{{item.timelineContent}}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
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

</style>

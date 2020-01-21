<template>
  <div style="padding: 0 20%;margin-top: 100px">
    <el-timeline>
      <el-timeline-item placement="top" v-for="item in data" :key="item.id" :timestamp="item.timelineTime">
        <el-card>
          <!-- <h4>更新</h4> -->
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
          console.log(res)
          this.data = res.data
        })
      }
    }
  }
</script>
<style scoped>

</style>

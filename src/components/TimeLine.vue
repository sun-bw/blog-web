<template>
  <div class="timeline">
    <ul>
      <li class="tl-header" v-for="(item,index) in data" :key="index">
        <h2 class="btn">{{item.year}}</h2>
        <div class="tl-body" v-for="(item1,index1) in item.list" :key="index1">
          <li class="tl-item">
            <div class="tl-wrap">
              <span class="tl-date">{{item1.date}}</span>
              <h3 class="tl-content">
                <span class="arrow-info">{{item1.content}}</span>
              </h3>
            </div>
          </li>
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
          // 进行时间降序排列
          res.data.sort((a,b) => {
            if(a.timelineTime > b.timelineTime){
              return -1;
            }else{
              return 1;
            }
          });
          // 遍历返回数组，拆分时间
          for(var [index,value] of res.data.entries()){
            var a = value.timelineTime.split('-')
            value.year = a[0] + '-' + a[1]
            value.date = a[2]
          }
          // 进行重构数组，
          // 相同年月的数组进行合并，合并后新增数据
          // 一个数组存在元素为 日期，内容，id
          var map={};
          var list = [];
          for(var i=0;i<res.data.length;i++){
              var ai = res.data[i]
              // !map[ai.year] 在map存在ai.year的值时，判断为false
              if(!map[ai.year]){
                  console.log(map[ai.year])
                  list.push({
                      // id:ai.id,
                      year:ai.year,
                      list:[{date:ai.date,content:ai.timelineContent}]
                  })
                  map[ai.year] = ai.year;
              }else{
                  for(var j=0;j<list.length;j++){
                      var dj = list[j]
                      if(dj.year == ai.year){
                          dj.list.push({date:ai.date,content:ai.timelineContent})
                          break;
                      }
                  }
              }
              
          }
          this.data = list;
          console.log(this.data)
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
  z-index: 998;
}
</style>

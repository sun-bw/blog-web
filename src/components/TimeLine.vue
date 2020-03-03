<template>
  <div class="timeline">
    <ul class="timeline-content" v-for="(item,index) in data" :key="index">
      <li class="tl-header" >
        <h2 class="btn">{{item.year}}</h2>
      </li>
      <div class="tl-body" v-for="(item1,index1) in item.list" :key="index1">
          <li class="tl-item">
            <div class="tl-wrap">
              <span class="tl-date">{{item1.date}}</span>
              <div class="triangle"></div>
              <h3 class="tl-content">
                <span class="arrow arrow-info">{{item1.content}}</span>
              </h3>
            </div>
          </li>
      </div>
    </ul>
    <div class="tl-start">开始</div>
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
            value.year = a[0] + '年' + a[1] + '月'
            value.date = a[2] + '日'
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
.timeline-content{
  padding: 0;
  margin: 0;
}
/* 头部年月 */
.tl-header{
  display: block;
  width: 12em;
  margin-right: 2px;
  margin-left: 2px;
  text-align: center;
}
.btn{
  display: inline-block;
  font-size: 12px;
  padding:10px 10px;
  border-radius: 50px;
  color: #fff!important;
  background-color: #23b7e5;
  border-color: #23b7e5;
  margin:0;
}
/* 内容 */
.tl-item{
  display: block;
}
.tl-wrap{
  border-color: #23b7e5;
  display: block;
  padding: 0px 0px 0px 20px;
  margin-left: 6em;
  border-style: solid;
  border-width: 0 0 0 4px;
}
/* 圆圈 */
.tl-wrap:before{
    position: relative;
    top: 42px;
    float: left;
    width: 10px;
    height: 10px;
    margin-left: -29px;
    background: #edf1f2;
    border-color: inherit;
    border-style: solid;
    border-width: 3px;
    border-radius: 50%;
    content: "";
    box-shadow: 0 0 0 4px #f0f3f4;
}
/* 日期 */
.tl-date{
    position: relative;
    top: 39px;
    display: block;
    float: left;
    width: 4.5em;
    margin-left: -7.5em;
    text-align: right;
}
/* 内容 */
.tl-content{
    position: relative;
    display: inline-block;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 15px;
    padding-left: 15px;
    background: #23b7e5;
    left: 10px;
    top:-10px;
    color: #fff;
}
.triangle{
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-right: 10px solid red;
  border-bottom: 10px solid transparent;
  position: relative;
  top: 40px;
}
.tl-start{
  border-radius: 10px;
  background: #fff;
  width: 70px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  position: relative;
  left: 63px;
}
</style>

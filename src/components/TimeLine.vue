<template>
  <div class="timeline">
    <Infoleft></Infoleft>
    <div class="timelineInfo">
      <ul class="timeline-content" v-for="(item,index) in data" :key="index">
        <li class="tl-header" >
          <h2 class="btn" :style="{background:index%6 == 1 ? '#333' : 
                                              index%6 == 2 ? '#fad733' :
                                              index%6 == 3 ? '#f05050' :
                                              index%6 == 4 ? '#111' :
                                              index%6 == 5 ? '#7266ba' : '#27c24c'}" :id="index">{{item.year}}</h2>
        </li>
        <div class="tl-body" v-for="(item1,index1) in item.list" :key="index1">
          <li class="tl-item">
            <div class="tl-wrap" :style="{borderColor:index%6 == 1 ? '#333' : 
                                                        index%6 == 2 ? '#fad733' :
                                                        index%6 == 3 ? '#f05050' :
                                                        index%6 == 4 ? '#111' :
                                                        index%6 == 5 ? '#7266ba' : '#27c24c'}">
              <span class="tl-date">{{item1.date}}</span>
              <div class="triangle" :style="{borderRight:index%6 == 1 ? '10px solid #333' : 
                                                        index%6 == 2 ? '10px solid #fad733' :
                                                        index%6 == 3 ? '10px solid #f05050' :
                                                        index%6 == 4 ? '10px solid #111' :
                                                        index%6 == 5 ? '10px solid #7266ba' : '10px solid #27c24c'}"></div>
              <h3 class="tl-content" :style="{background:index%6 == 1 ? '#333' : 
                                                        index%6 == 2 ? '#fad733' :
                                                        index%6 == 3 ? '#f05050' :
                                                        index%6 == 4 ? '#111' :
                                                        index%6 == 5 ? '#7266ba' : '#27c24c'}">
                <span class="arrow arrow-info">{{item1.content}}</span>
              </h3>
            </div>
          </li>
        </div>
      </ul>
      <div class="tl-start">开始</div>
    </div>
  </div>
</template>
<script>
import Infoleft from './Infoleft'
import axios from '@/api/api'
  export default {
    components:{
      Infoleft
    },
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
  margin: 60px auto 0 auto;
  position: relative;
  z-index: 997;
  display: flex;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  padding-top: 20px;
}
.timelineInfo{
  background: #fff;
  width: 75%;
  border-radius: 20px;
  padding: 20px;
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
    animation: fadeInLeft 1s both;
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
    border-radius: 5px ;
    animation: fadeInRight 1s both;
}
.triangle{
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-right: 10px solid red;
  border-bottom: 10px solid transparent;
  position: relative;
  top: 40px;
  animation: fadeInRight 1s both;
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
@-webkit-keyframes fadeInRight {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(100%,0,0);
        transform: translate3d(100%,0,0)
    }

    to {
        opacity: 1;
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0)
    }
}

@keyframes fadeInRight {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(100%,0,0);
        transform: translate3d(100%,0,0)
    }

    to {
        opacity: 1;
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0)
    }
}

.fadeInRight {
    -webkit-animation-name: fadeInRight;
    animation-name: fadeInRight
}
.fadeInLeft{
    -webkit-animation-name: fadeInLeft;
    animation-name: fadeInLeft
}
@keyframes fadeInLeft{
    0% {
        opacity: 0;
        -webkit-transform: translate3d(-100%,0,0);
        transform: translate3d(-100%,0,0)
    }

    to {
        opacity: 1;
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0)
    }
}
</style>

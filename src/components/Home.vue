<template>
  <div class="home">
    <div class="section1">
      <!-- 动态粒子插件 -->
      <vue-particles color="#dedede" :particleOpacity="0.7" :particlesNumber="60" shapeType="circle" 
        :particleSize="4" linesColor="#fff" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" 
        :linesDistance="150" :moveSpeed="2" :hoverEffect="true" hoverMode="grab" :clickEffect="true" 
        clickMode="push" class="particles">
      </vue-particles>
      <div class="content">
        <p>一个初入江湖de</p>
        <p>伪文艺de程序员</p>
      </div>
      <div class="downcontent" @click="scrollToDown">
        <i class="el-icon-arrow-down downPic"></i>
      </div>
    </div>
    <!-- 热门文章 -->
    <div class="section2" ref="section2">
      <div style="text-align:center">
        <div>
          <h1 style="font-size: 32px;padding-bottom: 30px;font-weight: 500;">热门文章</h1>
          <p>12312312</p>
        </div>
      </div>
      <div class="article">
        <div v-for="item in data" :key="item.id" class="content" @click="articleDetails(item.id)">
          <div class="title">{{item.title}}</div>
          <div class="article-content">{{item.content}}</div>
          <div class="article-footer">
            <div class="line"></div>
            <div class="info">
              <div class="info-content"><i class="el-icon-date articleImg"></i>{{item.createTime}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from '../api/api'
  export default {
    data(){
      return{
        data:[],
      }
    },
    mounted(){
      this.selectBrowseMax();
    },
    methods:{
      // 平滑滚动
      scrollToDown(){
          this.$refs.section2.scrollIntoView({behavior: "smooth"})
      },

      // 查询访问量最多的三条文章
      selectBrowseMax(){
        axios.post('/article/selectBrowseMax','').then(res => {
          console.log(res)
          this.data = res.data
        })
      }
    },
  }
</script>
<style scoped>
  .section1{
    background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(../../static/img/homeImg.jpg);
    height: 100vh;
    background-size: 100% 100%;
    background-attachment:fixed;
  }
  @media screen and (max-width:800px){
    .section1{
      background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(../../static/img/computer2.jpg);
    }
    .downcontent{
      display: none;
    }
  }
  .section1 .content{
    color: #FFFFFF;
    width: 150px;
    position: absolute;
    top: 40%;
    left: 50%;
    margin-left: -70px;
    font-size: 20px;
  }
  .particles{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .downcontent{
    position: absolute;
    bottom:10px;
    left: 48%;
    z-index: 998;
  }
  .downPic{
    font-size: 50px;
    color:#FFFFFF;
  }
  .section2{
    padding: 100px 0;
    height: 100vh;
  }
  .section2 h1::after{
    position: absolute;
    width: 50px;
    height: 2px;
    content: "";
    left: 50%;
    margin-left: -25px;
    bottom: -190px;
    background: #00c2ff;
  }
  .section2 .article{
    margin: auto;
    width: calc(1280px - 320px);
  }
  .section2 .content{
    background: #ffffff;
    margin-top: 20px;
    padding: 20px 20px;
    box-shadow: 10px 10px 5px #c0c4cc;
    /* cursor:pointer; */
    height: 160px;
    border-radius: 15px;
    position: relative;
    animation: zoomIn 1s both;
  }
  .article-content{
    color:#98a6ad;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:3;
    margin:10px 0
  }
  .section2 .title{
    font-size: 20px;
    color:#333333
  }
  .section2 .article-footer{
    position:absolute;
    bottom: 10px;
    width: calc(100% - 40px);
  }
  .section2 .line{ 
    border-bottom:1px solid #98a6ad
  }
  .section2 .info{
    display:flex;
    color:#98a6ad;
    padding-top:10px;
    /* position: absolute;
    bottom: 10px; */
  }
  .section2 .info-content{
    margin-left: 20px;
  }
</style>
<style>
  #menu-content{
    background-color: azure;
  }
</style>

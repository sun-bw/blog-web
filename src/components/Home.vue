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
      <div class="hotArticle" id="hotArticle">
        <div>
          <h1>热门文章</h1>
        </div>
        <div style="display:flex" class="">
          <p style="margin:auto;max-width:655px">想告诉你，这世间美好仍有许多；朝晨簇新的阳光，微风吹起的素衣一角，春天新生的泥土，冬天温暖的被窝，深巷青瓦梅花，庭前如盖琵琶。蓄着故事的篝火，写满月亮的诗词，女孩儿脸颊的绯红，少年嘴角的梨涡，还有我。</p>
        </div>
      </div>
      <div class="article" id="article">
        <div v-for="item in data" :key="item.id" class="content" @click="articleDetails(item.id)">
          <div class="title">{{item.title}}</div>
          <div class="article-content">{{item.content}}</div>
          <div class="article-footer">
            <div class="line"></div>
            <div class="info">
              <div class="info-content"><i class="el-icon-date articleImg"></i>{{item.createTime}}</div>
              <div @click="readMore(item.id)" class="readMore">阅读更多</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--关于我，时间轴  -->
    <div class="section3">
      <div class="content">
        <ul id="section3Item">
          <li class="fadeInLeft">
            <router-link :to="{path:'/TimeLine'}">时间轴</router-link>
          </li>
          <li class="fadeInRight">
            <router-link :to="{path:'/AboutMe'}">关于我</router-link>
          </li>
        </ul>
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
        a:document.documentElement.scrollTop
      }
    },
    computed:{},
    watch:{},
    mounted(){
      this.selectBrowseMax();
       //监听滚动条
        window.addEventListener('scroll',this.handleScroll,true)
    },
    // 销毁监听滚动条
    destroyed(){
        window.removeEventListener('scroll', this.handleScroll,true);
    },
    methods:{
      // 平滑滚动,到页面section2的位置
      scrollToDown(){
          this.$refs.section2.scrollIntoView({behavior: "smooth"})
          this.selectBrowseMax();
      },

      // 查询访问量最多的三条文章
      selectBrowseMax(){
        axios.post('/article/selectBrowseMax','').then(res => {
          this.data = res.data
        })
      },

      handleScroll(){
        // 卷去的高度+可是区域>当前元素距离顶部的距离，代表元素在可是区域内
        // 当前元素距离顶部的距离
        var articleTop = document.getElementById('article').offsetTop;
        // 可视区域
        var windowHeight = window.innerHeight;
        // 卷去的高度
        var scrollHeight = document.documentElement.scrollTop;
        // 判断文章内容
        if(windowHeight + scrollHeight > articleTop){
          document.getElementById('article').style.display = 'block'
        }else{
          document.getElementById('article').style.display = 'none'
        }
        // 热门文章
        var hotArticleTop = document.getElementById('hotArticle').offsetTop;
        if(windowHeight + scrollHeight > hotArticleTop){
          document.getElementById('hotArticle').style.display = 'block'
        }else{
          document.getElementById('hotArticle').style.display = 'none'
        }

        // 判断时间走关于我显示
        var aboutMeTop = document.getElementById('section3Item').offsetTop;
        if(windowHeight + scrollHeight > aboutMeTop){
          document.getElementById('section3Item').style.display = 'block'
        }else{
          document.getElementById('section3Item').style.display = 'none'
        }
      },

      // 阅读更多
      readMore(id){
        this.$router.push({
          name:'NoteDetails',
          params:{id:id}
        });
      }
    },
  }
</script>
<style lang="less" scoped>
.animationMining(@fade){
  animation: @fade 1s both;
}
.section1Mining(@t:40%,@l:50%,@w:150px){
  position: absolute;
  top: @t;
  left: @l;
  width: @w;
}
  .section1{
    background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(../../static/img/homeImg.jpg);
    height: 100vh;
    background-size: 100% 100%;
    background-attachment:fixed;
    .content{
      color: #FFFFFF;
      margin-left: -70px;
      font-size: 20px;
      .section1Mining();
    }
    .particles{
      .section1Mining(0,0,100%);
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
  }
  @media screen and (max-width:800px){
    .section1{
      background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(../../static/img/computer2.jpg);
    }
    .downcontent{
      display: none;
    }
  }

  .section2{
    padding: 80px 0 0;
    min-height: 100vh;
    h1{
      font-size: 32px;
      padding-bottom: 30px;
      font-weight: 500;
      &::after{
        position: absolute;
        width: 50px;
        height: 2px;
        content: "";
        left: 50%;
        margin-left: -25px;
        /* bottom: 45px; */
        top:70px;
        background: #00c2ff;
      }
    }
    .hotArticle{
      /* animation:fadeInDown 1s both; */
      // animation: fadeInDown 1s both;
      .animationMining(fadeInDown);
      text-align: center
    }
    .article{
      margin: auto;
      width: calc(1280px - 320px);
    }
    .content{
      background: #ffffff;
      margin-top: 20px;
      padding: 20px 20px;
      box-shadow: 10px 10px 5px #c0c4cc;
      /* cursor:pointer; */
      height: 160px;
      border-radius: 15px;
      position: relative;
      .animationMining(fadeInUp);
      /* animation-fill-mode: both;
      animation-duration: 1s; */
      visibility: visible
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
    .title{
      font-size: 20px;
      color:#333333
    }
    .article-footer{
      position:absolute;
      bottom: 10px;
      width: calc(100% - 40px);
    }
    .line{ 
      border-bottom:1px solid #98a6ad
    }
    .info{
      display:flex;
      color:#98a6ad;
      padding-top:10px;
      /* position: absolute;
      bottom: 10px; */
      justify-content: space-between;
    }
    .readMore{
      color: #29b6f6;
    }
  }

  .section3{
    background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(../../static/img/home-image.jpg);
    background-position: center;
    /* 图片浮动 */
    background-attachment: fixed;
    background-repeat: no-repeat;
    height: 300px;
    display: flex;
    .content{
      margin:auto;
      color:#fff;
      display:flex
    }
    li{
      display: inline-block;
      width: 200px;
      height: 46px;
      margin: 10px;
      border: 1px solid #b4b4b4;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-transition: all .6s linear;
      transition: all .6s linear;
      position: relative;
      text-align: center;
      overflow: hidden;
      /* animation: fadeInLeft 1s both; */
      /* animation-name: fadeInLeft; */
      &:after {
        content: '';
        width: 0;
        background-color: #6bc30d;
        height: 46px;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 0;
        -webkit-transition: all .6s linear;
        transition: all .6s linear;
      }
      &:hover:after{
        width: 100%;
      }
    }
    a{
      display: block;
      line-height: 26px;
      padding: 10px;
      text-align: center;
      color: #fff;
      text-decoration: none;
      font-size: 14px;
      -webkit-transition: all .6s linear;
      transition: all .6s linear;
      position: relative;
      z-index: 1
    }
  }
  .fadeInLeft{
    .animationMining(fadeInLeft)
  }
  .fadeInRight{
    .animationMining(fadeInRight)
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
  @keyframes fadeInLeft {
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
@keyframes fadeInUp
  {
    0% {
        opacity: 0;
        -webkit-transform: scale3d(.3,.3,.3);
        transform: scale3d(.3,.3,.3)
    }
    50% {
        opacity: 1
    }
  }
  @keyframes fadeInDown {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0,-100%,0);
        transform: translate3d(0,-100%,0)
    }

    to {
        opacity: 1;
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0)
    }
  }
</style>
<style>
  #menu-content{
    background-color: azure;
  }
</style>

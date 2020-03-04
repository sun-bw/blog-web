<template>
  <div class="aboutMe">
    <!-- 头像 -->
    <infoleft></infoleft>
    <div class="content">
      <!-- 个人信息 -->
      <div class="personInfo">
        <img src="../../static/img/personInfo.png">
        个人信息
      </div>
      <div class="aoboutMe">
        <p>墨染。</p>
        <div class="contentInfo">
          <p>一个初入江湖伪文艺的95后程序员。</p>
          <p>出生于吉林某座美丽的小城。</p>
          <p>喜欢有趣的事，有趣的人。</p>
          <p>喜欢优美的文字。</p>
          <p>喜欢简简单单。</p>
        </div>
      </div>
      <!-- 个人技能 -->
      <div class="personInfo">
        <img src="../../static/img/personSkill.png">
        个人技能
      </div>
      <div class="aoboutMe">
        <p>前端：</p>
        <div class="contentInfo">
          <p>1、熟练使用html(5)、css(3)、Vue(全家桶)、javascript、element-ui、webpack</p>
          <p>2、了解less</p>
        </div>
        <p>后端：</p>
        <div class="contentInfo">
          <p>1、了解Java，使用Spring Boot框架进行简单开发</p>
          <p>2、了解Maven</p>
        </div>
        <p>数据库：</p>
        <div class="contentInfo">
          <p>1、熟练使用MYSQL数据库</p>
        </div>
        <p>其他：</p>
        <div class="contentInfo">
          <p>1、熟悉Git，IDEA、VScode等开发工具</p>
          <p>2、了解Docker、Nginx</p>
        </div>
      </div>
      <div class="personInfo">
        <img src="../../static/img/telphone.png">
        联系方式
      </div>
      <div class="aoboutMe">
        <p>E-Mail：857153966@qq.com</p>
      </div>
    </div>
  </div>
</template>
<script>
import infoleft from './Infoleft'
export default {
  components:{
    infoleft
  },
  data(){
    return{

    }
  },
  methods:{

  },
}
</script>
<style scoped>
.aboutMe{
  margin:60px auto 20px auto;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
}
.content{
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px 10px;
  width: 75%;
  /* height: calc(100vh - 200px); */
  /* overflow-y: auto; */
  z-index: 998;
  position: relative;
}
.personInfo{
  border-bottom: 1px solid #e5e5e5;
  padding: 13px 10px;
  font-size: 16px;
}
.aoboutMe{
  padding: 0px 20px;
  font-size: 12px;
}
.contentInfo{
  margin-left: 20px;
}
/*媒体查询*/
@media screen and (max-width: 13660px){
    .personNote{
        width: 1280px;
    }
    .editor{
        width: 1280px;
    }
}
@media screen and (max-width:1920px){
    .personNote{
        width:1280px;
    }
    .editor{
        width: 1280px;
    }
}
@media screen and (max-width:1680px){
    .personNote{
        width:1280px;
    }
    .editor{
        width: 1280px;
    }
    
}
@media screen and (max-width:1366px){
    .personNote{
        width:1066px;
    }
    .editor{
        width: 1066px;
    }
}
@media screen and (max-width:1280px){
    .personNote{
        width:980px;
    }
    .editor{
        width: 980px;
    }
}
@media screen and (max-width:1024px){
    .personNote{
        width:724px;
    }
    .editor{
        width: 724px;
    }
}
@media screen and (max-width:800px){
    .personNote{
        width:100%;
    }
    .editor{
        width: 100%;
    }
}
</style>
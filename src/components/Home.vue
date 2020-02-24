<template>
  <div class="home">
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
  </div>
</template>
<script>
  import axios from '../api/api'
  export default {
    data(){
      return{

      }
    },
    mounted(){

    },
    methods:{
      haha(){
        axios.post('/api/haha',{}).then(res => {
          console.log(res)
        })
      }
    },
  }
</script>
<style scoped>
  .home{
    background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(../../static/img/homeImg.jpg);
    height: 100vh;
    background-size: 100% 100%;
    background-attachment:fixed;
  }
  @media screen and (max-width:800px){
    .home{
      background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(../../static/img/computer2.jpg);
    }
  }
  .home .content{
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
</style>
<style>
  #menu-content{
    background-color: azure;
  }
</style>

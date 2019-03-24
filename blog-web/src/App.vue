<template>
  <div id="app">
    <!--头部-->
    <div class="container-header">
          <router-link to="/">首页</router-link>

          <router-link to="/a">11</router-link>

          <router-link to="/b">22</router-link>

    </div>
    <!--中间-->
    <div class="container-center">
      <router-view/>
    </div>
    <!--尾部-->
    <div class="container-footer">
      页面尾部
    </div>
  </div>
</template>

<script>
  export default {
    name:'App',
    data(){
      return{

      }
    },
    methods:{
      handleClick(){

      }
    }
  }
</script>

<style>
  .container-header{
    position: fixed;
    top: 0;
    width: 100%;
    height: 5vh;
    background: yellow;
  }
  .container-center{
    width: 100%;
    margin-top: 5vh;
    background: blue;
    height: 100vh;
  }
  .container-footer{
    width: 100%;
    height: 5vh;
    background: yellow;
  }
</style>

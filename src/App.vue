<template>
  <div>
    <div>
      <blogHeader></blogHeader>
      <!--页面内容，配置路由-->
      <el-main class="app-main">
        <!-- 存在<keep-alive>的话，路由跳转后页面不会重新加载 -->
        <!-- <keep-alive> -->
          <router-view/>
        <!-- </keep-alive> -->
      </el-main>
      <!--页面尾部-->
      <blogFooter></blogFooter>
    </div>
  </div>
</template>

<script>
import blogHeader from './Header'
import blogFooter from './Footer'
export default {
  name: 'App',
  components:{
    blogHeader,
    blogFooter
  },
  data(){
    return{

    }
  },
  methods:{
    
  },

}
</script>
<style>
  /*去掉body的magin*/
  body{
    margin: 0px;
    cursor: url('../static/img/7de5437.png'), auto;
  }
  .el-main{
    padding: 0px !important;
  }
  .app-main{
    min-height: 100vh;
    background: #eef2f6;
  }
</style>

<template>
  <div>
    <el-container>
      <!--页面头部-->
      <el-header id="header-content">
        <el-menu :router="true" :default-active="activeIndex" mode="horizontal" background-color="#1c2327"
                 text-color="#fff" active-text-color="#ffd04b" id="menu-content">
          <el-menu-item index="/">
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="/TimeLine">
            <span slot="title">时间轴</span>
          </el-menu-item>
          <el-menu-item index="/AboutMe">
            <span slot="title">关于我</span>
          </el-menu-item>
        </el-menu>
      </el-header>
      <!--页面内容，配置路由-->
      <el-main>
        <keep-alive>
          <router-view/>
        </keep-alive>
      </el-main>
      <!--页面尾部-->
      <el-footer>
        123123
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      activeIndex:'/'
    }
  }
}
</script>

<style scoped>

</style>
<style>
  #header-content{
    padding: 0px!important;
  }
  /*去掉body的magin*/
  body{
    margin: 0px;
  }
  /*导航栏样式*/
  #menu-content{
    display: flex;
    justify-content: flex-end;
    padding: 0 20%;
  }
</style>

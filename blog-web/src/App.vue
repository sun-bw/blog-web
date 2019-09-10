<template>
  <div>
    <el-container>
      <!--页面头部-->
      <el-header class="header-content">
        <div class="blog-name">墨染</div>
        <el-menu :router="true" :default-active="activeIndex" mode="horizontal" background-color="transparent"
                 text-color="#fff" active-text-color="#ffd04b" id="menu-content">
          <el-menu-item index="/">
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="/TimeLine">
            <span slot="title">个人笔记</span>
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
        页面尾部
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
  .header-content{
    padding: 0px!important;
    position: fixed;
    /*固定定位*/
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    z-index: 999;
  }
  /*名字样式*/
  .blog-name{
    color: #FFFFFF;
    width: 140px;
    position: absolute;
    top: 40%;
    left: 20%;
  }
</style>
<style>
  /*去掉body的magin*/
  body{
    margin: 0px;
  }
  .el-main{
    padding: 0px;
  }
  /*导航栏样式*/
  #menu-content{
    display: flex;
    justify-content: flex-end;
    padding: 0 20%;
  }
  .el-menu.el-menu--horizontal{
    border-bottom:0px
  }

</style>

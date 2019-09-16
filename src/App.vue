<template>
  <div>
    <el-container>
      <!--页面头部-->
      <el-header class="header-content">
        <div class="blog-name">墨染</div>
        <!--transparent-->
        <el-menu :router="true" :default-active="activeIndex" mode="horizontal" :background-color="menuBackgroundColor"
                 text-color="#fff" active-text-color="#ffd04b" id="menu-content">
          <el-menu-item index="/">
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="/PersonalNotes">
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
        <div style="height: 1000px"></div>
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
      activeIndex:'',
      menuBackgroundColor:'#000000',//菜单栏背景色
      routerName:'',//监听滚动条是，参数。用于判断当前位置是不是首页
    }
  },
  watch:{
    //监听路由
    //当路由为home时，菜单栏更改颜色为transparent
    //当为其他路由时，菜单栏为000000黑色
    $route(to,form){
      if(to.name === 'Home'){
        this.routerName = 'Home';
        this.menuBackgroundColor = 'transparent';
        if(document.documentElement.scrollTop > 100){
          this.menuBackgroundColor = '#000000'
        }
      }else {
        this.routerName = 'else';
        this.menuBackgroundColor = '#000000'
      }

      let path = to.path;
      this.setActiveIndex(path);
    }
  },
  mounted(){
    //监听滚动条
    window.addEventListener('scroll',this.handleScroll,true)
    //当刷新重新加载页面时，路由为
    if(window.location.pathname){
      this.setActiveIndex(window.location.pathname)
    }
  },
  methods:{
    //用于解决当前路由位置问题，刷新页面路由重置问题
    setActiveIndex(path){
      //截取路由上的/
      let pathArr = path.split('/');
      if(pathArr.length > 3){
        this.activeIndex = `/${pathArr[1]}/${pathArr[2]}`;
      }else {
        this.activeIndex = path;
      }
    },
    //滚动条方法
    handleScroll(){
      //判断当前位置是不是首页
      if(this.routerName === 'Home'){
        //当滚动条距离上面高度大于100时
        if(document.documentElement.scrollTop > 100){
          //更改导航栏颜色为黑色
          this.menuBackgroundColor = '#000000'
        }
        if(document.documentElement.scrollTop < 100){
          this.menuBackgroundColor = 'transparent'
        }
      }
    },
  },

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
    z-index: 999;
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

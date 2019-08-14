<template>
  <div>
    <el-container>
      <el-header>
        <el-menu :router="true" :default-active="activeIndex" mode="horizontal" class="el-menu-demo">
          <el-menu-item index="/">
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="/a">
            <span slot="title">aaaaaa</span>
          </el-menu-item>
          <el-menu-item index="/b">
            <span slot="title">bbbbbb</span>
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <keep-alive>
          <router-view/>
        </keep-alive>
      </el-main>
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
      activeIndex:''
    }
  }
}
</script>

<style>

</style>

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
import axios from './api/api'
export default {
  name: 'App',
  components:{
    blogHeader,
    blogFooter
  },
  data(){
    return{
      borwser:'',
    }
  },
  mounted(){
    this.findIp();
  },
  methods:{
    findIp(){
      // 获取访问设备
      var equipment = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      ? 'Mobile'
      : 'Desktop';
      if(equipment === 'Desktop'){
        this.browser = this.browser();
      }else{
        this.browser = this.isWechat();
        if(this.isWechat() === '其他'){
          this.browser = this.browser();
        }
      }
      axios.post('/Ip/findIp',{
        equipment:equipment,
        browser:this.browser,
      }).then(res => {
        console.log(res)
      })
    },

    // 获取浏览器方法
    browser(){
      var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
      var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
      var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
      var isEdge = userAgent.indexOf("Edge") > -1; //判断是否IE的Edge浏览器
      var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
      var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器
      var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器
      if(isOpera){
        return 'Opera浏览器'
      }
      if(isIE){
        return 'IE浏览器'
      }
      if(isEdge){
        return 'IE的Edge浏览器'
      }
      if(isFF){
        return 'Firefox浏览器'
      }
      if(isSafari){
        return 'Safari浏览器'
      }
      if(isChrome){
        return 'Chrome浏览器'
      }
    },

    // 判断是微信还是qq
    isWechat(){
      var ua = navigator.userAgent.toLowerCase();
      // 判断是否为微信访问
      if(ua.match(/MicroMessenger/i)=="micromessenger"||ua.match(/WeiBo/i) == "weibo"){
        return 'wechat';
        // 是否为Android qq的内置浏览器
      }else if(ua.indexOf('mobile mqqbrowser')>-1){
        return 'Android qq';
        // ios qq内置的浏览器
      }else if(ua.indexOf('iphone') > -1 || ua.indexOf('mac') > -1){
        if(ua.indexOf('qq') > -1){
          return 'ios qq';
        }
      }else{
        return '其他';
      }
    }
  }
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

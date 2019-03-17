<template>
  <div class="content-header">
    页面头部
    <ul>
      <li><router-link to="/test/a"></router-link></li>
      <li><router-link to="/test/b"></router-link></li>
      <router-view/>
    </ul>
  </div>
</template>
<script>
  export default {
    data(){
      return{

      }
    }
  }
</script>
<style scoped>
  .content-header{
    position: fixed;
    top: 0;
    width: 100%;
    height: 10vh;
    background: yellow;
  }
</style>

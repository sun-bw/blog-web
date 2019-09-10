<template>
  <div class="home">
    <div class="content">
      <p>一个初入江湖</p>
      <p>伪文艺程序员</p>
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
    height: 937px;
    background-size: 100% 100%;
    background-attachment:fixed;
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
</style>

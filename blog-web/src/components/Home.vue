<template>
  <div>
    <!--页面头部导航-->
    <contetn-header></contetn-header>
    <!--中间部分-->
    <div class="content-center">
      爱仕达多撒大所大1111
    </div>
    <!--页面底部-->
    <contetn-footer></contetn-footer>
  </div>
</template>
<script>
  import contetnHeader from './Header'
  import contetnFooter from './Footer'
  import axios from '../api/api'
  export default {
    name:'home',
    components:{
      contetnHeader,
      contetnFooter
    },
    data(){
      return{

      }
    },
    mounted(){
      axios.get('/api/wikisecond/lemmasecond?lemmaId=270208',{})
        .then(res => {
          console.log(res)
        })
    },
    methods:{

    }
  }
</script>
<style scoped>
.content-center{
  width: 100%;
  margin-top: 5vh;
  background: blue;
  height: 100vh;
}
</style>

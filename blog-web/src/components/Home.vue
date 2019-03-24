<template>
  <div>
    <div class="content-center">
      爱仕达多撒大所大1111
    </div>
  </div>
</template>
<script>
  import axios from '../api/api'
  export default {
    name:'home',
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

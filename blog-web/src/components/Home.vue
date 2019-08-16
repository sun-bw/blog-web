<template>
  <div style="padding: 0 20%">
    这是首页呀
    <div>1231</div>
    <el-button @click="haha">haha</el-button>
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

</style>

<template>
  <div>
    <div class="header"></div>
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
<style>

</style>

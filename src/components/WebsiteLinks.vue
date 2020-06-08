<template>
    <div id="websiteLink">
        <Infoleft></Infoleft>
        <div class="websiteInfo">

        </div>
    </div>
</template>
<script>
import Infoleft from './Infoleft'
export default {
    data(){
        return{

        }
    },
    components:{
        Infoleft
    },
    methods:{

    }
}
</script>
<style scoped>
#websiteLink{
    margin: 60px auto 0 auto;
    position: relative;
    z-index: 997;
    display: flex;
    justify-content: center;
    max-width: 1200px;
    width: 100%;
    padding-top: 20px;
}
.websiteInfo{
    background: #fff;
    width: 75%;
    border-radius: 20px;
    padding: 20px;
}
</style>


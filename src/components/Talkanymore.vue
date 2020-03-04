<template>
    <div class="talkAnymore">
        <Infoleft></Infoleft>
        <div class="talk-content"></div>
    </div>
</template>
<script>
import Infoleft from './Infoleft'
export default {
    components:{
        Infoleft
    },
    data(){
        return{

        }
    },
    methods:{

    }
}
</script>
<style scoped>
.talkAnymore{
    margin: 60px auto 0 auto;
    max-width: 1200px;
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 20px;
}
.talk-content{
    width: 75%;
    background: #fff;
    border-radius: 20px;
}
</style>

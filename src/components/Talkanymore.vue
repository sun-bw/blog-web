<template>
    <div class="talkAnymore">
        <Infoleft></Infoleft>
        <div class="talk-content">
            <div v-for="(item,index) of data" :key="index" style="border-bottom:1px solid #98a6ad;width:100%">
                <div class="content">{{item.sayContent}}</div>
                <img src="../../static/img/2.jpg" style="width:100%">
                <div style="display:flex">
                    <div style="flex-grow: 1;">{{item.createTime}}</div>
                    <div style="flex-grow: 1;">
                        <img src="../../static/img/like.png">
                    </div>
                    <div style="flex-grow: 1;">
                        <i class="el-icon-chat-dot-square"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Infoleft from './Infoleft'
import axios from '../api/api.js'
export default {
    components:{
        Infoleft 
    },
    data(){
        return{
            data:[],
        }
    },
    mounted(){
        this.findTalk();
    },
    methods:{
        // 查询
        findTalk(){
            axios.post("/say/findSayContent","").then(res => {
                console.log(res)
                this.data = res.data
            })
        }
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
    padding: 20px 20px;
}
.content{
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    font-size: 11px;
    color: #999999;
    line-height: 25px;
    letter-spacing: 1px;
    text-align: right;
}
</style>

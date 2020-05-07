<template>
    <div class="talkAnymore">
        <Infoleft></Infoleft>
        <div class="talk-content">
            <!-- <div v-for="(item,index) of data" :key="index" class="talk-item">
                <div class="content">{{item.sayContent}}</div>
                <img :src="item.imageUrl" class="talk-img">
                <div class="operating">
                    <div class="operating-content operating-item">{{item.createTime}}</div>
                    <div class="operating-content operating-item" @click="likeClick(item.id)">
                        <img src="../../static/img/like.png" style="width:16px">
                    </div>
                    <div class="operating-content" @click="likeClick(item.id)">
                        <i class="el-icon-chat-dot-square"></i>
                    </div>
                </div>
            </div> -->
            <div>😜，我还没想好怎么写!</div>
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
                this.data = res.data
            })
        },

        // 点赞
        likeClick(){
            this.$message({
                type:'warning',
                message:'我还没写接口！'
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
.talk-item{
    /* border-bottom:1px solid #98a6ad; */
    width:100%;
    margin-bottom:20px
}
.talk-img{
    width: 100%;
}
.operating{
    display:flex;
    border: 1px solid #98a6ad;
    text-align: center;
}
.operating-content{
    flex-grow: 1;
}
.operating-item{
    border-right:1px solid #98a6ad
}
</style>

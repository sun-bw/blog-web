<template>
    <div id="websiteLink">
        <Infoleft></Infoleft>
        <div class="websiteInfo">
            <el-button @click="addWebsiteLink">链接申请</el-button>
            <div class="websiteContent">
                <div v-for="(item,index) in list" :key="index" class="content-info" @click="openWebsite(item.websiteLink)">
                    <!-- <div>{{item.websiteName}}</div>
                    <div>{{item.websiteIntroduction}}</div>
                    <div>{{item.websiteLink}}</div>
                    <div>{{item.websiteStatus}}</div>
                    <div>{{item.websiteLogo}}</div> -->
                    <img :src="item.websiteLogo" class="websiteImg"/>
                    <div class="websiteNameClass">{{item.websiteName}}</div>
                    <div class="introductionClass">{{item.websiteIntroduction}}</div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import Infoleft from './Infoleft'
import axios from '../api/api'
export default {
    data(){
        return{
            list:[
                {
                    id:'1',
                    websiteIntroduction:'谦谦君子，温润如玉',
                    websiteLink:'http://www.wensoul.com/',
                    websiteLogo:'http://www.wensoul.com/static/img/avatar.bea407a.jpg',
                    websiteName:'墨染',
                    websiteStatus:'0',
                },{
                    id:'1',
                    websiteIntroduction:'谦谦君子，温润如玉',
                    websiteLink:'http://www.wensoul.com/',
                    websiteLogo:'http://www.wensoul.com/static/img/avatar.bea407a.jpg',
                    websiteName:'墨染',
                    websiteStatus:'0',
                },{
                    id:'1',
                    websiteIntroduction:'谦谦君子，温润如玉',
                    websiteLink:'http://www.wensoul.com/',
                    websiteLogo:'http://www.wensoul.com/static/img/avatar.bea407a.jpg',
                    websiteName:'墨染',
                    websiteStatus:'0',
                },{
                    id:'1',
                    websiteIntroduction:'谦谦君子，温润如玉',
                    websiteLink:'http://www.wensoul.com/',
                    websiteLogo:'http://www.wensoul.com/static/img/avatar.bea407a.jpg',
                    websiteName:'墨染',
                    websiteStatus:'0',
                }
            ],
        }
    },
    components:{
        Infoleft
    },
    mounted(){
        // this.findWebsiteLink();
    },
    methods:{
        // 查询友情连接
        findWebsiteLink(){
            axios.post('/WebsiteLink/findWebsiteLink',{}).then(res => {
                console.log(res)
                this.list = res.data
            })
        },

        openWebsite(link){
            // 打开新的页面跳转
            window.open(link,'_blank');
        },

        addWebsiteLink(){
            axios.post('/WebsiteLink/addWebsiteLink',{
                websiteName:'墨染',
                websiteLink:'http://www.wensoul.com/',
                websiteLogo:'',
                websiteIntroduction:'谦谦君子，温润如玉'
            }).then(res => {
                this.$message({
                    type:'success',
                    $message:'申请成功，我会尽快同过的呀！'
                })
            })
        }
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
.websiteContent{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.content-info{
    width: 260px;
    border: 1px solid #e5e5e5;
    margin-bottom: 20px;
    text-align: center;
    padding: 10px 0;
    /* background-color: #fff; */
    transition: background-color 1.5s;
}
.content-info:hover{
    background-color: aqua
}
.websiteImg{
    width: 25px;
    border-radius: 50%;
}
.websiteNameClass{
    margin: 5px 0;
    font-size: 20px;
}
.introductionClass{
    font-size: 14px;
    color: #c8c6c6;
}
</style>


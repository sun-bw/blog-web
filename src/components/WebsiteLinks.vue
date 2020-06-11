<template>
    <div id="websiteLink">
        <Infoleft></Infoleft>
        <div class="websiteInfo">
            <el-button @click="addWebsiteLink" round>链接申请</el-button>
            <div class="websiteContent">
                <div v-for="(item,index) in list" :key="index" class="content-info" @click="openWebsite(item.websiteLink)" v-show="item.websiteStatus == 1">
                    <img :src="item.websiteLogo" class="websiteImg"/>
                    <div class="websiteNameClass">{{item.websiteName}}</div>
                    <div class="introductionClass">{{item.websiteIntroduction}}</div>
                </div>
            </div>
        </div>
        <el-dialog title='友情连接' :visible.sync="dialogFlag" :append-to-body='true' @close='cancel'>
            <el-steps :active="active" simple finish-status="success">
                <el-step title="步骤 1" icon="el-icon-edit"></el-step>
                <el-step title="步骤 2" icon="el-icon-upload"></el-step>
                <el-step title="步骤 3" icon="el-icon-picture"></el-step>
            </el-steps>
            <div v-if="active == 0">
                <div class="websiteInfoClass">
                    <div class="websiteInfoClass-cotent">请先确保添加本站</div>
                    <div class="websiteInfoClass-cotent">网站名称：墨染</div>
                    <div class="websiteInfoClass-cotent">网站简介：谦谦君子，温润如玉</div>
                    <div class="websiteInfoClass-cotent">网站链接：http://www.wensoul.com/</div>
                    <div class="websiteInfoClass-cotent">网站LOGO:http://www.wensoul.com/static/img/avatar.bea407a.jpg</div>
                </div>
            </div>
            <div v-if="active == 1" class="contentClass">
                <div class="contentInfoClass">
                    <el-input v-model="websiteName" placeholder="网站名称"/>
                    <el-input v-model="websiteIntroduction" placeholder="网站简介"/>
                    <el-input v-model="websiteLink" placeholder="网站连接"/>
                    <el-input v-model="websiteLogo" placeholder="网站LOGO"/>
                </div>
            </div>
            <div v-if="active == 2">我会尽快审核的呀！</div>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="next" v-if="active == 0">下一步</el-button>
                <el-button type="primary" @click="submit" v-if="active == 1">确 定</el-button>
                <el-button type="primary" @click="cancel" v-if="active == 2">关闭</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import Infoleft from './Infoleft'
import axios from '../api/api'
export default {
    data(){
        return{
            list:[],
            websiteName:'',
            websiteIntroduction:'',
            websiteLink:'',
            websiteLogo:'',
            dialogFlag:false,
            active: 0
        }
    },
    components:{
        Infoleft
    },
    mounted(){
        this.findWebsiteLink();
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
            this.dialogFlag = true;
        },
        cancel(){
            this.dialogFlag = false;
            this.websiteName = '';
            this.websiteIntroduction = '';
            this.websiteLink = '';
            this.websiteLogo = '';
            this.active = 0;
        },

        next(){
            if (this.active++ > 2) this.active = 0;
        },

        submit(){
            if(this.websiteName == ''||this.websiteIntroduction == "" || this.websiteLink == ''){
                this.$message({
                    type:'info',
                    message:'请正确填写信息哦！'
                })
            }else{
                axios.post('/WebsiteLink/addWebsiteLink',{
                    websiteName:this.websiteName,
                    websiteLink:this.websiteLink,
                    websiteLogo:this.websiteLogo,
                    websiteIntroduction:this.websiteIntroduction,
                }).then(res => {
                    // this.$message({
                    //     type:'success',
                    //     message:'申请成功，我会尽快通过呀！'
                    // });
                    this.active = 2;
                })
            }
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
    margin-top: 20px;
}
.content-info{
    width: 260px;
    border: 1px solid #e5e5e5;
    margin-bottom: 20px;
    text-align: center;
    padding: 10px 0;
    /* background-color: #fff; */
    transition: background-color 1.5s;
    animation: my3d 1s both;
}
@keyframes my3d {
    0% {
        opacity: 0;
        -webkit-transform: scale3d(.3,.3,.3);
        transform: scale3d(.3,.3,.3)
    }
    50% {
        opacity: 1
    }
}
.content-info:hover{
    background-color: #33cd98;
    border-radius: 10px;
}
.content-info:hover .websiteNameClass{
    color: #b66aca;
}
.content-info:hover .introductionClass{
    color: #fff;
}
.websiteImg{
    width: 25px;
    border-radius: 50%;
}
.websiteNameClass{
    margin: 5px 0;
    font-size: 20px;
    color: #33cd98;
    padding: 0 40px;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
    white-space: nowrap;
}
.introductionClass{
    font-size: 14px;
    color: #c8c6c6;
    padding: 0 30px;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
    white-space: nowrap;
}
.el-input{
    margin-bottom: 10px !important;
}
@media screen and (max-width: 1125px){
    .websiteContent{
        justify-content: space-around;
    }
}
@media screen and (max-width: 715px){
    .websiteContent{
        justify-content: center;
    }
}

.contentClass{
    display: flex;
    padding-top: 20px;
}
.contentInfoClass{
    margin: auto;
    width: 50%;
}
.websiteInfoClass{
    font-size: 20px;
    color: #333;
}
.websiteInfoClass-cotent{
    margin-top: 10px;
}
</style>
<style>

</style>
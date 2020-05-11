<template>
    <div class="infoleft">
        <div class="avatarInfo">
            <div class="avatar-content">
                <div class="about-avatar">
                    <img src="../../static/img/avatar.jpg" class="avatar">
                </div>
                <div class="aboutMe">
                    <p class="name">墨染</p>
                    <p class="address">辽宁|大连</p>
                </div>
            </div>
        </div>
        <div class="statistics">
            <div class="statistics-content">
                <i class="el-icon-s-data picture statisticsImg"></i>数据统计
            </div>
            <div class="item">
                <div class="item-content">
                    <i class="el-icon-document picture articleImg"></i>
                    文章总数：
                    <span class="item-number">{{data.articleNum}}</span>
                </div>
                <div class="item-content">
                    <i class="el-icon-bicycle picture interviewImg"></i>
                    访问总数：
                    <span class="item-number">{{data.interviewNum}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from '@/api/api'
export default {
    data(){
        return{
            data:'',
        }
    },
    mounted(){
        this.findStatistics();
    },
    methods:{
        // 查询各项信息
        findStatistics(){
            axios.post('/statistics/findStatistics','').then(res => {
                this.data = res.data
            })
        }
    }
}
</script>
<style lang="less" scoped>
@media screen and (max-width:800px){
    .infoleft{
        display: none
    }
}
.infoleft{ 
    width:25%;
    padding-right:20px
}
.avatarInfo{
    background:#fff;
    width:100%;
    margin-bottom: 20px;
    border-radius: 20px;
}
.avatar-content{
    padding:20px;
}
.about-avatar{
    text-align: center;
    padding: 20px 0;
}
.avatar{
    width: 100px;
    height: 100px;
    border-radius: 50%;
}
.aboutMe{
    text-align: center;
    .name{
        font-size: 16px;
        padding-bottom: 4px;
    }
    .address{
        font-size: 12px;
    }
}
.statistics{
    background:#fff;
    padding: 20px;
    border-radius: 20px;
    font-size: 16px;
    .statistics-content{
        padding: 10px 0;
        border-bottom: 1px solid #eee;
        .statisticsImg{
            color: #0080ff;
        }
    }
    .item{
        padding: 20px 0;
        .item-content{
            padding-top: 10px;
        }
        .item-number{
            float: right;
        }
    }
}
.picture{
    font-size: 16px;
    padding-right: 10px;
}

.articleImg{
    color: #ff8000;
}
.interviewImg{
    color: #f00078;
}
</style>

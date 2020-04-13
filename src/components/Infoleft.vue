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
        <div style="background:#fff;width:100%">
            123
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{

    }
}
</script>
<style scoped>
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
}
.aboutMe .name{
    font-size: 16px;
    padding-bottom: 4px;
}
.aboutMe .address{
    font-size: 12px;
}
</style>

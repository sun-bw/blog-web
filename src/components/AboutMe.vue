<template>
  <div class="aboutMe">
    <div class="content">
      <div class="personInfo">
        <img src="../../static/img/personInfo.png">
        个人信息
      </div>
      <div class="aoboutMe">
        <p>墨染。</p>
        <p>一个出入江湖伪文艺的95后程序员。</p>
        <p>出生于吉林某座美丽的小城。</p>
        <p>喜欢有趣的事，有趣的人。</p>
        <p>喜欢优美的文字。</p>
        <p>喜欢简简单单。</p>
      </div>
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

  },
}
</script>
<style scoped>
.aboutMe{
  margin:60px 0px 20px 0px;
  padding-top: 20px;
  height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
}
.content{
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px 10px;
  width: 60%;
}
.personInfo{
  border-bottom: 1px solid #e5e5e5;
  padding: 13px 10px;
}
.aoboutMe{
  padding: 0px 20px;
}
/*媒体查询*/
@media screen and (max-width: 13660px){
    .personNote{
        width: 1280px;
    }
    .editor{
        width: 1280px;
    }
}
@media screen and (max-width:1920px){
    .personNote{
        width:1280px;
    }
    .editor{
        width: 1280px;
    }
}
@media screen and (max-width:1680px){
    .personNote{
        width:1280px;
    }
    .editor{
        width: 1280px;
    }
    
}
@media screen and (max-width:1366px){
    .personNote{
        width:1066px;
    }
    .editor{
        width: 1066px;
    }
}
@media screen and (max-width:1280px){
    .personNote{
        width:980px;
    }
    .editor{
        width: 980px;
    }
}
@media screen and (max-width:1024px){
    .personNote{
        width:724px;
    }
    .editor{
        width: 724px;
    }
}
@media screen and (max-width:800px){
    .personNote{
        width:100%;
    }
    .editor{
        width: 100%;
    }
}
</style>
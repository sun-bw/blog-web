<template>
  <div class="personNote">
      <!--文章内容-->
      <div class="article">
        <div v-for="item in data" :key="item.id" class="content">
          <div style="font-size: 20px;font-weight: bold">{{item.name}}</div>
          <div>{{item.time}}</div>
          <div>本文属类：{{item.lei}}</div>
        </div>
      </div>
      <!--搜索-->
      <div class="search">
        <!--搜索框-->
        <div class="content">
          <div class="content-input">
            <input type="text" class="input" placeholder="请输入"></input>
            <el-button icon="el-icon-search" class="btn"></el-button>
          </div>
        </div>
        <!--分类-->
        <div>
          <span>分类</span>
        </div>
      </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        data:[
          {
            id:1,
            name:'关于什么什么什么蛇二刷i阿U盾你萨克华硕电脑阿速达',
            time:2017-8-9,
            lei:'java',
          },
          {
            id:2,
            name:'1',
            time:2017-8-9,
            lei:'java',
          },
          {
            id:3,
            name:'1',
            time:2017-8-9,
            lei:'java',
          }
        ],
      }
    },
    methods:{

    }
  }
</script>
<style scoped>
  .personNote{
    margin:60px auto 0px auto;
    display: flex;
    width: 1280px;
  }
  /*媒体查询，修改文章div的内容宽度*/
  @media screen and (max-width: 1366px){
    .personNote{
      width: 90%;
    }
  }
  .article{
    width: calc(100% - 320px)
  }
  .article .content{
    background: #ffffff;
    margin-top: 20px;
    padding: 20px 20px
  }
  .search{
    width: 300px;
    background: #ffffff;
    margin-top: 20px;
    margin-left: 20px
  }
  .search .input{
    height: 40px;
    width:100%;
    border: none;
    outline: none;
    box-shadow: none;
    line-height: 40px;
    background-color: transparent
  }
  .search .btn{
    position: absolute;
    width: 30px;
    text-align: center;
    right: 15px;
    top: 3px;
    font-size: 18px;
    border: none;
    background-color: transparent;
  }
  .search .content-input{
    border-radius: 40px;
    height: 40px;
    background-color: #fff;
    padding: 0 20px;
    position: relative
  }
  .search .content{
   padding: 20px;
    background: grey
  }
</style>

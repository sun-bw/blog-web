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
        <div class="classification">
          <!--内容-->
          <div v-for="item in data1" :key="item.id" class="title-content">
            <div class="name">{{item.name}}</div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
  import axios from '../../api/api'
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
        data1:[{
          id:1,
          name:'全部'
        },{
          id:2,
          name:'CSS'
        },{
          id:3,
          name:'HTML'
        },{
          id:4,
          name:'JavaScript'
        }]
      }
    },
    mounted(){
      this.findArticle();
    },
    methods:{
      findArticle(){
        axios.post('/article/findAll',{}).then(res => {
          console.log(res)
        })
      }
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
  .classification{
    margin-bottom: 20px;
    margin-top: 20px;
  }
  .classification .name{
    margin: 0 30px;
    padding: 0 20px;
    color: #787977;
  }
  .classification .title-content{
    height: 40px;
    line-height: 40px;
    cursor: pointer;
  }
  .classification .title-content:hover{
    border-right: 6px solid #484947;
    height: 40px;
    background-color: #f8f9f7;
    z-index: 0;
  }
</style>

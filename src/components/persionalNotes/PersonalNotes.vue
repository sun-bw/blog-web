<template>
  <div class="personNote">
      <!--文章内容-->
      <div class="article">
        <div v-for="item in data" :key="item.id" class="content" @click="articleDetails(item.id)">
          <div class="title">{{item.title}}</div>
          <div class="article-content">{{item.content}}</div>
          <div class="article-footer">
            <div class="line"></div>
            <div class="info">
              <div><i class="el-icon-user">墨染</i></div>
              <div class="info-content"><i class="el-icon-collection articleImg"></i>{{item.categoryName}}</div>
              <div class="info-content"><i class="el-icon-date articleImg"></i>{{item.createTime}}</div>
              <div class="info-content"><i class="el-icon-view articleImg"></i>{{item.articleBrowseNum}}</div>
            </div>
          </div>
        </div>
         <!-- 分页 -->
        <div style="text-align: right;padding-top: 20px;">
          <el-pagination layout="prev,pager,next" :total='total' :page-size="pageSize"  :current-page='currentPage'
          @current-change='handlerCurrentChange'></el-pagination>
        </div>
      </div>
      <div>
        <!--搜索-->
        <div class="search">
          <!--搜索框-->
          <div class="content">
            <div class="content-input">
              <input type="text" class="input" placeholder="请输入" v-model="title"/>
              <el-button icon="el-icon-search" class="btn" @click="findArticle()"></el-button>
            </div>
          </div>
          <!--分类-->
          <div class="classification">
            <!--内容-->
            <div v-for="item in categoryData" :key="item.categoryId" class="title-content">
              <div class="name" @click="changeCategory(item.categoryId)">{{item.categoryName}}</div>
            </div>
          </div>
        </div>
        <div class="search1"></div>
      </div>
  </div>
</template>
<script>
  import axios from '../../api/api'
  export default{
    data(){
      return{
        data:[],
        categoryData:[],
        title:'',
        categoryId:'',
        currentPage:1,
        pageSize:10,
        total:0,
      }
    },
    mounted(){
      this.findArticle();
      this.findCategory();
    },
    methods:{
      findArticle(){
        axios.post('/article/findPage',{
          title:this.title,
          categoryId:this.categoryId,
          pageSize:this.pageSize,
          pageNum:this.currentPage,
        }).then(res => {
          this.data = res.data.content;
          // 查询后清空文章id
          this.categoryId = '';
          // 查询后重置滚动条
          document.documentElement.scrollTop = 0;
          this.total = res.data.totalSize;
          // this.pageSize = 
        })
      },
      // 分页
      handlerCurrentChange(val){
        this.currentPage = val;
        this.findArticle();
      },

      // 查询分类
      findCategory(){
        axios.post('/category/findCategory',{}).then(res => {
          // 在数组最前面加上
          // 第一个0代表数组的索引位置，第二个0代表删除元素的数量，后面带边新增的元素内容
          res.data.splice(0,0,{categoryId: 0,categoryName: "全部"})
          // console.log(res.data.splice(res.data.findIndex(item => item.categoryId === 5),1))
          let data = res.data.concat(res.data.splice(res.data.findIndex(item => item.categoryId === 5), 1))
          this.categoryData = data;
        })
      },
      // 选择分类
      changeCategory(val){
        this.categoryId = val
        this.findArticle();
      },

      // 查看文章详情
      articleDetails(id){
        // this.$router.push({
        //   path:'/NoteDetails',
        //   query:{id:id}
        // });
        this.$router.push({
          name:'NoteDetails',
          params:{id:id}
        });
      }
    }
  }
</script>
<style scoped>
  .personNote{
    margin:60px auto 20px auto;
    display: flex;
    justify-content: center;
    width: 1280px;
    position: relative;
    z-index: 997;
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
    padding: 20px 20px;
    box-shadow: 10px 10px 5px #c0c4cc;
    /* cursor:pointer; */
    height: 160px;
    border-radius: 15px;
    position: relative;
    animation: zoomIn 1s both;
  }
  .article .title{
    font-size: 20px;
    color:#333333
  }
  .article-content{
    color:#98a6ad;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:3;
    margin:10px 0
  }
  .article .line{ 
    border-bottom:1px solid #98a6ad
  }
  .article .info{
    display:flex;
    color:#98a6ad;
    padding-top:10px;
    /* position: absolute;
    bottom: 10px; */
  }
  .info-content{
    margin-left: 20px;
  }
  .article-footer{
    position:absolute;
    bottom: 10px;
    width: calc(100% - 40px);
  }
  .search{
    width: 300px;
    background: #f0f0f0;
    margin-top: 20px;
    margin-left: 30px;
    position: fixed;
    box-shadow: 10px 10px 5px #c0c4cc;
  }
  .search1{
    width: 300px;
    background: #f0f0f0;
    margin-top: 20px;
    margin-left: 30px;
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
    background: grey;
    border-radius: 10px 10px 0px 0px;
  }
  .classification{
    padding: 20px 0;
    background-color: #ffffff
  }
  .classification .name{
    margin: 0 30px;
    padding: 0 20px;
    color: #787977;
  }
  .classification .title-content{
    height: 40px;
    line-height: 40px;
    /* cursor: pointer; */
  }
  .classification .title-content:hover{
    border-right: 6px solid #484947;
    height: 40px;
    background-color: #f8f9f7;
    z-index: 0;
  }
  @media screen and (max-width:800px){
    .search{
      display: none;
    }
    .search1{
      display: none;
    }
    .article{
      width: 100%
    }
  }
  .articleImg{
    padding-right: 5px;
  }
  
  @keyframes zoomIn
  {
    0% {
        opacity: 0;
        -webkit-transform: scale3d(.3,.3,.3);
        transform: scale3d(.3,.3,.3)
    }
    50% {
        opacity: 1
    }
  }
</style> 

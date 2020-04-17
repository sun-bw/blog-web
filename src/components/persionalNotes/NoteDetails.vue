<template>
    <div class="personNote">
        <div class="content">
            <div class="title">{{title}}</div>
            <div class="title-content">
                <div class="time"> <i class="el-icon-date detailsImg"></i>{{time}}</div>
                <div class="browse"><i class="el-icon-view detailsImg"></i>{{articleBrowseNum}}</div>
            </div>
        </div>
        <editor ref="editor" class="editor" id="editor"></editor>
    </div>
</template>
<script>
import axios from '@/api/api'
import editor from '../editor/mavonEditor'
export default {
    components:{
        editor,
    },
    data(){
        return{
            data:'',
            title:'',
            time:'',
            articleBrowseNum:'',
        }
    },
    mounted(){
        console.log(11111111);
        
        this.findNoteDetails();
    },
    methods:{
        findNoteDetails(){
            axios.post('/article/selectArticle',{
                id:this.$route.query.id
            }).then(res => {
                console.log(res)
                this.data = res.data.content;
                this.$refs.editor.editorString = res.data.content;
                this.title = res.data.title;
                this.time = res.data.createTime;
                this.articleBrowseNum = res.data.articleBrowseNum;
                // this.$refs.editor.editorString = res.data.content;
                // this.article.title = res.data.title;
                // this.article.introduction = res.data.introduction;
                // this.article.category = res.data.categoryId;
            })
        }
    },
}
</script>
<style scoped>
.personNote{
    margin:80px auto 0px auto;
    /* display: flex; */
    /* box-shadow: 10px 10px 5px #c0c4cc; */
    margin-bottom: 30px;
}
.content{
    background: #ffffff;
    color: #333;
    text-align: center;
    padding: 20px 0;
    font-weight: bold;
}
.title{
    font-size: 25px;
}
.title-content{
    padding-top: 10px;
    display: flex;
    justify-content: center;
}
.detailsImg{
    padding-right: 5px;
}
.time{
    padding-right: 10px;
}
.browse{
    padding-left: 10px;
}
     /*媒体查询，修改文章div的内容宽度*/
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
<style>
#editor .v-note-wrapper{
    z-index: 1 !important;
}
</style>

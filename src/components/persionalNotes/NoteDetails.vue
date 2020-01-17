<template>
    <div class="personNote">
        <editor ref="editor" class="editor"></editor>
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
            data:''
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
                this.data = res.data.content;
                this.$refs.editor.editorString = res.data.content;
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
    display: flex;
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

<template>
    <div class="personNote">
        <editor ref="editor"></editor>
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
    margin:60px auto 0px auto;
    display: flex;
    width: 1280px;
    }
</style>

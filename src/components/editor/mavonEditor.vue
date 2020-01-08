<template>
    <div style="z-index:1">
        <mavon-editor ref="editor" v-model="editorString" defaultOpen="preview" :toolbarsFlag="false" :subfield="false"></mavon-editor>
    </div>
</template>
<script>
import {mavonEditor} from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
    name:'home',
    components:{
        mavonEditor
    },
    data(){
        return{
        editorString:'',
        }
    },
    methods:{

    }
}
</script>
<style scope>

</style>

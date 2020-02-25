<template>
    <div class="talkAnymore">
        啊哈哈哈啊
    </div>
</template>
<script>
export default {
    data(){
        return{
            data:[{
                id:1,
                content:'123123',
                year:'2019-1',
                date:'1',
            },{
                id:2,
                content:'adasda',
                year:'2019-2',
                date:'2',
            },{
                id:3,
                content:'cnzxnczn',
                year:'2019-2',
                date:'3'
            },{
                id:4,
                content:'zncuzxcnz',
                year:'2019-3',
                date:'4',
            },{
                id:5,
                content:'asdasdasda',
                year:'2019-3',
                date:'5'
            }]
        }
    },
    mounted(){
        var list = [];
        var map = {};
        for(var i=0;i<this.data.length;i++){
            var ai = this.data[i]
            // !map[ai.year] 在map存在ai.year的值时，判断为false
            if(!map[ai.year]){
                console.log(map[ai.year])
                list.push({
                    // id:ai.id,
                    year:ai.year,
                    data1:[{id:ai.id,date:ai.date,content:ai.content}]
                })
                map[ai.year] = ai.year;
            }else{
                for(var j=0;j<list.length;j++){
                    var dj = list[j]
                    if(dj.year == ai.year){
                        dj.data1.push({id:ai.id,date:ai.date,content:ai.content})
                        break;
                    }
                }
            }
            
        }
        console.log(list)
    },
    methods:{

    }
}
</script>
<style scoped>
.talkAnymore{
    margin-top: 100px;
    height: 100vh;
}
</style>

<template>
    <div class="footer">
        <div class="footer-image">
            <a href="https://github.com/sun-bw" class="footer-a">
                <img src='/static/img/github.jpg'>
            </a>
        </div>
        <div class="footer-content">Copyright © 2019-2020 墨染。 辽ICP备20001331号</div>
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
.footer{
    background: #eef2f6;
    padding-top: 50px;
}
.footer-image{
    display:flex;
}
.footer-a{
    margin:auto
}
.footer-content{
    text-align: center;
    line-height: 56px;
    height: 56px;
    border-top: 1px dashed rgba(0,0,0,.5);
}
</style>
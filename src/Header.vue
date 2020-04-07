<template>
    <div>
        <!--页面头部-->
        <div class="header-content" id="header-content">
            <div class="blog-name">墨染</div>
            <!--transparent-->
            <el-menu :router="true" :default-active="activeIndex" mode="horizontal" :background-color="menuBackgroundColor"
                    text-color="#fff" active-text-color="#ffd04b" id="menu-content">
                <el-menu-item index="/">
                    <span slot="title">首页</span>
                </el-menu-item>
                <el-menu-item index="/PersonalNotes">
                    <span slot="title">笔记本</span>
                </el-menu-item>
                <el-menu-item index="/TimeLine">
                    <span slot="title">时间轴</span>
                </el-menu-item>
                <el-menu-item index='/Talkanymore'>
                    <span slot="title">闲言碎语</span>
                </el-menu-item>
                <el-menu-item index="/AboutMe">
                    <span slot="title">关于我</span>
                </el-menu-item>
            </el-menu>
            <div class="picture">
                <i class="el-icon-menu nav-picture" @click="openNav" v-if="mobileNavStatus"></i>
                <i class="el-icon-close nav-picture" @click="closeNav" v-else></i>
            </div>
        </div>
        <!-- 屏幕小于800的菜单导航栏 -->
        <div id="nav-mobile">
            <div style="padding-top:60px;font-size:25px">
                <router-link :to="{path:'/'}" style="color:#ffffff;">首页</router-link>
                <router-link :to="{path:'/PersonalNotes'}" style="color:#ffffff">笔记本</router-link>
                <router-link :to="{path:'/TimeLine'}" style="color:#ffffff">时间轴</router-link>
                <router-link :to="{path:'/Talkanymore'}" style="color:#ffffff">闲言碎语</router-link>
                <router-link :to="{path:'/AboutMe'}" style="color:#ffffff">关于我</router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            activeIndex:'/',
            menuBackgroundColor:'#000000',//菜单栏背景色
            routerName:'',//监听滚动条是，参数。用于判断当前位置是不是首页
            mobileNavStatus:true,//手机端导航栏按钮状态
        }
    },
    watch:{
        //监听路由
        //当路由为home时，菜单栏更改颜色为transparent
        //当为其他路由时，菜单栏为000000黑色
        $route(to,form){
            if(to.name === 'Home'){
                this.routerName = 'Home';
                this.menuBackgroundColor = 'transparent'
                // 修改页面头部颜色
                document.getElementById('header-content').style.backgroundColor = 'transparent'
            }else {
                this.routerName = 'else';
                this.menuBackgroundColor = '#000000';
                // 修改页面头部颜色
                document.getElementById('header-content').style.backgroundColor = '#000000'
            }
            this.closeNav();
            let path = to.path;
            this.setActiveIndex(path);
            // 路由跳转，重置滚动条
            document.documentElement.scrollTop = 0;
        }
    },
    mounted(){
        //监听滚动条
        window.addEventListener('scroll',this.handleScroll,true)
        //当刷新重新加载页面时，路由为
        if(window.location.pathname){
            this.setActiveIndex(window.location.pathname)
        }
    },
    methods:{
        //用于解决当前路由位置问题，刷新页面路由重置问题
        setActiveIndex(path){
            //截取路由上的/
            let pathArr = path.split('/');
            if(pathArr.length > 3){
                this.activeIndex = `/${pathArr[1]}/${pathArr[2]}`;
            }else {
                this.activeIndex = path;
            }
        },
        //滚动条方法
        handleScroll(){
            //判断当前位置是不是首页
            if(this.routerName === 'Home'){
                //当滚动条距离上面高度大于100时
                if(document.documentElement.scrollTop > 100){
                    //更改导航栏颜色为黑色
                    this.menuBackgroundColor = '#000000'
                    // 修改页面头部颜色
                    document.getElementById('header-content').style.backgroundColor = '#000000'
                }
                if(document.documentElement.scrollTop < 100){
                    this.menuBackgroundColor = 'transparent'
                    // 修改页面头部颜色
                    document.getElementById('header-content').style.backgroundColor = 'transparent'
                }
            } 
        },
        // 页面宽度小于800px，打开菜单方法
        openNav(){
            this.mobileNavStatus = false;
            document.getElementById('nav-mobile').style.display = 'block'
        },
        // 页面宽度小于800px，关闭菜单方法
        closeNav(){
            this.mobileNavStatus = true;
            document.getElementById('nav-mobile').style.display = 'none'
        },
    },
}
</script>
<style scoped>
.header-content{
    padding: 0px!important;
    position: fixed;
    /*固定定位*/
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    z-index: 999;
}
.picture{
    height: 60px;
    display: flex;
}
.nav-picture{
    color: #FFFFFF;
    font-size: 30px;
    margin: auto 0 auto 20px
}
/*名字样式*/
.blog-name{
    color: #FFFFFF;
    width: 140px;
    position: absolute;
    top: 40%;
    z-index: 999;
}
#nav-mobile{
    position: fixed;
    width: 100vw;
    height: 100vh;
    overflow-y: auto;
    /* -webkit-overflow-scrolling: touch; */
    top: 0;
    left: 0;
    background: rgba(0,0,0,.92);
    z-index: 999;
    display: flex;
    display: none;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    padding: 0 1rem;
    padding-bottom: 8rem;
}
@media screen and (min-width: 800px) and (max-width: 1920px) {
    #phone-menu-content{
        display: none;
    }
    .picture{
        display: none;
    }
    /*名字样式*/
    .blog-name{
        left: 20%;
    }
}
@media screen and (max-width:800px){
    /* 屏幕小800时，隐藏导航菜单栏 */
    #menu-content{
        display: none;
    }
    .blog-name{
        left: 85%;
    }
}
</style>
<style>
/*导航栏样式*/
#menu-content{
    display: flex;
    justify-content: flex-end;
    padding: 0 20%;
}
.el-menu.el-menu--horizontal{
    border-bottom:0px !important;
}
</style>
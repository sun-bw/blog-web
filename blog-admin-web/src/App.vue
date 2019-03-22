<template>
  <div id="app">
    <div>
      <a-menu style="width: 256px" mode="vertical" @click="handleClick"
              :router="true" :default-active="activeIndex">
        <!--<a-menu-item key="/a"><a-icon type="mail"/>Navigation One</a-menu-item>-->
        <!--<a-menu-item key="/b"><a-icon type="calendar" />Navigation Two</a-menu-item>-->
        <router-link to="/a">11</router-link>
        <router-link to="/b">22</router-link>
      </a-menu>
    </div>
    <div style="background: wheat">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      activeIndex:'/'
    }
  },
  methods: {
    handleClick (e) {
      console.log('click ', e)
    },
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

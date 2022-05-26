<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  created(){
    //在页面加载时读取sessionStorage里的信息，并且存到store中,替代合并
    if(sessionStorage.getItem('state')){
      this.$store.replaceState(Object.assign({},this.$store.state,JSON.parse(sessionStorage.getItem("state"))));
    }
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener('beforeunload',()=>{
      sessionStorage.setItem('state',JSON.stringify(this.$store.state))
    })
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

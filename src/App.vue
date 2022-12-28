<template>
  <div id="app">
    <nav>
      <router-link to="/" replace>Home</router-link> |
      <router-link to="/about" replace>About</router-link> |
      <router-link :to="{ name: 'about' }" replace>About</router-link> |
      <button @click="push">跳转到about</button> |
      <button @click="params">获取参数</button> |
      <button @click="open">新窗口打开</button> |
      <router-link :to="{ 
        name: 'guard',
        query: {
          value:new Date()
        }
      }" replace>Guard</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  methods: {
    push() {
      // this.$router.push('about')
      // this.$router.push({path:'about'})
      // this.$router.push({name:'about',params:{value:2}})
      // this.$router.replace('/')
      this.$router.push({path:'about',query:{value:"queryONE"}})
    },
    params() {
      console.log(this.$route,"this.$route")
    },
    open() {
      let routerData = this.$router.resolve({
        name:'about'
      })
      window.open(routerData.href,"_blank")
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

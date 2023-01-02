<template>
  <div id="app">
    <nav>
      <router-link to="/" replace>replace属性</router-link> |
      <router-link to="/about" replace>路由模式</router-link> |
      <button @click="push">跳转到about传递参数</button> |
      <button @click="open">新窗口打开about</button> |
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
  // text-align: center;
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

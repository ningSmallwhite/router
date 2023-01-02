<template>
  <div class="home">
    <span>{{ this.$route.meta.title }}</span>
    <div>路由props传值{{pro}}</div>
    <p>-----------------------------------</p>
    <h3>router-link的replace属性</h3>
    <ul>
      <li>push是追加历史记录(默认)</li>
      <li>replace是替换当前记录（没有历史记录）</li>
    </ul>
    <button @click="forward">前进</button>
    <button @click="back">后退</button>
    <button @click="go">可前进也可后退</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  props: ['pro'],
  components: {
    // HelloWorld
  },
  created() {
    console.log(this.$router,this.$route)
  },
  methods: {
    forward(){
      this.$router.forward()
      
    },
    back(){
      this.$router.back()
    },
    go(){
      this.$router.go()
    }
  }
}
</script>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <span>{{ this.$route.meta.title }}</span>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  },
  created() {
    console.log(this.$router,this.$route)
  }
}
</script>

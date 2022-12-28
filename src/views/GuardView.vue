<template>
  <div>
    <h2>路由守卫</h2>
  </div>
</template>
<script>

export default {
  // 进入组件的时候
  beforeRouteEnter:(to,from,next) => {
    console.log(to,from,"to,from")
    next((vm) =>{
      alert("你已经进入组件")
      console.log(vm,"vm")
    })
  },
  // 组件重新被渲染的时候
  beforeRouteUpdate:(to,from,next) => {
    console.log(to,from,"to,from1")
    alert("组件渲染")
    next()
  },
  // 组件离开的时候
  beforeRouteLeave:(to,from,next) => {
    console.log(to,from,"to,from2")
    if(confirm("你确定要离开吗？")){
      next()
    }else {
      next(false)
    }
  }
}
</script>
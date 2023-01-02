<template>
  <div class="about">
    <h3>hash模式</h3>
    <ul>
      <li>地址中永远带着#号，不美观</li>
      <li>若以后将地址通过第三方手机APP分享，若APP校验严格，则地址会被标记为不合法</li>
      <li>兼容性较好</li>
    </ul>
    <h3>history模式</h3>
    <ul>
      <li>地址干净，美观</li>
      <li>兼容性和hash模式比略差</li>
      <li>应用部署上线时需要后端人员支持，解决刷新页面服务端404的问题</li>
    </ul>
  </div>
</template>

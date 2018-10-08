<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
    /* 去掉点击事件标签的阴影 */
    -webkit-tap-highlight-color:rgba(255,255,255,0); 
}
*{ margin: 0; padding: 0; box-sizing: border-box; font-size: 0.3rem; }
</style>

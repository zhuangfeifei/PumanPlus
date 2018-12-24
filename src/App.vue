<template>
  <div id="app">
    <router-view/>
    <van-loading v-if="isLoading" class="apploading" size="40px" color="#E74744"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed:{
    isLoading(){
      return this.$store.state.puman_unionId == null ? true : false || this.$store.state.isLoading
    }
  },
  
}
</script>

<style>
#app {
    /* 去掉点击事件标签的阴影 */
    -webkit-tap-highlight-color:rgba(255,255,255,0); min-height: 100vh; background-color: white;
}
*{ margin: 0; padding: 0; box-sizing: border-box; font-size: 0.3rem; }

.apploading{
  position: absolute; top: calc(50% - 20px); left: calc(50% - 20px); z-index: 10000;
}
</style>

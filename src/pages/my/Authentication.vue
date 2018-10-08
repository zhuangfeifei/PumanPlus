<template>
    <div id="Authentication">

        <nav class="BindPhone_title"><img src="../../assets/img/1.jpg" alt=""></nav>

        <router-view></router-view>

    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    components: {
        
    },
    created(){
        document.title = '业主认证'
    },
    methods: {
        
    },
}
</script>
<style lang="less" scoped>
#Authentication{
    width: 100%; height: 100%; background-color: white;
}

.BindPhone_title{
    width: 1.4rem; height: 1.4rem; margin: 0.64rem auto; 
    img{ width: 100%; height: 100%; border-radius: 50%; }
}
</style>



<template>
    <div id="BindShops">

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
        document.title = '绑定商铺'
    },
    methods: {
        
    },
}
</script>
<style lang="less">
#BindShops{
    width: 100%; height: 100%; background-color: white;
}
</style>



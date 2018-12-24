<template>
    <div id="Authentication">

        <nav class="BindPhone_title"><img :src="user.avatar" alt=""></nav>

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
    computed: {
        user(){
            if(this.$store.state.user == '') this.$store.commit('USER')
            return this.$store.state.user
        }
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
    width: 100%; height: 100%; background-color: white; padding-top: 0.64rem;
}

.BindPhone_title{
    width: 1.4rem; height: 1.4rem; margin: 0 auto;  margin-bottom: 0.64rem;
    img{ width: 100%; height: 100%; border-radius: 50%; }
}
</style>



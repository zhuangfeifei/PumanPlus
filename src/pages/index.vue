<template>
    <div id="index">

        <router-view></router-view>
        <!-- <router-view v-if="isIf"></router-view> -->

        <bottom-item></bottom-item>

    </div>
</template>
<script>
import bottom from '@/components/_bottom'
import { setTimeout } from 'timers';
export default {
    data() {
        return {
            
        }
    },
    components: {
        "bottom-item": bottom,
    },
    computed:{
        isIf(){
            if(this.$store.state.puman_unionId != null || this.$store.state.puman_unionId != '' || this.$store.state.puman_unionId != undefined){
                return true
            }
        }
    },
    created(){
         
    },
    mounted(){
        if(this.$store.state.puman_unionId == null || this.$store.state.puman_unionId == '' || this.$store.state.puman_unionId == undefined){
            this.$router.go(0)
        }
    },
    methods: {
        
    },
}
</script>
<style lang="less">
#index{
    width: 100%; height: 100%; padding-bottom: 1rem; background-color: white;
}
</style>



<template>
    <div id="index">

        <router-view></router-view>

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
        
    },
    created(){
         
    },
    mounted(){
        
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



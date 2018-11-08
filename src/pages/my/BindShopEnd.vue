<template>
    <div id="BindShopEnd">

        <div class="BindShopEnd_list" v-for="(item,index) in bindend" :key="index" @click="$router.push({path:'/ShopDetails',query:{shopId: item.shopId}})">
            <van-row>
                <van-col span="3" class="BindShopEnd_logo"><img src="../../assets/img/caidai.png" alt=""><div>{{(index+1) | fnName}}</div></van-col>
                <van-col span="15" class="BindShopEnd_num">{{item.shopNo}}</van-col>
                <van-col span="6" class="BindShopEnd_status"><img src="../../assets/img/bindend.png" alt=""></van-col>
            </van-row>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    beforeCreate(){
        this.$store.dispatch('bindend')
    },
    computed: {
        bindend(){
            return this.$store.state.bindend
        },
    },
    created(){
        
    },
    methods: {

    },
    filters: {
        fnName: function(value) {
            return value < 10 ? '0'+value : value
        }
    }
}
</script>

<style lang="less" scoped>
#BindShopEnd{
    width: 100%; height: 100%;
}

.font1{ font-family:PingFang-SC-Bold; font-weight:bold; }
.font2{ font-family:PingFang-SC-Medium; font-weight:Medium; }
.font3{ font-family:PingFang-SC-Regular;; font-weight:Regular; }

.BindShopEnd_list{
    width: 6.9rem; height: 1.42rem; margin: 0 auto; margin-top: 0.48rem;
    background:rgba(255,255,255,1); border-radius: 0.1rem; box-shadow:0px 0px 0.3rem 0px rgba(231,71,68,0.1);
    .BindShopEnd_logo{
        text-align: center; img{ width: 0.45rem; height: 0.61rem; } position: relative;
        div{ 
            width: 100%; height: 100%; position: absolute; top: 0; left: 0; font-size: 0.28rem; line-height: 0.5rem;
            color:rgba(254,254,254,1); text-shadow:0px 1px 0px rgba(0,0,0,0.3); .font1;
        }
    }
    .BindShopEnd_num{ padding-left: 0.3rem; font-size: 0.36rem; .font1; line-height: 1.42rem; color:rgba(43,43,43,1); }
    .BindShopEnd_status{
        text-align: center; padding-top: 0.48rem; padding-right: 0.1rem; img{ width: 1.25rem; height: 0.46rem; }
    }
}


</style>
<template>
    <div id="BindShop">

        <div class="BindShop_list" @click="detile(index)" v-for="(item,index) in 5" :key="index">
            <!-- <img :src="index == 0 ? require('../../assets/img/Not_through.png') : require('../../assets/img/AlreadyPresented.png')" alt=""> -->
            <van-row>
                <van-col span="3" class="BindShop_logo"><img src="../../assets/img/caidai.png" alt=""><div>{{(index+1) | fnName}}</div></van-col>
                <van-col span="15" class="BindShop_num">A1001</van-col>
                <van-col span="6" class="BindShop_status"><img :src="index == 0 ? require('../../assets/img/bind.png') : require('../../assets/img/bindend.png')" alt=""></van-col>
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
    computed: {
        
    },
    created(){
        
    },
    methods: {
        detile(index) {
            this.$router.push({path:'/BindShops/BindShopItem'})
        }
    },
    filters: {
        fnName: function(value) {
            return value < 10 ? '0'+value : value
        }
    }
}
</script>

<style lang="less" scoped>
#BindShop{
    width: 100%; height: 100%;
}

.font1{ font-family:PingFang-SC-Bold; font-weight:bold; }
.font2{ font-family:PingFang-SC-Medium; font-weight:Medium; }
.font3{ font-family:PingFang-SC-Regular;; font-weight:Regular; }

.BindShop_list{
    width: 6.9rem; height: 1.42rem; margin: 0 auto; margin-top: 0.48rem;
    background:rgba(255,255,255,1); border-radius: 0.1rem; box-shadow:0px 0px 0.3rem 0px rgba(231,71,68,0.1);
    .BindShop_logo{
        text-align: center; img{ width: 0.45rem; height: 0.61rem; } position: relative;
        div{ 
            width: 100%; height: 100%; position: absolute; top: 0; left: 0; font-size: 0.28rem; line-height: 0.5rem;
            color:rgba(254,254,254,1); text-shadow:0px 1px 0px rgba(0,0,0,0.3); .font1;
        }
    }
    .BindShop_num{ padding-left: 0.3rem; font-size: 0.36rem; .font1; line-height: 1.42rem; color:rgba(43,43,43,1); }
    .BindShop_status{
        text-align: center; padding-top: 0.48rem; padding-right: 0.1rem; img{ width: 1.25rem; height: 0.46rem; }
    }
}


</style>
<template>
    <div id="Shop">

        <div v-if="true" class="Shops">
            <div class="Shop_list" v-for="(item,index) in shoplist" :key="index" @click="$router.push({path:'/ShopDetails',query:{shopId: item.shopId}})">
                <van-row>
                    <van-col span="4" class="Shop_logo"><img :src="require('../../assets/img/Signing_logo'+num()+'.png')" alt=""></van-col>
                    <van-col span="14" class="Shop_num">{{item.shopNo}}</van-col>
                    <van-col span="6" class="Shop_status"><img :src="item.state == 1 ? require('../../assets/img/Have_net_sign.png') : require('../../assets/img/Has_rush.png')" alt=""></van-col>
                </van-row>
            </div>

            <p class="tip">温馨提示：只有签约后才能看到绑定商铺信息!</p>
        </div>

        <div v-else class="noShop">
            <p>暂无商铺信息，请先签约</p>
            <router-link to="/Signing"><div>签约</div></router-link>
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
        this.$store.dispatch('shoplist')
    },
    computed: {
        shoplist(){
            return this.$store.state.shoplist
        }
    },
    created(){
        document.title = '商铺'
        this.$store.commit('ACTIVE',1)
    },
    methods: {
        num(){
            return Math.floor(Math.random()*5)
        }
    },
}
</script>

<style lang="less" scoped>
#Shop{
    width: 100%; height: 100%;
}

.font1{ font-family:PingFang-SC-Bold; font-weight:bold; }
.font2{ font-family:PingFang-SC-Medium; font-weight:Medium; }
.font3{ font-family:PingFang-SC-Regular;; font-weight:Regular; }

.Shop_list{
    width: 6.9rem; height: 1.42rem; margin: 0 auto; margin-top: 0.48rem;
    background:rgba(255,255,255,1); border-radius: 0.1rem; box-shadow:0px 0px 0.3rem 0px rgba(231,71,68,0.1);
    .Shop_logo{
        text-align: center; padding-top: 0.34rem; padding-left: 0.1rem; img{ width: 0.74rem; height: 0.74rem; }
    }
    .Shop_num{ padding-left: 0.2rem; font-size: 0.36rem; .font1; line-height: 1.42rem; color:rgba(43,43,43,1); }
    .Shop_status{
        text-align: center; padding-top: 0.48rem; padding-right: 0.1rem; img{ width: 1.25rem; height: 0.46rem; }
    }
}

.tip{
    font-size: 0.24rem; color:rgba(0,0,0,1); .font3; margin: 0.3rem 0.3rem;
}

.noShop{
    width: 100%; padding-top: 3.2rem; text-align: center;
    p{ color:rgba(75,75,75,1); .font2; }
    div{
        width: 2rem; height: 0.6rem; color:rgba(255,255,255,1); text-shadow:0px 1px 0px rgba(0,0,0,0.3); .font2; line-height: 0.6rem; margin: 0.61rem auto;
        background:linear-gradient(90deg,rgba(231,71,68,1),rgba(231,155,153,1)); border-radius:0.3rem; box-shadow:0px 0px 0.2rem 0px rgba(178,19,16,0.16);
    }
}

</style>
<template>
    <div class="bottom">
        <div class="footer">
            <div v-for="(item,index) in list" :key="index" @click="changes(index)">
                <img :src="actives == index ? item.icon : item.icons" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list:[
                { name: '首页', icon: require('../assets/img/bottom_homes.png'), icons: require('../assets/img/bottom_home.png'), url:'/' },
                { name: '商铺', icon: require('../assets/img/bottom_shops.png'), icons: require('../assets/img/bottom_shop.png'), url:'Shop' },
                { name: '优惠', icon: require('../assets/img/bottom_discounts.png'), icons: require('../assets/img/bottom_discount.png'), url:'Discount' },
                { name: '收益', icon: require('../assets/img/bottom_profits.png'), icons: require('../assets/img/bottom_profit.png'), url:'Profit' },
                { name: '我的', icon: require('../assets/img/bottom_mys.png'), icons: require('../assets/img/bottom_my.png'), url:'My' },
            ],
            actives:0
        }
    },
    methods: {
        changes(index){
            this.actives = index
            // this.$store.commit('ACTIVE', index)
            this.$router.push({path: this.list[index].url})
        }
    },
}
</script>

<style lang="less" scoped>
#bottom{
    width: 100%; height: 1rem; position: fixed; bottom: 0; left: 0;
}

.footer{
    width: 100%; height: 1rem; position: fixed; bottom: 0; left: 0; display: flex; justify-content: space-around;
    box-shadow:0px 0px 0.3rem 0px rgba(178,19,16,0.2); background:rgba(255,255,255,1); 
    div{
        width: 20%; height: 100%; text-align: center; font-size: 0.25rem; padding-top: 0.15rem;
        img{ width: 0.48rem; height: 0.79rem; }
    }
}
</style>
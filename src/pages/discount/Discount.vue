<template>
    <div id="Discount">
        
        <nav class="Discount_nav">
            <span>秒杀专场</span>
            <router-link to="/SecondKill"><span>查看更多</span></router-link>
        </nav>

        <div class="Discount_time">
            <div class="Discount_time_list" @click="tabTime(index)" v-for="(item,index) in time" :key="index" :class="{active_time:index == tabNum}">
                <span>{{item.hour}}</span><p>{{item.day}}</p>
            </div>
        </div>
        <div class="commodity">
            <div v-for="(item,index) in 3" :key="index">
                <img src="../../assets/img/1.jpg" alt="">
                <span>阳澄湖大闸蟹</span>
                <p>￥388.00</p>
                <del>￥988.00</del>
            </div>
        </div>

        <div class="Discount_activity">
            <h3>金秋蟹蟹好礼</h3>
            <img src="../../assets/img/Reservation_banner.png" alt="">
            <h3>来自澳洲阳光葡萄酒</h3>
            <img src="../../assets/img/Reservation_banner.png" alt="">
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            time:[
                {day:'9月13日', hour:'09：00'},{day:'9月14日', hour:'12：00'},{day:'9月15日', hour:'09：30'},{day:'9月16日', hour:'21：00'},
            ],tabNum:0
        }
    },
    created(){
        document.title = '优惠'
        this.$store.commit('ACTIVE',2)
    },
    methods: {
        tabTime(index) {
            this.tabNum = index
        }
    },
}
</script>

<style lang="less" scoped>
#Discount{
    width: 100%; height: 100%; padding-bottom: 1rem;
}


.font1{ font-family:PingFang-SC-Bold; font-weight:bold; }
.font2{ font-family:PingFang-SC-Medium; font-weight:Medium; }
.font3{ font-family:PingFang-SC-Regular;; font-weight:Regular; }


.Discount_nav{
    width: 100%; height: 0.88rem; line-height: 0.88rem; display: flex; justify-content: space-between; padding: 0 0.3rem; .font1;
    a{ color: #E74744; .font2; }
}

.Discount_time{
    width: 100%; height: 0.75rem; background:rgba(174,174,174,1); display: flex; justify-content: space-around; padding: 0 0.15rem;
    .Discount_time_list{
        width: 1.5rem; height: 0.85rem; color:rgba(255,255,255,1); line-height: 0.375rem; text-align: center;
        span{ .font1; }
        p{ font-size: 0.24rem; .font2; }
    }
    .active_time{
        background: url('../../assets/img/active_time.png') no-repeat; background-size: 100% 100%;
    }
}
.commodity{
    width: 100%; height: 3.25rem; background:rgba(246,246,246,1); padding-top: 0.4rem; display: flex;
    div{
        width: 2.1rem; line-height: 0.35rem; margin-left: 0.3rem;
        img{ width: 100%; height: 1.6rem; border-radius: 0.1rem; }
        span{ color:rgba(0,0,0,1); font-size: 0.28rem; .font2; }
        p{ font-size: 0.28rem; color:rgba(231,71,68,1); .font1; }
        del{ font-size: 0.24rem; color:rgba(170,170,170,1); position: relative; top: -0.07rem; }
    }
}

.Discount_activity{
    width: 100%; height: 9.5rem; background:rgba(246,246,246,1); margin-top: 0.64rem; text-align: center; color:rgba(0,0,0,1);
    padding: 0.48rem 0.3rem; .font1;
    img{ width: 100%; height: 3rem; margin: 0.29rem 0 0.48rem 0; border-radius: 0.1rem; }
}
</style>
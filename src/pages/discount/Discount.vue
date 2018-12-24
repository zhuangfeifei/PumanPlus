<template>
    <div id="Discount">
        
        <nav class="Discount_nav">
            <span>秒杀专场</span>
            <router-link to="/SecondKill"><span>查看更多</span></router-link>
        </nav>

        <div class="Discount_time">
            <div v-if="index < 4" class="Discount_time_list" @click="tabTime(index)" v-for="(item,index) in killTimeList" :key="index" :class="{active_time:index == tabNum}">
                <span>{{item.hour}}</span><p>{{item.day}}</p>
            </div>
        </div>
        <div v-if="groupKillList" class="commoditys">
            <div v-if="index < 3" class="commodity" @click="$router.push('/SecondKill')" v-for="(item,index) in groupKillList[tabNum].data" :key="index">
                <img :src="imgUrl + item.thumbnail_pic" alt="">
                <div>{{item.group_name}}</div>
                <p>￥{{item.kill_amount}}</p>
                <del>￥{{item.discount}}</del>
            </div>
        </div>

        <div class="Discount_activity">
            <div v-for="(item,index) in promotionList" :key="index">
                <h3>{{item.title}}</h3>
                <a href="http://www.homeamc.cn/shops/wx/single/Crab?wxh=sz_fangyuanli"><img :src="imgUrl + item.topchartpic" alt=""></a>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            tabNum:0
        }
    },
    beforeCreate(){
        this.$store.dispatch('groupKillList')
        this.$store.dispatch('promotionList')
    },
    computed: {
        imgUrl(){
            return this.$store.state.imgUrl
        },
        groupKillList(){
            return this.$store.state.groupKillList
        },
        promotionList(){
            return this.$store.state.promotionList
        },
        killTimeList(){
            let list = []
            for(let val of this.groupKillList){
                list.push({day: `${val.time.substring(5,7)}月${val.time.substring(8,10)}日`, hour: val.time.substring(11,16)})
            }
            return list
        },
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
.commoditys{
    width: 100%; height: 3.25rem; background:rgba(246,246,246,1); padding-top: 0.4rem; display: flex;
    .commodity{
        width: 2.1rem; line-height: 0.35rem; margin-left: 0.3rem;
        img{ width: 100%; height: 1.6rem; border-radius: 0.1rem; }
        div{ width: 100%; height: 0.4rem; line-height: 0.4rem; overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1; }
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
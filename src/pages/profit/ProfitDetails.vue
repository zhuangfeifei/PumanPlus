<template>
    <div id="ProfitDetails" v-if="profitdetail != ''">

        <nav class="ProfitDetails_nav">
            <van-row>
                <van-col span="4"><img src="../../assets/img/Signing_logo3.png" alt=""></van-col><van-col span="6"><p>{{profitdetail.info.shopNo}}</p></van-col>
            </van-row>
            <van-row>
                <van-col span="4"><h1>1</h1></van-col><van-col span="9">当前商铺收益</van-col><van-col span="10"><span>￥{{profitdetail.info.assignMoney}}</span></van-col>
            </van-row>
            <van-row>
                <van-col span="4"><h1>1</h1></van-col><van-col span="9">补偿收益</van-col><van-col span="10"><span>￥{{profitdetail.info.compensationMoney}}</span></van-col>
            </van-row>
        </nav>

        <div class="ProfitDetails_content">
            <div class="ProfitDetails_list" v-for="(item,index) in profitdetail.list" :key="index">
                <h5>{{item.assignDate}}</h5>
                <div class="ProfitDetails_list_">
                    <van-row>
                        <van-col span="5" class="ProfitDetails_list_distribution">总分配</van-col><van-col span="19" class="ProfitDetails_list_distribution">￥{{item.totalAssignMoney}}</van-col>
                    </van-row>
                    <van-row>
                        <van-col span="5"><p>补偿收益</p></van-col><van-col span="10"><p>￥{{item.compensationMoney}}</p></van-col><van-col span="9"><span>￥{{item.assignMoney}}</span></van-col>
                    </van-row>
                </div>
            </div>
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
        this.$store.dispatch('profitdetail', this.$route.query.shopId)
    },
    computed: {
        profitdetail(){
            return this.$store.state.profitdetail
        }
    },
    created(){
        
    },
    methods: {
        
    },
}
</script>

<style lang="less" scoped>
#ProfitDetails{
    width: 100%; height: 100%;
}


.font1{ font-family:PingFang-SC-Bold; font-weight:bold; }
.font2{ font-family:PingFang-SC-Medium; font-weight:Medium; }
.font3{ font-family:PingFang-SC-Regular; font-weight:Regular; }


.ProfitDetails_nav{
    width: 100%; height: 2.57rem; padding: 0.4rem 0.3rem; color:rgba(59,59,59,1); line-height: 0.5rem;
    img{ width: 0.74rem; height: 0.74rem; }
    h1{ opacity: 0; }
    p{ font-size: 0.48rem; .font1; color:rgba(43,43,43,1); line-height: 0.7rem; }
    span{ color: rgba(231,71,68,1); font-size: 0.36rem; }
}

.ProfitDetails_content{
    width: 100%; background:rgba(246,246,246,1); padding: 0.4rem 0 0.2rem 0;
    .ProfitDetails_list{
        width: 100%; height: 2rem; margin-bottom: 0.4rem;
        h5{ text-align: center; font-size: 0.24rem; .font3; color:rgba(128,128,128,1); }
        .ProfitDetails_list_{
            width: 6.3rem; height: 1.4rem; margin: 0 auto; margin-top: 0.2rem; padding: 0.2rem; line-height: 0.5rem;
            background:rgba(255,255,255,1); border:0.01rem solid rgba(206,206,206,1); border-radius:0.1rem;
            .ProfitDetails_list_distribution{ font-size: 0.28rem; }
            p{ font-size: 0.24rem; }
            span{ float: right; font-size: 0.36rem; color:rgba(231,71,68,1); .font1; }
        }
    }
}



</style>
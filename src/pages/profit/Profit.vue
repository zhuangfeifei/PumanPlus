<template>
    <div id="Profit" v-if="profitlist != ''">

        <nav class="Profitback">
            <span>累计收益（元）</span>
            <h5>{{profitlist.info.totalIncome}}</h5>
            <div class="Profit_">
                <div><p>¥{{profitlist.info.applied}}</p><span>已提现</span><section></section></div>
                <div><p>¥{{profitlist.info.applying}}</p><span>提现中</span><section></section></div>
                <div><p>¥{{profitlist.info.balance}}</p><span>可提现</span></div>
            </div>
        </nav>


        <div class="Profit_list">
            <div class="Profit_list_" v-for="(item,index) in profitlist.list" :key="index" @click="details(item.shopId)">
                <div class="Profit_list_title"><span class="Profit_list_num">{{item.shopNo}}</span><h4>{{item.totalIncome}}</h4></div>
                <div class="Profit_list_content"><span>{{item.area}}㎡</span><p>产证面积</p></div>
                <div class="Profit_list_content"><span>{{item.compensationArea}}㎡</span><p>补偿面积</p></div>
                <div class="Profit_list_content"><span>{{item.shareRatio}}</span><p>分摊系数</p></div>
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
        this.$store.dispatch('profitlist')
    },
    computed: {
        profitlist(){
            return this.$store.state.profitlist
        }
    },
    created(){
        document.title = '收益'
        this.$store.commit('ACTIVE',3)
    },
    methods: {
        details(id) {
            this.$router.push({path:'/ProfitDetails',query:{shopId: id}})
        }
    },
}
</script>

<style lang="less" scoped>
#Profit{
    width: 100%; height: 100%; padding: 0.3rem;
}


.font1{ font-family:PingFang-SC-Bold; font-weight:bold; }
.font2{ font-family:PingFang-SC-Medium; font-weight:Medium; }
.font3{ font-family:PingFang-SC-Regular; font-weight:Regular; }


.Profitback{
    width: 100%; height: 2.59rem; padding: 0 0.3rem; color:rgba(255,255,255,1); padding-top: 0.18rem;
    background: url('../../assets/img/Profitback.png') no-repeat; background-size: 100% 100%;
    span{ font-size: 0.24rem; .font1; }
    h5{ font-size: 0.6rem; .font1; text-shadow:0px 1px 0px rgba(0,0,0,0.3); line-height: 0.6rem; }
    .Profit_{
        width: 100%; display: flex; padding-top: 0.2rem; border-top: 0.015rem dashed white; margin-top: 0.2rem;
        div{
            width: 33.33%; height: 1rem; text-align: center; position: relative; text-shadow:0px 1px 0px rgba(0,0,0,0.3);
            section{
                width: 0.01rem; height: 0.4rem; background-color: white; position: absolute; right: 0; top: 0.3rem;
            }
            p{ font-size: 0.36rem; .font1; letter-spacing: 0.01rem; }
            span{ .font2!important; }
        }
    }
}


.Profit_list{
    width: 100%; margin-top: 0.64rem;
    .Profit_list_{
        width: 100%; height: 1.48rem; border:0.01rem solid rgba(206,206,206,1); border-radius:0.1rem; display: flex; margin-bottom: 0.3rem;
        .Profit_list_title{
            width: 2.2rem; height: 100%; background:rgba(246,246,246,1); border-top-left-radius: 0.1rem; border-bottom-left-radius: 0.1rem;
            padding-left: 0.2rem; line-height: 0.55rem; padding-top: 0.22rem;
            .Profit_list_num{ background-color: rgba(231,71,68,1); color: white; border-radius: 0.2rem; padding: 0.01rem 0.15rem; .font1; }
            h4{ font-size: 0.36rem; .font1; color:rgba(0,0,0,1); text-shadow:0px 1px 0px rgba(255,255,255,0.3); }
            h4:before{
                content:'¥'; font-size: 0.24rem; margin-right: 0.05rem; margin-left: 0.1rem;
            }
        }
        .Profit_list_content{
            width: calc((100% - 2.2rem)/3); height: 100%; text-align: center; line-height: 0.5rem; padding-top: 0.25rem;
            span{ .font2; }
            p{ .font3; font-size: 0.24rem; }
        }
    }
}
</style>
<template>
    <div id="WithdrawalOf">

        <div class="WithdrawalOf_list" v-for="(item,index) in applying" :key="index">
            <img src="../../assets/img/WithdrawalOf.png" alt="">
            <div><span>最近提现中金额</span><span>2018.01.02</span></div>
            <h4><span>¥</span><span>{{item.drawCash}}</span></h4>
            <p><span>{{item.bankName}}</span><span>{{item.bankNo | filter}}</span></p>
        </div>
        <no-data v-if="applying.length == 0"></no-data>

    </div>
</template>

<script>
import NO from '@/components/_nodata'
export default {
    data() {
        return {
            
        }
    },
    components:{
        'no-data': NO
    },
    beforeCreate(){
        this.$store.dispatch('applying')
    },
    computed: {
        applying(){
            return this.$store.state.applying
        }
    },
    created(){
        document.title = '提现中'
    },
    methods: {
        name() {
            
        }
    },
    filters:{
        filter(val){
            return `${val.substring(0,4)}*******${val.substring(val.length - 5,val.length)}`
        }
    }
}
</script>

<style lang="less" scoped>
#WithdrawalOf{
    width: 100%; height: 100%; padding-top: 0.48rem;
}

.font1{ font-family:PingFang-SC-Bold; font-weight:bold; }
.font2{ font-family:PingFang-SC-Medium; font-weight:Medium; }

.WithdrawalOf_list{
    width: 6.3rem; height: 2.84rem; border: 0.01rem solid rgba(206,206,206,1); border-radius: 0.1rem; margin: 0 auto; margin-bottom: 0.48rem;
    position: relative; text-align: center; padding-top: 0.65rem;
    img{ width: 1.21rem; height: 0.6rem; position: absolute; top: 0.2rem; left: -0.2rem; }
    div{ 
        width: 100%; display: flex; justify-content: space-between; padding: 0.1rem 0.2rem 0 0.4rem; color:rgba(128,128,128,1);
        span{ font-size: 0.24rem; .font2; }
    }
    h4{ 
        span:nth-child(1){ font-size: 0.48rem; .font1; }
        span:nth-child(2){ font-size: 0.6rem; margin-left: 0.19rem; .font1; }
    }
    p{ .font2; color:rgba(59,59,59,1); span:nth-child(2){ margin-left: 0.48rem; } }
}


</style>
<template>
    <div id="RentExtraction">

        <nav class="RentExtraction">
            <div></div>
            <div><h5>中国建设银行</h5><p>China Construction Bank</p><span>6111 **** **** 3212</span></div>
        </nav>

        <h4>计提金额</h4>

        <div class="Amount">
            <div><span>¥</span><input type="text"><span class="out">全部提现</span></div>
            <p>可用余额<span>200.00</span>元</p>
        </div>
        
        <div class="RentExtraction_tip">注：在商城中消费可以免除相应税费</div>

        <router-link to="/PutResult"><div class="RentExtraction_btns">提  交</div></router-link>

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
        document.title = '租金提取'
    },
    methods: {
        name() {
            
        }
    },
}
</script>

<style lang="less" scoped>
#RentExtraction{
    width: 100%; height: 100%;
}

.font1{ font-family:PingFang-SC-Bold; font-weight:bold; }
.font2{ font-family:PingFang-SC-Medium; font-weight:Medium; }
.font3{ font-family:PingFang-SC-Regular;; font-weight:Regular; }

.RentExtraction{
    width: 6.9rem; height: 2.56rem; margin: 0.3rem auto; color:rgba(255,255,255,1); display: flex; text-shadow:0px 1px 0px rgba(0,0,0,0.3);
    background: url('../../assets/img/card.png') no-repeat; background-size: 100% 100%; line-height: 0.5rem;
    h5{ .font1; }
    div:nth-child(1){
        width: 1.8rem; height: 100%;
    }
    div:nth-child(2){
        width: calc(100% - 1.8rem); height: 100%; padding-top: 0.35rem; .font2;
    }
    span{ line-height: 1rem; font-size: 0.36rem; }
}

h4{
    margin-top: 0.5rem; margin-left: 0.3rem; font-size: 0.24rem; color:rgba(43,43,43,1); .font2; line-height: 0.5rem;
}

.Amount{
    width: 100%; height: 2rem; background:rgba(246,246,246,1); padding: 0.2rem 0.3rem;
    div{ 
        width: 100%; height: 0.95rem; border-bottom: 0.015rem solid rgba(206,206,206,1); line-height: 0.95rem;
        input{
            width: 70%; height: 100%; border: 0; background: none; line-height: 0.4rem; padding-left: 0.2rem; 
            font-size: 0.6rem; color:rgba(0,0,0,1); .font1; letter-spacing: 0.03rem;
        }
        span{ font-size: 0.48rem; color:rgba(59,59,59,1); .font1 }
        .out{ float: right; color:rgba(231,71,68,1); .font1; font-size: 0.3rem; }
    }
    p{ color:rgba(0,0,0,1); font-size: 0.26rem; line-height: 0.6rem; letter-spacing: 0.02rem; span{ color: #FF8B4B; } }
}

.RentExtraction_tip{
    font-size: 0.28rem; padding: 0.3rem; width: 100%;
}

.RentExtraction_btns{
    width: 6.7rem; height: 0.96rem; line-height: 0.96rem; text-align: center; font-size: 0.36rem; color:rgba(255,255,255,1); text-shadow:0px 1px 0px rgba(0,0,0,0.3);
    margin: 1rem auto; .font1; background:linear-gradient(90deg,rgba(231,71,68,1),rgba(248,142,146,1)); border: 0.01rem solid rgba(231,71,68,1); border-radius: 0.48rem; box-shadow:0px 0px 0.2rem 0px rgba(178,19,16,0.16);
}


</style>
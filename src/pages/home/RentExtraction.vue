<template>
    <div id="RentExtraction" v-if="user != ''">

        <nav class="RentExtraction">
            <div><img :src="yhimg" alt=""></div>
            <div v-if="user != ''"><h5>{{user.bankCards[0].bankName}}</h5><p>Bank card</p><span>{{user.bankCards[0].bankNo | filter}}</span></div>
        </nav>

        <h4>计提金额</h4>

        <div class="Amount">
            <div><span>¥</span><input type="text" v-model="value"><span class="out" @click="value = user.balance">全部提现</span></div>
            <p>可用余额<span>{{index.balance || user.balance}}</span>元</p>
        </div>
        
        <div class="RentExtraction_tip">注：在商城中消费可以免除相应税费</div>

        <div class="RentExtraction_btns" @click="RentExtractionClick">提  交</div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            value:'',
            yhimg:'http://www.homeamc.cn:80/puman/kaptcha/api/YH',
        }
    },
    computed: {
        user(){
            if(this.$store.state.user == '') this.$store.commit('USER')
            return this.$store.state.user
        },
        index(){
            return this.$store.state.index
        },
    },
    created(){
        document.title = '租金提取'

        this.$nextTick(()=>{
            let yhName = {
                '北京银行':'BJYH','工商银行':'GSYH','光大银行':'GDYH','华夏银行':'HXYH','建设银行':'JSYH','交通银行':'JTYH','民生银行':'MSYH','南京银行':'NJYH','宁波银行':'NBYH',
                '农业银行':'NYYH','浦发银行':'PFYH','深圳发展银行':'SZFZYH','兴业银行':'XYYH','邮政银行':'YZYH','招商银行':'ZSYH','中国银行':'ZGYH','中信银行':'ZXYH'
            };
            let bankName = this.$store.state.user.bankCards[0].bankName
            for(let key in yhName){
                if(bankName.indexOf(key) >= 0){
                    this.yhimg = `http://www.homeamc.cn:80/puman/kaptcha/api/${yhName[key]}`
                    break
                }
            }
        })
    },
    methods: {
        RentExtractionClick() {
            this.$store.state.isLoading == false ? this.$store.dispatch('draw', parseFloat(this.value)) : ''
        }
    },
    filters:{
        filter(val){
            return `${val.substring(0,4)} **** **** ${val.substring(val.length - 5,val.length)}`
        }
    }
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
        width: 1.8rem; height: 100%; text-align: center; padding-top: 0.4rem;
        img{ width: 0.88rem; height: 0.88rem; }
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
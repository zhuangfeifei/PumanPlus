<template>
    <div id="ChangeBank">

        <div class="ChangeBank_">

            <div class="ChangeBank" @click="$router.push({path:'/BindCard', query:{list: item}})" v-for="(item,index) in banklist" :key="index">
                <img class="bankLogo" :src="item.logo" alt="">
                <div>
                    <h5>{{item.bankName}}</h5>
                    <span>Bank card</span>
                    <p>{{item.bankNo | filter}}</p>
                </div>
                <img v-if="item.isDefault == 1" class="bankDefault" src="../../assets/img/ribbon.png" alt="">
            </div>
            <div class="ChangeBank AddBank" @click="$router.push('/BindCard')">
                <img src="../../assets/img/add.png" alt="">
                <p>添加银行卡</p>
            </div>

        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            img:[]
        }
    },
    components: {
       
    },
    beforeCreate(){
        this.$store.dispatch('banklist')
    },
    computed: {
        banklist(){
            return this.$store.state.banklist
        },
    },
    created(){
        document.title = '银行卡列表'
        
       
    },
    methods: {
        
    },
    filters:{
        filter(val){
            return val.substring(0,4)+' **** **** '+val.substring(val.length - 4, val.length)
        }
    }
}
</script>
<style lang="less" scoped>
#ChangeBank{
    width: 100%; height: 100%; background-color: white; padding: 0.48rem 0.3rem;
}

.font1{ font-family:PingFang-SC-Bold; font-weight:bold; }
.font2{ font-family:PingFang-SC-Medium; font-weight:Medium; }
.font3{ font-family:PingFang-SC-Regular;; font-weight:Regular; }

.ChangeBank{
    width: 100%; height: 2.56rem; display: flex; padding: 0.3rem 0.48rem; position: relative; margin-bottom: 0.48rem;
    background:rgba(255,255,255,1); box-shadow:0px 0px 0.3rem 0px rgba(231,71,68,0.1); border-radius:0.1rem;
    .bankLogo{ width: 0.88rem; height: 0.88rem; border-radius: 50%; }
    div{
        margin-left: 0.47rem;
        h5{ color:rgba(59,59,59,1); .font1; }
        span{ color:rgba(59,59,59,1); .font2; }
        p{ margin-top: 0.4rem; font-size: 0.36rem; color:rgba(0,0,0,1); .font2; }
    }
    .bankDefault{
        width: 0.8rem; height: 0.8rem; position: absolute; top: 0; right: 0;
    }
}

.AddBank{
    display: flex; flex-flow: column; justify-content: space-around; align-items: center;
    img{ width: 0.88rem; height: 0.88rem; }
    p{ font-size: 0.36rem; color: #E74744; .font2; }
}

</style>



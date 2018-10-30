<template>
    <div id="Signing">

        <div class="Signing_list" @click="sign" v-for="(item,index) in 5" :key="index">
            <!-- <img :src="index == 0 ? require('../../assets/img/Not_through.png') : require('../../assets/img/AlreadyPresented.png')" alt=""> -->
            <van-row>
                <van-col span="4" class="Signing_logo"><img src="../../assets/img/Signing_logo.png" alt=""></van-col>
                <van-col span="14" class="Signing_num">A1001</van-col>
                <van-col span="6" class="Signing_status"><img :src="index == 0 ? require('../../assets/img/Signing.png') : require('../../assets/img/Signingend.png')" alt=""></van-col>
            </van-row>
        </div>

        <p class="tip">温馨提示：只有签约后才能看到绑定商铺信息!</p>

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
        document.title = '商铺签约'
    },
    methods: {
        sign() {
            this.$router.push({path:'/Contract'})
        }
    },
}
</script>

<style lang="less" scoped>
#Signing{
    width: 100%; height: 100%;
}

.font1{ font-family:PingFang-SC-Bold; font-weight:bold; }
.font2{ font-family:PingFang-SC-Medium; font-weight:Medium; }
.font3{ font-family:PingFang-SC-Regular;; font-weight:Regular; }

.Signing_list{
    width: 6.9rem; height: 1.42rem; margin: 0 auto; margin-top: 0.48rem;
    background:rgba(255,255,255,1); border-radius: 0.1rem; box-shadow:0px 0px 0.3rem 0px rgba(231,71,68,0.1);
    .Signing_logo{
        text-align: center; padding-top: 0.34rem; padding-left: 0.1rem; img{ width: 0.74rem; height: 0.74rem; }
    }
    .Signing_num{ padding-left: 0.2rem; font-size: 0.36rem; .font1; line-height: 1.42rem; color:rgba(43,43,43,1); }
    .Signing_status{
        text-align: center; padding-top: 0.48rem; padding-right: 0.1rem; img{ width: 1.25rem; height: 0.46rem; }
    }
}

.tip{
    font-size: 0.24rem; color:rgba(0,0,0,1); .font3; margin: 0.3rem 0.3rem;
}

</style>
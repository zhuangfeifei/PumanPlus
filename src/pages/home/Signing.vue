<template>
    <div id="Signing">

        <div class="Signing_list" @click="sign(item.state)" v-for="(item,index) in entrust" :key="index">
            <van-row>
                <van-col span="4" class="Signing_logo"><img :src="require('../../assets/img/Signing_logo'+num()+'.png')" alt=""></van-col>
                <van-col span="14" class="Signing_num">{{item.shopNo}}</van-col>
                <van-col span="6" class="Signing_status">
                    <div v-if="item.state == 1" style="background-color:#FDBB59">已签约</div>
                    <div v-if="item.state == 2" style="background-color:#E74744">待签约</div>
                    <div v-if="item.state == 0" style="background-color:#ce9178">待审核</div>
                    <div v-if="item.state == -1" style="width: 1.6rem; background-color:#3d6ed1">审核未通过</div>
                </van-col>
            </van-row>
        </div>
        <no-data v-if="entrust.length == 0"></no-data>

        <p v-if="entrust.length > 0" class="tip">温馨提示：只有签约后才能看到绑定商铺信息!</p>

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
        this.$store.dispatch('entrust')
    },
    computed: {
        entrust(){
            return this.$store.state.entrust
        },
    },
    created(){
        document.title = '商铺签约'
    },
    methods: {
        sign(state) {
            state != -1 || state == 2 ? this.$router.push({path:'/Contract'}) : ''
        },
        num(){
            return Math.floor(Math.random()*5)
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
        padding-top: 0.48rem; padding-right: 0.1rem;
        div{ 
            width: 1.25rem; height: 0.46rem; text-align: center; color: white; line-height: 0.46rem; border-radius: 0.23rem; font-size: 0.24rem;
        }
    }
}

.tip{
    font-size: 0.24rem; color:rgba(0,0,0,1); .font3; margin: 0.3rem 0.3rem;
}

</style>
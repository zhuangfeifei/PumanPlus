<template>
    <div id="Result">

        <nav class="result"></nav>

        <h4 class="result_title">{{status == 1 ? '绑定成功' : '预约成功'}}</h4>

        <router-link v-if="status == 1" to="/BindShops"><div class="result_btns">继续绑定</div></router-link>
        <router-link to="/"><div class="result_btn">返回首页</div></router-link>


    </div>
</template>

<script>
export default {
    data() {
        return {
            status: 0
        }
    },
    components: {
        
    },
    computed: {
        
    },
    created(){
        document.title = this.$route.query.title

        this.status = this.$route.query.status
    },
    methods: {
        
    },
}
</script>

<style lang="less" scoped>
#Result{
    width: 100%; height: 100vh; padding-top: 1.02rem;
    background: url('../../assets/img/result_back.png') no-repeat; background-size: 100% 100%;
}

.font1{ font-family:PingFang-SC-Bold; font-weight:bold; }
.font2{ font-family:PingFang-SC-Medium; font-weight:Medium; }

.result{
    width: 2rem; height: 2rem; border-radius: 50%; margin: 0 auto;
    background: url('../../assets/img/result.png') no-repeat; background-size: 100% 100%;
}

.result_title{
    font-size: 0.48rem; .font1; color:rgba(0,0,0,1); text-align: center; margin-top: 0.57rem; margin-bottom: 1.32rem;
}



.result_btns{
    width: 6.7rem; height: 0.96rem; line-height: 0.96rem; text-align: center; font-size: 0.36rem; color:rgba(255,255,255,1); text-shadow:0px 1px 0px rgba(0,0,0,0.3);
    margin: 0 auto; .font1; background:linear-gradient(90deg,rgba(231,71,68,1),rgba(248,142,146,1)); border: 0.01rem solid rgba(231,71,68,1); border-radius: 0.48rem; box-shadow:0px 0px 0.2rem 0px rgba(178,19,16,0.16);
}
.result_btn{
    width: 6.7rem; height: 0.96rem; line-height: 0.96rem; text-align: center; font-size: 0.36rem; color: rgba(231,71,68,1);
    margin: 0.48rem auto; .font1; background:rgba(255,255,255,0.2); border: 0.02rem solid rgba(231,71,68,1); border-radius: 0.48rem; box-shadow:0px 0px 0.2rem 0px rgba(178,19,16,0.16);
}

</style>
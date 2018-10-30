<template>
    <div id="BindResult">

        <nav class="BindResult"><img :src="img[status]" alt=""></nav>

        <div class="BindResult_title">
            <p>{{status == 1 ? '认证成功' : '认证失败'}}</p>
            <p>{{status == 1 ? time+'s' : ''}}</p>
        </div>

        <div v-if="status == 0" @click="again" class="BindResult_btns">重新认证</div>
        <router-link to="/My"><div class="BindResult_btn">立即关闭</div></router-link>
        <a v-if="status == 0" class="call" href="tel:0512-66830887">客服热线：0512-66830887</a>


    </div>
</template>

<script>
export default {
    data() {
        return {
            status: 1, img:[require('../../assets/img/fail.png'),require('../../assets/img/result.png')],
            time:3
        }
    },
    components: {
        
    },
    computed: {
        
    },
    created(){
        if(this.status == 1){
            let a = setInterval(()=>{
                this.time --
                if(this.time == 0){
                    clearInterval(a)
                    this.$router.push({path:'/My'})
                }
            },1000)
        }
    },
    methods: {
        again(){
            this.$router.go(-1)
        }
    },
}
</script>

<style lang="less" scoped>
#BindResult{
    width: 100%; height: 100vh; padding-top: 1.02rem; text-align: center;
    background: url('../../assets/img/result_back.png') no-repeat; background-size: 100% 100%;
}

.font1{ font-family:PingFang-SC-Bold; font-weight:bold; }
.font2{ font-family:PingFang-SC-Medium; font-weight:Medium; }

.BindResult{
    width: 2rem; height: 2rem; border-radius: 50%; margin: 0 auto;
    // background: url('../../assets/img/result.png') no-repeat; background-size: 100% 100%;
    img{ width: 100%; height: 100%; }
}

.BindResult_title{
    margin-top: 0.57rem; margin-bottom: 1.32rem; width: 100%;
    p{font-size: 0.48rem; .font1; color:rgba(0,0,0,1); }
}



.BindResult_btns{
    width: 6.7rem; height: 0.96rem; line-height: 0.96rem; font-size: 0.36rem; color:rgba(255,255,255,1);
    margin: 0 auto; .font1; background:linear-gradient(90deg,rgba(231,71,68,1),rgba(248,142,146,1)); border: 0.01rem solid rgba(231,71,68,1); border-radius: 0.48rem; box-shadow:0px 0px 0.2rem 0px rgba(178,19,16,0.16);
}
.BindResult_btn{
    width: 6.7rem; height: 0.96rem; line-height: 0.96rem; font-size: 0.36rem; color: rgba(231,71,68,1);
    margin: 0.48rem auto; .font1; background:rgba(255,255,255,0.2); border: 0.02rem solid rgba(231,71,68,1); border-radius: 0.48rem; box-shadow:0px 0px 0.2rem 0px rgba(178,19,16,0.16);
}

.call{
    .font2; color:rgba(231,71,68,1); text-decoration: underline;
}

</style>
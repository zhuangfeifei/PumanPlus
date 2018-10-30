<template>
    <div id="PutResult">

        <nav class="PutResult"></nav>

        <div class="Flow">
            <div>
                <img src="../../assets/img/yuan.png" alt=""><section></section>
                <img src="../../assets/img/yuan.png" alt=""><section></section>
                <img src="../../assets/img/yuan.png" alt="">
            </div>
            <div>
                <p>提现申请成功</p>
                <p>正在审核中</p>
                <p>预计2~3工作日内可以到账</p>
            </div>
        </div>
        <div class="PutResult_tip">
            <span>1.在审核中的提现无法再次发起提现</span>
            <p>2.银行转账一般需要1~2个工作日</p>
            <p>3.过程中如有问题，请直接联系对应业务人员</p>
        </div>

        <router-link to="/"><div class="result_btn">返回首页</div></router-link>


    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    components: {
        
    },
    computed: {
        
    },
    created(){

    },
    methods: {
        
    },
}
</script>

<style lang="less" scoped>
#PutResult{
    width: 100%; height: 100vh; padding-top: 1.02rem;
    background: url('../../assets/img/result_back.png') no-repeat; background-size: 100% 100%;
}

.font1{ font-family:PingFang-SC-Bold; font-weight:bold; }
.font2{ font-family:PingFang-SC-Medium; font-weight:Medium; }
.font3{ font-family:PingFang-SC-Regular;; font-weight:Regular; }

.PutResult{
    width: 2rem; height: 2rem; border-radius: 50%; margin: 0 auto;
    background: url('../../assets/img/result.png') no-repeat; background-size: 100% 100%;
}


.Flow{
    width: 100%; display: flex; margin-top: 0.27rem;
    div:nth-child(1){
        width: 35%; height: 2rem; text-align: center; padding-left: 0.6rem; line-height: 0.25rem; padding-top: 0.3rem;
        img{ width: 0.28rem; height: 0.28rem; }
        section{ 
            width: 0.018rem; height: 0.5rem; background: rgba(206,206,206,1); margin: 0 auto;
        }
    }
    div:nth-child(2){
        line-height: 0.8rem; color:rgba(26,26,26,1); .font2;
    }
}


.PutResult_tip{
    width: 100%; padding-left: 0.4rem; margin-top: 1rem; line-height: 0.5rem; margin-bottom: 1.5rem;
    p,span{ font-size: 0.24rem; .font3; }
    span:before{
        content: '注：'; margin-right: 0.4rem;
    }
    p{ margin-left: 0.88rem; }
}


.result_btn{
    width: 6.7rem; height: 0.96rem; line-height: 0.96rem; text-align: center; font-size: 0.36rem; color: rgba(231,71,68,1);
    margin: 0.48rem auto; .font1; background:rgba(255,255,255,0.2); border: 0.02rem solid rgba(231,71,68,1); border-radius: 0.48rem; box-shadow:0px 0px 0.2rem 0px rgba(178,19,16,0.16);
}

</style>
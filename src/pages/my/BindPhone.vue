<template>
    <div id="BindPhone">

        <div class="BindPhone_content">
            <p>请输入手机号码</p>
            <div class="BindPhone_phone">
                <section>+86</section><van-field v-model="phone" class="input_phone" placeholder="手机号码" />
            </div>
            <p>请填写短信验证码</p>
            <div class="BindPhone_code">
                <van-field v-model="code" class="input_code" placeholder="短信验证码" />
                <button @click="getCode" :disabled="disabled" :class="{BindPhone_active: disabled}">{{disabled ? '倒计时 ' +time+ '秒' : '获取短信验证码'}}</button>
            </div>
        </div>

        <div class="BindPhone_btn" :class="{BindPhone_btn_active: phone.length == 11 && code.length == 6}" @click="next">确 &nbsp;定</div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            phone:'', code:'', disabled: false, time: 180
        }
    },
    components: {
        
    },
    created(){
        
    },
    methods: {
        getCode(){
            this.disabled = true
            let interval = window.setInterval(()=> {
                if ((this.time--) <= 0) {
                    this.time = 180
                    this.disabled = false
                    window.clearInterval(interval)
                }
            }, 1000)
        },
        next(){
            this.phone.length == 11 && this.code.length == 6 ? this.$router.push({path:'/Authentication/BindCertificates', query:{phone:this.phone}}) : ''
        }
    },
}
</script>
<style lang="less" scoped>
#BindPhone{
    width: 100%; height: 100%; background-color: white;
}

.font1{ font-family:PingFang-SC-Bold; font-weight:bold; }
.font2{ font-family:PingFang-SC-Medium; font-weight:Medium; }
.font3{ font-family:PingFang-SC-Regular;; font-weight:Regular; }



.BindPhone_content{
    width: 100%; height: 4.04rem; background:rgba(246,246,246,1); padding: 0.3rem 0.3rem;
    p{ .font2; }
    .BindPhone_phone{
        width: 100%; height: 0.72rem; display: flex; border: 0.01rem solid rgba(206,206,206,1); border-radius: 0.1rem; margin-top: 0.26rem; margin-bottom: 0.4rem;
        section{ 
            width: 1.09rem; height: 100%; border-right: 0.01rem solid rgba(206,206,206,1); text-align: center; line-height: 0.72rem; font-size: 0.28rem; .font2;
        }
        .input_phone{ 
            width: calc(100% - 1.09rem); height: 100%; padding: 0.13rem 0.2rem; border-top-right-radius: 0.1rem; border-bottom-right-radius: 0.1rem;
        }
    }
    .BindPhone_code{
        width: 100%; height: 0.72rem; display: flex; justify-content: space-between; margin-top: 0.26rem;
        .input_code{
            width: 4rem; height: 100%; border: 0.01rem solid rgba(206,206,206,1); border-radius: 0.1rem; padding: 0.13rem 0.2rem;
        }
        button{
            line-height: 0.72rem; text-decoration: underline; color: #E74744; .font2; background: none; border: 0; outline: none;
        }
    }

    .BindPhone_active{
        color: #AEAEAE!important;
    }
}

.BindPhone_btn{
    width: 6.7rem; height: 0.96rem; line-height: 0.96rem; text-align: center; color:rgba(255,255,255,1); text-shadow:0px 1px 0px rgba(0,0,0,0.3);
    font-size: 0.36rem; .font1; margin: 0.3rem auto;
    background:rgba(206,206,206,1); border-radius: 0.48rem; box-shadow:0px 0px 0.2rem 0px rgba(0,0,0,0.16);
}
.BindPhone_btn_active{
    background:linear-gradient(90deg,rgba(231,71,68,1),rgba(231,155,153,1))!important;
}
</style>



<template>
    <div id="BindCard">

        <div class="BindCard">
            <div class="BindCard_list">
                <p>选择银行</p><div class="BindCard_list_input"><input type="text" placeholder="请输入银行"></div>
            </div>
            <div class="BindCard_list">
                <p>持卡人姓名</p><div class="BindCard_list_input"><input type="text" placeholder="请正确填写持卡人姓名"></div>
            </div>
            <div class="BindCard_list">
                <p>银行卡号</p>
                <div class="BindCard_list_input">
                    <input type="text" placeholder="添加/扫描银行卡号">
                    <van-uploader class="BindCard_file" :after-read="onRead" accept="image/gif, image/jpeg">
                        <img src="../../assets/img/camera.png" alt="">
                    </van-uploader>
                </div>
            </div>
            <div class="BindCard_list">
                <p>归属地</p>
                <div class="BindCard_list_input_address">
                    <div class="provinces"><input class="province" type="text"></div><span>省</span>
                    <div class="citys"><input class="city" type="text"></div><span>市</span>
                </div>
            </div>
        </div>

        <div class="BindCard_btn" :class="{BindCard_btn_active: phone.length == 11 && code.length == 6}" @click="next">确 &nbsp;定</div>

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
        document.title = '绑定银行卡'
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
        },
        onRead(file){
            console.log(file)
        },
    },
}
</script>
<style lang="less" scoped>
#BindCard{
    width: 100%; height: 100%; background-color: white; padding-top: 1rem;
}

.font1{ font-family:PingFang-SC-Bold; font-weight:bold; }
.font2{ font-family:PingFang-SC-Medium; font-weight:Medium; }
.font3{ font-family:PingFang-SC-Regular;; font-weight:Regular; }


.BindCard{
    width: 100%; height: 3.98rem; background:rgba(246,246,246,1); padding: 0.3rem 0.3rem; overflow: hidden;
    .BindCard_list{
        width: 100%; height: 0.62rem; display: flex; justify-content: space-between; margin-bottom: 0.3rem;
        p{ line-height: 0.62rem; font-size: 0.28rem; .font2; color:rgba(0,0,0,1); }
        .BindCard_list_input,.BindCard_list_input_address{
            width: 4.84rem; height: 100%; border-radius: 0.1rem; outline: none!important; background:rgba(255,255,255,1); border:0.01rem solid rgba(206,206,206,1);
            .input; position: relative;
            .BindCard_file{
                position: absolute; right: 0.3rem; top: 0.12rem;
                img{ width: 0.38rem; height: 0.34rem; }
            }
        }
        .input{
            input{ width: 100%; height: 100%; background: none; border: 0; padding-left: 0.3rem; line-height: 0.4rem; }
            :-ms-input-placeholder{ font-size: 0.28rem; }
            ::-webkit-input-placeholder{ font-size: 0.28rem; }
        }
        .BindCard_list_input_address{
            border: 0; background: none; display: flex;
            span{ line-height: 0.62rem; font-size: 0.24rem; .font3; color:rgba(59,59,59,1); }
            div{ background:rgba(255,255,255,1); border:0.01rem solid rgba(206,206,206,1); border-radius: 0.1rem; }
            .province,.city{
                width: 1.95rem; height: 100%; 
            }
            .provinces,.citys{ margin-right: 0.1rem; }
            .citys{ margin-left: 0.28rem; }
        }
    }
}


.BindCard_btn{
    width: 4rem; height: 0.96rem; line-height: 0.96rem; text-align: center; color:rgba(255,255,255,1); text-shadow:0px 1px 0px rgba(0,0,0,0.3);
    font-size: 0.36rem; .font1; margin: 0.3rem auto;
    background:rgba(206,206,206,1); border-radius: 0.48rem; box-shadow:0px 0px 0.2rem 0px rgba(0,0,0,0.16);
}
.BindCard_btn_active{
    background:linear-gradient(90deg,rgba(231,71,68,1),rgba(231,155,153,1))!important;
}
</style>



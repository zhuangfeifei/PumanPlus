<template>
    <div id="BindCertificates">

        <div class="BindCertificates_content">
            <div class="BindCertificates_list">
                <p>手机号码</p><p class="list_ringht">{{user.phonenumber || bindList.phone}}</p>
            </div>
            <div class="BindCertificates_list">
                <span>业主姓名</span><input class="list_ringht" type="text" v-model="bindList.buyerName" placeholder="请输入">
            </div>
            <div class="BindCertificates_list">
                <span>证件类型</span><div class="list_ringhts" @click="isShow">{{cardTypeName ? cardTypeName : '请选择'}}</div>
            </div>
            <div class="BindCertificates_list">
                <span>证件号码</span><input class="list_ringht" type="text" v-model="bindList.cardNo" placeholder="请输入">
                <!-- <img class="scanning" src="../../assets/img/scanning.png" alt=""> -->
                <!-- <van-uploader :after-read="onRead" accept="image/gif, image/jpeg">
                        <img class="scanning" src="../../assets/img/scanning.png" alt="">
                </van-uploader> -->
            </div>
            <!-- <div class="BindCertificates_list BindCertificates_list_">
                <div><p>证件照</p><p class="list_left">上传正反各一张图</p></div>
                <div class="files_imgs">                                                                                                   
                    <div class="files_imgs_list" v-for="(item,index) in bindList.files" :key="index">
                        <img :src="item.content" alt="">
                        <img @click="deletes(index)" class="delet" src="../../assets/img/deleteImg.png" alt="">
                    </div>
                    <van-uploader :after-read="onRead" accept="image/gif, image/jpeg" :disabled="disabled">
                        <div class="files"><img src="../../assets/img/files.png" alt=""></div>
                    </van-uploader>
                </div>
            </div> -->
        </div>

        <div class="BindCertificates_btn" :class="{BindCertificates_btn_active: isBind}" @click="next">提 &nbsp;交</div>

        <van-popup v-model="show" position="bottom" :overlay="true">
            <van-picker class="BindCertificates_" show-toolbar title="证件类型" :columns="documentType" @cancel="onCancel" @confirm="onConfirm" 
                confirm-button-text="确定" :item-height="50"/>
        </van-popup>

        <van-popup v-model="success" class="Success">
            <div>
                <p>...</p><br><br><p>认证中</p><p>请稍后</p>
            </div>
        </van-popup>

    </div>
</template>
<script>
export default {
    data() {
        return {
            documentType:['身份证','护照','台胞证','港澳通行证','军官证'], show: false, disabled: false, isBind: false,
            bindList:{ phone:'', buyerName:'',cardNo:'', cardType: '' }, cardTypeName: '', success: false
        }
    },
    components: {
        
    },
    computed: {
        user(){
            if(this.$store.state.user == '') this.$store.commit('USER')
            return this.$store.state.user
        },
    },
    created(){
        this.bindList.phone = this.$route.query.phone || ''
    },
    methods: {
        isShow(){
            this.show = !this.show
        },
        onConfirm(value, index) {
            this.cardTypeName = value
            this.bindList.cardType = index
            this.isShow()
        },
        onCancel() {
            this.isShow()
        },
        onRead(file){
            this.bindList.files.push(file)
        },
        // deletes(index){
        //     this.bindList.files.splice(index,1)
        // },
        next(){
            if(this.isBind){
                this.success = true
                setTimeout(()=>{this.success = false},3000)
                this.user.phonenumber != '' ? this.bindList.phone = this.user.phonenumber : ''
                this.$store.dispatch('auth', this.bindList)
            }
        }
    },
    watch: {
        bindList:{
            handler(val,old) {
                val.buyerName != '' && val.cardType >= 0 && val.cardNo.length > 0 ? this.isBind = true : this.isBind = false
            },
            deep: true
        }
    }
}
</script>
<style lang="less" scoped>
#BindCertificates{
    width: 100%; height: 100%; background-color: white; overflow: hidden;
}

.font1{ font-family:PingFang-SC-Bold; font-weight:bold; }
.font2{ font-family:PingFang-SC-Medium; font-weight:Medium; }
.font3{ font-family:PingFang-SC-Regular;; font-weight:Regular; }


.BindCertificates_content{
    width: 100%; height: 5rem; background:rgba(246,246,246,1); padding: 0 0.3rem;
    .BindCertificates_list{
        width: 100%; height: 1.23rem; display: flex; justify-content: space-between;
        border-bottom: 0.01rem solid rgba(206,206,206,1); .font2; font-size: 0.28rem;
        span,p,.list_ringhts{ line-height: 1.23rem; }
        span::before{
            content: '*'; color: #E74744;
        }
        input{
            width: 5rem; height: 0.72rem; margin-top: 0.255rem; line-height: o.255rem; text-align: right; border: 0; outline: none; background: none;
        }
        ::-webkit-input-placeholder{
            color: #E74744!important;
        }
        ::-moz-placeholder{
            color: #E74744!important;
        }
        .list_ringht{
            color: #E74744; font-size: 0.28rem;
        }
        .list_ringhts{ width: 5rem; color: #E74744; font-size: 0.28rem; text-align: right; }
        .scanning{ width: 0.3rem; height: 0.3rem; margin-top: 0.45rem; }
    }
    .BindCertificates_list:last-child{ border: 0 }
    .BindCertificates_list_{
        width: 100%; height: 1.4rem; border: 0; padding-top: 0.3rem;
        div:nth-child(1){
            width: 2rem;
            p{line-height: 0.5rem!important;}
            .list_left{
                color: #E74744; font-size: 0.24rem;
            }
        }
        .files_imgs{
            width: 4.7rem; height: 100%; padding-top: 0.15rem;
            .files_imgs_list{
                width: 1.2rem; height: 1.2rem; float: left; position: relative; margin-right: 0.35rem;
                img{ width: 100%; height: 100%; }
                .delet{ width: 0.3rem; height: 0.3rem; position: absolute; right: -0.15rem; top: -0.15rem; }
            }
            .files{
                width: 1.2rem; height: 1.2rem; float: left; text-align: center; background:rgba(232,232,232,1);
                img{ width: 0.48rem; height: 0.42rem; margin-top: 0.36rem; }
            }
        }
    }
}


.BindCertificates_{
    width: 100%;
}

.BindCertificates_btn{
    width: 6.7rem; height: 0.96rem; line-height: 0.96rem; text-align: center; color:rgba(255,255,255,1); text-shadow:0px 1px 0px rgba(0,0,0,0.3);
    font-size: 0.36rem; .font1; margin: 0.3rem auto;
    background:rgba(206,206,206,1); border-radius: 0.48rem; box-shadow:0px 0px 0.2rem 0px rgba(0,0,0,0.16);
}
.BindCertificates_btn_active{
    background:linear-gradient(90deg,rgba(231,71,68,1),rgba(231,155,153,1))!important;
}




.Success{
    width: 100vw; height: 100vh; background: none; text-align: center; color: white; .font1; font-size: 0.36rem;
    padding-top: 3rem; line-height: 0.48rem; letter-spacing: 0.1rem; overflow: hidden;
}


.Success p:nth-child(1) {
  -webkit-animation: loader 3s 600ms infinite ease-in-out;
  animation: loader 3s 600ms infinite ease-in-out;
}


@keyframes loader {
  0% {
    opacity: 0;
    transform: translateX(-1rem) scale(2);
  }
  33% {
    opacity: 1;
    transform: translateX(0px) scale(3);
  }
  66% {
    opacity: 1;
    transform: translateX(0px) scale(2);
  }
  100% {
    opacity: 0;
    transform: translateX(1rem) scale(3);
  }
}
@-webkit-keyframes loader {
  0% {
    opacity: 0;
    transform: translateX(-1rem) scale(2);
  }
  33% {
    opacity: 1;
    transform: translateX(0px) scale(3);
  }
  66% {
    opacity: 1;
    transform: translateX(0px) scale(2);
  }
  100% {
    opacity: 0;
    transform: translateX(1rem) scale(3);
  }
}
</style>



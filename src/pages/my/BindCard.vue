<template>
    <div id="BindCard">

        <div class="BindCard">
            <div class="BindCard_list">
                <p>选择银行</p><div class="BindCard_list_input"><input type="text" v-model="bankName" placeholder="请输入银行"></div>
            </div>
            <div class="BindCard_list">
                <p>持卡人姓名</p><div class="BindCard_list_input"><input type="text" v-model="bindList.realName" placeholder="请正确填写持卡人姓名"></div>
            </div>
            <div class="BindCard_list">
                <p>银行卡号</p>
                <div class="BindCard_list_input">
                    <input type="text" v-model="bindList.bankNo" placeholder="添加银行卡号">
                    <!-- <van-uploader class="BindCard_file" :after-read="onRead" accept="image/gif, image/jpeg">
                        <img src="../../assets/img/camera.png" alt="">
                    </van-uploader> -->
                </div>
            </div>
            <div class="BindCard_list">
                <p>归属地</p>
                <div class="BindCard_list_input_address">
                    <div class="provinces"><input v-model="bindList.bankProvince" class="province" type="text"></div><span>省</span>
                    <div class="citys"><input v-model="bindList.bankCity" class="city" type="text"></div><span>市</span>
                </div>
            </div>
        </div>

        <div class="BindCard_isDefaults" @click="bindList.isDefault == 0 ? bindList.isDefault = 1 : bindList.isDefault = 0">
            <img :src="bindList.isDefault == 0 ? img[0] : img[1]" alt=""><span>设为默认</span>
        </div>

        <div class="bankNameList" :class="{bankNameListActive: bankNameList.length > 0}"><p v-for="(item,index) in bankNameList" :key="index" @click="bank(item)">{{item}}</p></div>

        <div class="BindCard_btn" :class="{BindCard_btn_active: isBind}" @click="next">确 &nbsp;定</div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            bindList:{realName:'', bankNo:'', bankName:'', bankProvince:'', bankCity:'', id:'', isDefault:0}, bankName:'', bankNameList:[], isBind: false,
            img:[require('../../assets/img/checke.png'), require('../../assets/img/checked.png')]
        }
    },
    components: {
        
    },
    computed: {
        user(){
            if(this.$store.state.user == '') this.$store.commit('USER')
            return this.$store.state.user
        }
    },
    created(){
        document.title = '绑定银行卡'

        this.$nextTick(()=>{
            if(this.$route.query.list){
                let list = this.$route.query.list
                this.bindList = {
                    realName: this.user.name, bankNo: list.bankNo, bankName: list.bankName, bankProvince: list.province, bankCity: list.city, id: list.id, isDefault: list.isDefault
                }
                this.bankName = list.bankName
            }else{
                this.bindList.realName = this.user.name
            }
        })
    },
    methods: {
        next(){
            // var list = {realName: this.realName, bankNo: this.bankNo, bankProvince: this.bankProvince, bankName: this.bankName, bankCity: this.bankCity}
            this.bindList.bankName = this.bankName
            this.$store.dispatch('bank', this.bindList)
        },
        // onRead(file){
        //     console.log(file)
        // },
        bank(item){
            this.bankName = item 
            setTimeout(()=>{
                this.bankNameList = []
            },100)
        }
    },
    watch:{
        bankName(val,old){
            let yhName = {
                '北京银行':'BJYH','工商银行':'GSYH','光大银行':'GDYH','华夏银行':'HXYH','建设银行':'JSYH','交通银行':'JTYH','民生银行':'MSYH','南京银行':'NJYH','宁波银行':'NBYH',
                '农业银行':'NYYH','浦发银行':'PFYH','深圳发展银行':'SZFZYH','兴业银行':'XYYH','邮政银行':'YZYH','招商银行':'ZSYH','中国银行':'ZGYH','中信银行':'ZXYH'
            };
            let bankNameList = []
            for(let key in yhName){
                if(key.indexOf(val) >= 0){
                    bankNameList.push(key)
                }
            }
            this.bankNameList = bankNameList
        },
        bindList:{
            handler(val,old) {
                val.realName != '' && val.bankNo != '' && val.bankProvince != '' && this.bankName != '' && val.bankCity != '' ? this.isBind = true : this.isBind = false
            },
            deep: true
        }
    }
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
        width: 100%; height: 0.62rem; display: flex; justify-content: space-between; margin-bottom: 0.3rem; position: relative;
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

.BindCard_isDefaults{
    width: 100%; height: 0.4rem; display: flex; padding-left: 0.3rem; margin-top: 0.3rem; align-items: center; margin-bottom: 0.6rem; background-color: white;
    img{ width: 0.3rem; height: 0.3rem; margin-right: 0.2rem; }
}



.bankNameList{
    width: 4.7rem; max-height: 4.8rem; position: absolute; top: 1.95rem; right: 0.37rem; background-color: white; z-index: 2; padding: 0 0.3rem;
    overflow-y: auto;
    p{ line-height: 0.6rem; border-bottom: 0.01rem solid #CECECE; }
    p:last-child{ border: 0; }
}
.bankNameListActive{ border: 0.01rem solid #CECECE; }


.BindCard_btn{
    width: 4rem; height: 0.96rem; line-height: 0.96rem; text-align: center; color:rgba(255,255,255,1); text-shadow:0px 1px 0px rgba(0,0,0,0.3);
    font-size: 0.36rem; .font1; margin: 0.3rem auto;
    background:rgba(206,206,206,1); border-radius: 0.48rem; box-shadow:0px 0px 0.2rem 0px rgba(0,0,0,0.16);
}
.BindCard_btn_active{
    background:linear-gradient(90deg,rgba(231,71,68,1),rgba(231,155,153,1))!important;
}
</style>



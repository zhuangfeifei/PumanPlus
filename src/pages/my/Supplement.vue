<template>
    <div id="Supplement">

        <div class="Supplement">
            <div class="Supplement_list" @click="isShow">
                <span>商铺号</span><div class="list_ringhts"><p>{{bindList.identType ? bindList.identType : '请选择'}}</p><img src="../../assets/img/links.png" alt=""></div>
            </div>
            <div class="Supplement_list_">
                <div><p>买卖合同</p><p class="list_left">最多添加1张</p></div>
                <div class="Supplement_files_imgs">
                    <div class="Supplement_files_imgs_list" v-for="(item,index) in bindList.files" :key="index">
                        <img :src="item.content" alt="">
                        <img @click="deletes(index)" class="delet" src="../../assets/img/deleteImg.png" alt="">
                    </div>
                    <van-uploader :after-read="onRead" accept="image/gif, image/jpeg" :disabled="disabled">
                        <div class="Supplement_files"><img src="../../assets/img/files.png" alt=""></div>
                    </van-uploader>
                </div>
            </div>
        </div>

        <div class="Supplement_btn" :class="{Supplement_btn_active: isBind && disabled}" @click="next">提 &nbsp;交</div>

        <van-popup v-model="show" position="bottom" :overlay="true">
            <van-picker class="Supplement_" show-toolbar title="商铺号" :columns="documentType" @cancel="onCancel" @confirm="onConfirm" 
                confirm-button-text="确定" :item-height="50"/>
        </van-popup>

    </div>
</template>
<script>
export default {
    data() {
        return {
            show: false, disabled: false, isBind: false,
            bindList:{ shopId:'', files:[] },
        }
    },
    components: {
        
    },
    beforeCreate(){
        this.$store.dispatch('entrust')
    },
    computed: {
        entrust(){
            return this.$store.state.entrust
        },
        documentType(){
            let documentType = []
            for(let val of this.entrust){
                documentType.push(val.shopNo)
            }
            return documentType
        },
    },
    created(){
        document.title = '信息补充'
        this.bindList.phone = this.$route.query.phone
    },
    methods: {
        isShow(){
            this.show = !this.show
        },
        onConfirm(value, index) {
            this.bindList.identType = value
            this.bindList.shopId = this.entrust[index].shopId
            this.isShow()
        },
        onCancel() {
            this.isShow()
        },
        onRead(file){
            this.bindList.files.push(file)
        },
        deletes(index){
            this.bindList.files.splice(index,1)
        },
        next(){
            if(this.isBind && this.disabled) {
                var formData = new FormData()
                formData.append('access_type', 'WXH5')
                formData.append('wxh', this.$store.state.puman_wxh)
                formData.append('openId', this.$store.state.puman_openId)
                formData.append('unionId', this.$store.state.puman_unionId)
                formData.append('shopId	', this.bindList.shopId)
                for(let val of this.bindList.files){   
                    formData.append('file', val.file)
                }
                this.$store.dispatch('signfile', formData)
            }
        }
    },
    watch: {
        bindList:{
            handler(val,old) {
                val.files.length >= 1 ? this.disabled = true : this.disabled = false
                val.shopId != '' ? this.isBind = true : this.isBind = false
            },
            deep: true
        }
    }
}
</script>
<style lang="less" scoped>
#Supplement{
    width: 100%; height: 100%; background-color: white;
}

.font1{ font-family:PingFang-SC-Bold; font-weight:bold; }
.font2{ font-family:PingFang-SC-Medium; font-weight:Medium; }
.font3{ font-family:PingFang-SC-Regular;; font-weight:Regular; }


.Supplement{
    width: 100%; background:rgba(246,246,246,1); padding: 0 0.3rem 0.1rem 0.3rem;
    .Supplement_list{
        width: 100%; height: 1.23rem; display: flex; justify-content: space-between;
        border-bottom: 0.01rem solid rgba(206,206,206,1); .font2; font-size: 0.28rem;
        span,p,.list_ringhts{ line-height: 1.23rem; }
        span::before{
            content: '*'; color: #E74744;
        }
        .list_ringhts{ 
            width: 1.3rem; color: #E74744; font-size: 0.28rem; display: flex; justify-content: space-between; 
            img{ width: 0.16rem; height: 0.29rem; margin-top: 0.47rem; } 
        }
    }
    .Supplement_list_{
        width: 100%; border: 0; padding-top: 0.3rem; display: flex;
        div:nth-child(1){
            width: 2rem; .font2; font-size: 0.28rem;
            p{line-height: 0.5rem!important;}
            .list_left{
                color: #E74744; font-size: 0.24rem;
            }
        }
        .Supplement_files_imgs{
            width: 4.7rem; padding-top: 0.15rem; display: inline-block;
            .Supplement_files_imgs_list{
                width: 1.2rem; height: 1.2rem; float: left; position: relative; margin-right: 0.35rem; margin-bottom: 0.3rem;
                img{ width: 100%; height: 100%; }
                .delet{ width: 0.3rem; height: 0.3rem; position: absolute; right: -0.15rem; top: -0.15rem; }
            }
            .Supplement_files{
                width: 1.2rem; height: 1.2rem; float: left; text-align: center; background:rgba(232,232,232,1); margin-bottom: 0.3rem;
                img{ width: 0.48rem; height: 0.42rem; margin-top: 0.36rem; }
            }
        }
    }
}


.Supplement_{
    width: 100%;
}

.Supplement_btn{
    width: 6.7rem; height: 0.96rem; line-height: 0.96rem; text-align: center; color:rgba(255,255,255,1); text-shadow:0px 1px 0px rgba(0,0,0,0.3);
    font-size: 0.36rem; .font1; margin: 0.3rem auto;
    background:rgba(206,206,206,1); border-radius: 0.48rem; box-shadow:0px 0px 0.2rem 0px rgba(0,0,0,0.16);
}
.Supplement_btn_active{
    background:linear-gradient(90deg,rgba(231,71,68,1),rgba(231,155,153,1))!important;
}




</style>



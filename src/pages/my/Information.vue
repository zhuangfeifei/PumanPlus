<template>
    <div id="Information">

        <div class="Information_content">
            <div class="Information_list">
                <span>姓名</span><input class="list_ringht" type="text" placeholder="请输入姓名">
            </div>
            <div class="Information_list">
                <span>昵称</span><input class="list_ringht" type="text" placeholder="请输入昵称">
            </div>
            <div class="Information_list" @click="sexChange">
                <span>性别</span><p><span class="list_ringhts">{{sex}}</span><img class="list_link" src="../../assets/img/links.png" alt=""></p>
            </div>
            <div class="Information_list">
                <span>生日</span><p><span class="list_ringhts">{{list.birthday}}</span><img class="list_link" src="../../assets/img/links.png" alt=""></p>
                <datetime @on-change="change" class="date" :title="''" v-model="list.birthday" :min-year="min" :max-year="max"></datetime>
            </div>
            <router-link to="/BindCard">
            <div class="Information_list">
                <span>银行卡</span><p><span class="list_ringhts">绑定银行卡</span><img class="list_link" src="../../assets/img/links.png" alt=""></p>
            </div>
            </router-link>
        </div>

        <div class="Information_btn" :class="{Information_btn_active: isBind}" @click="next">确 &nbsp;定</div>


        <actionsheet v-model="sexChecked" :menus="menus" @on-click-menu="sex_click"></actionsheet>


    </div>
</template>
<script>
import { Calendar,Datetime,Actionsheet } from 'vux'
export default {
    data() {
        return {
            sexChecked:false, isBind:true,
            menus:['保密','男','女'], min:1950, max:2018,integral:'',
            list:{ name:'', sex:'', birthday:'' }, sex:''
        }
    },
    components: {
        Calendar,Datetime,Actionsheet
    },
    created(){
        this.$nextTick(() => {
            // this.list.name = this.user.name
            // this.list.birthday = this.user.birthday != '' ? this.user.birthday.substring(0,10) : ''
            // this.list.sex = this.user.sex
            // this.sex = this.menus[this.user.sex]
        })
    },
    methods: {
        next(){
            this.success = true
            // setTimeout(()=>{
                this.$router.push({path:'/My'})
            // },3000)
        },
        sexChange(){
            this.sexChecked = !this.sexChecked
        },
        sex_click (key) {
            this.sex = this.menus[key]
            this.list.sex = key
        },
        change (value) {
            this.list.birthday = value
        },
    },
    watch: {
        bindList:{
            handler(val,old) {
                val.files.length >= 2 ? this.disabled = true : this.disabled = false
            },
            deep: true
        }
    }
}
</script>
<style lang="less" scoped>
#Information{
    width: 100%; height: 100%; background-color: white;
}

.font1{ font-family:PingFang-SC-Bold; font-weight:bold; }
.font2{ font-family:PingFang-SC-Medium; font-weight:Medium; }
.font3{ font-family:PingFang-SC-Regular;; font-weight:Regular; }


.Information_content{
    width: 100%; height: 6.14rem; background:rgba(246,246,246,1); padding: 0 0.3rem;
    .Information_list{
        width: 100%; height: 1.23rem; display: flex; justify-content: space-between; position: relative;
        border-bottom: 0.01rem solid rgba(206,206,206,1); .font2; font-size: 0.28rem;
        span,p,.list_ringhts{ line-height: 1.23rem; }
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
            color:rgba(59,59,59,1)!important; font-size: 0.28rem;
        }
        .list_ringhts{ width: 5rem; color: #E74744; font-size: 0.28rem; text-align: right; }
        .list_link{
            float: right; width: 0.16rem; height: 0.29rem; margin-top: 0.48rem; margin-left: 0.19rem;
        }
        span:nth-child(2){ text-align: right; }
    }
    .Information_list:last-child{
        border: 0;
    }
}

.Information_{
    width: 100%;
}

.Information_btn{
    width: 6.7rem; height: 0.96rem; line-height: 0.96rem; text-align: center; color:rgba(255,255,255,1); text-shadow:0px 1px 0px rgba(0,0,0,0.3);
    font-size: 0.36rem; .font1; margin: 0.3rem auto;
    background:rgba(206,206,206,1); border-radius: 0.48rem; box-shadow:0px 0px 0.2rem 0px rgba(0,0,0,0.16);
}
.Information_btn_active{
    background:linear-gradient(90deg,rgba(231,71,68,1),rgba(231,155,153,1))!important;
}

.date{
    width: calc(75% - 0.26rem); height: 0.86rem; border: 0!important; display: flex; text-align: right; .font2; position: absolute; right: 0; top: 0; 
    opacity: 0;
}

a{
    color:rgba(59,59,59,1);
}
</style>



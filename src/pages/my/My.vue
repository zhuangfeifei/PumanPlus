<template>
    <div id="My">

        <nav class="my_title">
            <div class="my_">
                <section><img src="../../assets/img/1.jpg" alt=""></section>
                <div class="my_content">
                    <p><span>拥之则安</span><router-link to="/Authentication"><img class="my_Authentication" src="../../assets/img/Authentication.png" alt=""></router-link></p>
                    <p class="my_content_p">您还未进行业主认证</p>
                </div>
            </div>
        </nav>
        <p class="my_balance"><span>当前余额</span><span>0</span></p>

        <div class="my_list">
            <div class="my_list_" v-for="(item, index) in myList" :key="index">
                <router-link :to="item.url">
                    <van-row>
                        <van-col span="4" class="my_list_logo"><img :src="item.img" alt=""></van-col>
                        <van-col span="18"><span>{{item.name}}</span></van-col>
                        <van-col span="2" class="my_list_link"><img src="../../assets/img/link.png" alt=""></van-col>
                    </van-row>
                </router-link>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            myList:[
                {name:'个人信息', img:require('../../assets/img/Personal.png'), url:'/Authentication/Information'},
                {name:'信息补充', img:require('../../assets/img/information.png'), url:'/Authentication/Supplement'},
                {name:'已绑商铺', img:require('../../assets/img/TiedShops.png'), url:'/BindShops'},
                {name:'我的预约', img:require('../../assets/img/MyReservation.png'), url:'/'},
                {name:'关于帮助', img:require('../../assets/img/AboutHelp.png'), url:'/Help'},
            ]
        }
    },
    created(){
        document.title = '我的'
        this.$store.commit('ACTIVE',4)
    },
    methods: {
        name() {
            
        }
    },
}
</script>

<style lang="less" scoped>
#My{
    width: 100%; height: 100%;
}

.font1{ font-family:PingFang-SC-Bold; font-weight:bold; }
.font2{ font-family:PingFang-SC-Medium; font-weight:Medium; }
.font3{ font-family:PingFang-SC-Regular;; font-weight:Regular; }

.my_title{
    width: 100%; height: 3.09rem; padding-top: 1.2rem;
    background: url('../../assets/img/my_title.png') no-repeat; background-size: 100% 100%;
    .my_{
        width: 100%; height: 1.9rem; padding: 0 0.3rem 0 0.49rem; display: flex;
        section{
            width: 1.72rem; height: 1.72rem; border-radius: 50%;
            img{ width: 100%; height: 100%; border-radius: 50%; border: 0.05rem solid white; }
        }
        .my_content{
            width: calc(100vw - 1.72rem - 0.3rem - 0.49rem - 0.79rem); height: 100%; margin-left: 0.79rem; padding-top: 0.4rem;
            span{ font-size: 0.48rem; .font2; color:rgba(255,255,255,1); }
            .my_Authentication{
                width: 1.8rem; height: 0.6rem; float: right;
            }
            .my_content_p{ color:rgba(59,59,59,1); .font2; margin-top: 0.2rem; }
        }
    }
}

.my_balance{
    text-align: center; padding-left: 0.4rem; margin-top: 0.14rem;
    span:nth-child(1){ color:rgba(0,0,0,1); .font2; margin-right: 0.45rem; }
    span:nth-child(2){ color: #E74744; font-size: 0.36rem; .font1; }
}

.my_list{
    width: 6.9rem; height: 6.24rem; margin: 0.6rem auto; padding: 0 0.3rem;
    border-radius: 0.1rem; box-shadow:0px 0px 0.2rem 0px rgba(178,19,16,0.16);
    .my_list_{
        width: 100%; height: 1.24rem; border-bottom: 0.01rem solid rgba(206,206,206,1);
        .my_list_logo{
            // text-align: center;
            img{ width: 0.64rem; height: 0.64rem; border-radius: 50%; margin-top: 0.3rem; }
        }
        span{  line-height: 1.24rem; color:rgba(0,0,0,1); .font2; }
        .my_list_link{
            text-align: center;
            img{ width: 0.16rem; height: 0.28rem; float: right; margin-top: 0.49rem; }
        }
    }
    .my_list_:last-child{
        border: 0;
    }
}
</style>
<template>
    <div id="Home">

        <nav class="home_top">
            <div class="home_circle">
                <x-circle :percent="percent" :stroke-width="6" :trail-width="6" :stroke-color="['#FDBB59', '#E74744']" trail-color="rgba(0,0,0,0.05)">
                    <p><countup v-if="totalIncome >= 0" :end-val="totalIncome" :duration="0.7" :decimals="2" class="demo1"></countup></p>
                    <span>总收益</span>
                </x-circle>
            </div>
            <div class="Home_presented">
                <router-link to="/AlreadyPresented"><div class="Already_presented">¥{{index.applied}}</div></router-link>
                <div class="Canbe_presented">¥{{index.balance}}</div>
                <router-link to="/WithdrawalOf"><div class="Inthe_presented">¥{{index.applying}}</div></router-link>
            </div>
        </nav>

        <footer class="Home_footer">
            <div class="Home_footer_list" v-for="(item,index) in footerImg" :key="index"><router-link :to="item.url"><img :src="item.img" alt=""></router-link></div>
        </footer>

    </div>
</template>

<script>
import { XCircle, Countup} from 'vux'
export default {
    data() {
        return {
            currentRate: 0,
            footerImg:[
                { img:require('../../assets/img/Shop_reservation.png'), url:'/Reservation'},
                { img:require('../../assets/img/Shop_signing.png'), url:'/Signing'},
                { img:require('../../assets/img/bind_shops.png'), url:'/BindShops'},
                { img:require('../../assets/img/Rent_extraction.png'), url:'/RentExtraction'},
            ],
            percent: 0,
        }
    },
    components: {
        XCircle,Countup
    },
    beforeCreate(){
        this.$store.dispatch('index')
    },
    computed: {
        index(){
            return this.$store.state.index
        },
        totalIncome(){
            return parseFloat(this.index.totalIncome)
        }
    },
    created(){
        document.title = '扑满'
        let a = setInterval(()=>{
            for(let i = 0; i < 75; i++){
                this.percent ++
                this.percent == 75 ? clearInterval(a) : ''
            }
        },100)
        this.$store.commit('ACTIVE',0)
    },
    methods: {
        name() {
            
        }
    },
}
</script>

<style lang="less" scoped>
#home{
    width: 100%; height: 100%;
}

.font1{ font-family:PingFang-SC-Bold; font-weight:bold; }

.home_top{
    width: 100%; height: 6.77rem; text-align: center; position: relative; padding-top: 1.1rem;
    background: url('../../assets/img/home_top.png') no-repeat; background-size: 100% 100%;
    .home_circle{
        width: 3.23rem; height: 3.23rem; border-radius: 50%; box-shadow: 0px 4px 10px 0px rgba(255,144,70,0.42); margin: 0 auto;
        color: rgba(0,0,0,1);
        p{  .font1; .demo1{ font-size: 0.46rem;} }
        p:before{
            content: '¥'; font-size: 0.3rem; margin-right: 0.09rem;
        }
    }
    .Home_presented{
        width: 100%; display: flex; position: absolute; bottom: 0.36rem; left: 0; 
        div{ 
            width: 2.1rem; height: 1rem; margin-left: 0.3rem; text-align: center; color: rgba(255,255,255,1); font-size: 0.36rem; line-height: 0.7rem;
            .font1; text-shadow: 1.8px 1px 1px black;
        }
        .Already_presented{
            background: url('../../assets/img/Already_presented.png') no-repeat; background-size: 100% 100%;
        }
        .Canbe_presented{
            background: url('../../assets/img/Canbe_presented.png') no-repeat; background-size: 100% 100%;
        }
        .Inthe_presented{
            background: url('../../assets/img/Inthe_presented.png') no-repeat; background-size: 100% 100%;
        }
    }
}

.Home_footer{
    width: 100%; height: 3.1rem; margin: 0.58rem 0;
    .Home_footer_list{ 
        width: 3.3rem; height: 1.4rem; margin-left: 0.3rem; float: left; box-shadow:0px 0px 0.2rem 0px rgba(178,19,16,0.16); margin-bottom: 0.3rem;
        img{ width: 100%; height: 100%; }
    }
}
</style>
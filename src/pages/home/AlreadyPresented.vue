<template>
    <div id="AlreadyPresented">

        <div class="AlreadyPresented_list" v-for="(item,index) in 2" :key="index">
            <img :src="index == 0 ? require('../../assets/img/Not_through.png') : require('../../assets/img/AlreadyPresented.png')" alt="">
            <h4><span>¥</span><span>200</span></h4>
            <p><span>中国建设银行</span><span>6400*******01000</span></p>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    computed: {
        
    },
    created(){
        document.title = '已提现'
    },
    methods: {
        name() {
            
        }
    },
}
</script>

<style lang="less" scoped>
#AlreadyPresented{
    width: 100%; height: 100%; padding-top: 0.48rem;
}

.font1{ font-family:PingFang-SC-Bold; font-weight:bold; }
.font2{ font-family:PingFang-SC-Medium; font-weight:Medium; }

.AlreadyPresented_list{
    width: 6.3rem; height: 2.3rem; border: 0.01rem solid rgba(206,206,206,1); border-radius: 0.1rem; margin: 0 auto; margin-bottom: 0.48rem;
    position: relative; text-align: center; padding-top: 0.65rem;
    img{ width: 1.21rem; height: 0.6rem; position: absolute; top: 0.2rem; left: -0.2rem; }
    h4{ 
        span:nth-child(1){ font-size: 0.48rem; .font1; }
        span:nth-child(2){ font-size: 0.6rem; margin-left: 0.19rem; .font1; }
    }
    p{ .font2; color:rgba(59,59,59,1); span:nth-child(2){ margin-left: 0.48rem; } }
}


</style>
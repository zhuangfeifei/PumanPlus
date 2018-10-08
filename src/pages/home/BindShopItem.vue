<template>
    <div id="BindShopItem">

        <p class="BindShopItem_content">商铺信息</p>
        <div class="BindShopItem_">
            <van-row>
                <van-col span="8"><h4>商铺号</h4></van-col>
                <van-col span="16">A1002</van-col>
            </van-row>
            <van-row>
                <van-col span="8"><h4>面积</h4></van-col>
                <van-col span="16">23.01m2</van-col>
            </van-row>
            <van-row>
                <van-col span="8"><h4>网签编号</h4></van-col>
                <van-col span="16">20170101001</van-col>
            </van-row>
        </div>
        <p class="BindShopItem_content">合同防伪编号</p>
        <div class="BindShopItem_number">
            <van-field class="number" v-model="value" placeholder="请输入合同防伪编号" />
        </div>

        <p class="BindShopItem_tip">温馨提示：只有签约后才能看到绑定商铺信息!</p>

        <div @click="result" class="Reservation_btn">提 &nbsp;交</div>


    </div>
</template>

<script>
export default {
    data() {
        return {
            value: '', startValue: '', endValue:''
        }
    },
    components: {
        
    },
    computed: {
        
    },
    created(){
        

        
    },
    methods: {
        result(){
            this.$router.push({path:'/Result', query:{title:'绑定商铺', status: 1}})
        }
    },
}
</script>

<style lang="less" scoped>
#BindShopItem{
    width: 100%; height: 100%;
}

.font1{ font-family:PingFang-SC-Bold; font-weight:bold; }
.font2{ font-family:PingFang-SC-Medium; font-weight:Medium; }
.font3{ font-family:PingFang-SC-Regular;; font-weight:Regular; }


.BindShopItem_content{
    font-size: 0.24rem; .font2; margin: 0.64rem 0 0.1rem 0.3rem; color:rgba(43,43,43,1);
}

.BindShopItem_{
    width: 100%; height: 2.05rem; background:rgba(246,246,246,1); padding: 0.2rem 0.3rem; line-height: 0.55rem; .font2; color:rgba(59,59,59,1);
    h4{ .font1; color:rgba(0,0,0,1);}
    
}

.BindShopItem_number{
    width: 100%; height: 1.32rem; background:rgba(246,246,246,1); padding-top: 0.3rem;
    .number{
        width: 6.92rem; height: 0.72rem; margin: 0 auto; border: 0.01rem solid rgba(206,206,206,1); border-radius: 0.1rem; padding: 0.13rem 0.3rem 0 0.3rem;
    }
}

.BindShopItem_tip{
    font-size: 0.24rem; color:rgba(0,0,0,1); .font3; margin: 0.3rem 0.3rem;
}

.Reservation_btn{
    width: 6.7rem; height: 0.96rem; color: white; font-size: 0.36rem; text-align: center; line-height: 0.96rem; margin: 0.3rem auto; text-shadow: 0.018rem 0.01rem 0.01rem black;
    background:linear-gradient(90deg,rgba(231,71,68,1),rgba(248,142,146,1)); border-radius: 0.48rem; box-shadow:0px 0px 0.2rem 0px rgba(178,19,16,0.16); .font1; margin-top: 2rem;
}

</style>
<template>
    <div id="ShopDetails">

        <nav class="ShopDetails">
            <div class="ShopDetails_tab" @click="tab">
                <section :class="{ShopDetails_active: tabShow}">商铺信息</section><section :class="{ShopDetails_active: !tabShow}">买受人信息</section>
            </div>
        </nav>

        <div v-if="tabShow" class="ShopDetails_">
            <div class="ShopDetails_content">
                <van-row><van-col span="9"><p>商铺号</p></van-col><van-col span="15"><span>A1002</span></van-col></van-row>
                <van-row><van-col span="9"><p>面积</p></van-col><van-col span="15"><span>23.01m2</span></van-col></van-row>
                <van-row><van-col span="9"><p>网签编号</p></van-col><van-col span="15"><span>20170101001</span></van-col></van-row>
                <van-row><van-col span="9"><p>单价(元)</p></van-col><van-col span="15"><span>1010.00</span></van-col></van-row>
                <van-row><van-col span="9"><p>单价(元)</p></van-col><van-col span="15"><span>1010.00</span></van-col></van-row>
                <van-row><van-col span="9"><p>权益人</p></van-col><van-col span="15"><span>王默默</span></van-col></van-row>
                <van-row><van-col span="9"><p>是否签约</p></van-col><van-col span="15"><span>已签约</span></van-col></van-row>
            </div>
            <div class="ShopDetails_contents">
                <van-row><van-col span="9"><p>房产证编号</p></van-col><van-col span="15"><span>20170101001</span></van-col></van-row>
                <van-row><van-col span="9"><p>土地证编号</p></van-col><van-col span="15"><span>20170101001</span></van-col></van-row>
                <van-row><van-col span="9"><p>不动产证编号</p></van-col><van-col span="15"><span>20170101001</span></van-col></van-row>
            </div>
        </div>

        <div v-else class="ShopDetails_Buyer">
            <div class="ShopDetails_Buyer_list" v-for="(item,index) in 4" :key="index">
                <p><img src="../../assets/img/user.png" alt=""><span>王某某</span></p>
                <p><img src="../../assets/img/phone.png" alt=""><span>130****001</span></p>
                <p><img src="../../assets/img/ID.png" alt=""><span>32110*******10001</span></p>
                <div v-if="index == 0" class="ShopDetails_Buyer_status">权益人</div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            tabShow:true
        }
    },
    computed: {
        
    },
    created(){
        document.title = '商铺详情'
    },
    methods: {
        tab(){
            this.tabShow = !this.tabShow
        }
    },
    filters: {
        fnName: function(value) {
            return value < 10 ? '0'+value : value
        }
    }
}
</script>

<style lang="less" scoped>
#ShopDetails{
    width: 100%; height: 100%; padding-bottom: 0.5rem;
}

.font1{ font-family:PingFang-SC-Bold; font-weight:bold; }
.font2{ font-family:PingFang-SC-Medium; font-weight:Medium; }
.font3{ font-family:PingFang-SC-Regular; font-weight:Regular; }

.ShopDetails{
    width: 100%; height: 1.2rem; padding-top: 0.3rem; .font2;
    .ShopDetails_tab{
        width: 4.6rem; height: 0.6rem; margin: 0 auto; display: flex;
        border: 0.035rem solid rgba(231,71,68,1); border-radius: 0.3rem; box-shadow:0px 0.2rem 0.8rem 0px rgba(38,38,38,0.1);
        section{
            width: 50%; height: 100%; text-align: center; line-height: 0.55rem;
        }
        section:nth-child(1){ border-top-left-radius: 0.3rem; border-bottom-left-radius: 0.3rem; }
        section:nth-child(2){ border-top-right-radius: 0.3rem; border-bottom-right-radius: 0.3rem; }
        .ShopDetails_active{
            background-color: rgba(231,71,68,1); color: white;
        }
    }
}


.ShopDetails_{
    width: 100%;
    .ShopDetails_content,.ShopDetails_contents{
        width: 100%; height: 5.82rem; background:rgba(246,246,246,1); padding-left: 0.3rem; line-height: 0.75rem; padding-top: 0.2rem;
        p{ .font1; color:rgba(0,0,0,1); }
        span{ .font2; color:rgba(59,59,59,1); }
    }
    .ShopDetails_contents{
        height: 2.77rem; margin-top: 0.3rem;
    }
}

.ShopDetails_Buyer{
    width: 100%;
    .ShopDetails_Buyer_list{
        width: 100%; height: 2rem; background:rgba(246,246,246,1); padding-left: 0.65rem; line-height: 0.6rem; padding-top: 0.1rem; margin-bottom: 0.3rem; position: relative;
        p:nth-child(1){ img{ width: 0.22rem; height: 0.25rem; } }
        p:nth-child(2){ img{ width: 0.23rem; height: 0.25rem; } }
        p:nth-child(3){ img{ width: 0.24rem; height: 0.17rem; } }
        span{ margin-left: 0.43rem; .font2; color:rgba(59,59,59,1); }
        .ShopDetails_Buyer_status{
            width: 1.25rem; height: 0.46rem; font-size: 0.24rem; color:rgba(231,71,68,1); .font1; text-align: center; line-height: 0.46rem;
            border:0.02rem solid rgba(231,71,68,1); border-radius:0.23rem; position: absolute; top: 0.21rem; right: 0.48rem;
        }
    }
}

</style>
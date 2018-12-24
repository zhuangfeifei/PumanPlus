<template>
    <div id="ShowDetails">

        <nav>提现金额<span>¥{{drawCash}}</span></nav>
        <div class="ShowDetails_content">
            <div><p>企业税费</p><p>个人税费</p><p>管理费</p><p>管理成本</p></div>
            <!-- <div><p>增值税 5%</p><p>房产税 3%</p><p>个税 0.5%</p></div> -->
            <div class="ShowDetails_content_num"><p>¥{{(drawCash/1.05*0.05 + drawCash/1.05*0.05*0.12).toFixed(2)}}</p><p>¥{{((drawCash/1.05*0.05) + (drawCash*0.03) + (drawCash*0.005)).toFixed(2)}}</p><p>以审计报告为主</p><p>以审计报告为主</p></div>
            <!-- <div class="ShowDetails_content_num"><p>¥{{(drawCash/1.05*0.05).toFixed(2)}}</p><p>¥{{(drawCash*0.03).toFixed(2)}}</p><p>¥{{(drawCash*0.005).toFixed(2)}}</p></div> -->
        </div>
        <div class="ShowDetails_amount">
            <span>实际到账金额</span><p>¥{{(drawCash - parseFloat((drawCash/1.05*0.05 + drawCash/1.05*0.05*0.12) + (drawCash/1.05*0.05) + (drawCash*0.03) + (drawCash*0.005))).toFixed(2)}}</p>
            <!-- <span>实际到账金额</span><p>¥{{drawCash - (parseFloat((drawCash/1.05*0.05).toFixed(2))+parseFloat((drawCash*0.03).toFixed(2))+parseFloat((drawCash*0.005).toFixed(2))).toFixed(2)}}</p> -->
        </div>
        <!-- <p class="ShowDetails_tip">温馨提示：在商城中消费可以免除相应税费</p> -->

    </div>
</template>

<script>
export default {
    data() {
        return {
            drawCash:''
        }
    },
    beforeCreate(){
        
    },
    computed: {
        
    },
    created(){
        document.title = '提现详情'

        this.drawCash = this.$route.query.drawCash
    },
    methods: {
        name() {
            
        }
    },
    filters:{
        filter(val){
            return `${val.substring(0,4)}*******${val.substring(val.length - 5,val.length)}`
        }
    }
}
</script>

<style lang="less" scoped>
#ShowDetails{
    width: 100%; height: 100%;
}

.font1{ font-family:PingFang-SC-Bold; font-weight:bold; }
.font2{ font-family:PingFang-SC-Medium; font-weight:Medium; }
.font3{ font-family:PingFang-SC-Regular;; font-weight:Regular; }


#ShowDetails nav{
    width: 100%; height: 1.24rem; padding: 0 0.3rem; .font2; line-height: 1.24rem;
    span{ margin-left: 0.3rem; color: #E74744; .font1; }
}
.ShowDetails_content{
    width: 100%; height: 2.6rem; background-color: #F6F6F6; padding: 0 0.3rem; display: flex; line-height: 0.6rem; padding-top: 0.1rem;
    p{ .font2; }
    .ShowDetails_content_num{ margin-left: 1rem; p{.font3} }
}

.ShowDetails_amount{
    width: 100%; height: 0.89rem; line-height: 0.89rem; padding: 0 0.3rem; display: flex; background:rgba(246,246,246,1); margin-top: 0.3rem;
    span{ color:rgba(0,0,0,1); .font2; }
    p{ color: #E74744; .font1; margin-left: 0.94rem; }
}

.ShowDetails_tip{
    font-size: 0.24rem; color: rgba(0,0,0,1); margin: 0.3rem; line-height: 0.3rem;.font3
}



</style>
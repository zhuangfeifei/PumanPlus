<template>
    <div id="MyReservation">

        <div class="MyReservation_list" v-for="(item,index) in myappointment" :key="index">
            <span>{{item.operateTime}}</span>
            <div>
                <p>预约时间 {{item.appointmentTime}}</p>
                <p class="MyReservation_remark">{{item.remark}}</p>
            </div>
        </div>
        <no-data v-if="myappointment.length == 0"></no-data>

    </div>
</template>

<script>
import NO from '@/components/_nodata'
export default {
    data() {
        return {
            
        }
    },
    components:{
        'no-data': NO
    },
    beforeCreate(){
        this.$store.dispatch('myappointment')
    },
    computed: {
        myappointment(){
            return this.$store.state.myappointment
        }
    },
    created(){
        document.title = '我的预约'
    },
    methods: {
        
    },
    filters: {
        fnName: function(value) {
            return value < 10 ? '0'+value : value
        }
    }
}
</script>

<style lang="less" scoped>
#MyReservation{
    width: 100%; height: 100%; padding-bottom: 0.5rem;
}

.font1{ font-family:PingFang-SC-Bold; font-weight:bold; }
.font2{ font-family:PingFang-SC-Medium; font-weight:Medium; }
.font3{ font-family:PingFang-SC-Regular; font-weight:Regular; }

.MyReservation_list{
    width: 100%; margin-top: 0.2rem; text-align: center; 
    span{ color: #808080; font-size: 0.28rem; line-height: 0.8rem; }
    div{
        width: 100%; padding: 0.2rem 0.3rem; background:rgba(246,246,246,1); text-align: left; line-height: 0.5rem;
        p{ .font3; color:rgba(0,0,0,1); }
        .MyReservation_remark{ color:rgba(59,59,59,1); font-size: 0.28rem; .font2; margin-top: 0.2rem; }
    }
}


</style>
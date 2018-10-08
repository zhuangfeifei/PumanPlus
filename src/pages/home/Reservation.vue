<template>
    <div id="Reservation">

        <nav class="Reservation_banner"></nav>
        <p class="Reservation_content">预约内容</p>
        <div class="Reservation_">
            <van-row class="Reservation_date">
                <van-col span="6"><h4>预约时间</h4></van-col>
                <van-col span="18" class="Reservation_time">
                    <div class="ReservationTitle"><span>{{value}}</span><img src="../../assets/img/Reservation_time.png" alt=""></div>
                    <datetime-range v-if="startValue != ''" class="ReservationDate" :title="'times'" :start-date="startValue" :end-date="endValue" :format="'MM月DD日'" @on-change="onChange"></datetime-range>
                </van-col>
            </van-row>
            <van-row>
                <van-col span="6"><h4>预约内容</h4></van-col>
                <van-col span="18" class="textarea_"><textarea name="" id=""  style="resize:none" ></textarea></van-col>
            </van-row>
        </div>

        <div @click="result" class="Reservation_btn">提 &nbsp;交</div>


    </div>
</template>

<script>
import { DatetimeRange } from 'vux'
export default {
    data() {
        return {
            value: '', startValue: '', endValue:''
        }
    },
    components: {
        DatetimeRange
    },
    computed: {
        
    },
    created(){
        document.title = '商铺预约'

        let myDate = new Date()
        this.value = `${this.checkTime(myDate.getMonth()+1)}月${this.checkTime(myDate.getDate())}日 ${this.checkTime(myDate.getHours())}:${this.checkTime(myDate.getMinutes())}`
        this.startValue = `${(myDate.getFullYear())}-${this.checkTime(myDate.getMonth()+1)}-${this.checkTime(myDate.getDate())}`
        this.endValue = `${myDate.getFullYear()}-12-30`
    },
    methods: {
        onChange (val) {
            this.value = `${val[0].substring(5,7)}月${val[0].substring(8,10)}日 ${val[1]}:${val[2]}`
        },
        checkTime(val){
            return parseInt(val) < 10 ? `0${val}` : val
        },
        result(){
            this.$router.push({path:'/Result',query:{title:'商铺预约', status: 0}})
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

.Reservation_banner{
    width: 100%; height: 3.28rem;
    background: url('../../assets/img/Reservation_banner.png') no-repeat; background-size: 100% 100%;
}

.Reservation_content{
    font-size: 0.24rem; .font2; margin: 0.63rem 0 0.1rem 0.3rem;
}

.Reservation_{
    width: 100%; height: 5.59rem; background:rgba(246,246,246,1); padding: 0.3rem 0.3rem;
    h4{ .font1; }
    .Reservation_date{
        width: 100%; height: 0.72rem; margin-bottom: 0.3rem; line-height: 0.72rem;
        .Reservation_time{
            height: 100%; background-color: white; border: 0.01rem solid rgba(206,206,206,1); border-radius: 0.1rem;
            position: relative;
            .ReservationTitle{
                width: 100%; height: 100%; position: absolute; top: 0; left: 0; padding: 0 0.3rem; z-index: 2;
                span{ .font2!important; color:rgba(59,59,59,1); } 
                img{ width: 0.38rem; height: 0.36rem; float: right; margin-top: 0.16rem; }
            }
            .ReservationDate{
                width: 100%; height: 100%; opacity: 0; z-index: 3;
                position: absolute; top: 0; left: 0;
            }
        }
    }
    .textarea_{
        height: 3.97rem; 
        border: 0.01rem solid rgba(206,206,206,1); background: white; border-radius: 0.1rem;
        textarea{
            padding: 0.1rem 0.1rem; box-sizing: border-box; line-height: 0.5rem; border: none; background: white;
            outline: none; width: 100%; height: 100%;
        }
    }
}

.Reservation_btn{
    width: 6.7rem; height: 0.96rem; color: white; font-size: 0.36rem; text-align: center; line-height: 0.96rem; margin: 0.3rem auto; text-shadow: 0.018rem 0.01rem 0.01rem black;
    background:linear-gradient(90deg,rgba(231,71,68,1),rgba(248,142,146,1)); border-radius: 0.48rem; box-shadow:0px 0px 0.2rem 0px rgba(178,19,16,0.16); .font1;
}

</style>
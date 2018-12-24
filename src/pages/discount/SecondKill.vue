<template>
    <div id="SecondKill">

        <nav class="SecondKill_time">
            <div class="SecondKill_time_list" @click="tabTime(index)" v-for="(item,index) in killTimeList" :key="index" :class="{active_times: index == tabNum, active_time_after: true}">
                <p>{{item.day}}</p><span>{{item.hour}}</span><p class="SecondKill_time_list_status">{{item.status == 1 ? '抢购中' : '即将开始'}}</p>
            </div>
        </nav>
        <div v-if="groupKillList[tabNum].data[0].status == 1" class="Count_down">距离秒杀结束 {{(Date.parse(new Date(groupKillList[tabNum].data[0].kill_end_time.replace(/-/g, "/"))) - time.current) | filter}}</div>
        <div v-else class="Count_down">距离秒杀开始 {{(time.current - Date.parse(new Date(groupKillList[tabNum].data[0].kill_end_time.replace(/-/g, "/")))) | filter}}</div>

        <div class="goods_list">

            <div class="goods_list_" v-for="(item,index) in groupKillList[tabNum].data" :key="index">
                <a :href="'http://192.168.1.53:8020/#/Crab?&statusId='+item.id">
                    <div class="goods_list_content">
                        <section><img :src="imgUrl + item.thumbnail_pic" alt=""></section>
                        <div class="goods_list_contents">
                            <div class="goods_list_contents_name">{{item.group_name}}</div>
                            <p>¥{{item.kill_amount}} <del>¥{{item.discount}}</del></p>
                            <span>已购{{item.soldRate}}%</span>
                            <div class="Progressbar"><div class="Progressbar_" :style="{width: item.soldRate+'%'}"><div></div></div></div>
                            <div class="immediately">立即抢购</div>
                        </div>
                    </div>
                </a>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            tabNum:0,
            list:[
                {Progressbar: 40},{Progressbar: 80},{Progressbar: 60}
            ]
        }
    },
    beforeCreate(){
        setInterval(()=>{
            this.$store.commit('TIMES')
        },1000)
    },
    computed:{
        imgUrl(){
            return this.$store.state.imgUrl
        },
        groupKillList(){
            if(this.$store.state.groupKillList == ''){ this.$store.commit('GROUPKILL_LIST') }
            return this.$store.state.groupKillList
        },
        killTimeList(){
            let list = []
            for(let val of this.groupKillList){
                list.push({day: `${val.time.substring(5,7)}月${val.time.substring(8,10)}日`, hour: val.time.substring(11,16), status: val.data[0].status})
            }
            return list
        },
        time(){
            return this.$store.state.times
        },
    },
    created(){
        document.title = '秒杀'
    },
    methods: {
        tabTime(index) {
            this.tabNum = index
        }
    },
    filters:{
        filter(value){
            //计算出相差天数
            var days = Math.floor(value / (24 * 3600 * 1000))
            //计算出小时数
            var leave1 = value % (24 * 3600 * 1000)    //计算天数后剩余的毫秒数
            var hours = Math.floor(leave1 / (3600 * 1000))
            //计算相差分钟数
            var leave2 = leave1 % (3600 * 1000)        //计算小时数后剩余的毫秒数
            var minutes = Math.floor(leave2 / (60 * 1000))
            //计算相差秒数
            var leave3 = leave2 % (60 * 1000)      //计算分钟数后剩余的毫秒数
            var seconds = Math.round(leave3 / 1000)

            return days + "天 " + hours + "小时 " + minutes + "分钟 " + seconds + "秒"
        }
    }
}
</script>

<style lang="less" scoped>
#Discount{
    width: 100%; height: 100%; padding-bottom: 1rem;
}


.font1{ font-family:PingFang-SC-Bold; font-weight:bold; }
.font2{ font-family:PingFang-SC-Medium; font-weight:Medium; }
.font3{ font-family:PingFang-SC-Regular;; font-weight:Regular; }
.font4{ font-family:PingFang-SC-Light; font-weight:300; }


.SecondKill_time{
    width: 100%; height: 1.22rem; background:rgba(174,174,174,1); display: flex; justify-content: space-around; padding: 0 0.15rem;
    .SecondKill_time_list{
        width: 1.5rem; height: 1.32rem; color:rgba(255,255,255,1); line-height: 0.375rem; text-align: center; padding-top: 0.05rem;
        span{ .font1; }
        p{ font-size: 0.24rem; .font2; }
        .SecondKill_time_list_status{ font-size: 0.3rem; .font4; }
    }
    .active_times{
        background: url('../../assets/img/active_times.png') no-repeat!important; background-size: 100% 100%!important;
    }
    .active_time_after{
        background: url('../../assets/img/active_time_after.png') no-repeat; background-size: 100% 100%;
    }
}
.Count_down{
    width: 100%; height: 0.88rem; background:rgba(246,246,246,1); color:rgba(0,0,0,1); .font2; text-align: center; line-height: 0.88rem;
}

.goods_list{
    width: 100%; margin-top: 0.64rem;
    .goods_list_{
        width: 100%; height: 2.5rem; padding: 0.3rem; background:rgba(246,246,246,1); margin-top: 0.2rem;
        .goods_list_content{
            width: 100%; height: 100%; background:rgba(255,255,255,1); border:0.01rem solid rgba(206,206,206,1); border-radius:0.1rem;
            padding: 0.2rem; display: flex;
            section{ width: 1.5rem; height: 100%; img{ width: 100%; height: 100%; } }
            .goods_list_contents{
                width: calc(100% - 1.5rem - 0.58rem); height: 100%; margin-left: 0.58rem; position: relative;
                .goods_list_contents_name{ 
                    color:rgba(1,1,1,1); .font2; width: 100%; height: 0.4rem; line-height: 0.4rem;
                    overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1;
                }
                p{ font-size: 0.36rem; color:rgba(231,71,68,1); .font1; del{ font-size: 0.28rem; color:rgba(128,128,128,1); .font2; margin-left: 0.1rem; } }
                span{ font-size: 0.24rem; .font3; line-height: 0.5rem; }
                .Progressbar{
                    width: 2.4rem; height: 0.1rem; border-radius: 0.05rem; background:rgba(253,239,219,1);
                    .Progressbar_{ 
                        height: 100%;
                        div{
                            width: 100%; height: 100%; border-top-left-radius: 0.05rem; border-bottom-left-radius: 0.05rem; background:rgba(253,187,89,1); 
                            -webkit-animation:dong 0.5s linear 0s 1 alternate;
                            animation: dong 0.5s linear 0s 1 alternate;
                        }
                    }
                }
                .immediately{
                    width: 1.6rem; height: 0.5rem; background:rgba(255,255,255,0.2); border:1px solid rgba(231,71,68,1); border-radius:0.25rem; 
                    color:rgba(231,71,68,1); text-align: center; line-height: 0.5rem; position: absolute; bottom: 0.01rem; right: 0;
                }
            }
        }
        a{ color: #000000; }
    }
}

@keyframes dong{
    from{
        width: 0;
    }
    to{
        width: 100%;
    }
}
@-webkit-keyframes dong{
    from{
        width: 0;
    }
    to{
        width: 100%;
    }
}
</style>
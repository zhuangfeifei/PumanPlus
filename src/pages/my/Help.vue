<template>
    <div id="Help">

        <div class="help_list" v-for="(item,index) in list" :key="index">
            <p class="help_title">{{item.title}}</p>
            <div class="help_content" v-html="item.content"></div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            list:[
                {title:'1、业主如何登陆查看商铺信息',content:'点击【业主认证】，输入手机号验证码，成功后通过业主姓名、证件号进行业主身份认证，认证成功后即可查看自己商铺信息。'},
                {title:'2、业主初次验证身份后如何操作',content:'业主认证身份证后点击【商铺】查看商铺基础信息。 如需查看收益信息，请先进行【商铺签约】，签约成功 后即可查看商铺收益信息。'},
                {title:'3、如何获取收益',content:'业主需要在签约后绑定商铺，输入合同防伪编号成为权 益人，获得商铺收益； <p style="font-size: 0.28rem!important;">注：绑定一个商铺后则该权益人同时绑定名下其他商铺。</p>'},
                {title:'4、如何更换银行卡',content:'在【我的】中点击【个人信息】【银行卡】，点击更换 按钮，按照要求输入银行卡信息，进行绑定。 <p style="font-size: 0.28rem!important;">注：该银行卡必须是当前业主名下</p>'},
            ]
        }
    },
    computed: {
        
    },
    created(){
        document.title = '关于帮助'
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
#Help{
    width: 100%; height: 100%; padding-bottom: 0.5rem;
}

.font1{ font-family:PingFang-SC-Bold; font-weight:bold; }
.font2{ font-family:PingFang-SC-Medium; font-weight:Medium; }
.font3{ font-family:PingFang-SC-Regular; font-weight:Regular; }

.help_list{
    width: 100%; background:rgba(246,246,246,1); margin-top: 0.48rem; padding: 0.3rem;
    .help_title{ color:rgba(0,0,0,1); .font2; }
    .help_content{
        color:rgba(59,59,59,1); font-size: 0.28rem; line-height: 0.48rem; margin-top: 0.1rem; .font3;
    }
}


</style>
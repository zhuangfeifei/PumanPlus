import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import router from '../router'
import * as types from './types'
import axios from './api'
import Util from './storage'
import { Toast, Dialog } from 'vant'

const state = {
    isLoading: false,
    active: 0,   // 导航
    puman_wxh: Util.getLocal('puman_wxh'),
    puman_openId: Util.getLocal('puman_openId'),
    puman_unionId: Util.getLocal('puman_unionId'),
    imgUrl: axios.urls + '/shops/kaptcha/',
    isPage: true,
    isPay: false,
    isPassword: false,
    isGetAuthentication: 2,
    html: '',
    user: '',        // 获取用户信息
    index: '',       // 查询业主的累计收益、已提现、提现中、可提现等信息
    applied: '',       // 查询已提现列表
    applying: '',       // 查询提现中列表
    entrust: '',       // 查询商铺签约信息列表(只显示已网签的商铺)
    binding: '',       // 查询绑定商铺列表（只显示已网签的，已签约的商铺）
    shoplist: '',       // 查询业主名下所有商铺
    shopdetail: '',       // 查询商铺详情
    profitlist: '',       // 查询业主名下所有已网签且已签约的商铺收益列表
    profitdetail: '',       // 查询业主名下所有已网签且已签约的商铺收益列表
    bindend: '',       // 查询已绑定的商铺列表
    myappointment: '',       // 查询业主的预约列表
    groupKillList: '',       // 秒杀
    promotionList: '',       // 秒杀
    image: '',       // 查询商铺的不动产证、土地证等图片附件
    times:'',
    banklist:'',
    isChangePhone: false
}

const mutations = {
    puman_wxh(state,res){
        state.puman_wxh = res
    },
    puman_openId(state,res){
        state.puman_openId = res
    },
    puman_unionId(state,res){
        state.puman_unionId = res
    },
    isLoading(state,res){
        state.isLoading = res
    },
    isChangePhone(state,res){
        state.isChangePhone = res
    },
    ['SET_PAGE'](state,res){
        state.isPage = res
    },
    ['SET_PAY'](state,res){
        state.isPay = res
    },
    ['HTML'](state,res){
        state.html = res
    },
    ['isGetAuthentication'](state,res){
        state.isGetAuthentication = res
    },
    ['isPassword'](state,res){
        state.isPassword = res
    },
    [types.ACTIVE](state,res){
        state.active = res
    },
    PUMAN_WXH(state){
        state.puman_wxh = Util.getLocal('puman_wxh')
    },
    PUMAN_OPENNID(state){
        state.puman_openId = Util.getLocal('puman_openId')
    },
    PUAMN_UNIONID(state){
        state.puman_unionId = Util.getLocal('puman_unionId')
    },
    USER(state){
        state.user = Util.getLocal('user')
    },
    INDEX(state){
        state.index = Util.getLocal('index')
    },
    APPLIED(state){
        state.applied = Util.getLocal('applied')
    },
    APPLYING(state){
        state.applying = Util.getLocal('applying')
    },
    ENTRUST(state){
        state.entrust = Util.getLocal('entrust')
    },
    BINDING(state){
        state.binding = Util.getLocal('binding')
    },
    SHOPLIST(state){
        state.shoplist = Util.getLocal('shoplist')
    },
    SHOPDETAIL(state){
        state.shopdetail = Util.getLocal('shopdetail')
    },
    PROFITLIST(state){
        state.profitlist = Util.getLocal('profitlist')
    },
    PROFITDETAIL(state, res){
        state.profitdetail = res
    },
    BINDEND(state, res){
        state.bindend = res
    },
    MYAPPOINTMENT(state, res){
        state.myappointment = res
    },
    GROUPKILL_LIST(state){
        state.groupKillList = Util.getLocal('groupKillList')
    },
    PROMORION_LIST(state, res){
        state.promotionList = res
    },
    IMAGE(state, res){
        state.image = res
    },
    banklist(state, res){
        state.banklist = res
    },
    TIMES(state){
        var date = new Date();
        var year = date.getFullYear(),
            month = date.getMonth() + 1,
            day = date.getDate(),
            hours = date.getHours(),
            minutes = date.getMinutes(),
            seconds = date.getSeconds(),
            vWeek_s = date.getDay()
        var times = year + "-" + toDub(month) + "-" + toDub(day) + " " + toDub(hours) + ":" + toDub(minutes) + ":" + toDub(seconds)
        var times1 = year + "." + toDub(month) + "." + toDub(day)
        function toDub(n) {
            return n < 10 ? "0" + n : "" + n
        }
        var current = Date.parse(new Date(times.replace(/-/g, "/")))
        var list = { times, times1, current }
        state.times = list
    }
}

const actions = {
    index({state,commit,dispatch}){   // 查询业主的累计收益、已提现、提现中、可提现等信息
        axios.api.post('/pm/api/index/info', $.param({ access_type:'WXH5', wxh: state.puman_wxh, openId: state.puman_openId, unionId: state.puman_unionId }) )
        .then(res => {
            // console.log(res.data)   
            if(res.data.code == 200) {
                Util.setLocal(res.data.data, 'index')
                commit('INDEX')
                dispatch('user')
            }
        })
        .catch(err => console.log(err))
    },
    applied({state,commit}){   // 查询已提现列表
        axios.api.post('/pm/api/index/applied', $.param({ access_type:'WXH5', wxh: state.puman_wxh, openId: state.puman_openId, unionId: state.puman_unionId,
            limit: 10, current: 1 }) )
        .then(res => {
            // console.log(res.data)   
            if(res.data.code == 200) {
                Util.setLocal(res.data.data, 'applied')
                commit('APPLIED')
            }
        })
        .catch(err => console.log(err))
    },
    applying({state,commit}){   // 查询提现中列表
        axios.api.post('/pm/api/index/applying', $.param({ access_type:'WXH5', wxh: state.puman_wxh, openId: state.puman_openId, unionId: state.puman_unionId }) )
        .then(res => {
            // console.log(res.data)   
            if(res.data.code == 200) {
                Util.setLocal(res.data.data, 'applying')
                commit('APPLYING')
            }
        })
        .catch(err => console.log(err))
    },
    appointment({state}, list){   // 保存商铺预约信息
        axios.api.post('/pm/api/save/appointment', $.param({ access_type:'WXH5', wxh: state.puman_wxh, openId: state.puman_openId, unionId: state.puman_unionId,
            appointmentTime: list.time, remark: list.remark }) )
        .then(res => {
            // console.log(res.data)   
            if(res.data.code == 200) {
                router.replace({path:'/Result',query:{title:'商铺预约', status: 0}})
            }
        })
        .catch(err => console.log(err))
    },
    entrust({state,commit}){   // 	查询商铺签约信息列表(只显示已网签的商铺)
        axios.api.post('/pm/api/index/entrust', $.param({ access_type:'WXH5', wxh: state.puman_wxh, openId: state.puman_openId, unionId: state.puman_unionId }) )
        .then(res => {
            // console.log(res.data)   
            if(res.data.code == 200) {
                Util.setLocal(res.data.data, 'entrust')
                commit('ENTRUST')
            }
        })
        .catch(err => console.log(err))
    },
    sign({},formData){   // 	查询商铺签约信息列表(只显示已网签的商铺)
        axios.api.post('/pm/api/save/entrust', formData )
        .then(res => {
            // console.log(res.data)   
            if(res.data.code == 200) {
                Toast.success('签约成功!') 
                router.replace({path:'/'})
            }
        })
        .catch(err => console.log(err))
    },
    binding({state,commit}){   //   查询绑定商铺列表（只显示已网签的，已签约的商铺）
        axios.api.post('/pm/api/index/binding', $.param({ access_type:'WXH5', wxh: state.puman_wxh, openId: state.puman_openId, unionId: state.puman_unionId }) )
        .then(res => {
            // console.log(res.data)   
            if(res.data.code == 200) {
                Util.setLocal(res.data.data, 'binding')
                commit('BINDING')
            }
        })
        .catch(err => console.log(err))
    },
    bindings({state}, list){   //   绑定商铺
        axios.api.post('/pm/api/save/binding', $.param({ access_type:'WXH5', wxh: state.puman_wxh, openId: state.puman_openId, unionId: state.puman_unionId,
            shopId: list.id, antifakeNo: list.antifakeNo }) )
        .then(res => {
            // console.log(res.data)   
            if(res.data.code == 200) {
                router.replace({path:'/Result', query:{title:'绑定商铺', status: 1}})
            }
        })
        .catch(err => console.log(err))
    },
    draw({state}, value){   //   提现
        axios.api.post('/pm/api/save/draw', $.param({ access_type:'WXH5', wxh: state.puman_wxh, openId: state.puman_openId, unionId: state.puman_unionId,
            drawCash: value }) )
        .then(res => {
            // console.log(res.data)   
            if(res.data.code == 200) {
                router.replace({path:'/PutResult'})
            }else if(res.data.code == 210){
                Dialog.confirm({
                    title: '温馨提示',
                    message: res.data.message,
                    confirmButtonText:'去绑定',
                }).then(() => {
                    router.push('/BindCard')
                }).catch(() => {
                // on cancel
                });
            }else if(res.data.code == 218){
                Dialog.confirm({
                    title: '温馨提示',
                    message: res.data.message,
                    confirmButtonText:'去消费',
                }).then(() => {
                    window.location.href = 'http://www.homeamc.cn/shops/wx/shops?wxh=sz_fangyuanli'
                }).catch(() => {
                // on cancel
                });
            }
        })
        .catch(err => console.log(err))
    },
    shoplist({state,commit}){   //   查询业主名下所有商铺
        axios.api.post('/pm/api/shop/list', $.param({ access_type:'WXH5', wxh: state.puman_wxh, openId: state.puman_openId, unionId: state.puman_unionId }) )
        .then(res => {
            // console.log(res.data)   
            if(res.data.code == 200) {
                Util.setLocal(res.data.data, 'shoplist')
                commit('SHOPLIST')
            }
        })
        .catch(err => console.log(err))
    },
    shopdetail({state,commit}, shopId){   //   查询商铺详情
        axios.api.post('/pm/api/shop/detail', $.param({ access_type:'WXH5', wxh: state.puman_wxh, openId: state.puman_openId, unionId: state.puman_unionId,
            shopId: shopId }) )
        .then(res => {
            // console.log(res.data)   
            if(res.data.code == 200) {
                Util.setLocal(res.data.data, 'shopdetail')
                commit('SHOPDETAIL')
            }
        })
        .catch(err => console.log(err))
    },
    profitlist({state,commit}){   //   查询业主名下所有已网签且已签约的商铺收益列表
        axios.api.post('/pm/api/income/list', $.param({ access_type:'WXH5', wxh: state.puman_wxh, openId: state.puman_openId, unionId: state.puman_unionId }) )
        .then(res => {
            // console.log(res.data)   
            if(res.data.code == 200) {
                Util.setLocal(res.data.data, 'profitlist')
                commit('PROFITLIST')
            }
        })
        .catch(err => console.log(err))
    },
    profitdetail({state,commit}, shopId){   //   查询商铺详情
        axios.api.post('/pm/api/income/detail', $.param({ access_type:'WXH5', wxh: state.puman_wxh, openId: state.puman_openId, unionId: state.puman_unionId,
            shopId: shopId }) )
        .then(res => {
            // console.log(res.data)   
            if(res.data.code == 200) commit('PROFITDETAIL', res.data.data) 
        })
        .catch(err => console.log(err))
    },
    user({state,commit}){   // 查询业主信息	
        axios.api.post('/pm/api/personal/info', $.param({ access_type:'WXH5', wxh: state.puman_wxh, openId: state.puman_openId, unionId: state.puman_unionId }) )
        .then(res => {
            // console.log(res.data)   
            if(res.data.code == 200) {
                Util.setLocal(res.data.data, 'user')
                commit('USER')
                if(res.data.data.userType > 1){
                    Dialog.confirm({
                        title: '业主验证',
                        message: '您还没有进行业主验证，请前往验证！',
                        confirmButtonText: '前往'
                    }).then(() => {
                        res.data.data.phonenumber.length > 0 ? router.push({path:'/Authentication/BindCertificates'}) : router.push({path:'/Authentication'})
                    }).catch(() => {
                        
                    });
                }
            }
        })
        .catch(err => console.log(err))
    },
    bindend({state,commit}){   //   查询已绑定的商铺列表
        axios.api.post('/pm/api/personal/binding', $.param({ access_type:'WXH5', wxh: state.puman_wxh, openId: state.puman_openId, unionId: state.puman_unionId }) )
        .then(res => {
            // console.log(res.data)   
            if(res.data.code == 200) commit('BINDEND', res.data.data) 
        })
        .catch(err => console.log(err))
    },
    personal({state}, list){   //   更新个人信息
        axios.api.post('/pm/api/save/personal', $.param({ access_type:'WXH5', wxh: state.puman_wxh, openId: state.puman_openId, unionId: state.puman_unionId,
            name: list.name, nickName: list.nickname, sex: list.sex, birthDay: list.birthday }) )
        .then(res => {
            // console.log(res.data)   
            if(res.data.code == 200) {
                Toast.success('更新成功!') 
                router.replace({path:'/My'})
            }
        })
        .catch(err => {console.log(err)})
    },
    bank({state}, list){   //   绑定银行卡
        axios.api.post('/pm/api/save/bank', $.param({ access_type:'WXH5', wxh: state.puman_wxh, openId: state.puman_openId, unionId: state.puman_unionId,
            bankNo: list.bankNo, bankName: list.bankName, bankCity: list.bankCity, bankProvince: list.bankProvince, realName: encodeURI(list.realName), id: list.id, isDefault: list.isDefault }) )
        .then(res => {
            // console.log(res.data)   
            if(res.data.code == 200) {
                Toast.success('绑定成功!') 
                router.go(-1)
            }
        })
        .catch(err => console.log(err))
    },
    myappointment({state,commit}){   //   查询业主的预约列表
        axios.api.post('/pm/api/personal/appointment', $.param({ access_type:'WXH5', wxh: state.puman_wxh, openId: state.puman_openId, unionId: state.puman_unionId }) )
        .then(res => {
            // console.log(res.data)   
            if(res.data.code == 200) commit('MYAPPOINTMENT', res.data.data) 
        })
        .catch(err => console.log(err))
    },
    send({state}, phone){   //   发送短信验证码
        axios.api.post('/pm/api/system/code/send', $.param({ access_type:'WXH5', wxh: state.puman_wxh, openId: state.puman_openId, unionId: state.puman_unionId,
            phone: phone, msgType: 3 }) )
        .then(res => {
            // console.log(res.data)   
            if(res.data.code == 200) Toast.success('发送成功!')  
        })
        .catch(err => console.log(err))
    },
    check({state,commit}, list){   //   验证手机号及验证码
        let urls = state.isChangePhone ? '/pm/api/system/check/again' : '/pm/api/system/check'
        axios.api.post(urls, $.param({ access_type:'WXH5', wxh: state.puman_wxh, openId: state.puman_openId, unionId: state.puman_unionId,
            phone: list.phone, code: list.code }) )
        .then(res => {
            // console.log(res.data)   
            if(res.data.code == 200) {
                if(state.isChangePhone){
                    Toast.success('更换成功！')
                    commit('isChangePhone', false)
                    router.go(-1)
                }else{
                    router.replace({path:'/Authentication/BindCertificates', query:{phone: list.phone}}) 
                }
            }
        })
        .catch(err => console.log(err))
    },
    auth({state,dispatch}, list){   //   身份验证
        axios.api.post('/pm/api/personal/auth', $.param({ access_type:'WXH5', wxh: state.puman_wxh, openId: state.puman_openId, unionId: state.puman_unionId,
            phone: list.phone, buyerName: list.buyerName, cardNo: list.cardNo, cardType: list.cardType }) )
        .then(res => {
            // console.log(res.data)   
            if(res.data.code == 200) {
                router.replace({path:'/BindResult'})
            } 
        })
        .catch(err => {console.log(err)})
    },
    signfile({}, formData){   //   业主信息补充
        axios.api.post('/pm/api/save/signfile', formData )
        .then(res => {
            // console.log(res.data)   
            if(res.data.code == 200) {
                Toast.success('保存成功!') 
                router.replace({path:'/My'})
            }
        })
        .catch(err => {console.log(err)})
    },
    groupKillList({commit,state}, shopIds = ''){   // 获取秒杀
        axios.api.post('/shops/api/gruopKill/groupKillList', $.param({ access_type:'WXH5', wxh: state.puman_wxh, openId: state.puman_openId, unionId: state.puman_unionId, 
            shopId: shopIds, groupType: '', limit: 50, current: 1 }) )
        .then(res => {
            // console.log(res.data)   
            if(res.data.code == 200) {
                let killTimeLists = {}, dest = []
                for(let val of res.data.data){
                    if(!killTimeLists[val.kill_start_time]){
                        dest.push({ time: val.kill_start_time, data: [val]})
                        killTimeLists[val.kill_start_time] = val
                    }else{
                        for(let old of dest){
                            if(old.time === val.kill_start_time){
                                old.data.push(val)
                                break
                            }
                        }
                    }
                }
                // console.log(dest)
                Util.setLocal(dest.reverse(), 'groupKillList')
                commit('GROUPKILL_LIST')
            }
        })
        .catch(err => console.log(err))
    },
    promotionList({commit,state}){   // 获取秒杀
        axios.api.post('/shops/api/promotion/promotionList', $.param({ access_type:'WXH5', wxh: state.puman_wxh, openId: state.puman_openId, unionId: state.puman_unionId, 
            limit: 50, current: 1 }) )
        .then(res => {
            // console.log(res.data)   
            if(res.data.code == 200) {
                // Util.setLocal(dest.reverse(), 'groupKillList')
                commit('PROMORION_LIST', res.data.data)
            }
        })
        .catch(err => console.log(err))
    },
    image({commit,state}, shopId){   // 查询商铺的不动产证、土地证等图片附件
        axios.api.post('/pm/api/personal/image', $.param({ access_type:'WXH5', wxh: state.puman_wxh, openId: state.puman_openId, unionId: state.puman_unionId, shopId: shopId }) )
        .then(res => {
            // console.log(res.data)   
            if(res.data.code == 200) {
                commit('IMAGE', res.data.data)
            }
        })
        .catch(err => console.log(err))
    },
    // image({commit,state}, formData){   // 查询商铺的不动产证、土地证等图片附件
    //     axios.api.post('/shops/api/personal/image', formData )
    //     .then(res => {
    //         console.log(res.data)   
    //         if(res.data.code == 200) {
    //             // Util.setLocal(dest.reverse(), 'groupKillList')
    //             // commit('PROMORION_LIST', res.data.data)
    //         }
    //     })
    //     .catch(err => console.log(err))
    // },
    banklist({commit,state}){   // 查询指定业主名下的银行卡列表
        axios.api.post('/pm/api/personal/bank/list', $.param({ access_type:'WXH5', wxh: state.puman_wxh, openId: state.puman_openId, unionId: state.puman_unionId }))
        .then(res => {
            // console.log(res.data)   
            if(res.data.code == 200) {
                let bankLists = res.data.data
                for(let val of bankLists){
                    let yhName = {
                        '北京银行':'BJYH','工商银行':'GSYH','光大银行':'GDYH','华夏银行':'HXYH','建设银行':'JSYH','交通银行':'JTYH','民生银行':'MSYH','南京银行':'NJYH','宁波银行':'NBYH',
                        '农业银行':'NYYH','浦发银行':'PFYH','深圳发展银行':'SZFZYH','兴业银行':'XYYH','邮政银行':'YZYH','招商银行':'ZSYH','中国银行':'ZGYH','中信银行':'ZXYH'
                    };
                    for(let key in yhName){
                        if(val.bankName.indexOf(key) >= 0){
                            // val.logo = yhName[key]
                            val.logo = `http://www.homeamc.cn/pm/static/banklogo/${yhName[key]}.png`
                            break
                        }
                    }
                }
                commit('banklist', bankLists)
            }
        })
        .catch(err => console.log(err))
    },
}

const getters ={
    
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
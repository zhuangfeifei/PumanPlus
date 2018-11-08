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
}

const mutations = {
    isLoading(state,res){
        state.isLoading = res
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
}

const actions = {
    index({state,commit}){   // 查询业主的累计收益、已提现、提现中、可提现等信息
        axios.api.post('/api/index/info', $.param({ access_type:'WXH5', wxh: state.puman_wxh, openId: state.puman_openId, unionId: state.puman_unionId }) )
        .then(res => {
            // console.log(res.data)   
            if(res.data.code == 200) {
                Util.setLocal(res.data.data, 'index')
                commit('INDEX')
            }
        })
        .catch(err => console.log(err))
    },
    applied({state,commit}){   // 查询已提现列表
        axios.api.post('/api/index/applied', $.param({ access_type:'WXH5', wxh: state.puman_wxh, openId: state.puman_openId, unionId: state.puman_unionId,
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
        axios.api.post('/api/index/applying', $.param({ access_type:'WXH5', wxh: state.puman_wxh, openId: state.puman_openId, unionId: state.puman_unionId }) )
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
        axios.api.post('/api/save/appointment', $.param({ access_type:'WXH5', wxh: state.puman_wxh, openId: state.puman_openId, unionId: state.puman_unionId,
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
        axios.api.post('/api/index/entrust', $.param({ access_type:'WXH5', wxh: state.puman_wxh, openId: state.puman_openId, unionId: state.puman_unionId }) )
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
        axios.api.post('/api/save/entrust', formData )
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
        axios.api.post('/api/index/binding', $.param({ access_type:'WXH5', wxh: state.puman_wxh, openId: state.puman_openId, unionId: state.puman_unionId }) )
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
        axios.api.post('/api/save/binding', $.param({ access_type:'WXH5', wxh: state.puman_wxh, openId: state.puman_openId, unionId: state.puman_unionId,
            shopId: list.id, antifakeNo: list.antifakeNo }) )
        .then(res => {
            // console.log(res.data)   
            if(res.data.code == 200) {
                router.replace({path:'/Result', query:{title:'绑定商铺', status: 1}})
            }
        })
        .catch(err => console.log(err))
    },
    draw({state}, value){   //   绑定商铺
        axios.api.post('/api/save/draw', $.param({ access_type:'WXH5', wxh: state.puman_wxh, openId: state.puman_openId, unionId: state.puman_unionId,
            drawCash: value }) )
        .then(res => {
            // console.log(res.data)   
            if(res.data.code == 200) {
                router.replace({path:'/PutResult'})
            }
        })
        .catch(err => console.log(err))
    },
    shoplist({state,commit}){   //   查询业主名下所有商铺
        axios.api.post('/api/shop/list', $.param({ access_type:'WXH5', wxh: state.puman_wxh, openId: state.puman_openId, unionId: state.puman_unionId }) )
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
        axios.api.post('/api/shop/detail', $.param({ access_type:'WXH5', wxh: state.puman_wxh, openId: state.puman_openId, unionId: state.puman_unionId,
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
        axios.api.post('/api/income/list', $.param({ access_type:'WXH5', wxh: state.puman_wxh, openId: state.puman_openId, unionId: state.puman_unionId }) )
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
        axios.api.post('/api/income/detail', $.param({ access_type:'WXH5', wxh: state.puman_wxh, openId: state.puman_openId, unionId: state.puman_unionId,
            shopId: shopId }) )
        .then(res => {
            // console.log(res.data)   
            if(res.data.code == 200) commit('PROFITDETAIL', res.data.data) 
        })
        .catch(err => console.log(err))
    },
    user({state,commit}){   // 查询业主信息	
        axios.api.post('/api/personal/info', $.param({ access_type:'WXH5', wxh: state.puman_wxh, openId: state.puman_openId, unionId: state.puman_unionId }) )
        .then(res => {
            // console.log(res.data)   
            if(res.data.code == 200) {
                Util.setLocal(res.data.data, 'user')
                commit('USER')
            }
        })
        .catch(err => console.log(err))
    },
    bindend({state,commit}){   //   查询已绑定的商铺列表
        axios.api.post('/api/personal/binding', $.param({ access_type:'WXH5', wxh: state.puman_wxh, openId: state.puman_openId, unionId: state.puman_unionId }) )
        .then(res => {
            // console.log(res.data)   
            if(res.data.code == 200) commit('BINDEND', res.data.data) 
        })
        .catch(err => console.log(err))
    },
    personal({state}, list){   //   更新个人信息
        axios.api.post('/api/save/personal', $.param({ access_type:'WXH5', wxh: state.puman_wxh, openId: state.puman_openId, unionId: state.puman_unionId,
            name: list.name, nickName: list.nickname, sex: list.sex, birthDay: list.birthday }) )
        .then(res => {
            // console.log(res.data)   
            if(res.data.code == 200) {
                Toast.success('更新成功!') 
                router.replace({path:'/My'})
            }
        })
        .catch(err => console.log(err))
    },
    bank({state}, list){   //   更新个人信息
        axios.api.post('/api/save/bank', $.param({ access_type:'WXH5', wxh: state.puman_wxh, openId: state.puman_openId, unionId: state.puman_unionId,
            bankNo: list.bankNo, bankName: list.bankName, bankCity: list.bankCity, bankProvince: list.bankProvince, realName: encodeURI(list.realName), id: list.id }) )
        .then(res => {
            // console.log(res.data)   
            if(res.data.code == 200) {
                Toast.success('绑定成功!') 
                router.replace({path:'/My'})
            }
        })
        .catch(err => console.log(err))
    },
    myappointment({state,commit}){   //   查询业主的预约列表
        axios.api.post('/api/personal/appointment', $.param({ access_type:'WXH5', wxh: state.puman_wxh, openId: state.puman_openId, unionId: state.puman_unionId }) )
        .then(res => {
            // console.log(res.data)   
            if(res.data.code == 200) commit('MYAPPOINTMENT', res.data.data) 
        })
        .catch(err => console.log(err))
    },
    send({state}, phone){   //   发送短信验证码
        axios.api.post('/api/system/code/send', $.param({ access_type:'WXH5', wxh: state.puman_wxh, openId: state.puman_openId, unionId: state.puman_unionId,
            phone: phone, msgType: 3 }) )
        .then(res => {
            // console.log(res.data)   
            if(res.data.code == 200) Toast.success('发送成功!')  
        })
        .catch(err => console.log(err))
    },
    check({state}, list){   //   验证手机号及验证码
        axios.api.post('/api/system/check', $.param({ access_type:'WXH5', wxh: state.puman_wxh, openId: state.puman_openId, unionId: state.puman_unionId,
            phone: list.phone, code: list.code }) )
        .then(res => {
            // console.log(res.data)   
            if(res.data.code == 200) router.replace({path:'/Authentication/BindCertificates', query:{phone: list.phone}}) 
        })
        .catch(err => console.log(err))
    },
    auth({state}, list){   //   身份验证
        axios.api.post('/api/personal/auth', $.param({ access_type:'WXH5', wxh: state.puman_wxh, openId: state.puman_openId, unionId: state.puman_unionId,
            phone: list.phone, buyerName: list.buyerName, cardNo: list.cardNo, cardType: list.cardType }) )
        .then(res => {
            // console.log(res.data)   
            if(res.data.code == 200) router.replace({path:'/BindResult'}) 
        })
        .catch(err => {console.log(err)})
    },
    signfile({}, formData){   //   业主信息补充
        axios.api.post('/api/save/signfile', formData )
        .then(res => {
            // console.log(res.data)   
            if(res.data.code == 200) {
                Toast.success('保存成功!') 
                router.replace({path:'/My'})
            }
        })
        .catch(err => {console.log(err)})
    },
}

const getters ={
    htmls: state => state.html.replace(/;/g,'').replace(/&gt/g,'>').replace(/&lt/g,'<').replace(/&apos/g,"'").replace(/&quot/g,"\\")
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
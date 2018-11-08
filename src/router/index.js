import Vue from 'vue'
import Router from 'vue-router'

const index = resolve => require(['@/pages/index'], resolve)

const Home = resolve => require(['@/pages/home/Home'], resolve)
const AlreadyPresented = resolve => require(['@/pages/home/AlreadyPresented'], resolve)
const WithdrawalOf = resolve => require(['@/pages/home/WithdrawalOf'], resolve)
const Reservation = resolve => require(['@/pages/home/Reservation'], resolve)
const Result = resolve => require(['@/pages/home/Result'], resolve)
const Signing = resolve => require(['@/pages/home/Signing'], resolve)
const BindShops = resolve => require(['@/pages/home/BindShops'], resolve)
const BindShop = resolve => require(['@/pages/home/BindShop'], resolve)
const BindShopItem = resolve => require(['@/pages/home/BindShopItem'], resolve)
const RentExtraction = resolve => require(['@/pages/home/RentExtraction'], resolve)
const PutResult = resolve => require(['@/pages/home/PutResult'], resolve)
const Contract = resolve => require(['@/pages/home/Contract'], resolve)

const Shop = resolve => require(['@/pages/shop/Shop'], resolve)
const ShopDetails = resolve => require(['@/pages/shop/ShopDetails'], resolve)

const Discount = resolve => require(['@/pages/discount/Discount'], resolve)
const SecondKill = resolve => require(['@/pages/discount/SecondKill'], resolve)

const Profit = resolve => require(['@/pages/profit/Profit'], resolve)
const ProfitDetails = resolve => require(['@/pages/profit/ProfitDetails'], resolve)

const My = resolve => require(['@/pages/my/My'], resolve)
const Authentication = resolve => require(['@/pages/my/Authentication'], resolve)
const BindPhone = resolve => require(['@/pages/my/BindPhone'], resolve)
const BindCertificates = resolve => require(['@/pages/my/BindCertificates'], resolve)
const BindResult = resolve => require(['@/pages/my/BindResult'], resolve)
const Information = resolve => require(['@/pages/my/Information'], resolve)
const BindCard = resolve => require(['@/pages/my/BindCard'], resolve)
const Supplement = resolve => require(['@/pages/my/Supplement'], resolve)
const Help = resolve => require(['@/pages/my/Help'], resolve)
const BindShopEnd = resolve => require(['@/pages/my/BindShopEnd'], resolve)
const MyReservation = resolve => require(['@/pages/my/MyReservation'], resolve)


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index,
      children:[
        { path:'/', component: Home },
        { path:'Shop', component: Shop },
        { path:'Discount', component: Discount },
        { path:'Profit', component: Profit },
        { path:'My', component: My },
      ]
    },
    { path:'/AlreadyPresented', component: AlreadyPresented },
    { path:'/WithdrawalOf', component: WithdrawalOf },
    { path:'/Reservation', component: Reservation },
    { path:'/Result', component: Result },
    { path:'/Signing', component: Signing },
    { path:'/BindShops', component: BindShops, children:[{ path:'/', component: BindShop },{ path:'/BindShops/BindShopItem', component: BindShopItem }] },
    { path:'/RentExtraction', component: RentExtraction },
    { path:'/PutResult', component: PutResult },
    { path:'/Contract', component: Contract },

    { path:'/ShopDetails', component: ShopDetails },

    { path:'/SecondKill', component: SecondKill },

    { path:'/ProfitDetails', component: ProfitDetails },

    { path:'/Authentication', component: Authentication, children:[
        { path:'/', component: BindPhone },{ path:'/Authentication/BindCertificates', component: BindCertificates },
        { path:'/Authentication/Information', component: Information },{ path:'/Authentication/Supplement', component: Supplement },
      ] 
    },
    { path:'/BindResult', component: BindResult },
    { path:'/BindCard', component: BindCard },
    { path:'/Help', component: Help },
    { path:'/BindShopEnd', component: BindShopEnd },
    { path:'/MyReservation', component: MyReservation },
  ]
})

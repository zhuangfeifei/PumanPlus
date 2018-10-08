import Vue from 'vue'
import Router from 'vue-router'

const index = resolve => require(['@/pages/index'], resolve)

const Home = resolve => require(['@/pages/home/Home'], resolve)
const AlreadyPresented = resolve => require(['@/pages/home/AlreadyPresented'], resolve)
const Reservation = resolve => require(['@/pages/home/Reservation'], resolve)
const Result = resolve => require(['@/pages/home/Result'], resolve)
const Signing = resolve => require(['@/pages/home/Signing'], resolve)
const BindShops = resolve => require(['@/pages/home/BindShops'], resolve)
const BindShop = resolve => require(['@/pages/home/BindShop'], resolve)
const BindShopItem = resolve => require(['@/pages/home/BindShopItem'], resolve)

const Shop = resolve => require(['@/pages/shop/Shop'], resolve)

const Discount = resolve => require(['@/pages/discount/Discount'], resolve)

const Profit = resolve => require(['@/pages/profit/Profit'], resolve)

const My = resolve => require(['@/pages/my/My'], resolve)
const Authentication = resolve => require(['@/pages/my/Authentication'], resolve)
const BindPhone = resolve => require(['@/pages/my/BindPhone'], resolve)
const BindCertificates = resolve => require(['@/pages/my/BindCertificates'], resolve)


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
    { path:'/Reservation', component: Reservation },
    { path:'/Result', component: Result },
    { path:'/Signing', component: Signing },
    { path:'/BindShops', component: BindShops, children:[{ path:'/', component: BindShop },{ path:'/BindShops/BindShopItem', component: BindShopItem }] },
    { path:'/Authentication', component: Authentication, children:[{ path:'/', component: BindPhone },{ path:'/Authentication/BindCertificates', component: BindCertificates }] },
  ]
})

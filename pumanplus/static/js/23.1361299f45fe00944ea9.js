webpackJsonp([23],{FwsK:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o={data:function(){return{}},beforeCreate:function(){this.$store.dispatch("profitlist")},computed:{profitlist:function(){return this.$store.state.profitlist}},created:function(){document.title="收益",this.$store.commit("ACTIVE",3)},methods:{details:function(t){this.$router.push({path:"/ProfitDetails",query:{shopId:t}})}}},n={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return""!=t.profitlist?s("div",{attrs:{id:"Profit"}},[s("nav",{staticClass:"Profitback"},[s("span",[t._v("总租金（元）")]),t._v(" "),s("h5",[t._v(t._s(t.profitlist.info.totalIncome))]),t._v(" "),s("div",{staticClass:"Profit_"},[s("div",[s("p",[t._v("¥"+t._s(t.profitlist.info.applied))]),s("span",[t._v("已提现")]),s("section")]),t._v(" "),s("div",[s("p",[t._v("¥"+t._s(t.profitlist.info.applying))]),s("span",[t._v("提现中")]),s("section")]),t._v(" "),s("div",[s("p",[t._v("¥"+t._s(t.profitlist.info.balance))]),s("span",[t._v("可提现")])])])]),t._v(" "),s("div",{staticClass:"Profit_list"},t._l(t.profitlist.list,function(i,o){return s("div",{key:o,staticClass:"Profit_list_",on:{click:function(s){t.details(i.shopId)}}},[s("div",{staticClass:"Profit_list_title"},[s("span",{staticClass:"Profit_list_num"},[t._v(t._s(i.shopNo))]),s("h4",[t._v(t._s(i.totalIncome))])]),t._v(" "),s("div",{staticClass:"Profit_list_content"},[s("span",[t._v(t._s(i.area)+"㎡")]),s("p",[t._v("产证面积")])]),t._v(" "),s("div",{staticClass:"Profit_list_content"},[s("span",[t._v(t._s(i.compensationArea)+"㎡")]),s("p",[t._v("补偿面积")])]),t._v(" "),s("div",{staticClass:"Profit_list_content"},[s("span",[t._v(t._s(i.shareRatio))]),s("p",[t._v("分摊系数")])])])}))]):t._e()},staticRenderFns:[]};var a=s("VU/8")(o,n,!1,function(t){s("Shwi")},"data-v-684fb936",null);i.default=a.exports},Shwi:function(t,i){}});
//# sourceMappingURL=23.1361299f45fe00944ea9.js.map
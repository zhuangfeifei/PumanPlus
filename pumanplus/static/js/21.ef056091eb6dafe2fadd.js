webpackJsonp([21],{GkBc:function(t,i){},M7X9:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e={data:function(){return{documentType:["身份证","护照","台胞证","港澳通行证","军官证"],show:!1,disabled:!1,isBind:!1,bindList:{phone:"",buyerName:"",cardNo:"",cardType:""},cardTypeName:"",success:!1,is:!0}},components:{},computed:{user:function(){return""==this.$store.state.user&&this.$store.commit("USER"),this.$store.state.user}},created:function(){this.bindList.phone=this.$route.query.phone||""},mounted:function(){},methods:{isShow:function(){this.show=!this.show,this.is&&(this.cardTypeName=this.documentType[0],this.bindList.cardType=0,this.is=!1)},onConfirm:function(t,i){this.cardTypeName=t,this.bindList.cardType=i,this.show=!this.show},onCancel:function(){this.show=!this.show},onChange:function(t,i,s){this.cardTypeName=i,this.bindList.cardType=s},onRead:function(t){this.bindList.files.push(t)},isChangePhone:function(){this.$store.commit("isChangePhone",!0),this.$router.push("/Authentication")},next:function(){var t=this;this.isBind&&(this.success=!0,setTimeout(function(){t.success=!1},3e3),""!=this.user.phonenumber&&(this.bindList.phone=this.user.phonenumber),this.$store.dispatch("auth",this.bindList))}},watch:{bindList:{handler:function(t,i){""!=t.buyerName&&t.cardType>=0&&t.cardNo.length>0?this.isBind=!0:this.isBind=!1},deep:!0}}},n={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"BindCertificates"}},[e("div",{staticClass:"BindCertificates_content"},[e("div",{staticClass:"BindCertificates_list"},[e("p",[t._v("手机号码")]),e("p",{staticClass:"list_ringht"},[t._v(t._s(t.user.phonenumber||t.bindList.phone))])]),t._v(" "),e("div",{staticClass:"BindCertificates_list"},[e("span",[t._v("业主姓名")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.bindList.buyerName,expression:"bindList.buyerName"}],staticClass:"list_ringht",attrs:{type:"text",placeholder:"请输入"},domProps:{value:t.bindList.buyerName},on:{input:function(i){i.target.composing||t.$set(t.bindList,"buyerName",i.target.value)}}})]),t._v(" "),e("div",{staticClass:"BindCertificates_list"},[e("span",[t._v("证件类型")]),e("div",{staticClass:"list_ringhts",on:{click:t.isShow}},[t._v(t._s(t.cardTypeName?t.cardTypeName:"请选择"))])]),t._v(" "),e("div",{staticClass:"BindCertificates_list"},[e("span",[t._v("证件号码")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.bindList.cardNo,expression:"bindList.cardNo"}],staticClass:"list_ringht",attrs:{type:"text",placeholder:"请输入"},domProps:{value:t.bindList.cardNo},on:{input:function(i){i.target.composing||t.$set(t.bindList,"cardNo",i.target.value)}}})]),t._v(" "),e("div",{staticClass:"BindCertificates_list",on:{click:t.isChangePhone}},[e("p",[t._v("更换手机号码")]),e("img",{staticClass:"list_link",attrs:{src:s("fscY"),alt:""}})])]),t._v(" "),e("div",{staticClass:"BindCertificates_btn",class:{BindCertificates_btn_active:t.isBind},on:{click:t.next}},[t._v("提  交")]),t._v(" "),e("van-popup",{attrs:{position:"bottom",overlay:!0},model:{value:t.show,callback:function(i){t.show=i},expression:"show"}},[e("div",{staticClass:"BindCertificates_bottom",on:{click:t.onCancel}}),t._v(" "),e("van-picker",{staticClass:"BindCertificates_",attrs:{columns:t.documentType,"show-toolbar":"",title:"证件类型","confirm-button-text":"确定","item-height":50},on:{change:t.onChange,cancel:t.onCancel,confirm:t.onConfirm}})],1),t._v(" "),e("van-popup",{staticClass:"Success",model:{value:t.success,callback:function(i){t.success=i},expression:"success"}},[e("div",[e("p",[t._v("...")]),e("br"),e("br"),e("p",[t._v("认证中")]),e("p",[t._v("请稍后")])])])],1)},staticRenderFns:[]};var a=s("VU/8")(e,n,!1,function(t){s("GkBc")},"data-v-9cc034c2",null);i.default=a.exports}});
//# sourceMappingURL=21.ef056091eb6dafe2fadd.js.map
webpackJsonp([25],{jRwN:function(t,s){},ljNI:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("BO1k"),a=i.n(e),r={data:function(){return{tabNum:0,list:[{Progressbar:40},{Progressbar:80},{Progressbar:60}]}},beforeCreate:function(){var t=this;setInterval(function(){t.$store.commit("TIMES")},1e3)},computed:{imgUrl:function(){return this.$store.state.imgUrl},groupKillList:function(){return""==this.$store.state.groupKillList&&this.$store.commit("GROUPKILL_LIST"),this.$store.state.groupKillList},killTimeList:function(){var t=[],s=!0,i=!1,e=void 0;try{for(var r,l=a()(this.groupKillList);!(s=(r=l.next()).done);s=!0){var n=r.value;t.push({day:n.time.substring(5,7)+"月"+n.time.substring(8,10)+"日",hour:n.time.substring(11,16),status:n.data[0].status})}}catch(t){i=!0,e=t}finally{try{!s&&l.return&&l.return()}finally{if(i)throw e}}return t},time:function(){return this.$store.state.times}},created:function(){document.title="秒杀"},methods:{tabTime:function(t){this.tabNum=t}},filters:{filter:function(t){var s=t%864e5,i=s%36e5,e=i%6e4;return Math.floor(t/864e5)+"天 "+Math.floor(s/36e5)+"小时 "+Math.floor(i/6e4)+"分钟 "+Math.round(e/1e3)+"秒"}}},l={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"SecondKill"}},[i("nav",{staticClass:"SecondKill_time"},t._l(t.killTimeList,function(s,e){return i("div",{key:e,staticClass:"SecondKill_time_list",class:{active_times:e==t.tabNum,active_time_after:!0},on:{click:function(s){t.tabTime(e)}}},[i("p",[t._v(t._s(s.day))]),i("span",[t._v(t._s(s.hour))]),i("p",{staticClass:"SecondKill_time_list_status"},[t._v(t._s(1==s.status?"抢购中":"即将开始"))])])})),t._v(" "),1==t.groupKillList[t.tabNum].data[0].status?i("div",{staticClass:"Count_down"},[t._v("距离秒杀结束 "+t._s(t._f("filter")(Date.parse(new Date(t.groupKillList[t.tabNum].data[0].kill_end_time.replace(/-/g,"/")))-t.time.current)))]):i("div",{staticClass:"Count_down"},[t._v("距离秒杀开始 "+t._s(t._f("filter")(t.time.current-Date.parse(new Date(t.groupKillList[t.tabNum].data[0].kill_end_time.replace(/-/g,"/"))))))]),t._v(" "),i("div",{staticClass:"goods_list"},t._l(t.groupKillList[t.tabNum].data,function(s,e){return i("div",{key:e,staticClass:"goods_list_"},[i("a",{attrs:{href:"http://192.168.1.53:8020/#/Crab?&statusId="+s.id}},[i("div",{staticClass:"goods_list_content"},[i("section",[i("img",{attrs:{src:t.imgUrl+s.thumbnail_pic,alt:""}})]),t._v(" "),i("div",{staticClass:"goods_list_contents"},[i("div",{staticClass:"goods_list_contents_name"},[t._v(t._s(s.group_name))]),t._v(" "),i("p",[t._v("¥"+t._s(s.kill_amount)+" "),i("del",[t._v("¥"+t._s(s.discount))])]),t._v(" "),i("span",[t._v("已购"+t._s(s.soldRate)+"%")]),t._v(" "),i("div",{staticClass:"Progressbar"},[i("div",{staticClass:"Progressbar_",style:{width:s.soldRate+"%"}},[i("div")])]),t._v(" "),i("div",{staticClass:"immediately"},[t._v("立即抢购")])])])])])}))])},staticRenderFns:[]};var n=i("VU/8")(r,l,!1,function(t){i("jRwN")},"data-v-52b2e9e4",null);s.default=n.exports}});
//# sourceMappingURL=25.97ac8742819282083f78.js.map
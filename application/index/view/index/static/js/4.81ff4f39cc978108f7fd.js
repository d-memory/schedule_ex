webpackJsonp([4],{XNKm:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"confirmOrder-box"},[s._m(0),s._v(" "),s._m(1),s._v(" "),a("div",{staticClass:"visitingPerson"},[a("van-field",{attrs:{readonly:"",clickable:"",label:"就诊人",value:s.value,placeholder:"请点击选择就诊人"},on:{click:function(t){s.showPicker=!0}}}),s._v(" "),a("van-popup",{attrs:{position:"bottom"},model:{value:s.showPicker,callback:function(t){s.showPicker=t},expression:"showPicker"}},[a("van-picker",{attrs:{"show-toolbar":"",columns:s.columns},on:{cancel:function(t){s.showPicker=!1},confirm:s.onConfirm}})],1),s._v(" "),a("van-field",{attrs:{readonly:"",clickable:"",label:"预约号源",value:s.value,placeholder:"请点击选择号源"},on:{click:function(t){s.showPicker=!0}}}),s._v(" "),a("van-popup",{attrs:{position:"bottom"},model:{value:s.showPicker,callback:function(t){s.showPicker=t},expression:"showPicker"}},[a("van-picker",{attrs:{"show-toolbar":"",columns:s.columns},on:{cancel:function(t){s.showPicker=!1},confirm:s.onConfirm}})],1)],1),s._v(" "),a("van-button",{staticClass:"mt-20",attrs:{type:"primary",size:"large"},on:{click:s.goPaymentFn}},[s._v("确认挂号")])],1)},staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"doctor-title"},[t("img",{staticClass:"ml-15",attrs:{src:a("ceU3")}}),this._v(" "),t("span",{staticClass:"doctorname ml-10"},[this._v("唐宇")]),this._v(" "),t("span",{staticClass:"doctorposition ml-10"},[this._v("主任医生")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"orderinformation"},[a("p",[a("span",{staticClass:"sp1"},[s._v("就诊科室")]),a("span",{staticClass:"sp2"},[s._v("康复医学科")])]),s._v(" "),a("p",[a("span",{staticClass:"sp1"},[s._v("就诊时间")]),a("span",{staticClass:"sp2"},[s._v("2019年11月25日 星期一 下午")])]),s._v(" "),a("p",[a("span",{staticClass:"sp1"},[s._v("费　　用")]),a("span",{staticClass:"sp3"},[s._v("￥ 0")])]),s._v(" "),a("p",[a("span",{staticClass:"sp1"},[s._v("费用明细")]),a("span",{staticClass:"sp3"},[s._v("挂号费: ￥ 0")])])])}]};var i=a("VU/8")({name:"",data:function(){return{value:"",showPicker:!1,columns:["杭州","宁波","温州","嘉兴","湖州"]}},methods:{onConfirm:function(s){this.value=s,this.showPicker=!1},goPaymentFn:function(){this.$router.push({path:"/payment",query:{setid:123456}})}}},n,!1,function(s){a("l2aG")},null,null);t.default=i.exports},ceU3:function(s,t,a){s.exports=a.p+"static/img/yisheng.8595d66.png"},l2aG:function(s,t){}});
//# sourceMappingURL=4.81ff4f39cc978108f7fd.js.map
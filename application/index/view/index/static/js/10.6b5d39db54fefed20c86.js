webpackJsonp([10],{"2jnv":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"selectDoctor-box"},[a("van-dropdown-menu",{staticClass:"mb-10"},[a("van-dropdown-item",{attrs:{options:t.departmentList},model:{value:t.departmentVal,callback:function(e){t.departmentVal=e},expression:"departmentVal"}}),t._v(" "),a("van-dropdown-item",{attrs:{options:t.jobtitleList},model:{value:t.jobtitleVal,callback:function(e){t.jobtitleVal=e},expression:"jobtitleVal"}}),t._v(" "),a("van-dropdown-item",{attrs:{options:t.dateList},model:{value:t.dateVal,callback:function(e){t.dateVal=e},expression:"dateVal"}})],1),t._v(" "),a("div",{staticClass:"doctor-list-box"},t._l(10,function(e,o){return a("div",{key:o,staticClass:"mb-5 ml-5 mr-5"},[a("van-card",{attrs:{desc:"职位描述",title:"医生名字",thumb:"https://img.yzcdn.cn/vant/t-thirt.jpg"}},[a("div",{attrs:{slot:"footer"},slot:"footer"},[a("van-button",{on:{click:t.goDoctorspaceFn}},[t._v("预约")])],1)])],1)}),0)],1)},staticRenderFns:[]};var n=a("VU/8")({name:"",data:function(){return{departmentList:[{text:"口腔科",value:0},{text:"烧伤整形科",value:1},{text:"儿科",value:2}],jobtitleList:[{text:"全部",value:0},{text:"主任",value:1},{text:"副主任",value:2}],dateList:[{text:"今天",value:0},{text:"明天",value:1}],departmentVal:0,jobtitleVal:0,dateVal:0}},methods:{goDoctorspaceFn:function(){this.$router.push({path:"/doctorSpace",query:{setid:123456}})}}},o,!1,function(t){a("5zJ+")},null,null);e.default=n.exports},"5zJ+":function(t,e){}});
//# sourceMappingURL=10.6b5d39db54fefed20c86.js.map
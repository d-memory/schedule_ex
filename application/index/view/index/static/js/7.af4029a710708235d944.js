webpackJsonp([7],{U67g:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={name:"",data:function(){return{deviceWidth:"",deviceHeight:"",center:{lng:0,lat:0},zoom:3}},mounted:function(){this.geDevice()},methods:{handler:function(e){var t=e.BMap,n=e.map;console.log(t,n),this.center.lng=117.210257,this.center.lat=29.311085,this.zoom=17},geDevice:function(){this.deviceWidth=window.screen.width,this.deviceHeight=window.screen.height}}},a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("baidu-map",{staticClass:"bm-view navigation-box",style:"width:"+e.deviceWidth+"px;height:"+e.deviceHeight+"px;",attrs:{center:e.center,zoom:e.zoom},on:{ready:e.handler}},[n("bm-marker",{attrs:{position:e.center,dragging:!0,animation:"BMAP_ANIMATION_BOUNCE"}},[n("bm-label",{attrs:{content:"景德镇市第一人民医院",labelStyle:{color:"red",fontSize:"12px"},offset:{width:-35,height:30}}}),e._v(" "),n("bm-scale",{attrs:{anchor:"BMAP_ANCHOR_BOTTOM_RIGHT"}}),e._v(" "),n("bm-navigation",{attrs:{anchor:"BMAP_ANCHOR_BOTTOM_RIGHT"}})],1)],1)],1)},staticRenderFns:[]};var o=n("VU/8")(i,a,!1,function(e){n("hmJ8")},"data-v-430af98c",null);t.default=o.exports},hmJ8:function(e,t){}});
//# sourceMappingURL=7.af4029a710708235d944.js.map
(function(t){function e(e){for(var a,o,c=e[0],l=e[1],s=e[2],d=0,p=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,c=1;c<n.length;c++){var l=n[c];0!==i[l]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={app:0},r=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"148d":function(t,e,n){},"2a24":function(t,e,n){"use strict";var a=n("cbc9"),i=n.n(a);i.a},"2bae":function(t,e,n){"use strict";var a=n("4365"),i=n.n(a);i.a},4365:function(t,e,n){},5313:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=n("5c96"),r=n.n(i),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("el-container",{staticClass:"app-wrap"},[n("el-aside",{attrs:{width:"260px"}},[n("TheSideMenu",{ref:"TheSideMenu"})],1),n("el-container",{staticClass:"app-container"},[n("el-main",[n("router-view")],1)],1)],1)],1)},c=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"side-menu"},[n("el-menu",{ref:"side-menu",attrs:{router:!0,"default-active":t.active},on:{select:t.selectMenuHandler}},t._l(t.menuData,(function(e){return n("el-submenu",{key:e.name,attrs:{index:e.path}},[n("template",{slot:"title"},[n("span",{attrs:{slot:"title"},slot:"title"},[t._v(" "+t._s(e.title)+" ")])]),t._l(e.children,(function(e){return n("el-menu-item",{key:e.name,attrs:{index:e.path}},[t._v(" "+t._s(e.title)+" ")])}))],2)})),1)],1)},s=[],u=(n("4de4"),n("d81d"),n("b0c0"),n("5530")),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-view")],1)},p=[],h={},f=h,m=n("2877"),g=Object(m["a"])(f,d,p,!1,null,null,null),y=g.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-wrap"},[n("div",{staticClass:"steps-wrap"},t._l(t.stepList,(function(e,a){return n("div",{key:e,staticClass:"step",class:{active:a===t.status}},[t._v(" "+t._s(e)+" ")])})),0)])},x=[],b=(n("a9e3"),["1. 选票页面","2. 填写参会人信息","3. 报名成功"]),w={props:{status:{type:Number,default:1}},data:function(){return{stepList:b}}},S=w,C=(n("cf32"),Object(m["a"])(S,v,x,!1,null,"aad0326c",null)),_=C.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"hello-cropper"},[n("div",{staticClass:"vue-cropper-warp"},[n("VueCropper",{ref:"cropper",attrs:{img:t.option.img,"output-size":t.option.size,"output-type":t.option.outputType,info:!0,full:t.option.full,"can-move":t.option.canMove,"can-move-box":t.option.canMoveBox,"fixed-box":t.option.fixedBox,original:t.option.original,"auto-crop":t.option.autoCrop,"auto-crop-width":t.option.autoCropWidth,"auto-crop-height":t.option.autoCropHeight,"center-box":t.option.centerBox,high:t.option.high,"info-true":t.option.infoTrue,"max-img-size":t.option.maxImgSize,enlarge:t.option.enlarge,mode:t.option.mode,"limit-min-size":t.option.limitMinSize},on:{realTime:t.realTime}})],1),n("div",{staticClass:"cropper-view-warp"},[n("div",{staticClass:"preview-title"},[t._v(" 图标预览 ")]),n("div",{staticClass:"preview"},[n("div",{style:t.portraitImg.previewStyle},[n("img",{style:t.portraitImg.img,attrs:{src:t.portraitImg.url}})])])])])])},T=[],O=(n("99af"),n("7e79")),D=n.n(O),F=D.a.VueCropper,j={name:"HelloWorld",components:{VueCropper:F},data:function(){return{portraitImg:{},option:{img:"logo.png",size:1,full:!1,outputType:"png",canMove:!0,fixedBox:!1,original:!1,canMoveBox:!0,autoCrop:!0,centerBox:!1,high:!1,cropData:{},enlarge:1,mode:"contain",maxImgSize:2e3,limitMinSize:[100,120]}}},methods:{realTime:function(t){var e=96/t.w,n=96/t.h,a=96===t.w?0:(96-t.w)/2,i=96===t.h?0:(96-t.h)/2,r={width:"".concat(t.w,"px"),height:"".concat(t.h,"px"),overflow:"hidden",margin:"0",transform:"translate(".concat(a,"px, ").concat(i,"px) scale(").concat(e,", ").concat(n,")")};this.portraitImg=Object(u["a"])({previewStyle:r},t)}}},L=j,P=(n("6431"),Object(m["a"])(L,k,T,!1,null,"2ce2cb81",null)),M=P.exports,z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},R=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticStyle:{height:"260px"},attrs:{id:"line-chart"}})])}],E=(n("4160"),n("159b"),n("313e")),$=n.n(E),B={grid:{left:60,right:50,top:60,bottom:50},tooltip:{trigger:"axis",formatter:function(t){var e="日期: ".concat(t[0].axisValue,"</br>");return t.forEach((function(t){var n='<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:'.concat(t.color,'"></span>');e+="".concat(n).concat(t.seriesName,": ").concat(t.data,"</br>")})),e}},xAxis:{type:"category",boundaryGap:!1,data:["1","2","3","4","5","6"],axisLine:{lineStyle:{color:"#DDDDDD"}},axisTick:{lineStyle:{color:"#DDDDDD",length:6}},axisLabel:{color:function(){return"#999999"},fontWeight:400,fontFamily:"PingFang SC",fontSize:14,margin:17,align:"left"}},yAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{color:"#DDDDDD",type:"dotted"}},axisLabel:{color:function(){return"#999999"},fontWeight:400,fontFamily:"PingFang SC",fontSize:14,margin:11}},series:[{data:[1,10,20,30,40,50],type:"line",name:"pc",symbol:"none",color:"#52C41A",lineStyle:{color:"#52C41A"}},{data:[5,15,25,35,45,55],type:"line",name:"小程序",symbol:"none",color:"#1890FF",lineStyle:{color:"#1890FF"}}]},I={mounted:function(){var t=$.a.init(document.getElementById("line-chart"));t.setOption(B)}},H=I,V=Object(m["a"])(H,z,R,!1,null,null,null),N=V.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flow-wrap"},[n("Menu",{staticClass:"menu-wrap"}),n("ToolsBar",{staticClass:"tools-bar"}),n("div",{ref:"flow-chart",staticClass:"le-5-le"})],1)},G=[],W={color:"#000000",font:{color:"#000000",fontSize:14,fontFamily:"微软雅黑"},rect:{x:0,y:0,width:0,height:0},name:"polyline",fillStyle:"#000000",strokeStyle:"#8a8a8a",borderRadius:0,paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0,rotate:0},J=[{name:"开始",class:"flow-start",data:{text:"开始",font:{color:"#FFF",fontSize:"14",fontFamily:"微软雅黑"},data:{type:"fsa.StartState",eventList:[],talkList:[],taskPerson:{dealPerson:[],taskType:0}},rect:{width:120,height:40},strokeStyle:"#cb6808",fillStyle:"#f3aa00",borderRadius:.5,name:"rectangle"}},{name:"流程",class:"flow-rectangle",data:{text:"流程",font:{color:"#FFF",fontSize:"14",fontFamily:"微软雅黑"},data:{type:"standard.Ellipse",eventList:[{}],talkList:[{}],taskPerson:{dealPerson:[],taskType:0}},rect:{width:120,height:40},strokeStyle:"#8ab7fa",fillStyle:"#2a56b2",name:"rectangle"}},{name:"判定",class:"flow-diamond",data:{text:"判定",font:{color:"#FFF",fontSize:"14",fontFamily:"微软雅黑"},data:{type:"standard.Polygon",eventList:[{}],talkList:[{}],taskPerson:{dealPerson:[],taskType:0}},rect:{width:120,height:60},strokeStyle:"#b00808",fillStyle:"#ff3836",name:"diamond"}},{name:"结束",class:"flow-end",data:{text:"结束",font:{color:"#FFF",fontSize:"14",fontFamily:"微软雅黑"},data:{type:"fsa.EndState",eventList:[],talkList:[],taskPerson:{dealPerson:[],taskType:0}},rect:{width:120,height:40},strokeStyle:"#03a9c7",fillStyle:"#26defd",borderRadius:.5,name:"rectangle"}}],U=[{name:"通知",class:"flow-notice",data:{text:"通知",data:{type:"fsa.notice",eventList:[{}],talkList:[{}],taskPerson:{dealPerson:[],taskType:0},noticeGroupId:""},rect:{width:100,height:130},name:"image",image:"/img/notice.png"}}],q=[{name:"文本",icon:"icon-text",data:{text:"文本",data:{type:"fsa.text"},rect:{width:160,height:30},name:"text"}},{name:"文档",icon:"icon-file",data:{text:"文档",data:{type:"fsa.fileDocument"},rect:{width:80,height:100},name:"fileDocument"}},{name:"左注释",icon:"icon-kuohao",data:{text:"左注释",data:{type:"fsa.flowComment"},rect:{width:100,height:100},name:"flowComment"}},{name:"右注释",icon:"icon-kuohao1",data:{text:"右注释",data:{type:"fsa.flowComment"},rect:{width:100,height:100},name:"comment"}},{name:"区域",icon:"icon-rect",data:{text:"区域",data:{type:"fsa.area"},rect:{width:100,height:100},name:"area"}},{name:"垂直泳道",icon:"icon-swimlane-v",data:{text:"垂直泳道",data:{type:"fsa.swimlaneV"},rect:{width:200,height:500},strokeStyle:"#66b2ff",name:"swimlaneV"}},{name:"水平泳道",icon:"icon-swimlane-h",data:{text:"水平泳道",data:{type:"fsa.swimlaneH"},rect:{width:500,height:200},strokeStyle:"#66b2ff",name:"swimlaneH"}}],K=n("69d8"),Q=n("96c7"),X=n("9481");n("cb29");function Y(t,e){t.beginPath(),t.rect(e.rect.x,e.rect.y,e.rect.width,e.rect.height),t.closePath(),t.fill(),t.stroke()}function Z(t){t.anchors.push(new K["b"](t.rect.x,t.rect.y+t.rect.height/2,K["a"].Left)),t.anchors.push(new K["b"](t.rect.x+t.rect.width/2,t.rect.y,K["a"].Up)),t.anchors.push(new K["b"](t.rect.x+t.rect.width,t.rect.y+t.rect.height/2,K["a"].Right)),t.anchors.push(new K["b"](t.rect.x+t.rect.width/2,t.rect.y+t.rect.height,K["a"].Bottom))}function tt(t){t.iconRect=new K["c"](0,0,0,0)}function et(t){t.textRect=new K["c"](t.rect.x,t.rect.y,t.rect.width,t.rect.height),t.fullTextRect=t.textRect}function nt(t,e){t.beginPath();var n=e.rect.width/4;t.moveTo(e.rect.ex-n,e.rect.y),t.lineTo(e.rect.ex,e.rect.y),t.lineTo(e.rect.ex,e.rect.ey),t.lineTo(e.rect.ex-n,e.rect.ey),t.fill(),t.stroke()}function at(t){t.anchors.push(new K["b"](t.rect.x,t.rect.y+t.rect.height/2,K["a"].Left))}function it(t,e){t.beginPath();var n=e.rect.width/5;t.moveTo(e.rect.ex,e.rect.y+n),t.lineTo(e.rect.ex-n,e.rect.y),t.lineTo(e.rect.x,e.rect.y),t.lineTo(e.rect.x,e.rect.ey),t.lineTo(e.rect.ex,e.rect.ey),t.lineTo(e.rect.ex,e.rect.y+n),t.lineTo(e.rect.ex-n,e.rect.y+n),t.lineTo(e.rect.ex-n,e.rect.y),t.closePath(),t.fill(),t.stroke()}function rt(t){t.anchors.push(new K["b"](t.rect.x,t.rect.y+t.rect.height/2,K["a"].Left)),t.anchors.push(new K["b"](t.rect.x+t.rect.width/2,t.rect.y,K["a"].Up)),t.anchors.push(new K["b"](t.rect.x+t.rect.width,t.rect.y+t.rect.height/2,K["a"].Right)),t.anchors.push(new K["b"](t.rect.x+t.rect.width/2,t.rect.y+t.rect.height,K["a"].Bottom))}function ot(t){t.iconRect=new K["c"](0,0,0,0)}function ct(t){t.textRect=new K["c"](t.rect.x,t.rect.y,t.rect.width,t.rect.height),t.fullTextRect=t.textRect}var lt=function(){Object(Q["a"])(),Object(X["a"])(),Object(K["e"])("area",Y,Z,tt,et),Object(K["e"])("fileDocument",it,rt,ot,ct),Object(K["e"])("comment",nt,at)};lt();var st,ut,dt=K["d"],pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flow-left"},[n("div",{staticClass:"card-panel"},[n("div",{staticClass:"card-header title"},[t._v(" 流程节点 ")]),n("div",{staticClass:"card-main"},t._l(t.node,(function(e,a){return n("div",{key:a,class:["node-item",e.class],attrs:{draggable:e.data},on:{dragstart:function(n){return t.onDrag(n,e)}}})})),0)]),n("div",{staticClass:"card-panel"},[n("div",{staticClass:"card-header title"},[t._v(" 功能节点 ")]),n("div",{staticClass:"card-main"},t._l(t.functionNode,(function(e,a){return n("div",{key:a,class:["other-item","graph-item",e.class],attrs:{draggable:e.data},on:{dragstart:function(n){return t.onDrag(n,e)}}})})),0)]),n("div",{staticClass:"card-panel"},[n("div",{staticClass:"card-header title"},[t._v(" 辅助图形 ")]),n("div",{staticClass:"card-main"},t._l(t.auxiliaryGraph,(function(e,a){return n("div",{key:a,staticClass:"other-item",attrs:{draggable:e.data},on:{dragstart:function(n){return t.onDrag(n,e)}}},[n("i",{class:["iconfont",e.icon]}),n("div",[t._v(t._s(e.name))])])})),0)])])},ht=[],ft={data:function(){return this.node=J,this.functionNode=U,this.auxiliaryGraph=q,{}},methods:{onDrag:function(t,e){t.dataTransfer.setData("Text",JSON.stringify(e.data))}}},mt=ft,gt=(n("742b"),Object(m["a"])(mt,pt,ht,!1,null,"4edc2072",null)),yt=gt.exports,vt={},xt=Object(m["a"])(vt,st,ut,!1,null,null,null),bt=xt.exports,wt={name:"Le5LeFlowChart",components:{Menu:yt,ToolsBar:bt},data:function(){return{}},mounted:function(){this.inintFlowChart()},methods:{inintFlowChart:function(){var t=this.$refs["flow-chart"];new dt(t,W)}}},St=wt,Ct=(n("851d"),Object(m["a"])(St,A,G,!1,null,"624ac774",null)),_t=Ct.exports,kt=[{path:"/",component:y,meta:{title:"示例",hidden:!1,breadcrumb:!1},children:[{path:"/",name:"Steps",component:_,meta:{title:"步骤条",hidden:!1,breadcrumb:!0}},{path:"/CropperPage",name:"CropperPage",component:M,meta:{title:"头像裁剪",hidden:!1,breadcrumb:!0}},{path:"/LineChart",name:"LineChart",component:N,meta:{title:"折线图",hidden:!1,breadcrumb:!0}},{path:"/Le5Le/FlowChart",name:"Le5LeFlowChart",component:_t,meta:{title:"le5le流程图",hidden:!1,breadcrumb:!0}}]}],Tt={name:"TheSideMenu",data:function(){return{menuData:kt,active:this.$store.state.activeMenuIndex}},created:function(){this.initMenu()},methods:{selectMenuHandler:function(t){this.$store.commit("setState",{key:"activeMenuIndex",value:t})},initMenu:function(){var t=function t(e){return e.filter((function(t){return!t.meta.hidden})).map((function(e){return e.children&&e.children.length>0?Object(u["a"])(Object(u["a"])({},e.meta),{},{path:e.path,name:e.name,children:t(e.children)}):Object(u["a"])(Object(u["a"])({},e.meta),{},{path:e.path,name:e.name})}))};this.menuData=t(this.menuData)}}},Ot=Tt,Dt=(n("2a24"),Object(m["a"])(Ot,l,s,!1,null,null,null)),Ft=Dt.exports,jt={components:{TheSideMenu:Ft}},Lt=jt,Pt=(n("2bae"),Object(m["a"])(Lt,o,c,!1,null,"8281f90e",null)),Mt=Pt.exports,zt=n("8c4f"),Rt=new zt["a"]({mode:"hash",routes:kt});a["default"].use(zt["a"]);var Et=Rt,$t=n("2f62"),Bt=n("0e44");a["default"].use($t["a"]);var It=new $t["a"].Store({state:{activeMenuIndex:"/"},mutations:{setState:function(t,e){t[e.key]=e.value}},actions:{},modules:{},plugins:[Object(Bt["a"])()]});a["default"].config.productionTip=!1,a["default"].use(r.a),new a["default"]({router:Et,store:It,render:function(t){return t(Mt)}}).$mount("#app")},6431:function(t,e,n){"use strict";var a=n("858f"),i=n.n(a);i.a},"742b":function(t,e,n){"use strict";var a=n("148d"),i=n.n(a);i.a},"851d":function(t,e,n){"use strict";var a=n("5313"),i=n.n(a);i.a},"858f":function(t,e,n){},a206:function(t,e,n){},cbc9:function(t,e,n){},cf32:function(t,e,n){"use strict";var a=n("a206"),i=n.n(a);i.a}});
//# sourceMappingURL=app.d548b0c3.js.map
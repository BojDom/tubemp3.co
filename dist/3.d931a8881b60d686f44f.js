webpackJsonp([3],{426:function(t,e,i){function a(t){i(650)}var o=i(30)(i(647),i(657),a,"data-v-68197c3a",null);t.exports=o.exports},511:function(t,e,i){e=t.exports=i(421)(!1),e.push([t.i,".title[data-v-74eeaab7]{padding:5px 0;overflow:hidden;text-overflow:collapse}.title h3[data-v-74eeaab7]{text-align:center;font-size:15px;margin:0}.bg[data-v-74eeaab7]{background:rgba(0,0,0,.8)}.video[data-v-74eeaab7]{width:320px;border:3px solid #000;box-sizing:border-box;margin:10px auto}.download-buttons[data-v-74eeaab7]{height:100%;width:100%}.download-buttons .f[data-v-74eeaab7]{border:2px solid #f6b6c0;border-radius:10px;padding:6px 10px}.download-buttons .f[data-v-74eeaab7]:hover{background:rgba(246,182,192,.2);cursor:pointer}.download-buttons i[data-v-74eeaab7]{color:#f6b6c0}.thumb[data-v-74eeaab7]{width:100%;margin:0 auto;height:0;padding-bottom:56.25%;position:relative;display:inline-table}.thumb .bg[data-v-74eeaab7],.thumb .dur[data-v-74eeaab7],.thumb img[data-v-74eeaab7]{position:absolute;top:0;left:0;height:100%;width:100%}.thumb .dur[data-v-74eeaab7]{height:15%;width:15%;font-size:15px;left:80%;top:10%;background:#36070e}.thumb .progBar[data-v-74eeaab7]{position:absolute;bottom:0;left:0;height:4px;transition:all .2s ease}.thumb .progBar.g[data-v-74eeaab7]{background:green}.thumb .progBar.r[data-v-74eeaab7]{background:red}.wave[data-v-74eeaab7]{width:320px}.wave div[data-v-74eeaab7]{overflow:hidden}.wave img[data-v-74eeaab7]{width:320px;height:80px}.stats[data-v-74eeaab7]{-ms-flex-pack:justify;justify-content:space-between;white-space:nowrap;width:90%}.message.error[data-v-74eeaab7]{border-color:#36070e}",""])},512:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"thumbVideo",components:{},props:{v:{},w:{type:String,default:"320px"}},data:function(){return{}},mounted:function(){},methods:{goToDownload:function(){"string"!=typeof this.v.title&&(this.v.title="no_title"),this.$router.push({name:"download",params:{id:this.v._id,title:encodeURI(this.v.title.split(" ").join("_"))}})}}}},513:function(t,e,i){var a=i(511);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(422)("00b5c1ba",a,!0,{})},514:function(t,e,i){function a(t){i(513)}var o=i(30)(i(512),i(515),a,"data-v-74eeaab7",null);t.exports=o.exports},515:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.v?i("div",{staticClass:"f fc video",style:{width:t.w},attrs:{id:"vid"+t.v._id}},[i("div",{staticClass:"thumb"},[i("img",{attrs:{src:t.v.img},on:{click:function(e){return t.goToDownload()}}}),i("div",{staticClass:"dur f"},[t._v(t._s(t.v.dur))])]),i("div",{staticClass:"title"},[i("h3",{domProps:{innerHTML:t._s(t.v.title)}})])]):t._e()},staticRenderFns:[]}},639:function(t,e,i){e=t.exports=i(421)(!1),e.push([t.i,'#plist[data-v-68197c3a]{width:320px}#slb[data-v-68197c3a]{height:120px}.loginBtn[data-v-68197c3a]{box-sizing:border-box;position:relative;margin:.2em;padding:0 15px 0 46px;border:none;text-align:left;line-height:40px;white-space:nowrap;border-radius:.2em;font-size:16px;color:#fff}.loginBtn[data-v-68197c3a]:before{content:"";box-sizing:border-box;position:absolute;top:0;left:0;width:40px;height:100%}.loginBtn[data-v-68197c3a]:focus{outline:none}.loginBtn[data-v-68197c3a]:active{box-shadow:inset 0 0 0 32px rgba(0,0,0,.1)}.loginBtn--facebook[data-v-68197c3a]{background-color:#4c69ba;background-image:linear-gradient(#4c69ba,#3b55a0);text-shadow:0 -1px 0 #354c8c;text-transform:capitalize}.loginBtn--facebook[data-v-68197c3a]:before{border-right:1px solid #364e92;background:url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png") 6px 8px no-repeat}.loginBtn--facebook[data-v-68197c3a]:focus,.loginBtn--facebook[data-v-68197c3a]:hover{background-color:#5b7bd5;background-image:linear-gradient(#5b7bd5,#4864b1)}.loginBtn--google[data-v-68197c3a]{background:#dd4b39}.loginBtn--google[data-v-68197c3a]:before{border-right:1px solid #bb3f30;background:url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png") 6px 8px no-repeat}.loginBtn--google[data-v-68197c3a]:focus,.loginBtn--google[data-v-68197c3a]:hover{background:#e74b37}#select_view[data-v-68197c3a]{padding:10px 10%;border-bottom:1px solid #fff;border-top:1px solid #fff;width:100%;margin:15px auto;box-sizing:border-box;line-height:1rem}#select_view div[data-v-68197c3a]{border-right:1px solid #fff;-ms-flex-positive:1;flex-grow:1;width:0}#select_view div[data-v-68197c3a]:last-child{border:none}#select_view div.selected i[data-v-68197c3a],#select_view div:hover i[data-v-68197c3a]{color:#0af}#select_view div i[data-v-68197c3a]:first-child{font-size:22px}#select_view div i[data-v-68197c3a]{transition:color .3s linear}ul[data-v-68197c3a]{list-style:none;padding:0 10%}ul[data-v-68197c3a],ul li[data-v-68197c3a]{margin:0}.period_list .delimiter[data-v-68197c3a]{padding:4px 10px;margin-top:16px;border-radius:4px;background:linear-gradient(30deg,#f6f8f9,#e6ecef 40%,#d8dfe4 0,rgba(245,247,249,.1) 80%,rgba(245,247,249,0));color:#333;text-transform:capitalize}',""])},647:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t},o=i(50),s=i(100),n=i(514),r=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={name:"profile",components:{"thumb-video":r.default},computed:a({},(0,o.mapState)(["isConnected","usr"]),{period:function(){}}),data:function(){return{popup:null,plist:{},viewStyle:"periodic",subs:{},periods:{}}},methods:{j:function(t){return JSON.stringify(t)},fetchPlist:function(){var t=this;this.$socket.emit("query",{query:"plist"},function(e,i){console.log("resp",i),t.plist=i})},orderByTime:function(t){return(0,s.orderBy)(t,"time","desc")},fbLog:function(){this.popup=window.open(this.usr.fbUrl)},subscribeTo:function(){var t=this;"string"==typeof this.usr.id&&(this.subs.fbClose=this.$socket.subscribe("priv/"+this.usr.id+"/fbPopClose"),this.subs.fbClose.on("subscribeFail",function(t,e){console.log("fail subscribing",e,t)}),this.subs.fbClose.on("subscribe",function(t){console.log("fail OK",t)}),this.subs.fbClose.watch(function(e){try{t.popup.close()}catch(t){console.log(t)}}),this.subs.fbLog=this.$socket.subscribe("priv/"+this.usr.id+"/fblogin"),this.subs.fbLog.watch(function(e){t.$socket.emit("log",e)}))}},beforeMount:function(){this.plist=JSON.parse(window.localStorage.plist||"{}")},mounted:function(){this.fetchPlist(),this.subscribeTo()},beforeDestroy:function(){this.$socket.unsubscribe(this.$socket.id+"/fbPopClose")},watch:{"usr.id":function(t,e){this.$socket.unsubscribe("priv/"+e+"/fbPopClose"),this.subscribeTo(),this.fetchPlist()}}}},650:function(t,e,i){var a=i(639);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(422)("7d6490c8",a,!0,{})},657:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"profile"}},[t.usr.fbUrl?i("div",{staticClass:"f fc ja",attrs:{id:"slb"}},[i("button",{staticClass:"loginBtn loginBtn--facebook",on:{click:function(e){return t.fbLog()}}},[t._v("\r\n        "+t._s(t.$t("login_with_facebook"))+"\r\n    ")])]):t._e(),i("div",{staticClass:"f fc",attrs:{id:"plist"}},[i("div",{staticClass:"f ja",attrs:{id:"select_view"}},[i("div",{staticClass:"f fc",class:{selected:"periodic"==t.viewStyle},on:{click:function(e){t.viewStyle="periodic"}}},[i("i",{staticClass:"mdi mdi-history"}),i("i",[t._v(t._s(t.$t("history")))])]),i("div",{staticClass:"f fc",class:{selected:"friends"==t.viewStyle},on:{click:function(e){t.viewStyle="friends"}}},[i("i",{staticClass:"mdi mdi-account-group"}),i("i",[t._v(t._s(t.$t("following")))])]),i("div",{staticClass:"f fc",class:{selected:"me"==t.viewStyle},on:{click:function(e){t.viewStyle="me"}}},[i("i",{staticClass:"mdi mdi-account"}),i("i",[t._v(t._s(t.$t("me")))])])]),t._l(t.period,function(e,a){return i("ul",{key:e.name,staticClass:"period_list"},[i("li",{staticClass:"delimiter"},[t._v(t._s(t.$t(a)))]),t._l(t.orderByTime(e),function(t){return i("li",{key:t._id},[i("thumb-video",{key:t._id,attrs:{v:t,w:"280px"}})],1)})],2)})],2)])},staticRenderFns:[]}}});
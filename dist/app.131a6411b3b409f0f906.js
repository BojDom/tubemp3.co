webpackJsonp([6],{138:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=(0,u.createStore)(),n=(0,l.createRouter)(),o=(0,m.createI18n)(e.lang);return(0,f.sync)(t,n),{app:new i.default({router:n,store:t,i18n:o,ssrContext:e,render:function(e){return e(c.default)}}),router:n,store:t}}Object.defineProperty(t,"__esModule",{value:!0}),t.createApp=r,n(161);var a=n(48),i=o(a),s=n(391),c=o(s),u=n(158),l=n(153),f=n(410),d=n(160),p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(d),m=n(156),g=n(407),v=o(g);Object.keys(p).forEach(function(e){i.default.filter(e,p[e])}),i.default.use(v.default)},144:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=n(393),i=o(a),s=n(143),c=n(99),u=o(c),l=n(397),f=o(l),d=n(395),p=o(d),m=n(396),g=o(m),v=n(49),h=n(398),_=o(h),b=n(98),O=o(b),y=n(392),C=o(y),w=n(394),j=o(w);t.default={components:{reconnect:g.default,"search-bar":f.default,"auto-complete":_.default,"fb-c":i.default,noQuota:p.default,lang:j.default,badge:C.default},data:function(){return{q:"",fbUrl:"",noQuota:!1,srcOpen:!1,langOpened:!1,subs:{}}},sockets:{add:function(e){this.$store.commit("addThumbnail",e)},noQuota:function(){this.noQuota=!0}},beforeMount:function(){function e(t){requestAnimationFrame(e),u.default.update(t)}var t=this;new s.Observable.create(function(e){t.isConnected?e.next():t.$watch("isConnected",function(){t.isConnected&&e.next()})}).take(1).subscribe(function(e){t.$store.commit("LOCALSTORAGE_LOGIN")}),["connect","error","disconnect","reconnect","reconnect_attempt","reconnecting","reconnect_error","reconnect_failed","connect_error","connect_timeout","connecting"].map(function(e){t.$socket.on(e,function(){t.$store.commit("CONNECTION_STATE",e)})}),console.log(this.$i18n,navigator.language,navigator.userLanguage),requestAnimationFrame(e)},mounted:function(){(new this.fp2).get(function(){console.log(arguments)})},methods:{flag:function(e){return"en"==e&&(e="gb"),"https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.1.0/flags/4x3/"+e+".svg"}},computed:r({},(0,v.mapState)(["connState","isConnected","usr"])),watch:{connState:(0,O.default)(function(e){var t=this;["disconnect","connect_error","reconnect_error","connect_timeout","reconnect_failed"].indexOf(e)>-1?this.$store.commit("setConnected",!1):["connect","reconnect"].indexOf(e)>-1&&(this.$store.commit("setConnected",!0),setTimeout(function(){console.log("AUTH TOKEN",localStorage.getItem("socketCluster.authToken")),t.$socket.emit("log","eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6Imd1ZXN0LTI3LTA0LTE4MTA6NDc6NTgiLCJpYXQiOjE1MjQ4NjkyNzgsImV4cCI6MTU1NjQyNjg3OH0.gU0dggL640yWt28IwNM-QtSvkZ1wURXVJ1OWwGPHCxxcH9WCeNAdsLjyJE8K_hLgnmrWNglSbeJy5KnobNpreQ")},200))},140),$route:function(){this.srcOpen=!1,this.langOpened=!1}},beforeDestroy:function(){this.$socket.disconnect()},metaInfo:function(){return{title:this.$t("homeTitle"),meta:[{vmid:"og:image",property:"og:image",content:"https://tubemp3.co/public/img/logo.jpg"},{vmid:"description",property:"description",content:this.$t("homeDescription")},{vmid:"og:description",property:"og:description",content:this.$t("homeDescription")}]}}}},145:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(99),a=function(e){return e&&e.__esModule?e:{default:e}}(r),i=n(49);t.default={name:"badge",sockets:{HomeBadge:function(e){this.$store.commit("setBadgeVal",e)}},data:function(){var e=this;return{r:0,bounce:new a.default.Tween({r:0}).onUpdate(function(t){e.r=t.r})}},computed:o({},(0,i.mapState)(["badgeVal"])),mounted:function(){var e=this,t=500,n=function n(){e.bounce.to({r:e.r+360},275).repeat(1).start(),t<1e4&&(t+=1e3),setTimeout(n,t)};setTimeout(n.bind(this),t)}}},146:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={mounted:function(){},methods:{loadButton:function(e,t,n){var o,r=e.getElementsByTagName(t)[0];e.getElementById(n)||(o=e.createElement(t),o.id=n,o.src="//connect.facebook.net/it_IT/sdk.js#xfbml=1&version=v2.9&appId=686186628184265",r.parentNode.insertBefore(o,r))}}}},147:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"lang",methods:{flag:function(e){return"en"==e&&(e="gb"),"https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.1.0/flags/4x3/"+e+".svg"},changeLang:function(e){this.$i18n.locale=e,this.$emit("change")}},props:{langOpened:{}}}},148:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"noQuota"}},149:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},150:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(98),a=function(e){return e&&e.__esModule?e:{default:e}}(r),i=n(49);t.default={name:"srcBar",created:function(){var e=this.$router.currentRoute;"search"===e.name&&"string"==typeof e.params.src&&e.params.src.length>2&&(this.q=e.params.src.split("_").join(" "))},data:function(){return{placeholder:"Cerca...",q:"",page:1,itemsPerPage:10}},computed:o({},(0,i.mapState)(["autoCompleteList","selectedSuggested"])),methods:{startSrc:function(){this.$store.commit("SOCKET_AUTOCOMPLETELIST",[]),this.$emit("src",!0),this.$store.state.isConnected&&this.q.length>2&&this.$router.push({name:"search",params:{src:this.q.split(" ").join("_")}})},getAutoComplete:(0,a.default)(function(){this.$store.state.isConnected&&this.q&&this.q.length>2&&this.$socket.emit("autocomplete",{q:this.q})},400)}}},151:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(49);t.default={computed:o({},(0,r.mapState)(["autoCompleteList","selectedSuggested"])),data:function(){return{}},methods:{suggest:function(e){this.$router.push({name:"search",params:{src:e.split(" ").join("_")}})}}}},152:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(48),a=o(r);n(139);var i=n(138),s=n(142),c=o(s),u=n(141),l=o(u),f=n(140),d=o(f),p=(0,i.createApp)({lang:(navigator.language||navigator.userLanguage||"en").substr(0,2).toLowerCase()}),m=p.app,g=p.router,v=p.store;a.default.use({install:function(e){e.mixin({created:function(){e.prototype.fp2=d.default}})}}),a.default.use(c.default,l.default.connect({host:"api.tubemp3.co",secure:!0,ackTimeout:999999999,autoReconnectOptions:{initialDelay:1e3,randomness:1e3,multiplier:1.5,maxDelay:4e3}}),v),window.__INITIAL_STATE__&&v.replaceState(window.__INITIAL_STATE__),g.onReady(function(){m.$mount("#app")}),"serviceWorker"in navigator&&navigator.serviceWorker.register("/service-worker.js")},153:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){return function(){return n(411)("./"+e+".vue")}}function a(){return new u.default({mode:"history",scrollBehavior:function(){return{y:0}},routes:[{name:"download",path:"/download/:id/:title?",component:r("download")},{name:"search",path:"/search/:src",component:r("search")},{name:"home",path:"/",component:r("home")},{name:"profile",path:"/profile/:id",component:r("profile")},{name:"profile",path:"/profile",component:r("profile")},{name:"disconnected",path:"/disconnected",component:r("disconnected")},{name:"404",path:"*",component:r("home")}]})}Object.defineProperty(t,"__esModule",{value:!0}),t.createRouter=a;var i=n(48),s=o(i),c=n(408),u=o(c);s.default.use(u.default)},154:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},155:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},156:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){var t={};return Object.keys(f.default).map(function(n){t[n]=f.default[n][e]}),t}function a(e){var t=Object.keys(d).indexOf(e)>-1?e:"en";return new u.default({locale:t,messages:d})}Object.defineProperty(t,"__esModule",{value:!0}),t.createI18n=a;var i=n(48),s=o(i),c=n(390),u=o(c),l=n(157),f=o(l);s.default.use(u.default);var d={en:r("en"),it:r("it")};console.log("m",d)},157:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={homeTitle:{it:"Converti e scarica gratis musica in mp3 da youtube.",en:"Download free mp3 from youtube converted in high quality."},homeDescription:{it:"Non serve registrarsi ed é piú semplice di quanto tu possa credere, scaricare musica non é mai stato cosi facile :)",en:"No registration needed, download music form youtube had never ben so easy :)"},hi:{it:"ciao",en:"hello"},source_not_found:{it:"Cé stato un problema pd :( scrivimi che magari lo risolvo al volo",en:"Source not found :("},converting:{it:"Sto convertendo in mp3 aspe",en:"Downloading from external resource"},source_found:{it:"Apposhht solo un attimo",en:"Awaiting conversion"},search_source:{it:"Recupero il link",en:""},complete:{it:"download pronto :)",en:"download ready :)"},cut:{it:"ritaglia",en:""},login_with_facebook:{it:"accedi con facebook",en:"login with facebook"},login:{it:"accedi"},today:{it:"oggi"},yesterday:{it:"ieri"},thisWeek:{it:"questa settimana",en:"this week"},thisMonth:{it:"questo mese",en:"this month"},history:{it:"cronologia"},following:{it:"seguiti"},friends:{it:"amici"}}},158:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(){return new c.default.Store({state:{thumbnails:[],connState:!1,isConnected:!1,autoCompleteList:[],locale:"it",badgeVal:0,usr:{token:!1}},actions:l.default,mutations:d.default,getters:m.default})}Object.defineProperty(t,"__esModule",{value:!0}),t.createStore=r;var a=n(48),i=o(a),s=n(49),c=o(s),u=n(154),l=o(u),f=n(159),d=o(f),p=n(155),m=o(p);i.default.use(c.default)},159:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};t.default={CONNECTION_STATE:function(e,t){e.connState=t},setConnected:function(e,t){e.isConnected=t},setBadgeVal:function(e,t){e.badgeVal=t},addThumbnail:function(e,t){t?-1===e.thumbnails.indexOf(t)&&e.thumbnails.push(t):e.thumbnails=[]},SOCKET_AUTOCOMPLETELIST:function(e,t){console.log("autoCompleteList",t),e.autoCompleteList=t},SOCKET_LOGIN:function(e,t){e.usr=t,localStorage.u=JSON.stringify(t)},LOCALSTORAGE_LOGIN:function(e){try{if(!localStorage)return;e.usr=o({},JSON.parse(localStorage.u),{fbUrl:null})}catch(e){console.log(e)}}}},160:function(e,t,n){"use strict";function o(e){var t=e.replace(/^https?:\/\//,"").replace(/\/.*$/,""),n=t.split(".").slice(-3);return"www"===n[0]&&n.shift(),n.join(".")}function r(e){var t=Date.now()/1e3-Number(e);return t<3600?a(~~(t/60)," minute"):t<86400?a(~~(t/3600)," hour"):a(~~(t/86400)," day")}function a(e,t){return 1===e?e+t:e+t+"s"}Object.defineProperty(t,"__esModule",{value:!0}),t.host=o,t.timeAgo=r},365:function(e,t){},366:function(e,t){},367:function(e,t){},368:function(e,t){},369:function(e,t){},370:function(e,t){},371:function(e,t){},372:function(e,t){},391:function(e,t,n){function o(e){n(367)}var r=n(30)(n(144),n(401),o,null,null);e.exports=r.exports},392:function(e,t,n){function o(e){n(371)}var r=n(30)(n(145),n(405),o,"data-v-b92d4442",null);e.exports=r.exports},393:function(e,t,n){function o(e){n(366)}var r=n(30)(n(146),n(400),o,null,null);e.exports=r.exports},394:function(e,t,n){function o(e){n(369)}var r=n(30)(n(147),n(403),o,null,null);e.exports=r.exports},395:function(e,t,n){function o(e){n(365)}var r=n(30)(n(148),n(399),o,null,null);e.exports=r.exports},396:function(e,t,n){function o(e){n(372)}var r=n(30)(n(149),n(406),o,"data-v-d8999cda",null);e.exports=r.exports},397:function(e,t,n){function o(e){n(368)}var r=n(30)(n(150),n(402),o,"data-v-6a5eabfa",null);e.exports=r.exports},398:function(e,t,n){function o(e){n(370)}var r=n(30)(n(151),n(404),o,"data-v-74ff482b",null);e.exports=r.exports},399:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{attrs:{id:"noQuota f fc"}},[e._v("\n    ciao\n")])},staticRenderFns:[]}},400:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"fb-root"}),n("div",{staticClass:"fb-login-button",attrs:{"data-max-rows":"1","data-size":"large","data-show-faces":"true","data-auto-logout-link":"false","data-use-continue-as":"false"}})])}]}},401:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"header-wrapper"},[n("div",{staticClass:"header"},[n("div",{staticClass:"scrolling-header",class:{opened:e.srcOpen}},[n("search-bar",{on:{src:function(t){e.srcOpen=!1}}}),n("div",{staticClass:"header-btn"},[n("div",{staticClass:"ttransition tzoom",on:{click:function(t){e.srcOpen=!e.srcOpen}}},[n("i",{staticClass:"mdi f fc mdi-magnify"})]),n("div",{attrs:{id:"logo"}},[n("router-link",{attrs:{to:"/"}},[n("img",{attrs:{src:"/public/img/logo.jpg"}})])],1),n("div",{staticClass:"ttransition tzoom"},[n("div",{staticClass:"fullsize f fc nowrap login-icon"},[n("router-link",{attrs:{to:"/profile"}},[n("badge"),e.usr.img?n("img",{attrs:{src:e.usr.img}}):n("i",{staticClass:"f fc nowrap mdi mdi-home-account"})],1)],1)])])],1)])]),n("div",{staticClass:"main nowrap f fc"},[n("auto-complete",{directives:[{name:"show",rawName:"v-show",value:e.srcOpen,expression:"srcOpen"}]}),n("transition",{attrs:{name:"fadeDown"}},[e.isConnected?e._e():n("reconnect")],1),n("transition",{attrs:{name:"fade"}},[e.noQuota?n("noQuota"):e._e()],1),n("div",{staticClass:"page f"},[n("transition",[n("router-view")],1)],1)],1),n("div",{staticClass:"f ja",attrs:{id:"footer"}},[e._m(0),n("a",{attrs:{id:"changeLang"},on:{click:function(t){e.langOpened=!e.langOpened}}},[n("img",{attrs:{src:e.flag(e.$i18n.locale)}})]),e._m(1)]),n("lang",{attrs:{langOpened:e.langOpened},on:{change:function(t){e.langOpened=!1}}})],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{attrs:{href:"https://github.com/BojDom/tubemp3.co"}},[n("img",{attrs:{src:"/public/img/git.svg"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{attrs:{href:"https://m.me/ddoremix"}},[n("img",{attrs:{src:"/public/messenger.png"}})])}]}},402:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search-bar"},[n("form",{staticClass:"f fullw nowrap searchbar",on:{submit:function(t){t.preventDefault(),e.startSrc()}}},[e.q.length>0?n("button",{attrs:{type:"button"}},[n("i",{staticClass:"mdi mdi-comment-remove-outline",on:{click:function(t){e.q=""}}})]):e._e(),n("input",{directives:[{name:"model",rawName:"v-model",value:e.q,expression:"q"}],attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.q},on:{keyup:function(t){e.getAutoComplete()},input:function(t){t.target.composing||(e.q=t.target.value)}}}),n("button",{attrs:{type:"button"}},[n("i",{staticClass:"mdi mdi-magnify",on:{click:function(t){e.startSrc()}}})])])])},staticRenderFns:[]}},403:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"f ja",class:{opened:e.langOpened},attrs:{id:"langs"}},e._l(Object.keys(e.$i18n.messages),function(t,o){return n("div",{staticClass:"f ja",on:{click:function(n){e.changeLang(t)}}},[n("div",{staticClass:"img ttransition",style:{transitionDelay:100*o/1e3+"s"}},[n("img",{attrs:{src:e.flag(t)}})])])}))},staticRenderFns:[]}},404:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"suggestions"}},e._l(e.autoCompleteList,function(t,o){return n("div",{key:t,staticClass:"suggestions"},[n("div",{class:{selected:e.selectedSuggested==o},on:{click:function(n){e.suggest(t)}}},[e._v(e._s(t))])])}))},staticRenderFns:[]}},405:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.badgeVal>0?n("div",{staticClass:"f fc badge",style:{transform:"rotateY("+e.r+"deg)"}},[n("div",{staticClass:"val f"},[n("span",[e._v("   "+e._s(e.badgeVal)+" ")])])]):e._e()},staticRenderFns:[]}},406:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{attrs:{id:"reconnect f fc"}},[e._v("\nreconnecting\n")])},staticRenderFns:[]}},411:function(e,t,n){function o(e){var t=r[e];return t?n.e(t[1]).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var r={"./disconnected.vue":[414,4],"./download.vue":[415,1],"./home.vue":[416,3],"./profile.vue":[417,0],"./search.vue":[418,2]};o.keys=function(){return Object.keys(r)},e.exports=o,o.id=411}},[152]);
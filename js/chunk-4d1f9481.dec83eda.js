(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d1f9481"],{"0752":function(e,t,a){"use strict";a("9877")},"397a":function(e,t,a){},"3a52":function(e,t,a){"use strict";a("397a")},"8bbe":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("m-login1")},r=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container2"},[a("van-nav-bar",{staticClass:"header",attrs:{fixed:"","z-index":"999"},scopedSlots:e._u([{key:"left",fn:function(){return["1"===e.paramMapAll["APP_DOWNLOAD_OPEN"]?a("el-link",{staticClass:"btn text-dark",attrs:{href:e.paramMapAll["APP_DOWNLOAD_PAGE"],target:"_blank"}},[e._v("APP "),a("i",{staticClass:"el-icon-download"})]):e._e()]},proxy:!0},{key:"right",fn:function(){return[a("img",{attrs:{src:"/static/country/"+e.language+".png",width:"25"},on:{click:function(t){e.showLanguagePop=!0}}})]},proxy:!0}])}),a("van-dialog",{attrs:{id:"language_pop",title:e.$t("message.choose lang"),width:"80%","close-on-click-overlay":"","show-confirm-button":!1},model:{value:e.showLanguagePop,callback:function(t){e.showLanguagePop=t},expression:"showLanguagePop"}},[a("language",{on:{close:function(t){e.showLanguagePop=!1}}})],1),a("div",{staticClass:"pa-2"},[a("div",{staticClass:"title"},[e._v(e._s(e.paramMapAll["SITE_NAME"]))]),a("div",{staticClass:"d-flex flex-column"},[a("div",{staticClass:"full-width login-form"},[a("van-form",{on:{submit:e.login}},[a("van-field",{staticClass:"text-center",attrs:{clearable:"",center:"",size:"large",label:"",placeholder:e.$t("message.please input phone"),rules:[{required:!0,message:e.$t("message.please input phone")}]},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}}),a("van-field",{staticClass:"text-center mt-2",attrs:{type:"password",clearable:"",center:"",size:"large",label:"",placeholder:e.$t("message.please input password"),rules:[{required:!0,message:e.$t("message.please input password")},{pattern:/^.{6,16}$/,message:e.$t("password format error"),trigger:"blur"}]},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}}),e.captchaOpen?a("van-field",{staticClass:"mt-2",attrs:{type:"number",placeholder:e.$t("message.captcha"),rules:[{required:!0,message:e.$t("message.please input captcha")}]},scopedSlots:e._u([{key:"button",fn:function(){return[a("img",{staticStyle:{height:"24px","margin-top":"4px"},attrs:{src:e.codeImg},on:{click:function(t){return t.stopPropagation(),e.createCode.apply(null,arguments)}}})]},proxy:!0}],null,!1,802897502),model:{value:e.loginForm.captcha,callback:function(t){e.$set(e.loginForm,"captcha",t)},expression:"loginForm.captcha"}}):e._e(),a("van-button",{staticClass:"btn mt-4",attrs:{loading:e.loading,small:"",round:"",block:"",type:"primary","native-type":"submit","loading-text":e.$t("message.submitting")}},[e._v("\n            "+e._s(e.$t("message.Login"))+"\n          ")]),"1"===e.paramMapAll["DEMO_LOGIN_OPEN"]?a("van-button",{staticClass:"mt-2",attrs:{plain:"",type:"primary",small:"",round:"",block:"",loading:e.YK_loading,"loading-text":e.$t("message.submitting"),"native-type":"submit"},on:{click:e.loginGuest}},[e._v(e._s(e.$t("message.login free")))]):e._e()],1),a("van-button",{staticStyle:{display:"none"}}),a("van-button",{staticClass:"mt-2",attrs:{plain:"",type:"primary",small:"",round:"",block:"",to:"/m/register"}},[e._v(e._s(e.$t("message.register now")))]),e.paramMapAll["SERVICE_ONLINE"]?a("van-button",{staticClass:"mt-2",attrs:{plain:"",type:"primary",icon:"audio",small:"",round:"",block:"",url:e.paramMapAll["SERVICE_ONLINE"]}},[e._v(e._s(e.$t("message.Contact")))]):e._e(),"1"===e.paramMapAll["SMS_OPEN"]&&"1"===e.paramMapAll["SMS_FORGET_PWD_CODE_OPEN"]?a("div",{staticClass:"mt-2 text-white",staticStyle:{width:"100%","text-align":"center"}},[a("div",{on:{click:function(t){return e.$router.push({path:"/m/forget"})}}},[e._v(e._s(e.$t("message.forget password"))+"?")])]):e._e()],1)])])],1)},o=[],i=a("f3e5");function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){u(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var p={name:"MLogin1",components:{Language:i["a"]},computed:l({},Vuex.mapGetters(["language","paramMapAll"])),data:function(){return{loading:!1,YK_loading:!1,loginForm:{},captchaOpen:!1,codeImg:null,showLanguagePop:!1}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},created:function(){this.captchaOpen="1"===this.paramMapAll["LOGIN_CAPTCHA_OPEN"],this.captchaOpen&&this.createCode()},methods:{createCode:function(){this.codeImg=this.getVerifyCode("LOGIN_CAPTCHA_OPEN")},loginGuest:function(){var e=this;this.$store.dispatch("user/loginGuest",this.loginForm).then((function(){e.YK_loading=!1,e.$toast.success(e.$t("message.login success")),e.$router.push({path:"/m/index"})})).catch((function(){e.YK_loading=!1}))},login:function(){var e=this;this.loading=!0,this.$store.dispatch("user/login",this.loginForm).then((function(){e.loading=!1,e.$toast.success(e.$t("message.login success")),e.$router.push({path:"/m/index"})})).catch((function(){e.loading=!1}))}}},g=p,m=(a("0752"),a("2877")),f=Object(m["a"])(g,s,o,!1,null,"65fd5651",null),d=f.exports;function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){O(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function O(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var y={name:"MLogin",components:{MLogin1:d},computed:h({},Vuex.mapGetters(["paramMapAll"])),data:function(){return{}},created:function(){},methods:{}},v=y,_=Object(m["a"])(v,n,r,!1,null,"59c65d8a",null);t["default"]=_.exports},9877:function(e,t,a){},f3e5:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-list"},e._l(e.getLangList,(function(t,n){return a("div",{key:n,staticClass:"d-flex",class:{active:e.language===t.lang},on:{click:function(a){return e.selectLanguage(t)}}},[a("img",{attrs:{src:"/static/country/"+t.lang+".png"}}),a("span",[e._v(e._s(t.text))])])})),0)},r=[];function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var c={name:"Language",props:{value:{type:Boolean,default:function(){return!1}}},computed:o(o({},Vuex.mapGetters(["language","paramMapAll"])),{},{getLangList:function(){var e=this,t=(this.paramMapAll["SYSTEM_LANG_LIST"]||"en,pt-br,cn").split(","),a=[];return t.forEach((function(t){a.push({text:e.lang_map[t],lang:t})})),a}}),data:function(){return{showLanguagePop:!1,lang_map:{en:"English",vi:"Tiếng Việt",id:"Bahasa Indonesia",india:"इंडिया",th:"ประเทศไทย","pt-br":"Portugues do Brasil",ja:"日本",cn:"简体中文",bm:"Malaysia",es:"Español","es-VE":"Dominica","es-CR":"Colombia","es-PE":"Perú","ar-IQ":"العراق","ar-EY":"مصر","tr-TR":"Türkiye","bn-BD":"বাংলা",kr:"한국어"}}},created:function(){},methods:{selectLanguage:function(e){this.$i18n.locale=e.lang,this.$store.dispatch("common/setLang",e.lang),this.$Local(e.lang),this.$emit("close")}}},l=c,u=(a("3a52"),a("2877")),p=Object(u["a"])(l,n,r,!1,null,"0ec746d9",null);t["a"]=p.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"KHd+":function(e,t,a){"use strict";function s(e,t,a,s,i,n,o,l){var r,v="function"==typeof e?e.options:e;if(t&&(v.render=t,v.staticRenderFns=a,v._compiled=!0),s&&(v.functional=!0),n&&(v._scopeId="data-v-"+n),o?(r=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},v._ssrRegister=r):i&&(r=l?function(){i.call(this,this.$root.$options.shadowRoot)}:i),r)if(v.functional){v._injectStyles=r;var c=v.render;v.render=function(e,t){return r.call(t),c(e,t)}}else{var d=v.beforeCreate;v.beforeCreate=d?[].concat(d,r):[r]}return{exports:e,options:v}}a.d(t,"a",(function(){return s}))},XbUn:function(e,t,a){"use strict";a.r(t);var s={props:{employee:{type:Object,default:null},notifications:{type:Array,default:null},ownerPermissionLevel:{type:Number,default:0}}},i=(a("vgfj"),a("KHd+")),n=Object(i.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("layout",{attrs:{title:"Home",notifications:e.notifications}},[a("div",{staticClass:"ph2 ph0-ns"},[a("div",{staticClass:"cf mt4 mw7 center"},[a("h2",{staticClass:"tc fw5"},[e._v("\n        "+e._s(e.company.name)+"\n      ")])]),e._v(" "),a("div",{staticClass:"cf mw7 center br3 mb3 tc"},[a("div",{staticClass:"cf dib btn-group"},[a("a",{staticClass:"f6 fl ph3 pv2 dib pointer",class:{selected:"me"==e.$page.auth.user.default_dashboard_view},attrs:{href:"/"+e.company.id+"/dashboard/me"}},[e._v("\n          Me\n        ")]),e._v(" "),a("a",{staticClass:"f6 fl ph3 pv2 pointer dib",class:{selected:"team"==e.$page.auth.user.default_dashboard_view},attrs:{href:"/"+e.company.id+"/dashboard/team"}},[e._v("\n          My team\n        ")]),e._v(" "),a("a",{staticClass:"f6 fl ph3 pv2 dib",class:{selected:"company"==e.$page.auth.user.default_dashboard_view},attrs:{href:"/"+e.company.id+"/dashboard/company"}},[e._v("\n          My company\n        ")]),e._v(" "),a("a",{staticClass:"f6 fl ph3 pv2 dib",class:{selected:"hr"==e.$page.auth.user.default_dashboard_view},attrs:{href:"/"+e.company.id+"/dashboard/hr"}},[e._v("\n          HR area\n        ")])])]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.employee.permission_level==e.ownerPermissionLevel,expression:"employee.permission_level == ownerPermissionLevel"}],staticClass:"cf mw7 center br3 mb3 bg-white box"},[a("div",{staticClass:"pa3 relative"},[a("p",{staticClass:"b"},[e._v("\n          Would you like to fill your account with fake data?\n        ")]),e._v(" "),a("p",{staticClass:"measure"},[e._v("\n          This will let you play with an account with a lot of data. You will be able to remove them at any time to start fresh.\n        ")]),e._v(" "),a("img",{staticClass:"dummy w-25 absolute",attrs:{src:"/img/company/account/fake-data.png"}}),e._v(" "),a("ul",{staticClass:"list pa0 ma0"},[a("li",{staticClass:"di pr2"},[a("loading-button",{attrs:{classes:"btn add w-auto-ns w-100 mb2 pv2 ph3",state:e.loadingState,text:"generate"}})],1),e._v(" "),a("li",{staticClass:"di"},[a("a",{attrs:{href:""}},[e._v("\n              Dismiss this message\n            ")])])])])]),e._v(" "),a("div",{staticClass:"cf mw7 center br3 mb3 bg-white box"},[a("div",{staticClass:"pa3"},[a("editor")],1)]),e._v(" "),a("div",{staticClass:"cf mw7 center br3 mb3 bg-white box"},[a("div",{staticClass:"pa3"},[a("ul",[a("li",[a("a",{attrs:{href:"/"+e.company.id+"/account"}},[e._v("\n              Access Adminland\n            ")])]),e._v(" "),a("li",[e._v("latest news")]),e._v(" "),a("li",[e._v("hr: expense overview")]),e._v(" "),a("li",[e._v("hr: view all teams")]),e._v(" "),a("li",[e._v("view company morale")]),e._v(" "),a("li",[e._v("view all employees")]),e._v(" "),a("li",[e._v("menu de la semaine")]),e._v(" "),a("li",[e._v("Mise en avant random d'un employé")])])])]),e._v(" "),a("div",{staticClass:"cf mt4 mw7 center br3 mb3 bg-white box"},[a("div",{staticClass:"pa3"},[a("h2",[e._v("Team")]),e._v(" "),a("ul",[a("li",[e._v("team agenda")]),e._v(" "),a("li",[e._v("anniversaires")]),e._v(" "),a("li",[e._v("latest news")]),e._v(" "),a("li",[e._v("manager: view time off requests")]),e._v(" "),a("li",[e._v("manager: view morale")]),e._v(" "),a("li",[e._v("manager: expense approval")]),e._v(" "),a("li",[e._v("manager: one on one")]),e._v(" "),a("li",[e._v("revue 360 de son boss ou d'employées")])])])]),e._v(" "),a("div",{staticClass:"cf mt4 mw7 center br3 mb3 bg-white box"},[a("div",{staticClass:"pa3"},[a("h2",[e._v("Me")]),e._v(" "),a("ul",[a("li",[e._v("View holidays")]),e._v(" "),a("li",[e._v("Book time off")]),e._v(" "),a("li",[e._v("Log morale")]),e._v(" "),a("li",[e._v("Reply to what you've done this week")]),e._v(" "),a("li",[e._v("Log an expense")]),e._v(" "),a("li",[e._v("View one on ones")]),e._v(" "),a("li",[e._v("View all my tasks")])])])])])])}),[],!1,null,"450ed05d",null);t.default=n.exports},i0Xw:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,"\n.dummy[data-v-450ed05d] {\n  right: 40px;\n  bottom: 20px;\n}\n",""])},nvOV:function(e,t,a){var s=a("i0Xw");"string"==typeof s&&(s=[[e.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,i);s.locals&&(e.exports=s.locals)},vgfj:function(e,t,a){"use strict";var s=a("nvOV");a.n(s).a}}]);
//# sourceMappingURL=30.js.map?id=9a4c5eed2d60eeb516c0
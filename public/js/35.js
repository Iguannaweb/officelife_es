(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{O0QR:function(a,t,n){var e=n("aihR");"string"==typeof e&&(e=[[a.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(e,i);e.locals&&(a.exports=e.locals)},aihR:function(a,t,n){(a.exports=n("I1BE")(!1)).push([a.i,"\n.options[data-v-e6805414] {\n  -webkit-column-count: 2;\n     -moz-column-count: 2;\n          column-count: 2;\n}\n@media (max-width: 480px) {\n.options[data-v-e6805414] {\n    -webkit-column-count: 1;\n       -moz-column-count: 1;\n            column-count: 1;\n}\n}\n.options img[data-v-e6805414] {\n  top: 7px;\n}\n.options a[data-v-e6805414] {\n  left: 33px;\n}\n",""])},i84M:function(a,t,n){"use strict";n.r(t);var e={components:{Layout:n("+SZM").a},props:{notifications:{type:Array,default:null},nbEmployees:{type:Number,default:0}}},i=(n("zTIM"),n("KHd+")),s=Object(i.a)(e,(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("layout",{attrs:{title:"Home",notifications:a.notifications}},[n("div",{staticClass:"ph2 ph0-ns"},[n("div",{staticClass:"mt4-l mt1 mw6 br3 bg-white box center breadcrumb relative z-0 f6 pb2"},[n("ul",{staticClass:"list ph0 tc-l tl"},[n("li",{staticClass:"di"},[n("inertia-link",{attrs:{href:"/"+a.$page.auth.company.id+"/dashboard"}},[a._v(a._s(a.$page.auth.company.name))])],1),a._v(" "),n("li",{staticClass:"di"},[a._v("\n          "+a._s(a.$t("app.breadcrumb_account_home"))+"\n        ")])])]),a._v(" "),n("div",{staticClass:"mw7 center br3 mb3 bg-white box restricted relative z-1"},[n("div",{staticClass:"pa3 mt5"},[n("h2",{staticClass:"tc normal mb4"},[a._v("\n          "+a._s(a.$t("account.home_title"))+"\n        ")]),a._v(" "),n("p",{domProps:{innerHTML:a._s(a.$t("account.home_role_administrator"))}}),a._v(" "),n("ul",{staticClass:"options list pl0 mb5"},[n("li",{staticClass:"pa2 pl0 relative"},[a._v("\n            🤖 "),n("inertia-link",{attrs:{href:"/"+a.$page.auth.company.id+"/account/employees","data-cy":"employee-admin-link"}},[a._v("\n              "+a._s(a.$t("account.home_manage_employees"))+"\n            ")])],1),a._v(" "),n("li",{staticClass:"pa2 pl0 relative"},[a._v("\n            💂‍♀ "),n("inertia-link",{attrs:{href:"/"+a.$page.auth.company.id+"/account/positions","data-cy":"position-admin-link"}},[a._v("\n              "+a._s(a.$t("account.home_manage_positions"))+"\n            ")])],1),a._v(" "),n("li",{staticClass:"pa2 pl0 relative"},[a._v("\n            👯‍♀️ "),n("inertia-link",{attrs:{href:"/"+a.$page.auth.company.id+"/account/teams","data-cy":"team-admin-link"}},[a._v("\n              "+a._s(a.$t("account.home_manage_teams"))+"\n            ")])],1),a._v(" "),n("li",{staticClass:"pa2 pl0 relative"},[a._v("\n            🏄‍♂️ "),n("inertia-link",{attrs:{href:"/"+a.$page.auth.company.id+"/account/flows","data-cy":"flow-admin-link"}},[a._v("\n              "+a._s(a.$t("account.home_manage_flows"))+"\n            ")])],1),a._v(" "),n("li",{staticClass:"pa2 pl0 relative"},[a._v("\n            ⛑ "),n("inertia-link",{attrs:{href:"/"+a.$page.auth.company.id+"/account/employeestatuses","data-cy":"employee-statuses-admin-link"}},[a._v("\n              "+a._s(a.$t("account.home_manage_employee_statuses"))+"\n            ")])],1),a._v(" "),n("li",{staticClass:"pa2 pl0 relative"},[a._v("\n            📇 "),n("inertia-link",{attrs:{href:"/"+a.$page.auth.company.id+"/account/news","data-cy":"news-admin-link"}},[a._v("\n              "+a._s(a.$t("account.home_company_news"))+"\n            ")])],1),a._v(" "),n("li",{staticClass:"pa2 pl0 relative"},[a._v("\n            🌴 "),n("inertia-link",{attrs:{href:"/"+a.$page.auth.company.id+"/account/ptopolicies","data-cy":"pto-policies-admin-link"}},[a._v("\n              "+a._s(a.$t("account.home_manage_pto"))+"\n            ")])],1)]),a._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:a.$page.auth.employee.permission_level<200,expression:"$page.auth.employee.permission_level < 200"}]},[n("p",{domProps:{innerHTML:a._s(a.$t("account.home_role_owner"))}}),a._v(" "),n("ul",{staticClass:"options list pl0 mb0"},[n("li",{staticClass:"pa2 pl0 relative"},[a._v("\n              📡 "),n("inertia-link",{attrs:{href:"/"+a.$page.auth.company.id+"/account/audit"}},[a._v("\n                "+a._s(a.$t("account.home_audit_log"))+"\n              ")])],1),a._v(" "),n("li",{directives:[{name:"show",rawName:"v-show",value:!a.$page.auth.company.has_dummy_data,expression:"!$page.auth.company.has_dummy_data"}],staticClass:"pa2 pl0"},[n("inertia-link",{attrs:{href:"/"+a.$page.auth.company.id+"/account/dummy"}},[a._v("\n                "+a._s(a.$t("account.home_generate_fake_data"))+"\n              ")])],1),a._v(" "),n("li",{directives:[{name:"show",rawName:"v-show",value:a.$page.auth.company.has_dummy_data,expression:"$page.auth.company.has_dummy_data"}],staticClass:"pa2 pl0"},[n("inertia-link",{attrs:{href:"/"+a.$page.auth.company.id+"/account/dummy"}},[a._v("\n                "+a._s(a.$t("account.home_remove_fake_data"))+"\n              ")])],1)])])])])])])}),[],!1,null,"e6805414",null);t.default=s.exports},zTIM:function(a,t,n){"use strict";var e=n("O0QR");n.n(e).a}}]);
//# sourceMappingURL=35.js.map?id=9d308459beb824b2447d
webpackJsonp([1],{"+ZuT":function(e,s){},0:function(e,s){},1:function(e,s){},"1/oy":function(e,s){},"4g3i":function(e,s){},"5mJz":function(e,s){},"9M+g":function(e,s){},GfHa:function(e,s){},Id91:function(e,s){},Jmt5:function(e,s){},"MD/G":function(e,s){s.AngularTypeEnum={extends:["@commitlint/config-angular-type-enum"],rules:{"type-enum":[2,"always",["build","ci","docs","feat","fix","perf","refactor","revert","style","test"]]}},s.Angular={extends:["@commitlint/config-angular"],rules:{"body-leading-blank":[1,"always"],"footer-leading-blank":[1,"always"],"header-max-length":[2,"always",72],"scope-case":[2,"always","lower-case"],"subject-case":[2,"never",["sentence-case","start-case","pascal-case","upper-case"]],"subject-empty":[2,"never"],"subject-full-stop":[2,"never","."],"type-case":[2,"always","lower-case"],"type-empty":[2,"never"],"type-enum":[2,"always",["build","ci","docs","feat","fix","perf","refactor","revert","style","test"]]}},s.Conventional={extends:["@commitlint/config-conventional"],rules:{"body-leading-blank":[1,"always"],"footer-leading-blank":[1,"always"],"header-max-length":[2,"always",72],"scope-case":[2,"always","lower-case"],"subject-case":[2,"never",["sentence-case","start-case","pascal-case","upper-case"]],"subject-empty":[2,"never"],"subject-full-stop":[2,"never","."],"type-case":[2,"always","lower-case"],"type-empty":[2,"never"],"type-enum":[2,"always",["build","chore","ci","docs","feat","fix","perf","refactor","revert","style","test"]]}},s.LernaScopes={extends:["@commitlint/config-lerna-scopes"],rules:{"scope-enum":[2,"always",[]]}},s.Patternplate={extends:["@commitlint/config-patternplate"],rules:{"body-leading-blank":[1,"always"],"footer-leading-blank":[1,"always"],"header-max-length":[2,"always",72],"scope-case":[2,"always","lower-case"],"subject-case":[2,"never",["sentence-case","start-case","pascal-case","upper-case"]],"subject-empty":[2,"never"],"subject-full-stop":[2,"never","."],"type-case":[2,"always","lower-case"],"type-empty":[2,"never"],"type-enum":[2,"always",["build","ci","docs","feat","fix","perf","refactor","revert","style","test"]],"scope-enum":[2,"always",["system"]]}}},NHnr:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t("7+uW"),o=t("T1ft"),n=t.n(o),i=t("e6fC"),c=t("PlbA"),r=t.n(c),l=t("wvfG"),m=t.n(l),u=t("B60x"),p=t.n(u),d=t("cOEn"),b=(t("Jmt5"),t("9M+g"),{render:function(){var e=this.$createElement,s=this._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]});var f=t("VU/8")({name:"App"},b,!1,function(e){t("4g3i")},null,null).exports,g=t("/ocq"),v=t("EFqf"),y=t.n(v),w=t("//Fk"),M=t.n(w),C=t("BrTX"),h=t.n(C),_=t("MD/G"),x=t.n(_),T={name:"Linter",data:function(){return{commitType:"",commitScope:"",commitMessage:"",commitMessageBody:"",commitMessageFooter:"",isValidCommitMessage:!0,clipboardSuccess:!0,dismissCountDown:0,clipboardMessage:""}},created:function(){},computed:{allowedType:function(){return x.a.Angular.rules["type-enum"][2]},combinedMessage:function(){var e=this.commitType;return this.commitScope&&(e+="("+this.commitScope+")"),e&&(e+=": "),e+=this.commitMessage,this.commitMessageBody&&(e+="\n\n"+this.commitMessageBody),this.commitMessageFooter&&(e+="\n\n"+this.commitMessageFooter),e},markedCombinedMessage:function(){return y()(this.combinedMessage,{sanitize:!0})}},asyncComputed:{lintResults:function(){var e=this;return new M.a(function(s){if(!e.combinedMessage)return e.isValidCommitMessage=!1,void s("please fill in commit message.");var t=x.a.Angular;h()(e.combinedMessage,t.rules,{}).then(function(t){if(t.valid)return e.isValidCommitMessage=!0,void s("");e.isValidCommitMessage=!1;var a="";t.errors.forEach(function(e){a+=e.name+":"+e.message+" (level: "+e.level+" valid: "+e.valid+") <br/>"}),s(a)})})}},methods:{countDownChanged:function(e){this.dismissCountDown=e},copyToClipboard:function(){var e=this;this.$copyText(this.combinedMessage).then(function(){e.dismissCountDown=3,e.clipboardSuccess=!0,e.clipboardMessage="Copied to Clipboard Successed"},function(s){e.dismissCountDown=5,e.clipboardSuccess=!1,e.clipboardMessage="Copied to Clipboard Failed "+s})}}},k={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("b-container",{staticClass:"linterContainer"},[t("b-row",[t("b-col",[t("b-form-select",{attrs:{options:e.allowedType,placeholder:"type"},model:{value:e.commitType,callback:function(s){e.commitType=s},expression:"commitType"}},[t("template",{slot:"first"},[t("option",{attrs:{disabled:""},domProps:{value:""}},[e._v("- type -")])])],2)],1),e._v(" "),t("b-col",{attrs:{cols:"9"}},[t("b-form-input",{attrs:{placeholder:"scope"},model:{value:e.commitScope,callback:function(s){e.commitScope=s},expression:"commitScope"}})],1)],1),e._v(" "),t("b-row",[t("b-col",[t("b-form-input",{attrs:{type:"text",placeholder:"commit message"},model:{value:e.commitMessage,callback:function(s){e.commitMessage=s},expression:"commitMessage"}})],1)],1),e._v(" "),t("b-row",[t("b-col",[t("b-form-textarea",{attrs:{placeholder:"body (optional)",rows:3,"max-rows":6},model:{value:e.commitMessageBody,callback:function(s){e.commitMessageBody=s},expression:"commitMessageBody"}})],1)],1),e._v(" "),t("b-row",[t("b-col",[t("b-form-textarea",{attrs:{placeholder:"footer (optional)",rows:1,"max-rows":6},model:{value:e.commitMessageFooter,callback:function(s){e.commitMessageFooter=s},expression:"commitMessageFooter"}})],1)],1),e._v(" "),t("b-row",{class:e.isValidCommitMessage?"d-none":""},[t("b-col",[t("b-alert",{attrs:{variant:"warning",show:!e.isValidCommitMessage},domProps:{innerHTML:e._s(e.lintResults)}})],1)],1),e._v(" "),t("b-row",{class:e.combinedMessage&&e.isValidCommitMessage?"":"d-none"},[t("b-col",[t("b-card",{attrs:{title:"Commit Message:"}},[t("p",{staticClass:"card-text",domProps:{innerHTML:e._s(e.markedCombinedMessage)}}),e._v(" "),t("b-button",{attrs:{variant:"primary",disabled:!e.isValidCommitMessage},on:{click:e.copyToClipboard}},[e._v("\n                  Copy to Clipboard\n        ")]),e._v(" "),t("b-alert",{attrs:{show:e.dismissCountDown,dismissible:"",variant:e.clipboardSuccess?"success":"warning"},on:{dismissed:function(s){e.dismissCountDown=0},"dismiss-count-down":e.countDownChanged}},[t("p",[e._v(e._s(e.clipboardMessage))])])],1)],1)],1)],1)},staticRenderFns:[]};var F={name:"Home",components:{Linter:t("VU/8")(T,k,!1,function(e){t("5mJz")},"data-v-81468216",null).exports},computed:{compiledMarkdown:function(){return y()("# About1\n# Usage\n# Tips\n# FAQ\n# Contact\n# Term\n# Home",{sanitize:!0})}}},S={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("b-container",{attrs:{fluid:""}},[t("b-row",{staticClass:"navbar"},[t("b-col",{staticClass:"title"},[e._v("\n      CIMMIT"),t("span",{staticClass:"lighter"},[e._v("LINT")])]),e._v(" "),t("b-col",{staticClass:"slogen",attrs:{cols:"5"}},[e._v("\n      lint commit messages online\n    ")]),e._v(" "),t("b-col",{staticClass:"rules"},[e._v("\n      rules: Angular\n    ")])],1),e._v(" "),t("b-row",{staticClass:"mainContainer"},[t("Linter")],1),e._v(" "),t("b-row",{staticClass:"ads"},[t("script2",[e._v('\n     (adsbygoogle = window.adsbygoogle || []).push({\n          google_ad_client: "ca-pub-3236699304584559",\n          enable_page_level_ads: true\n     });\n    ')])],1),e._v(" "),t("b-row",{staticClass:"footer"},[t("b-col",{staticClass:"text-left",domProps:{innerHTML:e._s(e.compiledMarkdown)}})],1)],1)},staticRenderFns:[]};var j=t("VU/8")(F,S,!1,function(e){t("+ZuT")},"data-v-32ce8e9e",null).exports;a.a.use(g.a);var A=new g.a({routes:[{path:"/",name:"Home",component:j}]});a.a.use(p.a),a.a.use(d.Nav),a.a.use(i.a),a.a.use(r.a),a.a.use(m.a),a.a.component("v-select",n.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:A,components:{App:f},template:"<App/>"})},zj2Q:function(e,s){}},["NHnr"]);
//# sourceMappingURL=app.6f9309cbf0b04dbb1a1b.js.map
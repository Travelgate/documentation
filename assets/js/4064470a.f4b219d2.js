"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[24730],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,f=c["".concat(p,".").concat(m)]||c[m]||s[m]||i;return a?n.createElement(f,o(o({ref:t},d),{},{components:a})):n.createElement(f,o({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},86588:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>s,Bullet:()=>d,Details:()=>f,SpecifiedBy:()=>c,assets:()=>u,contentTitle:()=>l,default:()=>b,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var n=a(87462),r=a(67294),i=a(3905);const o={id:"alert-update-common-relative-input",title:"AlertUpdateCommonRelativeInput",hide_table_of_contents:!1},l=void 0,p={unversionedId:"inputs/alert-update-common-relative-input",id:"inputs/alert-update-common-relative-input",title:"AlertUpdateCommonRelativeInput",description:"No description",source:"@site/api/inputs/alert-update-common-relative-input.mdx",sourceDirName:"inputs",slug:"/inputs/alert-update-common-relative-input",permalink:"/api/inputs/alert-update-common-relative-input",draft:!1,tags:[],version:"current",frontMatter:{id:"alert-update-common-relative-input",title:"AlertUpdateCommonRelativeInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AlertUpdateCommonConfigurationInput",permalink:"/api/inputs/alert-update-common-configuration-input"},next:{title:"AlertUpdateEmailsInput",permalink:"/api/inputs/alert-update-emails-input"}},u={},d=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),c=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),s=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AlertUpdateCommonRelativeInput.<b>percentageToAlert</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alertupdatecommonrelativeinputbpercentagetoalertbcodeint-",level:4},{value:"Member of",id:"member-of",level:3}],f=e=>{let{dataOpen:t,dataClose:a,children:o,startOpen:l=!1}=e;const[p,u]=(0,r.useState)(l);return(0,i.kt)("details",(0,n.Z)({},p?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"}},p?t:a),p&&o)},g={Bullet:d,SpecifiedBy:c,Badge:s,toc:m,Details:f},y="wrapper";function b(e){let{components:t,...a}=e;return(0,i.kt)(y,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input AlertUpdateCommonRelativeInput {\n  percentageToAlert: Int\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-alertupdatecommonrelativeinputbpercentagetoalertbcodeint-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"AlertUpdateCommonRelativeInput.",(0,i.kt)("b",null,"percentageToAlert"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(s,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"percentage to be considered status ALERTING")),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/inputs/alert-update-average-time-relative-configuration-by-requests-input"},(0,i.kt)("inlineCode",{parentName:"a"},"AlertUpdateAverageTimeRelativeConfigurationByRequestsInput"))," ",(0,i.kt)(s,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/inputs/alert-update-average-time-relative-configuration-by-time-input"},(0,i.kt)("inlineCode",{parentName:"a"},"AlertUpdateAverageTimeRelativeConfigurationByTimeInput"))," ",(0,i.kt)(s,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/inputs/alert-update-error-rate-relative-configuration-by-requests-input"},(0,i.kt)("inlineCode",{parentName:"a"},"AlertUpdateErrorRateRelativeConfigurationByRequestsInput"))," ",(0,i.kt)(s,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/inputs/alert-update-error-rate-relative-configuration-by-time-input"},(0,i.kt)("inlineCode",{parentName:"a"},"AlertUpdateErrorRateRelativeConfigurationByTimeInput"))," ",(0,i.kt)(s,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/inputs/alert-update-price-relative-configuration-by-requests-input"},(0,i.kt)("inlineCode",{parentName:"a"},"AlertUpdatePriceRelativeConfigurationByRequestsInput"))," ",(0,i.kt)(s,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/inputs/alert-update-price-relative-configuration-by-time-input"},(0,i.kt)("inlineCode",{parentName:"a"},"AlertUpdatePriceRelativeConfigurationByTimeInput"))," ",(0,i.kt)(s,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[82351],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?o.createElement(g,l(l({ref:t},c),{},{components:n})):o.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72136:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>c,Details:()=>g,SpecifiedBy:()=>p,assets:()=>u,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var o=n(87462),a=n(67294),r=n(3905);const l={id:"hotel-xcommon-settings-data-input",title:"HotelXCommonSettingsDataInput",hide_table_of_contents:!1},i=void 0,s={unversionedId:"inputs/hotel-xcommon-settings-data-input",id:"inputs/hotel-xcommon-settings-data-input",title:"HotelXCommonSettingsDataInput",description:"No description",source:"@site/api/inputs/hotel-xcommon-settings-data-input.mdx",sourceDirName:"inputs",slug:"/inputs/hotel-xcommon-settings-data-input",permalink:"/api/inputs/hotel-xcommon-settings-data-input",draft:!1,tags:[],version:"current",frontMatter:{id:"hotel-xcommon-settings-data-input",title:"HotelXCommonSettingsDataInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"HotelXCommitReferenceInput",permalink:"/api/inputs/hotel-xcommit-reference-input"},next:{title:"HotelXDefaultPluginInput",permalink:"/api/inputs/hotel-xdefault-plugin-input"}},u={},c=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>HotelXCommonSettingsDataInput.<b>currency</b></code><Bullet /><code>Currency</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelxcommonsettingsdatainputbcurrencybcodecurrency-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelXCommonSettingsDataInput.<b>businessRules</b></code><Bullet /><code>HotelXBusinessRulesInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-hotelxcommonsettingsdatainputbbusinessrulesbcodehotelxbusinessrulesinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelXCommonSettingsDataInput.<b>timeout</b></code><Bullet /><code>TimeoutInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-hotelxcommonsettingsdatainputbtimeoutbcodetimeoutinput-",level:4}],g=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:i=!1}=e;const[s,u]=(0,a.useState)(i);return(0,r.kt)("details",(0,o.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"}},s?t:n),s&&l)},f={Bullet:c,SpecifiedBy:p,Badge:d,toc:m,Details:g},b="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(b,(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input HotelXCommonSettingsDataInput {\n  currency: Currency\n  businessRules: HotelXBusinessRulesInput\n  timeout: TimeoutInput\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-hotelxcommonsettingsdatainputbcurrencybcodecurrency-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"HotelXCommonSettingsDataInput.",(0,r.kt)("b",null,"currency"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/currency"},(0,r.kt)("inlineCode",{parentName:"a"},"Currency"))," ",(0,r.kt)(d,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-hotelxcommonsettingsdatainputbbusinessrulesbcodehotelxbusinessrulesinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"HotelXCommonSettingsDataInput.",(0,r.kt)("b",null,"businessRules"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/inputs/hotel-xbusiness-rules-input"},(0,r.kt)("inlineCode",{parentName:"a"},"HotelXBusinessRulesInput"))," ",(0,r.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-hotelxcommonsettingsdatainputbtimeoutbcodetimeoutinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"HotelXCommonSettingsDataInput.",(0,r.kt)("b",null,"timeout"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/inputs/timeout-input"},(0,r.kt)("inlineCode",{parentName:"a"},"TimeoutInput"))," ",(0,r.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null))}y.isMDXComponent=!0}}]);
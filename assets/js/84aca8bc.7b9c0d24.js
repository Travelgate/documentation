"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[20391],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=d(r),m=a,f=s["".concat(c,".").concat(m)]||s[m]||u[m]||o;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},24826:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>u,Bullet:()=>p,Details:()=>f,SpecifiedBy:()=>s,assets:()=>d,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var n=r(87462),a=r(67294),o=r(3905);const l={id:"alert-error-code-input",title:"AlertErrorCodeInput",hide_table_of_contents:!1},i=void 0,c={unversionedId:"inputs/alert-error-code-input",id:"inputs/alert-error-code-input",title:"AlertErrorCodeInput",description:"No description",source:"@site/api/inputs/alert-error-code-input.mdx",sourceDirName:"inputs",slug:"/inputs/alert-error-code-input",permalink:"/api/inputs/alert-error-code-input",draft:!1,tags:[],version:"current",frontMatter:{id:"alert-error-code-input",title:"AlertErrorCodeInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AlertEmailsInput",permalink:"/api/inputs/alert-emails-input"},next:{title:"AlertErrorRateComparativeByTimeInput",permalink:"/api/inputs/alert-error-rate-comparative-by-time-input"}},d={},p=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AlertErrorCodeInput.<b>code</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alerterrorcodeinputbcodebcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertErrorCodeInput.<b>isInclusive</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alerterrorcodeinputbisinclusivebcodeboolean--",level:4},{value:"Member Of",id:"member-of",level:3}],f=e=>{let{dataOpen:t,dataClose:r,children:l,startOpen:i=!1}=e;const[c,d]=(0,a.useState)(i);return(0,o.kt)("details",(0,n.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},c?t:r),c&&l)},b={Bullet:p,SpecifiedBy:s,Badge:u,toc:m,Details:f},g="wrapper";function y(e){let{components:t,...r}=e;return(0,o.kt)(g,(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input AlertErrorCodeInput {\n  code: Int!\n  isInclusive: Boolean!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-alerterrorcodeinputbcodebcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AlertErrorCodeInput.",(0,o.kt)("b",null,"code"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Error code")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-alerterrorcodeinputbisinclusivebcodeboolean--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AlertErrorCodeInput.",(0,o.kt)("b",null,"isInclusive"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Can be filtered traffic setting as inclusive or excludent")),(0,o.kt)("h3",{id:"member-of"},"Member Of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/inputs/alert-common-configuration-input"},(0,o.kt)("inlineCode",{parentName:"a"},"AlertCommonConfigurationInput"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/inputs/alert-update-common-configuration-input"},(0,o.kt)("inlineCode",{parentName:"a"},"AlertUpdateCommonConfigurationInput"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);
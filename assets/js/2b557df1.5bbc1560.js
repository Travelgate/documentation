"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[93894],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26243:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>p,Details:()=>k,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>o,default:()=>b,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var r=n(87462),a=n(67294),l=n(3905);const i={id:"alert-slack-titles-input",title:"AlertSlackTitlesInput",hide_table_of_contents:!1},o=void 0,s={unversionedId:"inputs/alert-slack-titles-input",id:"inputs/alert-slack-titles-input",title:"AlertSlackTitlesInput",description:"No description",source:"@site/api/inputs/alert-slack-titles-input.mdx",sourceDirName:"inputs",slug:"/inputs/alert-slack-titles-input",permalink:"/api/inputs/alert-slack-titles-input",draft:!1,tags:[],version:"current",frontMatter:{id:"alert-slack-titles-input",title:"AlertSlackTitlesInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AlertSlackInput",permalink:"/api/inputs/alert-slack-input"},next:{title:"AlertUpdateAverageTimeAbsoluteByRequestsInput",permalink:"/api/inputs/alert-update-average-time-absolute-by-requests-input"}},c={},p=()=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,l.kt)(a.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AlertSlackTitlesInput.<b>ok</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alertslacktitlesinputbokbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertSlackTitlesInput.<b>alerting</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alertslacktitlesinputbalertingbcodestring-",level:4},{value:"Member of",id:"member-of",level:3}],k=e=>{let{dataOpen:t,dataClose:n,children:i,startOpen:o=!1}=e;const[s,c]=(0,a.useState)(o);return(0,l.kt)("details",(0,r.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},s?t:n),s&&i)},f={Bullet:p,SpecifiedBy:u,Badge:d,toc:m,Details:k},g="wrapper";function b(e){let{components:t,...n}=e;return(0,l.kt)(g,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"input AlertSlackTitlesInput {\n  ok: String\n  alerting: String\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-alertslacktitlesinputbokbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AlertSlackTitlesInput.",(0,l.kt)("b",null,"ok"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(d,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-alertslacktitlesinputbalertingbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AlertSlackTitlesInput.",(0,l.kt)("b",null,"alerting"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(d,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api/inputs/alert-slack-advanced-options-input"},(0,l.kt)("inlineCode",{parentName:"a"},"AlertSlackAdvancedOptionsInput"))," ",(0,l.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);
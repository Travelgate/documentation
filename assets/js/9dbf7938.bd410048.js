"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[41237],{3905:(e,a,t)=>{t.d(a,{Zo:()=>i,kt:()=>k});var n=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function r(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var d=n.createContext({}),s=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},i=function(e){var a=s(e.components);return n.createElement(d.Provider,{value:a},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},y=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,c=e.originalType,d=e.parentName,i=r(e,["components","mdxType","originalType","parentName"]),p=s(t),y=l,k=p["".concat(d,".").concat(y)]||p[y]||g[y]||c;return t?n.createElement(k,o(o({ref:a},i),{},{components:t})):n.createElement(k,o({ref:a},i))}));function k(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var c=t.length,o=new Array(c);o[0]=y;var r={};for(var d in a)hasOwnProperty.call(a,d)&&(r[d]=a[d]);r.originalType=e,r[p]="string"==typeof e?e:l,o[1]=r;for(var s=2;s<c;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},44911:(e,a,t)=>{t.r(a),t.d(a,{Badge:()=>g,Bullet:()=>i,Details:()=>k,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>y});var n=t(87462),l=t(67294),c=t(3905);const o={id:"package-cancel-penalty",title:"PackageCancelPenalty",hide_table_of_contents:!1},r=void 0,d={unversionedId:"objects/package-cancel-penalty",id:"objects/package-cancel-penalty",title:"PackageCancelPenalty",description:"No description",source:"@site/api/objects/package-cancel-penalty.mdx",sourceDirName:"objects",slug:"/objects/package-cancel-penalty",permalink:"/api/objects/package-cancel-penalty",draft:!1,tags:[],version:"current",frontMatter:{id:"package-cancel-penalty",title:"PackageCancelPenalty",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Organizations",permalink:"/api/objects/organizations"},next:{title:"PackageCancelPolicy",permalink:"/api/objects/package-cancel-policy"}},s={},i=()=>(0,c.kt)(l.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,c.kt)(l.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,c.kt)(l.Fragment,null,(0,c.kt)("span",{className:e.class},e.text)),y=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PackageCancelPenalty.<b>currency</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-packagecancelpenaltybcurrencybcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PackageCancelPenalty.<b>deadline</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-packagecancelpenaltybdeadlinebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PackageCancelPenalty.<b>description</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-packagecancelpenaltybdescriptionbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PackageCancelPenalty.<b>hoursBefore</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-packagecancelpenaltybhoursbeforebcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PackageCancelPenalty.<b>penaltyType</b></code><Bullet /><code>PackagePenaltyType!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-packagecancelpenaltybpenaltytypebcodepackagepenaltytype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PackageCancelPenalty.<b>value</b></code><Bullet /><code>Float!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-packagecancelpenaltybvaluebcodefloat--",level:4},{value:"Member of",id:"member-of",level:3}],k=e=>{let{dataOpen:a,dataClose:t,children:o,startOpen:r=!1}=e;const[d,s]=(0,l.useState)(r);return(0,c.kt)("details",(0,n.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,c.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},d?a:t),d&&o)},b={Bullet:i,SpecifiedBy:p,Badge:g,toc:y,Details:k},u="wrapper";function m(e){let{components:a,...t}=e;return(0,c.kt)(u,(0,n.Z)({},b,t,{components:a,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"No description"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type PackageCancelPenalty {\n  currency: String!\n  deadline: String!\n  description: String\n  hoursBefore: Int!\n  penaltyType: PackagePenaltyType!\n  value: Float!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-packagecancelpenaltybcurrencybcodestring--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"PackageCancelPenalty.",(0,c.kt)("b",null,"currency"))),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Currency used for penalty received in standard ISO 4217")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-packagecancelpenaltybdeadlinebcodestring--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"PackageCancelPenalty.",(0,c.kt)("b",null,"deadline"))),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"End date where the penalty applies")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-packagecancelpenaltybdescriptionbcodestring-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"PackageCancelPenalty.",(0,c.kt)("b",null,"description"))),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Description of the penalty")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-packagecancelpenaltybhoursbeforebcodeint--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"PackageCancelPenalty.",(0,c.kt)("b",null,"hoursBefore"))),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,c.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Hours before the penalty starts applying")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-packagecancelpenaltybpenaltytypebcodepackagepenaltytype--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"PackageCancelPenalty.",(0,c.kt)("b",null,"penaltyType"))),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/enums/package-penalty-type"},(0,c.kt)("inlineCode",{parentName:"a"},"PackagePenaltyType!"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Type of penalty (amount, nights...)")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-packagecancelpenaltybvaluebcodefloat--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"PackageCancelPenalty.",(0,c.kt)("b",null,"value"))),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/float"},(0,c.kt)("inlineCode",{parentName:"a"},"Float!"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"value of the penalty taking in account which type of penalty is")),(0,c.kt)("h3",{id:"member-of"},"Member of"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api/objects/package-cancel-policy"},(0,c.kt)("inlineCode",{parentName:"a"},"PackageCancelPolicy"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[50155],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>g});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function d(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=a.createContext({}),i=function(e){var t=a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},s=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=i(o),b=n,g=p["".concat(c,".").concat(b)]||p[b]||m[b]||r;return o?a.createElement(g,l(l({ref:t},s),{},{components:o})):a.createElement(g,l({ref:t},s))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,l=new Array(r);l[0]=b;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[p]="string"==typeof e?e:n,l[1]=d;for(var i=2;i<r;i++)l[i]=o[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,o)}b.displayName="MDXCreateElement"},94765:(e,t,o)=>{o.r(t),o.d(t,{Badge:()=>m,Bullet:()=>s,Details:()=>g,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>d,default:()=>k,frontMatter:()=>l,metadata:()=>c,toc:()=>b});var a=o(87462),n=o(67294),r=o(3905);const l={id:"promotion",title:"Promotion",hide_table_of_contents:!1},d=void 0,c={unversionedId:"objects/promotion",id:"objects/promotion",title:"Promotion",description:"Information about room promotions(offers).",source:"@site/api/objects/promotion.mdx",sourceDirName:"objects",slug:"/objects/promotion",permalink:"/api/objects/promotion",draft:!1,tags:[],version:"current",frontMatter:{id:"promotion",title:"Promotion",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Profile",permalink:"/api/objects/profile"},next:{title:"PropertyType",permalink:"/api/objects/property-type"}},i={},s=()=>(0,r.kt)(n.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(n.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,r.kt)(n.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Promotion.<b>code</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-promotionbcodebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Promotion.<b>name</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-promotionbnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Promotion.<b>supplierCode</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-promotionbsuppliercodebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Promotion.<b>effectiveDate</b></code><Bullet /><code>Date</code> <Badge class="badge badge--deprecated badge--secondary" text="deprecated"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-promotionbeffectivedatebcodedate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Promotion.<b>expireDate</b></code><Bullet /><code>Date</code> <Badge class="badge badge--deprecated badge--secondary" text="deprecated"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-promotionbexpiredatebcodedate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Promotion.<b>start</b></code><Bullet /><code>Date</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-promotionbstartbcodedate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Promotion.<b>end</b></code><Bullet /><code>Date</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-promotionbendbcodedate-",level:4},{value:"Member of",id:"member-of",level:3}],g=e=>{let{dataOpen:t,dataClose:o,children:l,startOpen:d=!1}=e;const[c,i]=(0,n.useState)(d);return(0,r.kt)("details",(0,a.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},c?t:o),c&&l)},u={Bullet:s,SpecifiedBy:p,Badge:m,toc:b,Details:g},f="wrapper";function k(e){let{components:t,...o}=e;return(0,r.kt)(f,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Information about room promotions(offers)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Promotion {\n  code: String!\n  name: String\n  supplierCode: String!\n  effectiveDate: Date @deprecated\n  expireDate: Date @deprecated\n  start: Date\n  end: Date\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-promotionbcodebcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Promotion.",(0,r.kt)("b",null,"code"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Specifies the promotion code.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-promotionbnamebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Promotion.",(0,r.kt)("b",null,"name"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Specifies the promotion name.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-promotionbsuppliercodebcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Promotion.",(0,r.kt)("b",null,"supplierCode"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Specifies the supplier s promotion code.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-promotionbeffectivedatebcodedate--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Promotion.",(0,r.kt)("b",null,"effectiveDate"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/date"},(0,r.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,r.kt)(m,{class:"badge badge--deprecated badge--secondary",text:"deprecated",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("admonition",{parentName:"blockquote",title:"DEPRECATED",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"deprecated from 2018-02-28. Incorrect date format.")),(0,r.kt)("p",{parentName:"blockquote"},"Promotion effective date.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-promotionbexpiredatebcodedate--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Promotion.",(0,r.kt)("b",null,"expireDate"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/date"},(0,r.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,r.kt)(m,{class:"badge badge--deprecated badge--secondary",text:"deprecated",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("admonition",{parentName:"blockquote",title:"DEPRECATED",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"deprecated from 2018-02-28. Incorrect date format.")),(0,r.kt)("p",{parentName:"blockquote"},"Promotion expire date.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-promotionbstartbcodedate-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Promotion.",(0,r.kt)("b",null,"start"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/date"},(0,r.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Promotion effective date.\nFormat: YYYY-MM-DD")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-promotionbendbcodedate-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Promotion.",(0,r.kt)("b",null,"end"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/date"},(0,r.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Promotion expire date.\nFormat: YYYY-MM-DD")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/objects/room"},(0,r.kt)("inlineCode",{parentName:"a"},"Room"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);
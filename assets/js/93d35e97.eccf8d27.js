"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[82998],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,m=d["".concat(c,".").concat(b)]||d[b]||s[b]||i;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},78712:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>s,Bullet:()=>u,Details:()=>m,SpecifiedBy:()=>d,assets:()=>p,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>c,toc:()=>b});var a=n(87462),r=n(67294),i=n(3905);const l={id:"vehicle-input",title:"VehicleInput",hide_table_of_contents:!1},o=void 0,c={unversionedId:"inputs/vehicle-input",id:"inputs/vehicle-input",title:"VehicleInput",description:"No description",source:"@site/api/inputs/vehicle-input.mdx",sourceDirName:"inputs",slug:"/inputs/vehicle-input",permalink:"/api/inputs/vehicle-input",draft:!1,tags:[],version:"current",frontMatter:{id:"vehicle-input",title:"VehicleInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"VehicleBookInput",permalink:"/api/inputs/vehicle-book-input"},next:{title:"VirtualCreditCardInput",permalink:"/api/inputs/virtual-credit-card-input"}},p={},u=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),s=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>VehicleInput.<b>index</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-vehicleinputbindexbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>VehicleInput.<b>type</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-vehicleinputbtypebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>VehicleInput.<b>attributes</b></code><Bullet /><code>VehicleAttributesInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-vehicleinputbattributesbcodevehicleattributesinput-",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:o=!1}=e;const[c,p]=(0,r.useState)(o);return(0,i.kt)("details",(0,a.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&l)},f={Bullet:u,SpecifiedBy:d,Badge:s,toc:b,Details:m},h="wrapper";function y(e){let{components:t,...n}=e;return(0,i.kt)(h,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input VehicleInput {\n  index: Int!\n  type: String\n  attributes: VehicleAttributesInput\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-vehicleinputbindexbcodeint--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"VehicleInput.",(0,i.kt)("b",null,"index"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,i.kt)(s,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(s,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Consecutive vehicle index in travel.")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-vehicleinputbtypebcodestring-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"VehicleInput.",(0,i.kt)("b",null,"type"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(s,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Vehicle Type Code. Needs Code Mapping.")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-vehicleinputbattributesbcodevehicleattributesinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"VehicleInput.",(0,i.kt)("b",null,"attributes"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/inputs/vehicle-attributes-input"},(0,i.kt)("inlineCode",{parentName:"a"},"VehicleAttributesInput"))," ",(0,i.kt)(s,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Detailed vehicle characteristics.")),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/inputs/traveller-input"},(0,i.kt)("inlineCode",{parentName:"a"},"TravellerInput"))," ",(0,i.kt)(s,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);
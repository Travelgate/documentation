"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[70123],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,p=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,f=c["".concat(i,".").concat(m)]||c[m]||s[m]||p;return n?a.createElement(f,r(r({ref:t},d),{},{components:n})):a.createElement(f,r({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=n.length,r=new Array(p);r[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:o,r[1]=l;for(var u=2;u<p;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19607:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>s,Bullet:()=>d,Details:()=>f,SpecifiedBy:()=>c,assets:()=>u,contentTitle:()=>l,default:()=>y,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var a=n(87462),o=n(67294),p=n(3905);const r={id:"hotel-xapp-input",title:"HotelXAppInput",hide_table_of_contents:!1},l=void 0,i={unversionedId:"inputs/hotel-xapp-input",id:"inputs/hotel-xapp-input",title:"HotelXAppInput",description:"Input that allows to send additional data to app (currently only working on Book mutation).",source:"@site/api/inputs/hotel-xapp-input.mdx",sourceDirName:"inputs",slug:"/inputs/hotel-xapp-input",permalink:"/api/inputs/hotel-xapp-input",draft:!1,tags:[],version:"current",frontMatter:{id:"hotel-xapp-input",title:"HotelXAppInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"HotelXAppDataInput",permalink:"/api/inputs/hotel-xapp-data-input"},next:{title:"HotelXAppWhereUniqueInput",permalink:"/api/inputs/hotel-xapp-where-unique-input"}},u={},d=()=>(0,p.kt)(o.Fragment,null,(0,p.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),c=e=>(0,p.kt)(o.Fragment,null,"Specification",(0,p.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),s=e=>(0,p.kt)(o.Fragment,null,(0,p.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>HotelXAppInput.<b>where</b></code><Bullet /><code>HotelXAppWhereUniqueInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-hotelxappinputbwherebcodehotelxappwhereuniqueinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelXAppInput.<b>data</b></code><Bullet /><code>HotelXAppDataInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-hotelxappinputbdatabcodehotelxappdatainput--",level:4}],f=e=>{let{dataOpen:t,dataClose:n,children:r,startOpen:l=!1}=e;const[i,u]=(0,o.useState)(l);return(0,p.kt)("details",(0,a.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,p.kt)("summary",{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&r)},h={Bullet:d,SpecifiedBy:c,Badge:s,toc:m,Details:f},b="wrapper";function y(e){let{components:t,...n}=e;return(0,p.kt)(b,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Input that allows to send additional data to app (currently only working on Book mutation)."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"input HotelXAppInput {\n  where: HotelXAppWhereUniqueInput!\n  data: HotelXAppDataInput!\n}\n")),(0,p.kt)("h3",{id:"fields"},"Fields"),(0,p.kt)("h4",{id:"code-style-fontweight-normal-hotelxappinputbwherebcodehotelxappwhereuniqueinput--"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("code",{style:{fontWeight:"normal"}},"HotelXAppInput.",(0,p.kt)("b",null,"where"))),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"h4",href:"/api/inputs/hotel-xapp-where-unique-input"},(0,p.kt)("inlineCode",{parentName:"a"},"HotelXAppWhereUniqueInput!"))," ",(0,p.kt)(s,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,p.kt)(s,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"Identifies the app.")),(0,p.kt)("h4",{id:"code-style-fontweight-normal-hotelxappinputbdatabcodehotelxappdatainput--"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("code",{style:{fontWeight:"normal"}},"HotelXAppInput.",(0,p.kt)("b",null,"data"))),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"h4",href:"/api/inputs/hotel-xapp-data-input"},(0,p.kt)("inlineCode",{parentName:"a"},"HotelXAppDataInput!"))," ",(0,p.kt)(s,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,p.kt)(s,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"Data that will be sent to app.")))}y.isMDXComponent=!0}}]);
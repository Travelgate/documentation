/*! For license information please see 7595729a.92caf9e5.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[83428],{69950:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>h,SpecifiedBy:()=>c,assets:()=>i,contentTitle:()=>r,default:()=>g,frontMatter:()=>s,metadata:()=>a,toc:()=>x});const a=JSON.parse('{"id":"types/inputs/hotel-xapp-input","title":"HotelXAppInput","description":"Input that allows to send additional data to app (currently only working on Book mutation).","source":"@site/api/types/inputs/hotel-xapp-input.mdx","sourceDirName":"types/inputs","slug":"/types/inputs/hotel-xapp-input","permalink":"/api/types/inputs/hotel-xapp-input","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"hotel-xapp-input","title":"HotelXAppInput"},"sidebar":"schemaSidebar","previous":{"title":"HotelXAppDataInput","permalink":"/api/types/inputs/hotel-xapp-data-input"},"next":{"title":"HotelXAppWhereUniqueInput","permalink":"/api/types/inputs/hotel-xapp-where-unique-input"}}');var p=n(74848),o=n(28453),l=n(96540);const s={id:"hotel-xapp-input",title:"HotelXAppInput"},r=void 0,i={},d=()=>(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),c=e=>(0,p.jsxs)(p.Fragment,{children:["Specification",(0,p.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),u=e=>(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("span",{className:e.class,children:e.text})}),h=({dataOpen:e,dataClose:t,children:n,startOpen:a=!1})=>{const[o,s]=(0,l.useState)(a);return(0,p.jsxs)("details",{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,p.jsx)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"},children:o?e:t}),o&&n]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>HotelXAppInput.<b>where</b></code><Bullet></Bullet><code>HotelXAppWhereUniqueInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelxappinputwherehotelxappwhereuniqueinput--",level:4},{value:'<code>HotelXAppInput.<b>data</b></code><Bullet></Bullet><code>HotelXAppDataInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelxappinputdatahotelxappdatainput--",level:4}];function f(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(t.p,{children:"Input that allows to send additional data to app (currently only working on Book mutation)."}),"\n",(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:"language-graphql",children:"input HotelXAppInput {\n  where: HotelXAppWhereUniqueInput!\n  data: HotelXAppDataInput!\n}\n"})}),"\n",(0,p.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,p.jsxs)(t.h4,{id:"hotelxappinputwherehotelxappwhereuniqueinput--",children:[(0,p.jsx)(t.a,{href:"#",children:(0,p.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelXAppInput.",(0,p.jsx)("b",{children:"where"})]})}),(0,p.jsx)(d,{}),(0,p.jsx)(t.a,{href:"/api/types/inputs/hotel-xapp-where-unique-input",children:(0,p.jsx)(t.code,{children:"HotelXAppWhereUniqueInput!"})})," ",(0,p.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,p.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,p.jsx)(t.p,{children:"Identifies the app."}),"\n",(0,p.jsxs)(t.h4,{id:"hotelxappinputdatahotelxappdatainput--",children:[(0,p.jsx)(t.a,{href:"#",children:(0,p.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelXAppInput.",(0,p.jsx)("b",{children:"data"})]})}),(0,p.jsx)(d,{}),(0,p.jsx)(t.a,{href:"/api/types/inputs/hotel-xapp-data-input",children:(0,p.jsx)(t.code,{children:"HotelXAppDataInput!"})})," ",(0,p.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,p.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,p.jsx)(t.p,{children:"Data that will be sent to app."})]})}function g(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(f,{...e})}):f(e)}},21020:(e,t,n)=>{var a=n(96540),p=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,n){var a,o={},i=null,d=null;for(a in void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(d=t.ref),t)l.call(t,a)&&!r.hasOwnProperty(a)&&(o[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===o[a]&&(o[a]=t[a]);return{$$typeof:p,type:e,key:i,ref:d,props:o,_owner:s.current}}t.Fragment=o,t.jsx=i,t.jsxs=i},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>s});var a=n(96540);const p={},o=a.createContext(p);function l(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(p):e.components||p:l(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);
/*! For license information please see 6ea78971.7b4cf47a.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[97805],{52306:(e,t,s)=>{s.r(t),s.d(t,{Badge:()=>h,Bullet:()=>d,Details:()=>x,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>c,default:()=>b,frontMatter:()=>l,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"types/objects/hotel-xoperation-span","title":"HotelXOperationSpan","description":"No description","source":"@site/api/types/objects/hotel-xoperation-span.mdx","sourceDirName":"types/objects","slug":"/types/objects/hotel-xoperation-span","permalink":"/api/types/objects/hotel-xoperation-span","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"hotel-xoperation-span","title":"HotelXOperationSpan"},"sidebar":"schemaSidebar","previous":{"title":"HotelXMutation","permalink":"/api/types/objects/hotel-xmutation"},"next":{"title":"HotelXParameter","permalink":"/api/types/objects/hotel-xparameter"}}');var a=s(74848),o=s(28453),r=s(96540);const l={id:"hotel-xoperation-span",title:"HotelXOperationSpan"},c=void 0,i={},d=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),h=e=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{className:e.class,children:e.text})}),x=({dataOpen:e,dataClose:t,children:s,startOpen:n=!1})=>{const[o,l]=(0,r.useState)(n);return(0,a.jsxs)("details",{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:o?e:t}),o&&s]})},u=[{value:"Fields",id:"fields",level:3},{value:'<code>HotelXOperationSpan.<b>status</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelxoperationspanstatusstring--",level:4},{value:'<code>HotelXOperationSpan.<b>accessSpans</b></code><Bullet></Bullet><code>[HotelXAccessSpan!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelxoperationspanaccessspanshotelxaccessspan--",level:4},{value:"Member Of",id:"member-of",level:3}];function f(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"No description"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"type HotelXOperationSpan {\n  status: String!\n  accessSpans: [HotelXAccessSpan!]\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"hotelxoperationspanstatusstring--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelXOperationSpan.",(0,a.jsx)("b",{children:"status"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,a.jsx)(t.code,{children:"String!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.h4,{id:"hotelxoperationspanaccessspanshotelxaccessspan--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelXOperationSpan.",(0,a.jsx)("b",{children:"accessSpans"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/types/objects/hotel-xaccess-span",children:(0,a.jsx)(t.code,{children:"[HotelXAccessSpan!]"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/api/types/objects/hotel-xtracing",children:(0,a.jsx)(t.code,{children:"HotelXTracing"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}},21020:(e,t,s)=>{var n=s(96540),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,s){var n,o={},i=null,d=null;for(n in void 0!==s&&(i=""+s),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(d=t.ref),t)r.call(t,n)&&!c.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:a,type:e,key:i,ref:d,props:o,_owner:l.current}}t.Fragment=o,t.jsx=i,t.jsxs=i},74848:(e,t,s)=>{e.exports=s(21020)},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>l});var n=s(96540);const a={},o=n.createContext(a);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);
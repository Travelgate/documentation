/*! For license information please see 3467b242.5cd83a10.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[40341],{62583:(e,r,o)=>{o.r(r),o.d(r,{Badge:()=>m,Bullet:()=>l,Details:()=>b,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>a,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var t=o(74848),n=o(28453),s=o(96540);const c={id:"room-price",title:"RoomPrice"},a=void 0,i={id:"types/objects/room-price",title:"RoomPrice",description:"Specifies the room price.",source:"@site/api/types/objects/room-price.mdx",sourceDirName:"types/objects",slug:"/types/objects/room-price",permalink:"/api/types/objects/room-price",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"room-price",title:"RoomPrice"},sidebar:"schemaSidebar",previous:{title:"RoomOptionQuote",permalink:"/api/types/objects/room-option-quote"},next:{title:"RoomStatic",permalink:"/api/types/objects/room-static"}},d={},l=()=>{const e={span:"span",...(0,n.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const r={a:"a",...(0,n.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const r={span:"span",...(0,n.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(r.span,{className:e.class,children:e.text})})},b=({dataOpen:e,dataClose:r,children:o,startOpen:c=!1})=>{const a={details:"details",summary:"summary",...(0,n.R)()},[i,d]=(0,s.useState)(c);return(0,t.jsxs)(a.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(a.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:i?e:r}),i&&o]})},u=[{value:"Fields",id:"fields",level:3},{value:'<code>RoomPrice.<b>price</b></code><Bullet></Bullet><code>Price!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"roompricepriceprice--",level:4},{value:'<code>RoomPrice.<b>breakdown</b></code><Bullet></Bullet><code>[PriceBreakdown!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"roompricebreakdownpricebreakdown--",level:4},{value:"Member Of",id:"member-of",level:3}];function h(e){const r={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"Specifies the room price."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-graphql",children:"type RoomPrice {\n  price: Price!\n  breakdown: [PriceBreakdown!]\n}\n"})}),"\n",(0,t.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(r.h4,{id:"roompricepriceprice--",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["RoomPrice.",(0,t.jsx)("b",{children:"price"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(r.a,{href:"/api/types/objects/price",children:(0,t.jsx)(r.code,{children:"Price!"})})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(r.p,{children:"Total price for all days."}),"\n",(0,t.jsxs)(r.h4,{id:"roompricebreakdownpricebreakdown--",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["RoomPrice.",(0,t.jsx)("b",{children:"breakdown"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(r.a,{href:"/api/types/objects/price-breakdown",children:(0,t.jsx)(r.code,{children:"[PriceBreakdown!]"})})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(r.p,{children:"Daily break downs price."}),"\n",(0,t.jsx)(r.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/api/types/objects/room",children:(0,t.jsx)(r.code,{children:"Room"})})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"object"})]})]})}function f(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},21020:(e,r,o)=>{var t=o(96540),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,o){var t,s={},d=null,l=null;for(t in void 0!==o&&(d=""+o),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(l=r.ref),r)c.call(r,t)&&!i.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===s[t]&&(s[t]=r[t]);return{$$typeof:n,type:e,key:d,ref:l,props:s,_owner:a.current}}r.Fragment=s,r.jsx=d,r.jsxs=d},74848:(e,r,o)=>{e.exports=o(21020)},28453:(e,r,o)=>{o.d(r,{R:()=>c,x:()=>a});var t=o(96540);const n={},s=t.createContext(n);function c(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);
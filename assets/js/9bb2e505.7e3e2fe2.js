/*! For license information please see 9bb2e505.7e3e2fe2.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[41265],{4527:(e,s,t)=>{t.r(s),t.d(s,{Badge:()=>h,Bullet:()=>i,Details:()=>x,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>j});const a=JSON.parse('{"id":"types/objects/stop-sales","title":"StopSales","description":"Represents stop sales restrictions.","source":"@site/api/types/objects/stop-sales.mdx","sourceDirName":"types/objects","slug":"/types/objects/stop-sales","permalink":"/api/types/objects/stop-sales","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"stop-sales","title":"StopSales"},"sidebar":"schemaSidebar","previous":{"title":"Stats","permalink":"/api/types/objects/stats"},"next":{"title":"Supplement","permalink":"/api/types/objects/supplement"}}');var o=t(74848),l=t(28453),n=t(96540);const r={id:"stop-sales",title:"StopSales"},c=void 0,d={},i=()=>(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),h=e=>(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("span",{className:e.class,children:e.text})}),x=({dataOpen:e,dataClose:s,children:t,startOpen:a=!1})=>{const[l,r]=(0,n.useState)(a);return(0,o.jsxs)("details",{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)("summary",{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:l?e:s}),l&&t]})},j=[{value:"Fields",id:"fields",level:3},{value:'<code>StopSales.<b>closeMaster</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"stopsalesclosemasterboolean-",level:4},{value:'<code>StopSales.<b>closeOnArrival</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"stopsalescloseonarrivalboolean-",level:4},{value:'<code>StopSales.<b>closeOnDeparture</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"stopsalescloseondepartureboolean-",level:4},{value:"Member Of",id:"member-of",level:3}];function b(e){const s={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.p,{children:"Represents stop sales restrictions."}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-graphql",children:"type StopSales {\n  closeMaster: Boolean\n  closeOnArrival: Boolean\n  closeOnDeparture: Boolean\n}\n"})}),"\n",(0,o.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(s.h4,{id:"stopsalesclosemasterboolean-",children:[(0,o.jsx)(s.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["StopSales.",(0,o.jsx)("b",{children:"closeMaster"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(s.a,{href:"/api/types/scalars/boolean",children:(0,o.jsx)(s.code,{children:"Boolean"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsx)(s.p,{children:"Indicates whether to close the master."}),"\n",(0,o.jsxs)(s.h4,{id:"stopsalescloseonarrivalboolean-",children:[(0,o.jsx)(s.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["StopSales.",(0,o.jsx)("b",{children:"closeOnArrival"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(s.a,{href:"/api/types/scalars/boolean",children:(0,o.jsx)(s.code,{children:"Boolean"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsx)(s.p,{children:"Indicates whether to close on arrival. Null if not applicable."}),"\n",(0,o.jsxs)(s.h4,{id:"stopsalescloseondepartureboolean-",children:[(0,o.jsx)(s.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["StopSales.",(0,o.jsx)("b",{children:"closeOnDeparture"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(s.a,{href:"/api/types/scalars/boolean",children:(0,o.jsx)(s.code,{children:"Boolean"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsx)(s.p,{children:"Indicates whether to close on departure. Null if not applicable."}),"\n",(0,o.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"/api/types/objects/offer-avail-load",children:(0,o.jsx)(s.code,{children:"OfferAvailLoad"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(i,{}),(0,o.jsx)(s.a,{href:"/api/types/objects/restrictions-derived-rate-load",children:(0,o.jsx)(s.code,{children:"RestrictionsDerivedRateLoad"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(i,{}),(0,o.jsx)(s.a,{href:"/api/types/objects/restrictions-load",children:(0,o.jsx)(s.code,{children:"RestrictionsLoad"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function u(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(b,{...e})}):b(e)}},21020:(e,s,t)=>{var a=t(96540),o=Symbol.for("react.element"),l=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,r=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,s,t){var a,l={},d=null,i=null;for(a in void 0!==t&&(d=""+t),void 0!==s.key&&(d=""+s.key),void 0!==s.ref&&(i=s.ref),s)n.call(s,a)&&!c.hasOwnProperty(a)&&(l[a]=s[a]);if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===l[a]&&(l[a]=s[a]);return{$$typeof:o,type:e,key:d,ref:i,props:l,_owner:r.current}}s.Fragment=l,s.jsx=d,s.jsxs=d},74848:(e,s,t)=>{e.exports=t(21020)},28453:(e,s,t)=>{t.d(s,{R:()=>n,x:()=>r});var a=t(96540);const o={},l=a.createContext(o);function n(e){const s=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),a.createElement(l.Provider,{value:s},e.children)}}}]);
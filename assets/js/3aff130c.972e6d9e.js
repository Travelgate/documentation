/*! For license information please see 3aff130c.972e6d9e.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6408],{29472:(e,r,t)=>{t.r(r),t.d(r,{Badge:()=>m,Bullet:()=>l,Details:()=>p,SpecifiedBy:()=>f,assets:()=>i,contentTitle:()=>d,default:()=>x,frontMatter:()=>s,metadata:()=>o,toc:()=>y});const o=JSON.parse('{"id":"types/objects/ferry-accommodation","title":"FerryAccommodation","description":"No description","source":"@site/api/types/objects/ferry-accommodation.mdx","sourceDirName":"types/objects","slug":"/types/objects/ferry-accommodation","permalink":"/api/types/objects/ferry-accommodation","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"ferry-accommodation","title":"FerryAccommodation"},"sidebar":"schemaSidebar","previous":{"title":"Feature","permalink":"/api/types/objects/feature"},"next":{"title":"FerryCalendarConnection","permalink":"/api/types/objects/ferry-calendar-connection"}}');var n=t(74848),a=t(28453),c=t(96540);const s={id:"ferry-accommodation",title:"FerryAccommodation"},d=void 0,i={},l=()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),f=e=>(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),m=e=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{className:e.class,children:e.text})}),p=({dataOpen:e,dataClose:r,children:t,startOpen:o=!1})=>{const[a,s]=(0,c.useState)(o);return(0,n.jsxs)("details",{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"},children:a?e:r}),a&&t]})},y=[{value:"Fields",id:"fields",level:3},{value:'<code>FerryAccommodation.<b>code</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"ferryaccommodationcodestring-",level:4},{value:'<code>FerryAccommodation.<b>description</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"ferryaccommodationdescriptionstring-",level:4},{value:"Member Of",id:"member-of",level:3}];function h(e){const r={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"No description"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-graphql",children:"type FerryAccommodation {\n  code: String\n  description: String\n}\n"})}),"\n",(0,n.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(r.h4,{id:"ferryaccommodationcodestring-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["FerryAccommodation.",(0,n.jsx)("b",{children:"code"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(r.a,{href:"/api/types/scalars/string",children:(0,n.jsx)(r.code,{children:"String"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(r.h4,{id:"ferryaccommodationdescriptionstring-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["FerryAccommodation.",(0,n.jsx)("b",{children:"description"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(r.a,{href:"/api/types/scalars/string",children:(0,n.jsx)(r.code,{children:"String"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(r.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/api/types/objects/ferry-calendar-pay-load-data",children:(0,n.jsx)(r.code,{children:"FerryCalendarPayLoadData"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"object"}),(0,n.jsx)(l,{}),(0,n.jsx)(r.a,{href:"/api/types/objects/ferry-offer-book",children:(0,n.jsx)(r.code,{children:"FerryOfferBook"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"object"}),(0,n.jsx)(l,{}),(0,n.jsx)(r.a,{href:"/api/types/objects/ferry-offer-data",children:(0,n.jsx)(r.code,{children:"FerryOfferData"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},21020:(e,r,t)=>{var o=t(96540),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,t){var o,a={},i=null,l=null;for(o in void 0!==t&&(i=""+t),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(l=r.ref),r)c.call(r,o)&&!d.hasOwnProperty(o)&&(a[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===a[o]&&(a[o]=r[o]);return{$$typeof:n,type:e,key:i,ref:l,props:a,_owner:s.current}}r.Fragment=a,r.jsx=i,r.jsxs=i},74848:(e,r,t)=>{e.exports=t(21020)},28453:(e,r,t)=>{t.d(r,{R:()=>c,x:()=>s});var o=t(96540);const n={},a=o.createContext(n);function c(e){const r=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),o.createElement(a.Provider,{value:r},e.children)}}}]);
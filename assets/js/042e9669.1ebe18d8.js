/*! For license information please see 042e9669.1ebe18d8.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[28246],{61739:(e,t,s)=>{s.r(t),s.d(t,{Badge:()=>y,Bullet:()=>l,Details:()=>g,SpecifiedBy:()=>p,assets:()=>o,contentTitle:()=>d,default:()=>j,frontMatter:()=>c,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"types/objects/activity","title":"Activity","description":"No description","source":"@site/api/types/objects/activity.mdx","sourceDirName":"types/objects","slug":"/types/objects/activity","permalink":"/api/types/objects/activity","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"activity","title":"Activity"},"sidebar":"schemaSidebar","previous":{"title":"Activation","permalink":"/api/types/objects/activation"},"next":{"title":"AddOn","permalink":"/api/types/objects/add-on"}}');var i=s(74848),n=s(28453),r=s(96540);const c={id:"activity",title:"Activity"},d=void 0,o={},l=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),y=e=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{className:e.class,children:e.text})}),g=({dataOpen:e,dataClose:t,children:s,startOpen:a=!1})=>{const[n,c]=(0,r.useState)(a);return(0,i.jsxs)("details",{...n?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:n?e:t}),n&&s]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>Activity.<b>description</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"activitydescriptionstring--",level:4},{value:'<code>Activity.<b>ref</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"activityrefstring--",level:4},{value:'<code>Activity.<b>title</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"activitytitlestring--",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"No description"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:"type Activity {\n  description: String!\n  ref: String!\n  title: String!\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(t.h4,{id:"activitydescriptionstring--",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["Activity.",(0,i.jsx)("b",{children:"description"})]})}),(0,i.jsx)(l,{}),(0,i.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,i.jsx)(t.code,{children:"String!"})})," ",(0,i.jsx)(y,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(y,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(t.p,{children:"Description of the activity"}),"\n",(0,i.jsxs)(t.h4,{id:"activityrefstring--",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["Activity.",(0,i.jsx)("b",{children:"ref"})]})}),(0,i.jsx)(l,{}),(0,i.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,i.jsx)(t.code,{children:"String!"})})," ",(0,i.jsx)(y,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(y,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(t.p,{children:"ref to see where it belongs in the itinerary map (if necessary/specified)"}),"\n",(0,i.jsxs)(t.h4,{id:"activitytitlestring--",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["Activity.",(0,i.jsx)("b",{children:"title"})]})}),(0,i.jsx)(l,{}),(0,i.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,i.jsx)(t.code,{children:"String!"})})," ",(0,i.jsx)(y,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(y,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(t.p,{children:"Title of the activity"}),"\n",(0,i.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/api/types/objects/booking-payload",children:(0,i.jsx)(t.code,{children:"BookingPayload"})})," ",(0,i.jsx)(y,{class:"badge badge--secondary",text:"object"}),(0,i.jsx)(l,{}),(0,i.jsx)(t.a,{href:"/api/types/objects/book-payload",children:(0,i.jsx)(t.code,{children:"BookPayload"})})," ",(0,i.jsx)(y,{class:"badge badge--secondary",text:"object"}),(0,i.jsx)(l,{}),(0,i.jsx)(t.a,{href:"/api/types/objects/quote-payload",children:(0,i.jsx)(t.code,{children:"QuotePayload"})})," ",(0,i.jsx)(y,{class:"badge badge--secondary",text:"object"}),(0,i.jsx)(l,{}),(0,i.jsx)(t.a,{href:"/api/types/objects/search-option",children:(0,i.jsx)(t.code,{children:"SearchOption"})})," ",(0,i.jsx)(y,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},21020:(e,t,s)=>{var a=s(96540),i=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,c=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,s){var a,n={},o=null,l=null;for(a in void 0!==s&&(o=""+s),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(l=t.ref),t)r.call(t,a)&&!d.hasOwnProperty(a)&&(n[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===n[a]&&(n[a]=t[a]);return{$$typeof:i,type:e,key:o,ref:l,props:n,_owner:c.current}}t.Fragment=n,t.jsx=o,t.jsxs=o},74848:(e,t,s)=>{e.exports=s(21020)},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>c});var a=s(96540);const i={},n=a.createContext(i);function r(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);
/*! For license information please see 918b0359.2af12842.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[37546],{99832:(e,o,n)=>{n.r(o),n.d(o,{Badge:()=>u,Bullet:()=>l,Details:()=>x,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"types/inputs/book-room-input","title":"BookRoomInput","description":"Input BookRoom contains list of pax and the room\'s reference.","source":"@site/api/types/inputs/book-room-input.mdx","sourceDirName":"types/inputs","slug":"/types/inputs/book-room-input","permalink":"/api/types/inputs/book-room-input","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"book-room-input","title":"BookRoomInput"},"sidebar":"schemaSidebar","previous":{"title":"BookReferenceInput","permalink":"/api/types/inputs/book-reference-input"},"next":{"title":"BookWhereInput","permalink":"/api/types/inputs/book-where-input"}}');var s=n(74848),r=n(28453),a=n(96540);const i={id:"book-room-input",title:"BookRoomInput"},c=void 0,d={},l=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),u=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{className:e.class,children:e.text})}),x=({dataOpen:e,dataClose:o,children:n,startOpen:t=!1})=>{const[r,i]=(0,a.useState)(t);return(0,s.jsxs)("details",{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:r?e:o}),r&&n]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>BookRoomInput.<b>occupancyRefId</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"bookroominputoccupancyrefidint--",level:4},{value:'<code>BookRoomInput.<b>paxes</b></code><Bullet></Bullet><code>[BookPaxInput!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"bookroominputpaxesbookpaxinput--",level:4},{value:"Member Of",id:"member-of",level:3}];function f(e){const o={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.p,{children:"Input BookRoom contains list of pax and the room's reference."}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-graphql",children:"input BookRoomInput {\n  occupancyRefId: Int!\n  paxes: [BookPaxInput!]!\n}\n"})}),"\n",(0,s.jsx)(o.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(o.h4,{id:"bookroominputoccupancyrefidint--",children:[(0,s.jsx)(o.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["BookRoomInput.",(0,s.jsx)("b",{children:"occupancyRefId"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(o.a,{href:"/api/types/scalars/int",children:(0,s.jsx)(o.code,{children:"Int!"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(o.p,{children:"The room s reference in the booking"}),"\n",(0,s.jsxs)(o.h4,{id:"bookroominputpaxesbookpaxinput--",children:[(0,s.jsx)(o.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["BookRoomInput.",(0,s.jsx)("b",{children:"paxes"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(o.a,{href:"/api/types/inputs/book-pax-input",children:(0,s.jsx)(o.code,{children:"[BookPaxInput!]!"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,s.jsx)(o.p,{children:"The list or lists of paxes of the room"}),"\n",(0,s.jsx)(o.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.a,{href:"/api/types/inputs/hotel-book-input",children:(0,s.jsx)(o.code,{children:"HotelBookInput"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,s.jsx)(l,{}),(0,s.jsx)(o.a,{href:"/api/types/inputs/hotel-criteria-amend-paxes-quote-input",children:(0,s.jsx)(o.code,{children:"HotelCriteriaAmendPaxesQuoteInput"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function m(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},21020:(e,o,n)=>{var t=n(96540),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,o,n){var t,r={},d=null,l=null;for(t in void 0!==n&&(d=""+n),void 0!==o.key&&(d=""+o.key),void 0!==o.ref&&(l=o.ref),o)a.call(o,t)&&!c.hasOwnProperty(t)&&(r[t]=o[t]);if(e&&e.defaultProps)for(t in o=e.defaultProps)void 0===r[t]&&(r[t]=o[t]);return{$$typeof:s,type:e,key:d,ref:l,props:r,_owner:i.current}}o.Fragment=r,o.jsx=d,o.jsxs=d},74848:(e,o,n)=>{e.exports=n(21020)},28453:(e,o,n)=>{n.d(o,{R:()=>a,x:()=>i});var t=n(96540);const s={},r=t.createContext(s);function a(e){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);
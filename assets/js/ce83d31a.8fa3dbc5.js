/*! For license information please see ce83d31a.8fa3dbc5.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[27865],{37372:(e,n,o)=>{o.r(n),o.d(n,{Badge:()=>u,Bullet:()=>d,Details:()=>m,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>f});const s=JSON.parse('{"id":"types/inputs/room-book","title":"RoomBook","description":"No description","source":"@site/api/types/inputs/room-book.mdx","sourceDirName":"types/inputs","slug":"/types/inputs/room-book","permalink":"/api/types/inputs/room-book","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"room-book","title":"RoomBook"},"sidebar":"schemaSidebar","previous":{"title":"RestrictionsLoadInput","permalink":"/api/types/inputs/restrictions-load-input"},"next":{"title":"RoomInput","permalink":"/api/types/inputs/room-input"}}');var t=o(74848),r=o(28453),a=o(96540);const i={id:"room-book",title:"RoomBook"},c=void 0,l={},d=()=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),u=e=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{className:e.class,children:e.text})}),m=({dataOpen:e,dataClose:n,children:o,startOpen:s=!1})=>{const[r,i]=(0,a.useState)(s);return(0,t.jsxs)("details",{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:r?e:n}),r&&o]})},f=[{value:"Fields",id:"fields",level:3},{value:'<code>RoomBook.<b>passengers</b></code><Bullet></Bullet><code>[PackagePassengerInput!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"roombookpassengerspackagepassengerinput--",level:4},{value:"Member Of",id:"member-of",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"No description"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"input RoomBook {\n  passengers: [PackagePassengerInput!]!\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(n.h4,{id:"roombookpassengerspackagepassengerinput--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["RoomBook.",(0,t.jsx)("b",{children:"passengers"})]})}),(0,t.jsx)(d,{}),(0,t.jsx)(n.a,{href:"/api/types/inputs/package-passenger-input",children:(0,t.jsx)(n.code,{children:"[PackagePassengerInput!]!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,t.jsx)(n.p,{children:"Information of each passenger for the room"}),"\n",(0,t.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/api/types/inputs/book-where-input",children:(0,t.jsx)(n.code,{children:"BookWhereInput"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function g(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},21020:(e,n,o)=>{var s=o(96540),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,o){var s,r={},l=null,d=null;for(s in void 0!==o&&(l=""+o),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)a.call(n,s)&&!c.hasOwnProperty(s)&&(r[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===r[s]&&(r[s]=n[s]);return{$$typeof:t,type:e,key:l,ref:d,props:r,_owner:i.current}}n.Fragment=r,n.jsx=l,n.jsxs=l},74848:(e,n,o)=>{e.exports=o(21020)},28453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>i});var s=o(96540);const t={},r=s.createContext(t);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);
/*! For license information please see e16085c1.17f70bc6.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[54950],{58102:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>u,Bullet:()=>l,Details:()=>m,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var o=t(74848),r=t(28453),s=t(96540);const a={id:"recon-room-data-input",title:"ReconRoomDataInput"},i=void 0,c={id:"types/inputs/recon-room-data-input",title:"ReconRoomDataInput",description:"No description",source:"@site/api/types/inputs/recon-room-data-input.mdx",sourceDirName:"types/inputs",slug:"/types/inputs/recon-room-data-input",permalink:"/api/types/inputs/recon-room-data-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"recon-room-data-input",title:"ReconRoomDataInput"},sidebar:"schemaSidebar",previous:{title:"ReconReservationUpdateInput",permalink:"/api/types/inputs/recon-reservation-update-input"},next:{title:"ReconRoomInput",permalink:"/api/types/inputs/recon-room-input"}},d={},l=()=>{const e={span:"span",...(0,r.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const n={a:"a",...(0,r.R)()};return(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,r.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(n.span,{className:e.class,children:e.text})})},m=({dataOpen:e,dataClose:n,children:t,startOpen:a=!1})=>{const i={details:"details",summary:"summary",...(0,r.R)()},[c,d]=(0,s.useState)(a);return(0,o.jsxs)(i.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)(i.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:c?e:n}),c&&t]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>ReconRoomDataInput.<b>codeSeller</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"reconroomdatainputcodesellerstring--",level:4},{value:'<code>ReconRoomDataInput.<b>description</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"reconroomdatainputdescriptionstring-",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"No description"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:"input ReconRoomDataInput {\n  codeSeller: String!\n  description: String\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(n.h4,{id:"reconroomdatainputcodesellerstring--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["ReconRoomDataInput.",(0,o.jsx)("b",{children:"codeSeller"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/api/types/scalars/string",children:(0,o.jsx)(n.code,{children:"String!"})})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsx)(n.blockquote,{children:"\n"}),"\n",(0,o.jsxs)(n.h4,{id:"reconroomdatainputdescriptionstring-",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["ReconRoomDataInput.",(0,o.jsx)("b",{children:"description"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/api/types/scalars/string",children:(0,o.jsx)(n.code,{children:"String"})})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsx)(n.blockquote,{children:"\n"}),"\n",(0,o.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/api/types/inputs/recon-room-input",children:(0,o.jsx)(n.code,{children:"ReconRoomInput"})})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function f(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(x,{...e})}):x(e)}},21020:(e,n,t)=>{var o=t(96540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var o,s={},d=null,l=null;for(o in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)a.call(n,o)&&!c.hasOwnProperty(o)&&(s[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===s[o]&&(s[o]=n[o]);return{$$typeof:r,type:e,key:d,ref:l,props:s,_owner:i.current}}n.Fragment=s,n.jsx=d,n.jsxs=d},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var o=t(96540);const r={},s=o.createContext(r);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);
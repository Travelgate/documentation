/*! For license information please see b7be60d5.e289eba8.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[17254],{76072:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>l,Details:()=>m,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"types/objects/requester-info","title":"RequesterInfo","description":"No description","source":"@site/api/types/objects/requester-info.mdx","sourceDirName":"types/objects","slug":"/types/objects/requester-info","permalink":"/api/types/objects/requester-info","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"requester-info","title":"RequesterInfo"},"sidebar":"schemaSidebar","previous":{"title":"Remark","permalink":"/api/types/objects/remark"},"next":{"title":"RequiredRoomWithSamePaxConfiguration","permalink":"/api/types/objects/required-room-with-same-pax-configuration"}}');var a=n(74848),s=n(28453),o=n(96540);const i={id:"requester-info",title:"RequesterInfo"},d=void 0,c={},l=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),u=e=>(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),f=e=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{className:e.class,children:e.text})}),m=({dataOpen:e,dataClose:t,children:n,startOpen:r=!1})=>{const[s,i]=(0,o.useState)(r);return(0,a.jsxs)("details",{...s?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:s?e:t}),s&&n]})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>RequesterInfo.<b>organization</b></code><Bullet></Bullet><code>OrganizationData!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"requesterinfoorganizationorganizationdata--",level:4},{value:'<code>RequesterInfo.<b>member</b></code><Bullet></Bullet><code>MemberData!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"requesterinfomembermemberdata--",level:4},{value:"Member Of",id:"member-of",level:3}];function b(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"No description"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"type RequesterInfo {\n  organization: OrganizationData!\n  member: MemberData!\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"requesterinfoorganizationorganizationdata--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["RequesterInfo.",(0,a.jsx)("b",{children:"organization"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/api/types/objects/organization-data",children:(0,a.jsx)(t.code,{children:"OrganizationData!"})})," ",(0,a.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(f,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(t.h4,{id:"requesterinfomembermemberdata--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["RequesterInfo.",(0,a.jsx)("b",{children:"member"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/api/types/objects/member-data",children:(0,a.jsx)(t.code,{children:"MemberData!"})})," ",(0,a.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(f,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/api/types/objects/activation-data",children:(0,a.jsx)(t.code,{children:"ActivationData"})})," ",(0,a.jsx)(f,{class:"badge badge--secondary",text:"object"})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}},21020:(e,t,n)=>{var r=n(96540),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,s={},c=null,l=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)o.call(t,r)&&!d.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:a,type:e,key:c,ref:l,props:s,_owner:i.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(96540);const a={},s=r.createContext(a);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);
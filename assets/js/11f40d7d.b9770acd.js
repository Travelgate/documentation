/*! For license information please see 11f40d7d.b9770acd.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[35686],{31788:(e,s,n)=>{n.r(s),n.d(s,{Badge:()=>m,Bullet:()=>c,Details:()=>g,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var a=n(74848),r=n(28453),t=n(96540);const o={id:"impersonation-response",title:"ImpersonationResponse"},i=void 0,d={id:"types/objects/impersonation-response",title:"ImpersonationResponse",description:"No description",source:"@site/api/types/objects/impersonation-response.mdx",sourceDirName:"types/objects",slug:"/types/objects/impersonation-response",permalink:"/api/types/objects/impersonation-response",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"impersonation-response",title:"ImpersonationResponse"},sidebar:"schemaSidebar",previous:{title:"HubUser",permalink:"/api/types/objects/hub-user"},next:{title:"InsightsCountry",permalink:"/api/types/objects/insights-country"}},l={},c=()=>{const e={span:"span",...(0,r.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const s={a:"a",...(0,r.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const s={span:"span",...(0,r.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:s,children:n,startOpen:o=!1})=>{const i={details:"details",summary:"summary",...(0,r.R)()},[d,l]=(0,t.useState)(o);return(0,a.jsxs)(i.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(i.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:d?e:s}),d&&n]})},u=[{value:"Fields",id:"fields",level:3},{value:'<code>ImpersonationResponse.<b>bearer</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"impersonationresponsebearerstring-",level:4},{value:'<code>ImpersonationResponse.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"impersonationresponseadvisemessageadvisemessage--",level:4},{value:'<code>ImpersonationResponse.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"impersonationresponseadvisemessageleveladvisemessagelevel--",level:5},{value:"Member Of",id:"member-of",level:3}];function h(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"No description"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-graphql",children:"type ImpersonationResponse {\n  bearer: String\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n}\n"})}),"\n",(0,a.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(s.h4,{id:"impersonationresponsebearerstring-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ImpersonationResponse.",(0,a.jsx)("b",{children:"bearer"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(s.a,{href:"/api/types/scalars/string",children:(0,a.jsx)(s.code,{children:"String"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(s.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(s.h4,{id:"impersonationresponseadvisemessageadvisemessage--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ImpersonationResponse.",(0,a.jsx)("b",{children:"adviseMessage"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/advise-message",children:(0,a.jsx)(s.code,{children:"[AdviseMessage!]"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsxs)(s.h5,{id:"impersonationresponseadvisemessageleveladvisemessagelevel--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ImpersonationResponse.adviseMessage.",(0,a.jsx)("b",{children:"level"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(s.a,{href:"/api/types/enums/advise-message-level",children:(0,a.jsx)(s.code,{children:"[AdviseMessageLevel]"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,a.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/api/types/objects/admin-query",children:(0,a.jsx)(s.code,{children:"AdminQuery"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"object"})]})]})}function b(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},21020:(e,s,n)=>{var a=n(96540),r=Symbol.for("react.element"),t=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,s,n){var a,t={},l=null,c=null;for(a in void 0!==n&&(l=""+n),void 0!==s.key&&(l=""+s.key),void 0!==s.ref&&(c=s.ref),s)o.call(s,a)&&!d.hasOwnProperty(a)&&(t[a]=s[a]);if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===t[a]&&(t[a]=s[a]);return{$$typeof:r,type:e,key:l,ref:c,props:t,_owner:i.current}}s.Fragment=t,s.jsx=l,s.jsxs=l},74848:(e,s,n)=>{e.exports=n(21020)},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>i});var a=n(96540);const r={},t=a.createContext(r);function o(e){const s=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(t.Provider,{value:s},e.children)}}}]);
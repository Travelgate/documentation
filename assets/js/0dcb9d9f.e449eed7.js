/*! For license information please see 0dcb9d9f.e449eed7.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[88846],{42979:(e,s,a)=>{a.r(s),a.d(s,{Badge:()=>p,Bullet:()=>o,Details:()=>h,SpecifiedBy:()=>g,assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>y});var n=a(74848),t=a(28453),d=a(96540);const l={id:"client-legacy-password",title:"ClientLegacyPassword"},r=void 0,c={id:"types/objects/client-legacy-password",title:"ClientLegacyPassword",description:"No description",source:"@site/api/types/objects/client-legacy-password.mdx",sourceDirName:"types/objects",slug:"/types/objects/client-legacy-password",permalink:"/api/types/objects/client-legacy-password",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"client-legacy-password",title:"ClientLegacyPassword"},sidebar:"schemaSidebar",previous:{title:"ClientEdge",permalink:"/api/types/objects/client-edge"},next:{title:"Client",permalink:"/api/types/objects/client"}},i={},o=()=>{const e={span:"span",...(0,t.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const s={a:"a",...(0,t.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const s={span:"span",...(0,t.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(s.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:s,children:a,startOpen:l=!1})=>{const r={details:"details",summary:"summary",...(0,t.R)()},[c,i]=(0,d.useState)(l);return(0,n.jsxs)(r.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(r.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:c?e:s}),c&&a]})},y=[{value:"Fields",id:"fields",level:3},{value:'<code>ClientLegacyPassword.<b>code</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"clientlegacypasswordcodestring-",level:4},{value:'<code>ClientLegacyPassword.<b>password</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"clientlegacypasswordpasswordstring-",level:4},{value:'<code>ClientLegacyPassword.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"clientlegacypasswordadvisemessageadvisemessage--",level:4},{value:'<code>ClientLegacyPassword.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"clientlegacypasswordadvisemessageleveladvisemessagelevel--",level:5},{value:"Member Of",id:"member-of",level:3}];function x(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"No description"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-graphql",children:"type ClientLegacyPassword {\n  code: String\n  password: String\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n}\n"})}),"\n",(0,n.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(s.h4,{id:"clientlegacypasswordcodestring-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ClientLegacyPassword.",(0,n.jsx)("b",{children:"code"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(s.a,{href:"/api/types/scalars/string",children:(0,n.jsx)(s.code,{children:"String"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(s.h4,{id:"clientlegacypasswordpasswordstring-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ClientLegacyPassword.",(0,n.jsx)("b",{children:"password"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(s.a,{href:"/api/types/scalars/string",children:(0,n.jsx)(s.code,{children:"String"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(s.h4,{id:"clientlegacypasswordadvisemessageadvisemessage--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ClientLegacyPassword.",(0,n.jsx)("b",{children:"adviseMessage"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(s.a,{href:"/api/types/objects/advise-message",children:(0,n.jsx)(s.code,{children:"[AdviseMessage!]"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.h5,{id:"clientlegacypasswordadvisemessageleveladvisemessagelevel--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ClientLegacyPassword.adviseMessage.",(0,n.jsx)("b",{children:"level"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(s.a,{href:"/api/types/enums/advise-message-level",children:(0,n.jsx)(s.code,{children:"[AdviseMessageLevel]"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/api/types/objects/admin-query",children:(0,n.jsx)(s.code,{children:"AdminQuery"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function u(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},21020:(e,s,a)=>{var n=a(96540),t=Symbol.for("react.element"),d=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,r=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,s,a){var n,d={},i=null,o=null;for(n in void 0!==a&&(i=""+a),void 0!==s.key&&(i=""+s.key),void 0!==s.ref&&(o=s.ref),s)l.call(s,n)&&!c.hasOwnProperty(n)&&(d[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===d[n]&&(d[n]=s[n]);return{$$typeof:t,type:e,key:i,ref:o,props:d,_owner:r.current}}s.Fragment=d,s.jsx=i,s.jsxs=i},74848:(e,s,a)=>{e.exports=a(21020)},28453:(e,s,a)=>{a.d(s,{R:()=>l,x:()=>r});var n=a(96540);const t={},d=n.createContext(t);function l(e){const s=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(d.Provider,{value:s},e.children)}}}]);
/*! For license information please see 05ca1a2a.4a57dadb.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[87431],{88664:(e,n,a)=>{a.r(n),a.d(n,{Badge:()=>p,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>g,assets:()=>i,contentTitle:()=>c,default:()=>j,frontMatter:()=>d,metadata:()=>s,toc:()=>b});const s=JSON.parse('{"id":"types/objects/partner-connection","title":"PartnerConnection","description":"No description","source":"@site/api/types/objects/partner-connection.mdx","sourceDirName":"types/objects","slug":"/types/objects/partner-connection","permalink":"/api/types/objects/partner-connection","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"partner-connection","title":"PartnerConnection"},"sidebar":"schemaSidebar","previous":{"title":"Parameter","permalink":"/api/types/objects/parameter"},"next":{"title":"PartnerData","permalink":"/api/types/objects/partner-data"}}');var t=a(74848),r=a(28453),o=a(96540);const d={id:"partner-connection",title:"PartnerConnection"},c=void 0,i={},l=()=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),g=e=>(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),p=e=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{className:e.class,children:e.text})}),h=({dataOpen:e,dataClose:n,children:a,startOpen:s=!1})=>{const[r,d]=(0,o.useState)(s);return(0,t.jsxs)("details",{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:r?e:n}),r&&a]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>PartnerConnection.<b>edges</b></code><Bullet></Bullet><code>[PartnerEdge]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"partnerconnectionedgespartneredge--",level:4},{value:'<code>PartnerConnection.<b>pageInfo</b></code><Bullet></Bullet><code>PageInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"partnerconnectionpageinfopageinfo--",level:4},{value:'<code>PartnerConnection.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"partnerconnectionadvisemessageadvisemessage--",level:4},{value:'<code>PartnerConnection.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"partnerconnectionadvisemessageleveladvisemessagelevel--",level:5},{value:'<code>PartnerConnection.<b>totalCount</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"partnerconnectiontotalcountint--",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"No description"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"type PartnerConnection {\n  edges: [PartnerEdge]\n  pageInfo: PageInfo!\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  totalCount: Int!\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(n.h4,{id:"partnerconnectionedgespartneredge--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["PartnerConnection.",(0,t.jsx)("b",{children:"edges"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/api/types/objects/partner-edge",children:(0,t.jsx)(n.code,{children:"[PartnerEdge]"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(n.h4,{id:"partnerconnectionpageinfopageinfo--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["PartnerConnection.",(0,t.jsx)("b",{children:"pageInfo"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/api/types/objects/page-info",children:(0,t.jsx)(n.code,{children:"PageInfo!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(n.h4,{id:"partnerconnectionadvisemessageadvisemessage--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["PartnerConnection.",(0,t.jsx)("b",{children:"adviseMessage"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/api/types/objects/advise-message",children:(0,t.jsx)(n.code,{children:"[AdviseMessage!]"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(n.p,{children:"List of advise messages."}),"\n",(0,t.jsxs)(n.h5,{id:"partnerconnectionadvisemessageleveladvisemessagelevel--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["PartnerConnection.adviseMessage.",(0,t.jsx)("b",{children:"level"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/api/types/enums/advise-message-level",children:(0,t.jsx)(n.code,{children:"[AdviseMessageLevel]"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,t.jsxs)(n.h4,{id:"partnerconnectiontotalcountint--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["PartnerConnection.",(0,t.jsx)("b",{children:"totalCount"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/api/types/scalars/int",children:(0,t.jsx)(n.code,{children:"Int!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(n.p,{children:"Identifies the total count of items in the connection."}),"\n",(0,t.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/api/types/objects/organization-data",children:(0,t.jsx)(n.code,{children:"OrganizationData"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},21020:(e,n,a)=>{var s=a(96540),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,a){var s,r={},i=null,l=null;for(s in void 0!==a&&(i=""+a),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(l=n.ref),n)o.call(n,s)&&!c.hasOwnProperty(s)&&(r[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===r[s]&&(r[s]=n[s]);return{$$typeof:t,type:e,key:i,ref:l,props:r,_owner:d.current}}n.Fragment=r,n.jsx=i,n.jsxs=i},74848:(e,n,a)=>{e.exports=a(21020)},28453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>d});var s=a(96540);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);
/*! For license information please see bcba9493.7d852856.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[86566],{63689:(e,n,o)=>{o.r(n),o.d(n,{Badge:()=>h,Bullet:()=>r,Details:()=>x,SpecifiedBy:()=>g,assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>b});const s=JSON.parse('{"id":"types/objects/connection-connection","title":"ConnectionConnection","description":"Connection (list) of Connections","source":"@site/api/types/objects/connection-connection.mdx","sourceDirName":"types/objects","slug":"/types/objects/connection-connection","permalink":"/api/types/objects/connection-connection","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"connection-connection","title":"ConnectionConnection"},"sidebar":"schemaSidebar","previous":{"title":"CompanyCrmData","permalink":"/api/types/objects/company-crm-data"},"next":{"title":"ConnectionData","permalink":"/api/types/objects/connection-data"}}');var c=o(74848),t=o(28453),a=o(96540);const i={id:"connection-connection",title:"ConnectionConnection"},d=void 0,l={},r=()=>(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),g=e=>(0,c.jsxs)(c.Fragment,{children:["Specification",(0,c.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),h=e=>(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("span",{className:e.class,children:e.text})}),x=({dataOpen:e,dataClose:n,children:o,startOpen:s=!1})=>{const[t,i]=(0,a.useState)(s);return(0,c.jsxs)("details",{...t?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,c.jsx)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:t?e:n}),t&&o]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>ConnectionConnection.<b>edges</b></code><Bullet></Bullet><code>[ConnectionEdge]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"connectionconnectionedgesconnectionedge--",level:4},{value:'<code>ConnectionConnection.<b>pageInfo</b></code><Bullet></Bullet><code>PageInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"connectionconnectionpageinfopageinfo--",level:4},{value:'<code>ConnectionConnection.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"connectionconnectionadvisemessageadvisemessage--",level:4},{value:'<code>ConnectionConnection.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"connectionconnectionadvisemessageleveladvisemessagelevel--",level:5},{value:'<code>ConnectionConnection.<b>totalCount</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"connectionconnectiontotalcountint--",level:4},{value:"Member Of",id:"member-of",level:3}];function j(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:"Connection (list) of Connections"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-graphql",children:"type ConnectionConnection {\n  edges: [ConnectionEdge]\n  pageInfo: PageInfo!\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  totalCount: Int!\n}\n"})}),"\n",(0,c.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,c.jsxs)(n.h4,{id:"connectionconnectionedgesconnectionedge--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["ConnectionConnection.",(0,c.jsx)("b",{children:"edges"})]})}),(0,c.jsx)(r,{}),(0,c.jsx)(n.a,{href:"/api/types/objects/connection-edge",children:(0,c.jsx)(n.code,{children:"[ConnectionEdge]"})})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,c.jsx)(n.p,{children:"Connection edges of Connection connection"}),"\n",(0,c.jsxs)(n.h4,{id:"connectionconnectionpageinfopageinfo--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["ConnectionConnection.",(0,c.jsx)("b",{children:"pageInfo"})]})}),(0,c.jsx)(r,{}),(0,c.jsx)(n.a,{href:"/api/types/objects/page-info",children:(0,c.jsx)(n.code,{children:"PageInfo!"})})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,c.jsx)(n.p,{children:"Page info of the connection"}),"\n",(0,c.jsxs)(n.h4,{id:"connectionconnectionadvisemessageadvisemessage--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["ConnectionConnection.",(0,c.jsx)("b",{children:"adviseMessage"})]})}),(0,c.jsx)(r,{}),(0,c.jsx)(n.a,{href:"/api/types/objects/advise-message",children:(0,c.jsx)(n.code,{children:"[AdviseMessage!]"})})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,c.jsx)(n.p,{children:"List of advise messages."}),"\n",(0,c.jsxs)(n.h5,{id:"connectionconnectionadvisemessageleveladvisemessagelevel--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["ConnectionConnection.adviseMessage.",(0,c.jsx)("b",{children:"level"})]})}),(0,c.jsx)(r,{}),(0,c.jsx)(n.a,{href:"/api/types/enums/advise-message-level",children:(0,c.jsx)(n.code,{children:"[AdviseMessageLevel]"})})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,c.jsxs)(n.h4,{id:"connectionconnectiontotalcountint--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["ConnectionConnection.",(0,c.jsx)("b",{children:"totalCount"})]})}),(0,c.jsx)(r,{}),(0,c.jsx)(n.a,{href:"/api/types/scalars/int",children:(0,c.jsx)(n.code,{children:"Int!"})})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsx)(n.p,{children:"Identifies the total count of items in the connection."}),"\n",(0,c.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/api/types/objects/admin-query",children:(0,c.jsx)(n.code,{children:"AdminQuery"})})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(j,{...e})}):j(e)}},21020:(e,n,o)=>{var s=o(96540),c=Symbol.for("react.element"),t=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,o){var s,t={},l=null,r=null;for(s in void 0!==o&&(l=""+o),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(r=n.ref),n)a.call(n,s)&&!d.hasOwnProperty(s)&&(t[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===t[s]&&(t[s]=n[s]);return{$$typeof:c,type:e,key:l,ref:r,props:t,_owner:i.current}}n.Fragment=t,n.jsx=l,n.jsxs=l},74848:(e,n,o)=>{e.exports=o(21020)},28453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>i});var s=o(96540);const c={},t=s.createContext(c);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);
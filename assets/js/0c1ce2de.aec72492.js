/*! For license information please see 0c1ce2de.aec72492.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[37408],{57967:(e,n,i)=>{i.r(n),i.d(n,{Badge:()=>p,Bullet:()=>l,Details:()=>g,SpecifiedBy:()=>f,assets:()=>r,contentTitle:()=>d,default:()=>x,frontMatter:()=>s,metadata:()=>t,toc:()=>m});const t=JSON.parse('{"id":"types/objects/traffic-optimization-connection-connection","title":"TrafficOptimizationConnectionConnection","description":"No description","source":"@site/api/types/objects/traffic-optimization-connection-connection.mdx","sourceDirName":"types/objects","slug":"/types/objects/traffic-optimization-connection-connection","permalink":"/api/types/objects/traffic-optimization-connection-connection","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"traffic-optimization-connection-connection","title":"TrafficOptimizationConnectionConnection"},"sidebar":"schemaSidebar","previous":{"title":"TrafficOptimizationConnectionConfiguration","permalink":"/api/types/objects/traffic-optimization-connection-configuration"},"next":{"title":"TrafficOptimizationConnectionData","permalink":"/api/types/objects/traffic-optimization-connection-data"}}');var o=i(74848),a=i(28453),c=i(96540);const s={id:"traffic-optimization-connection-connection",title:"TrafficOptimizationConnectionConnection"},d=void 0,r={},l=()=>(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),f=e=>(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),p=e=>(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("span",{className:e.class,children:e.text})}),g=({dataOpen:e,dataClose:n,children:i,startOpen:t=!1})=>{const[a,s]=(0,c.useState)(t);return(0,o.jsxs)("details",{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"},children:a?e:n}),a&&i]})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>TrafficOptimizationConnectionConnection.<b>edges</b></code><Bullet></Bullet><code>[TrafficOptimizationConnectionEdge]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trafficoptimizationconnectionconnectionedgestrafficoptimizationconnectionedge--",level:4},{value:'<code>TrafficOptimizationConnectionConnection.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trafficoptimizationconnectionconnectionadvisemessageadvisemessage--",level:4},{value:'<code>TrafficOptimizationConnectionConnection.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trafficoptimizationconnectionconnectionadvisemessageleveladvisemessagelevel--",level:5},{value:'<code>TrafficOptimizationConnectionConnection.<b>totalCount</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trafficoptimizationconnectionconnectiontotalcountint--",level:4},{value:"Member Of",id:"member-of",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"No description"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:"type TrafficOptimizationConnectionConnection {\n  edges: [TrafficOptimizationConnectionEdge]\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  totalCount: Int!\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(n.h4,{id:"trafficoptimizationconnectionconnectionedgestrafficoptimizationconnectionedge--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["TrafficOptimizationConnectionConnection.",(0,o.jsx)("b",{children:"edges"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/api/types/objects/traffic-optimization-connection-edge",children:(0,o.jsx)(n.code,{children:"[TrafficOptimizationConnectionEdge]"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsxs)(n.h4,{id:"trafficoptimizationconnectionconnectionadvisemessageadvisemessage--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["TrafficOptimizationConnectionConnection.",(0,o.jsx)("b",{children:"adviseMessage"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/api/types/objects/advise-message",children:(0,o.jsx)(n.code,{children:"[AdviseMessage!]"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsx)(n.p,{children:"List of advise messages."}),"\n",(0,o.jsxs)(n.h5,{id:"trafficoptimizationconnectionconnectionadvisemessageleveladvisemessagelevel--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["TrafficOptimizationConnectionConnection.adviseMessage.",(0,o.jsx)("b",{children:"level"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/api/types/enums/advise-message-level",children:(0,o.jsx)(n.code,{children:"[AdviseMessageLevel]"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,o.jsxs)(n.h4,{id:"trafficoptimizationconnectionconnectiontotalcountint--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["TrafficOptimizationConnectionConnection.",(0,o.jsx)("b",{children:"totalCount"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/api/types/scalars/int",children:(0,o.jsx)(n.code,{children:"Int!"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsx)(n.p,{children:"Identifies the total count of items in the connection."}),"\n",(0,o.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/api/types/objects/traffic-optimization-query",children:(0,o.jsx)(n.code,{children:"TrafficOptimizationQuery"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},21020:(e,n,i)=>{var t=i(96540),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function r(e,n,i){var t,a={},r=null,l=null;for(t in void 0!==i&&(r=""+i),void 0!==n.key&&(r=""+n.key),void 0!==n.ref&&(l=n.ref),n)c.call(n,t)&&!d.hasOwnProperty(t)&&(a[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===a[t]&&(a[t]=n[t]);return{$$typeof:o,type:e,key:r,ref:l,props:a,_owner:s.current}}n.Fragment=a,n.jsx=r,n.jsxs=r},74848:(e,n,i)=>{e.exports=i(21020)},28453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>s});var t=i(96540);const o={},a=t.createContext(o);function c(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);
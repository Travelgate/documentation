/*! For license information please see eadde32c.65d6ad0c.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[73184],{49225:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>f,Bullet:()=>g,Details:()=>p,SpecifiedBy:()=>l,assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var i=a(74848),n=a(28453),s=a(96540);const o={id:"traffic-optimization-stats-aggregation-connection",title:"TrafficOptimizationStatsAggregationConnection"},r=void 0,c={id:"types/objects/traffic-optimization-stats-aggregation-connection",title:"TrafficOptimizationStatsAggregationConnection",description:"No description",source:"@site/api/types/objects/traffic-optimization-stats-aggregation-connection.mdx",sourceDirName:"types/objects",slug:"/types/objects/traffic-optimization-stats-aggregation-connection",permalink:"/api/types/objects/traffic-optimization-stats-aggregation-connection",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"traffic-optimization-stats-aggregation-connection",title:"TrafficOptimizationStatsAggregationConnection"},sidebar:"schemaSidebar",previous:{title:"TrafficOptimizationStatsAccessHotelBlacklist",permalink:"/api/types/objects/traffic-optimization-stats-access-hotel-blacklist"},next:{title:"TrafficOptimizationStatsAggregationData",permalink:"/api/types/objects/traffic-optimization-stats-aggregation-data"}},d={},g=()=>{const e={span:"span",...(0,n.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},l=e=>{const t={a:"a",...(0,n.R)()};return(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},f=e=>{const t={span:"span",...(0,n.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(t.span,{className:e.class,children:e.text})})},p=({dataOpen:e,dataClose:t,children:a,startOpen:o=!1})=>{const r={details:"details",summary:"summary",...(0,n.R)()},[c,d]=(0,s.useState)(o);return(0,i.jsxs)(r.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)(r.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:c?e:t}),c&&a]})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>TrafficOptimizationStatsAggregationConnection.<b>totalCount</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trafficoptimizationstatsaggregationconnectiontotalcountint--",level:4},{value:'<code>TrafficOptimizationStatsAggregationConnection.<b>edges</b></code><Bullet></Bullet><code>[TrafficOptimizationStatsAggregationEdge!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trafficoptimizationstatsaggregationconnectionedgestrafficoptimizationstatsaggregationedge--",level:4},{value:'<code>TrafficOptimizationStatsAggregationConnection.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trafficoptimizationstatsaggregationconnectionadvisemessageadvisemessage--",level:4},{value:"Member Of",id:"member-of",level:3}];function b(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"No description"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:"type TrafficOptimizationStatsAggregationConnection {\n  totalCount: Int!\n  edges: [TrafficOptimizationStatsAggregationEdge!]\n  adviseMessage: [AdviseMessage!]\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(t.h4,{id:"trafficoptimizationstatsaggregationconnectiontotalcountint--",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["TrafficOptimizationStatsAggregationConnection.",(0,i.jsx)("b",{children:"totalCount"})]})}),(0,i.jsx)(g,{}),(0,i.jsx)(t.a,{href:"/api/types/scalars/int",children:(0,i.jsx)(t.code,{children:"Int!"})})," ",(0,i.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsxs)(t.h4,{id:"trafficoptimizationstatsaggregationconnectionedgestrafficoptimizationstatsaggregationedge--",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["TrafficOptimizationStatsAggregationConnection.",(0,i.jsx)("b",{children:"edges"})]})}),(0,i.jsx)(g,{}),(0,i.jsx)(t.a,{href:"/api/types/objects/traffic-optimization-stats-aggregation-edge",children:(0,i.jsx)(t.code,{children:"[TrafficOptimizationStatsAggregationEdge!]"})})," ",(0,i.jsx)(f,{class:"badge badge--secondary",text:"list"})," ",(0,i.jsx)(f,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,i.jsxs)(t.h4,{id:"trafficoptimizationstatsaggregationconnectionadvisemessageadvisemessage--",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["TrafficOptimizationStatsAggregationConnection.",(0,i.jsx)("b",{children:"adviseMessage"})]})}),(0,i.jsx)(g,{}),(0,i.jsx)(t.a,{href:"/api/types/objects/advise-message",children:(0,i.jsx)(t.code,{children:"[AdviseMessage!]"})})," ",(0,i.jsx)(f,{class:"badge badge--secondary",text:"list"})," ",(0,i.jsx)(f,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,i.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/api/types/objects/traffic-optimization-query",children:(0,i.jsx)(t.code,{children:"TrafficOptimizationQuery"})})," ",(0,i.jsx)(f,{class:"badge badge--secondary",text:"object"}),(0,i.jsx)(g,{}),(0,i.jsx)(t.a,{href:"/api/types/objects/traffic-optimization-stats-aggregation-data",children:(0,i.jsx)(t.code,{children:"TrafficOptimizationStatsAggregationData"})})," ",(0,i.jsx)(f,{class:"badge badge--secondary",text:"object"})]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(b,{...e})}):b(e)}},21020:(e,t,a)=>{var i=a(96540),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,r=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,a){var i,s={},d=null,g=null;for(i in void 0!==a&&(d=""+a),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(g=t.ref),t)o.call(t,i)&&!c.hasOwnProperty(i)&&(s[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===s[i]&&(s[i]=t[i]);return{$$typeof:n,type:e,key:d,ref:g,props:s,_owner:r.current}}t.Fragment=s,t.jsx=d,t.jsxs=d},74848:(e,t,a)=>{e.exports=a(21020)},28453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>r});var i=a(96540);const n={},s=i.createContext(n);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);
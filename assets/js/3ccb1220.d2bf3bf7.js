/*! For license information please see 3ccb1220.d2bf3bf7.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9933],{96550:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>f,Bullet:()=>g,Details:()=>p,SpecifiedBy:()=>l,assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>m});var i=a(74848),s=a(28453),n=a(96540);const r={id:"traffic-optimization-stats-aggregation",title:"TrafficOptimizationStatsAggregation"},o=void 0,c={id:"types/objects/traffic-optimization-stats-aggregation",title:"TrafficOptimizationStatsAggregation",description:"No description",source:"@site/api/types/objects/traffic-optimization-stats-aggregation.mdx",sourceDirName:"types/objects",slug:"/types/objects/traffic-optimization-stats-aggregation",permalink:"/api/types/objects/traffic-optimization-stats-aggregation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"traffic-optimization-stats-aggregation",title:"TrafficOptimizationStatsAggregation"},sidebar:"schemaSidebar",previous:{title:"TrafficOptimizationStatsAggregationEdge",permalink:"/api/types/objects/traffic-optimization-stats-aggregation-edge"},next:{title:"TrafficOptimizationStatsAllAccessesHotelBlacklist",permalink:"/api/types/objects/traffic-optimization-stats-all-accesses-hotel-blacklist"}},d={},g=()=>{const e={span:"span",...(0,s.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},l=e=>{const t={a:"a",...(0,s.R)()};return(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},f=e=>{const t={span:"span",...(0,s.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(t.span,{className:e.class,children:e.text})})},p=({dataOpen:e,dataClose:t,children:a,startOpen:r=!1})=>{const o={details:"details",summary:"summary",...(0,s.R)()},[c,d]=(0,n.useState)(r);return(0,i.jsxs)(o.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)(o.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:c?e:t}),c&&a]})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>TrafficOptimizationStatsAggregation.<b>aggregationData</b></code><Bullet></Bullet><code>TrafficOptimizationStatsAggregationData</code> <Badge class="badge badge--secondary"></Badge>',id:"trafficoptimizationstatsaggregationaggregationdatatrafficoptimizationstatsaggregationdata-",level:4},{value:'<code>TrafficOptimizationStatsAggregation.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trafficoptimizationstatsaggregationadvisemessageadvisemessage--",level:4},{value:'<code>TrafficOptimizationStatsAggregation.adviseMessage.<b>level</b></code><Bullet></Bullet><code>AdviseMessageLevel</code> <Badge class="badge badge--secondary"></Badge>',id:"trafficoptimizationstatsaggregationadvisemessageleveladvisemessagelevel-",level:5},{value:"Member Of",id:"member-of",level:3}];function h(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"No description"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:"type TrafficOptimizationStatsAggregation {\n  aggregationData: TrafficOptimizationStatsAggregationData\n  adviseMessage(level: AdviseMessageLevel): [AdviseMessage!]\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(t.h4,{id:"trafficoptimizationstatsaggregationaggregationdatatrafficoptimizationstatsaggregationdata-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["TrafficOptimizationStatsAggregation.",(0,i.jsx)("b",{children:"aggregationData"})]})}),(0,i.jsx)(g,{}),(0,i.jsx)(t.a,{href:"/api/types/objects/traffic-optimization-stats-aggregation-data",children:(0,i.jsx)(t.code,{children:"TrafficOptimizationStatsAggregationData"})})," ",(0,i.jsx)(f,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,i.jsxs)(t.h4,{id:"trafficoptimizationstatsaggregationadvisemessageadvisemessage--",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["TrafficOptimizationStatsAggregation.",(0,i.jsx)("b",{children:"adviseMessage"})]})}),(0,i.jsx)(g,{}),(0,i.jsx)(t.a,{href:"/api/types/objects/advise-message",children:(0,i.jsx)(t.code,{children:"[AdviseMessage!]"})})," ",(0,i.jsx)(f,{class:"badge badge--secondary",text:"list"})," ",(0,i.jsx)(f,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,i.jsxs)(t.h5,{id:"trafficoptimizationstatsaggregationadvisemessageleveladvisemessagelevel-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["TrafficOptimizationStatsAggregation.adviseMessage.",(0,i.jsx)("b",{children:"level"})]})}),(0,i.jsx)(g,{}),(0,i.jsx)(t.a,{href:"/api/types/enums/advise-message-level",children:(0,i.jsx)(t.code,{children:"AdviseMessageLevel"})})," ",(0,i.jsx)(f,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,i.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/api/types/objects/traffic-optimization-stats-aggregation-edge",children:(0,i.jsx)(t.code,{children:"TrafficOptimizationStatsAggregationEdge"})})," ",(0,i.jsx)(f,{class:"badge badge--secondary",text:"object"})]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},21020:(e,t,a)=>{var i=a(96540),s=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,a){var i,n={},d=null,g=null;for(i in void 0!==a&&(d=""+a),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(g=t.ref),t)r.call(t,i)&&!c.hasOwnProperty(i)&&(n[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===n[i]&&(n[i]=t[i]);return{$$typeof:s,type:e,key:d,ref:g,props:n,_owner:o.current}}t.Fragment=n,t.jsx=d,t.jsxs=d},74848:(e,t,a)=>{e.exports=a(21020)},28453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>o});var i=a(96540);const s={},n=i.createContext(s);function r(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);
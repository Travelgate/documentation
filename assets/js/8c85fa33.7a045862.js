/*! For license information please see 8c85fa33.7a045862.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[42656],{57162:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>u,SpecifiedBy:()=>f,assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var r=n(74848),a=n(28453),s=n(96540);const i={id:"traffic-type",title:"TrafficType"},c=void 0,o={id:"types/enums/traffic-type",title:"TrafficType",description:"Posible source of ratios",source:"@site/api/types/enums/traffic-type.mdx",sourceDirName:"types/enums",slug:"/types/enums/traffic-type",permalink:"/api/types/enums/traffic-type",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"traffic-type",title:"TrafficType"},sidebar:"schemaSidebar",previous:{title:"TrafficOptimizationStatsDataGroupBy",permalink:"/api/types/enums/traffic-optimization-stats-data-group-by"},next:{title:"TransportType",permalink:"/api/types/enums/transport-type"}},l={},d=()=>{const e={span:"span",...(0,a.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},f=e=>{const t={a:"a",...(0,a.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,a.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(t.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:t,children:n,startOpen:i=!1})=>{const c={details:"details",summary:"summary",...(0,a.R)()},[o,l]=(0,s.useState)(i);return(0,r.jsxs)(c.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:o?e:t}),o&&n]})},h=[{value:"Values",id:"values",level:3},{value:"<code>TrafficType.<b>BASIC</b></code>",id:"traffictypebasic",level:4},{value:"<code>TrafficType.<b>SPEED</b></code>",id:"traffictypespeed",level:4},{value:"<code>TrafficType.<b>SCHEDULER</b></code>",id:"traffictypescheduler",level:4},{value:"<code>TrafficType.<b>OPTIMIZED</b></code>",id:"traffictypeoptimized",level:4},{value:"Member Of",id:"member-of",level:3}];function y(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Posible source of ratios"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-graphql",children:"enum TrafficType {\n  BASIC\n  SPEED\n  SCHEDULER\n  OPTIMIZED\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"values",children:"Values"}),"\n",(0,r.jsx)(t.h4,{id:"traffictypebasic",children:(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["TrafficType.",(0,r.jsx)("b",{children:"BASIC"})]})})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Ratios calculated from traffic between buyer and seller"}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"traffictypespeed",children:(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["TrafficType.",(0,r.jsx)("b",{children:"SPEED"})]})})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Ratios calculated from traffic between buyer and Speed"}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"traffictypescheduler",children:(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["TrafficType.",(0,r.jsx)("b",{children:"SCHEDULER"})]})})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Ratios calculated from traffic between buyer and Static information cache"}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"traffictypeoptimized",children:(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["TrafficType.",(0,r.jsx)("b",{children:"OPTIMIZED"})]})})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Ratios calculated from traffic between TGX s caches and seller"}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/api/types/objects/logging-legacy-data",children:(0,r.jsx)(t.code,{children:"LoggingLegacyData"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,r.jsx)(d,{}),(0,r.jsx)(t.a,{href:"/api/types/inputs/logging-legacy-filter-input",children:(0,r.jsx)(t.code,{children:"LoggingLegacyFilterInput"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,r.jsx)(d,{}),(0,r.jsx)(t.a,{href:"/api/types/objects/operation-detailed",children:(0,r.jsx)(t.code,{children:"OperationDetailed"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,r.jsx)(d,{}),(0,r.jsx)(t.a,{href:"/api/types/inputs/stats-aggregation-connection-where-input",children:(0,r.jsx)(t.code,{children:"StatsAggregationConnectionWhereInput"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,r.jsx)(d,{}),(0,r.jsx)(t.a,{href:"/api/types/objects/stats-aggregation-data",children:(0,r.jsx)(t.code,{children:"StatsAggregationData"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,r.jsx)(d,{}),(0,r.jsx)(t.a,{href:"/api/types/inputs/stats-filter-input",children:(0,r.jsx)(t.code,{children:"StatsFilterInput"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"input"})]})]})}function x(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(y,{...e})}):y(e)}},21020:(e,t,n)=>{var r=n(96540),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,s={},l=null,d=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,r)&&!o.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:a,type:e,key:l,ref:d,props:s,_owner:c.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(96540);const a={},s=r.createContext(a);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);
/*! For license information please see f60a7137.911457d2.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[95500],{86587:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>l,Details:()=>f,SpecifiedBy:()=>g,assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"types/inputs/traffic-optimization-aggregation-hotel-stats-connection-where-input","title":"TrafficOptimizationAggregationHotelStatsConnectionWhereInput","description":"No description","source":"@site/api/types/inputs/traffic-optimization-aggregation-hotel-stats-connection-where-input.mdx","sourceDirName":"types/inputs","slug":"/types/inputs/traffic-optimization-aggregation-hotel-stats-connection-where-input","permalink":"/api/types/inputs/traffic-optimization-aggregation-hotel-stats-connection-where-input","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"traffic-optimization-aggregation-hotel-stats-connection-where-input","title":"TrafficOptimizationAggregationHotelStatsConnectionWhereInput"},"sidebar":"schemaSidebar","previous":{"title":"TrafficOptimizationAccessHotelBlacklistWhereInput","permalink":"/api/types/inputs/traffic-optimization-access-hotel-blacklist-where-input"},"next":{"title":"TrafficOptimizationAggregationPerformanceStatsWhereInput","permalink":"/api/types/inputs/traffic-optimization-aggregation-performance-stats-where-input"}}');var a=n(74848),o=n(28453),s=n(96540);const r={id:"traffic-optimization-aggregation-hotel-stats-connection-where-input",title:"TrafficOptimizationAggregationHotelStatsConnectionWhereInput"},c=void 0,d={},l=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),g=e=>(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),p=e=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{className:e.class,children:e.text})}),f=({dataOpen:e,dataClose:t,children:n,startOpen:i=!1})=>{const[o,r]=(0,s.useState)(i);return(0,a.jsxs)("details",{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)("summary",{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:o?e:t}),o&&n]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>TrafficOptimizationAggregationHotelStatsConnectionWhereInput.<b>timeRange</b></code><Bullet></Bullet><code>TimeRangeInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trafficoptimizationaggregationhotelstatsconnectionwhereinputtimerangetimerangeinput--",level:4},{value:'<code>TrafficOptimizationAggregationHotelStatsConnectionWhereInput.<b>buyer_in</b></code><Bullet></Bullet><code>[ID!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trafficoptimizationaggregationhotelstatsconnectionwhereinputbuyer_inid--",level:4},{value:'<code>TrafficOptimizationAggregationHotelStatsConnectionWhereInput.<b>seller_in</b></code><Bullet></Bullet><code>[ID!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trafficoptimizationaggregationhotelstatsconnectionwhereinputseller_inid--",level:4},{value:'<code>TrafficOptimizationAggregationHotelStatsConnectionWhereInput.<b>access_in</b></code><Bullet></Bullet><code>[ID!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trafficoptimizationaggregationhotelstatsconnectionwhereinputaccess_inid--",level:4},{value:'<code>TrafficOptimizationAggregationHotelStatsConnectionWhereInput.<b>supplier_in</b></code><Bullet></Bullet><code>[ID!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trafficoptimizationaggregationhotelstatsconnectionwhereinputsupplier_inid--",level:4},{value:'<code>TrafficOptimizationAggregationHotelStatsConnectionWhereInput.<b>mode</b></code><Bullet></Bullet><code>ModeType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trafficoptimizationaggregationhotelstatsconnectionwhereinputmodemodetype--",level:4},{value:'<code>TrafficOptimizationAggregationHotelStatsConnectionWhereInput.<b>groupBy</b></code><Bullet></Bullet><code>TrafficOptimizationStatsAggregationGroupByInput</code> <Badge class="badge badge--secondary"></Badge>',id:"trafficoptimizationaggregationhotelstatsconnectionwhereinputgroupbytrafficoptimizationstatsaggregationgroupbyinput-",level:4}];function u(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"No description"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"input TrafficOptimizationAggregationHotelStatsConnectionWhereInput {\n  timeRange: TimeRangeInput!\n  buyer_in: [ID!]\n  seller_in: [ID!]\n  access_in: [ID!]\n  supplier_in: [ID!]\n  mode: ModeType!\n  groupBy: TrafficOptimizationStatsAggregationGroupByInput\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"trafficoptimizationaggregationhotelstatsconnectionwhereinputtimerangetimerangeinput--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["TrafficOptimizationAggregationHotelStatsConnectionWhereInput.",(0,a.jsx)("b",{children:"timeRange"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/time-range-input",children:(0,a.jsx)(t.code,{children:"TimeRangeInput!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsxs)(t.h4,{id:"trafficoptimizationaggregationhotelstatsconnectionwhereinputbuyer_inid--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["TrafficOptimizationAggregationHotelStatsConnectionWhereInput.",(0,a.jsx)("b",{children:"buyer_in"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/api/types/scalars/id",children:(0,a.jsx)(t.code,{children:"[ID!]"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.h4,{id:"trafficoptimizationaggregationhotelstatsconnectionwhereinputseller_inid--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["TrafficOptimizationAggregationHotelStatsConnectionWhereInput.",(0,a.jsx)("b",{children:"seller_in"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/api/types/scalars/id",children:(0,a.jsx)(t.code,{children:"[ID!]"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.h4,{id:"trafficoptimizationaggregationhotelstatsconnectionwhereinputaccess_inid--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["TrafficOptimizationAggregationHotelStatsConnectionWhereInput.",(0,a.jsx)("b",{children:"access_in"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/api/types/scalars/id",children:(0,a.jsx)(t.code,{children:"[ID!]"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.h4,{id:"trafficoptimizationaggregationhotelstatsconnectionwhereinputsupplier_inid--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["TrafficOptimizationAggregationHotelStatsConnectionWhereInput.",(0,a.jsx)("b",{children:"supplier_in"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/api/types/scalars/id",children:(0,a.jsx)(t.code,{children:"[ID!]"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.h4,{id:"trafficoptimizationaggregationhotelstatsconnectionwhereinputmodemodetype--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["TrafficOptimizationAggregationHotelStatsConnectionWhereInput.",(0,a.jsx)("b",{children:"mode"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/api/types/enums/mode-type",children:(0,a.jsx)(t.code,{children:"ModeType!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsxs)(t.h4,{id:"trafficoptimizationaggregationhotelstatsconnectionwhereinputgroupbytrafficoptimizationstatsaggregationgroupbyinput-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["TrafficOptimizationAggregationHotelStatsConnectionWhereInput.",(0,a.jsx)("b",{children:"groupBy"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/traffic-optimization-stats-aggregation-group-by-input",children:(0,a.jsx)(t.code,{children:"TrafficOptimizationStatsAggregationGroupByInput"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},21020:(e,t,n)=>{var i=n(96540),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,r=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var i,o={},d=null,l=null;for(i in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,i)&&!c.hasOwnProperty(i)&&(o[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===o[i]&&(o[i]=t[i]);return{$$typeof:a,type:e,key:d,ref:l,props:o,_owner:r.current}}t.Fragment=o,t.jsx=d,t.jsxs=d},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var i=n(96540);const a={},o=i.createContext(a);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);
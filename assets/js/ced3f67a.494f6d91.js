/*! For license information please see ced3f67a.494f6d91.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[352],{80821:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>p,Details:()=>g,SpecifiedBy:()=>d,assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var i=n(74848),s=n(28453),a=n(96540);const r={id:"time-range-input",title:"TimeRangeInput"},o=void 0,l={id:"types/inputs/time-range-input",title:"TimeRangeInput",description:"No description",source:"@site/api/types/inputs/time-range-input.mdx",sourceDirName:"types/inputs",slug:"/types/inputs/time-range-input",permalink:"/api/types/inputs/time-range-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"time-range-input",title:"TimeRangeInput"},sidebar:"schemaSidebar",previous:{title:"ThreeDomainSecurityInput",permalink:"/api/types/inputs/three-domain-security-input"},next:{title:"TimeoutInput",permalink:"/api/types/inputs/timeout-input"}},c={},p=()=>{const e={span:"span",...(0,s.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},d=e=>{const t={a:"a",...(0,s.R)()};return(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,s.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(t.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:t,children:n,startOpen:r=!1})=>{const o={details:"details",summary:"summary",...(0,s.R)()},[l,c]=(0,a.useState)(r);return(0,i.jsxs)(o.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)(o.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:l?e:t}),l&&n]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>TimeRangeInput.<b>relative</b></code><Bullet></Bullet><code>RelativeInput</code> <Badge class="badge badge--secondary"></Badge>',id:"timerangeinputrelativerelativeinput-",level:4},{value:'<code>TimeRangeInput.<b>absolute</b></code><Bullet></Bullet><code>AbsoluteInput</code> <Badge class="badge badge--secondary"></Badge>',id:"timerangeinputabsoluteabsoluteinput-",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"No description"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:"input TimeRangeInput {\n  relative: RelativeInput\n  absolute: AbsoluteInput\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(t.h4,{id:"timerangeinputrelativerelativeinput-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["TimeRangeInput.",(0,i.jsx)("b",{children:"relative"})]})}),(0,i.jsx)(p,{}),(0,i.jsx)(t.a,{href:"/api/types/inputs/relative-input",children:(0,i.jsx)(t.code,{children:"RelativeInput"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Use now() to query data with timestamps relative to the server\u2019s current timestamp."}),"\n"]}),"\n",(0,i.jsxs)(t.h4,{id:"timerangeinputabsoluteabsoluteinput-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["TimeRangeInput.",(0,i.jsx)("b",{children:"absolute"})]})}),(0,i.jsx)(p,{}),(0,i.jsx)(t.a,{href:"/api/types/inputs/absolute-input",children:(0,i.jsx)(t.code,{children:"AbsoluteInput"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Specify absolute time with date-time strings."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/api/types/inputs/insights-portfolio-stats-where-input",children:(0,i.jsx)(t.code,{children:"InsightsPortfolioStatsWhereInput"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,i.jsx)(p,{}),(0,i.jsx)(t.a,{href:"/api/types/inputs/logging-legacy-filter-input",children:(0,i.jsx)(t.code,{children:"LoggingLegacyFilterInput"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,i.jsx)(p,{}),(0,i.jsx)(t.a,{href:"/api/types/inputs/stats-aggregation-connection-where-input",children:(0,i.jsx)(t.code,{children:"StatsAggregationConnectionWhereInput"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,i.jsx)(p,{}),(0,i.jsx)(t.a,{href:"/api/types/inputs/stats-filter-input",children:(0,i.jsx)(t.code,{children:"StatsFilterInput"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,i.jsx)(p,{}),(0,i.jsx)(t.a,{href:"/api/types/inputs/stats-real-time-range-where-input",children:(0,i.jsx)(t.code,{children:"StatsRealTimeRangeWhereInput"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,i.jsx)(p,{}),(0,i.jsx)(t.a,{href:"/api/types/inputs/traffic-optimization-aggregation-hotel-stats-connection-where-input",children:(0,i.jsx)(t.code,{children:"TrafficOptimizationAggregationHotelStatsConnectionWhereInput"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,i.jsx)(p,{}),(0,i.jsx)(t.a,{href:"/api/types/inputs/traffic-optimization-aggregation-performance-stats-where-input",children:(0,i.jsx)(t.code,{children:"TrafficOptimizationAggregationPerformanceStatsWhereInput"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,i.jsx)(p,{}),(0,i.jsx)(t.a,{href:"/api/types/inputs/traffic-optimization-aggregation-stats-connection-where-input",children:(0,i.jsx)(t.code,{children:"TrafficOptimizationAggregationStatsConnectionWhereInput"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},21020:(e,t,n)=>{var i=n(96540),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var i,a={},c=null,p=null;for(i in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(p=t.ref),t)r.call(t,i)&&!l.hasOwnProperty(i)&&(a[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===a[i]&&(a[i]=t[i]);return{$$typeof:s,type:e,key:c,ref:p,props:a,_owner:o.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var i=n(96540);const s={},a=i.createContext(s);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);
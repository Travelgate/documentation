/*! For license information please see 359184de.5a56bb88.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8544],{99947:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>p,Details:()=>g,SpecifiedBy:()=>l,assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>y});var a=n(74848),s=n(28453),o=n(96540);const r={id:"stats-aggregation-connection-group-by-input",title:"StatsAggregationConnectionGroupByInput"},i=void 0,c={id:"types/inputs/stats-aggregation-connection-group-by-input",title:"StatsAggregationConnectionGroupByInput",description:"Data able to retrieve stats",source:"@site/api/types/inputs/stats-aggregation-connection-group-by-input.mdx",sourceDirName:"types/inputs",slug:"/types/inputs/stats-aggregation-connection-group-by-input",permalink:"/api/types/inputs/stats-aggregation-connection-group-by-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"stats-aggregation-connection-group-by-input",title:"StatsAggregationConnectionGroupByInput"},sidebar:"schemaSidebar",previous:{title:"SpeedUpdateAllAccessesWhereInput",permalink:"/api/types/inputs/speed-update-all-accesses-where-input"},next:{title:"StatsAggregationConnectionWhereInput",permalink:"/api/types/inputs/stats-aggregation-connection-where-input"}},d={},p=()=>{const e={span:"span",...(0,s.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},l=e=>{const t={a:"a",...(0,s.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,s.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:t,children:n,startOpen:r=!1})=>{const i={details:"details",summary:"summary",...(0,s.R)()},[c,d]=(0,o.useState)(r);return(0,a.jsxs)(i.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(i.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:c?e:t}),c&&n]})},y=[{value:"Fields",id:"fields",level:3},{value:'<code>StatsAggregationConnectionGroupByInput.<b>data</b></code><Bullet></Bullet><code>[StatsDataGroupBy!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"statsaggregationconnectiongroupbyinputdatastatsdatagroupby--",level:4},{value:'<code>StatsAggregationConnectionGroupByInput.<b>time</b></code><Bullet></Bullet><code>StatsTimeGroupBy</code> <Badge class="badge badge--secondary"></Badge>',id:"statsaggregationconnectiongroupbyinputtimestatstimegroupby-",level:4}];function m(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Data able to retrieve stats"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"input StatsAggregationConnectionGroupByInput {\n  data: [StatsDataGroupBy!]\n  time: StatsTimeGroupBy\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"statsaggregationconnectiongroupbyinputdatastatsdatagroupby--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["StatsAggregationConnectionGroupByInput.",(0,a.jsx)("b",{children:"data"})]})}),(0,a.jsx)(p,{}),(0,a.jsx)(t.a,{href:"/api/types/enums/stats-data-group-by",children:(0,a.jsx)(t.code,{children:"[StatsDataGroupBy!]"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsx)(t.p,{children:"To group by data"}),"\n",(0,a.jsxs)(t.h4,{id:"statsaggregationconnectiongroupbyinputtimestatstimegroupby-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["StatsAggregationConnectionGroupByInput.",(0,a.jsx)("b",{children:"time"})]})}),(0,a.jsx)(p,{}),(0,a.jsx)(t.a,{href:"/api/types/enums/stats-time-group-by",children:(0,a.jsx)(t.code,{children:"StatsTimeGroupBy"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsx)(t.p,{children:"To group data by time"})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},21020:(e,t,n)=>{var a=n(96540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var a,o={},d=null,p=null;for(a in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(p=t.ref),t)r.call(t,a)&&!c.hasOwnProperty(a)&&(o[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===o[a]&&(o[a]=t[a]);return{$$typeof:s,type:e,key:d,ref:p,props:o,_owner:i.current}}t.Fragment=o,t.jsx=d,t.jsxs=d},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>i});var a=n(96540);const s={},o=a.createContext(s);function r(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);
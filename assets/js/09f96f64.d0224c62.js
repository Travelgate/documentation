/*! For license information please see 09f96f64.d0224c62.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7135],{64042:(e,r,t)=>{t.r(r),t.d(r,{Badge:()=>p,Bullet:()=>o,Details:()=>y,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>i,default:()=>j,frontMatter:()=>n,metadata:()=>c,toc:()=>x});var s=t(74848),l=t(28453),a=t(96540);const n={id:"alerts-xquery",title:"AlertsXQuery"},i=void 0,c={id:"types/objects/alerts-xquery",title:"AlertsXQuery",description:"No description",source:"@site/api/types/objects/alerts-xquery.mdx",sourceDirName:"types/objects",slug:"/types/objects/alerts-xquery",permalink:"/api/types/objects/alerts-xquery",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"alerts-xquery",title:"AlertsXQuery"},sidebar:"schemaSidebar",previous:{title:"AlertsXMutation",permalink:"/api/types/objects/alerts-xmutation"},next:{title:"AllGroupData",permalink:"/api/types/objects/all-group-data"}},d={},o=()=>{const e={span:"span",...(0,l.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const r={a:"a",...(0,l.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const r={span:"span",...(0,l.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(r.span,{className:e.class,children:e.text})})},y=({dataOpen:e,dataClose:r,children:t,startOpen:n=!1})=>{const i={details:"details",summary:"summary",...(0,l.R)()},[c,d]=(0,a.useState)(n);return(0,s.jsxs)(i.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(i.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:c?e:r}),c&&t]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>AlertsXQuery.<b>alerts</b></code><Bullet></Bullet><code>AlertConnection!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertsxqueryalertsalertconnection--",level:4},{value:'<code>AlertsXQuery.alerts.<b>relay</b></code><Bullet></Bullet><code>RelayInput</code> <Badge class="badge badge--secondary"></Badge>',id:"alertsxqueryalertsrelayrelayinput-",level:5},{value:'<code>AlertsXQuery.alerts.<b>filter</b></code><Bullet></Bullet><code>AlertFilterInput</code> <Badge class="badge badge--secondary"></Badge>',id:"alertsxqueryalertsfilteralertfilterinput-",level:5},{value:'<code>AlertsXQuery.alerts.<b>criteria</b></code><Bullet></Bullet><code>AlertCriteriaInput</code> <Badge class="badge badge--secondary"></Badge>',id:"alertsxqueryalertscriteriaalertcriteriainput-",level:5},{value:"Returned By",id:"returned-by",level:3}];function h(e){const r={a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:"No description"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-graphql",children:"type AlertsXQuery {\n  alerts(\n    relay: RelayInput\n    filter: AlertFilterInput\n    criteria: AlertCriteriaInput\n  ): AlertConnection!\n}\n"})}),"\n",(0,s.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(r.h4,{id:"alertsxqueryalertsalertconnection--",children:[(0,s.jsx)(r.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertsXQuery.",(0,s.jsx)("b",{children:"alerts"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(r.a,{href:"/api/types/objects/alert-connection",children:(0,s.jsx)(r.code,{children:"AlertConnection!"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsx)(r.p,{children:"Query to obtain Alerts"}),"\n",(0,s.jsxs)(r.h5,{id:"alertsxqueryalertsrelayrelayinput-",children:[(0,s.jsx)(r.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertsXQuery.alerts.",(0,s.jsx)("b",{children:"relay"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(r.a,{href:"/api/types/inputs/relay-input",children:(0,s.jsx)(r.code,{children:"RelayInput"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,s.jsxs)(r.h5,{id:"alertsxqueryalertsfilteralertfilterinput-",children:[(0,s.jsx)(r.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertsXQuery.alerts.",(0,s.jsx)("b",{children:"filter"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(r.a,{href:"/api/types/inputs/alert-filter-input",children:(0,s.jsx)(r.code,{children:"AlertFilterInput"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,s.jsxs)(r.h5,{id:"alertsxqueryalertscriteriaalertcriteriainput-",children:[(0,s.jsx)(r.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertsXQuery.alerts.",(0,s.jsx)("b",{children:"criteria"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(r.a,{href:"/api/types/inputs/alert-criteria-input",children:(0,s.jsx)(r.code,{children:"AlertCriteriaInput"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,s.jsx)(r.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/api/operations/queries/alerts-x",children:(0,s.jsx)(r.code,{children:"alertsX"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"query"})]})]})}function j(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},21020:(e,r,t)=>{var s=t(96540),l=Symbol.for("react.element"),a=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var s,a={},d=null,o=null;for(s in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(o=r.ref),r)n.call(r,s)&&!c.hasOwnProperty(s)&&(a[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===a[s]&&(a[s]=r[s]);return{$$typeof:l,type:e,key:d,ref:o,props:a,_owner:i.current}}r.Fragment=a,r.jsx=d,r.jsxs=d},74848:(e,r,t)=>{e.exports=t(21020)},28453:(e,r,t)=>{t.d(r,{R:()=>n,x:()=>i});var s=t(96540);const l={},a=s.createContext(l);function n(e){const r=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:n(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);
/*! For license information please see b750c073.fc4e5477.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[54862],{84063:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>d,Details:()=>u,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>l,default:()=>x,frontMatter:()=>s,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"types/inputs/alert-update-common-comparative-input","title":"AlertUpdateCommonComparativeInput","description":"No description","source":"@site/api/types/inputs/alert-update-common-comparative-input.mdx","sourceDirName":"types/inputs","slug":"/types/inputs/alert-update-common-comparative-input","permalink":"/api/types/inputs/alert-update-common-comparative-input","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"alert-update-common-comparative-input","title":"AlertUpdateCommonComparativeInput"},"sidebar":"schemaSidebar","previous":{"title":"AlertUpdateCommonByTimeInput","permalink":"/api/types/inputs/alert-update-common-by-time-input"},"next":{"title":"AlertUpdateCommonConfigurationInput","permalink":"/api/types/inputs/alert-update-common-configuration-input"}}');var r=a(74848),i=a(28453),o=a(96540);const s={id:"alert-update-common-comparative-input",title:"AlertUpdateCommonComparativeInput"},l=void 0,c={},d=()=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),m=e=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{className:e.class,children:e.text})}),u=({dataOpen:e,dataClose:t,children:a,startOpen:n=!1})=>{const[i,s]=(0,o.useState)(n);return(0,r.jsxs)("details",{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"},children:i?e:t}),i&&a]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>AlertUpdateCommonComparativeInput.<b>historicalWindow</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"alertupdatecommoncomparativeinputhistoricalwindowint-",level:4},{value:'<code>AlertUpdateCommonComparativeInput.<b>offset</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"alertupdatecommoncomparativeinputoffsetint-",level:4},{value:'<code>AlertUpdateCommonComparativeInput.<b>variation</b></code><Bullet></Bullet><code>AlertVariation</code> <Badge class="badge badge--secondary"></Badge>',id:"alertupdatecommoncomparativeinputvariationalertvariation-",level:4},{value:'<code>AlertUpdateCommonComparativeInput.<b>percentageToAlert</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"alertupdatecommoncomparativeinputpercentagetoalertint-",level:4},{value:"Member Of",id:"member-of",level:3}];function f(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"No description"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-graphql",children:"input AlertUpdateCommonComparativeInput {\n  historicalWindow: Int\n  offset: Int\n  variation: AlertVariation\n  percentageToAlert: Int\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(t.h4,{id:"alertupdatecommoncomparativeinputhistoricalwindowint-",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertUpdateCommonComparativeInput.",(0,r.jsx)("b",{children:"historicalWindow"})]})}),(0,r.jsx)(d,{}),(0,r.jsx)(t.a,{href:"/api/types/scalars/int",children:(0,r.jsx)(t.code,{children:"Int"})})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(t.p,{children:"The time frame in minutes to be used to compare with the window time frame"}),"\n",(0,r.jsxs)(t.h4,{id:"alertupdatecommoncomparativeinputoffsetint-",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertUpdateCommonComparativeInput.",(0,r.jsx)("b",{children:"offset"})]})}),(0,r.jsx)(d,{}),(0,r.jsx)(t.a,{href:"/api/types/scalars/int",children:(0,r.jsx)(t.code,{children:"Int"})})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(t.p,{children:"Time frame in minutes to set the beginning of historicalWindow"}),"\n",(0,r.jsxs)(t.h4,{id:"alertupdatecommoncomparativeinputvariationalertvariation-",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertUpdateCommonComparativeInput.",(0,r.jsx)("b",{children:"variation"})]})}),(0,r.jsx)(d,{}),(0,r.jsx)(t.a,{href:"/api/types/enums/alert-variation",children:(0,r.jsx)(t.code,{children:"AlertVariation"})})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,r.jsx)(t.p,{children:"According to percentageToAlert value"}),"\n",(0,r.jsxs)(t.h4,{id:"alertupdatecommoncomparativeinputpercentagetoalertint-",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertUpdateCommonComparativeInput.",(0,r.jsx)("b",{children:"percentageToAlert"})]})}),(0,r.jsx)(d,{}),(0,r.jsx)(t.a,{href:"/api/types/scalars/int",children:(0,r.jsx)(t.code,{children:"Int"})})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(t.p,{children:"Percentage of traffic to be considered status ALERTING"}),"\n",(0,r.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/api/types/inputs/alert-update-average-time-comparative-configuration-by-time-input",children:(0,r.jsx)(t.code,{children:"AlertUpdateAverageTimeComparativeConfigurationByTimeInput"})})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"input"}),(0,r.jsx)(d,{}),(0,r.jsx)(t.a,{href:"/api/types/inputs/alert-update-error-rate-comparative-configuration-by-time-input",children:(0,r.jsx)(t.code,{children:"AlertUpdateErrorRateComparativeConfigurationByTimeInput"})})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"input"}),(0,r.jsx)(d,{}),(0,r.jsx)(t.a,{href:"/api/types/inputs/alert-update-peak-traffic-comparative-configuration-by-time-input",children:(0,r.jsx)(t.code,{children:"AlertUpdatePeakTrafficComparativeConfigurationByTimeInput"})})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"input"})]})]})}function x(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},21020:(e,t,a)=>{var n=a(96540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,a){var n,i={},c=null,d=null;for(n in void 0!==a&&(c=""+a),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,n)&&!l.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:r,type:e,key:c,ref:d,props:i,_owner:s.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},74848:(e,t,a)=>{e.exports=a(21020)},28453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>s});var n=a(96540);const r={},i=n.createContext(r);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);
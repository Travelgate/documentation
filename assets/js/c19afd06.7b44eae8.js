/*! For license information please see c19afd06.7b44eae8.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[30237],{46856:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>c,Bullet:()=>u,Details:()=>b,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>o,default:()=>x,frontMatter:()=>i,metadata:()=>r,toc:()=>f});const r=JSON.parse('{"id":"types/inputs/alert-update-bounds-input","title":"AlertUpdateBoundsInput","description":"No description","source":"@site/api/types/inputs/alert-update-bounds-input.mdx","sourceDirName":"types/inputs","slug":"/types/inputs/alert-update-bounds-input","permalink":"/api/types/inputs/alert-update-bounds-input","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"alert-update-bounds-input","title":"AlertUpdateBoundsInput"},"sidebar":"schemaSidebar","previous":{"title":"AlertUpdateAverageTimeRelativeConfigurationByTimeInput","permalink":"/api/types/inputs/alert-update-average-time-relative-configuration-by-time-input"},"next":{"title":"AlertUpdateBusinessMetricRatioByTimeInput","permalink":"/api/types/inputs/alert-update-business-metric-ratio-by-time-input"}}');var a=n(74848),s=n(28453),d=n(96540);const i={id:"alert-update-bounds-input",title:"AlertUpdateBoundsInput"},o=void 0,l={},u=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),c=e=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{className:e.class,children:e.text})}),b=({dataOpen:e,dataClose:t,children:n,startOpen:r=!1})=>{const[s,i]=(0,d.useState)(r);return(0,a.jsxs)("details",{...s?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:s?e:t}),s&&n]})},f=[{value:"Fields",id:"fields",level:3},{value:'<code>AlertUpdateBoundsInput.<b>bound</b></code><Bullet></Bullet><code>AlertBound</code> <Badge class="badge badge--secondary"></Badge>',id:"alertupdateboundsinputboundalertbound-",level:4},{value:'<code>AlertUpdateBoundsInput.<b>upperBound</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"alertupdateboundsinputupperboundint-",level:4},{value:'<code>AlertUpdateBoundsInput.<b>lowerBound</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"alertupdateboundsinputlowerboundint-",level:4},{value:"Member Of",id:"member-of",level:3}];function h(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"No description"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"input AlertUpdateBoundsInput {\n  bound: AlertBound\n  upperBound: Int\n  lowerBound: Int\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"alertupdateboundsinputboundalertbound-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertUpdateBoundsInput.",(0,a.jsx)("b",{children:"bound"})]})}),(0,a.jsx)(u,{}),(0,a.jsx)(t.a,{href:"/api/types/enums/alert-bound",children:(0,a.jsx)(t.code,{children:"AlertBound"})})," ",(0,a.jsx)(c,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsx)(t.p,{children:"Bound limits to be used"}),"\n",(0,a.jsxs)(t.h4,{id:"alertupdateboundsinputupperboundint-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertUpdateBoundsInput.",(0,a.jsx)("b",{children:"upperBound"})]})}),(0,a.jsx)(u,{}),(0,a.jsx)(t.a,{href:"/api/types/scalars/int",children:(0,a.jsx)(t.code,{children:"Int"})})," ",(0,a.jsx)(c,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(t.p,{children:"Upper bound limit"}),"\n",(0,a.jsxs)(t.h4,{id:"alertupdateboundsinputlowerboundint-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertUpdateBoundsInput.",(0,a.jsx)("b",{children:"lowerBound"})]})}),(0,a.jsx)(u,{}),(0,a.jsx)(t.a,{href:"/api/types/scalars/int",children:(0,a.jsx)(t.code,{children:"Int"})})," ",(0,a.jsx)(c,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(t.p,{children:"Lower bound limit"}),"\n",(0,a.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/api/types/inputs/alert-update-peak-traffic-absolute-configuration-by-time-input",children:(0,a.jsx)(t.code,{children:"AlertUpdatePeakTrafficAbsoluteConfigurationByTimeInput"})})," ",(0,a.jsx)(c,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(u,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/alert-update-peak-traffic-comparative-configuration-by-time-input",children:(0,a.jsx)(t.code,{children:"AlertUpdatePeakTrafficComparativeConfigurationByTimeInput"})})," ",(0,a.jsx)(c,{class:"badge badge--secondary",text:"input"})]})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},21020:(e,t,n)=>{var r=n(96540),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,s={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)d.call(t,r)&&!o.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:a,type:e,key:l,ref:u,props:s,_owner:i.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>i});var r=n(96540);const a={},s=r.createContext(a);function d(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);
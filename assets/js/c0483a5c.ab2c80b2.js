/*! For license information please see c0483a5c.ab2c80b2.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[56482],{58150:(e,t,i)=>{i.r(t),i.d(t,{Badge:()=>p,Bullet:()=>c,Details:()=>m,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>d,default:()=>f,frontMatter:()=>l,metadata:()=>a,toc:()=>g});const a=JSON.parse('{"id":"types/inputs/alert-update-average-time-relative-configuration-by-time-input","title":"AlertUpdateAverageTimeRelativeConfigurationByTimeInput","description":"No description","source":"@site/api/types/inputs/alert-update-average-time-relative-configuration-by-time-input.mdx","sourceDirName":"types/inputs","slug":"/types/inputs/alert-update-average-time-relative-configuration-by-time-input","permalink":"/api/types/inputs/alert-update-average-time-relative-configuration-by-time-input","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"alert-update-average-time-relative-configuration-by-time-input","title":"AlertUpdateAverageTimeRelativeConfigurationByTimeInput"},"sidebar":"schemaSidebar","previous":{"title":"AlertUpdateAverageTimeRelativeConfigurationByRequestsInput","permalink":"/api/types/inputs/alert-update-average-time-relative-configuration-by-requests-input"},"next":{"title":"AlertUpdateBoundsInput","permalink":"/api/types/inputs/alert-update-bounds-input"}}');var n=i(74848),r=i(28453),o=i(96540);const l={id:"alert-update-average-time-relative-configuration-by-time-input",title:"AlertUpdateAverageTimeRelativeConfigurationByTimeInput"},d=void 0,s={},c=()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),u=e=>(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),p=e=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{className:e.class,children:e.text})}),m=({dataOpen:e,dataClose:t,children:i,startOpen:a=!1})=>{const[r,l]=(0,o.useState)(a);return(0,n.jsxs)("details",{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:r?e:t}),r&&i]})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>AlertUpdateAverageTimeRelativeConfigurationByTimeInput.<b>maxTime</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"alertupdateaveragetimerelativeconfigurationbytimeinputmaxtimeint-",level:4},{value:'<code>AlertUpdateAverageTimeRelativeConfigurationByTimeInput.<b>maxAverageTime</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"alertupdateaveragetimerelativeconfigurationbytimeinputmaxaveragetimeint-",level:4},{value:'<code>AlertUpdateAverageTimeRelativeConfigurationByTimeInput.<b>windowing</b></code><Bullet></Bullet><code>AlertUpdateCommonByTimeInput</code> <Badge class="badge badge--secondary"></Badge>',id:"alertupdateaveragetimerelativeconfigurationbytimeinputwindowingalertupdatecommonbytimeinput-",level:4},{value:'<code>AlertUpdateAverageTimeRelativeConfigurationByTimeInput.<b>common</b></code><Bullet></Bullet><code>AlertUpdateCommonConfigurationInput</code> <Badge class="badge badge--secondary"></Badge>',id:"alertupdateaveragetimerelativeconfigurationbytimeinputcommonalertupdatecommonconfigurationinput-",level:4},{value:'<code>AlertUpdateAverageTimeRelativeConfigurationByTimeInput.<b>relative</b></code><Bullet></Bullet><code>AlertUpdateCommonRelativeInput</code> <Badge class="badge badge--secondary"></Badge>',id:"alertupdateaveragetimerelativeconfigurationbytimeinputrelativealertupdatecommonrelativeinput-",level:4},{value:"Member Of",id:"member-of",level:3}];function v(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"No description"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"input AlertUpdateAverageTimeRelativeConfigurationByTimeInput {\n  maxTime: Int\n  maxAverageTime: Int\n  windowing: AlertUpdateCommonByTimeInput\n  common: AlertUpdateCommonConfigurationInput\n  relative: AlertUpdateCommonRelativeInput\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.h4,{id:"alertupdateaveragetimerelativeconfigurationbytimeinputmaxtimeint-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertUpdateAverageTimeRelativeConfigurationByTimeInput.",(0,n.jsx)("b",{children:"maxTime"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/api/types/scalars/int",children:(0,n.jsx)(t.code,{children:"Int"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.p,{children:"Time value not allowed in miliseconds"}),"\n",(0,n.jsxs)(t.h4,{id:"alertupdateaveragetimerelativeconfigurationbytimeinputmaxaveragetimeint-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertUpdateAverageTimeRelativeConfigurationByTimeInput.",(0,n.jsx)("b",{children:"maxAverageTime"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/api/types/scalars/int",children:(0,n.jsx)(t.code,{children:"Int"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.p,{children:"Average time value not allowed in miliseconds"}),"\n",(0,n.jsxs)(t.h4,{id:"alertupdateaveragetimerelativeconfigurationbytimeinputwindowingalertupdatecommonbytimeinput-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertUpdateAverageTimeRelativeConfigurationByTimeInput.",(0,n.jsx)("b",{children:"windowing"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/api/types/inputs/alert-update-common-by-time-input",children:(0,n.jsx)(t.code,{children:"AlertUpdateCommonByTimeInput"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,n.jsx)(t.p,{children:"Common configuration for time window type"}),"\n",(0,n.jsxs)(t.h4,{id:"alertupdateaveragetimerelativeconfigurationbytimeinputcommonalertupdatecommonconfigurationinput-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertUpdateAverageTimeRelativeConfigurationByTimeInput.",(0,n.jsx)("b",{children:"common"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/api/types/inputs/alert-update-common-configuration-input",children:(0,n.jsx)(t.code,{children:"AlertUpdateCommonConfigurationInput"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,n.jsx)(t.p,{children:"Common configuration alert"}),"\n",(0,n.jsxs)(t.h4,{id:"alertupdateaveragetimerelativeconfigurationbytimeinputrelativealertupdatecommonrelativeinput-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertUpdateAverageTimeRelativeConfigurationByTimeInput.",(0,n.jsx)("b",{children:"relative"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/api/types/inputs/alert-update-common-relative-input",children:(0,n.jsx)(t.code,{children:"AlertUpdateCommonRelativeInput"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,n.jsx)(t.p,{children:"Common configuration of relative mode type"}),"\n",(0,n.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/api/types/inputs/alert-update-average-time-relative-by-time-input",children:(0,n.jsx)(t.code,{children:"AlertUpdateAverageTimeRelativeByTimeInput"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"input"})]})]})}function f(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(v,{...e})}):v(e)}},21020:(e,t,i)=>{var a=i(96540),n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,i){var a,r={},s=null,c=null;for(a in void 0!==i&&(s=""+i),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,a)&&!d.hasOwnProperty(a)&&(r[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===r[a]&&(r[a]=t[a]);return{$$typeof:n,type:e,key:s,ref:c,props:r,_owner:l.current}}t.Fragment=r,t.jsx=s,t.jsxs=s},74848:(e,t,i)=>{e.exports=i(21020)},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>l});var a=i(96540);const n={},r=a.createContext(n);function o(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);
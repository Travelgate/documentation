/*! For license information please see be093f32.f5e73c73.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[25825],{43989:(e,t,i)=>{i.r(t),i.d(t,{Badge:()=>u,Bullet:()=>c,Details:()=>g,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"types/inputs/alert-average-time-relative-configuration-by-time-input","title":"AlertAverageTimeRelativeConfigurationByTimeInput","description":"No description","source":"@site/api/types/inputs/alert-average-time-relative-configuration-by-time-input.mdx","sourceDirName":"types/inputs","slug":"/types/inputs/alert-average-time-relative-configuration-by-time-input","permalink":"/api/types/inputs/alert-average-time-relative-configuration-by-time-input","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"alert-average-time-relative-configuration-by-time-input","title":"AlertAverageTimeRelativeConfigurationByTimeInput"},"sidebar":"schemaSidebar","previous":{"title":"AlertAverageTimeRelativeConfigurationByRequestsInput","permalink":"/api/types/inputs/alert-average-time-relative-configuration-by-requests-input"},"next":{"title":"AlertBoundsInput","permalink":"/api/types/inputs/alert-bounds-input"}}');var a=i(74848),r=i(28453),o=i(96540);const l={id:"alert-average-time-relative-configuration-by-time-input",title:"AlertAverageTimeRelativeConfigurationByTimeInput"},s=void 0,d={},c=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),m=e=>(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),u=e=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{className:e.class,children:e.text})}),g=({dataOpen:e,dataClose:t,children:i,startOpen:n=!1})=>{const[r,l]=(0,o.useState)(n);return(0,a.jsxs)("details",{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:r?e:t}),r&&i]})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>AlertAverageTimeRelativeConfigurationByTimeInput.<b>maxTime</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"alertaveragetimerelativeconfigurationbytimeinputmaxtimeint-",level:4},{value:'<code>AlertAverageTimeRelativeConfigurationByTimeInput.<b>maxAverageTime</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"alertaveragetimerelativeconfigurationbytimeinputmaxaveragetimeint-",level:4},{value:'<code>AlertAverageTimeRelativeConfigurationByTimeInput.<b>windowing</b></code><Bullet></Bullet><code>AlertCommonByTimeInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertaveragetimerelativeconfigurationbytimeinputwindowingalertcommonbytimeinput--",level:4},{value:'<code>AlertAverageTimeRelativeConfigurationByTimeInput.<b>common</b></code><Bullet></Bullet><code>AlertCommonConfigurationInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertaveragetimerelativeconfigurationbytimeinputcommonalertcommonconfigurationinput--",level:4},{value:'<code>AlertAverageTimeRelativeConfigurationByTimeInput.<b>relative</b></code><Bullet></Bullet><code>AlertCommonRelativeInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertaveragetimerelativeconfigurationbytimeinputrelativealertcommonrelativeinput--",level:4},{value:"Member Of",id:"member-of",level:3}];function v(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"No description"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"input AlertAverageTimeRelativeConfigurationByTimeInput {\n  maxTime: Int\n  maxAverageTime: Int\n  windowing: AlertCommonByTimeInput!\n  common: AlertCommonConfigurationInput!\n  relative: AlertCommonRelativeInput!\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"alertaveragetimerelativeconfigurationbytimeinputmaxtimeint-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertAverageTimeRelativeConfigurationByTimeInput.",(0,a.jsx)("b",{children:"maxTime"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/types/scalars/int",children:(0,a.jsx)(t.code,{children:"Int"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(t.p,{children:"Time not allowed in miliseconds"}),"\n",(0,a.jsxs)(t.h4,{id:"alertaveragetimerelativeconfigurationbytimeinputmaxaveragetimeint-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertAverageTimeRelativeConfigurationByTimeInput.",(0,a.jsx)("b",{children:"maxAverageTime"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/types/scalars/int",children:(0,a.jsx)(t.code,{children:"Int"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(t.p,{children:"Average time not allowed in miliseconds"}),"\n",(0,a.jsxs)(t.h4,{id:"alertaveragetimerelativeconfigurationbytimeinputwindowingalertcommonbytimeinput--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertAverageTimeRelativeConfigurationByTimeInput.",(0,a.jsx)("b",{children:"windowing"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/alert-common-by-time-input",children:(0,a.jsx)(t.code,{children:"AlertCommonByTimeInput!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsx)(t.p,{children:"Common configuration of time window type"}),"\n",(0,a.jsxs)(t.h4,{id:"alertaveragetimerelativeconfigurationbytimeinputcommonalertcommonconfigurationinput--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertAverageTimeRelativeConfigurationByTimeInput.",(0,a.jsx)("b",{children:"common"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/alert-common-configuration-input",children:(0,a.jsx)(t.code,{children:"AlertCommonConfigurationInput!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsx)(t.p,{children:"Common configuration alert"}),"\n",(0,a.jsxs)(t.h4,{id:"alertaveragetimerelativeconfigurationbytimeinputrelativealertcommonrelativeinput--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertAverageTimeRelativeConfigurationByTimeInput.",(0,a.jsx)("b",{children:"relative"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/alert-common-relative-input",children:(0,a.jsx)(t.code,{children:"AlertCommonRelativeInput!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsx)(t.p,{children:"Common configuration of relative mode type"}),"\n",(0,a.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/api/types/inputs/alert-average-time-relative-by-time-input",children:(0,a.jsx)(t.code,{children:"AlertAverageTimeRelativeByTimeInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function f(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(v,{...e})}):v(e)}},21020:(e,t,i)=>{var n=i(96540),a=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,i){var n,r={},d=null,c=null;for(n in void 0!==i&&(d=""+i),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,n)&&!s.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===r[n]&&(r[n]=t[n]);return{$$typeof:a,type:e,key:d,ref:c,props:r,_owner:l.current}}t.Fragment=r,t.jsx=d,t.jsxs=d},74848:(e,t,i)=>{e.exports=i(21020)},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>l});var n=i(96540);const a={},r=n.createContext(a);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);
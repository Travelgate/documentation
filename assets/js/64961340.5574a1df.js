/*! For license information please see 64961340.5574a1df.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[84512],{32248:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>u,Details:()=>f,SpecifiedBy:()=>d,assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>m});const i=JSON.parse('{"id":"types/inputs/alert-peak-traffic-absolute-configuration-by-time-input","title":"AlertPeakTrafficAbsoluteConfigurationByTimeInput","description":"No description","source":"@site/api/types/inputs/alert-peak-traffic-absolute-configuration-by-time-input.mdx","sourceDirName":"types/inputs","slug":"/types/inputs/alert-peak-traffic-absolute-configuration-by-time-input","permalink":"/api/types/inputs/alert-peak-traffic-absolute-configuration-by-time-input","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"alert-peak-traffic-absolute-configuration-by-time-input","title":"AlertPeakTrafficAbsoluteConfigurationByTimeInput"},"sidebar":"schemaSidebar","previous":{"title":"AlertPeakTrafficAbsoluteByTimeInput","permalink":"/api/types/inputs/alert-peak-traffic-absolute-by-time-input"},"next":{"title":"AlertPeakTrafficComparativeByTimeInput","permalink":"/api/types/inputs/alert-peak-traffic-comparative-by-time-input"}}');var a=n(74848),o=n(28453),r=n(96540);const s={id:"alert-peak-traffic-absolute-configuration-by-time-input",title:"AlertPeakTrafficAbsoluteConfigurationByTimeInput"},l=void 0,c={},u=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),d=e=>(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),p=e=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{className:e.class,children:e.text})}),f=({dataOpen:e,dataClose:t,children:n,startOpen:i=!1})=>{const[o,s]=(0,r.useState)(i);return(0,a.jsxs)("details",{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"},children:o?e:t}),o&&n]})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>AlertPeakTrafficAbsoluteConfigurationByTimeInput.<b>bounds</b></code><Bullet></Bullet><code>AlertBoundsInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertpeaktrafficabsoluteconfigurationbytimeinputboundsalertboundsinput--",level:4},{value:'<code>AlertPeakTrafficAbsoluteConfigurationByTimeInput.<b>windowing</b></code><Bullet></Bullet><code>AlertCommonByTimeInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertpeaktrafficabsoluteconfigurationbytimeinputwindowingalertcommonbytimeinput--",level:4},{value:'<code>AlertPeakTrafficAbsoluteConfigurationByTimeInput.<b>common</b></code><Bullet></Bullet><code>AlertCommonConfigurationInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertpeaktrafficabsoluteconfigurationbytimeinputcommonalertcommonconfigurationinput--",level:4},{value:"Member Of",id:"member-of",level:3}];function b(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"No description"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"input AlertPeakTrafficAbsoluteConfigurationByTimeInput {\n  bounds: AlertBoundsInput!\n  windowing: AlertCommonByTimeInput!\n  common: AlertCommonConfigurationInput!\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"alertpeaktrafficabsoluteconfigurationbytimeinputboundsalertboundsinput--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertPeakTrafficAbsoluteConfigurationByTimeInput.",(0,a.jsx)("b",{children:"bounds"})]})}),(0,a.jsx)(u,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/alert-bounds-input",children:(0,a.jsx)(t.code,{children:"AlertBoundsInput!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsx)(t.p,{children:"Limits for number of requests"}),"\n",(0,a.jsxs)(t.h4,{id:"alertpeaktrafficabsoluteconfigurationbytimeinputwindowingalertcommonbytimeinput--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertPeakTrafficAbsoluteConfigurationByTimeInput.",(0,a.jsx)("b",{children:"windowing"})]})}),(0,a.jsx)(u,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/alert-common-by-time-input",children:(0,a.jsx)(t.code,{children:"AlertCommonByTimeInput!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsx)(t.p,{children:"Common configuration for requests window type"}),"\n",(0,a.jsxs)(t.h4,{id:"alertpeaktrafficabsoluteconfigurationbytimeinputcommonalertcommonconfigurationinput--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertPeakTrafficAbsoluteConfigurationByTimeInput.",(0,a.jsx)("b",{children:"common"})]})}),(0,a.jsx)(u,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/alert-common-configuration-input",children:(0,a.jsx)(t.code,{children:"AlertCommonConfigurationInput!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsx)(t.p,{children:"Common configuration alert"}),"\n",(0,a.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/api/types/inputs/alert-peak-traffic-absolute-by-time-input",children:(0,a.jsx)(t.code,{children:"AlertPeakTrafficAbsoluteByTimeInput"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"})]})]})}function g(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}},21020:(e,t,n)=>{var i=n(96540),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var i,o={},c=null,u=null;for(i in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)r.call(t,i)&&!l.hasOwnProperty(i)&&(o[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===o[i]&&(o[i]=t[i]);return{$$typeof:a,type:e,key:c,ref:u,props:o,_owner:s.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var i=n(96540);const a={},o=i.createContext(a);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);
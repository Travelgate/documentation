/*! For license information please see 85e663b4.2ed57951.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[71320],{50846:(e,r,t)=>{t.r(r),t.d(r,{Badge:()=>p,Bullet:()=>c,Details:()=>g,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>o,default:()=>b,frontMatter:()=>l,metadata:()=>a,toc:()=>y});const a=JSON.parse('{"id":"types/inputs/alert-error-rate-relative-by-requests-input","title":"AlertErrorRateRelativeByRequestsInput","description":"No description","source":"@site/api/types/inputs/alert-error-rate-relative-by-requests-input.mdx","sourceDirName":"types/inputs","slug":"/types/inputs/alert-error-rate-relative-by-requests-input","permalink":"/api/types/inputs/alert-error-rate-relative-by-requests-input","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"alert-error-rate-relative-by-requests-input","title":"AlertErrorRateRelativeByRequestsInput"},"sidebar":"schemaSidebar","previous":{"title":"AlertErrorRateComparativeConfigurationByTimeInput","permalink":"/api/types/inputs/alert-error-rate-comparative-configuration-by-time-input"},"next":{"title":"AlertErrorRateRelativeByTimeInput","permalink":"/api/types/inputs/alert-error-rate-relative-by-time-input"}}');var s=t(74848),n=t(28453),i=t(96540);const l={id:"alert-error-rate-relative-by-requests-input",title:"AlertErrorRateRelativeByRequestsInput"},o=void 0,d={},c=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),u=e=>(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),p=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{className:e.class,children:e.text})}),g=({dataOpen:e,dataClose:r,children:t,startOpen:a=!1})=>{const[n,l]=(0,i.useState)(a);return(0,s.jsxs)("details",{...n?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:n?e:r}),n&&t]})},y=[{value:"Fields",id:"fields",level:3},{value:'<code>AlertErrorRateRelativeByRequestsInput.<b>name</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"alerterrorraterelativebyrequestsinputnamestring-",level:4},{value:'<code>AlertErrorRateRelativeByRequestsInput.<b>description</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"alerterrorraterelativebyrequestsinputdescriptionstring-",level:4},{value:'<code>AlertErrorRateRelativeByRequestsInput.<b>configuration</b></code><Bullet></Bullet><code>AlertErrorRateRelativeConfigurationByRequestsInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alerterrorraterelativebyrequestsinputconfigurationalerterrorraterelativeconfigurationbyrequestsinput--",level:4},{value:'<code>AlertErrorRateRelativeByRequestsInput.<b>isActive</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alerterrorraterelativebyrequestsinputisactiveboolean--",level:4},{value:'<code>AlertErrorRateRelativeByRequestsInput.<b>group</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alerterrorraterelativebyrequestsinputgroupid--",level:4}];function h(e){const r={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:"No description"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-graphql",children:"input AlertErrorRateRelativeByRequestsInput {\n  name: String\n  description: String\n  configuration: AlertErrorRateRelativeConfigurationByRequestsInput!\n  isActive: Boolean!\n  group: ID!\n}\n"})}),"\n",(0,s.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(r.h4,{id:"alerterrorraterelativebyrequestsinputnamestring-",children:[(0,s.jsx)(r.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertErrorRateRelativeByRequestsInput.",(0,s.jsx)("b",{children:"name"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(r.a,{href:"/api/types/scalars/string",children:(0,s.jsx)(r.code,{children:"String"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(r.p,{children:"Name of the alert"}),"\n",(0,s.jsxs)(r.h4,{id:"alerterrorraterelativebyrequestsinputdescriptionstring-",children:[(0,s.jsx)(r.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertErrorRateRelativeByRequestsInput.",(0,s.jsx)("b",{children:"description"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(r.a,{href:"/api/types/scalars/string",children:(0,s.jsx)(r.code,{children:"String"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(r.p,{children:"Description of the alert"}),"\n",(0,s.jsxs)(r.h4,{id:"alerterrorraterelativebyrequestsinputconfigurationalerterrorraterelativeconfigurationbyrequestsinput--",children:[(0,s.jsx)(r.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertErrorRateRelativeByRequestsInput.",(0,s.jsx)("b",{children:"configuration"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(r.a,{href:"/api/types/inputs/alert-error-rate-relative-configuration-by-requests-input",children:(0,s.jsx)(r.code,{children:"AlertErrorRateRelativeConfigurationByRequestsInput!"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,s.jsx)(r.p,{children:"Configuration of the alert"}),"\n",(0,s.jsxs)(r.h4,{id:"alerterrorraterelativebyrequestsinputisactiveboolean--",children:[(0,s.jsx)(r.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertErrorRateRelativeByRequestsInput.",(0,s.jsx)("b",{children:"isActive"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(r.a,{href:"/api/types/scalars/boolean",children:(0,s.jsx)(r.code,{children:"Boolean!"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(r.p,{children:"To enable or desable the alert"}),"\n",(0,s.jsxs)(r.h4,{id:"alerterrorraterelativebyrequestsinputgroupid--",children:[(0,s.jsx)(r.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertErrorRateRelativeByRequestsInput.",(0,s.jsx)("b",{children:"group"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(r.a,{href:"/api/types/scalars/id",children:(0,s.jsx)(r.code,{children:"ID!"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(r.p,{children:"groups where the alert is setted"})]})}function b(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},21020:(e,r,t)=>{var a=t(96540),s=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var a,n={},d=null,c=null;for(a in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(c=r.ref),r)i.call(r,a)&&!o.hasOwnProperty(a)&&(n[a]=r[a]);if(e&&e.defaultProps)for(a in r=e.defaultProps)void 0===n[a]&&(n[a]=r[a]);return{$$typeof:s,type:e,key:d,ref:c,props:n,_owner:l.current}}r.Fragment=n,r.jsx=d,r.jsxs=d},74848:(e,r,t)=>{e.exports=t(21020)},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>l});var a=t(96540);const s={},n=a.createContext(s);function i(e){const r=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(n.Provider,{value:r},e.children)}}}]);
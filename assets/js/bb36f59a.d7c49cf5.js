/*! For license information please see bb36f59a.d7c49cf5.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[88353],{99978:(e,t,i)=>{i.r(t),i.d(t,{Badge:()=>u,Bullet:()=>o,Details:()=>g,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>c,default:()=>b,frontMatter:()=>s,metadata:()=>r,toc:()=>y});const r=JSON.parse('{"id":"types/inputs/alert-price-relative-by-time-input","title":"AlertPriceRelativeByTimeInput","description":"No description","source":"@site/api/types/inputs/alert-price-relative-by-time-input.mdx","sourceDirName":"types/inputs","slug":"/types/inputs/alert-price-relative-by-time-input","permalink":"/api/types/inputs/alert-price-relative-by-time-input","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"alert-price-relative-by-time-input","title":"AlertPriceRelativeByTimeInput"},"sidebar":"schemaSidebar","previous":{"title":"AlertPriceRelativeByRequestsInput","permalink":"/api/types/inputs/alert-price-relative-by-requests-input"},"next":{"title":"AlertPriceRelativeConfigurationByRequestsInput","permalink":"/api/types/inputs/alert-price-relative-configuration-by-requests-input"}}');var n=i(74848),a=i(28453),l=i(96540);const s={id:"alert-price-relative-by-time-input",title:"AlertPriceRelativeByTimeInput"},c=void 0,d={},o=()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),u=e=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{className:e.class,children:e.text})}),g=({dataOpen:e,dataClose:t,children:i,startOpen:r=!1})=>{const[a,s]=(0,l.useState)(r);return(0,n.jsxs)("details",{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"},children:a?e:t}),a&&i]})},y=[{value:"Fields",id:"fields",level:3},{value:'<code>AlertPriceRelativeByTimeInput.<b>name</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"alertpricerelativebytimeinputnamestring-",level:4},{value:'<code>AlertPriceRelativeByTimeInput.<b>description</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"alertpricerelativebytimeinputdescriptionstring-",level:4},{value:'<code>AlertPriceRelativeByTimeInput.<b>configuration</b></code><Bullet></Bullet><code>AlertPriceRelativeConfigurationByTimeInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertpricerelativebytimeinputconfigurationalertpricerelativeconfigurationbytimeinput--",level:4},{value:'<code>AlertPriceRelativeByTimeInput.<b>isActive</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertpricerelativebytimeinputisactiveboolean--",level:4},{value:'<code>AlertPriceRelativeByTimeInput.<b>group</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertpricerelativebytimeinputgroupid--",level:4}];function h(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"No description"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"input AlertPriceRelativeByTimeInput {\n  name: String\n  description: String\n  configuration: AlertPriceRelativeConfigurationByTimeInput!\n  isActive: Boolean!\n  group: ID!\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.h4,{id:"alertpricerelativebytimeinputnamestring-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertPriceRelativeByTimeInput.",(0,n.jsx)("b",{children:"name"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,n.jsx)(t.code,{children:"String"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.p,{children:"Name of the alert"}),"\n",(0,n.jsxs)(t.h4,{id:"alertpricerelativebytimeinputdescriptionstring-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertPriceRelativeByTimeInput.",(0,n.jsx)("b",{children:"description"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,n.jsx)(t.code,{children:"String"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.p,{children:"Description of the alert"}),"\n",(0,n.jsxs)(t.h4,{id:"alertpricerelativebytimeinputconfigurationalertpricerelativeconfigurationbytimeinput--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertPriceRelativeByTimeInput.",(0,n.jsx)("b",{children:"configuration"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(t.a,{href:"/api/types/inputs/alert-price-relative-configuration-by-time-input",children:(0,n.jsx)(t.code,{children:"AlertPriceRelativeConfigurationByTimeInput!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,n.jsx)(t.p,{children:"Configuration of the alert"}),"\n",(0,n.jsxs)(t.h4,{id:"alertpricerelativebytimeinputisactiveboolean--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertPriceRelativeByTimeInput.",(0,n.jsx)("b",{children:"isActive"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(t.a,{href:"/api/types/scalars/boolean",children:(0,n.jsx)(t.code,{children:"Boolean!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.p,{children:"To enable or desable the alert"}),"\n",(0,n.jsxs)(t.h4,{id:"alertpricerelativebytimeinputgroupid--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertPriceRelativeByTimeInput.",(0,n.jsx)("b",{children:"group"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(t.a,{href:"/api/types/scalars/id",children:(0,n.jsx)(t.code,{children:"ID!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.p,{children:"groups where the alert is setted"})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},21020:(e,t,i)=>{var r=i(96540),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,i){var r,a={},d=null,o=null;for(r in void 0!==i&&(d=""+i),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(o=t.ref),t)l.call(t,r)&&!c.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:n,type:e,key:d,ref:o,props:a,_owner:s.current}}t.Fragment=a,t.jsx=d,t.jsxs=d},74848:(e,t,i)=>{e.exports=i(21020)},28453:(e,t,i)=>{i.d(t,{R:()=>l,x:()=>s});var r=i(96540);const n={},a=r.createContext(n);function l(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);
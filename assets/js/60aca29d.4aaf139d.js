/*! For license information please see 60aca29d.4aaf139d.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[29719],{15069:(e,o,t)=>{t.r(o),t.d(o,{Badge:()=>f,Bullet:()=>d,Details:()=>b,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"types/objects/look-2-book","title":"Look2book","description":"No description","source":"@site/api/types/objects/look-2-book.mdx","sourceDirName":"types/objects","slug":"/types/objects/look-2-book","permalink":"/api/types/objects/look-2-book","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"look-2-book","title":"Look2book"},"sidebar":"schemaSidebar","previous":{"title":"Logging","permalink":"/api/types/objects/logging"},"next":{"title":"MacroPermissionData","permalink":"/api/types/objects/macro-permission-data"}}');var n=t(74848),a=t(28453),s=t(96540);const l={id:"look-2-book",title:"Look2book"},c=void 0,i={},d=()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),f=e=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{className:e.class,children:e.text})}),b=({dataOpen:e,dataClose:o,children:t,startOpen:r=!1})=>{const[a,l]=(0,s.useState)(r);return(0,n.jsxs)("details",{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:a?e:o}),a&&t]})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>Look2book.<b>ratio</b></code><Bullet></Bullet><code>Float</code> <Badge class="badge badge--secondary"></Badge>',id:"look2bookratiofloat-",level:4},{value:'<code>Look2book.<b>improvementPercentage</b></code><Bullet></Bullet><code>Float</code> <Badge class="badge badge--secondary"></Badge>',id:"look2bookimprovementpercentagefloat-",level:4},{value:"Member Of",id:"member-of",level:3}];function h(e){const o={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.p,{children:"No description"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-graphql",children:"type Look2book {\n  ratio: Float\n  improvementPercentage: Float\n}\n"})}),"\n",(0,n.jsx)(o.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(o.h4,{id:"look2bookratiofloat-",children:[(0,n.jsx)(o.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Look2book.",(0,n.jsx)("b",{children:"ratio"})]})}),(0,n.jsx)(d,{}),(0,n.jsx)(o.a,{href:"/api/types/scalars/float",children:(0,n.jsx)(o.code,{children:"Float"})})," ",(0,n.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(o.h4,{id:"look2bookimprovementpercentagefloat-",children:[(0,n.jsx)(o.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Look2book.",(0,n.jsx)("b",{children:"improvementPercentage"})]})}),(0,n.jsx)(d,{}),(0,n.jsx)(o.a,{href:"/api/types/scalars/float",children:(0,n.jsx)(o.code,{children:"Float"})})," ",(0,n.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(o.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.a,{href:"/api/types/objects/performance-data",children:(0,n.jsx)(o.code,{children:"PerformanceData"})})," ",(0,n.jsx)(f,{class:"badge badge--secondary",text:"object"})]})]})}function u(e={}){const{wrapper:o}={...(0,a.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},21020:(e,o,t)=>{var r=t(96540),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,o,t){var r,a={},i=null,d=null;for(r in void 0!==t&&(i=""+t),void 0!==o.key&&(i=""+o.key),void 0!==o.ref&&(d=o.ref),o)s.call(o,r)&&!c.hasOwnProperty(r)&&(a[r]=o[r]);if(e&&e.defaultProps)for(r in o=e.defaultProps)void 0===a[r]&&(a[r]=o[r]);return{$$typeof:n,type:e,key:i,ref:d,props:a,_owner:l.current}}o.Fragment=a,o.jsx=i,o.jsxs=i},74848:(e,o,t)=>{e.exports=t(21020)},28453:(e,o,t)=>{t.d(o,{R:()=>s,x:()=>l});var r=t(96540);const n={},a=r.createContext(n);function s(e){const o=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(a.Provider,{value:o},e.children)}}}]);
/*! For license information please see 19e0801e.6a8002b2.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[57756],{51550:(e,n,i)=>{i.r(n),i.d(n,{Badge:()=>u,Bullet:()=>c,Details:()=>g,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>t,toc:()=>y});const t=JSON.parse('{"id":"types/inputs/apikey-organization-input","title":"ApikeyOrganizationInput","description":"No description","source":"@site/api/types/inputs/apikey-organization-input.mdx","sourceDirName":"types/inputs","slug":"/types/inputs/apikey-organization-input","permalink":"/api/types/inputs/apikey-organization-input","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"apikey-organization-input","title":"ApikeyOrganizationInput"},"sidebar":"schemaSidebar","previous":{"title":"APIKeyCreateInput","permalink":"/api/types/inputs/apikey-create-input"},"next":{"title":"ApikeyServiceRole","permalink":"/api/types/inputs/apikey-service-role"}}');var a=i(74848),r=i(28453),s=i(96540);const o={id:"apikey-organization-input",title:"ApikeyOrganizationInput"},l=void 0,d={},c=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),u=e=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{className:e.class,children:e.text})}),g=({dataOpen:e,dataClose:n,children:i,startOpen:t=!1})=>{const[r,o]=(0,s.useState)(t);return(0,a.jsxs)("details",{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)("summary",{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:r?e:n}),r&&i]})},y=[{value:"Fields",id:"fields",level:3},{value:'<code>ApikeyOrganizationInput.<b>organization</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"apikeyorganizationinputorganizationid--",level:4},{value:'<code>ApikeyOrganizationInput.<b>apikey</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"apikeyorganizationinputapikeystring--",level:4}];function h(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"No description"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"input ApikeyOrganizationInput {\n  organization: ID!\n  apikey: String!\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(n.h4,{id:"apikeyorganizationinputorganizationid--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ApikeyOrganizationInput.",(0,a.jsx)("b",{children:"organization"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(n.a,{href:"/api/types/scalars/id",children:(0,a.jsx)(n.code,{children:"ID!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(n.p,{children:"Organization where apikey belongs to"}),"\n",(0,a.jsxs)(n.h4,{id:"apikeyorganizationinputapikeystring--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ApikeyOrganizationInput.",(0,a.jsx)("b",{children:"apikey"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(n.a,{href:"/api/types/scalars/string",children:(0,a.jsx)(n.code,{children:"String!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(n.p,{children:"Apikey's sufix"})]})}function f(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},21020:(e,n,i)=>{var t=i(96540),a=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,i){var t,r={},d=null,c=null;for(t in void 0!==i&&(d=""+i),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)s.call(n,t)&&!l.hasOwnProperty(t)&&(r[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===r[t]&&(r[t]=n[t]);return{$$typeof:a,type:e,key:d,ref:c,props:r,_owner:o.current}}n.Fragment=r,n.jsx=d,n.jsxs=d},74848:(e,n,i)=>{e.exports=i(21020)},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>o});var t=i(96540);const a={},r=t.createContext(a);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);
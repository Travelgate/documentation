/*! For license information please see 33824e6b.289973f3.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[75314],{57094:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>l,Details:()=>f,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>s,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"types/inputs/activation-read-input","title":"ActivationReadInput","description":"No description","source":"@site/api/types/inputs/activation-read-input.mdx","sourceDirName":"types/inputs","slug":"/types/inputs/activation-read-input","permalink":"/api/types/inputs/activation-read-input","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"activation-read-input","title":"ActivationReadInput"},"sidebar":"schemaSidebar","previous":{"title":"ActivationConnectInput","permalink":"/api/types/inputs/activation-connect-input"},"next":{"title":"ActivationValidateInput","permalink":"/api/types/inputs/activation-validate-input"}}');var i=n(74848),r=n(28453),o=n(96540);const s={id:"activation-read-input",title:"ActivationReadInput"},d=void 0,c={},l=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),u=e=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{className:e.class,children:e.text})}),f=({dataOpen:e,dataClose:t,children:n,startOpen:a=!1})=>{const[r,s]=(0,o.useState)(a);return(0,i.jsxs)("details",{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"},children:r?e:t}),r&&n]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>ActivationReadInput.<b>organizationBuyerCode</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"activationreadinputorganizationbuyercodeid-",level:4},{value:'<code>ActivationReadInput.<b>organizationSellerCode</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"activationreadinputorganizationsellercodeid-",level:4}];function v(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"No description"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:"input ActivationReadInput {\n  organizationBuyerCode: ID\n  organizationSellerCode: ID\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(t.h4,{id:"activationreadinputorganizationbuyercodeid-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivationReadInput.",(0,i.jsx)("b",{children:"organizationBuyerCode"})]})}),(0,i.jsx)(l,{}),(0,i.jsx)(t.a,{href:"/api/types/scalars/id",children:(0,i.jsx)(t.code,{children:"ID"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsxs)(t.h4,{id:"activationreadinputorganizationsellercodeid-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivationReadInput.",(0,i.jsx)("b",{children:"organizationSellerCode"})]})}),(0,i.jsx)(l,{}),(0,i.jsx)(t.a,{href:"/api/types/scalars/id",children:(0,i.jsx)(t.code,{children:"ID"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]})]})}function x(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(v,{...e})}):v(e)}},21020:(e,t,n)=>{var a=n(96540),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var a,r={},c=null,l=null;for(a in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)o.call(t,a)&&!d.hasOwnProperty(a)&&(r[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===r[a]&&(r[a]=t[a]);return{$$typeof:i,type:e,key:c,ref:l,props:r,_owner:s.current}}t.Fragment=r,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var a=n(96540);const i={},r=a.createContext(i);function o(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);
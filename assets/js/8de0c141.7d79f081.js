/*! For license information please see 8de0c141.7d79f081.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[66713],{2706:(e,n,a)=>{a.r(n),a.d(n,{Badge:()=>g,Bullet:()=>l,Details:()=>u,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>i,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"types/objects/speed-organization","title":"SpeedOrganization","description":"No description","source":"@site/api/types/objects/speed-organization.mdx","sourceDirName":"types/objects","slug":"/types/objects/speed-organization","permalink":"/api/types/objects/speed-organization","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"speed-organization","title":"SpeedOrganization"},"sidebar":"schemaSidebar","previous":{"title":"SpeedMutation","permalink":"/api/types/objects/speed-mutation"},"next":{"title":"SpeedQuery","permalink":"/api/types/objects/speed-query"}}');var o=a(74848),s=a(28453),r=a(96540);const i={id:"speed-organization",title:"SpeedOrganization"},d=void 0,c={},l=()=>(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),g=e=>(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("span",{className:e.class,children:e.text})}),u=({dataOpen:e,dataClose:n,children:a,startOpen:t=!1})=>{const[s,i]=(0,r.useState)(t);return(0,o.jsxs)("details",{...s?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:s?e:n}),s&&a]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>SpeedOrganization.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"speedorganizationcodeid--",level:4},{value:'<code>SpeedOrganization.<b>organization</b></code><Bullet></Bullet><code>Organization!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"speedorganizationorganizationorganization--",level:4},{value:"Member Of",id:"member-of",level:3}];function f(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"No description"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:"type SpeedOrganization {\n  code: ID!\n  organization: Organization!\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(n.h4,{id:"speedorganizationcodeid--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["SpeedOrganization.",(0,o.jsx)("b",{children:"code"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/api/types/scalars/id",children:(0,o.jsx)(n.code,{children:"ID!"})})," ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(n.h4,{id:"speedorganizationorganizationorganization--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["SpeedOrganization.",(0,o.jsx)("b",{children:"organization"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/api/types/objects/organization",children:(0,o.jsx)(n.code,{children:"Organization!"})})," ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/api/types/objects/speed-connection-data",children:(0,o.jsx)(n.code,{children:"SpeedConnectionData"})})," ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(f,{...e})}):f(e)}},21020:(e,n,a)=>{var t=a(96540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,a){var t,s={},c=null,l=null;for(t in void 0!==a&&(c=""+a),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(l=n.ref),n)r.call(n,t)&&!d.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:o,type:e,key:c,ref:l,props:s,_owner:i.current}}n.Fragment=s,n.jsx=c,n.jsxs=c},74848:(e,n,a)=>{e.exports=a(21020)},28453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>i});var t=a(96540);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);
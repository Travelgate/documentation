/*! For license information please see 34f42b53.6bb4a116.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[40576],{16627:(e,d,s)=>{s.r(d),s.d(d,{Badge:()=>g,Bullet:()=>i,Details:()=>p,SpecifiedBy:()=>u,assets:()=>o,contentTitle:()=>n,default:()=>b,frontMatter:()=>l,metadata:()=>a,toc:()=>x});const a=JSON.parse('{"id":"types/objects/product","title":"Product","description":"An APIs collection.","source":"@site/api/types/objects/product.mdx","sourceDirName":"types/objects","slug":"/types/objects/product","permalink":"/api/types/objects/product","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"product","title":"Product"},"sidebar":"schemaSidebar","previous":{"title":"ProductEdge","permalink":"/api/types/objects/product-edge"},"next":{"title":"ProfileConnection","permalink":"/api/types/objects/profile-connection"}}');var t=s(74848),c=s(28453),r=s(96540);const l={id:"product",title:"Product"},n=void 0,o={},i=()=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),u=e=>(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),g=e=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{className:e.class,children:e.text})}),p=({dataOpen:e,dataClose:d,children:s,startOpen:a=!1})=>{const[c,l]=(0,r.useState)(a);return(0,t.jsxs)("details",{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:d}),c&&s]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>Product.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"productcodeid--",level:4},{value:'<code>Product.<b>productData</b></code><Bullet></Bullet><code>ProductData!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"productproductdataproductdata--",level:4},{value:'<code>Product.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"productadvisemessageadvisemessage--",level:4},{value:'<code>Product.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"productadvisemessageleveladvisemessagelevel--",level:5},{value:'<code>Product.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"productcreatedatdatetime--",level:4},{value:'<code>Product.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"productupdatedatdatetime--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Node</code> <Badge class="badge badge--secondary"></Badge>',id:"node-",level:4},{value:"Member Of",id:"member-of",level:3}];function h(e){const d={a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.p,{children:"An APIs collection."}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-graphql",children:"type Product implements Node {\n  code: ID!\n  productData: ProductData!\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  createdAt: DateTime!\n  updatedAt: DateTime!\n}\n"})}),"\n",(0,t.jsx)(d.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(d.h4,{id:"productcodeid--",children:[(0,t.jsx)(d.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Product.",(0,t.jsx)("b",{children:"code"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(d.a,{href:"/api/types/scalars/id",children:(0,t.jsx)(d.code,{children:"ID!"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(d.h4,{id:"productproductdataproductdata--",children:[(0,t.jsx)(d.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Product.",(0,t.jsx)("b",{children:"productData"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(d.a,{href:"/api/types/objects/product-data",children:(0,t.jsx)(d.code,{children:"ProductData!"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(d.h4,{id:"productadvisemessageadvisemessage--",children:[(0,t.jsx)(d.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Product.",(0,t.jsx)("b",{children:"adviseMessage"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(d.a,{href:"/api/types/objects/advise-message",children:(0,t.jsx)(d.code,{children:"[AdviseMessage!]"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(d.p,{children:"List of advise messages."}),"\n",(0,t.jsxs)(d.h5,{id:"productadvisemessageleveladvisemessagelevel--",children:[(0,t.jsx)(d.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Product.adviseMessage.",(0,t.jsx)("b",{children:"level"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(d.a,{href:"/api/types/enums/advise-message-level",children:(0,t.jsx)(d.code,{children:"[AdviseMessageLevel]"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,t.jsxs)(d.h4,{id:"productcreatedatdatetime--",children:[(0,t.jsx)(d.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Product.",(0,t.jsx)("b",{children:"createdAt"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(d.a,{href:"/api/types/scalars/date-time",children:(0,t.jsx)(d.code,{children:"DateTime!"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(d.p,{children:"Date created"}),"\n",(0,t.jsxs)(d.h4,{id:"productupdatedatdatetime--",children:[(0,t.jsx)(d.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Product.",(0,t.jsx)("b",{children:"updatedAt"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(d.a,{href:"/api/types/scalars/date-time",children:(0,t.jsx)(d.code,{children:"DateTime!"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(d.p,{children:"Date updated"}),"\n",(0,t.jsx)(d.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,t.jsxs)(d.h4,{id:"node-",children:[(0,t.jsx)(d.a,{href:"/api/types/interfaces/node",children:(0,t.jsx)(d.code,{children:"Node"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,t.jsx)(d.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(d.p,{children:[(0,t.jsx)(d.a,{href:"/api/types/objects/audit-rule-data",children:(0,t.jsx)(d.code,{children:"AuditRuleData"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(i,{}),(0,t.jsx)(d.a,{href:"/api/types/objects/product-edge",children:(0,t.jsx)(d.code,{children:"ProductEdge"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"})]})]})}function b(e={}){const{wrapper:d}={...(0,c.R)(),...e.components};return d?(0,t.jsx)(d,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},21020:(e,d,s)=>{var a=s(96540),t=Symbol.for("react.element"),c=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,l=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n={key:!0,ref:!0,__self:!0,__source:!0};function o(e,d,s){var a,c={},o=null,i=null;for(a in void 0!==s&&(o=""+s),void 0!==d.key&&(o=""+d.key),void 0!==d.ref&&(i=d.ref),d)r.call(d,a)&&!n.hasOwnProperty(a)&&(c[a]=d[a]);if(e&&e.defaultProps)for(a in d=e.defaultProps)void 0===c[a]&&(c[a]=d[a]);return{$$typeof:t,type:e,key:o,ref:i,props:c,_owner:l.current}}d.Fragment=c,d.jsx=o,d.jsxs=o},74848:(e,d,s)=>{e.exports=s(21020)},28453:(e,d,s)=>{s.d(d,{R:()=>r,x:()=>l});var a=s(96540);const t={},c=a.createContext(t);function r(e){const d=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function l(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(c.Provider,{value:d},e.children)}}}]);
/*! For license information please see 39bdfb89.3529f996.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[70824],{69136:(e,a,s)=>{s.r(a),s.d(a,{Badge:()=>y,Bullet:()=>o,Details:()=>g,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>l,default:()=>x,frontMatter:()=>r,metadata:()=>d,toc:()=>h});const d=JSON.parse('{"id":"types/objects/apikeys-data","title":"ApikeysData","description":"Extended Apikeys information","source":"@site/api/types/objects/apikeys-data.mdx","sourceDirName":"types/objects","slug":"/types/objects/apikeys-data","permalink":"/api/types/objects/apikeys-data","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"apikeys-data","title":"ApikeysData"},"sidebar":"schemaSidebar","previous":{"title":"ApikeysConnection","permalink":"/api/types/objects/apikeys-connection"},"next":{"title":"ApikeysEdge","permalink":"/api/types/objects/apikeys-edge"}}');var n=s(74848),t=s(28453),i=s(96540);const r={id:"apikeys-data",title:"ApikeysData"},l=void 0,c={},o=()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),y=e=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{className:e.class,children:e.text})}),g=({dataOpen:e,dataClose:a,children:s,startOpen:d=!1})=>{const[t,r]=(0,i.useState)(d);return(0,n.jsxs)("details",{...t?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)("summary",{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:t?e:a}),t&&s]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>ApikeysData.<b>id</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"apikeysdataidid--",level:4},{value:'<code>ApikeysData.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"apikeysdatacodeid--",level:4},{value:'<code>ApikeysData.<b>label</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"apikeysdatalabelstring-",level:4},{value:'<code>ApikeysData.<b>isActive</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"apikeysdataisactiveboolean--",level:4},{value:'<code>ApikeysData.<b>organization</b></code><Bullet></Bullet><code>OrganizationsData</code> <Badge class="badge badge--secondary"></Badge>',id:"apikeysdataorganizationorganizationsdata-",level:4},{value:'<code>ApikeysData.<b>role</b></code><Bullet></Bullet><code>MembersRole!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"apikeysdatarolemembersrole--",level:4},{value:'<code>ApikeysData.<b>services</b></code><Bullet></Bullet><code>[ServiceRoles!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"apikeysdataservicesserviceroles--",level:4},{value:"Member Of",id:"member-of",level:3}];function b(e){const a={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"Extended Apikeys information"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-graphql",children:"type ApikeysData {\n  id: ID!\n  code: ID!\n  label: String\n  isActive: Boolean!\n  organization: OrganizationsData\n  role: MembersRole!\n  services: [ServiceRoles!]\n}\n"})}),"\n",(0,n.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(a.h4,{id:"apikeysdataidid--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ApikeysData.",(0,n.jsx)("b",{children:"id"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(a.a,{href:"/api/types/scalars/id",children:(0,n.jsx)(a.code,{children:"ID!"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(a.p,{children:"Apikeys unique ID. Format: integer."}),"\n",(0,n.jsxs)(a.h4,{id:"apikeysdatacodeid--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ApikeysData.",(0,n.jsx)("b",{children:"code"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(a.a,{href:"/api/types/scalars/id",children:(0,n.jsx)(a.code,{children:"ID!"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(a.p,{children:"Apikeys unique code"}),"\n",(0,n.jsxs)(a.h4,{id:"apikeysdatalabelstring-",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ApikeysData.",(0,n.jsx)("b",{children:"label"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(a.a,{href:"/api/types/scalars/string",children:(0,n.jsx)(a.code,{children:"String"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(a.p,{children:"Apikeys name"}),"\n",(0,n.jsxs)(a.h4,{id:"apikeysdataisactiveboolean--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ApikeysData.",(0,n.jsx)("b",{children:"isActive"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(a.a,{href:"/api/types/scalars/boolean",children:(0,n.jsx)(a.code,{children:"Boolean!"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(a.p,{children:"Indicates whether a Apikeys is active."}),"\n",(0,n.jsxs)(a.h4,{id:"apikeysdataorganizationorganizationsdata-",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ApikeysData.",(0,n.jsx)("b",{children:"organization"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(a.a,{href:"/api/types/objects/organizations-data",children:(0,n.jsx)(a.code,{children:"OrganizationsData"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(a.p,{children:"Organization associated to the Apikey"}),"\n",(0,n.jsxs)(a.h4,{id:"apikeysdatarolemembersrole--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ApikeysData.",(0,n.jsx)("b",{children:"role"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(a.a,{href:"/api/types/enums/members-role",children:(0,n.jsx)(a.code,{children:"MembersRole!"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsx)(a.p,{children:"Role associated to the Apikey"}),"\n",(0,n.jsxs)(a.h4,{id:"apikeysdataservicesserviceroles--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ApikeysData.",(0,n.jsx)("b",{children:"services"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(a.a,{href:"/api/types/objects/service-roles",children:(0,n.jsx)(a.code,{children:"[ServiceRoles!]"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(a.p,{children:"Services associated to the Apikey"}),"\n",(0,n.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"/api/types/objects/apikeys",children:(0,n.jsx)(a.code,{children:"Apikeys"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(b,{...e})}):b(e)}},21020:(e,a,s)=>{var d=s(96540),n=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,r=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,a,s){var d,t={},c=null,o=null;for(d in void 0!==s&&(c=""+s),void 0!==a.key&&(c=""+a.key),void 0!==a.ref&&(o=a.ref),a)i.call(a,d)&&!l.hasOwnProperty(d)&&(t[d]=a[d]);if(e&&e.defaultProps)for(d in a=e.defaultProps)void 0===t[d]&&(t[d]=a[d]);return{$$typeof:n,type:e,key:c,ref:o,props:t,_owner:r.current}}a.Fragment=t,a.jsx=c,a.jsxs=c},74848:(e,a,s)=>{e.exports=s(21020)},28453:(e,a,s)=>{s.d(a,{R:()=>i,x:()=>r});var d=s(96540);const n={},t=d.createContext(n);function i(e){const a=d.useContext(t);return d.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),d.createElement(t.Provider,{value:a},e.children)}}}]);
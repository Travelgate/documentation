/*! For license information please see fa6a7391.a7498e53.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[19303],{46182:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>o,Details:()=>p,SpecifiedBy:()=>h,assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>r,toc:()=>x});var n=a(74848),s=a(28453),d=a(96540);const i={id:"client-data",title:"ClientData"},l=void 0,r={id:"types/objects/client-data",title:"ClientData",description:"No description",source:"@site/api/types/objects/client-data.mdx",sourceDirName:"types/objects",slug:"/types/objects/client-data",permalink:"/api/types/objects/client-data",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"client-data",title:"ClientData"},sidebar:"schemaSidebar",previous:{title:"ClientConnection",permalink:"/api/types/objects/client-connection"},next:{title:"ClientEdge",permalink:"/api/types/objects/client-edge"}},c={},o=()=>{const e={span:"span",...(0,s.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const t={a:"a",...(0,s.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,s.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},p=({dataOpen:e,dataClose:t,children:a,startOpen:i=!1})=>{const l={details:"details",summary:"summary",...(0,s.R)()},[r,c]=(0,d.useState)(i);return(0,n.jsxs)(l.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(l.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:r?e:t}),r&&a]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>ClientData.<b>id</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"clientdataidid--",level:4},{value:'<code>ClientData.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"clientdatacodeid--",level:4},{value:'<code>ClientData.<b>name</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"clientdatanameid--",level:4},{value:'<code>ClientData.<b>isActive</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"clientdataisactiveboolean--",level:4},{value:'<code>ClientData.<b>group</b></code><Bullet></Bullet><code>Group</code> <Badge class="badge badge--secondary"></Badge>',id:"clientdatagroupgroup-",level:4},{value:'<code>ClientData.<b>owner</b></code><Bullet></Bullet><code>Organization</code> <Badge class="badge badge--secondary"></Badge>',id:"clientdataownerorganization-",level:4},{value:'<code>ClientData.<b>suppliers</b></code><Bullet></Bullet><code>SupplierConnection</code> <Badge class="badge badge--secondary"></Badge>',id:"clientdatasupplierssupplierconnection-",level:4},{value:'<code>ClientData.suppliers.<b>first</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"clientdatasuppliersfirstint-",level:5},{value:'<code>ClientData.suppliers.<b>last</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"clientdatasupplierslastint-",level:5},{value:'<code>ClientData.suppliers.<b>before</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"clientdatasuppliersbeforestring-",level:5},{value:'<code>ClientData.suppliers.<b>after</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"clientdatasuppliersafterstring-",level:5},{value:'<code>ClientData.suppliers.<b>filter</b></code><Bullet></Bullet><code>SupplierFilter</code> <Badge class="badge badge--secondary"></Badge>',id:"clientdatasuppliersfiltersupplierfilter-",level:5},{value:'<code>ClientData.<b>audits</b></code><Bullet></Bullet><code>EntityAuditConnection!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"clientdataauditsentityauditconnection--",level:4},{value:'<code>ClientData.audits.<b>where</b></code><Bullet></Bullet><code>EntityAuditWhereInput</code> <Badge class="badge badge--secondary"></Badge>',id:"clientdataauditswhereentityauditwhereinput-",level:5},{value:'<code>ClientData.audits.<b>orderBy</b></code><Bullet></Bullet><code>EntityAuditOrderByEnum</code> <Badge class="badge badge--secondary"></Badge>',id:"clientdataauditsorderbyentityauditorderbyenum-",level:5},{value:'<code>ClientData.<b>hubUser</b></code><Bullet></Bullet><code>HubUserData</code> <Badge class="badge badge--secondary"></Badge>',id:"clientdatahubuserhubuserdata-",level:4},{value:"Member Of",id:"member-of",level:3},{value:"Implemented By",id:"implemented-by",level:3}];function b(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"No description"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"type ClientData {\n  id: ID!\n  code: ID!\n  name: ID!\n  isActive: Boolean!\n  group: Group\n  owner: Organization\n  suppliers(\n    first: Int\n    last: Int\n    before: String\n    after: String\n    filter: SupplierFilter\n  ): SupplierConnection\n  audits(\n    where: EntityAuditWhereInput\n    orderBy: EntityAuditOrderByEnum\n  ): EntityAuditConnection!\n  hubUser: HubUserData\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.h4,{id:"clientdataidid--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ClientData.",(0,n.jsx)("b",{children:"id"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(t.a,{href:"/api/types/scalars/id",children:(0,n.jsx)(t.code,{children:"ID!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.p,{children:"ID unique identifier of a Client. Format: integer."}),"\n",(0,n.jsxs)(t.h4,{id:"clientdatacodeid--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ClientData.",(0,n.jsx)("b",{children:"code"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(t.a,{href:"/api/types/scalars/id",children:(0,n.jsx)(t.code,{children:"ID!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.p,{children:'Client unique code. Format: "cliX" where X = ID'}),"\n",(0,n.jsxs)(t.h4,{id:"clientdatanameid--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ClientData.",(0,n.jsx)("b",{children:"name"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(t.a,{href:"/api/types/scalars/id",children:(0,n.jsx)(t.code,{children:"ID!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.p,{children:"Client unique name"}),"\n",(0,n.jsxs)(t.h4,{id:"clientdataisactiveboolean--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ClientData.",(0,n.jsx)("b",{children:"isActive"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(t.a,{href:"/api/types/scalars/boolean",children:(0,n.jsx)(t.code,{children:"Boolean!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.p,{children:"Indicates whether a Client is active or inactive"}),"\n",(0,n.jsxs)(t.h4,{id:"clientdatagroupgroup-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ClientData.",(0,n.jsx)("b",{children:"group"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(t.a,{href:"/api/types/objects/group",children:(0,n.jsx)(t.code,{children:"Group"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(t.p,{children:"Indicates the group where the Client belongs. By definition a Client can belongs only to one group."}),"\n",(0,n.jsxs)(t.h4,{id:"clientdataownerorganization-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ClientData.",(0,n.jsx)("b",{children:"owner"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(t.a,{href:"/api/types/objects/organization",children:(0,n.jsx)(t.code,{children:"Organization"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(t.p,{children:"Organization that owns the Client"}),"\n",(0,n.jsxs)(t.h4,{id:"clientdatasupplierssupplierconnection-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ClientData.",(0,n.jsx)("b",{children:"suppliers"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(t.a,{href:"/api/types/objects/supplier-connection",children:(0,n.jsx)(t.code,{children:"SupplierConnection"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(t.p,{children:'Suppliers that belong to the same group as the client.\nUsed to find out which suppliers are likely to have connected with this client on some occasion.\nNOTE: Better to use the equivalent query suppliersByGroupCodes(groupCodes:["xxx"])'}),"\n",(0,n.jsxs)(t.h5,{id:"clientdatasuppliersfirstint-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ClientData.suppliers.",(0,n.jsx)("b",{children:"first"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(t.a,{href:"/api/types/scalars/int",children:(0,n.jsx)(t.code,{children:"Int"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.h5,{id:"clientdatasupplierslastint-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ClientData.suppliers.",(0,n.jsx)("b",{children:"last"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(t.a,{href:"/api/types/scalars/int",children:(0,n.jsx)(t.code,{children:"Int"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.h5,{id:"clientdatasuppliersbeforestring-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ClientData.suppliers.",(0,n.jsx)("b",{children:"before"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,n.jsx)(t.code,{children:"String"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.h5,{id:"clientdatasuppliersafterstring-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ClientData.suppliers.",(0,n.jsx)("b",{children:"after"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,n.jsx)(t.code,{children:"String"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.h5,{id:"clientdatasuppliersfiltersupplierfilter-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ClientData.suppliers.",(0,n.jsx)("b",{children:"filter"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(t.a,{href:"/api/types/inputs/supplier-filter",children:(0,n.jsx)(t.code,{children:"SupplierFilter"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,n.jsxs)(t.h4,{id:"clientdataauditsentityauditconnection--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ClientData.",(0,n.jsx)("b",{children:"audits"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(t.a,{href:"/api/types/objects/entity-audit-connection",children:(0,n.jsx)(t.code,{children:"EntityAuditConnection!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(t.p,{children:"Audits it shows the client's change history"}),"\n",(0,n.jsxs)(t.h5,{id:"clientdataauditswhereentityauditwhereinput-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ClientData.audits.",(0,n.jsx)("b",{children:"where"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(t.a,{href:"/api/types/inputs/entity-audit-where-input",children:(0,n.jsx)(t.code,{children:"EntityAuditWhereInput"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,n.jsxs)(t.h5,{id:"clientdataauditsorderbyentityauditorderbyenum-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ClientData.audits.",(0,n.jsx)("b",{children:"orderBy"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(t.a,{href:"/api/types/enums/entity-audit-order-by-enum",children:(0,n.jsx)(t.code,{children:"EntityAuditOrderByEnum"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsxs)(t.h4,{id:"clientdatahubuserhubuserdata-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ClientData.",(0,n.jsx)("b",{children:"hubUser"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(t.a,{href:"/api/types/objects/hub-user-data",children:(0,n.jsx)(t.code,{children:"HubUserData"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/api/types/objects/client",children:(0,n.jsx)(t.code,{children:"Client"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(t.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/api/types/unions/entity-data",children:(0,n.jsx)(t.code,{children:"EntityData"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"union"})]})]})}function g(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(b,{...e})}):b(e)}},21020:(e,t,a)=>{var n=a(96540),s=Symbol.for("react.element"),d=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,a){var n,d={},c=null,o=null;for(n in void 0!==a&&(c=""+a),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(o=t.ref),t)i.call(t,n)&&!r.hasOwnProperty(n)&&(d[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===d[n]&&(d[n]=t[n]);return{$$typeof:s,type:e,key:c,ref:o,props:d,_owner:l.current}}t.Fragment=d,t.jsx=c,t.jsxs=c},74848:(e,t,a)=>{e.exports=a(21020)},28453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>l});var n=a(96540);const s={},d=n.createContext(s);function i(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);
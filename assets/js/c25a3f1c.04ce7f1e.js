/*! For license information please see c25a3f1c.04ce7f1e.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[51097],{39797:(e,s,a)=>{a.r(s),a.d(s,{Badge:()=>g,Bullet:()=>o,Details:()=>j,SpecifiedBy:()=>p,assets:()=>n,contentTitle:()=>c,default:()=>b,frontMatter:()=>i,metadata:()=>d,toc:()=>x});const d=JSON.parse('{"id":"types/objects/supplier","title":"Supplier","description":"A Supplier is a Partner who is connected to TravelgateX on the supply side in order to sell their product to connected Buyers","source":"@site/api/types/objects/supplier.mdx","sourceDirName":"types/objects","slug":"/types/objects/supplier","permalink":"/api/types/objects/supplier","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"supplier","title":"Supplier"},"sidebar":"schemaSidebar","previous":{"title":"SupplierEdge","permalink":"/api/types/objects/supplier-edge"},"next":{"title":"Surcharge","permalink":"/api/types/objects/surcharge"}}');var t=a(74848),r=a(28453),l=a(96540);const i={id:"supplier",title:"Supplier"},c=void 0,n={},o=()=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),g=e=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{className:e.class,children:e.text})}),j=({dataOpen:e,dataClose:s,children:a,startOpen:d=!1})=>{const[r,i]=(0,l.useState)(d);return(0,t.jsxs)("details",{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:r?e:s}),r&&a]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>Supplier.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"suppliercodeid--",level:4},{value:'<code>Supplier.<b>supplierData</b></code><Bullet></Bullet><code>SupplierData</code> <Badge class="badge badge--secondary"></Badge>',id:"suppliersupplierdatasupplierdata-",level:4},{value:'<code>Supplier.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"supplieradvisemessageadvisemessage--",level:4},{value:'<code>Supplier.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"supplieradvisemessageleveladvisemessagelevel--",level:5},{value:'<code>Supplier.<b>error</b></code><Bullet></Bullet><code>[Error!]</code> <Badge class="badge badge--deprecated badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"suppliererrorerror---",level:4},{value:'<code>Supplier.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"suppliercreatedatdatetime--",level:4},{value:'<code>Supplier.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"supplierupdatedatdatetime--",level:4},{value:'<code>Supplier.<b>deletedAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge>',id:"supplierdeletedatdatetime-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Node</code> <Badge class="badge badge--secondary"></Badge>',id:"node-",level:4},{value:"Member Of",id:"member-of",level:3},{value:"Implemented By",id:"implemented-by",level:3}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"A Supplier is a Partner who is connected to TravelgateX on the supply side in order to sell their product to connected Buyers"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-graphql",children:"type Supplier implements Node {\n  code: ID!\n  supplierData: SupplierData\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  error: [Error!] @deprecated\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  deletedAt: DateTime\n}\n"})}),"\n",(0,t.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(s.h4,{id:"suppliercodeid--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Supplier.",(0,t.jsx)("b",{children:"code"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/api/types/scalars/id",children:(0,t.jsx)(s.code,{children:"ID!"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.p,{children:"Supplier unique code"}),"\n",(0,t.jsxs)(s.h4,{id:"suppliersupplierdatasupplierdata-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Supplier.",(0,t.jsx)("b",{children:"supplierData"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/supplier-data",children:(0,t.jsx)(s.code,{children:"SupplierData"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(s.p,{children:"Extended Supplier information"}),"\n",(0,t.jsxs)(s.h4,{id:"supplieradvisemessageadvisemessage--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Supplier.",(0,t.jsx)("b",{children:"adviseMessage"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/advise-message",children:(0,t.jsx)(s.code,{children:"[AdviseMessage!]"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(s.p,{children:"List of advise messages."}),"\n",(0,t.jsxs)(s.h5,{id:"supplieradvisemessageleveladvisemessagelevel--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Supplier.adviseMessage.",(0,t.jsx)("b",{children:"level"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/api/types/enums/advise-message-level",children:(0,t.jsx)(s.code,{children:"[AdviseMessageLevel]"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,t.jsxs)(s.h4,{id:"suppliererrorerror---",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Supplier.",(0,t.jsx)("b",{children:"error"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/error",children:(0,t.jsx)(s.code,{children:"[Error!]"})})," ",(0,t.jsx)(g,{class:"badge badge--deprecated badge--secondary",text:"deprecated"})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(s.admonition,{title:"DEPRECATED",type:"warning",children:(0,t.jsx)(s.p,{children:"deprecated from 2019-01-01. Use AdviseMessage instead"})}),"\n",(0,t.jsxs)(s.h4,{id:"suppliercreatedatdatetime--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Supplier.",(0,t.jsx)("b",{children:"createdAt"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/api/types/scalars/date-time",children:(0,t.jsx)(s.code,{children:"DateTime!"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.p,{children:"Supplier creation date"}),"\n",(0,t.jsxs)(s.h4,{id:"supplierupdatedatdatetime--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Supplier.",(0,t.jsx)("b",{children:"updatedAt"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/api/types/scalars/date-time",children:(0,t.jsx)(s.code,{children:"DateTime!"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.p,{children:"Supplier last update date"}),"\n",(0,t.jsxs)(s.h4,{id:"supplierdeletedatdatetime-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Supplier.",(0,t.jsx)("b",{children:"deletedAt"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/api/types/scalars/date-time",children:(0,t.jsx)(s.code,{children:"DateTime"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.p,{children:"Supplier deleted date"}),"\n",(0,t.jsx)(s.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,t.jsxs)(s.h4,{id:"node-",children:[(0,t.jsx)(s.a,{href:"/api/types/interfaces/node",children:(0,t.jsx)(s.code,{children:"Node"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,t.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/api/types/objects/access-data",children:(0,t.jsx)(s.code,{children:"AccessData"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/admin-mutation",children:(0,t.jsx)(s.code,{children:"AdminMutation"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/admin-query",children:(0,t.jsx)(s.code,{children:"AdminQuery"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/audit-rule-data",children:(0,t.jsx)(s.code,{children:"AuditRuleData"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/booking-aggregation",children:(0,t.jsx)(s.code,{children:"BookingAggregation"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/booking-detail",children:(0,t.jsx)(s.code,{children:"BookingDetail"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/insights-portfolio-stats-data",children:(0,t.jsx)(s.code,{children:"InsightsPortfolioStatsData"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/payment-card-data",children:(0,t.jsx)(s.code,{children:"PaymentCardData"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/performance-data",children:(0,t.jsx)(s.code,{children:"PerformanceData"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/stats-aggregation-data",children:(0,t.jsx)(s.code,{children:"StatsAggregationData"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/supplier-edge",children:(0,t.jsx)(s.code,{children:"SupplierEdge"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/system-data",children:(0,t.jsx)(s.code,{children:"SystemData"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/traffic-optimization-hotel-blacklist-data",children:(0,t.jsx)(s.code,{children:"TrafficOptimizationHotelBlacklistData"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/traffic-optimization-hotel-stats-aggregation-data",children:(0,t.jsx)(s.code,{children:"TrafficOptimizationHotelStatsAggregationData"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/traffic-optimization-stats-aggregation-data",children:(0,t.jsx)(s.code,{children:"TrafficOptimizationStatsAggregationData"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(s.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/api/types/unions/alert-objects-union",children:(0,t.jsx)(s.code,{children:"AlertObjectsUnion"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"union"})]})]})}function b(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},21020:(e,s,a)=>{var d=a(96540),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function n(e,s,a){var d,r={},n=null,o=null;for(d in void 0!==a&&(n=""+a),void 0!==s.key&&(n=""+s.key),void 0!==s.ref&&(o=s.ref),s)l.call(s,d)&&!c.hasOwnProperty(d)&&(r[d]=s[d]);if(e&&e.defaultProps)for(d in s=e.defaultProps)void 0===r[d]&&(r[d]=s[d]);return{$$typeof:t,type:e,key:n,ref:o,props:r,_owner:i.current}}s.Fragment=r,s.jsx=n,s.jsxs=n},74848:(e,s,a)=>{e.exports=a(21020)},28453:(e,s,a)=>{a.d(s,{R:()=>l,x:()=>i});var d=a(96540);const t={},r=d.createContext(t);function l(e){const s=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),d.createElement(r.Provider,{value:s},e.children)}}}]);
/*! For license information please see d7a2aa0a.cd9dae5b.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1218],{75039:(e,t,s)=>{s.r(t),s.d(t,{Badge:()=>g,Bullet:()=>i,Details:()=>x,SpecifiedBy:()=>h,assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>j});const a=JSON.parse('{"id":"types/objects/hotel-search","title":"HotelSearch","description":"Hotel results from the search response. Contains all the available options for the given criteria search","source":"@site/api/types/objects/hotel-search.mdx","sourceDirName":"types/objects","slug":"/types/objects/hotel-search","permalink":"/api/types/objects/hotel-search","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"hotel-search","title":"HotelSearch"},"sidebar":"schemaSidebar","previous":{"title":"HotelRuntimeParameter","permalink":"/api/types/objects/hotel-runtime-parameter"},"next":{"title":"HotelXAccessSpan","permalink":"/api/types/objects/hotel-xaccess-span"}}');var r=s(74848),n=s(28453),c=s(96540);const o={id:"hotel-search",title:"HotelSearch"},l=void 0,d={},i=()=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),h=e=>(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),g=e=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{className:e.class,children:e.text})}),x=({dataOpen:e,dataClose:t,children:s,startOpen:a=!1})=>{const[n,o]=(0,c.useState)(a);return(0,r.jsxs)("details",{...n?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)("summary",{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:n?e:t}),n&&s]})},j=[{value:"Fields",id:"fields",level:3},{value:'<code>HotelSearch.<b>context</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelsearchcontextstring-",level:4},{value:'<code>HotelSearch.<b>stats</b></code><Bullet></Bullet><code>StatsRequest</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelsearchstatsstatsrequest-",level:4},{value:'<code>HotelSearch.stats.<b>token</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelsearchstatstokenstring--",level:5},{value:'<code>HotelSearch.<b>auditData</b></code><Bullet></Bullet><code>AuditData</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelsearchauditdataauditdata-",level:4},{value:'<code>HotelSearch.<b>requestCriteria</b></code><Bullet></Bullet><code>CriteriaSearch</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelsearchrequestcriteriacriteriasearch-",level:4},{value:'<code>HotelSearch.<b>options</b></code><Bullet></Bullet><code>[HotelOptionSearch!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelsearchoptionshoteloptionsearch--",level:4},{value:'<code>HotelSearch.<b>errors</b></code><Bullet></Bullet><code>[Error!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelsearcherrorserror--",level:4},{value:'<code>HotelSearch.<b>warnings</b></code><Bullet></Bullet><code>[Warning!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelsearchwarningswarning--",level:4},{value:'<code>HotelSearch.<b>tracing</b></code><Bullet></Bullet><code>HotelXTracing</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelsearchtracinghotelxtracing-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Response</code> <Badge class="badge badge--secondary"></Badge>',id:"response-",level:4},{value:"Member Of",id:"member-of",level:3}];function b(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Hotel results from the search response. Contains all the available options for the given criteria search"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-graphql",children:"type HotelSearch implements Response {\n  context: String\n  stats(token: String!): StatsRequest\n  auditData: AuditData\n  requestCriteria: CriteriaSearch\n  options: [HotelOptionSearch!]\n  errors: [Error!]\n  warnings: [Warning!]\n  tracing: HotelXTracing\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(t.h4,{id:"hotelsearchcontextstring-",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelSearch.",(0,r.jsx)("b",{children:"context"})]})}),(0,r.jsx)(i,{}),(0,r.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,r.jsx)(t.code,{children:"String"})})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(t.p,{children:"Indicates the context of the response."}),"\n",(0,r.jsxs)(t.h4,{id:"hotelsearchstatsstatsrequest-",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelSearch.",(0,r.jsx)("b",{children:"stats"})]})}),(0,r.jsx)(i,{}),(0,r.jsx)(t.a,{href:"/api/types/objects/stats-request",children:(0,r.jsx)(t.code,{children:"StatsRequest"})})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,r.jsx)(t.p,{children:"Application stats in string format"}),"\n",(0,r.jsxs)(t.h5,{id:"hotelsearchstatstokenstring--",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelSearch.stats.",(0,r.jsx)("b",{children:"token"})]})}),(0,r.jsx)(i,{}),(0,r.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,r.jsx)(t.code,{children:"String!"})})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(t.h4,{id:"hotelsearchauditdataauditdata-",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelSearch.",(0,r.jsx)("b",{children:"auditData"})]})}),(0,r.jsx)(i,{}),(0,r.jsx)(t.a,{href:"/api/types/objects/audit-data",children:(0,r.jsx)(t.code,{children:"AuditData"})})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,r.jsx)(t.p,{children:"All the sent and received transactions in the supplier's native format."}),"\n",(0,r.jsxs)(t.h4,{id:"hotelsearchrequestcriteriacriteriasearch-",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelSearch.",(0,r.jsx)("b",{children:"requestCriteria"})]})}),(0,r.jsx)(i,{}),(0,r.jsx)(t.a,{href:"/api/types/objects/criteria-search",children:(0,r.jsx)(t.code,{children:"CriteriaSearch"})})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,r.jsx)(t.p,{children:"Request Criteria contains destination, travel dates and the number of pax in each room."}),"\n",(0,r.jsxs)(t.h4,{id:"hotelsearchoptionshoteloptionsearch--",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelSearch.",(0,r.jsx)("b",{children:"options"})]})}),(0,r.jsx)(i,{}),(0,r.jsx)(t.a,{href:"/api/types/objects/hotel-option-search",children:(0,r.jsx)(t.code,{children:"[HotelOptionSearch!]"})})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,r.jsx)(t.p,{children:"List of options returned according to the request."}),"\n",(0,r.jsxs)(t.h4,{id:"hotelsearcherrorserror--",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelSearch.",(0,r.jsx)("b",{children:"errors"})]})}),(0,r.jsx)(i,{}),(0,r.jsx)(t.a,{href:"/api/types/objects/error",children:(0,r.jsx)(t.code,{children:"[Error!]"})})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,r.jsx)(t.p,{children:"List of errors that abort services."}),"\n",(0,r.jsxs)(t.h4,{id:"hotelsearchwarningswarning--",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelSearch.",(0,r.jsx)("b",{children:"warnings"})]})}),(0,r.jsx)(i,{}),(0,r.jsx)(t.a,{href:"/api/types/objects/warning",children:(0,r.jsx)(t.code,{children:"[Warning!]"})})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,r.jsx)(t.p,{children:"Potentially harmful situations or errors that won't force the service to abort.\nTo identify if it is blocked one, you can check our documentation regards this matter."}),"\n",(0,r.jsxs)(t.h4,{id:"hotelsearchtracinghotelxtracing-",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelSearch.",(0,r.jsx)("b",{children:"tracing"})]})}),(0,r.jsx)(i,{}),(0,r.jsx)(t.a,{href:"/api/types/objects/hotel-xtracing",children:(0,r.jsx)(t.code,{children:"HotelXTracing"})})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,r.jsx)(t.p,{children:"Other information it may need to analize transactions. This information is only available through internal request and, by default, it is not returned"}),"\n",(0,r.jsx)(t.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,r.jsxs)(t.h4,{id:"response-",children:[(0,r.jsx)(t.a,{href:"/api/types/interfaces/response",children:(0,r.jsx)(t.code,{children:"Response"})})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,r.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/api/types/objects/hotel-xquery",children:(0,r.jsx)(t.code,{children:"HotelXQuery"})})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"object"})]})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(b,{...e})}):b(e)}},21020:(e,t,s)=>{var a=s(96540),r=Symbol.for("react.element"),n=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,s){var a,n={},d=null,i=null;for(a in void 0!==s&&(d=""+s),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(i=t.ref),t)c.call(t,a)&&!l.hasOwnProperty(a)&&(n[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===n[a]&&(n[a]=t[a]);return{$$typeof:r,type:e,key:d,ref:i,props:n,_owner:o.current}}t.Fragment=n,t.jsx=d,t.jsxs=d},74848:(e,t,s)=>{e.exports=s(21020)},28453:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>o});var a=s(96540);const r={},n=a.createContext(r);function c(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);
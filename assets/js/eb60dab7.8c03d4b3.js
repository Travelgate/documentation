/*! For license information please see eb60dab7.8c03d4b3.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[15560],{58835:(e,n,a)=>{a.r(n),a.d(n,{Badge:()=>h,Bullet:()=>l,Details:()=>g,SpecifiedBy:()=>p,assets:()=>r,contentTitle:()=>d,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>b});var s=a(74848),o=a(28453),t=a(96540);const c={id:"speed-connection-data",title:"SpeedConnectionData"},d=void 0,i={id:"types/objects/speed-connection-data",title:"SpeedConnectionData",description:"No description",source:"@site/api/types/objects/speed-connection-data.mdx",sourceDirName:"types/objects",slug:"/types/objects/speed-connection-data",permalink:"/api/types/objects/speed-connection-data",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"speed-connection-data",title:"SpeedConnectionData"},sidebar:"schemaSidebar",previous:{title:"SpeedConnectionCollection",permalink:"/api/types/objects/speed-connection-collection"},next:{title:"SpeedConnectionEdge",permalink:"/api/types/objects/speed-connection-edge"}},r={},l=()=>{const e={span:"span",...(0,o.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const n={a:"a",...(0,o.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,o.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:n,children:a,startOpen:c=!1})=>{const d={details:"details",summary:"summary",...(0,o.R)()},[i,r]=(0,t.useState)(c);return(0,s.jsxs)(d.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(d.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:i?e:n}),i&&a]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>SpeedConnectionData.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"speedconnectiondatacodeid--",level:4},{value:'<code>SpeedConnectionData.<b>buyer</b></code><Bullet></Bullet><code>SpeedOrganization!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"speedconnectiondatabuyerspeedorganization--",level:4},{value:'<code>SpeedConnectionData.<b>seller</b></code><Bullet></Bullet><code>SpeedOrganization!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"speedconnectiondatasellerspeedorganization--",level:4},{value:'<code>SpeedConnectionData.<b>accesses</b></code><Bullet></Bullet><code>SpeedAccessCollection</code> <Badge class="badge badge--secondary"></Badge>',id:"speedconnectiondataaccessesspeedaccesscollection-",level:4},{value:'<code>SpeedConnectionData.<b>historicalActions</b></code><Bullet></Bullet><code>SpeedHistoricalActions</code> <Badge class="badge badge--secondary"></Badge>',id:"speedconnectiondatahistoricalactionsspeedhistoricalactions-",level:4},{value:'<code>SpeedConnectionData.historicalActions.<b>where</b></code><Bullet></Bullet><code>HistoricalActionsWhereInput</code> <Badge class="badge badge--secondary"></Badge>',id:"speedconnectiondatahistoricalactionswherehistoricalactionswhereinput-",level:5},{value:'<code>SpeedConnectionData.<b>configuration</b></code><Bullet></Bullet><code>SpeedConfiguration!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"speedconnectiondataconfigurationspeedconfiguration--",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"No description"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"type SpeedConnectionData {\n  code: ID!\n  buyer: SpeedOrganization!\n  seller: SpeedOrganization!\n  accesses: SpeedAccessCollection\n  historicalActions(where: HistoricalActionsWhereInput): SpeedHistoricalActions\n  configuration: SpeedConfiguration!\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(n.h4,{id:"speedconnectiondatacodeid--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SpeedConnectionData.",(0,s.jsx)("b",{children:"code"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/api/types/scalars/id",children:(0,s.jsx)(n.code,{children:"ID!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.h4,{id:"speedconnectiondatabuyerspeedorganization--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SpeedConnectionData.",(0,s.jsx)("b",{children:"buyer"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/api/types/objects/speed-organization",children:(0,s.jsx)(n.code,{children:"SpeedOrganization!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(n.h4,{id:"speedconnectiondatasellerspeedorganization--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SpeedConnectionData.",(0,s.jsx)("b",{children:"seller"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/api/types/objects/speed-organization",children:(0,s.jsx)(n.code,{children:"SpeedOrganization!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(n.h4,{id:"speedconnectiondataaccessesspeedaccesscollection-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SpeedConnectionData.",(0,s.jsx)("b",{children:"accesses"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/api/types/objects/speed-access-collection",children:(0,s.jsx)(n.code,{children:"SpeedAccessCollection"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(n.h4,{id:"speedconnectiondatahistoricalactionsspeedhistoricalactions-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SpeedConnectionData.",(0,s.jsx)("b",{children:"historicalActions"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/api/types/objects/speed-historical-actions",children:(0,s.jsx)(n.code,{children:"SpeedHistoricalActions"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(n.h5,{id:"speedconnectiondatahistoricalactionswherehistoricalactionswhereinput-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SpeedConnectionData.historicalActions.",(0,s.jsx)("b",{children:"where"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/api/types/inputs/historical-actions-where-input",children:(0,s.jsx)(n.code,{children:"HistoricalActionsWhereInput"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,s.jsxs)(n.h4,{id:"speedconnectiondataconfigurationspeedconfiguration--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SpeedConnectionData.",(0,s.jsx)("b",{children:"configuration"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/api/types/objects/speed-configuration",children:(0,s.jsx)(n.code,{children:"SpeedConfiguration!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/api/types/objects/speed-connection",children:(0,s.jsx)(n.code,{children:"SpeedConnection"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},21020:(e,n,a)=>{var s=a(96540),o=Symbol.for("react.element"),t=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function r(e,n,a){var s,t={},r=null,l=null;for(s in void 0!==a&&(r=""+a),void 0!==n.key&&(r=""+n.key),void 0!==n.ref&&(l=n.ref),n)c.call(n,s)&&!i.hasOwnProperty(s)&&(t[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===t[s]&&(t[s]=n[s]);return{$$typeof:o,type:e,key:r,ref:l,props:t,_owner:d.current}}n.Fragment=t,n.jsx=r,n.jsxs=r},74848:(e,n,a)=>{e.exports=a(21020)},28453:(e,n,a)=>{a.d(n,{R:()=>c,x:()=>d});var s=a(96540);const o={},t=s.createContext(o);function c(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);
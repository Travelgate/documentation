/*! For license information please see 30ba8bf8.f9875378.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5617],{74431:(e,s,a)=>{a.r(s),a.d(s,{Badge:()=>h,Bullet:()=>c,Details:()=>x,SpecifiedBy:()=>r,assets:()=>g,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>b});var d=a(74848),n=a(28453),t=a(96540);const l={id:"logging",title:"Logging"},o=void 0,i={id:"types/objects/logging",title:"Logging",description:"The service used to access the stats of every connection that uses the HUB",source:"@site/api/types/objects/logging.mdx",sourceDirName:"types/objects",slug:"/types/objects/logging",permalink:"/api/types/objects/logging",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"logging",title:"Logging"},sidebar:"schemaSidebar",previous:{title:"LoggingQuery",permalink:"/api/types/objects/logging-query"},next:{title:"Look2book",permalink:"/api/types/objects/look-2-book"}},g={},c=()=>{const e={span:"span",...(0,n.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},r=e=>{const s={a:"a",...(0,n.R)()};return(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const s={span:"span",...(0,n.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(s.span,{className:e.class,children:e.text})})},x=({dataOpen:e,dataClose:s,children:a,startOpen:l=!1})=>{const o={details:"details",summary:"summary",...(0,n.R)()},[i,g]=(0,t.useState)(l);return(0,d.jsxs)(o.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)(o.summary,{onClick:e=>{e.preventDefault(),g((e=>!e))},style:{listStyle:"none"},children:i?e:s}),i&&a]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>Logging.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"loggingcodeid--",level:4},{value:'<code>Logging.<b>LoggingData</b></code><Bullet></Bullet><code>LoggingData</code> <Badge class="badge badge--secondary"></Badge>',id:"loggingloggingdataloggingdata-",level:4},{value:'<code>Logging.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"loggingadvisemessageadvisemessage--",level:4},{value:'<code>Logging.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"loggingadvisemessageleveladvisemessagelevel--",level:5},{value:'<code>Logging.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"loggingcreatedatdatetime--",level:4},{value:'<code>Logging.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"loggingupdatedatdatetime--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Node</code> <Badge class="badge badge--secondary"></Badge>',id:"node-",level:4}];function j(e){const s={a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.p,{children:"The service used to access the stats of every connection that uses the HUB"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-graphql",children:"type Logging implements Node {\n  code: ID!\n  LoggingData: LoggingData\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  createdAt: DateTime!\n  updatedAt: DateTime!\n}\n"})}),"\n",(0,d.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(s.h4,{id:"loggingcodeid--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Logging.",(0,d.jsx)("b",{children:"code"})]})}),(0,d.jsx)(c,{}),(0,d.jsx)(s.a,{href:"/api/types/scalars/id",children:(0,d.jsx)(s.code,{children:"ID!"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(s.h4,{id:"loggingloggingdataloggingdata-",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Logging.",(0,d.jsx)("b",{children:"LoggingData"})]})}),(0,d.jsx)(c,{}),(0,d.jsx)(s.a,{href:"/api/types/objects/logging-data",children:(0,d.jsx)(s.code,{children:"LoggingData"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(s.h4,{id:"loggingadvisemessageadvisemessage--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Logging.",(0,d.jsx)("b",{children:"adviseMessage"})]})}),(0,d.jsx)(c,{}),(0,d.jsx)(s.a,{href:"/api/types/objects/advise-message",children:(0,d.jsx)(s.code,{children:"[AdviseMessage!]"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsx)(s.p,{children:"Errors that will lead the service to abort"}),"\n",(0,d.jsxs)(s.h5,{id:"loggingadvisemessageleveladvisemessagelevel--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Logging.adviseMessage.",(0,d.jsx)("b",{children:"level"})]})}),(0,d.jsx)(c,{}),(0,d.jsx)(s.a,{href:"/api/types/enums/advise-message-level",children:(0,d.jsx)(s.code,{children:"[AdviseMessageLevel]"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,d.jsxs)(s.h4,{id:"loggingcreatedatdatetime--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Logging.",(0,d.jsx)("b",{children:"createdAt"})]})}),(0,d.jsx)(c,{}),(0,d.jsx)(s.a,{href:"/api/types/scalars/date-time",children:(0,d.jsx)(s.code,{children:"DateTime!"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(s.p,{children:"Create date"}),"\n",(0,d.jsxs)(s.h4,{id:"loggingupdatedatdatetime--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Logging.",(0,d.jsx)("b",{children:"updatedAt"})]})}),(0,d.jsx)(c,{}),(0,d.jsx)(s.a,{href:"/api/types/scalars/date-time",children:(0,d.jsx)(s.code,{children:"DateTime!"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(s.p,{children:"Update date"}),"\n",(0,d.jsx)(s.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,d.jsxs)(s.h4,{id:"node-",children:[(0,d.jsx)(s.a,{href:"/api/types/interfaces/node",children:(0,d.jsx)(s.code,{children:"Node"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"interface"})]})]})}function u(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(j,{...e})}):j(e)}},21020:(e,s,a)=>{var d=a(96540),n=Symbol.for("react.element"),t=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function g(e,s,a){var d,t={},g=null,c=null;for(d in void 0!==a&&(g=""+a),void 0!==s.key&&(g=""+s.key),void 0!==s.ref&&(c=s.ref),s)l.call(s,d)&&!i.hasOwnProperty(d)&&(t[d]=s[d]);if(e&&e.defaultProps)for(d in s=e.defaultProps)void 0===t[d]&&(t[d]=s[d]);return{$$typeof:n,type:e,key:g,ref:c,props:t,_owner:o.current}}s.Fragment=t,s.jsx=g,s.jsxs=g},74848:(e,s,a)=>{e.exports=a(21020)},28453:(e,s,a)=>{a.d(s,{R:()=>l,x:()=>o});var d=a(96540);const n={},t=d.createContext(n);function l(e){const s=d.useContext(t);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),d.createElement(t.Provider,{value:s},e.children)}}}]);
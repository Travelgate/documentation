/*! For license information please see 7d9d3a5d.644dd8a1.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[50670],{43395:(e,s,t)=>{t.r(s),t.d(s,{Badge:()=>h,Bullet:()=>i,Details:()=>x,SpecifiedBy:()=>g,assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>d,metadata:()=>r,toc:()=>b});var a=t(74848),c=t(28453),n=t(96540);const d={id:"stat-access",title:"StatAccess"},l=void 0,r={id:"types/objects/stat-access",title:"StatAccess",description:"No description",source:"@site/api/types/objects/stat-access.mdx",sourceDirName:"types/objects",slug:"/types/objects/stat-access",permalink:"/api/types/objects/stat-access",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"stat-access",title:"StatAccess"},sidebar:"schemaSidebar",previous:{title:"SpeedTtl",permalink:"/api/types/objects/speed-ttl"},next:{title:"StatPlugin",permalink:"/api/types/objects/stat-plugin"}},o={},i=()=>{const e={span:"span",...(0,c.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const s={a:"a",...(0,c.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const s={span:"span",...(0,c.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.span,{className:e.class,children:e.text})})},x=({dataOpen:e,dataClose:s,children:t,startOpen:d=!1})=>{const l={details:"details",summary:"summary",...(0,c.R)()},[r,o]=(0,n.useState)(d);return(0,a.jsxs)(l.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(l.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:r?e:s}),r&&t]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>StatAccess.<b>name</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"stataccessnamestring--",level:4},{value:'<code>StatAccess.<b>total</b></code><Bullet></Bullet><code>Stat!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"stataccesstotalstat--",level:4},{value:'<code>StatAccess.<b>staticConfiguration</b></code><Bullet></Bullet><code>Stat</code> <Badge class="badge badge--secondary"></Badge>',id:"stataccessstaticconfigurationstat-",level:4},{value:'<code>StatAccess.<b>hotels</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"stataccesshotelsint--",level:4},{value:'<code>StatAccess.<b>zones</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"stataccesszonesint--",level:4},{value:'<code>StatAccess.<b>cities</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"stataccesscitiesint--",level:4},{value:'<code>StatAccess.<b>requestAccess</b></code><Bullet></Bullet><code>StatPlugin</code> <Badge class="badge badge--secondary"></Badge>',id:"stataccessrequestaccessstatplugin-",level:4},{value:'<code>StatAccess.<b>responseAccess</b></code><Bullet></Bullet><code>StatPlugin</code> <Badge class="badge badge--secondary"></Badge>',id:"stataccessresponseaccessstatplugin-",level:4},{value:'<code>StatAccess.<b>transactions</b></code><Bullet></Bullet><code>[StatTransaction!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"stataccesstransactionsstattransaction--",level:4},{value:'<code>StatAccess.<b>plugins</b></code><Bullet></Bullet><code>[StatPlugin!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"stataccesspluginsstatplugin--",level:4},{value:"Member Of",id:"member-of",level:3}];function j(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"No description"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-graphql",children:"type StatAccess {\n  name: String!\n  total: Stat!\n  staticConfiguration: Stat\n  hotels: Int!\n  zones: Int!\n  cities: Int!\n  requestAccess: StatPlugin\n  responseAccess: StatPlugin\n  transactions: [StatTransaction!]!\n  plugins: [StatPlugin!]\n}\n"})}),"\n",(0,a.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(s.h4,{id:"stataccessnamestring--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["StatAccess.",(0,a.jsx)("b",{children:"name"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/types/scalars/string",children:(0,a.jsx)(s.code,{children:"String!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Access name"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"stataccesstotalstat--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["StatAccess.",(0,a.jsx)("b",{children:"total"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/stat",children:(0,a.jsx)(s.code,{children:"Stat!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Total access time"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"stataccessstaticconfigurationstat-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["StatAccess.",(0,a.jsx)("b",{children:"staticConfiguration"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/stat",children:(0,a.jsx)(s.code,{children:"Stat"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Static configuration time"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"stataccesshotelsint--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["StatAccess.",(0,a.jsx)("b",{children:"hotels"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/types/scalars/int",children:(0,a.jsx)(s.code,{children:"Int!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Number of hotels"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"stataccesszonesint--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["StatAccess.",(0,a.jsx)("b",{children:"zones"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/types/scalars/int",children:(0,a.jsx)(s.code,{children:"Int!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Number of zones"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"stataccesscitiesint--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["StatAccess.",(0,a.jsx)("b",{children:"cities"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/types/scalars/int",children:(0,a.jsx)(s.code,{children:"Int!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Number of cities"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"stataccessrequestaccessstatplugin-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["StatAccess.",(0,a.jsx)("b",{children:"requestAccess"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/stat-plugin",children:(0,a.jsx)(s.code,{children:"StatPlugin"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Access request time"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"stataccessresponseaccessstatplugin-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["StatAccess.",(0,a.jsx)("b",{children:"responseAccess"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/stat-plugin",children:(0,a.jsx)(s.code,{children:"StatPlugin"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Access response time"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"stataccesstransactionsstattransaction--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["StatAccess.",(0,a.jsx)("b",{children:"transactions"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/stat-transaction",children:(0,a.jsx)(s.code,{children:"[StatTransaction!]!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Detail transaction time"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"stataccesspluginsstatplugin--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["StatAccess.",(0,a.jsx)("b",{children:"plugins"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/stat-plugin",children:(0,a.jsx)(s.code,{children:"[StatPlugin!]"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Plugin execution time"}),"\n"]}),"\n",(0,a.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/api/types/objects/stats-request",children:(0,a.jsx)(s.code,{children:"StatsRequest"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function u(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(j,{...e})}):j(e)}},21020:(e,s,t)=>{var a=t(96540),c=Symbol.for("react.element"),n=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,l=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function o(e,s,t){var a,n={},o=null,i=null;for(a in void 0!==t&&(o=""+t),void 0!==s.key&&(o=""+s.key),void 0!==s.ref&&(i=s.ref),s)d.call(s,a)&&!r.hasOwnProperty(a)&&(n[a]=s[a]);if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===n[a]&&(n[a]=s[a]);return{$$typeof:c,type:e,key:o,ref:i,props:n,_owner:l.current}}s.Fragment=n,s.jsx=o,s.jsxs=o},74848:(e,s,t)=>{e.exports=t(21020)},28453:(e,s,t)=>{t.d(s,{R:()=>d,x:()=>l});var a=t(96540);const c={},n=a.createContext(c);function d(e){const s=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),a.createElement(n.Provider,{value:s},e.children)}}}]);
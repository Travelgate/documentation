/*! For license information please see 49cfe73c.5c591eba.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7375],{63123:(e,s,t)=>{t.r(s),t.d(s,{Badge:()=>h,Bullet:()=>l,Details:()=>b,SpecifiedBy:()=>p,assets:()=>r,contentTitle:()=>i,default:()=>g,frontMatter:()=>c,metadata:()=>o,toc:()=>x});var d=t(74848),a=t(28453),n=t(96540);const c={id:"speed-historical-action",title:"SpeedHistoricalAction"},i=void 0,o={id:"types/objects/speed-historical-action",title:"SpeedHistoricalAction",description:"No description",source:"@site/api/types/objects/speed-historical-action.mdx",sourceDirName:"types/objects",slug:"/types/objects/speed-historical-action",permalink:"/api/types/objects/speed-historical-action",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"speed-historical-action",title:"SpeedHistoricalAction"},sidebar:"schemaSidebar",previous:{title:"SpeedConnection",permalink:"/api/types/objects/speed-connection"},next:{title:"SpeedHistoricalActions",permalink:"/api/types/objects/speed-historical-actions"}},r={},l=()=>{const e={span:"span",...(0,a.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const s={a:"a",...(0,a.R)()};return(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const s={span:"span",...(0,a.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(s.span,{className:e.class,children:e.text})})},b=({dataOpen:e,dataClose:s,children:t,startOpen:c=!1})=>{const i={details:"details",summary:"summary",...(0,a.R)()},[o,r]=(0,n.useState)(c);return(0,d.jsxs)(i.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)(i.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:o?e:s}),o&&t]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>SpeedHistoricalAction.<b>date</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"speedhistoricalactiondatedatetime--",level:4},{value:'<code>SpeedHistoricalAction.<b>actionType</b></code><Bullet></Bullet><code>SpeedActionType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"speedhistoricalactionactiontypespeedactiontype--",level:4},{value:'<code>SpeedHistoricalAction.<b>requestedBy</b></code><Bullet></Bullet><code>SpeedRequester!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"speedhistoricalactionrequestedbyspeedrequester--",level:4},{value:'<code>SpeedHistoricalAction.<b>modifiedBy</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"speedhistoricalactionmodifiedbystring--",level:4},{value:'<code>SpeedHistoricalAction.<b>ttl</b></code><Bullet></Bullet><code>[SpeedTtl!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"speedhistoricalactionttlspeedttl--",level:4},{value:'<code>SpeedHistoricalAction.<b>rqMode</b></code><Bullet></Bullet><code>SpeedRQMode</code> <Badge class="badge badge--secondary"></Badge>',id:"speedhistoricalactionrqmodespeedrqmode-",level:4},{value:"Member Of",id:"member-of",level:3}];function u(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.p,{children:"No description"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-graphql",children:"type SpeedHistoricalAction {\n  date: DateTime!\n  actionType: SpeedActionType!\n  requestedBy: SpeedRequester!\n  modifiedBy: String!\n  ttl: [SpeedTtl!]\n  rqMode: SpeedRQMode\n}\n"})}),"\n",(0,d.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(s.h4,{id:"speedhistoricalactiondatedatetime--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["SpeedHistoricalAction.",(0,d.jsx)("b",{children:"date"})]})}),(0,d.jsx)(l,{}),(0,d.jsx)(s.a,{href:"/api/types/scalars/date-time",children:(0,d.jsx)(s.code,{children:"DateTime!"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(s.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(s.h4,{id:"speedhistoricalactionactiontypespeedactiontype--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["SpeedHistoricalAction.",(0,d.jsx)("b",{children:"actionType"})]})}),(0,d.jsx)(l,{}),(0,d.jsx)(s.a,{href:"/api/types/enums/speed-action-type",children:(0,d.jsx)(s.code,{children:"SpeedActionType!"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,d.jsx)(s.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(s.h4,{id:"speedhistoricalactionrequestedbyspeedrequester--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["SpeedHistoricalAction.",(0,d.jsx)("b",{children:"requestedBy"})]})}),(0,d.jsx)(l,{}),(0,d.jsx)(s.a,{href:"/api/types/enums/speed-requester",children:(0,d.jsx)(s.code,{children:"SpeedRequester!"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,d.jsx)(s.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(s.h4,{id:"speedhistoricalactionmodifiedbystring--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["SpeedHistoricalAction.",(0,d.jsx)("b",{children:"modifiedBy"})]})}),(0,d.jsx)(l,{}),(0,d.jsx)(s.a,{href:"/api/types/scalars/string",children:(0,d.jsx)(s.code,{children:"String!"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(s.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(s.h4,{id:"speedhistoricalactionttlspeedttl--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["SpeedHistoricalAction.",(0,d.jsx)("b",{children:"ttl"})]})}),(0,d.jsx)(l,{}),(0,d.jsx)(s.a,{href:"/api/types/objects/speed-ttl",children:(0,d.jsx)(s.code,{children:"[SpeedTtl!]"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsx)(s.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(s.h4,{id:"speedhistoricalactionrqmodespeedrqmode-",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["SpeedHistoricalAction.",(0,d.jsx)("b",{children:"rqMode"})]})}),(0,d.jsx)(l,{}),(0,d.jsx)(s.a,{href:"/api/types/enums/speed-rqmode",children:(0,d.jsx)(s.code,{children:"SpeedRQMode"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,d.jsx)(s.blockquote,{children:"\n"}),"\n",(0,d.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.a,{href:"/api/types/objects/speed-historical-actions",children:(0,d.jsx)(s.code,{children:"SpeedHistoricalActions"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function g(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(u,{...e})}):u(e)}},21020:(e,s,t)=>{var d=t(96540),a=Symbol.for("react.element"),n=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function r(e,s,t){var d,n={},r=null,l=null;for(d in void 0!==t&&(r=""+t),void 0!==s.key&&(r=""+s.key),void 0!==s.ref&&(l=s.ref),s)c.call(s,d)&&!o.hasOwnProperty(d)&&(n[d]=s[d]);if(e&&e.defaultProps)for(d in s=e.defaultProps)void 0===n[d]&&(n[d]=s[d]);return{$$typeof:a,type:e,key:r,ref:l,props:n,_owner:i.current}}s.Fragment=n,s.jsx=r,s.jsxs=r},74848:(e,s,t)=>{e.exports=t(21020)},28453:(e,s,t)=>{t.d(s,{R:()=>c,x:()=>i});var d=t(96540);const a={},n=d.createContext(a);function c(e){const s=d.useContext(n);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),d.createElement(n.Provider,{value:s},e.children)}}}]);
/*! For license information please see 643a44db.d8619c70.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[66499],{13626:(e,t,s)=>{s.r(t),s.d(t,{Badge:()=>u,Bullet:()=>c,Details:()=>h,SpecifiedBy:()=>g,assets:()=>r,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>f});const a=JSON.parse('{"id":"types/objects/hotel-xdefault-settings","title":"HotelXDefaultSettings","description":"No description","source":"@site/api/types/objects/hotel-xdefault-settings.mdx","sourceDirName":"types/objects","slug":"/types/objects/hotel-xdefault-settings","permalink":"/api/types/objects/hotel-xdefault-settings","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"hotel-xdefault-settings","title":"HotelXDefaultSettings"},"sidebar":"schemaSidebar","previous":{"title":"HotelXDefaultSettingsData","permalink":"/api/types/objects/hotel-xdefault-settings-data"},"next":{"title":"HotelXMappedCode","permalink":"/api/types/objects/hotel-xmapped-code"}}');var l=s(74848),n=s(28453),d=s(96540);const i={id:"hotel-xdefault-settings",title:"HotelXDefaultSettings"},o=void 0,r={},c=()=>(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),g=e=>(0,l.jsxs)(l.Fragment,{children:["Specification",(0,l.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),u=e=>(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("span",{className:e.class,children:e.text})}),h=({dataOpen:e,dataClose:t,children:s,startOpen:a=!1})=>{const[n,i]=(0,d.useState)(a);return(0,l.jsxs)("details",{...n?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,l.jsx)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:n?e:t}),n&&s]})},f=[{value:"Fields",id:"fields",level:3},{value:'<code>HotelXDefaultSettings.<b>settings</b></code><Bullet></Bullet><code>HotelXDefaultSettingsData</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelxdefaultsettingssettingshotelxdefaultsettingsdata-",level:4},{value:'<code>HotelXDefaultSettings.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelxdefaultsettingsadvisemessageadvisemessage--",level:4},{value:'<code>HotelXDefaultSettings.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelxdefaultsettingsadvisemessageleveladvisemessagelevel--",level:5},{value:"Member Of",id:"member-of",level:3}];function x(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.p,{children:"No description"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-graphql",children:"type HotelXDefaultSettings {\n  settings: HotelXDefaultSettingsData\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n}\n"})}),"\n",(0,l.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,l.jsxs)(t.h4,{id:"hotelxdefaultsettingssettingshotelxdefaultsettingsdata-",children:[(0,l.jsx)(t.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelXDefaultSettings.",(0,l.jsx)("b",{children:"settings"})]})}),(0,l.jsx)(c,{}),(0,l.jsx)(t.a,{href:"/api/types/objects/hotel-xdefault-settings-data",children:(0,l.jsx)(t.code,{children:"HotelXDefaultSettingsData"})})," ",(0,l.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,l.jsx)(t.p,{children:"Data"}),"\n",(0,l.jsxs)(t.h4,{id:"hotelxdefaultsettingsadvisemessageadvisemessage--",children:[(0,l.jsx)(t.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelXDefaultSettings.",(0,l.jsx)("b",{children:"adviseMessage"})]})}),(0,l.jsx)(c,{}),(0,l.jsx)(t.a,{href:"/api/types/objects/advise-message",children:(0,l.jsx)(t.code,{children:"[AdviseMessage!]"})})," ",(0,l.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,l.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,l.jsx)(t.p,{children:"List of messages"}),"\n",(0,l.jsxs)(t.h5,{id:"hotelxdefaultsettingsadvisemessageleveladvisemessagelevel--",children:[(0,l.jsx)(t.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelXDefaultSettings.adviseMessage.",(0,l.jsx)("b",{children:"level"})]})}),(0,l.jsx)(c,{}),(0,l.jsx)(t.a,{href:"/api/types/enums/advise-message-level",children:(0,l.jsx)(t.code,{children:"[AdviseMessageLevel]"})})," ",(0,l.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,l.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,l.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.a,{href:"/api/types/objects/hotel-xmutation",children:(0,l.jsx)(t.code,{children:"HotelXMutation"})})," ",(0,l.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,l.jsx)(c,{}),(0,l.jsx)(t.a,{href:"/api/types/objects/hotel-xquery",children:(0,l.jsx)(t.code,{children:"HotelXQuery"})})," ",(0,l.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(x,{...e})}):x(e)}},21020:(e,t,s)=>{var a=s(96540),l=Symbol.for("react.element"),n=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function r(e,t,s){var a,n={},r=null,c=null;for(a in void 0!==s&&(r=""+s),void 0!==t.key&&(r=""+t.key),void 0!==t.ref&&(c=t.ref),t)d.call(t,a)&&!o.hasOwnProperty(a)&&(n[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===n[a]&&(n[a]=t[a]);return{$$typeof:l,type:e,key:r,ref:c,props:n,_owner:i.current}}t.Fragment=n,t.jsx=r,t.jsxs=r},74848:(e,t,s)=>{e.exports=s(21020)},28453:(e,t,s)=>{s.d(t,{R:()=>d,x:()=>i});var a=s(96540);const l={},n=a.createContext(l);function d(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);
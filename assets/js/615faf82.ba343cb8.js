/*! For license information please see 615faf82.ba343cb8.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[10378],{69056:(e,s,n)=>{n.r(s),n.d(s,{Badge:()=>p,Bullet:()=>u,Details:()=>b,SpecifiedBy:()=>d,assets:()=>c,contentTitle:()=>l,default:()=>x,frontMatter:()=>i,metadata:()=>a,toc:()=>f});var t=n(74848),r=n(28453),o=n(96540);const i={id:"business-rules",title:"BusinessRules"},l=void 0,a={id:"types/objects/business-rules",title:"BusinessRules",description:"List of business rules for filtering options based on your interests.",source:"@site/api/types/objects/business-rules.mdx",sourceDirName:"types/objects",slug:"/types/objects/business-rules",permalink:"/api/types/objects/business-rules",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"business-rules",title:"BusinessRules"},sidebar:"schemaSidebar",previous:{title:"BookingRoom",permalink:"/api/types/objects/booking-room"},next:{title:"CancelPayload",permalink:"/api/types/objects/cancel-payload"}},c={},u=()=>{const e={span:"span",...(0,r.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},d=e=>{const s={a:"a",...(0,r.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const s={span:"span",...(0,r.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(s.span,{className:e.class,children:e.text})})},b=({dataOpen:e,dataClose:s,children:n,startOpen:i=!1})=>{const l={details:"details",summary:"summary",...(0,r.R)()},[a,c]=(0,o.useState)(i);return(0,t.jsxs)(l.details,{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(l.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:a?e:s}),a&&n]})},f=[{value:"Fields",id:"fields",level:3},{value:'<code>BusinessRules.<b>optionsQuota</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"businessrulesoptionsquotaint-",level:4},{value:'<code>BusinessRules.<b>businessRulesType</b></code><Bullet></Bullet><code>BusinessRulesType</code> <Badge class="badge badge--secondary"></Badge>',id:"businessrulesbusinessrulestypebusinessrulestype-",level:4},{value:"Member Of",id:"member-of",level:3}];function h(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"List of business rules for filtering options based on your interests."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-graphql",children:"type BusinessRules {\n  optionsQuota: Int\n  businessRulesType: BusinessRulesType\n}\n"})}),"\n",(0,t.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(s.h4,{id:"businessrulesoptionsquotaint-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["BusinessRules.",(0,t.jsx)("b",{children:"optionsQuota"})]})}),(0,t.jsx)(u,{}),(0,t.jsx)(s.a,{href:"/api/types/scalars/int",children:(0,t.jsx)(s.code,{children:"Int"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Options quota per availability; numbers of options based on availability."}),"\n"]}),"\n",(0,t.jsxs)(s.h4,{id:"businessrulesbusinessrulestypebusinessrulestype-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["BusinessRules.",(0,t.jsx)("b",{children:"businessRulesType"})]})}),(0,t.jsx)(u,{}),(0,t.jsx)(s.a,{href:"/api/types/enums/business-rules-type",children:(0,t.jsx)(s.code,{children:"BusinessRulesType"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Different business rules for filtering options that you are interested in."}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/api/types/objects/hotel-xcommon-settings-data",children:(0,t.jsx)(s.code,{children:"HotelXCommonSettingsData"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(u,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/hotel-xdefault-settings-data",children:(0,t.jsx)(s.code,{children:"HotelXDefaultSettingsData"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},21020:(e,s,n)=>{var t=n(96540),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,s,n){var t,o={},c=null,u=null;for(t in void 0!==n&&(c=""+n),void 0!==s.key&&(c=""+s.key),void 0!==s.ref&&(u=s.ref),s)i.call(s,t)&&!a.hasOwnProperty(t)&&(o[t]=s[t]);if(e&&e.defaultProps)for(t in s=e.defaultProps)void 0===o[t]&&(o[t]=s[t]);return{$$typeof:r,type:e,key:c,ref:u,props:o,_owner:l.current}}s.Fragment=o,s.jsx=c,s.jsxs=c},74848:(e,s,n)=>{e.exports=n(21020)},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>l});var t=n(96540);const r={},o=t.createContext(r);function i(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);
/*! For license information please see cd5851ec.3f2472d0.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5243],{16712:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>u,Details:()=>g,SpecifiedBy:()=>c,assets:()=>r,contentTitle:()=>l,default:()=>x,frontMatter:()=>i,metadata:()=>o,toc:()=>y});var a=n(74848),s=n(28453),d=n(96540);const i={id:"additional-guest-input",title:"AdditionalGuestInput"},l=void 0,o={id:"types/inputs/additional-guest-input",title:"AdditionalGuestInput",description:"Represents an additional guest for a room.",source:"@site/api/types/inputs/additional-guest-input.mdx",sourceDirName:"types/inputs",slug:"/types/inputs/additional-guest-input",permalink:"/api/types/inputs/additional-guest-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"additional-guest-input",title:"AdditionalGuestInput"},sidebar:"schemaSidebar",previous:{title:"ActivationValidateInput",permalink:"/api/types/inputs/activation-validate-input"},next:{title:"AdditionalGuestsSupplementsInput",permalink:"/api/types/inputs/additional-guests-supplements-input"}},r={},u=()=>{const e={span:"span",...(0,s.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},c=e=>{const t={a:"a",...(0,s.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,s.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:t,children:n,startOpen:i=!1})=>{const l={details:"details",summary:"summary",...(0,s.R)()},[o,r]=(0,d.useState)(i);return(0,a.jsxs)(l.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(l.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:o?e:t}),o&&n]})},y=[{value:"Fields",id:"fields",level:3},{value:'<code>AdditionalGuestInput.<b>additionalGuestType</b></code><Bullet></Bullet><code>AdditionalGuestType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"additionalguestinputadditionalguesttypeadditionalguesttype--",level:4},{value:'<code>AdditionalGuestInput.<b>guestPosition</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"additionalguestinputguestpositionint--",level:4},{value:'<code>AdditionalGuestInput.<b>amount</b></code><Bullet></Bullet><code>Float!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"additionalguestinputamountfloat--",level:4},{value:'<code>AdditionalGuestInput.<b>type</b></code><Bullet></Bullet><code>AmountApplyType</code> <Badge class="badge badge--secondary"></Badge>',id:"additionalguestinputtypeamountapplytype-",level:4},{value:"Member Of",id:"member-of",level:3}];function h(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Represents an additional guest for a room."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"input AdditionalGuestInput {\n  additionalGuestType: AdditionalGuestType!\n  guestPosition: Int!\n  amount: Float!\n  type: AmountApplyType\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"additionalguestinputadditionalguesttypeadditionalguesttype--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AdditionalGuestInput.",(0,a.jsx)("b",{children:"additionalGuestType"})]})}),(0,a.jsx)(u,{}),(0,a.jsx)(t.a,{href:"/api/types/enums/additional-guest-type",children:(0,a.jsx)(t.code,{children:"AdditionalGuestType!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsx)(t.p,{children:"Type of the additional guest. See AdditionalGuestType."}),"\n",(0,a.jsxs)(t.h4,{id:"additionalguestinputguestpositionint--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AdditionalGuestInput.",(0,a.jsx)("b",{children:"guestPosition"})]})}),(0,a.jsx)(u,{}),(0,a.jsx)(t.a,{href:"/api/types/scalars/int",children:(0,a.jsx)(t.code,{children:"Int!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(t.p,{children:"Position of the guest."}),"\n",(0,a.jsxs)(t.h4,{id:"additionalguestinputamountfloat--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AdditionalGuestInput.",(0,a.jsx)("b",{children:"amount"})]})}),(0,a.jsx)(u,{}),(0,a.jsx)(t.a,{href:"/api/types/scalars/float",children:(0,a.jsx)(t.code,{children:"Float!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(t.p,{children:"Amount associated with the additional guest."}),"\n",(0,a.jsxs)(t.h4,{id:"additionalguestinputtypeamountapplytype-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AdditionalGuestInput.",(0,a.jsx)("b",{children:"type"})]})}),(0,a.jsx)(u,{}),(0,a.jsx)(t.a,{href:"/api/types/enums/amount-apply-type",children:(0,a.jsx)(t.code,{children:"AmountApplyType"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsx)(t.p,{children:"Type of the amount application. See AmountApplyType."}),"\n",(0,a.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/api/types/inputs/additional-guests-supplements-input",children:(0,a.jsx)(t.code,{children:"AdditionalGuestsSupplementsInput"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"})]})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},21020:(e,t,n)=>{var a=n(96540),s=Symbol.for("react.element"),d=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function r(e,t,n){var a,d={},r=null,u=null;for(a in void 0!==n&&(r=""+n),void 0!==t.key&&(r=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,a)&&!o.hasOwnProperty(a)&&(d[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===d[a]&&(d[a]=t[a]);return{$$typeof:s,type:e,key:r,ref:u,props:d,_owner:l.current}}t.Fragment=d,t.jsx=r,t.jsxs=r},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var a=n(96540);const s={},d=a.createContext(s);function i(e){const t=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(d.Provider,{value:t},e.children)}}}]);
/*! For license information please see 62d3c186.ded3ca61.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3770],{54138:(e,r,s)=>{s.r(r),s.d(r,{Badge:()=>p,Bullet:()=>o,Details:()=>f,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>d,default:()=>j,frontMatter:()=>c,metadata:()=>l,toc:()=>h});var a=s(74848),n=s(28453),t=s(96540);const c={id:"preference-rule",title:"PreferenceRule"},d=void 0,l={id:"types/objects/preference-rule",title:"PreferenceRule",description:"The PreferenceRule type represents a preference rule in the system.",source:"@site/api/types/objects/preference-rule.mdx",sourceDirName:"types/objects",slug:"/types/objects/preference-rule",permalink:"/api/types/objects/preference-rule",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"preference-rule",title:"PreferenceRule"},sidebar:"schemaSidebar",previous:{title:"PreferenceRuleValue",permalink:"/api/types/objects/preference-rule-value"},next:{title:"PriceAdjust",permalink:"/api/types/objects/price-adjust"}},i={},o=()=>{const e={span:"span",...(0,n.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const r={a:"a",...(0,n.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const r={span:"span",...(0,n.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(r.span,{className:e.class,children:e.text})})},f=({dataOpen:e,dataClose:r,children:s,startOpen:c=!1})=>{const d={details:"details",summary:"summary",...(0,n.R)()},[l,i]=(0,t.useState)(c);return(0,a.jsxs)(d.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(d.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:l?e:r}),l&&s]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>PreferenceRule.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"preferencerulecreatedatdatetime--",level:4},{value:'<code>PreferenceRule.<b>id</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"preferenceruleidid--",level:4},{value:'<code>PreferenceRule.<b>preferenceData</b></code><Bullet></Bullet><code>PreferenceRuleData</code> <Badge class="badge badge--secondary"></Badge>',id:"preferencerulepreferencedatapreferenceruledata-",level:4},{value:'<code>PreferenceRule.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"preferenceruleadvisemessageadvisemessage--",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const r={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.p,{children:"The PreferenceRule type represents a preference rule in the system."}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-graphql",children:"type PreferenceRule {\n  createdAt: DateTime!\n  id: ID!\n  preferenceData: PreferenceRuleData\n  adviseMessage: [AdviseMessage!]\n}\n"})}),"\n",(0,a.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(r.h4,{id:"preferencerulecreatedatdatetime--",children:[(0,a.jsx)(r.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["PreferenceRule.",(0,a.jsx)("b",{children:"createdAt"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(r.a,{href:"/api/types/scalars/date-time",children:(0,a.jsx)(r.code,{children:"DateTime!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(r.p,{children:"The date and time when the rule was created."}),"\n",(0,a.jsxs)(r.h4,{id:"preferenceruleidid--",children:[(0,a.jsx)(r.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["PreferenceRule.",(0,a.jsx)("b",{children:"id"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(r.a,{href:"/api/types/scalars/id",children:(0,a.jsx)(r.code,{children:"ID!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(r.p,{children:"Unique identifier of the rule."}),"\n",(0,a.jsxs)(r.h4,{id:"preferencerulepreferencedatapreferenceruledata-",children:[(0,a.jsx)(r.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["PreferenceRule.",(0,a.jsx)("b",{children:"preferenceData"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(r.a,{href:"/api/types/objects/preference-rule-data",children:(0,a.jsx)(r.code,{children:"PreferenceRuleData"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(r.h4,{id:"preferenceruleadvisemessageadvisemessage--",children:[(0,a.jsx)(r.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["PreferenceRule.",(0,a.jsx)("b",{children:"adviseMessage"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(r.a,{href:"/api/types/objects/advise-message",children:(0,a.jsx)(r.code,{children:"[AdviseMessage!]"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(r.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"/api/types/objects/preference-rule-edge",children:(0,a.jsx)(r.code,{children:"PreferenceRuleEdge"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(o,{}),(0,a.jsx)(r.a,{href:"/api/types/objects/rules-mutation",children:(0,a.jsx)(r.code,{children:"RulesMutation"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},21020:(e,r,s)=>{var a=s(96540),n=Symbol.for("react.element"),t=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,s){var a,t={},i=null,o=null;for(a in void 0!==s&&(i=""+s),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(o=r.ref),r)c.call(r,a)&&!l.hasOwnProperty(a)&&(t[a]=r[a]);if(e&&e.defaultProps)for(a in r=e.defaultProps)void 0===t[a]&&(t[a]=r[a]);return{$$typeof:n,type:e,key:i,ref:o,props:t,_owner:d.current}}r.Fragment=t,r.jsx=i,r.jsxs=i},74848:(e,r,s)=>{e.exports=s(21020)},28453:(e,r,s)=>{s.d(r,{R:()=>c,x:()=>d});var a=s(96540);const n={},t=a.createContext(n);function c(e){const r=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),a.createElement(t.Provider,{value:r},e.children)}}}]);
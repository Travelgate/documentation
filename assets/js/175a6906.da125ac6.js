/*! For license information please see 175a6906.da125ac6.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2156],{86457:(e,t,l)=>{l.r(t),l.d(t,{Badge:()=>p,Bullet:()=>u,Details:()=>h,SpecifiedBy:()=>o,assets:()=>d,contentTitle:()=>c,default:()=>x,frontMatter:()=>i,metadata:()=>a,toc:()=>g});const a=JSON.parse('{"id":"types/inputs/create-blacklist-rule-input","title":"CreateBlacklistRuleInput","description":"The input type for creating a BlacklistRule.","source":"@site/api/types/inputs/create-blacklist-rule-input.mdx","sourceDirName":"types/inputs","slug":"/types/inputs/create-blacklist-rule-input","permalink":"/api/types/inputs/create-blacklist-rule-input","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"create-blacklist-rule-input","title":"CreateBlacklistRuleInput"},"sidebar":"schemaSidebar","previous":{"title":"ContentWhereInput","permalink":"/api/types/inputs/content-where-input"},"next":{"title":"CreateHotelXGroupInput","permalink":"/api/types/inputs/create-hotel-xgroup-input"}}');var n=l(74848),s=l(28453),r=l(96540);const i={id:"create-blacklist-rule-input",title:"CreateBlacklistRuleInput"},c=void 0,d={},u=()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),o=e=>(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),p=e=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{className:e.class,children:e.text})}),h=({dataOpen:e,dataClose:t,children:l,startOpen:a=!1})=>{const[s,i]=(0,r.useState)(a);return(0,n.jsxs)("details",{...s?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:s?e:t}),s&&l]})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>CreateBlacklistRuleInput.<b>groupCode</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"createblacklistruleinputgroupcodeid--",level:4},{value:'<code>CreateBlacklistRuleInput.<b>tag</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"createblacklistruleinputtagstring--",level:4},{value:'<code>CreateBlacklistRuleInput.<b>criteria</b></code><Bullet></Bullet><code>BlacklistRuleCriteriaInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"createblacklistruleinputcriteriablacklistrulecriteriainput--",level:4},{value:'<code>CreateBlacklistRuleInput.<b>value</b></code><Bullet></Bullet><code>BlacklistRuleValueInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"createblacklistruleinputvalueblacklistrulevalueinput--",level:4}];function b(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"The input type for creating a BlacklistRule."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"input CreateBlacklistRuleInput {\n  groupCode: ID!\n  tag: String!\n  criteria: BlacklistRuleCriteriaInput!\n  value: BlacklistRuleValueInput!\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.h4,{id:"createblacklistruleinputgroupcodeid--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["CreateBlacklistRuleInput.",(0,n.jsx)("b",{children:"groupCode"})]})}),(0,n.jsx)(u,{}),(0,n.jsx)(t.a,{href:"/api/types/scalars/id",children:(0,n.jsx)(t.code,{children:"ID!"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.p,{children:"Group code where the rule will apply."}),"\n",(0,n.jsxs)(t.h4,{id:"createblacklistruleinputtagstring--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["CreateBlacklistRuleInput.",(0,n.jsx)("b",{children:"tag"})]})}),(0,n.jsx)(u,{}),(0,n.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,n.jsx)(t.code,{children:"String!"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.p,{children:"It is used to identify the rule with a frendly name."}),"\n",(0,n.jsxs)(t.h4,{id:"createblacklistruleinputcriteriablacklistrulecriteriainput--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["CreateBlacklistRuleInput.",(0,n.jsx)("b",{children:"criteria"})]})}),(0,n.jsx)(u,{}),(0,n.jsx)(t.a,{href:"/api/types/inputs/blacklist-rule-criteria-input",children:(0,n.jsx)(t.code,{children:"BlacklistRuleCriteriaInput!"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,n.jsx)(t.p,{children:"It is used to define the conditions that the rule will be applied to."}),"\n",(0,n.jsxs)(t.h4,{id:"createblacklistruleinputvalueblacklistrulevalueinput--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["CreateBlacklistRuleInput.",(0,n.jsx)("b",{children:"value"})]})}),(0,n.jsx)(u,{}),(0,n.jsx)(t.a,{href:"/api/types/inputs/blacklist-rule-value-input",children:(0,n.jsx)(t.code,{children:"BlacklistRuleValueInput!"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,n.jsx)(t.p,{children:"It is used to define the codes that will be blacklisted or whitelisted."})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(b,{...e})}):b(e)}},21020:(e,t,l)=>{var a=l(96540),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,l){var a,s={},d=null,u=null;for(a in void 0!==l&&(d=""+l),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(u=t.ref),t)r.call(t,a)&&!c.hasOwnProperty(a)&&(s[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===s[a]&&(s[a]=t[a]);return{$$typeof:n,type:e,key:d,ref:u,props:s,_owner:i.current}}t.Fragment=s,t.jsx=d,t.jsxs=d},74848:(e,t,l)=>{e.exports=l(21020)},28453:(e,t,l)=>{l.d(t,{R:()=>r,x:()=>i});var a=l(96540);const n={},s=a.createContext(n);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);
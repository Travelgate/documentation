/*! For license information please see fe9f242a.a1fc545c.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[51444],{75407:(e,t,l)=>{l.r(t),l.d(t,{Badge:()=>b,Bullet:()=>c,Details:()=>h,SpecifiedBy:()=>o,assets:()=>u,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>d,toc:()=>p});var a=l(74848),s=l(28453),n=l(96540);const r={id:"rules-mutation",title:"RulesMutation"},i=void 0,d={id:"types/objects/rules-mutation",title:"RulesMutation",description:"The RulesMutation type represents the mutation root for the rules management API.",source:"@site/api/types/objects/rules-mutation.mdx",sourceDirName:"types/objects",slug:"/types/objects/rules-mutation",permalink:"/api/types/objects/rules-mutation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"rules-mutation",title:"RulesMutation"},sidebar:"schemaSidebar",previous:{title:"Rule",permalink:"/api/types/objects/rule"},next:{title:"RulesQuery",permalink:"/api/types/objects/rules-query"}},u={},c=()=>{const e={span:"span",...(0,s.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},o=e=>{const t={a:"a",...(0,s.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},b=e=>{const t={span:"span",...(0,s.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:t,children:l,startOpen:r=!1})=>{const i={details:"details",summary:"summary",...(0,s.R)()},[d,u]=(0,n.useState)(r);return(0,a.jsxs)(i.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(i.summary,{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"},children:d?e:t}),d&&l]})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>RulesMutation.<b>createBlacklistRule</b></code><Bullet></Bullet><code>BlacklistRule!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"rulesmutationcreateblacklistruleblacklistrule--",level:4},{value:'<code>RulesMutation.createBlacklistRule.<b>input</b></code><Bullet></Bullet><code>CreateBlacklistRuleInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"rulesmutationcreateblacklistruleinputcreateblacklistruleinput--",level:5},{value:'<code>RulesMutation.<b>updateBlacklistRule</b></code><Bullet></Bullet><code>BlacklistRule!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"rulesmutationupdateblacklistruleblacklistrule--",level:4},{value:'<code>RulesMutation.updateBlacklistRule.<b>where</b></code><Bullet></Bullet><code>WhereRuleMutationInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"rulesmutationupdateblacklistrulewherewhererulemutationinput--",level:5},{value:'<code>RulesMutation.updateBlacklistRule.<b>data</b></code><Bullet></Bullet><code>UpdateBlacklistRuleInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"rulesmutationupdateblacklistruledataupdateblacklistruleinput--",level:5},{value:'<code>RulesMutation.<b>deleteBlacklistRule</b></code><Bullet></Bullet><code>BlacklistRule!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"rulesmutationdeleteblacklistruleblacklistrule--",level:4},{value:'<code>RulesMutation.deleteBlacklistRule.<b>where</b></code><Bullet></Bullet><code>WhereRuleMutationInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"rulesmutationdeleteblacklistrulewherewhererulemutationinput--",level:5},{value:'<code>RulesMutation.<b>updateBlacklistRulePriority</b></code><Bullet></Bullet><code>BlacklistRule!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"rulesmutationupdateblacklistrulepriorityblacklistrule--",level:4},{value:'<code>RulesMutation.updateBlacklistRulePriority.<b>where</b></code><Bullet></Bullet><code>WhereRuleMutationInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"rulesmutationupdateblacklistruleprioritywherewhererulemutationinput--",level:5},{value:'<code>RulesMutation.updateBlacklistRulePriority.<b>priority</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"rulesmutationupdateblacklistruleprioritypriorityint--",level:5},{value:"Member Of",id:"member-of",level:3}];function x(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"The RulesMutation type represents the mutation root for the rules management API."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"type RulesMutation {\n  createBlacklistRule(input: CreateBlacklistRuleInput!): BlacklistRule!\n  updateBlacklistRule(\n    where: WhereRuleMutationInput!\n    data: UpdateBlacklistRuleInput!\n  ): BlacklistRule!\n  deleteBlacklistRule(where: WhereRuleMutationInput!): BlacklistRule!\n  updateBlacklistRulePriority(\n    where: WhereRuleMutationInput!\n    priority: Int!\n  ): BlacklistRule!\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"rulesmutationcreateblacklistruleblacklistrule--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["RulesMutation.",(0,a.jsx)("b",{children:"createBlacklistRule"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/types/objects/blacklist-rule",children:(0,a.jsx)(t.code,{children:"BlacklistRule!"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Create a new rule."}),"\n",(0,a.jsxs)(t.h5,{id:"rulesmutationcreateblacklistruleinputcreateblacklistruleinput--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["RulesMutation.createBlacklistRule.",(0,a.jsx)("b",{children:"input"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/create-blacklist-rule-input",children:(0,a.jsx)(t.code,{children:"CreateBlacklistRuleInput!"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"input"})]}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"rulesmutationupdateblacklistruleblacklistrule--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["RulesMutation.",(0,a.jsx)("b",{children:"updateBlacklistRule"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/types/objects/blacklist-rule",children:(0,a.jsx)(t.code,{children:"BlacklistRule!"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Update an existing rule by ID."}),"\n",(0,a.jsxs)(t.h5,{id:"rulesmutationupdateblacklistrulewherewhererulemutationinput--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["RulesMutation.updateBlacklistRule.",(0,a.jsx)("b",{children:"where"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/where-rule-mutation-input",children:(0,a.jsx)(t.code,{children:"WhereRuleMutationInput!"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"input"})]}),"\n"]}),"\n",(0,a.jsxs)(t.h5,{id:"rulesmutationupdateblacklistruledataupdateblacklistruleinput--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["RulesMutation.updateBlacklistRule.",(0,a.jsx)("b",{children:"data"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/update-blacklist-rule-input",children:(0,a.jsx)(t.code,{children:"UpdateBlacklistRuleInput!"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsx)(t.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(t.h4,{id:"rulesmutationdeleteblacklistruleblacklistrule--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["RulesMutation.",(0,a.jsx)("b",{children:"deleteBlacklistRule"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/types/objects/blacklist-rule",children:(0,a.jsx)(t.code,{children:"BlacklistRule!"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Delete a rule by ID."}),"\n",(0,a.jsxs)(t.h5,{id:"rulesmutationdeleteblacklistrulewherewhererulemutationinput--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["RulesMutation.deleteBlacklistRule.",(0,a.jsx)("b",{children:"where"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/where-rule-mutation-input",children:(0,a.jsx)(t.code,{children:"WhereRuleMutationInput!"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"input"})]}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"rulesmutationupdateblacklistrulepriorityblacklistrule--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["RulesMutation.",(0,a.jsx)("b",{children:"updateBlacklistRulePriority"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/types/objects/blacklist-rule",children:(0,a.jsx)(t.code,{children:"BlacklistRule!"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Update the priority of a specific rule. This mutation will update all the rules with greater priority to ensure the priority is unique."}),"\n",(0,a.jsxs)(t.h5,{id:"rulesmutationupdateblacklistruleprioritywherewhererulemutationinput--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["RulesMutation.updateBlacklistRulePriority.",(0,a.jsx)("b",{children:"where"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/where-rule-mutation-input",children:(0,a.jsx)(t.code,{children:"WhereRuleMutationInput!"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"input"})]}),"\n"]}),"\n",(0,a.jsxs)(t.h5,{id:"rulesmutationupdateblacklistruleprioritypriorityint--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["RulesMutation.updateBlacklistRulePriority.",(0,a.jsx)("b",{children:"priority"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/types/scalars/int",children:(0,a.jsx)(t.code,{children:"Int!"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(t.blockquote,{children:"\n"}),"\n",(0,a.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/api/types/objects/hotel-xmutation",children:(0,a.jsx)(t.code,{children:"HotelXMutation"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"object"})]})]})}function g(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},21020:(e,t,l)=>{var a=l(96540),s=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,l){var a,n={},u=null,c=null;for(a in void 0!==l&&(u=""+l),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)r.call(t,a)&&!d.hasOwnProperty(a)&&(n[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===n[a]&&(n[a]=t[a]);return{$$typeof:s,type:e,key:u,ref:c,props:n,_owner:i.current}}t.Fragment=n,t.jsx=u,t.jsxs=u},74848:(e,t,l)=>{e.exports=l(21020)},28453:(e,t,l)=>{l.d(t,{R:()=>r,x:()=>i});var a=l(96540);const s={},n=a.createContext(s);function r(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);
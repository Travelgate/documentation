/*! For license information please see 0f7a633d.ccb68a0e.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[92653],{65448:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>p,Bullet:()=>d,Details:()=>h,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>x});var r=t(74848),a=t(28453),l=t(96540);const s={id:"alert-group-input",title:"AlertGroupInput",hide_table_of_contents:!1},o=void 0,i={id:"inputs/alert-group-input",title:"AlertGroupInput",description:"No description",source:"@site/api/inputs/alert-group-input.mdx",sourceDirName:"inputs",slug:"/inputs/alert-group-input",permalink:"/api/inputs/alert-group-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"alert-group-input",title:"AlertGroupInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AlertFilterInput",permalink:"/api/inputs/alert-filter-input"},next:{title:"AlertHubStatusInput",permalink:"/api/inputs/alert-hub-status-input"}},c={},d=()=>{const e={span:"span",...(0,a.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,a.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const n={span:"span",...(0,a.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(n.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:n,children:t,startOpen:s=!1})=>{const o={details:"details",summary:"summary",...(0,a.R)()},[i,c]=(0,l.useState)(s);return(0,r.jsxs)(o.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(o.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:i?e:n}),i&&t]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>AlertGroupInput.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertgroupinputcodeid--",level:4},{value:'<code>AlertGroupInput.<b>comercialType</b></code><Bullet></Bullet><code>AlertComercialType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertgroupinputcomercialtypealertcomercialtype--",level:4},{value:'<code>AlertGroupInput.<b>isInclusive</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertgroupinputisinclusiveboolean--",level:4},{value:"Member of",id:"member-of",level:3}];function g(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"No description"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"input AlertGroupInput {\n  code: ID!\n  comercialType: AlertComercialType!\n  isInclusive: Boolean!\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(n.h4,{id:"alertgroupinputcodeid--",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertGroupInput.",(0,r.jsx)("b",{children:"code"})]})}),(0,r.jsx)(d,{}),(0,r.jsx)(n.a,{href:"/api/scalars/id",children:(0,r.jsx)(n.code,{children:"ID!"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Group code"}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"alertgroupinputcomercialtypealertcomercialtype--",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertGroupInput.",(0,r.jsx)("b",{children:"comercialType"})]})}),(0,r.jsx)(d,{}),(0,r.jsx)(n.a,{href:"/api/enums/alert-comercial-type",children:(0,r.jsx)(n.code,{children:"AlertComercialType!"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"SELLER or BUYER"}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"alertgroupinputisinclusiveboolean--",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertGroupInput.",(0,r.jsx)("b",{children:"isInclusive"})]})}),(0,r.jsx)(d,{}),(0,r.jsx)(n.a,{href:"/api/scalars/boolean",children:(0,r.jsx)(n.code,{children:"Boolean!"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Can be filtered traffic setting as inclusive or excludent"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"member-of",children:"Member of"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/inputs/alert-common-configuration-input",children:(0,r.jsx)(n.code,{children:"AlertCommonConfigurationInput"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,r.jsx)(d,{}),(0,r.jsx)(n.a,{href:"/api/inputs/alert-update-common-configuration-input",children:(0,r.jsx)(n.code,{children:"AlertUpdateCommonConfigurationInput"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"input"})]})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},21020:(e,n,t)=>{var r=t(96540),a=Symbol.for("react.element"),l=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,l={},c=null,d=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)s.call(n,r)&&!i.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===l[r]&&(l[r]=n[r]);return{$$typeof:a,type:e,key:c,ref:d,props:l,_owner:o.current}}n.Fragment=l,n.jsx=c,n.jsxs=c},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var r=t(96540);const a={},l=r.createContext(a);function s(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);
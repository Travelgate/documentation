/*! For license information please see 893b302b.b617e47f.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[14748],{39575:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>u,Bullet:()=>l,Details:()=>m,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>o,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"types/inputs/recommendations-where-input","title":"RecommendationsWhereInput","description":"RECOMMENDATIONS // Where Input","source":"@site/api/types/inputs/recommendations-where-input.mdx","sourceDirName":"types/inputs","slug":"/types/inputs/recommendations-where-input","permalink":"/api/types/inputs/recommendations-where-input","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"recommendations-where-input","title":"RecommendationsWhereInput"},"sidebar":"schemaSidebar","previous":{"title":"RateUpdateInput","permalink":"/api/types/inputs/rate-update-input"},"next":{"title":"ReconBoardDataInput","permalink":"/api/types/inputs/recon-board-data-input"}}');var s=t(74848),a=t(28453),d=t(96540);const o={id:"recommendations-where-input",title:"RecommendationsWhereInput"},i=void 0,c={},l=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),u=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{className:e.class,children:e.text})}),m=({dataOpen:e,dataClose:n,children:t,startOpen:r=!1})=>{const[a,o]=(0,d.useState)(r);return(0,s.jsxs)("details",{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)("summary",{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:a?e:n}),a&&t]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>RecommendationsWhereInput.<b>requestMode</b></code><Bullet></Bullet><code>ModeType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"recommendationswhereinputrequestmodemodetype--",level:4},{value:'<code>RecommendationsWhereInput.<b>owner</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"recommendationswhereinputownerid--",level:4},{value:'<code>RecommendationsWhereInput.<b>marketCode_in</b></code><Bullet></Bullet><code>[String!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"recommendationswhereinputmarketcode_instring--",level:4},{value:'<code>RecommendationsWhereInput.<b>countryCode_in</b></code><Bullet></Bullet><code>[String!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"recommendationswhereinputcountrycode_instring--",level:4},{value:'<code>RecommendationsWhereInput.<b>criteria_in</b></code><Bullet></Bullet><code>[CriteriaType!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"recommendationswhereinputcriteria_incriteriatype--",level:4}];function g(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"RECOMMENDATIONS // Where Input"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"input RecommendationsWhereInput {\n  requestMode: ModeType!\n  owner: ID!\n  marketCode_in: [String!]\n  countryCode_in: [String!]\n  criteria_in: [CriteriaType!]\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(n.h4,{id:"recommendationswhereinputrequestmodemodetype--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["RecommendationsWhereInput.",(0,s.jsx)("b",{children:"requestMode"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/api/types/enums/mode-type",children:(0,s.jsx)(n.code,{children:"ModeType!"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,s.jsxs)(n.h4,{id:"recommendationswhereinputownerid--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["RecommendationsWhereInput.",(0,s.jsx)("b",{children:"owner"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/api/types/scalars/id",children:(0,s.jsx)(n.code,{children:"ID!"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.h4,{id:"recommendationswhereinputmarketcode_instring--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["RecommendationsWhereInput.",(0,s.jsx)("b",{children:"marketCode_in"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/api/types/scalars/string",children:(0,s.jsx)(n.code,{children:"[String!]"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.h4,{id:"recommendationswhereinputcountrycode_instring--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["RecommendationsWhereInput.",(0,s.jsx)("b",{children:"countryCode_in"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/api/types/scalars/string",children:(0,s.jsx)(n.code,{children:"[String!]"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.h4,{id:"recommendationswhereinputcriteria_incriteriatype--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["RecommendationsWhereInput.",(0,s.jsx)("b",{children:"criteria_in"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/api/types/enums/criteria-type",children:(0,s.jsx)(n.code,{children:"[CriteriaType!]"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"enum"})]})]})}function x(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},21020:(e,n,t)=>{var r=t(96540),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,a={},c=null,l=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(l=n.ref),n)d.call(n,r)&&!i.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===a[r]&&(a[r]=n[r]);return{$$typeof:s,type:e,key:c,ref:l,props:a,_owner:o.current}}n.Fragment=a,n.jsx=c,n.jsxs=c},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>o});var r=t(96540);const s={},a=r.createContext(s);function d(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);
/*! For license information please see 22204e6c.f77cfdd1.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[41973],{60880:(e,n,s)=>{s.r(n),s.d(n,{Badge:()=>h,Bullet:()=>d,Details:()=>b,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>c,default:()=>x,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var o=s(74848),a=s(28453),t=s(96540);const r={id:"bookable-option-search",title:"BookableOptionSearch"},c=void 0,l={id:"types/interfaces/bookable-option-search",title:"BookableOptionSearch",description:"No description",source:"@site/api/types/interfaces/bookable-option-search.mdx",sourceDirName:"types/interfaces",slug:"/types/interfaces/bookable-option-search",permalink:"/api/types/interfaces/bookable-option-search",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"bookable-option-search",title:"BookableOptionSearch"},sidebar:"schemaSidebar",previous:{title:"WhereRuleQueryInput",permalink:"/api/types/inputs/where-rule-query-input"},next:{title:"GroupCommonData",permalink:"/api/types/interfaces/group-common-data"}},i={},d=()=>{const e={span:"span",...(0,a.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const n={a:"a",...(0,a.R)()};return(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,a.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(n.span,{className:e.class,children:e.text})})},b=({dataOpen:e,dataClose:n,children:s,startOpen:r=!1})=>{const c={details:"details",summary:"summary",...(0,a.R)()},[l,i]=(0,t.useState)(r);return(0,o.jsxs)(c.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)(c.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:l?e:n}),l&&s]})},u=[{value:"Fields",id:"fields",level:3},{value:'<code>BookableOptionSearch.<b>supplierCode</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"bookableoptionsearchsuppliercodestring--",level:4},{value:'<code>BookableOptionSearch.<b>accessCode</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"bookableoptionsearchaccesscodestring--",level:4},{value:'<code>BookableOptionSearch.<b>id</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"bookableoptionsearchidstring--",level:4},{value:"Implemented By",id:"implemented-by",level:3}];function g(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"No description"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:"interface BookableOptionSearch {\n  supplierCode: String!\n  accessCode: String!\n  id: String!\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(n.h4,{id:"bookableoptionsearchsuppliercodestring--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["BookableOptionSearch.",(0,o.jsx)("b",{children:"supplierCode"})]})}),(0,o.jsx)(d,{}),(0,o.jsx)(n.a,{href:"/api/types/scalars/string",children:(0,o.jsx)(n.code,{children:"String!"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Supplier that offers this option."}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"bookableoptionsearchaccesscodestring--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["BookableOptionSearch.",(0,o.jsx)("b",{children:"accessCode"})]})}),(0,o.jsx)(d,{}),(0,o.jsx)(n.a,{href:"/api/types/scalars/string",children:(0,o.jsx)(n.code,{children:"String!"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Access code of this option."}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"bookableoptionsearchidstring--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["BookableOptionSearch.",(0,o.jsx)("b",{children:"id"})]})}),(0,o.jsx)(d,{}),(0,o.jsx)(n.a,{href:"/api/types/scalars/string",children:(0,o.jsx)(n.code,{children:"String!"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Indicates the id to be used on Quote as key"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/api/types/objects/hotel-option-search",children:(0,o.jsx)(n.code,{children:"HotelOptionSearch"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}},21020:(e,n,s)=>{var o=s(96540),a=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,s){var o,t={},i=null,d=null;for(o in void 0!==s&&(i=""+s),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(d=n.ref),n)r.call(n,o)&&!l.hasOwnProperty(o)&&(t[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===t[o]&&(t[o]=n[o]);return{$$typeof:a,type:e,key:i,ref:d,props:t,_owner:c.current}}n.Fragment=t,n.jsx=i,n.jsxs=i},74848:(e,n,s)=>{e.exports=s(21020)},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var o=s(96540);const a={},t=o.createContext(a);function r(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);
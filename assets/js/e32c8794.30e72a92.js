/*! For license information please see e32c8794.30e72a92.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[13982],{40019:(e,n,r)=>{r.r(n),r.d(n,{Badge:()=>p,Bullet:()=>c,Details:()=>h,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>o,default:()=>x,frontMatter:()=>d,metadata:()=>t,toc:()=>y});const t=JSON.parse('{"id":"types/inputs/journey-input","title":"JourneyInput","description":"No description","source":"@site/api/types/inputs/journey-input.mdx","sourceDirName":"types/inputs","slug":"/types/inputs/journey-input","permalink":"/api/types/inputs/journey-input","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"journey-input","title":"JourneyInput"},"sidebar":"schemaSidebar","previous":{"title":"InventoryUpdateHotelSetupInput","permalink":"/api/types/inputs/inventory-update-hotel-setup-input"},"next":{"title":"KeyContactPropertiesInput","permalink":"/api/types/inputs/key-contact-properties-input"}}');var s=r(74848),i=r(28453),a=r(96540);const d={id:"journey-input",title:"JourneyInput"},o=void 0,l={},c=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),u=e=>(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),p=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{className:e.class,children:e.text})}),h=({dataOpen:e,dataClose:n,children:r,startOpen:t=!1})=>{const[i,d]=(0,a.useState)(t);return(0,s.jsxs)("details",{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:i?e:n}),i&&r]})},y=[{value:"Fields",id:"fields",level:3},{value:'<code>JourneyInput.<b>departure</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"journeyinputdeparturestring-",level:4},{value:'<code>JourneyInput.<b>return</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"journeyinputreturnstring-",level:4},{value:'<code>JourneyInput.<b>originCode</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"journeyinputorigincodeid-",level:4},{value:'<code>JourneyInput.<b>destinationCode</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"journeyinputdestinationcodeid-",level:4},{value:'<code>JourneyInput.<b>alternativeReturnCode</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"journeyinputalternativereturncodeid-",level:4},{value:"Member Of",id:"member-of",level:3}];function j(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"No description"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"input JourneyInput {\n  departure: String\n  return: String\n  originCode: ID\n  destinationCode: ID\n  alternativeReturnCode: ID\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(n.h4,{id:"journeyinputdeparturestring-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["JourneyInput.",(0,s.jsx)("b",{children:"departure"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(n.a,{href:"/api/types/scalars/string",children:(0,s.jsx)(n.code,{children:"String"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(n.p,{children:"Departure Date, ISO 8601 Format."}),"\n",(0,s.jsxs)(n.h4,{id:"journeyinputreturnstring-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["JourneyInput.",(0,s.jsx)("b",{children:"return"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(n.a,{href:"/api/types/scalars/string",children:(0,s.jsx)(n.code,{children:"String"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(n.p,{children:"Return Date, ISO 8601 Format."}),"\n",(0,s.jsxs)(n.h4,{id:"journeyinputorigincodeid-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["JourneyInput.",(0,s.jsx)("b",{children:"originCode"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(n.a,{href:"/api/types/scalars/id",children:(0,s.jsx)(n.code,{children:"ID"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(n.p,{children:"Departure Location, needs Code Mapping."}),"\n",(0,s.jsxs)(n.h4,{id:"journeyinputdestinationcodeid-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["JourneyInput.",(0,s.jsx)("b",{children:"destinationCode"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(n.a,{href:"/api/types/scalars/id",children:(0,s.jsx)(n.code,{children:"ID"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(n.p,{children:"Arrival Location, needs Code Mapping."}),"\n",(0,s.jsxs)(n.h4,{id:"journeyinputalternativereturncodeid-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["JourneyInput.",(0,s.jsx)("b",{children:"alternativeReturnCode"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(n.a,{href:"/api/types/scalars/id",children:(0,s.jsx)(n.code,{children:"ID"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(n.p,{children:"Open-Jaw support, needs Code Mapping."}),"\n",(0,s.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/api/types/inputs/ferry-search-where-input",children:(0,s.jsx)(n.code,{children:"FerrySearchWhereInput"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"input"})]})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},21020:(e,n,r)=>{var t=r(96540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var t,i={},l=null,c=null;for(t in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(c=n.ref),n)a.call(n,t)&&!o.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:s,type:e,key:l,ref:c,props:i,_owner:d.current}}n.Fragment=i,n.jsx=l,n.jsxs=l},74848:(e,n,r)=>{e.exports=r(21020)},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>d});var t=r(96540);const s={},i=t.createContext(s);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);
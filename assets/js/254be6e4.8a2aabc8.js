/*! For license information please see 254be6e4.8a2aabc8.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[40296],{53980:(e,t,s)=>{s.r(t),s.d(t,{Badge:()=>u,Bullet:()=>c,Details:()=>h,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>d,metadata:()=>n,toc:()=>x});const n=JSON.parse('{"id":"types/inputs/restrictions-derived-rate-load-input","title":"RestrictionsDerivedRateLoadInput","description":"Represents the restrictions to load for a derived rate.","source":"@site/api/types/inputs/restrictions-derived-rate-load-input.mdx","sourceDirName":"types/inputs","slug":"/types/inputs/restrictions-derived-rate-load-input","permalink":"/api/types/inputs/restrictions-derived-rate-load-input","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"restrictions-derived-rate-load-input","title":"RestrictionsDerivedRateLoadInput"},"sidebar":"schemaSidebar","previous":{"title":"ResortInput","permalink":"/api/types/inputs/resort-input"},"next":{"title":"RestrictionsLoadInput","permalink":"/api/types/inputs/restrictions-load-input"}}');var i=s(74848),r=s(28453),a=s(96540);const d={id:"restrictions-derived-rate-load-input",title:"RestrictionsDerivedRateLoadInput"},o=void 0,l={},c=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),u=e=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{className:e.class,children:e.text})}),h=({dataOpen:e,dataClose:t,children:s,startOpen:n=!1})=>{const[r,d]=(0,a.useState)(n);return(0,i.jsxs)("details",{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:r?e:t}),r&&s]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>RestrictionsDerivedRateLoadInput.<b>lengthOfStay</b></code><Bullet></Bullet><code>LengthOfStayInput</code> <Badge class="badge badge--secondary"></Badge>',id:"restrictionsderivedrateloadinputlengthofstaylengthofstayinput-",level:4},{value:'<code>RestrictionsDerivedRateLoadInput.<b>minRelease</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"restrictionsderivedrateloadinputminreleaseint-",level:4},{value:'<code>RestrictionsDerivedRateLoadInput.<b>maxRelease</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"restrictionsderivedrateloadinputmaxreleaseint-",level:4},{value:'<code>RestrictionsDerivedRateLoadInput.<b>stopSales</b></code><Bullet></Bullet><code>StopSalesInput</code> <Badge class="badge badge--secondary"></Badge>',id:"restrictionsderivedrateloadinputstopsalesstopsalesinput-",level:4},{value:"Member Of",id:"member-of",level:3}];function f(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Represents the restrictions to load for a derived rate."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:"input RestrictionsDerivedRateLoadInput {\n  lengthOfStay: LengthOfStayInput\n  minRelease: Int\n  maxRelease: Int\n  stopSales: StopSalesInput\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(t.h4,{id:"restrictionsderivedrateloadinputlengthofstaylengthofstayinput-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["RestrictionsDerivedRateLoadInput.",(0,i.jsx)("b",{children:"lengthOfStay"})]})}),(0,i.jsx)(c,{}),(0,i.jsx)(t.a,{href:"/api/types/inputs/length-of-stay-input",children:(0,i.jsx)(t.code,{children:"LengthOfStayInput"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,i.jsx)(t.p,{children:"Length of stay associated with the product. See LengthOfStay."}),"\n",(0,i.jsxs)(t.h4,{id:"restrictionsderivedrateloadinputminreleaseint-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["RestrictionsDerivedRateLoadInput.",(0,i.jsx)("b",{children:"minRelease"})]})}),(0,i.jsx)(c,{}),(0,i.jsx)(t.a,{href:"/api/types/scalars/int",children:(0,i.jsx)(t.code,{children:"Int"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(t.p,{children:"Minimum release period associated with the product."}),"\n",(0,i.jsxs)(t.h4,{id:"restrictionsderivedrateloadinputmaxreleaseint-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["RestrictionsDerivedRateLoadInput.",(0,i.jsx)("b",{children:"maxRelease"})]})}),(0,i.jsx)(c,{}),(0,i.jsx)(t.a,{href:"/api/types/scalars/int",children:(0,i.jsx)(t.code,{children:"Int"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(t.p,{children:"Maximum release period associated with the product."}),"\n",(0,i.jsxs)(t.h4,{id:"restrictionsderivedrateloadinputstopsalesstopsalesinput-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["RestrictionsDerivedRateLoadInput.",(0,i.jsx)("b",{children:"stopSales"})]})}),(0,i.jsx)(c,{}),(0,i.jsx)(t.a,{href:"/api/types/inputs/stop-sales-input",children:(0,i.jsx)(t.code,{children:"StopSalesInput"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,i.jsx)(t.p,{children:"Stop sales associated with the product. See StopSales."}),"\n",(0,i.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/api/types/inputs/derived-rate-avail-load-input",children:(0,i.jsx)(t.code,{children:"DerivedRateAvailLoadInput"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(f,{...e})}):f(e)}},21020:(e,t,s)=>{var n=s(96540),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,d=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,s){var n,r={},l=null,c=null;for(n in void 0!==s&&(l=""+s),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,n)&&!o.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===r[n]&&(r[n]=t[n]);return{$$typeof:i,type:e,key:l,ref:c,props:r,_owner:d.current}}t.Fragment=r,t.jsx=l,t.jsxs=l},74848:(e,t,s)=>{e.exports=s(21020)},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>d});var n=s(96540);const i={},r=n.createContext(i);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);
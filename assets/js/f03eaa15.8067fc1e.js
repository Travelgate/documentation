/*! For license information please see f03eaa15.8067fc1e.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1957],{3687:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>p,Bullet:()=>c,Details:()=>u,SpecifiedBy:()=>f,assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>n,toc:()=>v});const n=JSON.parse('{"id":"types/inputs/offers-avail-retrieve-input","title":"OffersAvailRetrieveInput","description":"Represents a request to retrieve offers.","source":"@site/api/types/inputs/offers-avail-retrieve-input.mdx","sourceDirName":"types/inputs","slug":"/types/inputs/offers-avail-retrieve-input","permalink":"/api/types/inputs/offers-avail-retrieve-input","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"offers-avail-retrieve-input","title":"OffersAvailRetrieveInput"},"sidebar":"schemaSidebar","previous":{"title":"OffersAvailLoadInput","permalink":"/api/types/inputs/offers-avail-load-input"},"next":{"title":"OneStepBookRoomInput","permalink":"/api/types/inputs/one-step-book-room-input"}}');var s=r(74848),a=r(28453),i=r(96540);const o={id:"offers-avail-retrieve-input",title:"OffersAvailRetrieveInput"},l=void 0,d={},c=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),f=e=>(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),p=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{className:e.class,children:e.text})}),u=({dataOpen:e,dataClose:t,children:r,startOpen:n=!1})=>{const[a,o]=(0,i.useState)(n);return(0,s.jsxs)("details",{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)("summary",{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:a?e:t}),a&&r]})},v=[{value:"Fields",id:"fields",level:3},{value:'<code>OffersAvailRetrieveInput.<b>rateCode</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"offersavailretrieveinputratecodestring-",level:4},{value:'<code>OffersAvailRetrieveInput.<b>offers</b></code><Bullet></Bullet><code>[String]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"offersavailretrieveinputoffersstring--",level:4},{value:'<code>OffersAvailRetrieveInput.<b>dateRange</b></code><Bullet></Bullet><code>DateRangeProductInput</code> <Badge class="badge badge--secondary"></Badge>',id:"offersavailretrieveinputdaterangedaterangeproductinput-",level:4},{value:"Member Of",id:"member-of",level:3}];function h(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Represents a request to retrieve offers."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"input OffersAvailRetrieveInput {\n  rateCode: String\n  offers: [String]\n  dateRange: DateRangeProductInput\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(t.h4,{id:"offersavailretrieveinputratecodestring-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["OffersAvailRetrieveInput.",(0,s.jsx)("b",{children:"rateCode"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,s.jsx)(t.code,{children:"String"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(t.p,{children:"Rate code associated with the offers to retrieve."}),"\n",(0,s.jsxs)(t.h4,{id:"offersavailretrieveinputoffersstring--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["OffersAvailRetrieveInput.",(0,s.jsx)("b",{children:"offers"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,s.jsx)(t.code,{children:"[String]"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(t.p,{children:"List of offers to retrieve."}),"\n",(0,s.jsxs)(t.h4,{id:"offersavailretrieveinputdaterangedaterangeproductinput-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["OffersAvailRetrieveInput.",(0,s.jsx)("b",{children:"dateRange"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(t.a,{href:"/api/types/inputs/date-range-product-input",children:(0,s.jsx)(t.code,{children:"DateRangeProductInput"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,s.jsx)(t.p,{children:"Date range to apply"}),"\n",(0,s.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/api/types/inputs/inventory-avail-offers-input",children:(0,s.jsx)(t.code,{children:"InventoryAvailOffersInput"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"input"})]})]})}function g(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},21020:(e,t,r)=>{var n=r(96540),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var n,a={},d=null,c=null;for(n in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,n)&&!l.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:s,type:e,key:d,ref:c,props:a,_owner:o.current}}t.Fragment=a,t.jsx=d,t.jsxs=d},74848:(e,t,r)=>{e.exports=r(21020)},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>o});var n=r(96540);const s={},a=n.createContext(s);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);
/*! For license information please see 38c7506c.0b5f4c44.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4130],{65654:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>h,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>f});const s=JSON.parse('{"id":"types/inputs/length-of-stay-input","title":"LengthOfStayInput","description":"Represents the length of stay for a product.","source":"@site/api/types/inputs/length-of-stay-input.mdx","sourceDirName":"types/inputs","slug":"/types/inputs/length-of-stay-input","permalink":"/api/types/inputs/length-of-stay-input","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"length-of-stay-input","title":"LengthOfStayInput"},"sidebar":"schemaSidebar","previous":{"title":"LegacyAccessWhereUniqueInput","permalink":"/api/types/inputs/legacy-access-where-unique-input"},"next":{"title":"LoggingLegacyFilterInput","permalink":"/api/types/inputs/logging-legacy-filter-input"}}');var a=n(74848),r=n(28453),l=n(96540);const i={id:"length-of-stay-input",title:"LengthOfStayInput"},o=void 0,c={},d=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),u=e=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{className:e.class,children:e.text})}),h=({dataOpen:e,dataClose:t,children:n,startOpen:s=!1})=>{const[r,i]=(0,l.useState)(s);return(0,a.jsxs)("details",{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:r?e:t}),r&&n]})},f=[{value:"Fields",id:"fields",level:3},{value:'<code>LengthOfStayInput.<b>fullStay</b></code><Bullet></Bullet><code>FullStayInput</code> <Badge class="badge badge--secondary"></Badge>',id:"lengthofstayinputfullstayfullstayinput-",level:4},{value:'<code>LengthOfStayInput.<b>arrival</b></code><Bullet></Bullet><code>ArrivalInput</code> <Badge class="badge badge--secondary"></Badge>',id:"lengthofstayinputarrivalarrivalinput-",level:4},{value:"Member Of",id:"member-of",level:3}];function y(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Represents the length of stay for a product."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"input LengthOfStayInput {\n  fullStay: FullStayInput\n  arrival: ArrivalInput\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"lengthofstayinputfullstayfullstayinput-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["LengthOfStayInput.",(0,a.jsx)("b",{children:"fullStay"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/full-stay-input",children:(0,a.jsx)(t.code,{children:"FullStayInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsx)(t.p,{children:"Full stay associated with the product. See FullStay."}),"\n",(0,a.jsxs)(t.h4,{id:"lengthofstayinputarrivalarrivalinput-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["LengthOfStayInput.",(0,a.jsx)("b",{children:"arrival"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/arrival-input",children:(0,a.jsx)(t.code,{children:"ArrivalInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsx)(t.p,{children:"Arrival associated with the product. See Arrival."}),"\n",(0,a.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/api/types/inputs/restrictions-derived-rate-load-input",children:(0,a.jsx)(t.code,{children:"RestrictionsDerivedRateLoadInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/restrictions-load-input",children:(0,a.jsx)(t.code,{children:"RestrictionsLoadInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function g(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(y,{...e})}):y(e)}},21020:(e,t,n)=>{var s=n(96540),a=Symbol.for("react.element"),r=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var s,r={},c=null,d=null;for(s in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)l.call(t,s)&&!o.hasOwnProperty(s)&&(r[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===r[s]&&(r[s]=t[s]);return{$$typeof:a,type:e,key:c,ref:d,props:r,_owner:i.current}}t.Fragment=r,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>i});var s=n(96540);const a={},r=s.createContext(a);function l(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);
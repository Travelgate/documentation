/*! For license information please see d63861c9.afe56c48.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[80291],{5034:(e,t,s)=>{s.r(t),s.d(t,{Badge:()=>x,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>a,default:()=>b,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=s(74848),i=s(28453),r=s(96540);const o={id:"description",title:"Description"},a=void 0,c={id:"types/objects/description",title:"Description",description:"Object description indicates the type and the description about something.",source:"@site/api/types/objects/description.mdx",sourceDirName:"types/objects",slug:"/types/objects/description",permalink:"/api/types/objects/description",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"description",title:"Description"},sidebar:"schemaSidebar",previous:{title:"DerivedRatesAvailLoad",permalink:"/api/types/objects/derived-rates-avail-load"},next:{title:"DestinationConnection",permalink:"/api/types/objects/destination-connection"}},d={},l=()=>{const e={span:"span",...(0,i.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const t={a:"a",...(0,i.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},x=e=>{const t={span:"span",...(0,i.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:t,children:s,startOpen:o=!1})=>{const a={details:"details",summary:"summary",...(0,i.R)()},[c,d]=(0,r.useState)(o);return(0,n.jsxs)(a.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(a.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:c?e:t}),c&&s]})},u=[{value:"Fields",id:"fields",level:3},{value:'<code>Description.<b>type</b></code><Bullet></Bullet><code>DescriptionType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"descriptiontypedescriptiontype--",level:4},{value:'<code>Description.<b>texts</b></code><Bullet></Bullet><code>[Text!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"descriptiontextstext--",level:4},{value:"Member Of",id:"member-of",level:3}];function y(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Object description indicates the type and the description about something."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"type Description {\n  type: DescriptionType!\n  texts: [Text!]\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.h4,{id:"descriptiontypedescriptiontype--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Description.",(0,n.jsx)("b",{children:"type"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/api/types/enums/description-type",children:(0,n.jsx)(t.code,{children:"DescriptionType!"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsx)(t.p,{children:"Indicates type of description"}),"\n",(0,n.jsxs)(t.h4,{id:"descriptiontextstext--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Description.",(0,n.jsx)("b",{children:"texts"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/api/types/objects/text",children:(0,n.jsx)(t.code,{children:"[Text!]"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(t.p,{children:"Label"}),"\n",(0,n.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/api/types/objects/hotel-data",children:(0,n.jsx)(t.code,{children:"HotelData"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"object"})]})]})}function b(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(y,{...e})}):y(e)}},21020:(e,t,s)=>{var n=s(96540),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,s){var n,r={},d=null,l=null;for(n in void 0!==s&&(d=""+s),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)o.call(t,n)&&!c.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===r[n]&&(r[n]=t[n]);return{$$typeof:i,type:e,key:d,ref:l,props:r,_owner:a.current}}t.Fragment=r,t.jsx=d,t.jsxs=d},74848:(e,t,s)=>{e.exports=s(21020)},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>a});var n=s(96540);const i={},r=n.createContext(i);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);
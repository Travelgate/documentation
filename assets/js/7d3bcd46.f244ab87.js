/*! For license information please see 7d3bcd46.f244ab87.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[47858],{30474:(e,r,n)=>{n.r(r),n.d(r,{Badge:()=>p,Bullet:()=>c,Details:()=>f,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>d,default:()=>b,frontMatter:()=>s,metadata:()=>a,toc:()=>h});var t=n(74848),o=n(28453),l=n(96540);const s={id:"ferry-book-input",title:"FerryBookInput",hide_table_of_contents:!1},d=void 0,a={id:"inputs/ferry-book-input",title:"FerryBookInput",description:"No description",source:"@site/api/inputs/ferry-book-input.mdx",sourceDirName:"inputs",slug:"/inputs/ferry-book-input",permalink:"/api/inputs/ferry-book-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"ferry-book-input",title:"FerryBookInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"FavouritePartnerWhereUniqueInput",permalink:"/api/inputs/favourite-partner-where-unique-input"},next:{title:"FerryCancelInput",permalink:"/api/inputs/ferry-cancel-input"}},i={},c=()=>{const e={span:"span",...(0,o.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const r={a:"a",...(0,o.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const r={span:"span",...(0,o.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(r.span,{className:e.class,children:e.text})})},f=({dataOpen:e,dataClose:r,children:n,startOpen:s=!1})=>{const d={details:"details",summary:"summary",...(0,o.R)()},[a,i]=(0,l.useState)(s);return(0,t.jsxs)(d.details,{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(d.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:a?e:r}),a&&n]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>FerryBookInput.<b>quoteToken</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"ferrybookinputquotetokenstring-",level:4},{value:'<code>FerryBookInput.<b>departureOfferCode</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"ferrybookinputdepartureoffercodeid-",level:4},{value:'<code>FerryBookInput.<b>returnOfferCode</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"ferrybookinputreturnoffercodeid-",level:4},{value:'<code>FerryBookInput.<b>holder</b></code><Bullet></Bullet><code>HolderInput</code> <Badge class="badge badge--secondary"></Badge>',id:"ferrybookinputholderholderinput-",level:4},{value:'<code>FerryBookInput.<b>traveller</b></code><Bullet></Bullet><code>TravellerBookInput</code> <Badge class="badge badge--secondary"></Badge>',id:"ferrybookinputtravellertravellerbookinput-",level:4}];function x(e){const r={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"No description"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-graphql",children:"input FerryBookInput {\n  quoteToken: String\n  departureOfferCode: ID\n  returnOfferCode: ID\n  holder: HolderInput\n  traveller: TravellerBookInput\n}\n"})}),"\n",(0,t.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(r.h4,{id:"ferrybookinputquotetokenstring-",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["FerryBookInput.",(0,t.jsx)("b",{children:"quoteToken"})]})}),(0,t.jsx)(c,{}),(0,t.jsx)(r.a,{href:"/api/scalars/string",children:(0,t.jsx)(r.code,{children:"String"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"Token returned in Quote."}),"\n"]}),"\n",(0,t.jsxs)(r.h4,{id:"ferrybookinputdepartureoffercodeid-",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["FerryBookInput.",(0,t.jsx)("b",{children:"departureOfferCode"})]})}),(0,t.jsx)(c,{}),(0,t.jsx)(r.a,{href:"/api/scalars/id",children:(0,t.jsx)(r.code,{children:"ID"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"Selected departure offer code."}),"\n"]}),"\n",(0,t.jsxs)(r.h4,{id:"ferrybookinputreturnoffercodeid-",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["FerryBookInput.",(0,t.jsx)("b",{children:"returnOfferCode"})]})}),(0,t.jsx)(c,{}),(0,t.jsx)(r.a,{href:"/api/scalars/id",children:(0,t.jsx)(r.code,{children:"ID"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"Selected return offer code."}),"\n"]}),"\n",(0,t.jsxs)(r.h4,{id:"ferrybookinputholderholderinput-",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["FerryBookInput.",(0,t.jsx)("b",{children:"holder"})]})}),(0,t.jsx)(c,{}),(0,t.jsx)(r.a,{href:"/api/inputs/holder-input",children:(0,t.jsx)(r.code,{children:"HolderInput"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"Main passenger."}),"\n"]}),"\n",(0,t.jsxs)(r.h4,{id:"ferrybookinputtravellertravellerbookinput-",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["FerryBookInput.",(0,t.jsx)("b",{children:"traveller"})]})}),(0,t.jsx)(c,{}),(0,t.jsx)(r.a,{href:"/api/inputs/traveller-book-input",children:(0,t.jsx)(r.code,{children:"TravellerBookInput"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,t.jsx)(r.blockquote,{children:"\n"})]})}function b(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},21020:(e,r,n)=>{var t=n(96540),o=Symbol.for("react.element"),l=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,n){var t,l={},i=null,c=null;for(t in void 0!==n&&(i=""+n),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(c=r.ref),r)s.call(r,t)&&!a.hasOwnProperty(t)&&(l[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===l[t]&&(l[t]=r[t]);return{$$typeof:o,type:e,key:i,ref:c,props:l,_owner:d.current}}r.Fragment=l,r.jsx=i,r.jsxs=i},74848:(e,r,n)=>{e.exports=n(21020)},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>d});var t=n(96540);const o={},l=t.createContext(o);function s(e){const r=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(l.Provider,{value:r},e.children)}}}]);
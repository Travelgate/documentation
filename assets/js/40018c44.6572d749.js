/*! For license information please see 40018c44.6572d749.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[22361],{93622:(e,a,n)=>{n.r(a),n.d(a,{Badge:()=>g,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>r,default:()=>b,frontMatter:()=>c,metadata:()=>d,toc:()=>x});var t=n(74848),o=n(28453),s=n(96540);const c={id:"package-location",title:"PackageLocation"},r=void 0,d={id:"types/objects/package-location",title:"PackageLocation",description:"No description",source:"@site/api/types/objects/package-location.mdx",sourceDirName:"types/objects",slug:"/types/objects/package-location",permalink:"/api/types/objects/package-location",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"package-location",title:"PackageLocation"},sidebar:"schemaSidebar",previous:{title:"PackageDestination",permalink:"/api/types/objects/package-destination"},next:{title:"PackageLocations",permalink:"/api/types/objects/package-locations"}},i={},l=()=>{const e={span:"span",...(0,o.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const a={a:"a",...(0,o.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const a={span:"span",...(0,o.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(a.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:a,children:n,startOpen:c=!1})=>{const r={details:"details",summary:"summary",...(0,o.R)()},[d,i]=(0,s.useState)(c);return(0,t.jsxs)(r.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(r.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:d?e:a}),d&&n]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>PackageLocation.<b>iata</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"packagelocationiatastring--",level:4},{value:'<code>PackageLocation.<b>name</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"packagelocationnamestring--",level:4},{value:'<code>PackageLocation.<b>providerCode</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"packagelocationprovidercodestring--",level:4},{value:'<code>PackageLocation.<b>type</b></code><Bullet></Bullet><code>LocationType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"packagelocationtypelocationtype--",level:4},{value:"Member Of",id:"member-of",level:3}];function j(e){const a={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"No description"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-graphql",children:"type PackageLocation {\n  iata: String!\n  name: String!\n  providerCode: String!\n  type: LocationType!\n}\n"})}),"\n",(0,t.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(a.h4,{id:"packagelocationiatastring--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["PackageLocation.",(0,t.jsx)("b",{children:"iata"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/api/types/scalars/string",children:(0,t.jsx)(a.code,{children:"String!"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.p,{children:"Iata of the location"}),"\n",(0,t.jsxs)(a.h4,{id:"packagelocationnamestring--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["PackageLocation.",(0,t.jsx)("b",{children:"name"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/api/types/scalars/string",children:(0,t.jsx)(a.code,{children:"String!"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.p,{children:"Name of the location"}),"\n",(0,t.jsxs)(a.h4,{id:"packagelocationprovidercodestring--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["PackageLocation.",(0,t.jsx)("b",{children:"providerCode"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/api/types/scalars/string",children:(0,t.jsx)(a.code,{children:"String!"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.p,{children:"Code that the provider specifies for this location usually in case a IATA does not apply"}),"\n",(0,t.jsxs)(a.h4,{id:"packagelocationtypelocationtype--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["PackageLocation.",(0,t.jsx)("b",{children:"type"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/api/types/enums/location-type",children:(0,t.jsx)(a.code,{children:"LocationType!"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,t.jsx)(a.p,{children:"Location type (Airport, Train station...)"}),"\n",(0,t.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"/api/types/objects/booking-payload",children:(0,t.jsx)(a.code,{children:"BookingPayload"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/api/types/objects/book-payload",children:(0,t.jsx)(a.code,{children:"BookPayload"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/api/types/objects/quote-payload",children:(0,t.jsx)(a.code,{children:"QuotePayload"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/api/types/objects/search-option",children:(0,t.jsx)(a.code,{children:"SearchOption"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"})]})]})}function b(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}},21020:(e,a,n)=>{var t=n(96540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,r=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function i(e,a,n){var t,s={},i=null,l=null;for(t in void 0!==n&&(i=""+n),void 0!==a.key&&(i=""+a.key),void 0!==a.ref&&(l=a.ref),a)c.call(a,t)&&!d.hasOwnProperty(t)&&(s[t]=a[t]);if(e&&e.defaultProps)for(t in a=e.defaultProps)void 0===s[t]&&(s[t]=a[t]);return{$$typeof:o,type:e,key:i,ref:l,props:s,_owner:r.current}}a.Fragment=s,a.jsx=i,a.jsxs=i},74848:(e,a,n)=>{e.exports=n(21020)},28453:(e,a,n)=>{n.d(a,{R:()=>c,x:()=>r});var t=n(96540);const o={},s=t.createContext(o);function c(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);
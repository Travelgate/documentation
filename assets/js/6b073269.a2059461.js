/*! For license information please see 6b073269.a2059461.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1352],{63702:(e,a,n)=>{n.r(a),n.d(a,{Badge:()=>p,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>g,assets:()=>i,contentTitle:()=>r,default:()=>j,frontMatter:()=>s,metadata:()=>d,toc:()=>x});var o=n(74848),t=n(28453),c=n(96540);const s={id:"package-location",title:"PackageLocation",hide_table_of_contents:!1},r=void 0,d={id:"objects/package-location",title:"PackageLocation",description:"No description",source:"@site/api/objects/package-location.mdx",sourceDirName:"objects",slug:"/objects/package-location",permalink:"/api/objects/package-location",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"package-location",title:"PackageLocation",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PackageDestination",permalink:"/api/objects/package-destination"},next:{title:"PackageLocations",permalink:"/api/objects/package-locations"}},i={},l=()=>{const e={span:"span",...(0,t.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const a={a:"a",...(0,t.R)()};return(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const a={span:"span",...(0,t.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(a.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:a,children:n,startOpen:s=!1})=>{const r={details:"details",summary:"summary",...(0,t.R)()},[d,i]=(0,c.useState)(s);return(0,o.jsxs)(r.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)(r.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:d?e:a}),d&&n]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>PackageLocation.<b>iata</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"packagelocationiatastring--",level:4},{value:'<code>PackageLocation.<b>name</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"packagelocationnamestring--",level:4},{value:'<code>PackageLocation.<b>providerCode</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"packagelocationprovidercodestring--",level:4},{value:'<code>PackageLocation.<b>type</b></code><Bullet></Bullet><code>LocationType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"packagelocationtypelocationtype--",level:4},{value:"Member of",id:"member-of",level:3}];function b(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.p,{children:"No description"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-graphql",children:"type PackageLocation {\n  iata: String!\n  name: String!\n  providerCode: String!\n  type: LocationType!\n}\n"})}),"\n",(0,o.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(a.h4,{id:"packagelocationiatastring--",children:[(0,o.jsx)(a.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["PackageLocation.",(0,o.jsx)("b",{children:"iata"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(a.a,{href:"/api/scalars/string",children:(0,o.jsx)(a.code,{children:"String!"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(a.blockquote,{children:["\n",(0,o.jsx)(a.p,{children:"Iata of the location"}),"\n"]}),"\n",(0,o.jsxs)(a.h4,{id:"packagelocationnamestring--",children:[(0,o.jsx)(a.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["PackageLocation.",(0,o.jsx)("b",{children:"name"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(a.a,{href:"/api/scalars/string",children:(0,o.jsx)(a.code,{children:"String!"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(a.blockquote,{children:["\n",(0,o.jsx)(a.p,{children:"Name of the location"}),"\n"]}),"\n",(0,o.jsxs)(a.h4,{id:"packagelocationprovidercodestring--",children:[(0,o.jsx)(a.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["PackageLocation.",(0,o.jsx)("b",{children:"providerCode"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(a.a,{href:"/api/scalars/string",children:(0,o.jsx)(a.code,{children:"String!"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(a.blockquote,{children:["\n",(0,o.jsx)(a.p,{children:"Code that the provider specifies for this location usually in case a IATA does not apply"}),"\n"]}),"\n",(0,o.jsxs)(a.h4,{id:"packagelocationtypelocationtype--",children:[(0,o.jsx)(a.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["PackageLocation.",(0,o.jsx)("b",{children:"type"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(a.a,{href:"/api/enums/location-type",children:(0,o.jsx)(a.code,{children:"LocationType!"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,o.jsxs)(a.blockquote,{children:["\n",(0,o.jsx)(a.p,{children:"Location type (Airport, Train station...)"}),"\n"]}),"\n",(0,o.jsx)(a.h3,{id:"member-of",children:"Member of"}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.a,{href:"/api/objects/booking-payload",children:(0,o.jsx)(a.code,{children:"BookingPayload"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(l,{}),(0,o.jsx)(a.a,{href:"/api/objects/book-payload",children:(0,o.jsx)(a.code,{children:"BookPayload"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(l,{}),(0,o.jsx)(a.a,{href:"/api/objects/quote-payload",children:(0,o.jsx)(a.code,{children:"QuotePayload"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(l,{}),(0,o.jsx)(a.a,{href:"/api/objects/search-option",children:(0,o.jsx)(a.code,{children:"SearchOption"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(b,{...e})}):b(e)}},21020:(e,a,n)=>{var o=n(96540),t=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,r=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function i(e,a,n){var o,c={},i=null,l=null;for(o in void 0!==n&&(i=""+n),void 0!==a.key&&(i=""+a.key),void 0!==a.ref&&(l=a.ref),a)s.call(a,o)&&!d.hasOwnProperty(o)&&(c[o]=a[o]);if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===c[o]&&(c[o]=a[o]);return{$$typeof:t,type:e,key:i,ref:l,props:c,_owner:r.current}}a.Fragment=c,a.jsx=i,a.jsxs=i},74848:(e,a,n)=>{e.exports=n(21020)},28453:(e,a,n)=>{n.d(a,{R:()=>s,x:()=>r});var o=n(96540);const t={},c=o.createContext(t);function s(e){const a=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(c.Provider,{value:a},e.children)}}}]);
/*! For license information please see e8e1ab73.5fa56ab9.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6169],{58155:(e,a,r)=>{r.r(a),r.d(a,{Badge:()=>u,Bullet:()=>i,Details:()=>p,SpecifiedBy:()=>h,assets:()=>l,contentTitle:()=>d,default:()=>x,frontMatter:()=>s,metadata:()=>n,toc:()=>g});const n=JSON.parse('{"id":"types/objects/package-query","title":"PackageQuery","description":"No description","source":"@site/api/types/objects/package-query.mdx","sourceDirName":"types/objects","slug":"/types/objects/package-query","permalink":"/api/types/objects/package-query","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"package-query","title":"PackageQuery"},"sidebar":"schemaSidebar","previous":{"title":"PackagePrice","permalink":"/api/types/objects/package-price"},"next":{"title":"PackageRoom","permalink":"/api/types/objects/package-room"}}');var t=r(74848),o=r(28453),c=r(96540);const s={id:"package-query",title:"PackageQuery"},d=void 0,l={},i=()=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),h=e=>(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),u=e=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{className:e.class,children:e.text})}),p=({dataOpen:e,dataClose:a,children:r,startOpen:n=!1})=>{const[o,s]=(0,c.useState)(n);return(0,t.jsxs)("details",{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"},children:o?e:a}),o&&r]})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>PackageQuery.<b>quote</b></code><Bullet></Bullet><code>QuotePayload</code> <Badge class="badge badge--secondary"></Badge>',id:"packagequeryquotequotepayload-",level:4},{value:'<code>PackageQuery.quote.<b>where</b></code><Bullet></Bullet><code>QuoteWhereInput</code> <Badge class="badge badge--secondary"></Badge>',id:"packagequeryquotewherequotewhereinput-",level:5},{value:'<code>PackageQuery.<b>content</b></code><Bullet></Bullet><code>ContentPayload</code> <Badge class="badge badge--secondary"></Badge>',id:"packagequerycontentcontentpayload-",level:4},{value:'<code>PackageQuery.content.<b>where</b></code><Bullet></Bullet><code>ContentWhereInput</code> <Badge class="badge badge--secondary"></Badge>',id:"packagequerycontentwherecontentwhereinput-",level:5},{value:'<code>PackageQuery.<b>booking</b></code><Bullet></Bullet><code>BookingPayload</code> <Badge class="badge badge--secondary"></Badge>',id:"packagequerybookingbookingpayload-",level:4},{value:'<code>PackageQuery.booking.<b>where</b></code><Bullet></Bullet><code>BookingWhereInput</code> <Badge class="badge badge--secondary"></Badge>',id:"packagequerybookingwherebookingwhereinput-",level:5},{value:'<code>PackageQuery.<b>search</b></code><Bullet></Bullet><code>SearchPayload</code> <Badge class="badge badge--secondary"></Badge>',id:"packagequerysearchsearchpayload-",level:4},{value:'<code>PackageQuery.search.<b>where</b></code><Bullet></Bullet><code>SearchWhereInput</code> <Badge class="badge badge--secondary"></Badge>',id:"packagequerysearchwheresearchwhereinput-",level:5},{value:"Returned By",id:"returned-by",level:3}];function y(e){const a={a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"No description"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-graphql",children:"type PackageQuery {\n  quote(where: QuoteWhereInput): QuotePayload\n  content(where: ContentWhereInput): ContentPayload\n  booking(where: BookingWhereInput): BookingPayload\n  search(where: SearchWhereInput): SearchPayload\n}\n"})}),"\n",(0,t.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(a.h4,{id:"packagequeryquotequotepayload-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["PackageQuery.",(0,t.jsx)("b",{children:"quote"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(a.a,{href:"/api/types/objects/quote-payload",children:(0,t.jsx)(a.code,{children:"QuotePayload"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(a.p,{children:"Query to retreive the lastest conditions for the option"}),"\n",(0,t.jsxs)(a.h5,{id:"packagequeryquotewherequotewhereinput-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["PackageQuery.quote.",(0,t.jsx)("b",{children:"where"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(a.a,{href:"/api/types/inputs/quote-where-input",children:(0,t.jsx)(a.code,{children:"QuoteWhereInput"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,t.jsxs)(a.h4,{id:"packagequerycontentcontentpayload-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["PackageQuery.",(0,t.jsx)("b",{children:"content"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(a.a,{href:"/api/types/objects/content-payload",children:(0,t.jsx)(a.code,{children:"ContentPayload"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(a.p,{children:"Query to retreive the static information of a package"}),"\n",(0,t.jsxs)(a.h5,{id:"packagequerycontentwherecontentwhereinput-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["PackageQuery.content.",(0,t.jsx)("b",{children:"where"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(a.a,{href:"/api/types/inputs/content-where-input",children:(0,t.jsx)(a.code,{children:"ContentWhereInput"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,t.jsxs)(a.h4,{id:"packagequerybookingbookingpayload-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["PackageQuery.",(0,t.jsx)("b",{children:"booking"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(a.a,{href:"/api/types/objects/booking-payload",children:(0,t.jsx)(a.code,{children:"BookingPayload"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(a.p,{children:"Query to retreive the information of an existing booking"}),"\n",(0,t.jsxs)(a.h5,{id:"packagequerybookingwherebookingwhereinput-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["PackageQuery.booking.",(0,t.jsx)("b",{children:"where"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(a.a,{href:"/api/types/inputs/booking-where-input",children:(0,t.jsx)(a.code,{children:"BookingWhereInput"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,t.jsxs)(a.h4,{id:"packagequerysearchsearchpayload-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["PackageQuery.",(0,t.jsx)("b",{children:"search"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(a.a,{href:"/api/types/objects/search-payload",children:(0,t.jsx)(a.code,{children:"SearchPayload"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(a.p,{children:"Query to refresh an option or search by supplierPackageCode"}),"\n",(0,t.jsxs)(a.h5,{id:"packagequerysearchwheresearchwhereinput-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["PackageQuery.search.",(0,t.jsx)("b",{children:"where"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(a.a,{href:"/api/types/inputs/search-where-input",children:(0,t.jsx)(a.code,{children:"SearchWhereInput"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,t.jsx)(a.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"/api/operations/queries/package",children:(0,t.jsx)(a.code,{children:"package"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"query"})]})]})}function x(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(y,{...e})}):y(e)}},21020:(e,a,r)=>{var n=r(96540),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,a,r){var n,o={},l=null,i=null;for(n in void 0!==r&&(l=""+r),void 0!==a.key&&(l=""+a.key),void 0!==a.ref&&(i=a.ref),a)c.call(a,n)&&!d.hasOwnProperty(n)&&(o[n]=a[n]);if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===o[n]&&(o[n]=a[n]);return{$$typeof:t,type:e,key:l,ref:i,props:o,_owner:s.current}}a.Fragment=o,a.jsx=l,a.jsxs=l},74848:(e,a,r)=>{e.exports=r(21020)},28453:(e,a,r)=>{r.d(a,{R:()=>c,x:()=>s});var n=r(96540);const t={},o=n.createContext(t);function c(e){const a=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),n.createElement(o.Provider,{value:a},e.children)}}}]);
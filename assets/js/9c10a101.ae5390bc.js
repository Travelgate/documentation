/*! For license information please see 9c10a101.ae5390bc.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[22263],{46810:(e,a,r)=>{r.r(a),r.d(a,{Badge:()=>h,Bullet:()=>l,Details:()=>y,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>o,default:()=>j,frontMatter:()=>d,metadata:()=>c,toc:()=>x});var n=r(74848),t=r(28453),s=r(96540);const d={id:"itinerary-map",title:"ItineraryMap",hide_table_of_contents:!1},o=void 0,c={id:"objects/itinerary-map",title:"ItineraryMap",description:"No description",source:"@site/api/objects/itinerary-map.mdx",sourceDirName:"objects",slug:"/objects/itinerary-map",permalink:"/api/objects/itinerary-map",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"itinerary-map",title:"ItineraryMap",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Invitation",permalink:"/api/objects/invitation"},next:{title:"Journey",permalink:"/api/objects/journey"}},i={},l=()=>{const e={span:"span",...(0,t.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const a={a:"a",...(0,t.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const a={span:"span",...(0,t.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(a.span,{className:e.class,children:e.text})})},y=({dataOpen:e,dataClose:a,children:r,startOpen:d=!1})=>{const o={details:"details",summary:"summary",...(0,t.R)()},[c,i]=(0,s.useState)(d);return(0,n.jsxs)(o.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(o.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:c?e:a}),c&&r]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>ItineraryMap.<b>order</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"itinerarymaporderint--",level:4},{value:'<code>ItineraryMap.<b>productToken</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"itinerarymapproducttokenstring--",level:4},{value:'<code>ItineraryMap.<b>productType</b></code><Bullet></Bullet><code>ProductType</code> <Badge class="badge badge--secondary"></Badge>',id:"itinerarymapproducttypeproducttype-",level:4},{value:'<code>ItineraryMap.<b>ref</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"itinerarymaprefstring--",level:4},{value:'<code>ItineraryMap.<b>startDay</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"itinerarymapstartdayint--",level:4},{value:"Member of",id:"member-of",level:3}];function b(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"No description"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-graphql",children:"type ItineraryMap {\n  order: Int!\n  productToken: String!\n  productType: ProductType\n  ref: String!\n  startDay: Int!\n}\n"})}),"\n",(0,n.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(a.h4,{id:"itinerarymaporderint--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ItineraryMap.",(0,n.jsx)("b",{children:"order"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/api/scalars/int",children:(0,n.jsx)(a.code,{children:"Int!"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"Indicates de chronological order of each entry"}),"\n"]}),"\n",(0,n.jsxs)(a.h4,{id:"itinerarymapproducttokenstring--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ItineraryMap.",(0,n.jsx)("b",{children:"productToken"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/api/scalars/string",children:(0,n.jsx)(a.code,{children:"String!"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"Product token that will be used in Book (may not be received in search)"}),"\n"]}),"\n",(0,n.jsxs)(a.h4,{id:"itinerarymapproducttypeproducttype-",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ItineraryMap.",(0,n.jsx)("b",{children:"productType"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/api/enums/product-type",children:(0,n.jsx)(a.code,{children:"ProductType"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"Type of the product (Transport, accomodation...)"}),"\n"]}),"\n",(0,n.jsxs)(a.h4,{id:"itinerarymaprefstring--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ItineraryMap.",(0,n.jsx)("b",{children:"ref"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/api/scalars/string",children:(0,n.jsx)(a.code,{children:"String!"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"Ref to identify the entry in it's specified List (Accommodations, Transports...)"}),"\n"]}),"\n",(0,n.jsxs)(a.h4,{id:"itinerarymapstartdayint--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ItineraryMap.",(0,n.jsx)("b",{children:"startDay"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/api/scalars/int",children:(0,n.jsx)(a.code,{children:"Int!"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"Day where activity will take place"}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"member-of",children:"Member of"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"/api/objects/booking-payload",children:(0,n.jsx)(a.code,{children:"BookingPayload"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/api/objects/book-payload",children:(0,n.jsx)(a.code,{children:"BookPayload"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/api/objects/quote-payload",children:(0,n.jsx)(a.code,{children:"QuotePayload"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/api/objects/search-option",children:(0,n.jsx)(a.code,{children:"SearchOption"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(b,{...e})}):b(e)}},21020:(e,a,r)=>{var n=r(96540),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,a,r){var n,s={},i=null,l=null;for(n in void 0!==r&&(i=""+r),void 0!==a.key&&(i=""+a.key),void 0!==a.ref&&(l=a.ref),a)d.call(a,n)&&!c.hasOwnProperty(n)&&(s[n]=a[n]);if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===s[n]&&(s[n]=a[n]);return{$$typeof:t,type:e,key:i,ref:l,props:s,_owner:o.current}}a.Fragment=s,a.jsx=i,a.jsxs=i},74848:(e,a,r)=>{e.exports=r(21020)},28453:(e,a,r)=>{r.d(a,{R:()=>d,x:()=>o});var n=r(96540);const t={},s=n.createContext(t);function d(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);
/*! For license information please see b41ea3fa.c2eba337.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[35332],{28538:(e,a,o)=>{o.r(a),o.d(a,{Badge:()=>g,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>b,assets:()=>c,contentTitle:()=>s,default:()=>x,frontMatter:()=>r,metadata:()=>d,toc:()=>f});const d=JSON.parse('{"id":"types/objects/metadata-booking","title":"MetadataBooking","description":"Return information about booking","source":"@site/api/types/objects/metadata-booking.mdx","sourceDirName":"types/objects","slug":"/types/objects/metadata-booking","permalink":"/api/types/objects/metadata-booking","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"metadata-booking","title":"MetadataBooking"},"sidebar":"schemaSidebar","previous":{"title":"MetadataBook","permalink":"/api/types/objects/metadata-book"},"next":{"title":"MetadataCancel","permalink":"/api/types/objects/metadata-cancel"}}');var n=o(74848),i=o(28453),t=o(96540);const r={id:"metadata-booking",title:"MetadataBooking"},s=void 0,c={},l=()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),b=e=>(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),g=e=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{className:e.class,children:e.text})}),h=({dataOpen:e,dataClose:a,children:o,startOpen:d=!1})=>{const[i,r]=(0,t.useState)(d);return(0,n.jsxs)("details",{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)("summary",{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:i?e:a}),i&&o]})},f=[{value:"Fields",id:"fields",level:3},{value:'<code>MetadataBooking.<b>queryableBySupplierReference</b></code><Bullet></Bullet><code>ReviewedBool!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"metadatabookingqueryablebysupplierreferencereviewedbool--",level:4},{value:'<code>MetadataBooking.<b>queryableByClientReference</b></code><Bullet></Bullet><code>ReviewedBool!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"metadatabookingqueryablebyclientreferencereviewedbool--",level:4},{value:'<code>MetadataBooking.<b>queryableByCreationDate</b></code><Bullet></Bullet><code>ReviewedBool!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"metadatabookingqueryablebycreationdatereviewedbool--",level:4},{value:'<code>MetadataBooking.<b>queryableByCheckinDate</b></code><Bullet></Bullet><code>ReviewedBool!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"metadatabookingqueryablebycheckindatereviewedbool--",level:4},{value:'<code>MetadataBooking.<b>informHotelReference</b></code><Bullet></Bullet><code>ReviewedBool</code> <Badge class="badge badge--secondary"></Badge>',id:"metadatabookinginformhotelreferencereviewedbool-",level:4},{value:'<code>MetadataBooking.<b>informCancelPolicies</b></code><Bullet></Bullet><code>ReviewedBool</code> <Badge class="badge badge--secondary"></Badge>',id:"metadatabookinginformcancelpoliciesreviewedbool-",level:4},{value:'<code>MetadataBooking.<b>informPriceCancel</b></code><Bullet></Bullet><code>ReviewedBool</code> <Badge class="badge badge--secondary"></Badge>',id:"metadatabookinginformpricecancelreviewedbool-",level:4},{value:'<code>MetadataBooking.<b>requiresCheckInDateInReferences</b></code><Bullet></Bullet><code>ReviewedBool!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"metadatabookingrequirescheckindateinreferencesreviewedbool--",level:4},{value:'<code>MetadataBooking.<b>requiresCheckOutDateInReferences</b></code><Bullet></Bullet><code>ReviewedBool!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"metadatabookingrequirescheckoutdateinreferencesreviewedbool--",level:4},{value:'<code>MetadataBooking.<b>requiresReservationDateInReferences</b></code><Bullet></Bullet><code>ReviewedBool!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"metadatabookingrequiresreservationdateinreferencesreviewedbool--",level:4},{value:'<code>MetadataBooking.<b>timeZone</b></code><Bullet></Bullet><code>ReviewedTimeZone!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"metadatabookingtimezonereviewedtimezone--",level:4},{value:"Member Of",id:"member-of",level:3}];function j(e){const a={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"Return information about booking"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-graphql",children:"type MetadataBooking {\n  queryableBySupplierReference: ReviewedBool!\n  queryableByClientReference: ReviewedBool!\n  queryableByCreationDate: ReviewedBool!\n  queryableByCheckinDate: ReviewedBool!\n  informHotelReference: ReviewedBool\n  informCancelPolicies: ReviewedBool\n  informPriceCancel: ReviewedBool\n  requiresCheckInDateInReferences: ReviewedBool!\n  requiresCheckOutDateInReferences: ReviewedBool!\n  requiresReservationDateInReferences: ReviewedBool!\n  timeZone: ReviewedTimeZone!\n}\n"})}),"\n",(0,n.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(a.h4,{id:"metadatabookingqueryablebysupplierreferencereviewedbool--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MetadataBooking.",(0,n.jsx)("b",{children:"queryableBySupplierReference"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/api/types/objects/reviewed-bool",children:(0,n.jsx)(a.code,{children:"ReviewedBool!"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(a.p,{children:"Specifies if booking can be performed using supplier reference."}),"\n",(0,n.jsxs)(a.h4,{id:"metadatabookingqueryablebyclientreferencereviewedbool--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MetadataBooking.",(0,n.jsx)("b",{children:"queryableByClientReference"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/api/types/objects/reviewed-bool",children:(0,n.jsx)(a.code,{children:"ReviewedBool!"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(a.p,{children:"Specifies if booking can be performed using client reference."}),"\n",(0,n.jsxs)(a.h4,{id:"metadatabookingqueryablebycreationdatereviewedbool--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MetadataBooking.",(0,n.jsx)("b",{children:"queryableByCreationDate"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/api/types/objects/reviewed-bool",children:(0,n.jsx)(a.code,{children:"ReviewedBool!"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(a.p,{children:"Specifies if booking can be performed using creation dates."}),"\n",(0,n.jsxs)(a.h4,{id:"metadatabookingqueryablebycheckindatereviewedbool--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MetadataBooking.",(0,n.jsx)("b",{children:"queryableByCheckinDate"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/api/types/objects/reviewed-bool",children:(0,n.jsx)(a.code,{children:"ReviewedBool!"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(a.p,{children:"Specifies if booking can be performed using check in dates."}),"\n",(0,n.jsxs)(a.h4,{id:"metadatabookinginformhotelreferencereviewedbool-",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MetadataBooking.",(0,n.jsx)("b",{children:"informHotelReference"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/api/types/objects/reviewed-bool",children:(0,n.jsx)(a.code,{children:"ReviewedBool"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(a.p,{children:"Specifies if the supplier informs about Hotel Confirmation Number (HCN)."}),"\n",(0,n.jsxs)(a.h4,{id:"metadatabookinginformcancelpoliciesreviewedbool-",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MetadataBooking.",(0,n.jsx)("b",{children:"informCancelPolicies"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/api/types/objects/reviewed-bool",children:(0,n.jsx)(a.code,{children:"ReviewedBool"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(a.p,{children:"Specifies if the supplier informs about the cancellation policies."}),"\n",(0,n.jsxs)(a.h4,{id:"metadatabookinginformpricecancelreviewedbool-",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MetadataBooking.",(0,n.jsx)("b",{children:"informPriceCancel"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/api/types/objects/reviewed-bool",children:(0,n.jsx)(a.code,{children:"ReviewedBool"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(a.p,{children:"Specifies if the supplier informs about the cancellation price."}),"\n",(0,n.jsxs)(a.h4,{id:"metadatabookingrequirescheckindateinreferencesreviewedbool--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MetadataBooking.",(0,n.jsx)("b",{children:"requiresCheckInDateInReferences"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/api/types/objects/reviewed-bool",children:(0,n.jsx)(a.code,{children:"ReviewedBool!"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(a.p,{children:"Specifies if the supplier requires check-in date in reference."}),"\n",(0,n.jsxs)(a.h4,{id:"metadatabookingrequirescheckoutdateinreferencesreviewedbool--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MetadataBooking.",(0,n.jsx)("b",{children:"requiresCheckOutDateInReferences"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/api/types/objects/reviewed-bool",children:(0,n.jsx)(a.code,{children:"ReviewedBool!"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(a.p,{children:"Specifies if the supplier requires check-out date in reference."}),"\n",(0,n.jsxs)(a.h4,{id:"metadatabookingrequiresreservationdateinreferencesreviewedbool--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MetadataBooking.",(0,n.jsx)("b",{children:"requiresReservationDateInReferences"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/api/types/objects/reviewed-bool",children:(0,n.jsx)(a.code,{children:"ReviewedBool!"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(a.p,{children:"Specifies if the supplier requires the reservation date in reference."}),"\n",(0,n.jsxs)(a.h4,{id:"metadatabookingtimezonereviewedtimezone--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MetadataBooking.",(0,n.jsx)("b",{children:"timeZone"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/api/types/objects/reviewed-time-zone",children:(0,n.jsx)(a.code,{children:"ReviewedTimeZone!"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(a.p,{children:"Specifies the timezone in UTC in which the cancellation policies are located."}),"\n",(0,n.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"/api/types/objects/metadata-data",children:(0,n.jsx)(a.code,{children:"MetadataData"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(j,{...e})}):j(e)}},21020:(e,a,o)=>{var d=o(96540),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,r=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,a,o){var d,i={},c=null,l=null;for(d in void 0!==o&&(c=""+o),void 0!==a.key&&(c=""+a.key),void 0!==a.ref&&(l=a.ref),a)t.call(a,d)&&!s.hasOwnProperty(d)&&(i[d]=a[d]);if(e&&e.defaultProps)for(d in a=e.defaultProps)void 0===i[d]&&(i[d]=a[d]);return{$$typeof:n,type:e,key:c,ref:l,props:i,_owner:r.current}}a.Fragment=i,a.jsx=c,a.jsxs=c},74848:(e,a,o)=>{e.exports=o(21020)},28453:(e,a,o)=>{o.d(a,{R:()=>t,x:()=>r});var d=o(96540);const n={},i=d.createContext(n);function t(e){const a=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),d.createElement(i.Provider,{value:a},e.children)}}}]);
/*! For license information please see 1f651e1d.cc058064.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[50728],{83690:(e,o,t)=>{t.r(o),t.d(o,{Badge:()=>g,Bullet:()=>i,Details:()=>b,SpecifiedBy:()=>h,assets:()=>r,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>x});var n=t(74848),a=t(28453),d=t(96540);const s={id:"booking-hotel",title:"BookingHotel"},c=void 0,l={id:"types/objects/booking-hotel",title:"BookingHotel",description:"No description",source:"@site/api/types/objects/booking-hotel.mdx",sourceDirName:"types/objects",slug:"/types/objects/booking-hotel",permalink:"/api/types/objects/booking-hotel",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"booking-hotel",title:"BookingHotel"},sidebar:"schemaSidebar",previous:{title:"BookingHotelDetails",permalink:"/api/types/objects/booking-hotel-details"},next:{title:"BookingMutationPayload",permalink:"/api/types/objects/booking-mutation-payload"}},r={},i=()=>{const e={span:"span",...(0,a.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const o={a:"a",...(0,a.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(o.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const o={span:"span",...(0,a.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(o.span,{className:e.class,children:e.text})})},b=({dataOpen:e,dataClose:o,children:t,startOpen:s=!1})=>{const c={details:"details",summary:"summary",...(0,a.R)()},[l,r]=(0,d.useState)(s);return(0,n.jsxs)(c.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(c.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:l?e:o}),l&&t]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>BookingHotel.<b>creationDate</b></code><Bullet></Bullet><code>Date</code> <Badge class="badge badge--deprecated badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"bookinghotelcreationdatedate--",level:4},{value:'<code>BookingHotel.<b>checkIn</b></code><Bullet></Bullet><code>Date</code> <Badge class="badge badge--deprecated badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"bookinghotelcheckindate--",level:4},{value:'<code>BookingHotel.<b>checkOut</b></code><Bullet></Bullet><code>Date</code> <Badge class="badge badge--deprecated badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"bookinghotelcheckoutdate--",level:4},{value:'<code>BookingHotel.<b>bookingDate</b></code><Bullet></Bullet><code>Date</code> <Badge class="badge badge--secondary"></Badge>',id:"bookinghotelbookingdatedate-",level:4},{value:'<code>BookingHotel.<b>start</b></code><Bullet></Bullet><code>Date</code> <Badge class="badge badge--secondary"></Badge>',id:"bookinghotelstartdate-",level:4},{value:'<code>BookingHotel.<b>end</b></code><Bullet></Bullet><code>Date</code> <Badge class="badge badge--secondary"></Badge>',id:"bookinghotelenddate-",level:4},{value:'<code>BookingHotel.<b>hotelCode</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"bookinghotelhotelcodestring-",level:4},{value:'<code>BookingHotel.<b>hotelName</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"bookinghotelhotelnamestring-",level:4},{value:'<code>BookingHotel.<b>boardCode</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"bookinghotelboardcodestring-",level:4},{value:'<code>BookingHotel.<b>occupancies</b></code><Bullet></Bullet><code>[Occupancy!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"bookinghoteloccupanciesoccupancy--",level:4},{value:'<code>BookingHotel.<b>rooms</b></code><Bullet></Bullet><code>[BookingRoom!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"bookinghotelroomsbookingroom--",level:4},{value:"Member Of",id:"member-of",level:3}];function j(e){const o={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.p,{children:"No description"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-graphql",children:"type BookingHotel {\n  creationDate: Date @deprecated\n  checkIn: Date @deprecated\n  checkOut: Date @deprecated\n  bookingDate: Date\n  start: Date\n  end: Date\n  hotelCode: String\n  hotelName: String\n  boardCode: String\n  occupancies: [Occupancy!]\n  rooms: [BookingRoom!]\n}\n"})}),"\n",(0,n.jsx)(o.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(o.h4,{id:"bookinghotelcreationdatedate--",children:[(0,n.jsx)(o.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingHotel.",(0,n.jsx)("b",{children:"creationDate"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(o.a,{href:"/api/types/scalars/date",children:(0,n.jsx)(o.code,{children:"Date"})})," ",(0,n.jsx)(g,{class:"badge badge--deprecated badge--secondary",text:"deprecated"})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.admonition,{title:"DEPRECATED",type:"warning",children:(0,n.jsx)(o.p,{children:"deprecated from 2018-02-28. Incorrect date format."})}),"\n",(0,n.jsx)(o.p,{children:"Creation date of the booking.\nFormat: YYYY-MM-DD"}),"\n"]}),"\n",(0,n.jsxs)(o.h4,{id:"bookinghotelcheckindate--",children:[(0,n.jsx)(o.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingHotel.",(0,n.jsx)("b",{children:"checkIn"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(o.a,{href:"/api/types/scalars/date",children:(0,n.jsx)(o.code,{children:"Date"})})," ",(0,n.jsx)(g,{class:"badge badge--deprecated badge--secondary",text:"deprecated"})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.admonition,{title:"DEPRECATED",type:"warning",children:(0,n.jsx)(o.p,{children:"deprecated from 2018-02-28. Incorrect date format."})}),"\n",(0,n.jsx)(o.p,{children:"Check-in date for booking\nFormat: YYYY-MM-DD"}),"\n"]}),"\n",(0,n.jsxs)(o.h4,{id:"bookinghotelcheckoutdate--",children:[(0,n.jsx)(o.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingHotel.",(0,n.jsx)("b",{children:"checkOut"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(o.a,{href:"/api/types/scalars/date",children:(0,n.jsx)(o.code,{children:"Date"})})," ",(0,n.jsx)(g,{class:"badge badge--deprecated badge--secondary",text:"deprecated"})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.admonition,{title:"DEPRECATED",type:"warning",children:(0,n.jsx)(o.p,{children:"deprecated from 2018-02-28. Incorrect date format."})}),"\n",(0,n.jsx)(o.p,{children:"Check-out date for the booking.\nFormat: YYYY-MM-DD"}),"\n"]}),"\n",(0,n.jsxs)(o.h4,{id:"bookinghotelbookingdatedate-",children:[(0,n.jsx)(o.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingHotel.",(0,n.jsx)("b",{children:"bookingDate"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(o.a,{href:"/api/types/scalars/date",children:(0,n.jsx)(o.code,{children:"Date"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.p,{children:"Creation date of the booking.\nFormat: YYYY-MM-DD"}),"\n"]}),"\n",(0,n.jsxs)(o.h4,{id:"bookinghotelstartdate-",children:[(0,n.jsx)(o.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingHotel.",(0,n.jsx)("b",{children:"start"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(o.a,{href:"/api/types/scalars/date",children:(0,n.jsx)(o.code,{children:"Date"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.p,{children:"Check-in date for booking\nFormat: YYYY-MM-DD"}),"\n"]}),"\n",(0,n.jsxs)(o.h4,{id:"bookinghotelenddate-",children:[(0,n.jsx)(o.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingHotel.",(0,n.jsx)("b",{children:"end"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(o.a,{href:"/api/types/scalars/date",children:(0,n.jsx)(o.code,{children:"Date"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.p,{children:"Check-out date for the booking.\nFormat: YYYY-MM-DD"}),"\n"]}),"\n",(0,n.jsxs)(o.h4,{id:"bookinghotelhotelcodestring-",children:[(0,n.jsx)(o.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingHotel.",(0,n.jsx)("b",{children:"hotelCode"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(o.a,{href:"/api/types/scalars/string",children:(0,n.jsx)(o.code,{children:"String"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.p,{children:"Code of the hotel in the context selected."}),"\n"]}),"\n",(0,n.jsxs)(o.h4,{id:"bookinghotelhotelnamestring-",children:[(0,n.jsx)(o.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingHotel.",(0,n.jsx)("b",{children:"hotelName"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(o.a,{href:"/api/types/scalars/string",children:(0,n.jsx)(o.code,{children:"String"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.p,{children:"Name of the hotel."}),"\n"]}),"\n",(0,n.jsxs)(o.h4,{id:"bookinghotelboardcodestring-",children:[(0,n.jsx)(o.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingHotel.",(0,n.jsx)("b",{children:"boardCode"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(o.a,{href:"/api/types/scalars/string",children:(0,n.jsx)(o.code,{children:"String"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.p,{children:"Code of the board in the context selected."}),"\n"]}),"\n",(0,n.jsxs)(o.h4,{id:"bookinghoteloccupanciesoccupancy--",children:[(0,n.jsx)(o.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingHotel.",(0,n.jsx)("b",{children:"occupancies"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(o.a,{href:"/api/types/objects/occupancy",children:(0,n.jsx)(o.code,{children:"[Occupancy!]"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.p,{children:"List of occupancies for the request"}),"\n"]}),"\n",(0,n.jsxs)(o.h4,{id:"bookinghotelroomsbookingroom--",children:[(0,n.jsx)(o.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingHotel.",(0,n.jsx)("b",{children:"rooms"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(o.a,{href:"/api/types/objects/booking-room",children:(0,n.jsx)(o.code,{children:"[BookingRoom!]"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.p,{children:"List of rooms."}),"\n"]}),"\n",(0,n.jsx)(o.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.a,{href:"/api/types/objects/hotel-booking-detail",children:(0,n.jsx)(o.code,{children:"HotelBookingDetail"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"object"})]})]})}function p(e={}){const{wrapper:o}={...(0,a.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(j,{...e})}):j(e)}},21020:(e,o,t)=>{var n=t(96540),a=Symbol.for("react.element"),d=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function r(e,o,t){var n,d={},r=null,i=null;for(n in void 0!==t&&(r=""+t),void 0!==o.key&&(r=""+o.key),void 0!==o.ref&&(i=o.ref),o)s.call(o,n)&&!l.hasOwnProperty(n)&&(d[n]=o[n]);if(e&&e.defaultProps)for(n in o=e.defaultProps)void 0===d[n]&&(d[n]=o[n]);return{$$typeof:a,type:e,key:r,ref:i,props:d,_owner:c.current}}o.Fragment=d,o.jsx=r,o.jsxs=r},74848:(e,o,t)=>{e.exports=t(21020)},28453:(e,o,t)=>{t.d(o,{R:()=>s,x:()=>c});var n=t(96540);const a={},d=n.createContext(a);function s(e){const o=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(d.Provider,{value:o},e.children)}}}]);
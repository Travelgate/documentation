/*! For license information please see b2cb4c09.0a4b0a33.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6238],{57577:(e,t,o)=>{o.r(t),o.d(t,{Badge:()=>m,Bullet:()=>c,Details:()=>p,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>d,default:()=>x,frontMatter:()=>i,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"types/inputs/hotel-criteria-amend-rooms-quote-input","title":"HotelCriteriaAmendRoomsQuoteInput","description":"Criteria that contains basic information to amend the rooms of a reservation.","source":"@site/api/types/inputs/hotel-criteria-amend-rooms-quote-input.mdx","sourceDirName":"types/inputs","slug":"/types/inputs/hotel-criteria-amend-rooms-quote-input","permalink":"/api/types/inputs/hotel-criteria-amend-rooms-quote-input","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"hotel-criteria-amend-rooms-quote-input","title":"HotelCriteriaAmendRoomsQuoteInput"},"sidebar":"schemaSidebar","previous":{"title":"HotelCriteriaAmendRemarksQuoteInput","permalink":"/api/types/inputs/hotel-criteria-amend-remarks-quote-input"},"next":{"title":"HotelCriteriaBookingInput","permalink":"/api/types/inputs/hotel-criteria-booking-input"}}');var r=o(74848),s=o(28453),a=o(96540);const i={id:"hotel-criteria-amend-rooms-quote-input",title:"HotelCriteriaAmendRoomsQuoteInput"},d=void 0,l={},c=()=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),u=e=>(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),m=e=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{className:e.class,children:e.text})}),p=({dataOpen:e,dataClose:t,children:o,startOpen:n=!1})=>{const[s,i]=(0,a.useState)(n);return(0,r.jsxs)("details",{...s?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:s?e:t}),s&&o]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>HotelCriteriaAmendRoomsQuoteInput.<b>accessCode</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelcriteriaamendroomsquoteinputaccesscodestring-",level:4},{value:'<code>HotelCriteriaAmendRoomsQuoteInput.<b>language</b></code><Bullet></Bullet><code>Language</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelcriteriaamendroomsquoteinputlanguagelanguage-",level:4},{value:'<code>HotelCriteriaAmendRoomsQuoteInput.<b>hotelCode</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelcriteriaamendroomsquoteinputhotelcodestring-",level:4},{value:'<code>HotelCriteriaAmendRoomsQuoteInput.<b>reference</b></code><Bullet></Bullet><code>BookReferenceInput</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelcriteriaamendroomsquoteinputreferencebookreferenceinput-",level:4},{value:'<code>HotelCriteriaAmendRoomsQuoteInput.<b>bookingID</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelcriteriaamendroomsquoteinputbookingidstring-",level:4},{value:'<code>HotelCriteriaAmendRoomsQuoteInput.<b>rooms</b></code><Bullet></Bullet><code>[HotelAmendRoomInput!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelcriteriaamendroomsquoteinputroomshotelamendroominput--",level:4}];function g(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Criteria that contains basic information to amend the rooms of a reservation."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-graphql",children:"input HotelCriteriaAmendRoomsQuoteInput {\n  accessCode: String\n  language: Language\n  hotelCode: String\n  reference: BookReferenceInput\n  bookingID: String\n  rooms: [HotelAmendRoomInput!]!\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(t.h4,{id:"hotelcriteriaamendroomsquoteinputaccesscodestring-",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelCriteriaAmendRoomsQuoteInput.",(0,r.jsx)("b",{children:"accessCode"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,r.jsx)(t.code,{children:"String"})})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(t.p,{children:"The name of the access to use in the request."}),"\n",(0,r.jsxs)(t.h4,{id:"hotelcriteriaamendroomsquoteinputlanguagelanguage-",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelCriteriaAmendRoomsQuoteInput.",(0,r.jsx)("b",{children:"language"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(t.a,{href:"/api/types/scalars/language",children:(0,r.jsx)(t.code,{children:"Language"})})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(t.p,{children:"The language code."}),"\n",(0,r.jsxs)(t.h4,{id:"hotelcriteriaamendroomsquoteinputhotelcodestring-",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelCriteriaAmendRoomsQuoteInput.",(0,r.jsx)("b",{children:"hotelCode"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,r.jsx)(t.code,{children:"String"})})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(t.p,{children:"The hotel code."}),"\n",(0,r.jsxs)(t.h4,{id:"hotelcriteriaamendroomsquoteinputreferencebookreferenceinput-",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelCriteriaAmendRoomsQuoteInput.",(0,r.jsx)("b",{children:"reference"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(t.a,{href:"/api/types/inputs/book-reference-input",children:(0,r.jsx)(t.code,{children:"BookReferenceInput"})})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,r.jsx)(t.p,{children:"Contains the reservation references."}),"\n",(0,r.jsxs)(t.h4,{id:"hotelcriteriaamendroomsquoteinputbookingidstring-",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelCriteriaAmendRoomsQuoteInput.",(0,r.jsx)("b",{children:"bookingID"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,r.jsx)(t.code,{children:"String"})})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(t.p,{children:"HotelX's booking reference"}),"\n",(0,r.jsxs)(t.h4,{id:"hotelcriteriaamendroomsquoteinputroomshotelamendroominput--",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelCriteriaAmendRoomsQuoteInput.",(0,r.jsx)("b",{children:"rooms"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(t.a,{href:"/api/types/inputs/hotel-amend-room-input",children:(0,r.jsx)(t.code,{children:"[HotelAmendRoomInput!]!"})})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,r.jsx)(t.p,{children:"New rooms"})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},21020:(e,t,o)=>{var n=o(96540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,o){var n,s={},l=null,c=null;for(n in void 0!==o&&(l=""+o),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,n)&&!d.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:r,type:e,key:l,ref:c,props:s,_owner:i.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},74848:(e,t,o)=>{e.exports=o(21020)},28453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>i});var n=o(96540);const r={},s=n.createContext(r);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);
/*! For license information please see 86d7b432.9c36dae2.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[36875],{96697:(e,s,t)=>{t.r(s),t.d(s,{Badge:()=>x,Bullet:()=>l,Details:()=>j,SpecifiedBy:()=>p,assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var a=t(74848),r=t(28453),n=t(96540);const c={id:"date",title:"Date"},i=void 0,d={id:"types/scalars/date",title:"Date",description:"The Date type represents date values. A good example might be a Hotel Check-in date.",source:"@site/api/types/scalars/date.mdx",sourceDirName:"types/scalars",slug:"/types/scalars/date",permalink:"/api/types/scalars/date",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"date",title:"Date"},sidebar:"schemaSidebar",previous:{title:"DateTime",permalink:"/api/types/scalars/date-time"},next:{title:"Decimal",permalink:"/api/types/scalars/decimal"}},o={},l=()=>{const e={span:"span",...(0,r.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const s={a:"a",...(0,r.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},x=e=>{const s={span:"span",...(0,r.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.span,{className:e.class,children:e.text})})},j=({dataOpen:e,dataClose:s,children:t,startOpen:c=!1})=>{const i={details:"details",summary:"summary",...(0,r.R)()},[d,o]=(0,n.useState)(c);return(0,a.jsxs)(i.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(i.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:d?e:s}),d&&t]})},h=[{value:"Member Of",id:"member-of",level:3}];function b(e){const s={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:'The Date type represents date values. A good example might be a Hotel Check-in date.\nIn queries or mutations, DateTime fields have to be specified in ISO 8601 format with enclosing double quotes: "2017-10-22".'}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-graphql",children:"scalar Date\n"})}),"\n",(0,a.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/api/types/objects/booking-aggregation",children:(0,a.jsx)(s.code,{children:"BookingAggregation"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/booking-hotel",children:(0,a.jsx)(s.code,{children:"BookingHotel"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/booking-hotel-details",children:(0,a.jsx)(s.code,{children:"BookingHotelDetails"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/api/types/inputs/book-reference-dates-input",children:(0,a.jsx)(s.code,{children:"BookReferenceDatesInput"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/api/types/inputs/criteria-booking-dates-input",children:(0,a.jsx)(s.code,{children:"CriteriaBookingDatesInput"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/criteria-search",children:(0,a.jsx)(s.code,{children:"CriteriaSearch"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/api/types/inputs/hotel-criteria-search-input",children:(0,a.jsx)(s.code,{children:"HotelCriteriaSearchInput"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/api/types/inputs/hotel-one-step-book-input",children:(0,a.jsx)(s.code,{children:"HotelOneStepBookInput"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/api/types/inputs/hotel-one-step-quote-input",children:(0,a.jsx)(s.code,{children:"HotelOneStepQuoteInput"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/api/types/inputs/insights-countries-input",children:(0,a.jsx)(s.code,{children:"InsightsCountriesInput"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/api/types/inputs/insights-countries-where-input",children:(0,a.jsx)(s.code,{children:"InsightsCountriesWhereInput"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/payment-card-data",children:(0,a.jsx)(s.code,{children:"PaymentCardData"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/price-breakdown",children:(0,a.jsx)(s.code,{children:"PriceBreakdown"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/api/types/inputs/profile-create-input",children:(0,a.jsx)(s.code,{children:"ProfileCreateInput"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/profile-data",children:(0,a.jsx)(s.code,{children:"ProfileData"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/api/types/inputs/profile-update-input",children:(0,a.jsx)(s.code,{children:"ProfileUpdateInput"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/promotion",children:(0,a.jsx)(s.code,{children:"Promotion"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/rate-plan",children:(0,a.jsx)(s.code,{children:"RatePlan"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/reviewed-age-ranges",children:(0,a.jsx)(s.code,{children:"ReviewedAgeRanges"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/reviewed-bool",children:(0,a.jsx)(s.code,{children:"ReviewedBool"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/reviewed-int",children:(0,a.jsx)(s.code,{children:"ReviewedInt"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/reviewed-payment-type",children:(0,a.jsx)(s.code,{children:"ReviewedPaymentType"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/reviewed-rate-rule",children:(0,a.jsx)(s.code,{children:"ReviewedRateRule"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/reviewed-text",children:(0,a.jsx)(s.code,{children:"ReviewedText"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/reviewed-time-zone",children:(0,a.jsx)(s.code,{children:"ReviewedTimeZone"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/reviwed-pax-type-range-in-room-candidates",children:(0,a.jsx)(s.code,{children:"ReviwedPaxTypeRangeInRoomCandidates"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/search-criteria-static-dates",children:(0,a.jsx)(s.code,{children:"SearchCriteriaStaticDates"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/api/types/inputs/search-criteria-static-dates-input",children:(0,a.jsx)(s.code,{children:"SearchCriteriaStaticDatesInput"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/supplement",children:(0,a.jsx)(s.code,{children:"Supplement"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/user-onboarding-data",children:(0,a.jsx)(s.code,{children:"UserOnboardingData"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/api/types/inputs/user-onboarding-update-input",children:(0,a.jsx)(s.code,{children:"UserOnboardingUpdateInput"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/api/types/inputs/virtual-credit-card-input",children:(0,a.jsx)(s.code,{children:"VirtualCreditCardInput"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"input"})]})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}},21020:(e,s,t)=>{var a=t(96540),r=Symbol.for("react.element"),n=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,s,t){var a,n={},o=null,l=null;for(a in void 0!==t&&(o=""+t),void 0!==s.key&&(o=""+s.key),void 0!==s.ref&&(l=s.ref),s)c.call(s,a)&&!d.hasOwnProperty(a)&&(n[a]=s[a]);if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===n[a]&&(n[a]=s[a]);return{$$typeof:r,type:e,key:o,ref:l,props:n,_owner:i.current}}s.Fragment=n,s.jsx=o,s.jsxs=o},74848:(e,s,t)=>{e.exports=t(21020)},28453:(e,s,t)=>{t.d(s,{R:()=>c,x:()=>i});var a=t(96540);const r={},n=a.createContext(r);function c(e){const s=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),a.createElement(n.Provider,{value:s},e.children)}}}]);
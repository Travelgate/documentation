/*! For license information please see 8e5fd81f.89319252.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[21438],{54515:(e,s,t)=>{t.r(s),t.d(s,{Badge:()=>l,Bullet:()=>j,Details:()=>b,SpecifiedBy:()=>x,assets:()=>n,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=t(74848),c=t(28453),d=t(96540);const r={id:"date-time",title:"DateTime"},i=void 0,o={id:"types/scalars/date-time",title:"DateTime",description:"The DateTime type represents dateTime values. A good example might be a transaction TimeSpan.",source:"@site/api/types/scalars/date-time.mdx",sourceDirName:"types/scalars",slug:"/types/scalars/date-time",permalink:"/api/types/scalars/date-time",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"date-time",title:"DateTime"},sidebar:"schemaSidebar",previous:{title:"CVC",permalink:"/api/types/scalars/cvc"},next:{title:"Date",permalink:"/api/types/scalars/date"}},n={},j=()=>{const e={span:"span",...(0,c.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},x=e=>{const s={a:"a",...(0,c.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},l=e=>{const s={span:"span",...(0,c.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.span,{className:e.class,children:e.text})})},b=({dataOpen:e,dataClose:s,children:t,startOpen:r=!1})=>{const i={details:"details",summary:"summary",...(0,c.R)()},[o,n]=(0,d.useState)(r);return(0,a.jsxs)(i.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(i.summary,{onClick:e=>{e.preventDefault(),n((e=>!e))},style:{listStyle:"none"},children:o?e:s}),o&&t]})},p=[{value:"Member Of",id:"member-of",level:3}];function h(e){const s={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:'The DateTime type represents dateTime values. A good example might be a transaction TimeSpan.\nIn queries or mutations, DateTime fields have to be specified in ISO 8601 format with enclosing double quotes: "2017-10-22T13:57:31.123Z".'}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-graphql",children:"scalar DateTime\n"})}),"\n",(0,a.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/api/types/inputs/absolute-input",children:(0,a.jsx)(s.code,{children:"AbsoluteInput"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/access",children:(0,a.jsx)(s.code,{children:"Access"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/activation",children:(0,a.jsx)(s.code,{children:"Activation"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/activation-data",children:(0,a.jsx)(s.code,{children:"ActivationData"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/airport",children:(0,a.jsx)(s.code,{children:"Airport"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/alert",children:(0,a.jsx)(s.code,{children:"Alert"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/alert-event",children:(0,a.jsx)(s.code,{children:"AlertEvent"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/inputs/alert-filter-input",children:(0,a.jsx)(s.code,{children:"AlertFilterInput"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/api",children:(0,a.jsx)(s.code,{children:"API"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/asset",children:(0,a.jsx)(s.code,{children:"Asset"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/audit-data",children:(0,a.jsx)(s.code,{children:"AuditData"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/audit-rule",children:(0,a.jsx)(s.code,{children:"AuditRule"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/board",children:(0,a.jsx)(s.code,{children:"Board"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/cancel-penalty",children:(0,a.jsx)(s.code,{children:"CancelPenalty"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/category",children:(0,a.jsx)(s.code,{children:"Category"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/certification",children:(0,a.jsx)(s.code,{children:"Certification"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/client",children:(0,a.jsx)(s.code,{children:"Client"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/context",children:(0,a.jsx)(s.code,{children:"Context"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/inputs/date-range",children:(0,a.jsx)(s.code,{children:"DateRange"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/date-range-product",children:(0,a.jsx)(s.code,{children:"DateRangeProduct"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/inputs/date-range-product-input",children:(0,a.jsx)(s.code,{children:"DateRangeProductInput"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/inputs/date-time-filter",children:(0,a.jsx)(s.code,{children:"DateTimeFilter"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/destination",children:(0,a.jsx)(s.code,{children:"Destination"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/domain",children:(0,a.jsx)(s.code,{children:"Domain"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/entity",children:(0,a.jsx)(s.code,{children:"Entity"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/flight-offer",children:(0,a.jsx)(s.code,{children:"FlightOffer"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/flight-offer-item",children:(0,a.jsx)(s.code,{children:"FlightOfferItem"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/flight-order",children:(0,a.jsx)(s.code,{children:"FlightOrder"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/flight-order-item",children:(0,a.jsx)(s.code,{children:"FlightOrderItem"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/inputs/flight-origin-dest-criteria-input",children:(0,a.jsx)(s.code,{children:"FlightOriginDestCriteriaInput"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/flight-service",children:(0,a.jsx)(s.code,{children:"FlightService"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/geoname",children:(0,a.jsx)(s.code,{children:"Geoname"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/giata-data",children:(0,a.jsx)(s.code,{children:"GiataData"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/group",children:(0,a.jsx)(s.code,{children:"Group"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/group-content",children:(0,a.jsx)(s.code,{children:"GroupContent"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/group-data",children:(0,a.jsx)(s.code,{children:"GroupData"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/hotel",children:(0,a.jsx)(s.code,{children:"Hotel"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/hotel-runtime-configuration",children:(0,a.jsx)(s.code,{children:"HotelRuntimeConfiguration"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/hotel-xamenity",children:(0,a.jsx)(s.code,{children:"HotelXAmenity"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/inputs/hotel-xhotel-filter-input",children:(0,a.jsx)(s.code,{children:"HotelXHotelFilterInput"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/hotel-xupdate-status",children:(0,a.jsx)(s.code,{children:"HotelXUpdateStatus"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/hub-provider",children:(0,a.jsx)(s.code,{children:"HubProvider"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/hub-user",children:(0,a.jsx)(s.code,{children:"HubUser"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/individual",children:(0,a.jsx)(s.code,{children:"Individual"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/insights-portfolio-stats-data",children:(0,a.jsx)(s.code,{children:"InsightsPortfolioStatsData"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/insights-xbooking-aggregation",children:(0,a.jsx)(s.code,{children:"InsightsXBookingAggregation"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/insights-xbooking-detail",children:(0,a.jsx)(s.code,{children:"InsightsXBookingDetail"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/inventory-booking-window",children:(0,a.jsx)(s.code,{children:"InventoryBookingWindow"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/inputs/inventory-booking-window-input",children:(0,a.jsx)(s.code,{children:"InventoryBookingWindowInput"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/inventory-cancel-policy-by-date",children:(0,a.jsx)(s.code,{children:"InventoryCancelPolicyByDate"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/inputs/inventory-cancel-policy-by-date-input",children:(0,a.jsx)(s.code,{children:"InventoryCancelPolicyByDateInput"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/inputs/inventory-offer-setup-input",children:(0,a.jsx)(s.code,{children:"InventoryOfferSetupInput"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/inputs/inventory-offer-setup-update-input",children:(0,a.jsx)(s.code,{children:"InventoryOfferSetupUpdateInput"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/logging",children:(0,a.jsx)(s.code,{children:"Logging"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/logging-data",children:(0,a.jsx)(s.code,{children:"LoggingData"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/logging-legacy",children:(0,a.jsx)(s.code,{children:"LoggingLegacy"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/logging-legacy-data",children:(0,a.jsx)(s.code,{children:"LoggingLegacyData"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/inputs/logging-legacy-filter-input",children:(0,a.jsx)(s.code,{children:"LoggingLegacyFilterInput"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/macro-permission",children:(0,a.jsx)(s.code,{children:"MacroPermission"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/managed-group",children:(0,a.jsx)(s.code,{children:"ManagedGroup"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/mapping-inscription",children:(0,a.jsx)(s.code,{children:"MappingInscription"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/media",children:(0,a.jsx)(s.code,{children:"Media"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/member",children:(0,a.jsx)(s.code,{children:"Member"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/metadata",children:(0,a.jsx)(s.code,{children:"Metadata"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/interfaces/node",children:(0,a.jsx)(s.code,{children:"Node"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"interface"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/offer-dto",children:(0,a.jsx)(s.code,{children:"OfferDto"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/operation",children:(0,a.jsx)(s.code,{children:"Operation"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/organization",children:(0,a.jsx)(s.code,{children:"Organization"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/organization-data",children:(0,a.jsx)(s.code,{children:"OrganizationData"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/inputs/package-passenger-input",children:(0,a.jsx)(s.code,{children:"PackagePassengerInput"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/partner",children:(0,a.jsx)(s.code,{children:"Partner"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/password",children:(0,a.jsx)(s.code,{children:"Password"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/payment-card",children:(0,a.jsx)(s.code,{children:"PaymentCard"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/point-of-sale",children:(0,a.jsx)(s.code,{children:"PointOfSale"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/product",children:(0,a.jsx)(s.code,{children:"Product"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/profile-v2",children:(0,a.jsx)(s.code,{children:"ProfileV2"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/provider",children:(0,a.jsx)(s.code,{children:"Provider"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/recommendation",children:(0,a.jsx)(s.code,{children:"Recommendation"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/resource",children:(0,a.jsx)(s.code,{children:"Resource"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/role",children:(0,a.jsx)(s.code,{children:"Role"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/room-static",children:(0,a.jsx)(s.code,{children:"RoomStatic"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/search-criteria",children:(0,a.jsx)(s.code,{children:"SearchCriteria"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/segment",children:(0,a.jsx)(s.code,{children:"Segment"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/social-category",children:(0,a.jsx)(s.code,{children:"SocialCategory"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/social-sub-category",children:(0,a.jsx)(s.code,{children:"SocialSubCategory"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/speed-access",children:(0,a.jsx)(s.code,{children:"SpeedAccess"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/speed-connection",children:(0,a.jsx)(s.code,{children:"SpeedConnection"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/speed-historical-action",children:(0,a.jsx)(s.code,{children:"SpeedHistoricalAction"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/stat",children:(0,a.jsx)(s.code,{children:"Stat"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/stats",children:(0,a.jsx)(s.code,{children:"Stats"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/stats-aggregation-data",children:(0,a.jsx)(s.code,{children:"StatsAggregationData"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/stats-asset",children:(0,a.jsx)(s.code,{children:"StatsAsset"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/stats-data",children:(0,a.jsx)(s.code,{children:"StatsData"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/inputs/stats-filter-input",children:(0,a.jsx)(s.code,{children:"StatsFilterInput"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/stats-real-time-range-data",children:(0,a.jsx)(s.code,{children:"StatsRealTimeRangeData"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/supplier",children:(0,a.jsx)(s.code,{children:"Supplier"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/system",children:(0,a.jsx)(s.code,{children:"System"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/traffic-optimization-access",children:(0,a.jsx)(s.code,{children:"TrafficOptimizationAccess"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/traffic-optimization-connection",children:(0,a.jsx)(s.code,{children:"TrafficOptimizationConnection"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/traffic-optimization-historical-action",children:(0,a.jsx)(s.code,{children:"TrafficOptimizationHistoricalAction"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/traffic-optimization-hotel-blacklist",children:(0,a.jsx)(s.code,{children:"TrafficOptimizationHotelBlacklist"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/traffic-optimization-hotel-stats-aggregation-data",children:(0,a.jsx)(s.code,{children:"TrafficOptimizationHotelStatsAggregationData"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/traffic-optimization-stats-aggregation-data",children:(0,a.jsx)(s.code,{children:"TrafficOptimizationStatsAggregationData"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/transactions",children:(0,a.jsx)(s.code,{children:"Transactions"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/transport-departure",children:(0,a.jsx)(s.code,{children:"TransportDeparture"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(j,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/user-profile",children:(0,a.jsx)(s.code,{children:"UserProfile"})})," ",(0,a.jsx)(l,{class:"badge badge--secondary",text:"object"})]})]})}function g(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},21020:(e,s,t)=>{var a=t(96540),c=Symbol.for("react.element"),d=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function n(e,s,t){var a,d={},n=null,j=null;for(a in void 0!==t&&(n=""+t),void 0!==s.key&&(n=""+s.key),void 0!==s.ref&&(j=s.ref),s)r.call(s,a)&&!o.hasOwnProperty(a)&&(d[a]=s[a]);if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===d[a]&&(d[a]=s[a]);return{$$typeof:c,type:e,key:n,ref:j,props:d,_owner:i.current}}s.Fragment=d,s.jsx=n,s.jsxs=n},74848:(e,s,t)=>{e.exports=t(21020)},28453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>i});var a=t(96540);const c={},d=a.createContext(c);function r(e){const s=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),a.createElement(d.Provider,{value:s},e.children)}}}]);
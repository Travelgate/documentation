/*! For license information please see 8afb2006.9107d626.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[59566],{38594:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var n=o(74848),r=o(28453);const s={title:"Hotels",sidebar_position:1},i="Hotel-X Development - Hotels Query",l={id:"our-products/are-you-a-buyer/our-methods/static-content/hotel-x-hotels-query",title:"Hotels",description:"What is Hotel-X Hotels Query?\ud83c\udfe8",source:"@site/kb/our-products/are-you-a-buyer/our-methods/static-content/hotel-x-hotels-query.md",sourceDirName:"our-products/are-you-a-buyer/our-methods/static-content",slug:"/our-products/are-you-a-buyer/our-methods/static-content/hotel-x-hotels-query",permalink:"/kb/our-products/are-you-a-buyer/our-methods/static-content/hotel-x-hotels-query",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Hotels",sidebar_position:1},sidebar:"kbSidebar",previous:{title:"Hotel-X Development - Amendments",permalink:"/kb/our-products/are-you-a-buyer/our-methods/booking-management/amendments/what-is-hotel-x-amendments-query"},next:{title:"Destinations",permalink:"/kb/our-products/are-you-a-buyer/our-methods/static-content/hotel-x-destinations-query"}},a={},h=[{value:"What is Hotel-X Hotels Query?\ud83c\udfe8",id:"what-is-hotel-x-hotels-query",level:3},{value:"How can I retrieve the Seller&#39;s Hotel List via Hotel-X?",id:"how-can-i-retrieve-the-sellers-hotel-list-via-hotel-x",level:3},{value:"Can I search hotels by destination?\ud83d\udd0e",id:"can-i-search-hotels-by-destination",level:3},{value:"What can I expect to receive in Hotels Query response?",id:"what-can-i-expect-to-receive-in-hotels-query-response",level:3},{value:"How can I know the total amount of properties returned in Hotels Query?\ud83d\udcd1",id:"how-can-i-know-the-total-amount-of-properties-returned-in-hotels-query",level:3},{value:"Can I paginate content methods? \ud83d\udd22",id:"can-i-paginate-content-methods-",level:3},{value:"What languages does Hotel-X Hotels Query support?\ud83d\udd20",id:"what-languages-does-hotel-x-hotels-query-support",level:3},{value:"What is the difference between &quot;hotelCode&quot; and &quot;hotelCodeSupplier&quot;?\u2611\ufe0f",id:"what-is-the-difference-between-hotelcode-and-hotelcodesupplier\ufe0f",level:3},{value:"What hotel codes should I map as Buyer?\u2753",id:"what-hotel-codes-should-i-map-as-buyer",level:3},{value:"Will I receive availability results for all the properties within a Seller&#39;s portfolio?\u26a0\ufe0f",id:"will-i-receive-availability-results-for-all-the-properties-within-a-sellers-portfolio\ufe0f",level:3}];function u(e){const t={a:"a",admonition:"admonition",h1:"h1",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"hotel-x-development---hotels-query",children:"Hotel-X Development - Hotels Query"}),"\n",(0,n.jsx)(t.h3,{id:"what-is-hotel-x-hotels-query",children:"What is Hotel-X Hotels Query?\ud83c\udfe8"}),"\n",(0,n.jsx)(t.p,{children:"Hotels Query returns a hotel list from a Supplier\u2019s access, so that you are able to retrieve all the properties the Seller has configured for a given set of credentials."}),"\n",(0,n.jsx)(t.h3,{id:"how-can-i-retrieve-the-sellers-hotel-list-via-hotel-x",children:"How can I retrieve the Seller's Hotel List via Hotel-X?"}),"\n",(0,n.jsxs)(t.p,{children:["You just need to follow the specifications in our ",(0,n.jsx)(t.a,{href:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/hotels",children:"Documentation"})," and ",(0,n.jsx)(t.a,{href:"/playground",children:"API Playground"})," and build your own Hotels Query, as easy as that! Also, remember you are able to ",(0,n.jsx)(t.strong,{children:"personalize"})," the fields requested in order to receive only the information that matters to you in the response."]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["Don't forget to check our ",(0,n.jsx)(t.a,{href:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/hotels#requests-examples",children:"Hotel-X Pull Buyers API Documentation"})," for a full example of a Hotel-X Hotels Query!\ud83d\ude80"]})}),"\n",(0,n.jsx)(t.h3,{id:"can-i-search-hotels-by-destination",children:"Can I search hotels by destination?\ud83d\udd0e"}),"\n",(0,n.jsxs)(t.p,{children:["Of course! You can also ",(0,n.jsx)(t.strong,{children:'search hotels by destination by adding the "destinationCodes"'})," field in your Query criteria:"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://storage.travelgate.com/kbase/hotels_query_destinations.jpg",alt:"hotels_query_destinations"})}),"\n",(0,n.jsx)(t.h3,{id:"what-can-i-expect-to-receive-in-hotels-query-response",children:"What can I expect to receive in Hotels Query response?"}),"\n",(0,n.jsx)(t.p,{children:"Some of the fields returned are:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Hotel code"}),"\n",(0,n.jsx)(t.li,{children:"Hotel name"}),"\n",(0,n.jsx)(t.li,{children:"Location"}),"\n",(0,n.jsx)(t.li,{children:"Amenities"}),"\n",(0,n.jsx)(t.li,{children:"Medias"}),"\n",(0,n.jsx)(t.li,{children:"Descriptions"}),"\n",(0,n.jsx)(t.li,{children:"Room Information and max./min. occupancy and pax ranges (if provided)"}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Static content fetching is always sequential and ",(0,n.jsx)(t.strong,{children:"the amount of information and content returned may vary between Sellers"}),". You will find out all about mapping on TravelgateX ",(0,n.jsx)(t.a,{href:"/kb/connections/connections-content/all-about-mapping",children:"here"}),"."]})}),"\n",(0,n.jsx)(t.h3,{id:"how-can-i-know-the-total-amount-of-properties-returned-in-hotels-query",children:"How can I know the total amount of properties returned in Hotels Query?\ud83d\udcd1"}),"\n",(0,n.jsxs)(t.p,{children:['Just add the "',(0,n.jsx)(t.strong,{children:"count"}),'" field to your Hotels Query in order to retrieve the total amount of properties in the list:']}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://storage.travelgate.com/kbase/hotelcount.jpg",alt:"hotelcount"})}),"\n",(0,n.jsx)(t.h3,{id:"can-i-paginate-content-methods-",children:"Can I paginate content methods? \ud83d\udd22"}),"\n",(0,n.jsxs)(t.p,{children:["Sure! Make sure you check the following ",(0,n.jsx)(t.a,{href:"/kb/our-products/are-you-a-buyer/our-methods/static-content/faqs/token-based-pagination-hotel-room-destinations",children:"article"})," for further information."]}),"\n",(0,n.jsx)(t.h3,{id:"what-languages-does-hotel-x-hotels-query-support",children:"What languages does Hotel-X Hotels Query support?\ud83d\udd20"}),"\n",(0,n.jsxs)(t.p,{children:["Hotel-X supports all languages, but receiving hotel descriptions in one or another depends entirely on the languages supported by every Seller - ",(0,n.jsx)(t.strong,{children:"we recommend you confirm this information with the Seller prior to activating the connection"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["You can also check this information through our ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/metadata",children:"Metadata Query"})}),", though note that the information displayed is general and might be subject to changes depending on your agreement with the Seller."]}),"\n",(0,n.jsx)(t.h3,{id:"what-is-the-difference-between-hotelcode-and-hotelcodesupplier\ufe0f",children:'What is the difference between "hotelCode" and "hotelCodeSupplier"?\u2611\ufe0f'}),"\n",(0,n.jsx)(t.p,{children:'Both "hotelCode" and "hotelCodeSupplier" are typically the same because we do not have our own hotel codes. However, there are instances where Sellers may return the same hotel code for different properties. In those cases, we concatenate the destination code with the hotel code to ensure a unique code (TravelgateX "hotelCode" vs. the Seller "hotelCodeSupplier").'}),"\n",(0,n.jsx)(t.h3,{id:"what-hotel-codes-should-i-map-as-buyer",children:"What hotel codes should I map as Buyer?\u2753"}),"\n",(0,n.jsxs)(t.p,{children:["You should ",(0,n.jsx)(t.strong,{children:'always map the "hotelCode"'})," since it is the one you should use when performing Searches via our API."]}),"\n",(0,n.jsx)(t.h3,{id:"will-i-receive-availability-results-for-all-the-properties-within-a-sellers-portfolio\ufe0f",children:"Will I receive availability results for all the properties within a Seller's portfolio?\u26a0\ufe0f"}),"\n",(0,n.jsx)(t.p,{children:"No, the Hotel List response includes all the hotels that a Seller has configured for your account. However, it is possible that there may be no availability for the specific dates or distribution that you are requesting."}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["More information on our ",(0,n.jsx)(t.a,{href:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/hotels",children:"Documentation"})," and ",(0,n.jsx)(t.a,{href:"/playground",children:"API Playground"})]})})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},21020:(e,t,o)=>{var n=o(96540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function h(e,t,o){var n,s={},h=null,u=null;for(n in void 0!==o&&(h=""+o),void 0!==t.key&&(h=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,n)&&!a.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:r,type:e,key:h,ref:u,props:s,_owner:l.current}}t.Fragment=s,t.jsx=h,t.jsxs=h},74848:(e,t,o)=>{e.exports=o(21020)},28453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>l});var n=o(96540);const r={},s=n.createContext(r);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);
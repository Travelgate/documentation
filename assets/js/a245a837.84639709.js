"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[14129],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=i.createContext({}),s=function(e){var t=i.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(m.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=s(n),c=a,k=u["".concat(m,".").concat(c)]||u[c]||d[c]||o;return n?i.createElement(k,l(l({ref:t},p),{},{components:n})):i.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var r={};for(var m in t)hasOwnProperty.call(t,m)&&(r[m]=t[m]);r.originalType=e,r[u]="string"==typeof e?e:a,l[1]=r;for(var s=2;s<o;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},71739:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var i=n(87462),a=(n(67294),n(3905));const o={sidebar_position:4},l="Amend Rooms",r={unversionedId:"apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amend-rooms",id:"apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amend-rooms",title:"Amend Rooms",description:"The Amend Rooms operation allows you to modify your booking's rooms. You can add or remove rooms or change the room type. To make a modification to your booking accurately, you should begin by executing the 'quote amend' query to confirm the feasibility of the change and its associated price. After obtaining this information, you can proceed to implement the amendment using the 'commit' mutation, which will finalize the modification in the Seller's system.",source:"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amend-rooms.md",sourceDirName:"apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments",slug:"/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amend-rooms",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amend-rooms",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amend-rooms.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Amend Board",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amend-board"},next:{title:"Amend Paxes",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amend-paxes"}},m={},s=[{value:"Quote Amend Rooms",id:"quote-amend-rooms",level:2},{value:"Inputs",id:"inputs",level:3},{value:"1. Criteria",id:"1-criteria",level:4},{value:"2. Settings",id:"2-settings",level:3},{value:"Commit Amend Rooms",id:"commit-amend-rooms",level:2},{value:"Inputs",id:"inputs-1",level:3},{value:"1. Data",id:"1-data",level:3},{value:"2. Settings",id:"2-settings-1",level:3}],p=(u="CautionSettingsHotelX",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var u;const d={toc:s},c="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"amend-rooms"},"Amend Rooms"),(0,a.kt)("p",null,"The Amend Rooms operation allows you to modify your booking's rooms. You can add or remove rooms or change the room type. To make a modification to your booking accurately, you should begin by executing the 'quote amend' query to confirm the feasibility of the change and its associated price. After obtaining this information, you can proceed to implement the amendment using the 'commit' mutation, which will finalize the modification in the Seller's system."),(0,a.kt)("h2",{id:"quote-amend-rooms"},"Quote Amend Rooms"),(0,a.kt)("p",null,"The quote amend query simulates the amendment to confirm the price of the booking modification. The returned fields include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"amendFee")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"amendedBookingDetail"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"reference")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"holder")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hotel")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"price")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"quotePrice")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cancelPolicy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"remarks")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"status"))))),(0,a.kt)("h3",{id:"inputs"},"Inputs"),(0,a.kt)("p",null,"When creating your quote amend query, you have two different inputs to fill based on your specific needs:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Criteria"),(0,a.kt)("li",{parentName:"ol"},"Settings")),(0,a.kt)(p,{mdxType:"CautionSettingsHotelX"}),(0,a.kt)("h4",{id:"1-criteria"},"1. Criteria"),(0,a.kt)("p",null,"You can perform the ",(0,a.kt)("inlineCode",{parentName:"p"},"query")," (simulation) of the amendment sending all the booking information (",(0,a.kt)("inlineCode",{parentName:"p"},"reference"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"dates"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"hotelCode"),") or sending the bookingID got in the booking flow:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Booking information:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"accessCode")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"language")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hotelCode")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"reference")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dates")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"BookingID got in the booking flow:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bookingID"))))),(0,a.kt)("h3",{id:"2-settings"},"2. Settings"),(0,a.kt)("p",null,"Settings are the common configurations used to construct requests to the supplier/s. By default, we apply the same configuration to all Hotel-X clients."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Mandatory Settings:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"client")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"context")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"timeout")," (timeout in milliseconds for supplier connections. Applied to all suppliers; won't close client connection if exceeded)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"businessRules"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Optional Settings:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"group")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"auditTransactions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"suppliers")," (each one contains its own code, settings and accesses)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"plugins")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"testMode")," (this flag allows only the accesses checked as test)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"clientTokens")," (used to identify the origin of the request, this is only used in plugins)")),(0,a.kt)("h2",{id:"commit-amend-rooms"},"Commit Amend Rooms"),(0,a.kt)("p",null,"The commit amend mutation generates the amendment to confirm the booking modification. The returned fields include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"amendFee")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"amendedBookingDetail"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"reference")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"holder")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hotel")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"price")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"quotePrice")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cancelPolicy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"remarks")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"status"))))),(0,a.kt)("h3",{id:"inputs-1"},"Inputs"),(0,a.kt)("p",null,"When creating your quote amend query, you have two different inputs to fill based on your specific needs:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Data"),(0,a.kt)("li",{parentName:"ol"},"Settings")),(0,a.kt)("h3",{id:"1-data"},"1. Data"),(0,a.kt)("p",null,"You must perform the ",(0,a.kt)("inlineCode",{parentName:"p"},"mutation")," (commit) of the amendment sending the ",(0,a.kt)("inlineCode",{parentName:"p"},"amendmentID")," received in the quote amend response:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"amendmentID"))),(0,a.kt)("h3",{id:"2-settings-1"},"2. Settings"),(0,a.kt)("p",null,"Settings are the common configurations used to construct requests to the supplier/s. By default, we apply the same configuration to all Hotel-X clients."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Mandatory Settings")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"context")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"timeout")," (timeout in milliseconds for supplier connections. Applied to all suppliers; won't close client connection if exceeded)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"businessRules")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"language")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"currency")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nationality")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"markets"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Optional Settings")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"group")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"auditTransactions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"suppliers")," (each one contains its own code, settings and accesses)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"plugins")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"testMode")," (this flag allows only the accesses checked as test)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"clientTokens")," (used to identify the origin of the request, this is only used in plugins)")))}k.isMDXComponent=!0}}]);
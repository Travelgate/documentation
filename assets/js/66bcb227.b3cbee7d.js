/*! For license information please see 66bcb227.b3cbee7d.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[62987],{8933:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>d,metadata:()=>h,toc:()=>m});var i=n(74848),s=n(28453);const o="query (\n\t$criteria: HotelCriteriaAmendPaxesQuoteInput!\n\t$settings: HotelSettingsInput!\n) {\n\thotelX {\n\t\tquotePaxesAmendment(criteria: $criteria, settings: $settings) {\n\t\t\tamendFee {\n\t\t\t\tcurrency\n\t\t\t\tbinding\n\t\t\t\tnet\n\t\t\t\tgross\n\t\t\t\texchange {\n\t\t\t\t\tcurrency\n\t\t\t\t\trate\n\t\t\t\t}\n\t\t\t}\n\t\t\tamendedBookingDetail {\n\t\t\t\tstatus\n\t\t\t\treference {\n\t\t\t\t\tclient\n\t\t\t\t\tsupplier\n\t\t\t\t\thotel\n\t\t\t\t\tbookingID\n\t\t\t\t\tamendmentID\n\t\t\t\t}\n\t\t\t\tholder {\n\t\t\t\t\ttitle\n\t\t\t\t\tname\n\t\t\t\t\tsurname\n\t\t\t\t\tcontactInfo {\n\t\t\t\t\t\temail\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tprice {\n\t\t\t\t\tcurrency\n\t\t\t\t\tbinding\n\t\t\t\t\tnet\n\t\t\t\t\tgross\n\t\t\t\t\texchange {\n\t\t\t\t\t\tcurrency\n\t\t\t\t\t\trate\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\tadviseMessage {\n\t\t\t\tcode\n\t\t\t\tdescription\n\t\t\t}\n\t\t}\n\t}\n}",r='{\n\t"criteria": {\n\t\t"bookingID": "n1@1[241128[241129[240516[1[es[EUR[2[test_09052024_test[3128791[",\n\t\t"rooms": [\n\t\t\t{\n\t\t\t\t"occupancyRefId": 1,\n\t\t\t\t"paxes": [\n\t\t\t\t\t{\n\t\t\t\t\t\t"name": "Juan",\n\t\t\t\t\t\t"surname": "Smith",\n\t\t\t\t\t\t"age": 30\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t"name": "Tom",\n\t\t\t\t\t\t"surname": "Jones",\n\t\t\t\t\t\t"age": 30\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t]\n\t},\n\t"settings": {\n\t\t"context": "HOTELTEST",\n\t\t"client": "client_demo",\n\t\t"auditTransactions": true,\n\t\t"timeout": 60000,\n\t\t"testMode": true\n\t}\n}',l="mutation (\n\t$data: HotelCriteriaAmendPaxesCommitInput!\n\t$settings: HotelSettingsInput!\n) {\n\thotelX {\n\t\tamendPaxes(data: $data, settings: $settings) {\n\t\t\tamendFee {\n\t\t\t\tcurrency\n\t\t\t\tbinding\n\t\t\t\tnet\n\t\t\t\tgross\n\t\t\t\texchange {\n\t\t\t\t\tcurrency\n\t\t\t\t\trate\n\t\t\t\t}\n\t\t\t}\n\t\t\tamendedBookingDetail {\n\t\t\t\tstatus\n\t\t\t\treference {\n\t\t\t\t\tclient\n\t\t\t\t\tsupplier\n\t\t\t\t\thotel\n\t\t\t\t\tbookingID\n\t\t\t\t\tamendmentID\n\t\t\t\t}\n\t\t\t\tholder {\n\t\t\t\t\ttitle\n\t\t\t\t\tname\n\t\t\t\t\tsurname\n\t\t\t\t\tcontactInfo {\n\t\t\t\t\t\temail\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tprice {\n\t\t\t\t\tcurrency\n\t\t\t\t\tbinding\n\t\t\t\t\tnet\n\t\t\t\t\tgross\n\t\t\t\t\texchange {\n\t\t\t\t\t\tcurrency\n\t\t\t\t\t\trate\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\tadviseMessage {\n\t\t\t\tcode\n\t\t\t\tdescription\n\t\t\t}\n\t\t}\n\t}\n}",c='{\n\t"data": {\n\t\t"amendmentID": "xxx"\n\t},\n\t"settings": {\n\t\t"context": "HOTELTEST",\n\t\t"client": "client_demo",\n\t\t"auditTransactions": true,\n\t\t"timeout": 60000,\n\t\t"testMode": true\n\t}\n}',d={sidebar_position:5},a="Amend Paxes",h={id:"apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amend-paxes",title:"Amend Paxes",description:"The Amend Paxes operation lets you update your booking's paxes. You can change names, surnames, ages, and add or remove paxes. To make a modification to your booking accurately, you should begin by executing the 'quote amend' query to confirm the feasibility of the change and its associated price. After obtaining this information, you can proceed to implement the amendment using the 'commit' mutation, which will finalize the modification in the Seller's system.",source:"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amend-paxes.mdx",sourceDirName:"apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments",slug:"/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amend-paxes",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amend-paxes",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amend-paxes.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Amend Rooms",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amend-rooms"},next:{title:"Amend Remarks",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amend-remarks"}},u={},m=[{value:"Quote Amend Paxes",id:"quote-amend-paxes",level:2},{value:"Inputs",id:"inputs",level:3},{value:"1. Criteria",id:"1-criteria",level:3},{value:"2. Settings",id:"2-settings",level:3},{value:"Requests Examples",id:"requests-examples",level:3},{value:"Paxes amendment quote with the <code>bookingID</code> from the book response",id:"paxes-amendment-quote-with-the-bookingid-from-the-book-response",level:4},{value:"Commit Amend Paxes",id:"commit-amend-paxes",level:2},{value:"Inputs",id:"inputs-1",level:3},{value:"1. Data",id:"1-data",level:3},{value:"2. Settings",id:"2-settings-1",level:3},{value:"Requests Examples",id:"requests-examples-1",level:3}];function x(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{CautionSettingsHotelX:n,GraphqlSample:d}=t;return n||j("CautionSettingsHotelX",!0),d||j("GraphqlSample",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"amend-paxes",children:"Amend Paxes"})}),"\n",(0,i.jsx)(t.p,{children:"The Amend Paxes operation lets you update your booking's paxes. You can change names, surnames, ages, and add or remove paxes. To make a modification to your booking accurately, you should begin by executing the 'quote amend' query to confirm the feasibility of the change and its associated price. After obtaining this information, you can proceed to implement the amendment using the 'commit' mutation, which will finalize the modification in the Seller's system."}),"\n",(0,i.jsx)(t.h2,{id:"quote-amend-paxes",children:"Quote Amend Paxes"}),"\n",(0,i.jsx)(t.p,{children:"The quote amend query simulates the amendment to confirm the price of the booking modification. The returned fields include:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"amendFee"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"amendedBookingDetail"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"reference"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"holder"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"hotel"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"price"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"quotePrice"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"cancelPolicy"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"remarks"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"status"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"inputs",children:"Inputs"}),"\n",(0,i.jsx)(t.p,{children:"When creating your quote amend query, you have two different inputs to fill based on your specific needs:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Criteria"}),"\n",(0,i.jsx)(t.li,{children:"Settings"}),"\n"]}),"\n",(0,i.jsx)(n,{}),"\n",(0,i.jsx)(t.h3,{id:"1-criteria",children:"1. Criteria"}),"\n",(0,i.jsxs)(t.p,{children:["You can perform the ",(0,i.jsx)(t.code,{children:"query"})," (simulation) of the amendment sending all the booking information (",(0,i.jsx)(t.code,{children:"reference"}),", ",(0,i.jsx)(t.code,{children:"dates"}),", ",(0,i.jsx)(t.code,{children:"hotelCode"}),") or sending the ",(0,i.jsx)(t.code,{children:"bookingID"})," got in the booking flow:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Booking information:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"accessCode"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"language"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"hotelCode"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"reference"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"dates"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"BookingID got in the booking flow:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"bookingID"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["You can decide between the two options either by booking information or directly by ",(0,i.jsx)(t.code,{children:"bookingID"}),", empowering you with the choice that suits you best."]}),"\n",(0,i.jsxs)(t.p,{children:["Additionally you'll need to indicate the new paxes information you want for your reservation with the ",(0,i.jsx)(t.code,{children:"rooms"})," input. For example:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'{\n    "criteria" : {\n        "bookingID" : "n1@1[241128[241129[240516[1[es[EUR[2[test_09052024_test[3128791[",\n        "rooms" : [\n            {\n                "occupancyRefId" : 1,\n                "paxes" : [\n                    {\n                        "name" : "Juan",\n                        "surname" : "Smith",\n                        "age" : 30\n                    },\n                    {\n                        "name" : "Tom",\n                        "surname" : "Jones",\n                        "age" : 30\n                    }\n                ]\n            }\n        ]\n    }\n}\n'})}),"\n",(0,i.jsx)(t.h3,{id:"2-settings",children:"2. Settings"}),"\n",(0,i.jsx)(t.p,{children:"Settings are the common configurations used to construct requests to the supplier/s. By default, we apply the same configuration to all Hotel-X clients."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Mandatory Settings:"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"client"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"context"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"timeout"})," (Timeout in milliseconds for the supplier connection. Won't close client connection if exceeded.)"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Optional Settings:"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"group"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"auditTransactions"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"suppliers"})," (Each one contains its own code, settings and accesses)"]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"plugins"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"testMode"})," (This flag allows only the accesses checked as test)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"clientTokens"})," (Used to identify the origin of the request, this is only used in plugins)"]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"businessRules"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"operationTimeout"})," (Timeout in milliseconds for Hotel-X connection. Will close Buyer connection if exceeded. Must be higher than ",(0,i.jsx)(t.code,{children:"timeout"}),".)"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"requests-examples",children:"Requests Examples"}),"\n",(0,i.jsxs)(t.h4,{id:"paxes-amendment-quote-with-the-bookingid-from-the-book-response",children:["Paxes amendment quote with the ",(0,i.jsx)(t.code,{children:"bookingID"})," from the book response"]}),"\n",(0,i.jsx)(d,{query:o,variables:r}),"\n",(0,i.jsx)(t.h2,{id:"commit-amend-paxes",children:"Commit Amend Paxes"}),"\n",(0,i.jsx)(t.p,{children:"The commit amend mutation generates the amendment to confirm the booking modification. The returned fields include:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"amendFee"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"amendedBookingDetail"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"reference"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"holder"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"hotel"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"price"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"quotePrice"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"cancelPolicy"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"remarks"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"status"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"inputs-1",children:"Inputs"}),"\n",(0,i.jsx)(t.p,{children:"When creating your quote amend query, you have two different inputs to fill based on your specific needs:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Data"}),"\n",(0,i.jsx)(t.li,{children:"Settings"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"1-data",children:"1. Data"}),"\n",(0,i.jsxs)(t.p,{children:["You must perform the ",(0,i.jsx)(t.code,{children:"mutation"})," (commit) of the amendment sending the amendmentID received in the quote amend response:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"amendmentID"})}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"2-settings-1",children:"2. Settings"}),"\n",(0,i.jsx)(t.p,{children:"Settings are the common configurations used to construct requests to the supplier/s. By default, we apply the same configuration to all Hotel-X clients."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Mandatory Settings"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"context"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"timeout"})," (Timeout in milliseconds for the supplier connection. Won't close client connection if exceeded.)"]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"businessRules"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"language"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"currency"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"nationality"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"markets"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Optional Settings"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"group"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"auditTransactions"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"suppliers"})," (Each one contains its own code, settings and accesses)"]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"plugins"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"testMode"})," (This flag allows only the accesses checked as test)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"clientTokens"})," (Used to identify the origin of the request, this is only used in plugins)"]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"businessRules"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"operationTimeout"})," (Timeout in milliseconds for Hotel-X connection. Will close Buyer connection if exceeded. Must be higher than ",(0,i.jsx)(t.code,{children:"timeout"}),".)"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"requests-examples-1",children:"Requests Examples"}),"\n",(0,i.jsx)(d,{query:l,variables:c})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}function j(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},21020:(e,t,n)=>{var i=n(96540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var i,o={},d=null,a=null;for(i in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(a=t.ref),t)r.call(t,i)&&!c.hasOwnProperty(i)&&(o[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===o[i]&&(o[i]=t[i]);return{$$typeof:s,type:e,key:d,ref:a,props:o,_owner:l.current}}t.Fragment=o,t.jsx=d,t.jsxs=d},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var i=n(96540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);
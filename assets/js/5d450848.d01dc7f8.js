"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["96175"],{81237:function(e,n,s){s.r(n),s.d(n,{frontMatter:()=>d,toc:()=>o,default:()=>x,metadata:()=>r,assets:()=>a,contentTitle:()=>t});var r=JSON.parse('{"id":"apis/for-sellers/inventory-push-graphql-api/set-up/rates-set-up/update-rates-set-up","title":"Update Rates","description":"Mutation Overview","source":"@site/docs/apis/for-sellers/inventory-push-graphql-api/set-up/rates-set-up/update-rates-set-up.mdx","sourceDirName":"apis/for-sellers/inventory-push-graphql-api/set-up/rates-set-up","slug":"/apis/for-sellers/inventory-push-graphql-api/set-up/rates-set-up/update-rates-set-up","permalink":"/docs/apis/for-sellers/inventory-push-graphql-api/set-up/rates-set-up/update-rates-set-up","draft":false,"unlisted":false,"editUrl":"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-sellers/inventory-push-graphql-api/set-up/rates-set-up/update-rates-set-up.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Rates","permalink":"/docs/apis/for-sellers/inventory-push-graphql-api/set-up/rates-set-up/"},"next":{"title":"Create Rates","permalink":"/docs/apis/for-sellers/inventory-push-graphql-api/set-up/rates-set-up/create-rates-set-up"}}'),i=s(85893),l=s(50065),c=s(22993);let d={sidebar_position:2},t="Update Rates",a={},o=[{value:"Mutation Overview",id:"mutation-overview",level:2},{value:"1. Criteria",id:"1-criteria",level:3},{value:"Mandatory Input",id:"mandatory-input",level:4},{value:"Optional Input",id:"optional-input",level:4},{value:"2. Settings",id:"2-settings",level:3},{value:"Response Considerations",id:"response-considerations",level:3},{value:"<code>RatesSetUpRs</code> (<em>OBJECT</em>)",id:"ratessetuprs-object",level:4},{value:"Returned Fields",id:"returned-fields",level:2},{value:"Examples",id:"examples",level:2},{value:"Update properties from a rate",id:"update-properties-from-a-rate",level:4}];function h(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.a)(),...e.components},{Details:s,GraphqlSample:r}=n;return s||j("Details",!0),r||j("GraphqlSample",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"update-rates",children:"Update Rates"})}),"\n",(0,i.jsx)(n.h2,{id:"mutation-overview",children:"Mutation Overview"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"updateRatesSetUp"})," mutation allows you to update any property of an already added rate to a hotel in a specific client-seller relation in Inventory. The returned fields include:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"code"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"name"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"hotelCode"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"active"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"mealPlanIncluded"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"agePolicies"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"maxAgeChildren"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"maxAgeInfants"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"freeInfants"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"freeChildren"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"paymentPolicies"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"currency"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"commission"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"priceIsBinding"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"acceptedPayments"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"type"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"cardTypes"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"bookingRules"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"bookingWindow"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"start"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"end"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"markets"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"included"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"excluded"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"rateRule"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"seniorRule"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cancelPolicies"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"baseCancelPolicy"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"refundable"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cancelPenalties"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"daysBeforeArrival"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"penaltyType"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"value"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cancelPoliciesByDate"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"start"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"end"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cancelPolicy"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"refundable"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cancelPenalties"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"daysBeforeArrival"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"penaltyType"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"value"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"surcharges"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"chargeType"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"taxType"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"value"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"applyType"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"perNight"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"perPax"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"1-criteria",children:"1. Criteria"}),"\n",(0,i.jsx)(n.p,{children:"When building your mutation, you need to provide the following input fields:"}),"\n",(0,i.jsx)(n.h4,{id:"mandatory-input",children:"Mandatory Input"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"clientCode"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"supplierCode"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"hotelCode"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"rates"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"code"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"optional-input",children:"Optional Input"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"contextCode"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"rates"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"name"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"hotelCode"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"active"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"mealPlanIncluded"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"agePolicies"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"maxAgeChildren"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"maxAgeInfants"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"freeInfants"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"freeChildren"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"paymentPolicies"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"currency"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"commission"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"priceIsBinding"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"acceptedPayments"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"type"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"cardTypes"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"bookingRules"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"bookingWindow"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"start"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"end"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"markets"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"included"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"excluded"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"rateRule"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"seniorRule"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cancelPolicies"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"baseCancelPolicy"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"refundable"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cancelPenalties"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"daysBeforeArrival"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"penaltyType"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"value"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cancelPoliciesByDate"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"start"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"end"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cancelPolicy"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"refundable"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cancelPenalties"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"daysBeforeArrival"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"penaltyType"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"value"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"surcharges"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"chargeType"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"taxType"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"value"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"applyType"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"perNight"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"perPax"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"2-settings",children:"2. Settings"}),"\n",(0,i.jsx)(n.p,{children:"To update a rate, ensure that all mandatory fields are properly filled out and associate the rate with the correct hotel and seller."}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsxs)(n.p,{children:["When you update a rate, we recommend always sending ",(0,i.jsx)(n.em,{children:"cancelPolicies"}),", specifically ",(0,i.jsx)(n.em,{children:"baseCancelPolicy"}),". Our API allows you to send ",(0,i.jsx)(n.em,{children:"cancelPoliciesByDate"}),"\nwithout a base policy; However, if any availability day is not covered, you need to provide a ",(0,i.jsx)(n.em,{children:"baseCancelPolicy"}),". For this reason, when you create a rate without a\n",(0,i.jsx)(n.em,{children:"baseCancelPolicy"})," our system automatically adds a base cancellation policy with ",(0,i.jsx)(n.code,{children:"daysBeforeArrival: 999"}),", ",(0,i.jsx)(n.code,{children:"penaltyType: PERCENTAGE"})," and ",(0,i.jsx)(n.code,{children:"value: 100"}),", so it's ",(0,i.jsx)(n.strong,{children:"non refundable"}),"."]}),(0,i.jsxs)(n.p,{children:["This is to prevent a ",(0,i.jsx)(n.a,{href:"../../../../../apps/inventory/extranet/set-up/setup",children:"Rate without cancellation policies"})," from being considered 100% refundable."]})]}),"\n",(0,i.jsx)(n.h3,{id:"response-considerations",children:"Response Considerations"}),"\n",(0,i.jsx)(n.p,{children:"The mutation returns the updated rate along with success status and possible advise messages."}),"\n",(0,i.jsxs)(n.h4,{id:"ratessetuprs-object",children:[(0,i.jsx)(n.code,{children:"RatesSetUpRs"})," (",(0,i.jsx)(n.em,{children:"OBJECT"}),")"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"rates"})," (",(0,i.jsx)(n.em,{children:"InventoryRateSetup"}),") - A collection of updated rates.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"code"})," (",(0,i.jsx)(n.em,{children:"String"}),") - The rate code."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"name"})," (",(0,i.jsx)(n.em,{children:"String"}),") - The name of the rate."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"active"})," (",(0,i.jsx)(n.em,{children:"Boolean"}),") - Indicates if the rate is active."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"mealPlanIncluded"})," (",(0,i.jsx)(n.em,{children:"Int"}),") - Indicates if a meal plan is included."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"paymentPolicies"})," (",(0,i.jsx)(n.em,{children:"InventoryPaymentPolicies"}),") - Payment policies associated with the rate."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"bookingRules"})," (",(0,i.jsx)(n.em,{children:"InventoryBookingRules"}),") - Booking rules associated with the rate."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cancelPolicies"})," (",(0,i.jsx)(n.em,{children:"InventoryCancelPoliciesRate"}),") - Cancellation policies associated with the rate."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"surcharges"})," (",(0,i.jsx)(n.em,{children:"InventorySurcharge"}),") - Surcharges associated with the rate."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"rooms"})," (",(0,i.jsx)(n.em,{children:"InventoryRoomSetUp"}),") - Rooms associated with the rate."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"success"})," (",(0,i.jsx)(n.em,{children:"Boolean"}),") - Indicates if the operation was successful."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"adviseMessages"})," (",(0,i.jsx)(n.em,{children:"AdviseMessage"}),") - Messages related to the operation."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"returned-fields",children:"Returned Fields"}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"RatesSetUpRs"})," (",(0,i.jsx)(n.em,{children:"OBJECT"}),")",(0,i.jsx)(n.br,{}),"\n","Represents a rates setup response object."]})}),(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"adviseMessages"})," (",(0,i.jsx)(n.em,{children:"AdviseMessage"}),")",(0,i.jsx)(n.br,{}),"\n","List of advise messages. See AdviseMessage."]})}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"code"}),"\xa0",(0,i.jsx)("span",{class:"required",children:" *"}),"\xa0 (",(0,i.jsx)(n.em,{children:"ID"}),")",(0,i.jsx)(n.br,{}),"\n","AM code: The following codes can be returned:"]})})}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"type"}),"\xa0",(0,i.jsx)("span",{class:"required",children:" *"}),"\xa0 (",(0,i.jsx)(n.em,{children:"String"}),")",(0,i.jsx)(n.br,{}),"\n","Error type: The following types are valid:[type]"]})})}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"description"}),"\xa0",(0,i.jsx)("span",{class:"required",children:" *"}),"\xa0 (",(0,i.jsx)(n.em,{children:"String"}),")",(0,i.jsx)(n.br,{}),"\n","Error description"]})})}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"level"}),"\xa0",(0,i.jsx)("span",{class:"required",children:" *"}),"\xa0 (",(0,i.jsx)(n.em,{children:"Enum of AdviseMessageLevel"}),")",(0,i.jsx)(n.br,{}),"\n","Indicates the level of importance of the message.\nPossible values: ERROR, WARN, INFO.",(0,i.jsx)(n.br,{}),"\n","Possible values:",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"WARN"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"ERROR"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"INFO"})]})})}),(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"external"})," (",(0,i.jsx)(n.em,{children:"ExternalMessage"}),")",(0,i.jsx)(n.br,{}),"\n","Specify the external message."]})}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"code"})," (",(0,i.jsx)(n.em,{children:"String"}),")",(0,i.jsx)(n.br,{}),"\n","External code."]})})}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"message"}),"\xa0",(0,i.jsx)("span",{class:"required",children:" *"}),"\xa0 (",(0,i.jsx)(n.em,{children:"String"}),")",(0,i.jsx)(n.br,{}),"\n","External message."]})})})]}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"correlationID"}),"\xa0",(0,i.jsx)("span",{class:"required",children:" *"}),"\xa0 (",(0,i.jsx)(n.em,{children:"ID"}),")",(0,i.jsx)(n.br,{}),"\n","Identifier to investigate the cause of the error."]})})})]}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"success"}),"\xa0",(0,i.jsx)("span",{class:"required",children:" *"}),"\xa0 (",(0,i.jsx)(n.em,{children:"Boolean"}),")",(0,i.jsx)(n.br,{}),"\n","Indicates whether the operation was successful."]})})}),(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"ratesCreated"})," (",(0,i.jsx)(n.em,{children:"InventoryRateSetup"}),")",(0,i.jsx)(n.br,{}),"\n","List of created rates. See RateSetup."]})}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"code"})," (",(0,i.jsx)(n.em,{children:"String"}),")",(0,i.jsx)(n.br,{}),"\n","Code associated with the rate."]})})}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"name"})," (",(0,i.jsx)(n.em,{children:"String"}),")",(0,i.jsx)(n.br,{}),"\n","Name of the rate."]})})}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"active"}),"\xa0",(0,i.jsx)("span",{class:"required",children:" *"}),"\xa0 (",(0,i.jsx)(n.em,{children:"Boolean"}),")",(0,i.jsx)(n.br,{}),"\n","Indicates whether the rate is active."]})})}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"mealPlanIncluded"}),"\xa0",(0,i.jsx)("span",{class:"required",children:" *"}),"\xa0 (",(0,i.jsx)(n.em,{children:"Int"}),")",(0,i.jsx)(n.br,{}),"\n","Indicates if the meal plan included in the rate."]})})}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"baseCode"})," (",(0,i.jsx)(n.em,{children:"String"}),")",(0,i.jsx)(n.br,{}),"\n","Base rate code associated with the rate."]})})}),(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"agePolicies"})," (",(0,i.jsx)(n.em,{children:"InventoryAgePolicies"}),")",(0,i.jsx)(n.br,{}),"\n","Age policies associated with the rate."]})}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"maxAgeInfants"}),"\xa0",(0,i.jsx)("span",{class:"required",children:" *"}),"\xa0 (",(0,i.jsx)(n.em,{children:"Int"}),")",(0,i.jsx)(n.br,{}),"\n","Max age baby not inclusive"]})})}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"freeInfants"}),"\xa0",(0,i.jsx)("span",{class:"required",children:" *"}),"\xa0 (",(0,i.jsx)(n.em,{children:"Boolean"}),")",(0,i.jsx)(n.br,{}),"\n","If true the babies are free of charge"]})})}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"maxAgeChildren"}),"\xa0",(0,i.jsx)("span",{class:"required",children:" *"}),"\xa0 (",(0,i.jsx)(n.em,{children:"Int"}),")",(0,i.jsx)(n.br,{}),"\n","Max age child not inclusive"]})})}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"freeChildren"}),"\xa0",(0,i.jsx)("span",{class:"required",children:" *"}),"\xa0 (",(0,i.jsx)(n.em,{children:"Boolean"}),")",(0,i.jsx)(n.br,{}),"\n","If true children are free of charge"]})})})]}),(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"paymentPolicies"})," (",(0,i.jsx)(n.em,{children:"InventoryPaymentPolicies"}),")",(0,i.jsx)(n.br,{}),"\n","Payment policies associated with the rate."]})}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"currency"}),"\xa0",(0,i.jsx)("span",{class:"required",children:" *"}),"\xa0 (",(0,i.jsx)(n.em,{children:"Currency"}),")",(0,i.jsx)(n.br,{}),"\n","Currency of the rate"]})})}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"commission"}),"\xa0",(0,i.jsx)("span",{class:"required",children:" *"}),"\xa0 (",(0,i.jsx)(n.em,{children:"Float"}),")",(0,i.jsx)(n.br,{}),"\n","Commission applied for all rooms in this rate, leave value 0 for net price. Only Informative."]})})}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"priceIsBinding"}),"\xa0",(0,i.jsx)("span",{class:"required",children:" *"}),"\xa0 (",(0,i.jsx)(n.em,{children:"Boolean"}),")",(0,i.jsx)(n.br,{}),"\n","Indicates whether the prices are binding prices, meaning they cannot be sold for a lower price. This information is for informative purposes only."]})})}),(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"acceptedPayments"})," (",(0,i.jsx)(n.em,{children:"AcceptedPayment"}),")",(0,i.jsx)(n.br,{}),"\n","Accepted payment methods for the rate. If not informed, it defaults to MerchantPay."]})}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsxs)("summary",{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"type"}),"\xa0",(0,i.jsx)("span",{class:"required",children:" *"}),"\xa0 (",(0,i.jsx)(n.em,{children:"Enum of PaymentType"}),")"]}),(0,i.jsxs)(n.p,{children:["Possible values:",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"MERCHANT"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"DIRECT"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"CARD_BOOKING"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"CARD_CHECK_IN"})]})]})}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsxs)("summary",{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"cardTypes"}),"\xa0",(0,i.jsx)("span",{class:"required",children:" *"}),"\xa0 (",(0,i.jsx)(n.em,{children:"Enum of PaymentCardType"}),")"]}),(0,i.jsxs)(n.p,{children:["Possible values:",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"VI"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"AX"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"BC"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"CA"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"CB"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"CU"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"DS"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"DC"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"T"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"R"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"N"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"L"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"E"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"JC"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"TO"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"S"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"EC"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"EU"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"TP"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"OP"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"ER"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"XS"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"O"})]})]})})]})]}),(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"bookingRules"})," (",(0,i.jsx)(n.em,{children:"InventoryBookingRules"}),")",(0,i.jsx)(n.br,{}),"\n","Booking rules associated with the rate."]})}),(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"bookingWindow"})," (",(0,i.jsx)(n.em,{children:"InventoryBookingWindow"}),")",(0,i.jsx)(n.br,{}),"\n","Booking Dates for which the rate will be available. Do not send it if you want the rate available for all dates."]})}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"start"}),"\xa0",(0,i.jsx)("span",{class:"required",children:" *"}),"\xa0 (",(0,i.jsx)(n.em,{children:"DateTime"}),")",(0,i.jsx)(n.br,{}),"\n","Start date of the booking window."]})})}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"end"}),"\xa0",(0,i.jsx)("span",{class:"required",children:" *"}),"\xa0 (",(0,i.jsx)(n.em,{children:"DateTime"}),")",(0,i.jsx)(n.br,{}),"\n","End date of the booking window."]})})})]}),(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"markets"})," (",(0,i.jsx)(n.em,{children:"InventoryMarkets"}),")",(0,i.jsx)(n.br,{}),"\n","Markets included or excluded. Do not send if the rate is available for all markets. Only informative."]})}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"included"})," (",(0,i.jsx)(n.em,{children:"String"}),")",(0,i.jsx)(n.br,{}),"\n","Included markets."]})})}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"excluded"})," (",(0,i.jsx)(n.em,{children:"String"}),")",(0,i.jsx)(n.br,{}),"\n","Excluded markets."]})})})]}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"rateRule"})," (",(0,i.jsx)(n.em,{children:"Enum of RatePlanType"}),")",(0,i.jsx)(n.br,{}),"\n",'"NoRatePlanType" indicates absence of a specific rate plan. "LargeFamily" and "PublicServant" denote rates tailored for those groups. "Negotiated" and "Package" signify negotiated rates and package deals, respectively. "CanaryResident" and "BalearicResident" are special rates for residents of the Canary Islands and the Balearic Islands, respectively. Lastly, "HoneyMoon" designates rates intended for honeymooners or couples celebrating their honeymoon.',(0,i.jsx)(n.br,{}),"\n","Possible values:",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"NO_RATE_PLAN_TYPE"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"LARGE_FAMILY"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"PUBLIC_SERVANT"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"NEGOTIATED"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"PACKAGE"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"CANARY_RESIDENT"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"BALEARIC_RESIDENT"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"HONEY_MOON"})]})})}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"seniorRule"})," (",(0,i.jsx)(n.em,{children:"Enum of SeniorRate"}),")",(0,i.jsx)(n.br,{}),"\n",'"NoSeniorRate" indicates the absence of a senior rate. "SeniorRate_55", "SeniorRate_60", and "SeniorRate_65" denote rates applicable to individuals aged 55, 60, and 65, respectively. These rates are typically offered to seniors as a special discount or incentive.',(0,i.jsx)(n.br,{}),"\n","Possible values:",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"NO_SENIOR_RATE"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"SENIOR_RATE_55"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"SENIOR_RATE_60"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"SENIOR_RATE_65"})]})})})]}),(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"cancelPolicies"})," (",(0,i.jsx)(n.em,{children:"InventoryCancelPoliciesRate"}),")",(0,i.jsx)(n.br,{}),"\n","Cancel policies associated with the rate."]})}),(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"baseCancelPolicy"})," (",(0,i.jsx)(n.em,{children:"InventoryCancelPolicy"}),")",(0,i.jsx)(n.br,{}),"\n","Defines the base cancel policies. Only Informative."]})}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"refundable"}),"\xa0",(0,i.jsx)("span",{class:"required",children:" *"}),"\xa0 (",(0,i.jsx)(n.em,{children:"Boolean"}),")",(0,i.jsx)(n.br,{}),"\n","Indicates if the rate is refundable."]})})}),(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"cancelPenalties"})," (",(0,i.jsx)(n.em,{children:"InventoryCancelPenalty"}),")",(0,i.jsx)(n.br,{}),"\n","List of penalties applicable for the rate. See CancelPenalty."]})}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"daysBeforeArrival"}),"\xa0",(0,i.jsx)("span",{class:"required",children:" *"}),"\xa0 (",(0,i.jsx)(n.em,{children:"Int"}),")",(0,i.jsx)(n.br,{}),"\n","Number of days prior to arrival day in which this Cancellation policy applies."]})})}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"penaltyType"}),"\xa0",(0,i.jsx)("span",{class:"required",children:" *"}),"\xa0 (",(0,i.jsx)(n.em,{children:"Enum of PenaltyType"}),")",(0,i.jsx)(n.br,{}),"\n","Penalty type. See PenaltyType.",(0,i.jsx)(n.br,{}),"\n","Possible values:",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"AMOUNT"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"NIGHTS"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"PERCENTAGE"})]})})}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"value"}),"\xa0",(0,i.jsx)("span",{class:"required",children:" *"}),"\xa0 (",(0,i.jsx)(n.em,{children:"Float"}),")",(0,i.jsx)(n.br,{}),"\n","Penalty value."]})})})]})]}),(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"cancelPoliciesByDate"})," (",(0,i.jsx)(n.em,{children:"InventoryCancelPolicyByDate"}),")",(0,i.jsx)(n.br,{}),"\n","This defines a calendar of cancel policies, serving as informational data. If base cancel policies exist for a particular day, the CancelPoliciesByDate take precedence."]})}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"start"}),"\xa0",(0,i.jsx)("span",{class:"required",children:" *"}),"\xa0 (",(0,i.jsx)(n.em,{children:"DateTime"}),")",(0,i.jsx)(n.br,{}),"\n","Start date where the cancel policy must apply."]})})}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"end"}),"\xa0",(0,i.jsx)("span",{class:"required",children:" *"}),"\xa0 (",(0,i.jsx)(n.em,{children:"DateTime"}),")",(0,i.jsx)(n.br,{}),"\n","End date where the cancel policy must apply."]})})}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"cancelPolicy"}),"\xa0",(0,i.jsx)("span",{class:"required",children:" *"}),"\xa0 (",(0,i.jsx)(n.em,{children:"undefined"}),")",(0,i.jsx)(n.br,{}),"\n","Cancel policy. See CancelPolicy."]})})})]})]}),(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"surcharges"})," (",(0,i.jsx)(n.em,{children:"InventorySurcharge"}),")",(0,i.jsx)(n.br,{}),"\n","Surcharges associated with the rate."]})}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"chargeType"}),"\xa0",(0,i.jsx)("span",{class:"required",children:" *"}),"\xa0 (",(0,i.jsx)(n.em,{children:"Enum of InventoryChargeType"}),")",(0,i.jsx)(n.br,{}),"\n","Indicates if the surcharge is included or not in the price.",(0,i.jsx)(n.br,{}),"\n","Possible values:",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"INCLUDED"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"EXCLUDED"})]})})}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"taxType"}),"\xa0",(0,i.jsx)("span",{class:"required",children:" *"}),"\xa0 (",(0,i.jsx)(n.em,{children:"Enum of InventoryTaxType"}),")",(0,i.jsx)(n.br,{}),"\n","The type of tax applied to the surcharge.",(0,i.jsx)(n.br,{}),"\n","Possible values:",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"CITY"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"LOCAL"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"RESORT_FEE"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"SUPPLEMENT_TO_BE_PAID_ON_SPOT"})]})})}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"value"}),"\xa0",(0,i.jsx)("span",{class:"required",children:" *"}),"\xa0 (",(0,i.jsx)(n.em,{children:"Float"}),")",(0,i.jsx)(n.br,{}),"\n","The value of the surcharge."]})})}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"applyType"}),"\xa0",(0,i.jsx)("span",{class:"required",children:" *"}),"\xa0 (",(0,i.jsx)(n.em,{children:"Enum of InventoryApplyType"}),")",(0,i.jsx)(n.br,{}),"\n","The type of application for the surcharge.",(0,i.jsx)(n.br,{}),"\n","Possible values:",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"PERCENTAGE"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"AMOUNT"})]})})}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"perNight"}),"\xa0",(0,i.jsx)("span",{class:"required",children:" *"}),"\xa0 (",(0,i.jsx)(n.em,{children:"Boolean"}),")",(0,i.jsx)(n.br,{}),"\n","Indicates whether the surcharge is applied per night."]})})}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"perPax"}),"\xa0",(0,i.jsx)("span",{class:"required",children:" *"}),"\xa0 (",(0,i.jsx)(n.em,{children:"Boolean"}),")",(0,i.jsx)(n.br,{}),"\n","Indicates whether the surcharge is applied per person."]})})})]}),(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"rooms"})," (",(0,i.jsx)(n.em,{children:"InventoryRoomSetUp"}),")",(0,i.jsx)(n.br,{}),"\n","Rooms associated with the rate."]})}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"code"})," (",(0,i.jsx)(n.em,{children:"String"}),")",(0,i.jsx)(n.br,{}),"\n","Code associated with the room."]})})}),(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"master"})," (",(0,i.jsx)(n.em,{children:"InventoryMasterRoom"}),")",(0,i.jsx)(n.br,{}),"\n","Master of the room."]})}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"id"}),"\xa0",(0,i.jsx)("span",{class:"required",children:" *"}),"\xa0 (",(0,i.jsx)(n.em,{children:"Int"}),")",(0,i.jsx)(n.br,{}),"\n","Id associated with the room master."]})})}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"code"})," (",(0,i.jsx)(n.em,{children:"String"}),")",(0,i.jsx)(n.br,{}),"\n","Code associated with the room."]})})}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"name"})," (",(0,i.jsx)(n.em,{children:"String"}),")",(0,i.jsx)(n.br,{}),"\n","Name associated with the room."]})})})]}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"active"}),"\xa0",(0,i.jsx)("span",{class:"required",children:" *"}),"\xa0 (",(0,i.jsx)(n.em,{children:"Boolean"}),")",(0,i.jsx)(n.br,{}),"\n","Indicates whether the room is active."]})})}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"externalCode"})," (",(0,i.jsx)(n.em,{children:"String"}),")",(0,i.jsx)(n.br,{}),"\n","External code associated with the room."]})})}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"standard"}),"\xa0",(0,i.jsx)("span",{class:"required",children:" *"}),"\xa0 (",(0,i.jsx)(n.em,{children:"Int"}),")",(0,i.jsx)(n.br,{}),"\n","Standard of the room. Typically the number of guests."]})})}),(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"uses"}),"\xa0",(0,i.jsx)("span",{class:"required",children:" *"}),"\xa0 (",(0,i.jsx)(n.em,{children:"InventoryRoomUse"}),")",(0,i.jsx)(n.br,{}),"\n","List of uses associated with the room."]})}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"numberOfGuests"}),"\xa0",(0,i.jsx)("span",{class:"required",children:" *"}),"\xa0 (",(0,i.jsx)(n.em,{children:"Int"}),")",(0,i.jsx)(n.br,{}),"\n","Gets or sets the number of guests allowed in the room."]})})}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"minAge"}),"\xa0",(0,i.jsx)("span",{class:"required",children:" *"}),"\xa0 (",(0,i.jsx)(n.em,{children:"Int"}),")",(0,i.jsx)(n.br,{}),"\n","Gets or sets the minimum age allowed for guests in the room."]})})}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"maxAge"}),"\xa0",(0,i.jsx)("span",{class:"required",children:" *"}),"\xa0 (",(0,i.jsx)(n.em,{children:"Int"}),")",(0,i.jsx)(n.br,{}),"\n","Gets or sets the maximum age allowed for guests in the room."]})})}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"paxType"}),"\xa0",(0,i.jsx)("span",{class:"required",children:" *"}),"\xa0 (",(0,i.jsx)(n.em,{children:"Enum of InventoryPaxType"}),")",(0,i.jsx)(n.br,{}),"\n","Gets or sets the type of guests allowed in the room.\nPaxType",(0,i.jsx)(n.br,{}),"\n","Possible values:",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"INFANT"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"CHILD"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"ADULT"})]})})})]})]}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"hotelCode"})," (",(0,i.jsx)(n.em,{children:"String"}),")",(0,i.jsx)(n.br,{}),"\n","Hotel code associated with the rate."]})})})]}),(0,i.jsx)(s,{style:{pointerEvents:"none"},children:(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"ratesDeleted"})," (",(0,i.jsx)(n.em,{children:"String"}),")",(0,i.jsx)(n.br,{}),"\n","List of deleted rates."]})})})]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.h4,{id:"update-properties-from-a-rate",children:"Update properties from a rate"}),"\n",(0,i.jsx)(n.p,{children:"With the following mutation, we are going to update the meal plan included in a rate and its cancel policies."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The possible values for ",(0,i.jsx)(n.code,{children:"mealPlanIncluded"})," can be retrieved using the query ",(0,i.jsx)(n.a,{href:"../../static-data/mealplans",children:"Mealplans"}),"."]})}),"\n",(0,i.jsx)(r,{query:c.VZ,variables:c.hk})]})}function x(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}function j(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},22993:function(e,n,s){s.d(n,{BT:()=>c,Lr:()=>d,VZ:()=>r,fF:()=>t,hk:()=>i,nv:()=>l});let r=`mutation ($input: InventoryRateSetupUpdateInput!) {
  inventory {
    updateRateSetup(rateSetupUpdateInput: $input) {
      ratesUpdated {
        code
        name
        hotelCode
        active
        mealPlanIncluded
        agePolicies {
          maxAgeChildren
          maxAgeInfants
          freeInfants
          freeChildren
        }
        paymentPolicies {
          currency
          commission
          priceIsBinding
          acceptedPayments {
            type
            cardTypes
          }
        }
        bookingRules {
          bookingWindow {
            start
            end
          }
          markets {
            included
            excluded
          }
          rateRule
          seniorRule
        }
        cancelPolicies {
          baseCancelPolicy {
            refundable
            cancelPenalties {
              daysBeforeArrival
              penaltyType
              value
            }
          }
          cancelPoliciesByDate {
            start
            end
            cancelPolicy {
              refundable
              cancelPenalties {
                daysBeforeArrival
                penaltyType
                value
              }
            }
          }
        }
        surcharges {
          chargeType
          taxType
          value
          applyType
          perNight
          perPax
        }
        rooms {
          code
          master {
            id
            code
            name
          }
          active
          externalCode
          standard
          uses {
            numberOfGuests
            paxType
          }
        }
      }
      success
      adviseMessages {
        code
        description
        level
        external {
          code
          message
        }
      }
    }
  }
}`,i=`{
    "input": {
        "clientCode": "CDOC",
        "supplierCode": "PDOC",
        "hotelCode": "2",
        "contextCode": "TGX_PUSH",
        "rates": [
            {
                "code": "BAR",
                "mealPlanIncluded": 14,
                "cancelPolicies": {
                    "baseCancelPolicy": {
                        "refundable": true,
                        "cancelPenalties": [
                            {
                                "daysBeforeArrival": 1,
                                "penaltyType": "PERCENTAGE",
                                "value": 100
                            }
                        ]
                    }
                }
            }
        ]
    }
}`,l=`mutation ($input: InventoryRatesSetupCreateInput!) {
  inventory {
    createRatesSetup(rateSetupCreateInput: $input) {
      rates {
        code
        name
        hotelCode
        active
        mealPlanIncluded
        agePolicies {
          maxAgeChildren
          maxAgeInfants
          freeInfants
          freeChildren
        }
        paymentPolicies {
          currency
          commission
          priceIsBinding
          acceptedPayments {
            type
            cardTypes
          }
        }
        bookingRules {
          bookingWindow {
            start
            end
          }
          markets {
            included
            excluded
          }
          rateRule
          seniorRule
        }
        cancelPolicies {
          baseCancelPolicy {
            refundable
            cancelPenalties {
              daysBeforeArrival
              penaltyType
              value
            }
          }
          cancelPoliciesByDate {
            start
            end
            cancelPolicy {
              refundable
              cancelPenalties {
                daysBeforeArrival
                penaltyType
                value
              }
            }
          }
        }
        surcharges {
          chargeType
          taxType
          value
          applyType
          perNight
          perPax
        }
        rooms {
          code
          master {
            id
            code
            name
          }
          active
          externalCode
          standard
          uses {
            numberOfGuests
            paxType
          }
        }
      }
      success
      adviseMessages {
        code
        description
        level
        external {
          code
          message
        }
      }
    }
  }
}`,c=`{
    "input": {
        "clientCode": "CDOC",
        "supplierCode": "PDOC",
        "hotelCode": "2",
        "contextCode": "TGX_PUSH",
        "rates": [
            {
                "code": "BAR",
                "name": "Best Available Rate",
                "active": true,
                "agePolicies": {
                    "maxAgeChildren": 12,
                    "maxAgeInfants": 2,
                    "freeInfants": false,
                    "freeChildren": false
                },
                "mealPlanIncluded": 14,
                "paymentPolicies": {
                    "currency": "EUR",
                    "commission": 10,
                    "priceIsBinding": true,
                    "acceptedPayments": [
                        {
                            "type": "CARD_BOOKING",
                            "cardTypes": ["VI", "CA"]
                        }
                    ]
                },
                "cancelPolicies": {
                    "baseCancelPolicy": {
                        "refundable": true,
                        "cancelPenalties": [
                            {
                                "daysBeforeArrival": 7,
                                "penaltyType": "PERCENTAGE",
                                "value": 30
                            },
                            {
                                "daysBeforeArrival": 1,
                                "penaltyType": "PERCENTAGE",
                                "value": 100
                            }
                        ]
                    }
                }
            }
        ]
    }
}`,d=`mutation ($input: InventoryRateSetupDeleteInput!) {
  inventory {
    deleteRatesSetup(rateSetupDeleteInput: $input) {
      success
      adviseMessages {
        code
        description
        level
        external {
          code
          message
        }
      }
    }
  }
}`,t=`{
    "input": {
        "clientCode": "CDOC",
        "supplierCode": "PDOC",
        "hotelCode": "2",
        "contextCode": "TGX_PUSH",
        "rateCodes": ["BAR"]
    }
}`},50065:function(e,n,s){s.d(n,{Z:()=>d,a:()=>c});var r=s(67294);let i={},l=r.createContext(i);function c(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["79377"],{49938:function(e,n,s){s.r(n),s.d(n,{frontMatter:()=>a,toc:()=>x,default:()=>p,metadata:()=>i,assets:()=>o,contentTitle:()=>h});var i=JSON.parse('{"id":"apis/for-buyers/inventory-buyers/inventory-set-up-graphql-api/set-up/rates-set-up/update-rates-set-up","title":"Update Rates","description":"Mutation Overview","source":"@site/docs/apis/for-buyers/inventory-buyers/inventory-set-up-graphql-api/set-up/rates-set-up/update-rates-set-up.mdx","sourceDirName":"apis/for-buyers/inventory-buyers/inventory-set-up-graphql-api/set-up/rates-set-up","slug":"/apis/for-buyers/inventory-buyers/inventory-set-up-graphql-api/set-up/rates-set-up/update-rates-set-up","permalink":"/docs/apis/for-buyers/inventory-buyers/inventory-set-up-graphql-api/set-up/rates-set-up/update-rates-set-up","draft":false,"unlisted":false,"editUrl":"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/inventory-buyers/inventory-set-up-graphql-api/set-up/rates-set-up/update-rates-set-up.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Rates","permalink":"/docs/apis/for-buyers/inventory-buyers/inventory-set-up-graphql-api/set-up/rates-set-up/"},"next":{"title":"Create Rates","permalink":"/docs/apis/for-buyers/inventory-buyers/inventory-set-up-graphql-api/set-up/rates-set-up/create-rates-set-up"}}'),l=s(85893),r=s(50065);function c(e){let n={br:"br",em:"em",p:"p",strong:"strong",...(0,r.a)(),...e.components},{Details:s}=n;return s||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(s,{children:[(0,l.jsx)("summary",{children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"InventoryRateSetupUpdateInput"})," (",(0,l.jsx)(n.em,{children:"INPUT_OBJECT"}),")",(0,l.jsx)(n.br,{}),"\n","Rates setup delete input data"]})}),(0,l.jsxs)(s,{style:{pointerEvents:"none"},children:[(0,l.jsx)("summary",{children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)("strong",{children:"clientCode"}),"\xa0",(0,l.jsx)("span",{class:"required",children:" *"}),"\xa0 ",(0,l.jsx)("em",{children:"(String)"})]})}),(0,l.jsx)(n.p,{children:"Client code."})]}),(0,l.jsxs)(s,{style:{pointerEvents:"none"},children:[(0,l.jsx)("summary",{children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)("strong",{children:"supplierCode"}),"\xa0",(0,l.jsx)("span",{class:"required",children:" *"}),"\xa0 ",(0,l.jsx)("em",{children:"(String)"})]})}),(0,l.jsx)(n.p,{children:"Travelgate Supplier/Channel code."})]}),(0,l.jsxs)(s,{children:[(0,l.jsx)("summary",{children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)("strong",{children:"rates"}),"\xa0",(0,l.jsx)("span",{class:"required",children:" *"}),"\xa0 ",(0,l.jsx)("em",{children:"(RateUpdateInput)"})]})}),(0,l.jsx)(n.p,{children:"Rates input data. See RateUpdate."}),(0,l.jsxs)(s,{style:{pointerEvents:"none"},children:[(0,l.jsx)("summary",{children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)("strong",{children:"code"}),"\xa0",(0,l.jsx)("span",{class:"required",children:" *"}),"\xa0 ",(0,l.jsx)("em",{children:"(String)"})]})}),(0,l.jsx)(n.p,{children:"Code associated with the rate."})]}),(0,l.jsxs)(s,{style:{pointerEvents:"none"},children:[(0,l.jsxs)("summary",{children:[(0,l.jsx)("strong",{children:"baseRateCode"}),(0,l.jsx)("em",{children:"(String)"})]}),(0,l.jsx)(n.p,{children:"Base rate code of the rate."})]}),(0,l.jsxs)(s,{style:{pointerEvents:"none"},children:[(0,l.jsxs)("summary",{children:[(0,l.jsx)("strong",{children:"name"}),(0,l.jsx)("em",{children:"(String)"})]}),(0,l.jsx)(n.p,{children:"Name of the rate."})]}),(0,l.jsxs)(s,{style:{pointerEvents:"none"},children:[(0,l.jsxs)("summary",{children:[(0,l.jsx)("strong",{children:"active"}),(0,l.jsx)("em",{children:"(Boolean)"})]}),(0,l.jsx)(n.p,{children:"Indicates whether the rate is active."})]}),(0,l.jsxs)(s,{style:{pointerEvents:"none"},children:[(0,l.jsxs)("summary",{children:[(0,l.jsx)("strong",{children:"mealPlanIncluded"}),(0,l.jsx)("em",{children:"(Int)"})]}),(0,l.jsx)(n.p,{children:"Meal plan included in the rate."})]}),(0,l.jsxs)(s,{children:[(0,l.jsxs)("summary",{children:[(0,l.jsx)("strong",{children:"agePolicies"}),(0,l.jsx)("em",{children:"(AgePoliciesUpdateInput)"})]}),(0,l.jsx)(n.p,{children:"Age policies associated with the rate. See AgePoliciesUpdate."}),(0,l.jsxs)(s,{style:{pointerEvents:"none"},children:[(0,l.jsxs)("summary",{children:[(0,l.jsx)("strong",{children:"maxAgeInfants"}),(0,l.jsx)("em",{children:"(Int)"})]}),(0,l.jsx)(n.p,{children:"Maximum age for a baby, not inclusive."})]}),(0,l.jsxs)(s,{style:{pointerEvents:"none"},children:[(0,l.jsxs)("summary",{children:[(0,l.jsx)("strong",{children:"freeInfants"}),(0,l.jsx)("em",{children:"(Boolean)"})]}),(0,l.jsx)(n.p,{children:"If true, babies are free of charge."})]}),(0,l.jsxs)(s,{style:{pointerEvents:"none"},children:[(0,l.jsxs)("summary",{children:[(0,l.jsx)("strong",{children:"maxAgeChildren"}),(0,l.jsx)("em",{children:"(Int)"})]}),(0,l.jsx)(n.p,{children:"Maximum age for a child, not inclusive."})]}),(0,l.jsxs)(s,{style:{pointerEvents:"none"},children:[(0,l.jsxs)("summary",{children:[(0,l.jsx)("strong",{children:"freeChildren"}),(0,l.jsx)("em",{children:"(Boolean)"})]}),(0,l.jsx)(n.p,{children:"If true, children are free of charge."})]})]}),(0,l.jsxs)(s,{children:[(0,l.jsxs)("summary",{children:[(0,l.jsx)("strong",{children:"paymentPolicies"}),(0,l.jsx)("em",{children:"(PaymentPoliciesUpdateInput)"})]}),(0,l.jsx)(n.p,{children:"Payment policies associated with the rate. See PaymentPoliciesUpdate."}),(0,l.jsxs)(s,{style:{pointerEvents:"none"},children:[(0,l.jsxs)("summary",{children:[(0,l.jsx)("strong",{children:"currency"}),(0,l.jsx)("em",{children:"(Currency)"})]}),(0,l.jsx)(n.p,{children:"Currency of the payment. See Currency."})]}),(0,l.jsxs)(s,{style:{pointerEvents:"none"},children:[(0,l.jsxs)("summary",{children:[(0,l.jsx)("strong",{children:"commission"}),(0,l.jsx)("em",{children:"(Float)"})]}),(0,l.jsx)(n.p,{children:"Commission applied for all rooms in this rate, leave value 0 for net price. Only Informative."})]}),(0,l.jsxs)(s,{style:{pointerEvents:"none"},children:[(0,l.jsxs)("summary",{children:[(0,l.jsx)("strong",{children:"priceIsBinding"}),(0,l.jsx)("em",{children:"(Boolean)"})]}),(0,l.jsx)(n.p,{children:"Informs if the prices are binding price. Only Informative."})]}),(0,l.jsxs)(s,{children:[(0,l.jsxs)("summary",{children:[(0,l.jsx)("strong",{children:"acceptedPayments"}),(0,l.jsx)("em",{children:"(AcceptedPaymentInput)"})]}),(0,l.jsx)(n.p,{children:"Rate Accepted Payments, if not informed it is MerchantPay. See AcceptedPayment."}),(0,l.jsxs)(s,{open:!0,children:[(0,l.jsx)("summary",{children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)("strong",{children:"type"}),"\xa0",(0,l.jsx)("span",{class:"required",children:" *"}),"\xa0 ",(0,l.jsx)("em",{children:"(PaymentType)"})]})}),(0,l.jsx)("strong",{children:"Possible values:"}),(0,l.jsxs)("ul",{children:[(0,l.jsxs)("li",{children:[(0,l.jsx)("code",{children:"MERCHANT"}),": Payment is managed by the supplier."]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("code",{children:"DIRECT"}),": Payment is made directly to the actual payee (e.g., the hotel), without involving an intermediary or third party. The payment will be completed at check-in."]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("code",{children:"CARD_BOOKING"}),": Payment is managed by the supplier. The payment is effectuated at the time of booking."]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("code",{children:"CARD_CHECK_IN"}),": Payment is managed by the supplier and is made at the hotel during check-in."]})]})]}),(0,l.jsxs)(s,{open:!0,children:[(0,l.jsxs)("summary",{children:[(0,l.jsx)("strong",{children:"cardTypes"}),(0,l.jsx)("em",{children:"(PaymentCardType)"})]}),(0,l.jsx)("strong",{children:"Possible values:"}),(0,l.jsxs)("ul",{children:[(0,l.jsxs)("li",{children:[(0,l.jsx)("code",{children:"VI"}),": Visa"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("code",{children:"AX"}),": American Express"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("code",{children:"BC"}),": BC Card"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("code",{children:"CA"}),": MasterCard"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("code",{children:"CB"}),": Carte Blanche"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("code",{children:"CU"}),": China Union Pay"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("code",{children:"DS"}),": Discover"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("code",{children:"DC"}),": Diners Club"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("code",{children:"T"}),": Carta Si"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("code",{children:"R"}),": Carte Bleue"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("code",{children:"N"}),": Dankort"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("code",{children:"L"}),": Delta"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("code",{children:"E"}),": Electron"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("code",{children:"JC"}),": Japan Credit Bureau"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("code",{children:"TO"}),": Maestro"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("code",{children:"S"}),": Switch"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("code",{children:"EC"}),": Electronic Cash"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("code",{children:"EU"}),": EuroCard"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("code",{children:"TP"}),": universal air travel card"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("code",{children:"OP"}),": optima"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("code",{children:"ER"}),": Air Canada/RnRoute"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("code",{children:"XS"}),": access"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("code",{children:"O"}),": others"]})]})]})]})]}),(0,l.jsxs)(s,{children:[(0,l.jsxs)("summary",{children:[(0,l.jsx)("strong",{children:"bookingRules"}),(0,l.jsx)("em",{children:"(InventoryBookingRulesInput)"})]}),(0,l.jsx)(n.p,{children:"Booking rules associated with the rate. See BookingRules."}),(0,l.jsxs)(s,{children:[(0,l.jsxs)("summary",{children:[(0,l.jsx)("strong",{children:"bookingWindow"}),(0,l.jsx)("em",{children:"(InventoryBookingWindowInput)"})]}),(0,l.jsx)(n.p,{children:"Booking Dates for which the rate will be available. Do not send it if you want the rate available for all dates."}),(0,l.jsxs)(s,{style:{pointerEvents:"none"},children:[(0,l.jsx)("summary",{children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)("strong",{children:"start"}),"\xa0",(0,l.jsx)("span",{class:"required",children:" *"}),"\xa0 ",(0,l.jsx)("em",{children:"(DateTime)"})]})}),(0,l.jsx)(n.p,{children:"Start date of the booking window."})]}),(0,l.jsxs)(s,{style:{pointerEvents:"none"},children:[(0,l.jsx)("summary",{children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)("strong",{children:"end"}),"\xa0",(0,l.jsx)("span",{class:"required",children:" *"}),"\xa0 ",(0,l.jsx)("em",{children:"(DateTime)"})]})}),(0,l.jsx)(n.p,{children:"End date of the booking window."})]})]}),(0,l.jsxs)(s,{children:[(0,l.jsxs)("summary",{children:[(0,l.jsx)("strong",{children:"markets"}),(0,l.jsx)("em",{children:"(InventoryMarketsInput)"})]}),(0,l.jsx)(n.p,{children:"Markets included or excluded. Do not send if the rate is available for all markets. Only informative."}),(0,l.jsxs)(s,{style:{pointerEvents:"none"},children:[(0,l.jsxs)("summary",{children:[(0,l.jsx)("strong",{children:"included"}),(0,l.jsx)("em",{children:"(String)"})]}),(0,l.jsx)(n.p,{children:"Included markets."})]}),(0,l.jsxs)(s,{style:{pointerEvents:"none"},children:[(0,l.jsxs)("summary",{children:[(0,l.jsx)("strong",{children:"excluded"}),(0,l.jsx)("em",{children:"(String)"})]}),(0,l.jsx)(n.p,{children:"Excluded markets."})]})]}),(0,l.jsxs)(s,{open:!0,children:[(0,l.jsxs)("summary",{children:[(0,l.jsx)("strong",{children:"rateRule"}),(0,l.jsx)("em",{children:"(RatePlanType)"})]}),(0,l.jsxs)(n.p,{children:['"NoRatePlanType" indicates absence of a specific rate plan. "LargeFamily" and "PublicServant" denote rates tailored for those groups. "Negotiated" and "Package" signify negotiated rates and package deals, respectively. "CanaryResident" and "BalearicResident" are special rates for residents of the Canary Islands and the Balearic Islands, respectively. Lastly, "HoneyMoon" designates rates intended for honeymooners or couples celebrating their honeymoon.\n',(0,l.jsx)("strong",{children:"Possible values:"})]}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)("code",{children:"NO_RATE_PLAN_TYPE"})}),(0,l.jsx)("li",{children:(0,l.jsx)("code",{children:"LARGE_FAMILY"})}),(0,l.jsx)("li",{children:(0,l.jsx)("code",{children:"PUBLIC_SERVANT"})}),(0,l.jsx)("li",{children:(0,l.jsx)("code",{children:"NEGOTIATED"})}),(0,l.jsx)("li",{children:(0,l.jsx)("code",{children:"PACKAGE"})}),(0,l.jsx)("li",{children:(0,l.jsx)("code",{children:"CANARY_RESIDENT"})}),(0,l.jsx)("li",{children:(0,l.jsx)("code",{children:"BALEARIC_RESIDENT"})}),(0,l.jsx)("li",{children:(0,l.jsx)("code",{children:"HONEY_MOON"})})]})]}),(0,l.jsxs)(s,{open:!0,children:[(0,l.jsxs)("summary",{children:[(0,l.jsx)("strong",{children:"seniorRule"}),(0,l.jsx)("em",{children:"(SeniorRate)"})]}),(0,l.jsxs)(n.p,{children:['"NoSeniorRate" indicates the absence of a senior rate. "SeniorRate_55", "SeniorRate_60", and "SeniorRate_65" denote rates applicable to individuals aged 55, 60, and 65, respectively. These rates are typically offered to seniors as a special discount or incentive.\n',(0,l.jsx)("strong",{children:"Possible values:"})]}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)("code",{children:"NO_SENIOR_RATE"})}),(0,l.jsx)("li",{children:(0,l.jsx)("code",{children:"SENIOR_RATE_55"})}),(0,l.jsx)("li",{children:(0,l.jsx)("code",{children:"SENIOR_RATE_60"})}),(0,l.jsx)("li",{children:(0,l.jsx)("code",{children:"SENIOR_RATE_65"})})]})]})]}),(0,l.jsxs)(s,{children:[(0,l.jsxs)("summary",{children:[(0,l.jsx)("strong",{children:"cancelPolicies"}),(0,l.jsx)("em",{children:"(CancelPoliciesUpdateInput)"})]}),(0,l.jsx)(n.p,{children:"Cancel policies associated with the rate. See CancelPoliciesUpdate."}),(0,l.jsxs)(s,{children:[(0,l.jsxs)("summary",{children:[(0,l.jsx)("strong",{children:"baseCancelPolicy"}),(0,l.jsx)("em",{children:"(InventoryCancelPolicyInput)"})]}),(0,l.jsx)(n.p,{children:"Defines the base cancel policies. Only Informative. See CancelPolicy."}),(0,l.jsxs)(s,{style:{pointerEvents:"none"},children:[(0,l.jsx)("summary",{children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)("strong",{children:"refundable"}),"\xa0",(0,l.jsx)("span",{class:"required",children:" *"}),"\xa0 ",(0,l.jsx)("em",{children:"(Boolean)"})]})}),(0,l.jsx)(n.p,{children:"Indicates if the rate is refundable."})]}),(0,l.jsxs)(s,{children:[(0,l.jsxs)("summary",{children:[(0,l.jsx)("strong",{children:"cancelPenalties"}),(0,l.jsx)("em",{children:"(InventoryCancelPenaltyInput)"})]}),(0,l.jsx)(n.p,{children:"List of penalties applicable for the rate. See CancelPenalty."}),(0,l.jsxs)(s,{style:{pointerEvents:"none"},children:[(0,l.jsx)("summary",{children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)("strong",{children:"daysBeforeArrival"}),"\xa0",(0,l.jsx)("span",{class:"required",children:" *"}),"\xa0 ",(0,l.jsx)("em",{children:"(Int)"})]})}),(0,l.jsx)(n.p,{children:"Number of days prior to arrival day in which this Cancellation policy applies."})]}),(0,l.jsxs)(s,{open:!0,children:[(0,l.jsx)("summary",{children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)("strong",{children:"penaltyType"}),"\xa0",(0,l.jsx)("span",{class:"required",children:" *"}),"\xa0 ",(0,l.jsx)("em",{children:"(PenaltyType)"})]})}),(0,l.jsxs)(n.p,{children:["Penalty type. See PenaltyType.\n",(0,l.jsx)("strong",{children:"Possible values:"})]}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)("code",{children:"AMOUNT"})}),(0,l.jsx)("li",{children:(0,l.jsx)("code",{children:"NIGHTS"})}),(0,l.jsx)("li",{children:(0,l.jsx)("code",{children:"PERCENTAGE"})})]})]}),(0,l.jsxs)(s,{style:{pointerEvents:"none"},children:[(0,l.jsx)("summary",{children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)("strong",{children:"value"}),"\xa0",(0,l.jsx)("span",{class:"required",children:" *"}),"\xa0 ",(0,l.jsx)("em",{children:"(Float)"})]})}),(0,l.jsx)(n.p,{children:"Penalty value."})]})]})]}),(0,l.jsxs)(s,{children:[(0,l.jsxs)("summary",{children:[(0,l.jsx)("strong",{children:"cancelPoliciesByDate"}),(0,l.jsx)("em",{children:"(InventoryCancelPolicyByDateInput)"})]}),(0,l.jsx)(n.p,{children:"Defines a calendar of cancel policies. Only Informative. See CancelPolicyByDate."}),(0,l.jsxs)(s,{style:{pointerEvents:"none"},children:[(0,l.jsx)("summary",{children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)("strong",{children:"start"}),"\xa0",(0,l.jsx)("span",{class:"required",children:" *"}),"\xa0 ",(0,l.jsx)("em",{children:"(DateTime)"})]})}),(0,l.jsx)(n.p,{children:"Start date where the cancel policy must apply."})]}),(0,l.jsxs)(s,{style:{pointerEvents:"none"},children:[(0,l.jsx)("summary",{children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)("strong",{children:"end"}),"\xa0",(0,l.jsx)("span",{class:"required",children:" *"}),"\xa0 ",(0,l.jsx)("em",{children:"(DateTime)"})]})}),(0,l.jsx)(n.p,{children:"End date where the cancel policy must apply."})]}),(0,l.jsxs)(s,{children:[(0,l.jsx)("summary",{children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)("strong",{children:"cancelPolicy"}),"\xa0",(0,l.jsx)("span",{class:"required",children:" *"}),"\xa0 ",(0,l.jsx)("em",{children:"(InventoryCancelPolicyInput)"})]})}),(0,l.jsx)(n.p,{children:"Cancel policy. See CancelPolicy."}),(0,l.jsxs)(s,{style:{pointerEvents:"none"},children:[(0,l.jsx)("summary",{children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)("strong",{children:"refundable"}),"\xa0",(0,l.jsx)("span",{class:"required",children:" *"}),"\xa0 ",(0,l.jsx)("em",{children:"(Boolean)"})]})}),(0,l.jsx)(n.p,{children:"Indicates if the rate is refundable."})]}),(0,l.jsxs)(s,{children:[(0,l.jsxs)("summary",{children:[(0,l.jsx)("strong",{children:"cancelPenalties"}),(0,l.jsx)("em",{children:"(InventoryCancelPenaltyInput)"})]}),(0,l.jsx)(n.p,{children:"List of penalties applicable for the rate. See CancelPenalty."}),(0,l.jsxs)(s,{style:{pointerEvents:"none"},children:[(0,l.jsx)("summary",{children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)("strong",{children:"daysBeforeArrival"}),"\xa0",(0,l.jsx)("span",{class:"required",children:" *"}),"\xa0 ",(0,l.jsx)("em",{children:"(Int)"})]})}),(0,l.jsx)(n.p,{children:"Number of days prior to arrival day in which this Cancellation policy applies."})]}),(0,l.jsxs)(s,{open:!0,children:[(0,l.jsx)("summary",{children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)("strong",{children:"penaltyType"}),"\xa0",(0,l.jsx)("span",{class:"required",children:" *"}),"\xa0 ",(0,l.jsx)("em",{children:"(PenaltyType)"})]})}),(0,l.jsxs)(n.p,{children:["Penalty type. See PenaltyType.\n",(0,l.jsx)("strong",{children:"Possible values:"})]}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)("code",{children:"AMOUNT"})}),(0,l.jsx)("li",{children:(0,l.jsx)("code",{children:"NIGHTS"})}),(0,l.jsx)("li",{children:(0,l.jsx)("code",{children:"PERCENTAGE"})})]})]}),(0,l.jsxs)(s,{style:{pointerEvents:"none"},children:[(0,l.jsx)("summary",{children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)("strong",{children:"value"}),"\xa0",(0,l.jsx)("span",{class:"required",children:" *"}),"\xa0 ",(0,l.jsx)("em",{children:"(Float)"})]})}),(0,l.jsx)(n.p,{children:"Penalty value."})]})]})]})]})]}),(0,l.jsxs)(s,{children:[(0,l.jsxs)("summary",{children:[(0,l.jsx)("strong",{children:"amendPolicy"}),(0,l.jsx)("em",{children:"(AmendPolicyUpdateInput)"})]}),(0,l.jsx)(n.p,{children:"Amend policy associated with the rate. See AmendPolicyUpdate."}),(0,l.jsxs)(s,{style:{pointerEvents:"none"},children:[(0,l.jsxs)("summary",{children:[(0,l.jsx)("strong",{children:"isAmendable"}),(0,l.jsx)("em",{children:"(Boolean)"})]}),(0,l.jsx)(n.p,{children:"Indicates whether the policy is amendable."})]}),(0,l.jsxs)(s,{children:[(0,l.jsxs)("summary",{children:[(0,l.jsx)("strong",{children:"amendPenalties"}),(0,l.jsx)("em",{children:"(AmendPenaltyInput)"})]}),(0,l.jsx)(n.p,{children:"List of amend penalties associated with the policy. See AmendPenalty."}),(0,l.jsxs)(s,{style:{pointerEvents:"none"},children:[(0,l.jsx)("summary",{children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)("strong",{children:"daysBeforeArrival"}),"\xa0",(0,l.jsx)("span",{class:"required",children:" *"}),"\xa0 ",(0,l.jsx)("em",{children:"(Int)"})]})}),(0,l.jsx)(n.p,{children:"Number of days before arrival."})]}),(0,l.jsxs)(s,{open:!0,children:[(0,l.jsx)("summary",{children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)("strong",{children:"penaltyType"}),"\xa0",(0,l.jsx)("span",{class:"required",children:" *"}),"\xa0 ",(0,l.jsx)("em",{children:"(PenaltyType)"})]})}),(0,l.jsxs)(n.p,{children:["Type of penalty.\nPenaltyType\n",(0,l.jsx)("strong",{children:"Possible values:"})]}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)("code",{children:"AMOUNT"})}),(0,l.jsx)("li",{children:(0,l.jsx)("code",{children:"NIGHTS"})}),(0,l.jsx)("li",{children:(0,l.jsx)("code",{children:"PERCENTAGE"})})]})]}),(0,l.jsxs)(s,{style:{pointerEvents:"none"},children:[(0,l.jsx)("summary",{children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)("strong",{children:"value"}),"\xa0",(0,l.jsx)("span",{class:"required",children:" *"}),"\xa0 ",(0,l.jsx)("em",{children:"(Float)"})]})}),(0,l.jsx)(n.p,{children:"Value of the penalty."})]})]})]}),(0,l.jsxs)(s,{children:[(0,l.jsxs)("summary",{children:[(0,l.jsx)("strong",{children:"surcharges"}),(0,l.jsx)("em",{children:"(InventorySurchargeInput)"})]}),(0,l.jsx)(n.p,{children:"List of surcharges associated with the rate. See Surcharge."}),(0,l.jsxs)(s,{open:!0,children:[(0,l.jsx)("summary",{children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)("strong",{children:"chargeType"}),"\xa0",(0,l.jsx)("span",{class:"required",children:" *"}),"\xa0 ",(0,l.jsx)("em",{children:"(InventoryChargeType)"})]})}),(0,l.jsxs)(n.p,{children:["Indicates if the surcharge is included or not in the price.\n",(0,l.jsx)("strong",{children:"Possible values:"})]}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)("code",{children:"INCLUDED"})}),(0,l.jsx)("li",{children:(0,l.jsx)("code",{children:"EXCLUDED"})})]})]}),(0,l.jsxs)(s,{open:!0,children:[(0,l.jsx)("summary",{children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)("strong",{children:"taxType"}),"\xa0",(0,l.jsx)("span",{class:"required",children:" *"}),"\xa0 ",(0,l.jsx)("em",{children:"(InventoryTaxType)"})]})}),(0,l.jsxs)(n.p,{children:["The type of tax applied to the surcharge.\n",(0,l.jsx)("strong",{children:"Possible values:"})]}),(0,l.jsxs)("ul",{children:[(0,l.jsxs)("li",{children:[(0,l.jsx)("code",{children:"CITY"}),": The tax is a city tax."]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("code",{children:"LOCAL"}),": The tax is a local tax."]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("code",{children:"RESORT_FEE"}),": The tax is a resort fee."]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("code",{children:"SUPPLEMENT_TO_BE_PAID_ON_SPOT"}),": The tax is a supplement to be paid on spot."]})]})]}),(0,l.jsxs)(s,{style:{pointerEvents:"none"},children:[(0,l.jsx)("summary",{children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)("strong",{children:"value"}),"\xa0",(0,l.jsx)("span",{class:"required",children:" *"}),"\xa0 ",(0,l.jsx)("em",{children:"(Float)"})]})}),(0,l.jsx)(n.p,{children:"The value of the surcharge."})]}),(0,l.jsxs)(s,{open:!0,children:[(0,l.jsx)("summary",{children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)("strong",{children:"applyType"}),"\xa0",(0,l.jsx)("span",{class:"required",children:" *"}),"\xa0 ",(0,l.jsx)("em",{children:"(InventoryApplyType)"})]})}),(0,l.jsxs)(n.p,{children:["The type of application for the surcharge.\n",(0,l.jsx)("strong",{children:"Possible values:"})]}),(0,l.jsxs)("ul",{children:[(0,l.jsxs)("li",{children:[(0,l.jsx)("code",{children:"PERCENTAGE"}),": The rate is applied as a percentage."]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("code",{children:"AMOUNT"}),": The rate is applied as an amount."]})]})]}),(0,l.jsxs)(s,{style:{pointerEvents:"none"},children:[(0,l.jsx)("summary",{children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)("strong",{children:"perNight"}),"\xa0",(0,l.jsx)("span",{class:"required",children:" *"}),"\xa0 ",(0,l.jsx)("em",{children:"(Boolean)"})]})}),(0,l.jsx)(n.p,{children:"Indicates whether the surcharge is applied per night."})]}),(0,l.jsxs)(s,{style:{pointerEvents:"none"},children:[(0,l.jsx)("summary",{children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)("strong",{children:"perPax"}),"\xa0",(0,l.jsx)("span",{class:"required",children:" *"}),"\xa0 ",(0,l.jsx)("em",{children:"(Boolean)"})]})}),(0,l.jsx)(n.p,{children:"Indicates whether the surcharge is applied per person."})]})]})]}),(0,l.jsxs)(s,{style:{pointerEvents:"none"},children:[(0,l.jsx)("summary",{children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)("strong",{children:"hotelCode"}),"\xa0",(0,l.jsx)("span",{class:"required",children:" *"}),"\xa0 ",(0,l.jsx)("em",{children:"(String)"})]})}),(0,l.jsx)(n.p,{children:"Code associated with the hotel."})]}),(0,l.jsxs)(s,{style:{pointerEvents:"none"},children:[(0,l.jsxs)("summary",{children:[(0,l.jsx)("strong",{children:"contextCode"}),(0,l.jsx)("em",{children:"(String)"})]}),(0,l.jsx)(n.p,{children:"Context code."})]})]})}function d(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}var t=s(22993);let a={sidebar_position:2},h="Update Rates",o={},x=[{value:"Mutation Overview",id:"mutation-overview",level:2},{value:"1. Criteria",id:"1-criteria",level:3},{value:"Mandatory Input",id:"mandatory-input",level:4},{value:"Optional Input",id:"optional-input",level:4},{value:"2. Settings",id:"2-settings",level:3},{value:"Response Considerations",id:"response-considerations",level:3},{value:"<code>RatesSetUpRs</code> (<em>OBJECT</em>)",id:"ratessetuprs-object",level:4},{value:"Mutation Inputs",id:"mutation-inputs",level:2},{value:"Examples",id:"examples",level:2},{value:"Update properties from a rate",id:"update-properties-from-a-rate",level:4}];function j(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{GraphqlSample:s}=n;return s||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("GraphqlSample",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"update-rates",children:"Update Rates"})}),"\n",(0,l.jsx)(n.h2,{id:"mutation-overview",children:"Mutation Overview"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"updateRatesSetUp"})," mutation allows you to update any property of an already added rate to a hotel in a specific client-seller relation in Inventory. The returned fields include:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"code"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"name"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"hotelCode"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"active"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"mealPlanIncluded"})}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"agePolicies"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"maxAgeChildren"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"maxAgeInfants"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"freeInfants"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"freeChildren"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"paymentPolicies"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"currency"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"commission"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"priceIsBinding"})}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"acceptedPayments"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"type"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"cardTypes"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"bookingRules"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"bookingWindow"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"start"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"end"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"markets"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"included"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"excluded"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"rateRule"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"seniorRule"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"cancelPolicies"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"baseCancelPolicy"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"refundable"})}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"cancelPenalties"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"daysBeforeArrival"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"penaltyType"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"value"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"cancelPoliciesByDate"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"start"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"end"})}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"cancelPolicy"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"refundable"})}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"cancelPenalties"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"daysBeforeArrival"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"penaltyType"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"value"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"surcharges"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"chargeType"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"taxType"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"value"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"applyType"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"perNight"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"perPax"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"1-criteria",children:"1. Criteria"}),"\n",(0,l.jsx)(n.p,{children:"When building your mutation, you need to provide the following input fields:"}),"\n",(0,l.jsx)(n.h4,{id:"mandatory-input",children:"Mandatory Input"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"clientCode"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"supplierCode"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"hotelCode"})}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"rates"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"code"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"optional-input",children:"Optional Input"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"contextCode"})}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"rates"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"name"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"hotelCode"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"active"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"mealPlanIncluded"})}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"agePolicies"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"maxAgeChildren"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"maxAgeInfants"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"freeInfants"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"freeChildren"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"paymentPolicies"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"currency"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"commission"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"priceIsBinding"})}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"acceptedPayments"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"type"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"cardTypes"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"bookingRules"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"bookingWindow"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"start"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"end"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"markets"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"included"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"excluded"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"rateRule"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"seniorRule"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"cancelPolicies"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"baseCancelPolicy"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"refundable"})}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"cancelPenalties"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"daysBeforeArrival"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"penaltyType"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"value"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"cancelPoliciesByDate"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"start"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"end"})}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"cancelPolicy"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"refundable"})}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"cancelPenalties"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"daysBeforeArrival"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"penaltyType"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"value"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"surcharges"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"chargeType"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"taxType"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"value"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"applyType"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"perNight"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"perPax"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"2-settings",children:"2. Settings"}),"\n",(0,l.jsx)(n.p,{children:"To update a rate, ensure that all mandatory fields are properly filled out and associate the rate with the correct hotel and seller."}),"\n",(0,l.jsx)(n.h3,{id:"response-considerations",children:"Response Considerations"}),"\n",(0,l.jsx)(n.p,{children:"The mutation returns the updated rate along with success status and possible advise messages."}),"\n",(0,l.jsxs)(n.h4,{id:"ratessetuprs-object",children:[(0,l.jsx)(n.code,{children:"RatesSetUpRs"})," (",(0,l.jsx)(n.em,{children:"OBJECT"}),")"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"rates"})," (",(0,l.jsx)(n.em,{children:"InventoryRateSetup"}),") - A collection of updated rates.","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"code"})," (",(0,l.jsx)(n.em,{children:"String"}),") - The rate code.",(0,l.jsx)(n.br,{}),"\n","Allowed characters: Only letters ",(0,l.jsx)(n.strong,{children:"(a\u2013z, A\u2013Z)"}),", numbers ",(0,l.jsx)(n.strong,{children:"(0\u20139)"}),", ",(0,l.jsx)(n.strong,{children:"spaces"}),", and the following symbols: ",(0,l.jsx)(n.strong,{children:"(-, _, %, /, (, ), +, *, and uppercase M)"}),". Any other characters will be rejected."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"name"})," (",(0,l.jsx)(n.em,{children:"String"}),") - The name of the rate."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"active"})," (",(0,l.jsx)(n.em,{children:"Boolean"}),") - Indicates if the rate is active."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"mealPlanIncluded"})," (",(0,l.jsx)(n.em,{children:"Int"}),") - Indicates if a meal plan is included."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"paymentPolicies"})," (",(0,l.jsx)(n.em,{children:"InventoryPaymentPolicies"}),") - Payment policies associated with the rate."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"bookingRules"})," (",(0,l.jsx)(n.em,{children:"InventoryBookingRules"}),") - Booking rules associated with the rate."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"cancelPolicies"})," (",(0,l.jsx)(n.em,{children:"InventoryCancelPoliciesRate"}),") - Cancellation policies associated with the rate."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"surcharges"})," (",(0,l.jsx)(n.em,{children:"InventorySurcharge"}),") - Surcharges associated with the rate."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"rooms"})," (",(0,l.jsx)(n.em,{children:"InventoryRoomSetUp"}),") - Rooms associated with the rate."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"success"})," (",(0,l.jsx)(n.em,{children:"Boolean"}),") - Indicates if the operation was successful."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"adviseMessages"})," (",(0,l.jsx)(n.em,{children:"AdviseMessage"}),") - Messages related to the operation."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"mutation-inputs",children:"Mutation Inputs"}),"\n",(0,l.jsx)(d,{}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.h4,{id:"update-properties-from-a-rate",children:"Update properties from a rate"}),"\n",(0,l.jsx)(n.p,{children:"With the following mutation, we are going to update the meal plan included in a rate and its cancel policies."}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsxs)(n.p,{children:["The possible values for ",(0,l.jsx)(n.code,{children:"mealPlanIncluded"})," can be retrieved using the query ",(0,l.jsx)(n.a,{href:"../../static-data/mealplans",children:"Mealplans"}),"."]})}),"\n",(0,l.jsx)(s,{query:t.VZ,variables:t.hk})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(j,{...e})}):j(e)}},22993:function(e,n,s){s.d(n,{BT:()=>c,Lr:()=>d,VZ:()=>i,fF:()=>t,hk:()=>l,nv:()=>r});let i=`mutation ($input: InventoryRateSetupUpdateInput!) {
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
}`,l=`{
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
}`,r=`mutation ($input: InventoryRatesSetupCreateInput!) {
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
}`},50065:function(e,n,s){s.d(n,{Z:()=>d,a:()=>c});var i=s(67294);let l={},r=i.createContext(l);function c(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);
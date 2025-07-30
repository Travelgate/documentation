"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["1498"],{77558:function(e,n,i){i.r(n),i.d(n,{frontMatter:()=>a,toc:()=>u,default:()=>j,metadata:()=>s,assets:()=>m,contentTitle:()=>h});var s=JSON.parse('{"id":"apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amend-remarks","title":"Amend Remarks","description":"The Amend Dates operation enables you to change the booking\'s remarks. To make a modification to your booking accurately, you should begin by executing the \'quote amend\' query to confirm the feasibility of the change and its associated price. After obtaining this information, you can proceed to implement the amendment using the \'commit\' mutation, which will finalize the modification in the Seller\'s system.","source":"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amend-remarks.mdx","sourceDirName":"apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments","slug":"/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amend-remarks","permalink":"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amend-remarks","draft":false,"unlisted":false,"editUrl":"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amend-remarks.mdx","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"docsSidebar","previous":{"title":"Amend Paxes","permalink":"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amend-paxes"},"next":{"title":"Overview","permalink":"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/overview"}}'),t=i(85893),o=i(50065);let r=`query (
	$criteria: HotelCriteriaAmendRemarksQuoteInput!
	$settings: HotelSettingsInput!
) {
	hotelX {
		quoteRemarksAmendment(criteria: $criteria, settings: $settings) {
			amendFee {
				currency
				binding
				net
				gross
				exchange {
					currency
					rate
				}
			}
			amendedBookingDetail {
				status
				reference {
					client
					supplier
					hotel
					bookingID
					amendmentID
				}
				holder {
					title
					name
					surname
					contactInfo {
						email
					}
				}
				price {
					currency
					binding
					net
					gross
					exchange {
						currency
						rate
					}
				}
			}
			adviseMessage {
				code
				description
			}
		}
	}
}`,l=`{
	"criteria": {
		"bookingID": "n1@1[241128[241129[240516[1[es[EUR[2[test_09052024_test[3128791[",
		"remarks": "Non-smoking room, Connecting rooms"
	},
	"settings": {
		"context": "HOTELTEST",
		"client": "client_demo",
		"auditTransactions": true,
		"timeout": 60000,
		"testMode": true
	}
}`,d=`mutation (
	$data: HotelCriteriaAmendRemarksCommitInput!
	$settings: HotelSettingsInput!
) {
	hotelX {
		amendRemarks(data: $data, settings: $settings) {
			amendFee {
				currency
				binding
				net
				gross
				exchange {
					currency
					rate
				}
			}
			amendedBookingDetail {
				status
				reference {
					client
					supplier
					hotel
					bookingID
					amendmentID
				}
				holder {
					title
					name
					surname
					contactInfo {
						email
					}
				}
				price {
					currency
					binding
					net
					gross
					exchange {
						currency
						rate
					}
				}
			}
			adviseMessage {
				code
				description
			}
		}
	}
}`,c=`{
	"data": {
		"amendmentID": "xxx"
	},
	"settings": {
		"context": "HOTELTEST",
		"client": "client_demo",
		"auditTransactions": true,
		"timeout": 60000,
		"testMode": true
	}
}`,a={sidebar_position:6},h="Amend Remarks",m={},u=[{value:"Quote Amend Remarks",id:"quote-amend-remarks",level:2},{value:"Inputs",id:"inputs",level:3},{value:"1. Criteria",id:"1-criteria",level:3},{value:"2. Settings",id:"2-settings",level:3},{value:"Requests Examples",id:"requests-examples",level:3},{value:"Remarks amendment quote with the <code>bookingID</code> from the book response",id:"remarks-amendment-quote-with-the-bookingid-from-the-book-response",level:4},{value:"Commit Amend Remarks",id:"commit-amend-remarks",level:2},{value:"Inputs",id:"inputs-1",level:3},{value:"1. Data",id:"1-data",level:3},{value:"2. Settings",id:"2-settings-1",level:3},{value:"Requests Examples",id:"requests-examples-1",level:3}];function x(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{CautionSettingsHotelX:i,GraphqlSample:s}=n;return i||p("CautionSettingsHotelX",!0),s||p("GraphqlSample",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"amend-remarks",children:"Amend Remarks"})}),"\n",(0,t.jsx)(n.p,{children:"The Amend Dates operation enables you to change the booking's remarks. To make a modification to your booking accurately, you should begin by executing the 'quote amend' query to confirm the feasibility of the change and its associated price. After obtaining this information, you can proceed to implement the amendment using the 'commit' mutation, which will finalize the modification in the Seller's system."}),"\n",(0,t.jsx)(n.h2,{id:"quote-amend-remarks",children:"Quote Amend Remarks"}),"\n",(0,t.jsx)(n.p,{children:"The quote amend query simulates the amendment to confirm the price of the booking modification. The returned fields include:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"amendFee"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"amendedBookingDetail"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"reference"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"holder"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"hotel"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"price"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"quotePrice"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"cancelPolicy"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"remarks"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"status"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"inputs",children:"Inputs"}),"\n",(0,t.jsx)(n.p,{children:"When creating your quote amend query, you have two different inputs to fill based on your specific needs:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Criteria"}),"\n",(0,t.jsx)(n.li,{children:"Settings"}),"\n"]}),"\n",(0,t.jsx)(i,{}),"\n",(0,t.jsx)(n.h3,{id:"1-criteria",children:"1. Criteria"}),"\n",(0,t.jsxs)(n.p,{children:["You can perform the ",(0,t.jsx)(n.code,{children:"query"})," (simulation) of the amendment sending all the booking information (",(0,t.jsx)(n.code,{children:"reference"}),", ",(0,t.jsx)(n.code,{children:"dates"}),", ",(0,t.jsx)(n.code,{children:"hotelcode"}),") or sending the ",(0,t.jsx)(n.code,{children:"bookingID"})," got in the booking flow:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Booking information:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"accessCode"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"language"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"hotelCode"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"reference"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"dates"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"BookingID got in the booking flow:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"bookingID"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["You can decide between the two options either by booking information or directly by ",(0,t.jsx)(n.code,{children:"bookingID"}),", empowering you with the choice that suits you best."]}),"\n",(0,t.jsxs)(n.p,{children:["Additionally you'll need to indicate the new remark you want to include in your reservation with the ",(0,t.jsx)(n.code,{children:"remarks"})," input. For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'{\n    "criteria" : {\n        "bookingID" : "n1@1[241128[241129[240516[1[es[EUR[2[test_09052024_test[3128791[",\n        "remarks" : "Non-smoking room, Connecting rooms"\n    }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"2-settings",children:"2. Settings"}),"\n",(0,t.jsx)(n.p,{children:"Settings are the common configurations used to construct requests to the supplier/s. By default, we apply the same configuration to all Hotel-X clients."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Mandatory Settings:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"client"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"context"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"timeout"})," (Timeout in milliseconds for the supplier connection. Won't close client connection if exceeded.)"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Optional Settings:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"group"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"auditTransactions"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"suppliers"})," (Each one contains its own code, settings and accesses)"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"plugins"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"testMode"})," (This flag allows only the accesses checked as test)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"clientTokens"})," (Used to identify the origin of the request, this is only used in plugins)"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"businessRules"})}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Remember",type:"caution",children:(0,t.jsxs)(n.p,{children:["Keep in mind that if you leave some of the fields in the ",(0,t.jsx)(n.code,{children:"settings"})," inputs unspecified, we will use the values from your default settings. You can review and control your default API settings by visiting the ",(0,t.jsx)(n.a,{href:"https://app.travelgate.com/connections/settings",children:"API Settings section"})," on our website."]})}),"\n",(0,t.jsx)(n.h3,{id:"requests-examples",children:"Requests Examples"}),"\n",(0,t.jsxs)(n.h4,{id:"remarks-amendment-quote-with-the-bookingid-from-the-book-response",children:["Remarks amendment quote with the ",(0,t.jsx)(n.code,{children:"bookingID"})," from the book response"]}),"\n",(0,t.jsx)(s,{query:r,variables:l}),"\n",(0,t.jsx)(n.h2,{id:"commit-amend-remarks",children:"Commit Amend Remarks"}),"\n",(0,t.jsx)(n.p,{children:"The commit amend mutation generates the amendment to confirm the booking modification. The returned fields include:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"amendFee"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"amendedBookingDetail"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"reference"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"holder"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"hotel"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"price"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"quotePrice"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"cancelPolicy"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"remarks"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"status"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"inputs-1",children:"Inputs"}),"\n",(0,t.jsx)(n.p,{children:"When creating your quote amend query, you have two different inputs to fill based on your specific needs:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Data"}),"\n",(0,t.jsx)(n.li,{children:"Settings"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"1-data",children:"1. Data"}),"\n",(0,t.jsxs)(n.p,{children:["You must perform the ",(0,t.jsx)(n.code,{children:"mutation"})," (commit) of the amendment sending the ",(0,t.jsx)(n.code,{children:"amendmentID"})," received in the quote amend response:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"amendmentID"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"2-settings-1",children:"2. Settings"}),"\n",(0,t.jsx)(n.p,{children:"Settings are the common configurations used to construct requests to the supplier/s."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Mandatory Settings"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"context"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"timeout"})," (Timeout in milliseconds for the supplier connection. Won't close client connection if exceeded.)"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"businessRules"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"language"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"currency"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"nationality"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"markets"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Optional Settings"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"group"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"auditTransactions"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"suppliers"})," (Each one contains its own code, settings and accesses)"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"plugins"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"testMode"})," (This flag allows only the accesses checked as test)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"clientTokens"})," (Used to identify the origin of the request, this is only used in plugins)"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"businessRules"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"operationTimeout"})," (Timeout in milliseconds for Hotel-X connection. Will close Buyer connection if exceeded. Must be higher than ",(0,t.jsx)(n.code,{children:"timeout"}),".)"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"requests-examples-1",children:"Requests Examples"}),"\n",(0,t.jsx)(s,{query:d,variables:c})]})}function j(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}function p(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},50065:function(e,n,i){i.d(n,{Z:()=>l,a:()=>r});var s=i(67294);let t={},o=s.createContext(t);function r(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);
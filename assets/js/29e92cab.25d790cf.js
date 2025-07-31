"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["8536"],{44315:function(e,n,i){i.r(n),i.d(n,{frontMatter:()=>a,toc:()=>m,default:()=>j,metadata:()=>t,assets:()=>u,contentTitle:()=>h});var t=JSON.parse('{"id":"apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amend-board","title":"Amend Board","description":"The Amend Board operation enables you to change the booking\'s board or mealplan. To make a modification to your booking accurately, you should begin by executing the \'quote amend\' query to confirm the feasibility of the change and its associated price. After obtaining this information, you can proceed to implement the amendment using the \'commit\' mutation, which will finalize the modification in the Seller\'s system.","source":"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amend-board.mdx","sourceDirName":"apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments","slug":"/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amend-board","permalink":"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amend-board","draft":false,"unlisted":false,"editUrl":"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amend-board.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"Amend Dates","permalink":"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amend-dates"},"next":{"title":"Amend Rooms","permalink":"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amend-rooms"}}'),s=i(85893),o=i(50065);let d=`query (
	$criteria: HotelCriteriaAmendBoardQuoteInput!
	$settings: HotelSettingsInput!
) {
	hotelX {
		quoteBoardAmendment(criteria: $criteria, settings: $settings) {
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
}`,r=`{
	"criteria": {
		"bookingID": "n1@1[241128[241129[240516[1[es[EUR[2[test_09052024_test[3128791[",
		"board": "AI"
	},
	"settings": {
		"context": "HOTELTEST",
		"client": "client_demo",
		"auditTransactions": true,
		"timeout": 60000,
		"testMode": true
	}
}`,l=`mutation (
	$data: HotelCriteriaAmendBoardCommitInput!
	$settings: HotelSettingsInput!
) {
	hotelX {
		amendBoard(data: $data, settings: $settings) {
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
}`,a={sidebar_position:3},h="Amend Board",u={},m=[{value:"Quote Amend Board",id:"quote-amend-board",level:2},{value:"Inputs",id:"inputs",level:3},{value:"1. Criteria",id:"1-criteria",level:3},{value:"2. Settings",id:"2-settings",level:3},{value:"Requests Examples",id:"requests-examples",level:3},{value:"Board amendment quote with the <code>bookingID</code> from the book response",id:"board-amendment-quote-with-the-bookingid-from-the-book-response",level:4},{value:"Commit Amend Board",id:"commit-amend-board",level:2},{value:"Inputs",id:"inputs-1",level:3},{value:"1. Data",id:"1-data",level:3},{value:"2. Settings",id:"2-settings-1",level:3},{value:"Requests Examples",id:"requests-examples-1",level:3}];function x(e){let n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{CautionSettingsHotelX:i,GraphqlSample:t}=n;return i||p("CautionSettingsHotelX",!0),t||p("GraphqlSample",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"amend-board",children:"Amend Board"})}),"\n",(0,s.jsx)(n.p,{children:"The Amend Board operation enables you to change the booking's board or mealplan. To make a modification to your booking accurately, you should begin by executing the 'quote amend' query to confirm the feasibility of the change and its associated price. After obtaining this information, you can proceed to implement the amendment using the 'commit' mutation, which will finalize the modification in the Seller's system."}),"\n",(0,s.jsx)(n.h2,{id:"quote-amend-board",children:"Quote Amend Board"}),"\n",(0,s.jsx)(n.p,{children:"The quote amend query simulates the amendment to confirm the price of the booking modification. The returned fields include:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"amendFee"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"amendedBookingDetail"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"reference"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"holder"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"hotel"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"price"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"quotePrice"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"cancelPolicy"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"remarks"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"status"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"inputs",children:"Inputs"}),"\n",(0,s.jsx)(n.p,{children:"When creating your quote amend query, you have two different inputs to fill based on your specific needs:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Criteria"}),"\n",(0,s.jsx)(n.li,{children:"Settings"}),"\n"]}),"\n",(0,s.jsx)(i,{}),"\n",(0,s.jsx)(n.h3,{id:"1-criteria",children:"1. Criteria"}),"\n",(0,s.jsxs)(n.p,{children:["You can perform the ",(0,s.jsx)(n.code,{children:"query"})," (simulation) of the amendment sending all the booking information (",(0,s.jsx)(n.code,{children:"reference"}),", ",(0,s.jsx)(n.code,{children:"dates"}),", ",(0,s.jsx)(n.code,{children:"hotelCode"}),") or sending the ",(0,s.jsx)(n.code,{children:"bookingID"})," got in the booking flow:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Booking information:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"accessCode"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"language"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"hotelCode"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"reference"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"dates"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"BookingID got in the booking flow:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"bookingID"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You can decide between the two options either by booking information or directly by ",(0,s.jsx)(n.code,{children:"bookingID"}),", empowering you with the choice that suits you best."]}),"\n",(0,s.jsxs)(n.p,{children:["Additionally you'll need to indicate the new board code you want for your reservation with the ",(0,s.jsx)(n.code,{children:"board"})," input. For example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'{\n    "criteria" : {\n        "bookingID" : "n1@1[241128[241129[240516[1[es[EUR[2[test_09052024_test[3128791[",\n        "board": "AI"\n    }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"2-settings",children:"2. Settings"}),"\n",(0,s.jsx)(n.p,{children:"Settings are the common configurations used to construct requests to the supplier/s. By default, we apply the same configuration to all Hotel-X clients."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Mandatory Settings:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"client"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"context"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"timeout"})," (Timeout in milliseconds for the supplier connection. Won't close client connection if exceeded.)"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Optional Settings:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"group"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"auditTransactions"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"suppliers"})," (Each one contains its own code, settings and accesses)"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"plugins"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"testMode"})," (This flag allows only the accesses checked as test)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"clientTokens"})," (Used to identify the origin of the request, this is only used in plugins)"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"businessRules"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"requests-examples",children:"Requests Examples"}),"\n",(0,s.jsxs)(n.h4,{id:"board-amendment-quote-with-the-bookingid-from-the-book-response",children:["Board amendment quote with the ",(0,s.jsx)(n.code,{children:"bookingID"})," from the book response"]}),"\n",(0,s.jsx)(t,{query:d,variables:r}),"\n",(0,s.jsx)(n.h2,{id:"commit-amend-board",children:"Commit Amend Board"}),"\n",(0,s.jsx)(n.p,{children:"The commit amend mutation generates the amendment to confirm the booking modification. The returned fields include:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"amendFee"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"amendedBookingDetail"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"reference"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"holder"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"hotel"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"price"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"quotePrice"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"cancelPolicy"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"remarks"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"status"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"inputs-1",children:"Inputs"}),"\n",(0,s.jsx)(n.p,{children:"When creating your quote amend query, you have two different inputs to fill based on your specific needs:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Data"}),"\n",(0,s.jsx)(n.li,{children:"Settings"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"1-data",children:"1. Data"}),"\n",(0,s.jsxs)(n.p,{children:["You must perform the ",(0,s.jsx)(n.code,{children:"mutation"})," (commit) of the amendment sending the ",(0,s.jsx)(n.code,{children:"amendmentID"})," received in the quote amend response:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"amendmentID"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"2-settings-1",children:"2. Settings"}),"\n",(0,s.jsx)(n.p,{children:"Settings are the common configurations used to construct requests to the supplier/s. By default, we apply the same configuration to all Hotel-X clients."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Mandatory Settings"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"context"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"timeout"})," (Timeout in milliseconds for the supplier connection. Won't close client connection if exceeded.)"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"businessRules"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"language"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"currency"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"nationality"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"markets"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Optional Settings"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"group"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"auditTransactions"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"suppliers"})," (Each one contains its own code, settings and accesses)"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"plugins"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"testMode"})," (This flag allows only the accesses checked as test)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"clientTokens"})," (Used to identify the origin of the request, this is only used in plugins)"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"businessRules"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"operationTimeout"})," (Timeout in milliseconds for Hotel-X connection. Will close Buyer connection if exceeded. Must be higher than ",(0,s.jsx)(n.code,{children:"timeout"}),".)"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"requests-examples-1",children:"Requests Examples"}),"\n",(0,s.jsx)(t,{query:l,variables:c})]})}function j(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}function p(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},50065:function(e,n,i){i.d(n,{Z:()=>r,a:()=>d});var t=i(67294);let s={},o=t.createContext(s);function d(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);
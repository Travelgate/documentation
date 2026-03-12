"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["73709"],{57543(e,n,t){t.r(n),t.d(n,{metadata:()=>r,default:()=>g,frontMatter:()=>c,contentTitle:()=>d,toc:()=>h,assets:()=>u});var r=JSON.parse('{"id":"apis/for-buyers/hotel-x-pull-buyers-api/quickstart","title":"Quickstart","description":"Introduction","source":"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/quickstart.mdx","sourceDirName":"apis/for-buyers/hotel-x-pull-buyers-api","slug":"/apis/for-buyers/hotel-x-pull-buyers-api/quickstart","permalink":"/docs/apis/for-buyers/hotel-x-pull-buyers-api/quickstart","draft":false,"unlisted":false,"editUrl":"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/quickstart.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Overview","permalink":"/docs/apis/overview"},"next":{"title":"Endpoint","permalink":"/docs/apis/for-buyers/hotel-x-pull-buyers-api/making-requests/endpoint"}}'),i=t(74848),s=t(28453),o=t(30096),a=t(47516),l=t(46772);let c={sidebar_position:1},d="Quickstart",u={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Let&#39;s Get Started: How to Make a Booking",id:"lets-get-started-how-to-make-a-booking",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Request Headers",id:"request-headers",level:4},{value:"Supported Operations",id:"supported-operations",level:4},{value:"1. Find available hotels based on your search criteria",id:"1-find-available-hotels-based-on-your-search-criteria",level:3},{value:"2. Quote your selected option",id:"2-quote-your-selected-option",level:3},{value:"3. Confirm and book the option!",id:"3-confirm-and-book-the-option",level:3},{value:"Development credentials and test data",id:"development-credentials-and-test-data",level:2},{value:"Next Steps",id:"next-steps",level:2}];function p(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{GraphqlSample:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("GraphqlSample",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"quickstart",children:"Quickstart"})}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"Hotel-X API is a powerful aggregation solution that allows you to get results from the largest network of Sellers in a single request. Whether it's at the hotel, room type, or rate plan level, you have the flexibility to aggregate data to meet your specific needs."}),"\n",(0,i.jsx)(n.p,{children:"What sets Hotel-X API apart is its innovative structure: with a single integration, you can access the products of all Suppliers in the Marketplace, aggregate results, and easily add plugins or apps to extend functionality.  This unique feature is complemented by Hotel-X's ability to provide pre-processed responses, ensuring your system tasks are efficient and hassle-free."}),"\n",(0,i.jsxs)(n.p,{children:["\xa0\n",(0,i.jsx)(n.img,{src:"https://storage.travelgate.com/docs/hotel-x_overview.svg",alt:"Hotel-X Overview"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Using the Hotel-X API, you will be able to access static information, make bookings, and manage reservations."})," In this quickstart tutorial, you will learn how to create a simple sample booking."]}),"\n",(0,i.jsx)(n.h2,{id:"lets-get-started-how-to-make-a-booking",children:"Let's Get Started: How to Make a Booking"}),"\n",(0,i.jsx)(n.p,{children:"Hotel-X offers a powerful GraphQL-based API that simplifies the process of booking hotels and managing reservations. Whether you're a seasoned developer or just getting started, this guide will walk you through the basics of using the API to make hotel bookings."}),"\n",(0,i.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,i.jsx)(n.p,{children:"Hotel-X, being a GraphQL-based API, utilizes a single endpoint for all operations:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"https://api.travelgate.com\n"})}),"\n",(0,i.jsx)(n.h4,{id:"request-headers",children:"Request Headers"}),"\n",(0,i.jsx)(n.p,{children:"To interact with the API, you'll need to include three essential request headers:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Gzip Compression: This header helps optimize data transfer between your application and the API."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"Accept-Encoding: gzip\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Keep Alive: In order to increase performance and improve response times."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"Connection: keep-alive\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["API Key: You can find your API Key on the Travelgate website in ",(0,i.jsx)(n.a,{href:"https://app.travelgate.com/settings/apikeys",children:"API Keys"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"Authorization: Apikey xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you don't have an API key yet, don't worry \u2014 you'll be able to test the upcoming query and mutation examples using a test API key and preloaded test data directly in the playground. You can also find full details of the credentials and hotel data used in the ",(0,i.jsx)(n.a,{href:"#development-credentials-and-test-data",children:"Development credentials and test data"})," section below."]}),"\n",(0,i.jsx)(n.h4,{id:"supported-operations",children:"Supported Operations"}),"\n",(0,i.jsx)(n.p,{children:"Lastly, please note that the Hotel-X API supports two types of operations:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Query"}),': which are "read-only" and used for retrieving data from our system. You can use queries to search for hotels, check availability, and more.']}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Mutation"}),": which allow for changes, additions, or deletions of data within our system. This is where you can create bookings, update reservations, etc."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"But now this quickstart guide will focus on the basics of using the Hotel-X API to make hotel reservations, so let's dive in and get started!"}),"\n",(0,i.jsx)(n.h3,{id:"1-find-available-hotels-based-on-your-search-criteria",children:"1. Find available hotels based on your search criteria"}),"\n",(0,i.jsx)(n.p,{children:"The Search query is where the adventure begins in our shopping journey."}),"\n",(0,i.jsx)(n.p,{children:"In Hotel-X, a Buyer can decide the scope of each Search request:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Send the request to ",(0,i.jsx)(n.strong,{children:"all connected Suppliers"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Send the request to only ",(0,i.jsx)(n.strong,{children:"specific Suppliers"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Send the request to only ",(0,i.jsx)(n.strong,{children:"specific accesses"})," (credentials)."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In this example, we'll explore availability for a ",(0,i.jsx)(n.strong,{children:"single hotel using its FastX code"})," and we will send the Search request to ",(0,i.jsx)(n.strong,{children:"2 specific accesses"}),": ",(0,i.jsx)(n.code,{children:"'2'"})," and ",(0,i.jsx)(n.code,{children:"'5647'"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Remember, an ",(0,i.jsx)(n.strong,{children:"access"})," is a unique code representing the credentials that a Supplier provides to allow you to query their portfolio. By specifying the accesses in your search, you can retrieve options from one or more Suppliers for the same hotel, all in a single request."]}),"\n",(0,i.jsx)(n.p,{children:"This step lets you explore your options before committing to a booking, ensuring you understand what each Supplier offers for the same property."}),"\n",(0,i.jsx)(t,{query:o.Oy,variables:o.P5}),"\n",(0,i.jsx)(n.p,{children:"\xa0"}),"\n",(0,i.jsx)(n.p,{children:"If you execute the previous Search query by clicking the play button, you'll get a sample Search response with all available options and rates for the requested hotel and criteria."}),"\n",(0,i.jsxs)(n.p,{children:["For each option, you will receive key details such as ",(0,i.jsx)(n.strong,{children:"Supplier"}),", ",(0,i.jsx)(n.strong,{children:"FastX and Supplier codes"}),", ",(0,i.jsx)(n.strong,{children:"room type"}),", ",(0,i.jsx)(n.strong,{children:"price"}),", ",(0,i.jsx)(n.strong,{children:"cancellation policies"}),", and more.\nThis example focuses on the essential fields, but Hotel-X API supports many additional capabilities. To explore all Search features, check the full ",(0,i.jsx)(n.a,{href:"../hotel-x-pull-buyers-api/booking-flow/search",children:"search step documentation"}),"."]}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["As explained in the detailed ",(0,i.jsx)(n.a,{href:"./booking-flow/search",children:"Search documentation"}),", the more Suppliers and accesses you include in a single request, the larger the response can become."]}),(0,i.jsxs)(n.p,{children:["To keep responses manageable and improve performance, ",(0,i.jsx)(n.strong,{children:"we strongly recommend using an aggregation plugin"})," such as ",(0,i.jsx)(n.a,{href:"../hotel-x-pull-buyers-api/plugins/cheapest-price",children:"Cheapest Price"})," or ",(0,i.jsx)(n.a,{href:"../hotel-x-pull-buyers-api/plugins/preference",children:"Preference"}),". With aggregation, Hotel-X can internally group equivalent options (for example, same hotel, board, and room type) across Suppliers and return only the ",(0,i.jsx)(n.strong,{children:"N best options"}),", based on your configuration."]}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"This is one of the key advantages of FastX"}),": in a single request, you can query all suppliers or only selected ones, and then aggregate results automatically. \u{1F680}"]})]}),"\n",(0,i.jsx)(n.h3,{id:"2-quote-your-selected-option",children:"2. Quote your selected option"}),"\n",(0,i.jsx)(n.p,{children:"Now, let's dive into the exciting part! After carefully reviewing all the options in the search results and finding the hotel that perfectly suits your journey, it's time to move forward and request a quote. This Quote operation is like getting an exclusive preview before the grand booking. It provides you with up-to-the-minute pricing, a detailed breakdown of your expenses, and crucial information about cancellation policies."}),"\n",(0,i.jsxs)(n.p,{children:["To make this happen, you'll need to retrieve the ",(0,i.jsx)(n.code,{children:"optionRefId"})," from the option of the search results that you want to valuate and use this value as the input for the Quote request:"]}),"\n",(0,i.jsx)(t,{query:a.i,variables:a.v}),"\n",(0,i.jsx)(n.p,{children:"\xa0"}),"\n",(0,i.jsx)(n.admonition,{title:"Important",type:"danger",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/kb/connectivity-products/for-buyers/hotel-x/booking-flow/option-identifiers",children:(0,i.jsx)(n.code,{children:"OptionRefID"})})," is a unique identifier assigned to each option. ",(0,i.jsx)(n.strong,{children:"It must not be modified"})," and ",(0,i.jsx)(n.strong,{children:"must not be used or interpreted externally"}),", as it is an internal Travelgate system identifier."]})}),"\n",(0,i.jsx)(n.h3,{id:"3-confirm-and-book-the-option",children:"3. Confirm and book the option!"}),"\n",(0,i.jsx)(n.p,{children:"You're almost there! After securing your quote and ensuring all the details align with your travel plans, it's time to proceed with the booking. In this step, you confirm your reservation and officially lock in your stay."}),"\n",(0,i.jsxs)(n.p,{children:["You'll need to provide the ",(0,i.jsx)(n.code,{children:"optionRefId"})," returned in the Quote step and enter all the necessary passenger information. Upon a successful booking request, you'll receive a confirmation along with essential reservation details. Congratulations! Your hotel stay is now officially booked."]}),"\n",(0,i.jsx)(t,{query:l.M,variables:l.E}),"\n",(0,i.jsx)(n.p,{children:"\xa0"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Make sure to change the value of the ",(0,i.jsx)(n.code,{children:"clientReference"})," field so that the Book can be confirmed correctly."]})}),"\n",(0,i.jsx)(n.h2,{id:"development-credentials-and-test-data",children:"Development credentials and test data"}),"\n",(0,i.jsx)(n.p,{children:"To help you get started, we provide test credentials and example data that you can safely use during the development phase. These credentials allow you to run test queries and explore the structure and behavior of Hotel-X without impacting real live Suppliers."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Credentials"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Apikey:"})," ",(0,i.jsx)(n.code,{children:"test0000-0000-0000-0000-000000000000"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Client:"})," ",(0,i.jsx)(n.code,{children:"client_demo"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example Suppliers and Hotels"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Travelgate test supplier"})," (code: HOTELTEST)"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Access Code:"})," ",(0,i.jsx)(n.code,{children:"2"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Available Hotel Codes:"})," ",(0,i.jsx)(n.code,{children:"ES284122"}),", ",(0,i.jsx)(n.code,{children:"BR1518"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Smyrooms test supplier"})," (code: TTHOTTEST)"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Access Code:"})," ",(0,i.jsx)(n.code,{children:"5647"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Available Hotel Code:"})," ",(0,i.jsx)(n.code,{children:"BR1518"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"FastX test supplier, to retrieve static master data such hotel and board codes"})," (code: FASTX)"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Access Code:"})," ",(0,i.jsx)(n.code,{children:"34538"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Important",type:"warning",children:(0,i.jsxs)(n.p,{children:["These credentials and hotel codes are ",(0,i.jsx)(n.strong,{children:"for development and testing purposes only"}),". Please do ",(0,i.jsx)(n.strong,{children:"not"})," use them in a production environment, as they are shared and may not reflect live availability."]})}),"\n",(0,i.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,i.jsx)(n.p,{children:"Congratulations on completing this quickstart tutorial! \u{1F389} You've successfully learned the basics of creating a sample booking. But there's a world of knowledge waiting for you:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Explore the ",(0,i.jsx)(n.a,{href:"../hotel-x-pull-buyers-api/making-requests/endpoint",children:"Making Requests"})," section to dive deep into how a GraphQL API works and maximize its performance."]}),"\n",(0,i.jsxs)(n.li,{children:["Discover various queries and mutations grouped by the following actions:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../hotel-x-pull-buyers-api/content/overview",children:"Retrieve static information"}),": Explore accessing static data, including how to obtain the list of unique ",(0,i.jsx)(n.strong,{children:"FastX codes"})," for hotels and boards, as well as the additional information provided by the Sellers."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../hotel-x-pull-buyers-api/booking-flow/overview",children:"Make a booking"}),": Learn how to book with more details."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../hotel-x-pull-buyers-api/booking-management/overview",children:"Manage reservations"}),": Get the hang of reservation management."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Unleash the full potential of your business with our diverse range of ",(0,i.jsx)(n.a,{href:"../hotel-x-pull-buyers-api/plugins/overview",children:"plugins"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Our documentation is a treasure trove of additional features and functionalities to enhance your business. To uncover these valuable resources, explore our documentation further and make the most of these methods. Enjoy your journey!"})]})}function g(e={}){let{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},46772(e,n,t){t.d(n,{E:()=>i,M:()=>r});let r=`mutation ($bookInput: HotelBookInput!, $settings: HotelSettingsInput) {
	hotelX {
		book(input: $bookInput, settings: $settings) {
			errors {
				code
				type
				description
			}
			warnings {
				code
				type
				description
			}
			booking {
				status
				supplierCode
				accessCode
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
				reference {
					bookingID
					client
					supplier
					hotel
				}
				holder {
					name
					surname
				}
				cancelPolicy {
					refundable
					cancelPenalties {
						deadline
						isCalculatedDeadline
						penaltyType
						currency
						value
					}
				}
				remarks
				hotel {
					hotelCode
					hotelName
					bookingDate
					start
					end
					boardCode
					occupancies {
						id
						paxes {
							age
						}
					}
					rooms {
						code
						description
						occupancyRefId
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
				}
			}
		}
	}
}`,i=`{
	"bookInput": {
		"optionRefId": "31[a1[b270528[c270529[d1[e14[f0[gES[hES[ies[jEUR[k0[l2[m1[n14[o0[p1[x26060753[M79[N0[Ofalse[PUSD[Q[R0[S[T[z1|30#30|1|2027-05-28|1|5747340|5747342|14|11|0[A2269[B2269[C30|30[EDouble Standard[FDouble Standard[G1[U96[V2[WUSD[X79[Y2027-05-23T10:00:00Z[Z0[U72[V2[WUSD[X158[Y2027-05-24T10:00:00Z[Z0[H1[I1|30#30|1|2027-05-28|1|5747340|5747342|14|11|0[J1[K1[L1[H701[I3ada5eb8-3d84-41fb-8006-c202719033a1[J0[K0[L0[H704[IClBSAAgBEiQIYBjIBiEAAAAAAMBTQCoUMjAyNy0wNS0yM1QxMDowMDowMFoSJAhIGMgGIQAAAAAAwGNAKhQyMDI3LTA1LTI0VDEwOjAwOjAwWhILCNaH8LKQpJo+EAUiFwjIBhkAAAAAAMBTQCEAAAAAAMBTQCgB[J0[K1[L0[tOK[uConnectors[v0[w[yPACKAGE[",
		"clientReference": "test_0123456789",
		"deltaPrice": {
			"amount": 10,
			"percent": 10,
			"applyBoth": true
		},
		"holder": {
			"name": "Jane",
			"surname": "Doe"
		},
		"remarks": "This is just a test booking! Feel free to include any extra information in the remarks section that you'd like the supplier to know.",
		"rooms": [
			{
				"occupancyRefId": 1,
				"paxes": [
					{
						"name": "Jane",
						"surname": "Doe",
						"age": 30
					},
					{
						"name": "John",
						"surname": "Smith",
						"age": 30
					}
				]
			}
		]
	},
	"settings": {
		"client": "client_demo",
		"testMode": true,
		"timeout": 60000
	}
}`},47516(e,n,t){t.d(n,{i:()=>r,v:()=>i});let r=`query (
	$criteriaQuote: HotelCriteriaQuoteInput!
	$settings: HotelSettingsInput
) {
	hotelX {
		quote(criteria: $criteriaQuote, settings: $settings) {
			errors {
				code
				type
				description
			}
			warnings {
				code
				type
				description
			}
			optionQuote {
				optionRefId
				status
				hotelCode
				hotelCodeSupplier
				boardCode
				boardCodeSupplier
				price {
					currency
					binding
					net
					gross
					exchange {
						currency
						rate
					}
					minimumSellingPrice
				}
				surcharges {
					chargeType
					price {
						currency
						binding
						net
						gross
						exchange {
							currency
							rate
						}
						minimumSellingPrice
					}
					description
				}
				cancelPolicy {
					refundable
					description
					cancelPenalties {
						deadline
						isCalculatedDeadline
						penaltyType
						currency
						value
					}
				}
				paymentType
				cardTypes
				remarks
			}
		}
	}
}`,i=`{
	"criteriaQuote": {
		"optionRefId": "33!~|a0!~|b270528!~|c270529!~|d1!~|e14!~|f0!~|gES!~|hES!~|ies!~|jEUR!~|k0!~|l2!~|m1!~|n14!~|o0!~|p0!~|x26060747!~|rBAR_USD!~|sBAR_USD!~|M79!~|N0!~|Ofalse!~|PUSD!~|Q!~|R0!~|S!~|T!~|z1|30#30|1|2027-05-28|1|5747340|5747342|14|11|0!~|A2269!~|B2269!~|C30|30!~|EDouble Standard!~|FDouble Standard!~|G1!~|H1!~|I1|30#30|1|2027-05-28|1|5747340|5747342|14|11|0!~|J1!~|K1!~|L1!~|H2!~|IES!~|J1!~|K0!~|L1!~|H703!~|I1#3@#!~|J0!~|K1!~|L0!~|H708!~|Ia8558279-a7a3-4b99-a527-dd39a37a68d6!~|J0!~|K0!~|L0!~|tOK!~|uConnectors!~|v0!~|w!~|yPACKAGE!~|"
	},
	"settings": {
		"client": "client_demo",
		"testMode": true,
		"timeout": 5000
	}
}`},30096(e,n,t){t.d(n,{Oy:()=>r,P5:()=>i,ZX:()=>o,_S:()=>a,ej:()=>s,hL:()=>l});let r=`query (
	$criteriaSearch: HotelCriteriaSearchInput
	$settings: HotelSettingsInput
	$filterSearch: HotelXFilterSearchInput
) {
	hotelX {
		search(
			criteria: $criteriaSearch
			settings: $settings
			filterSearch: $filterSearch
		) {
			options {
				id
				accessCode
				supplierCode
				hotelCode
				hotelCodeSupplier
				hotelName
				boardCode
				boardCodeSupplier
				paymentType
				status
				occupancies {
					id
					paxes {
						age
					}
				}
				rooms {
					occupancyRefId
					code
					supplierCode
					description
					descriptionSupplier
					refundable
					roomPrice {
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
						breakdown {
							start
							end
							price {
								currency
								binding
								net
								gross
								exchange {
									currency
									rate
								}
								minimumSellingPrice
							}
						}
					}
					beds {
						type
						count
					}
					ratePlans {
						start
						end
						code
						name
					}
					promotions{
						start
						end
						code
						name
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
					minimumSellingPrice
					markups {
						channel
						currency
						binding
						net
						gross
						exchange {
							currency
							rate
						}
						rules {
							id
							name
							type
							value
						}
					}
				}
				supplements {
					start
					end
					code
					name
					description
					supplementType
					chargeType
					mandatory
					durationType
					quantity
					unit
					resort {
						code
						name
						description
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
				surcharges {
					code
					chargeType
					description
					mandatory
					price {
						currency
						binding
						net
						gross
						exchange {
							currency
							rate
						}
						markups {
							channel
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
				}
				rateRules
				cancelPolicy {
					refundable
					cancelPenalties {
						deadline
						isCalculatedDeadline
						penaltyType
						currency
						value
					}
				}
				remarks
			}
			errors {
				code
				type
				description
			}
			warnings {
				code
				type
				description
			}
		}
	}
}`,i=`{
    "criteriaSearch" : {
        "checkIn" : "2027-05-28",
        "checkOut" : "2027-05-29",
        "occupancies" : [
            {
                "paxes" : [
                    {
                        "age" : 30
                    },
                    {
                        "age" : 30
                    }
                ]
            }
        ],
        "hotels" : [
            "BR1518"
        ],
        "currency" : "EUR",
        "markets" : [
            "ES"
        ],
        "language" : "en",
        "nationality" : "ES"
    },
    "filterSearch" : {
        "access" : {
            "includes" : [
                "2",
                "5647"
            ]
        }
    },
    "settings" : {
        "client" : "client_demo",
        "testMode" : true,
        "timeout" : 25000,
        "plugins" : [
            {
                "step" : "RESPONSE",
                "pluginsType" : {
                    "type" : "PRE_STEP",
                    "name" : "preference",
                    "parameters" : [
                        {
                            "key" : "primaryKey",
                            "value" : "hotel,board,room,rateRules"
                        },
                        {
                            "key" : "optionsPerKey",
                            "value" : "1"
                        },
                        {
                            "key" : "internalCurrencyConversion",
                            "value" : "true"
                        }
                    ]
                }
            }
        ]
    }
}`,s=`{
    "criteriaSearch" : {
        "checkIn" : "2027-05-28",
        "checkOut" : "2027-05-29",
        "occupancies" : [
            {
                "paxes" : [
                    {
                        "age" : 30
                    },
                    {
                        "age" : 30
                    }
                ]
            }
        ],
        "hotels" : [
			"ES284122",
            "BR1518"
        ],
        "currency" : "EUR",
        "markets" : [
            "ES"
        ],
        "language" : "en",
        "nationality" : "ES"
    },
    "settings" : {
        "client" : "client_demo",
        "testMode" : true,
        "timeout" : 25000,
        "plugins" : [
            {
                "step" : "RESPONSE",
                "pluginsType" : {
                    "type" : "PRE_STEP",
                    "name" : "preference",
                    "parameters" : [
                        {
                            "key" : "primaryKey",
                            "value" : "hotel,board,room,rateRules"
                        },
                        {
                            "key" : "optionsPerKey",
                            "value" : "1"
                        },
                        {
                            "key" : "internalCurrencyConversion",
                            "value" : "true"
                        }
                    ]
                }
            }
        ]
    }
}`,o=`{
    "criteriaSearch" : {
        "checkIn" : "2027-05-28",
        "checkOut" : "2027-05-29",
        "occupancies" : [
            {
                "paxes" : [
                    {
                        "age" : 30
                    },
                    {
                        "age" : 30
                    }
                ]
            }
        ],
        "hotels" : [
			"ES284122"
        ],
        "currency" : "EUR",
        "markets" : [
            "ES"
        ],
        "language" : "en",
        "nationality" : "ES"
    },
    "filterSearch" : {
        "access" : {
            "includes" : [
                "2"
            ]
        }
    },
    "settings" : {
        "client" : "client_demo",
        "testMode" : true,
        "timeout" : 25000,
        "plugins" : [
            {
                "step" : "RESPONSE",
                "pluginsType" : {
                    "type" : "PRE_STEP",
                    "name" : "preference",
                    "parameters" : [
                        {
                            "key" : "primaryKey",
                            "value" : "hotel,board,room,rateRules"
                        },
                        {
                            "key" : "optionsPerKey",
                            "value" : "1"
                        },
                        {
                            "key" : "internalCurrencyConversion",
                            "value" : "true"
                        }
                    ]
                }
            }
        ]
    }
}`,a=`{
    "criteriaSearch" : {
        "checkIn" : "2027-05-28",
        "checkOut" : "2027-05-29",
        "occupancies" : [
            {
                "paxes" : [
                    {
                        "age" : 30
                    },
                    {
                        "age" : 30
                    }
                ]
            },
            {
                "paxes" : [
                    {
                        "age" : 30
                    },
                    {
                        "age" : 8
                    }
                ]
            }
        ],
        "hotels" : [
            "BR1518"
        ],
        "currency" : "EUR",
        "markets" : [
            "ES"
        ],
        "language" : "en",
        "nationality" : "ES"
    },
    "filterSearch" : {
        "access" : {
            "includes" : [
                "2",
                "5647"
            ]
        }
    },
    "settings" : {
        "client" : "client_demo",
        "testMode" : true,
        "timeout" : 25000,
        "plugins" : [
            {
                "step" : "RESPONSE",
                "pluginsType" : {
                    "type" : "PRE_STEP",
                    "name" : "preference",
                    "parameters" : [
                        {
                            "key" : "primaryKey",
                            "value" : "hotel,board,room,rateRules"
                        },
                        {
                            "key" : "optionsPerKey",
                            "value" : "1"
                        },
                        {
                            "key" : "internalCurrencyConversion",
                            "value" : "true"
                        }
                    ]
                }
            }
        ]
    }
}`,l=`{
    "criteriaSearch" : {
        "checkIn" : "2027-05-28",
        "checkOut" : "2027-05-29",
        "occupancies" : [
            {
                "paxes" : [
                    {
                        "age" : 30
                    },
                    {
                        "age" : 30
                    }
                ]
            }
        ],
        "hotels" : [
            "BR1518",
            "ES284122",
            "US2",
            "GB1"
        ],
        "currency" : "EUR",
        "markets" : [
            "ES"
        ],
        "language" : "en",
        "nationality" : "ES"
    },
    "filterSearch" : {
        "access" : {
            "includes" : [
                "2",
                "5647"
            ]
        }
    },
    "settings" : {
        "client" : "client_demo",
        "testMode" : true,
        "timeout" : 25000,
        "plugins" : [
            {
                "step" : "RESPONSE",
                "pluginsType" : {
                    "type" : "PRE_STEP",
                    "name" : "preference",
                    "parameters" : [
                        {
                            "key" : "primaryKey",
                            "value" : "hotel,board,room,rateRules"
                        },
                        {
                            "key" : "optionsPerKey",
                            "value" : "1"
                        },
                        {
                            "key" : "internalCurrencyConversion",
                            "value" : "true"
                        }
                    ]
                }
            }
        ]
    }
}`},28453(e,n,t){t.d(n,{R:()=>o,x:()=>a});var r=t(96540);let i={},s=r.createContext(i);function o(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);
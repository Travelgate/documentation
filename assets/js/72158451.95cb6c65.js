"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["90633"],{59540:function(e,t,n){n.r(t),n.d(t,{frontMatter:()=>c,toc:()=>h,default:()=>x,metadata:()=>i,assets:()=>u,contentTitle:()=>d});var i=JSON.parse('{"id":"apis/for-buyers/hotel-x-pull-buyers-api/quickstart","title":"Quickstart","description":"Introduction","source":"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/quickstart.mdx","sourceDirName":"apis/for-buyers/hotel-x-pull-buyers-api","slug":"/apis/for-buyers/hotel-x-pull-buyers-api/quickstart","permalink":"/docs/apis/for-buyers/hotel-x-pull-buyers-api/quickstart","draft":false,"unlisted":false,"editUrl":"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/quickstart.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Overview","permalink":"/docs/apis/overview"},"next":{"title":"Endpoint","permalink":"/docs/apis/for-buyers/hotel-x-pull-buyers-api/making-requests/endpoint"}}'),r=n(85893),o=n(50065),s=n(59691),a=n(38287),l=n(58626);let c={sidebar_position:1},d="Quickstart",u={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Let&#39;s Get Started: How to Make a Booking!",id:"lets-get-started-how-to-make-a-booking",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Request Headers",id:"request-headers",level:4},{value:"Supported Operations",id:"supported-operations",level:4},{value:"1. Find available hotels based on your search criteria",id:"1-find-available-hotels-based-on-your-search-criteria",level:3},{value:"2. Quote your selected option",id:"2-quote-your-selected-option",level:3},{value:"3. Confirm and book the option!",id:"3-confirm-and-book-the-option",level:3},{value:"Development credentials and test data",id:"development-credentials-and-test-data",level:2},{value:"Next Steps",id:"next-steps",level:2}];function p(e){let t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{GraphqlSample:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("GraphqlSample",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"quickstart",children:"Quickstart"})}),"\n",(0,r.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(t.p,{children:"Hotel-X API is a powerful aggregation solution that allows you to get results from the largest network of Sellers in a single request. Whether it's at the hotel, room type, or rate plan level, you have the flexibility to aggregate data to meet your specific needs."}),"\n",(0,r.jsx)(t.p,{children:"What sets Hotel-X API apart is its innovative plugin structure, which enhances connectivity and equips you with a competitive edge in your operations. This unique feature is complemented by Hotel-X's ability to provide pre-processed responses, ensuring your system tasks are efficient and hassle-free."}),"\n",(0,r.jsxs)(t.p,{children:["\xa0\n",(0,r.jsx)(t.img,{src:"https://storage.travelgate.com/docs/hotel-x_overview.svg",alt:"Hotel-X Overview"})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Using the Hotel-X API, you will be able to access static information, make bookings, and manage reservations."})," In this quickstart tutorial, you will learn how to create a simple sample booking."]}),"\n",(0,r.jsx)(t.h2,{id:"lets-get-started-how-to-make-a-booking",children:"Let's Get Started: How to Make a Booking!"}),"\n",(0,r.jsx)(t.p,{children:"Hotel-X offers a powerful GraphQL-based API that simplifies the process of booking hotels and managing reservations. Whether you're a seasoned developer or just getting started, this guide will walk you through the basics of using the API to make hotel bookings."}),"\n",(0,r.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(t.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,r.jsx)(t.p,{children:"Hotel-X, being a GraphQL-based API, utilizes a single endpoint for all operations:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:"https://api.travelgate.com\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Or ",(0,r.jsx)(t.code,{children:"https://api-cn.travelgate.com"})," if your servers are situated in China for better system's performance."]}),"\n",(0,r.jsx)(t.h4,{id:"request-headers",children:"Request Headers"}),"\n",(0,r.jsx)(t.p,{children:"To interact with the API, you'll need to include three essential request headers:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Gzip Compression: This header helps optimize data transfer between your application and the API."}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:"Accept-Encoding: gzip.\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Keep Alive: In order to increase performance and improve response times."}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:"Connection: keep-alive\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["API Key: You can find your API Key on the Travelgate website in ",(0,r.jsx)(t.a,{href:"https://app.travelgate.com/settings/apikeys",children:"API Keys"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:"Authorization: ApiKey xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx\n"})}),"\n",(0,r.jsxs)(t.p,{children:["If you don't have an API key yet, don't worry \u2014 you'll be able to test the upcoming query and mutation examples using a test API key and preloaded test data directly in the playground. You can also find full details of the credentials and hotel data used in the ",(0,r.jsx)(t.a,{href:"#development-credentials-and-test-data",children:"Development credentials and test data"})," section below."]}),"\n",(0,r.jsx)(t.h4,{id:"supported-operations",children:"Supported Operations"}),"\n",(0,r.jsx)(t.p,{children:"Lastly, please note that the Hotel-X API supports two types of operations:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Query"}),': which are "read-only" and used for retrieving data from our system.  You can use queries to search for hotels, check availability...']}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Mutation"}),": which allow for changes, additions, or deletions of data within our system. This is where you can create bookings, update reservations..."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"But now this quickstart guide will focus on the basics of using the Hotel-X API to make hotel reservations, so let's dive in and get started!"}),"\n",(0,r.jsx)(t.h3,{id:"1-find-available-hotels-based-on-your-search-criteria",children:"1. Find available hotels based on your search criteria"}),"\n",(0,r.jsx)(t.p,{children:"The Search query is where the adventure begins in our shopping journey! Our aim here is to see what's available within your specified date range and for the number of guests (pax) you have in mind, whether it's for a particular hotel or in your desired destination. This step lets you explore your options before committing to a booking. You can even spice things up by searching with one or more sellers' accesses, giving you the freedom to tailor your search. But hey, for this example, let's kick it off with a simple search for a specific hotel using a particular test Seller."}),"\n",(0,r.jsx)(n,{query:s.wy,variables:s.hP}),"\n",(0,r.jsx)(t.p,{children:"If you execute the previous search query by clicking on the play button, you'll see an example of how a search response could be, with all the options and rates available for the hotel and criteria requested in the query. For each option, you will receive relevant information such as rate, room type, price, cancellation policies, and more."}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["This example demonstrates the essential fields for obtaining results but keep in mind that the Hotel-X API offers a wide range of additional fields and functionalities! If you're curious and want to discover all the exciting details, check out the full ",(0,r.jsx)(t.a,{href:"./booking-flow/search",children:"search step documentation"}),". Happy exploring! \u{1F60A}\u{1F50D}"]})}),"\n",(0,r.jsx)(t.h3,{id:"2-quote-your-selected-option",children:"2. Quote your selected option"}),"\n",(0,r.jsx)(t.p,{children:"Now, let's dive into the exciting part! After carefully reviewing all the options in the search results and finding the hotel that perfectly suits your journey, it's time to move forward and request a quote. This quote operation is like getting an exclusive preview before the grand booking. It provides you with up-to-the-minute pricing, a detailed breakdown of your expenses, and crucial information about cancellation policies."}),"\n",(0,r.jsxs)(t.p,{children:["To make this happen, you'll need to retrieve the ",(0,r.jsx)(t.code,{children:"optionRefId"})," from the option of the search results that you want to valuate and use this value as the input for the Quote request:"]}),"\n",(0,r.jsx)(n,{query:a.T,variables:a.B}),"\n",(0,r.jsx)(t.admonition,{title:"Important",type:"danger",children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/kb/connectivity-products/for-buyers/hotel-x/booking-flow/option-identifiers",children:(0,r.jsx)(t.code,{children:"OptionRefID"})})," is a unique identifier assigned to each option. ",(0,r.jsx)(t.strong,{children:"It must not be modified"})," and ",(0,r.jsx)(t.strong,{children:"must not be used or interpreted externally"}),", as it is an internal TGX system identifier."]})}),"\n",(0,r.jsx)(t.h3,{id:"3-confirm-and-book-the-option",children:"3. Confirm and book the option!"}),"\n",(0,r.jsx)(t.p,{children:"You're almost there! After securing your quote and ensuring all the details align with your travel plans, it's time to proceed with the booking. In this step, you confirm your reservation and officially lock in your stay."}),"\n",(0,r.jsxs)(t.p,{children:["You'll need to provide the ",(0,r.jsx)(t.code,{children:"optionRefId"})," returned in the Quote step and enter all the necessary passenger information. Upon a successful booking request, you'll receive a confirmation along with essential reservation details. Congratulations! Your hotel stay is now officially booked."]}),"\n",(0,r.jsx)(n,{query:l.a,variables:l.q}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["Make sure to change the value of the ",(0,r.jsx)(t.code,{children:"clientReference"})," field so that the Book can be confirmed correctly."]})}),"\n",(0,r.jsx)(t.h2,{id:"development-credentials-and-test-data",children:"Development credentials and test data"}),"\n",(0,r.jsx)(t.p,{children:"To help you get started, we provide test credentials and example data that you can safely use during the development phase. These credentials allow you to run test queries and explore the structure and behavior of Hotel-X without impacting real live suppliers."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Credentials"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Apikey:"})," ",(0,r.jsx)(t.code,{children:"test0000-0000-0000-0000-000000000000"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Client:"})," ",(0,r.jsx)(t.code,{children:"client_demo"})]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Example Suppliers and Hotels"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Travelgate test supplier"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Context:"})," ",(0,r.jsx)(t.code,{children:"HOTELTEST"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Access Code:"})," ",(0,r.jsx)(t.code,{children:"2"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Available Hotel Codes:"})," ",(0,r.jsx)(t.code,{children:"1"}),", ",(0,r.jsx)(t.code,{children:"2"}),", and ",(0,r.jsx)(t.code,{children:"23"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Smyrooms test supplier"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Context:"})," ",(0,r.jsx)(t.code,{children:"LOGITEST"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Access Code:"})," ",(0,r.jsx)(t.code,{children:"5647"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Available Hotel Code:"})," ",(0,r.jsx)(t.code,{children:"27"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{title:"Important",type:"warning",children:(0,r.jsxs)(t.p,{children:["These credentials and hotel codes are ",(0,r.jsx)(t.strong,{children:"for development and testing purposes only"}),". Please do ",(0,r.jsx)(t.strong,{children:"not"})," use them in a production environment, as they are shared and may not reflect live availability."]})}),"\n",(0,r.jsx)(t.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,r.jsx)(t.p,{children:"Congratulations on completing this quickstart tutorial! \u{1F389} You've successfully learned the basics of creating a sample booking. But there's a world of knowledge waiting for you:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Explore the ",(0,r.jsx)(t.a,{href:"../hotel-x-pull-buyers-api/making-requests/endpoint",children:"Making Requests"})," section to dive deep into how a GraphQL API works and maximize its performance."]}),"\n",(0,r.jsxs)(t.li,{children:["Discover various queries and mutations grouped by the following actions:","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"../hotel-x-pull-buyers-api/content/overview",children:"Retrieve static information"}),": Explore accessing static data."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"../hotel-x-pull-buyers-api/booking-flow/overview",children:"Make a booking"}),": Learn how to book with more details."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"../hotel-x-pull-buyers-api/booking-management/overview",children:"Manage reservations"}),": Get the hang of reservation management."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["Unleash the full potential of your business with our diverse range of ",(0,r.jsx)(t.a,{href:"../hotel-x-pull-buyers-api/plugins/overview",children:"plugins"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Our documentation is a treasure trove of additional features and functionalities to enhance your business. To uncover these valuable resources, explore our documentation further and make the most of these methods. Enjoy your journey!"})]})}function x(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},58626:function(e,t,n){n.d(t,{a:()=>i,q:()=>r});let i=`mutation ($bookInput: HotelBookInput!, $settings: HotelSettingsInput) {
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
}`,r=`{
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
		"rooms": {
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
	},
	"settings": {
		"client": "client_demo",
		"context": "HOTELTEST",
		"testMode": true,
		"timeout": 60000
	}
}`},38287:function(e,t,n){n.d(t,{B:()=>r,T:()=>i});let i=`query (
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
}`,r=`{
	"criteriaQuote": {
		"optionRefId": "33!~|a0!~|b270528!~|c270529!~|d1!~|e14!~|f0!~|gES!~|hES!~|ies!~|jEUR!~|k0!~|l2!~|m1!~|n14!~|o0!~|p0!~|x26060747!~|rBAR_USD!~|sBAR_USD!~|M79!~|N0!~|Ofalse!~|PUSD!~|Q!~|R0!~|S!~|T!~|z1|30#30|1|2027-05-28|1|5747340|5747342|14|11|0!~|A2269!~|B2269!~|C30|30!~|EDouble Standard!~|FDouble Standard!~|G1!~|H1!~|I1|30#30|1|2027-05-28|1|5747340|5747342|14|11|0!~|J1!~|K1!~|L1!~|H2!~|IES!~|J1!~|K0!~|L1!~|H703!~|I1#3@#!~|J0!~|K1!~|L0!~|H708!~|Ia8558279-a7a3-4b99-a527-dd39a37a68d6!~|J0!~|K0!~|L0!~|tOK!~|uConnectors!~|v0!~|w!~|yPACKAGE!~|"
	},
	"settings": {
		"client": "client_demo",
		"context": "HOTELTEST",
		"testMode": true,
		"timeout": 5000
	}
}`},59691:function(e,t,n){n.d(t,{hP:()=>r,pT:()=>o,rI:()=>s,wy:()=>i});let i=`query (
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
			context
			options {
				id
				accessCode
				supplierCode
				hotelCode
				hotelName
				boardCode
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
					description
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
}`,r=`{
	"criteriaSearch": {
		"checkIn": "2027-05-28",
		"checkOut": "2027-05-29",
		"occupancies": [
			{
				"paxes": [
					{
						"age": 30
					},
					{
						"age": 30
					}
				]
			}
		],
		"hotels": [
			"1"
		],
		"currency": "EUR",
		"markets": [
			"ES"
		],
		"language": "es",
		"nationality": "ES"
	},
	"settings": {
		"client": "client_demo",
		"context": "HOTELTEST",
		"testMode": true,
		"timeout": 25000
	},
	"filterSearch": {
		"access": {
			"includes": [
				"2"
			]
		}
	}
}`,o=`{
	"criteriaSearch": {
		"checkIn": "2027-05-28",
		"checkOut": "2027-05-29",
		"occupancies": [
			{
				"paxes": [
					{
						"age": 30
					},
					{
						"age": 30
					}
				]
			},
			{
				"paxes": [
					{
						"age": 30
					},
					{
						"age": 8
					}
				]
			}
		],
		"hotels": [
			"1"
		],
		"currency": "EUR",
		"markets": [
			"ES"
		],
		"language": "es",
		"nationality": "ES"
	},
	"settings": {
		"client": "client_demo",
		"context": "HOTELTEST",
		"testMode": true,
		"timeout": 25000
	},
	"filterSearch": {
		"access": {
			"includes": [
				"2"
			]
		}
	}
}`,s=`{
	"criteriaSearch": {
		"checkIn": "2027-05-28",
		"checkOut": "2027-05-29",
		"occupancies": [
			{
				"paxes": [
					{
						"age": 30
					},
					{
						"age": 30
					}
				]
			}
		],
		"hotels": [
			"1",
			"2"
		],
		"currency": "EUR",
		"markets": [
			"ES"
		],
		"language": "es",
		"nationality": "ES"
	},
	"settings": {
		"client": "client_demo",
		"context": "HOTELTEST",
		"testMode": true,
		"timeout": 25000
	},
	"filterSearch": {
		"access": {
			"includes": [
				"2"
			]
		}
	}
}`},50065:function(e,t,n){n.d(t,{Z:()=>a,a:()=>s});var i=n(67294);let r={},o=i.createContext(r);function s(e){let t=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);
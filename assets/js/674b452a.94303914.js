"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["69215"],{72643(e,n,s){s.r(n),s.d(n,{metadata:()=>t,default:()=>j,frontMatter:()=>l,contentTitle:()=>c,toc:()=>h,assets:()=>a});var t=JSON.parse('{"id":"apis/for-buyers/hotel-x-pull-buyers-api/content/fastx-content","title":"FastX Content","description":"FastX codes are unique identifiers created by Travelgate to make connectivity across the Marketplace easier and more efficient.","source":"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/fastx-content.mdx","sourceDirName":"apis/for-buyers/hotel-x-pull-buyers-api/content","slug":"/apis/for-buyers/hotel-x-pull-buyers-api/content/fastx-content","permalink":"/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/fastx-content","draft":false,"unlisted":false,"editUrl":"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/fastx-content.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Overview","permalink":"/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/overview"},"next":{"title":"Hotels","permalink":"/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/hotels"}}'),i=s(74848),r=s(28453),o=s(8500),d=s(88366);let l={sidebar_position:2},c="FastX Content",a={},h=[{value:"Hotels",id:"hotels",level:2},{value:"1. FastX Hotel Master",id:"1-fastx-hotel-master",level:3},{value:"2. Hotel List by Supplier",id:"2-hotel-list-by-supplier",level:3},{value:"Boards",id:"boards",level:2},{value:"Rooms",id:"rooms",level:2}];function x(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{GraphqlSample:s}=n;return s||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("GraphqlSample",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"fastx-content",children:"FastX Content"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"FastX codes"})," are unique identifiers created by Travelgate to make connectivity across the Marketplace easier and more efficient.",(0,i.jsx)(n.br,{}),"\n","They represent a unified way to identify ",(0,i.jsx)(n.strong,{children:"hotels"}),", ",(0,i.jsx)(n.strong,{children:"boards"}),", and ",(0,i.jsx)(n.strong,{children:"rooms"}),", so you can work with multiple Suppliers using a single, consistent set of codes."]}),"\n",(0,i.jsx)(n.p,{children:"As a Buyer, you only need to map to the FastX codes \u2014 once you do, you can seamlessly access and book content from any connected Supplier without having to remap each one individually."}),"\n",(0,i.jsxs)(n.p,{children:["To make mapping even easier, ",(0,i.jsx)(n.strong,{children:"FastX codes are available in GIATA"})," under the name ",(0,i.jsx)(n.code,{children:'"travelgate"'}),". This means that if you already use GIATA, integrating with Travelgate becomes even simpler \u2014 everything aligns smoothly."]}),"\n",(0,i.jsx)(n.p,{children:"The sections below explain how FastX codes work and how you can retrieve them through our API."}),"\n",(0,i.jsx)(n.h2,{id:"hotels",children:"Hotels"}),"\n",(0,i.jsx)(n.p,{children:"There are two ways to obtain FastX hotel codes via Hotel-X API:"}),"\n",(0,i.jsx)(n.h3,{id:"1-fastx-hotel-master",children:"1. FastX Hotel Master"}),"\n",(0,i.jsxs)(n.p,{children:["This is a single call that returns the ",(0,i.jsx)(n.strong,{children:"master list of FastX hotels"})," available to you in the Travelgate Marketplace. It includes all unique hotels offered by the Sellers you are connected to. As you add new Sellers, any new properties they provide \u2014 not already offered by your other connected Suppliers \u2014 are automatically included in your master list."]}),"\n",(0,i.jsxs)(n.p,{children:["To retrieve it, make a ",(0,i.jsx)(n.code,{children:"hotel list"})," call using your ",(0,i.jsx)(n.strong,{children:"FastX access"}),", which you can find in the ",(0,i.jsx)(n.em,{children:"MyConnections"})," section under the Seller ",(0,i.jsx)(n.strong,{children:"\u201CTravelgate\u201D"}),"."]}),"\n",(0,i.jsxs)(n.admonition,{title:"FastX Content:",type:"info",children:[(0,i.jsxs)(n.p,{children:["When performing a Hotels Query ",(0,i.jsx)(n.strong,{children:"using the FastX context"}),", the following fields are currently returned:"]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Hotel code"}),"\n",(0,i.jsx)(n.li,{children:"Hotel name"}),"\n",(0,i.jsx)(n.li,{children:"Country"}),"\n",(0,i.jsx)(n.li,{children:"Address"}),"\n",(0,i.jsx)(n.li,{children:"Latitude"}),"\n",(0,i.jsx)(n.li,{children:"Longitude"}),"\n",(0,i.jsxs)(n.li,{children:["GIATA ID (if this functionality has been ",(0,i.jsx)(n.a,{href:"/kb/connectivity-products/for-buyers/mapping-solutions/giata/giata-multicodes",children:"activated"}),")"]}),"\n"]}),(0,i.jsx)(n.p,{children:"To provide you with a more comprehensive experience, our team is developing a Content App that will deliver richer content for FastX Hotels. Stay tuned for further updates!"})]}),"\n",(0,i.jsx)(s,{query:o._T,variables:o.V2}),"\n",(0,i.jsx)(n.h3,{id:"2-hotel-list-by-supplier",children:"2. Hotel List by Supplier"}),"\n",(0,i.jsxs)(n.p,{children:["Travelgate maintains full transparency. In addition to FastX codes, you can also access each Supplier\u2019s static data. When you make a ",(0,i.jsx)(n.code,{children:"hotel list"})," call to a specific Supplier access, you\u2019ll receive:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The Supplier\u2019s ",(0,i.jsx)(n.strong,{children:"hotel code"})," (in the ",(0,i.jsx)(n.code,{children:"hotelCode"})," object) and hotel information."]}),"\n",(0,i.jsxs)(n.li,{children:["The Supplier\u2019s ",(0,i.jsx)(n.strong,{children:"native hotel code"})," (in the ",(0,i.jsx)(n.code,{children:"hotelCodeSupplier"})," object)."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.strong,{children:"FastX hotel code"})," in the ",(0,i.jsx)(n.code,{children:"mappings"})," node."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.strong,{children:"GIATA code"}),", if you have activated ",(0,i.jsx)(n.a,{href:"/kb/connectivity-products/for-buyers/mapping-solutions/giata/giata-multicodes",children:"this functionality"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This allows you to keep your systems synchronized with both the standardized FastX codes and each Supplier\u2019s own identifiers."}),"\n",(0,i.jsx)(s,{query:o._T,variables:o.r2}),"\n",(0,i.jsx)(n.h2,{id:"boards",children:"Boards"}),"\n",(0,i.jsxs)(n.p,{children:["To get the list of ",(0,i.jsx)(n.strong,{children:"FastX boards"}),", make a ",(0,i.jsx)(n.code,{children:"boards"})," call using your ",(0,i.jsx)(n.strong,{children:"FastX access"})," (available in ",(0,i.jsx)(n.em,{children:"MyConnections"})," under \u201CTravelgate\u201D). This will return the complete set of meal plans you\u2019ll encounter in the booking flow \u2014 all identified with standardized FastX codes and names."]}),"\n",(0,i.jsx)(s,{query:d.CK,variables:d.Fb}),"\n",(0,i.jsx)(n.h2,{id:"rooms",children:"Rooms"}),"\n",(0,i.jsxs)(n.p,{children:["With FastX, room standardization happens at ",(0,i.jsx)(n.strong,{children:"search time"}),". There is no static room list."]}),"\n",(0,i.jsxs)(n.p,{children:["For each availability response, Travelgate analyzes the Supplier's native room description with an AI-based process. The model detects room components and then generates a ",(0,i.jsx)(n.strong,{children:"single FastX standardized description and code"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Detected components:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Category"})," (",(0,i.jsx)(n.code,{children:"Standard"}),", ",(0,i.jsx)(n.code,{children:"Deluxe"}),", ",(0,i.jsx)(n.code,{children:"Basic"}),", etc.)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type"})," (",(0,i.jsx)(n.code,{children:"Room"}),", ",(0,i.jsx)(n.code,{children:"Studio"}),", ",(0,i.jsx)(n.code,{children:"Apartment"}),", etc.)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Capacity"})," (",(0,i.jsx)(n.code,{children:"Single"}),", ",(0,i.jsx)(n.code,{children:"Twin"}),", ",(0,i.jsx)(n.code,{children:"Double"}),", ",(0,i.jsx)(n.code,{children:"Triple"}),", etc.)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Environment"})," (",(0,i.jsx)(n.code,{children:"Shared Bed"}),", ",(0,i.jsx)(n.code,{children:"Women Only"}),", etc.)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"View"})," (",(0,i.jsx)(n.code,{children:"Ocean"}),", ",(0,i.jsx)(n.code,{children:"Sea"}),", ",(0,i.jsx)(n.code,{children:"Park"}),", ",(0,i.jsx)(n.code,{children:"Garden"}),", etc.)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Features"})," (",(0,i.jsx)(n.code,{children:"Jacuzzi"}),", ",(0,i.jsx)(n.code,{children:"Air Conditioning"}),", ",(0,i.jsx)(n.code,{children:"Kitchenette"}),", etc.)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Beds"})," (",(0,i.jsx)(n.code,{children:"Queen"}),", ",(0,i.jsx)(n.code,{children:"Double"}),", ",(0,i.jsx)(n.code,{children:"King"}),", etc.)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Bedrooms"})," (",(0,i.jsx)(n.code,{children:"1"}),", ",(0,i.jsx)(n.code,{children:"2"}),", ",(0,i.jsx)(n.code,{children:"3"}),", etc.)"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["As a Buyer, in every ",(0,i.jsx)(n.strong,{children:"search"})," response you receive both:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.strong,{children:"Supplier's original room description and code"})]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.strong,{children:"FastX standardized room description and code"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This gives you the best of both worlds:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Consistency across Suppliers"})," with one unified room naming logic"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Less mapping effort"})," in your internal systems"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Easier comparison and deduplication"})," when different Suppliers describe the same room in different ways"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Full transparency"})," by preserving each Supplier's original data"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example:\nDifferent Supplier descriptions can be standardized into the same FastX room name."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Supplier"}),(0,i.jsx)(n.th,{children:"Supplier Room Description"}),(0,i.jsx)(n.th,{children:"TGX Room Code"}),(0,i.jsx)(n.th,{children:"TGX Room Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"SUP1"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Sea View Double Room (BB BAR FLEX)"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"str--AA--d--"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Standard Double Room views Sea"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"SUP2"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Sea View Double Room (RO BAR FLEX)"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"str--AA--d--"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Standard Double Room views Sea"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"SUP3"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"DOUBLE SEA VIEW"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"str--AA--d--"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Standard Double Room views Sea"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"SUP4"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Double Sea View A"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"str--AA--d--"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Standard Double Room views Sea"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"SUP5"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Double Sea View"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"str--AA--d--"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Standard Double Room views Sea"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"SUP6"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"double room,sea view"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"str--AA--d--"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Standard Double Room views Sea"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"SUP7"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Double Sea View BB"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"str--AA--d--"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Standard Double Room views Sea"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"SUP8"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Double Sea View HB"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"str--AA--d--"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Standard Double Room views Sea"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"SUP9"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Habitacion doble con vistas al mar 2A"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"str--AA--d--"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Standard Double Room views Sea"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"SUP10"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Main Building Double Seaview Room"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"str--AA--d--"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Standard Double Room views Sea"})})]})]})]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["Room standardization is generated in real time and is ",(0,i.jsx)(n.strong,{children:"not Seller-validated"}),". This differs from entities such as ",(0,i.jsx)(n.strong,{children:"hotel"})," and ",(0,i.jsx)(n.strong,{children:"board"}),", which can be Seller-validated when using validated mode."]})})]})}function j(e={}){let{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},88366(e,n,s){s.d(n,{$8:()=>o,CK:()=>t,Fb:()=>r,nX:()=>i});let t=`query ($criteria: HotelXBoardQueryInput!) {
	hotelX {
		boards(criteria: $criteria) {
			edges {
				node {
					createdAt
					updatedAt
					boardData {
						boardCode
						texts {
							text
							language
						}
					}
				}
			}
		}
	}
}`,i=`{
	"criteria": {
		"access": "5647"
	}
}`,r=`{
	"criteria": {
		"access": "34538"
	}
}`,o=`{
	"criteria": {
		"access": "2",
		"boardCodes": [
			"12",
			"256"
		]
	}
}`},8500(e,n,s){s.d(n,{Fb:()=>d,V2:()=>l,Yl:()=>r,_T:()=>t,pc:()=>o,r2:()=>i});let t=`query ($criteriaHotels: HotelXHotelListInput!, $token: String) {
	hotelX {
	  hotels(criteria: $criteriaHotels, token: $token) {
			  token
			  count
			  edges {
				  node {
					  createdAt
					  updatedAt
					  hotelData {
						  hotelCode
						  hotelName
						  categoryCode
						  chainCode
						  mappings{
							context
							code
						  }
						  location {
							  address
							  zipCode
							  city
							  country
							  coordinates {
								  latitude
								  longitude
							  }
							  closestDestination {
								  code
								  available
								  texts {
									  text
									  language
								  }
								  type
								  parent
							  }
						  }
						  contact {
							  email
							  telephone
							  fax
							  web
						  }
						  propertyType {
							  propertyCode
							  name
						  }
						  descriptions {
							  type
							  texts {
								  language
								  text
							  }
						  }
						  medias {
							  code
							  url
						  }
						  rooms {
							  edges {
								  node {
									  code
									  roomData {
										  code
										  roomCode
										  allAmenities {
											  edges {
												  node {
													  amenityData {
														  code
														  amenityCode
													  }
												  }
											  }
										  }
									  }
								  }
							  }
						  }
						  allAmenities {
							  edges {
								  node {
									  amenityData {
										  code
										  amenityCode
									  }
								  }
							  }
						  }
					  }
				  }
			  }
		  }
	  }
  }`,i=`{
	"criteriaHotels": {
		"access": "2",
		"maxSize": 25
	},
	"token": ""
}`,r=`{
	"criteriaHotels": {
		"access": "34538",
		"countries": [
			"GR"
		],
		"maxSize": 5
	},
	"token": ""
}`,o=`{
	"criteriaHotels": {
		"access": "2",
		"destinationCodes": [
			"101402"
		],
		"maxSize": 5
	},
	"token": ""
}`,d=`{
	"criteriaHotels": {
		"access": "34538",
		"hotelCodes": [
			"BR1518",
			"US2028"
		]
	},
	"token": ""
}`,l=`{
	"criteriaHotels": {
		"access": "34538"
	},
	"token": ""
}`},28453(e,n,s){s.d(n,{R:()=>o,x:()=>d});var t=s(96540);let i={},r=t.createContext(i);function o(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["94539"],{57150:function(e,t,s){s.r(t),s.d(t,{frontMatter:()=>l,toc:()=>h,default:()=>p,metadata:()=>o,assets:()=>d,contentTitle:()=>c});var o=JSON.parse('{"id":"apis/for-buyers/hotel-x-pull-buyers-api/content/fastx","title":"FastX Codes","description":"FastX codes are unique identifiers created by Travelgate to make connectivity across the Marketplace easier and more efficient.","source":"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/fastx.mdx","sourceDirName":"apis/for-buyers/hotel-x-pull-buyers-api/content","slug":"/apis/for-buyers/hotel-x-pull-buyers-api/content/fastx","permalink":"/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/fastx","draft":false,"unlisted":false,"editUrl":"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/fastx.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Overview","permalink":"/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/overview"},"next":{"title":"Hotels","permalink":"/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/hotels"}}'),n=s(85893),a=s(50065),i=s(56128),r=s(89026);let l={sidebar_position:2},c="FastX Codes",d={},h=[{value:"Hotels",id:"hotels",level:2},{value:"1. FastX Hotel Master",id:"1-fastx-hotel-master",level:3},{value:"2. Hotel List by Supplier",id:"2-hotel-list-by-supplier",level:3},{value:"Boards",id:"boards",level:2},{value:"Rooms",id:"rooms",level:2}];function u(e){let t={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{GraphqlSample:s}=t;return s||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("GraphqlSample",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"fastx-codes",children:"FastX Codes"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"FastX codes"})," are unique identifiers created by Travelgate to make connectivity across the Marketplace easier and more efficient.",(0,n.jsx)(t.br,{}),"\n","They represent a unified way to identify ",(0,n.jsx)(t.strong,{children:"hotels"}),", ",(0,n.jsx)(t.strong,{children:"boards"}),", and ",(0,n.jsx)(t.strong,{children:"rooms"}),", so you can work with multiple Suppliers using a single, consistent set of codes."]}),"\n",(0,n.jsx)(t.p,{children:"As a Buyer, you only need to map to the FastX codes \u2014 once you do, you can seamlessly access and book content from any connected Supplier without having to remap each one individually."}),"\n",(0,n.jsxs)(t.p,{children:["To make mapping even easier, ",(0,n.jsx)(t.strong,{children:"FastX codes are available in GIATA"})," under the name ",(0,n.jsx)(t.code,{children:'"travelgate"'}),". This means that if you already use GIATA, integrating with Travelgate becomes even simpler \u2014 everything aligns smoothly."]}),"\n",(0,n.jsx)(t.p,{children:"The sections below explain how FastX codes work and how you can retrieve them through our API."}),"\n",(0,n.jsx)(t.h2,{id:"hotels",children:"Hotels"}),"\n",(0,n.jsx)(t.p,{children:"There are two ways to obtain FastX hotel codes:"}),"\n",(0,n.jsx)(t.h3,{id:"1-fastx-hotel-master",children:"1. FastX Hotel Master"}),"\n",(0,n.jsxs)(t.p,{children:["This is a single call that returns the ",(0,n.jsx)(t.strong,{children:"master list of FastX hotels"})," available to you in the Travelgate Marketplace. It includes all unique hotels offered by the Sellers you are connected to. As you add new Sellers, any new properties they provide \u2014 not already offered by your other connected Suppliers \u2014 are automatically included in your master list."]}),"\n",(0,n.jsxs)(t.p,{children:["To retrieve it, make a ",(0,n.jsx)(t.code,{children:"hotel list"})," call using your ",(0,n.jsx)(t.strong,{children:"FastX access"}),", which you can find in the ",(0,n.jsx)(t.em,{children:"MyConnections"})," section under the Seller ",(0,n.jsx)(t.strong,{children:"\u201CTravelgate\u201D"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["You can also receive the ",(0,n.jsx)(t.strong,{children:"GIATA code"})," associated with each hotel if you have activated ",(0,n.jsx)(t.a,{href:"/kb/connectivity-products/for-buyers/mapping-solutions/giata/giata-multicodes",children:"this functionality"}),"."]}),"\n",(0,n.jsx)(s,{query:i.ap,variables:i.MZ}),"\n",(0,n.jsx)(t.h3,{id:"2-hotel-list-by-supplier",children:"2. Hotel List by Supplier"}),"\n",(0,n.jsxs)(t.p,{children:["Travelgate maintains full transparency. In addition to FastX codes, you can also access each Supplier\u2019s static data. When you make a ",(0,n.jsx)(t.code,{children:"hotel list"})," call to a specific Supplier access, you\u2019ll receive:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The Supplier\u2019s ",(0,n.jsx)(t.strong,{children:"native hotel code"})," and hotel information."]}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.strong,{children:"FastX hotel code"})," in the ",(0,n.jsx)(t.code,{children:"mappings"})," node."]}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.strong,{children:"GIATA code"}),", if you have activated ",(0,n.jsx)(t.a,{href:"/kb/connectivity-products/for-buyers/mapping-solutions/giata/giata-multicodes",children:"this functionality"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"This allows you to keep your systems synchronized with both the standardized FastX codes and each Supplier\u2019s own identifiers."}),"\n",(0,n.jsx)(s,{query:i.ap,variables:i.bL}),"\n",(0,n.jsx)(t.h2,{id:"boards",children:"Boards"}),"\n",(0,n.jsxs)(t.p,{children:["To get the list of ",(0,n.jsx)(t.strong,{children:"FastX boards"}),", make a ",(0,n.jsx)(t.code,{children:"boards"})," call using your ",(0,n.jsx)(t.strong,{children:"FastX access"})," (available in ",(0,n.jsx)(t.em,{children:"MyConnections"})," under \u201CTravelgate\u201D). This will return the complete set of meal plans you\u2019ll encounter in the booking flow \u2014 all identified with standardized FastX codes and names."]}),"\n",(0,n.jsx)(s,{query:r.ZR,variables:r.O$}),"\n",(0,n.jsx)(t.h2,{id:"rooms",children:"Rooms"}),"\n",(0,n.jsxs)(t.p,{children:["With FastX, Travelgate standardizes room names and codes across all connected Suppliers. We process each Supplier\u2019s room descriptions in real time and convert them into ",(0,n.jsx)(t.strong,{children:"unique FastX room codes and standardized names"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["When you perform a ",(0,n.jsx)(t.strong,{children:"search"})," call, you\u2019ll receive both:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.strong,{children:"FastX standardized room code and name"})]}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.strong,{children:"Supplier\u2019s native code and description"})]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"This ensures a consistent experience across the Marketplace while keeping full visibility into each Supplier\u2019s original data."})]})}function p(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},89026:function(e,t,s){s.d(t,{O$:()=>a,ZF:()=>i,ZR:()=>o,aK:()=>n});let o=`query ($criteria: HotelXBoardQueryInput!) {
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
}`,n=`{
	"criteria": {
		"access": "5647"
	}
}`,a=`{
	"criteria": {
		"access": "34538"
	}
}`,i=`{
	"criteria": {
		"access": "2",
		"boardCodes": [
			"12",
			"256"
		]
	}
}`},56128:function(e,t,s){s.d(t,{MZ:()=>l,ap:()=>o,bL:()=>n,nS:()=>a,we:()=>r,y:()=>i});let o=`query ($criteriaHotels: HotelXHotelListInput!, $token: String) {
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
  }`,n=`{
	"criteriaHotels": {
		"access": "2",
		"maxSize": 25
	},
	"token": ""
}`,a=`{
	"criteriaHotels": {
		"access": "34538",
		"countries": [
			"GR"
		],
		"maxSize": 5
	},
	"token": ""
}`,i=`{
	"criteriaHotels": {
		"access": "2",
		"destinationCodes": [
			"101402"
		],
		"maxSize": 5
	},
	"token": ""
}`,r=`{
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
}`},50065:function(e,t,s){s.d(t,{Z:()=>r,a:()=>i});var o=s(67294);let n={},a=o.createContext(n);function i(e){let t=o.useContext(a);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);
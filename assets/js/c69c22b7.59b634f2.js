"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2482],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41519:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>k,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a="query ($criteria: HotelXRoomQueryInput!, $token: String) {\n\thotelX {\n\t  rooms(criteria: $criteria, token: $token) {\n\t\t\t  edges {\n\t\t\t\t  node {\n\t\t\t\t\t  createdAt\n\t\t\t\t\t  updatedAt\n\t\t\t\t\t  roomData {\n\t\t\t\t\t\t  roomCode\n\t\t\t\t\t\t  texts {\n\t\t\t\t\t\t\t  text\n\t\t\t\t\t\t\t  language\n\t\t\t\t\t\t  }\n\t\t\t\t\t\t  views {\n\t\t\t\t\t\t\t  viewCode\n\t\t\t\t\t\t\t  texts {\n\t\t\t\t\t\t\t\t  text\n\t\t\t\t\t\t\t\t  language\n\t\t\t\t\t\t\t  }\n\t\t\t\t\t\t  }\n\t\t\t\t\t\t  medias {\n\t\t\t\t\t\t\t  code\n\t\t\t\t\t\t\t  url\n\t\t\t\t\t\t\t  texts {\n\t\t\t\t\t\t\t\t  text\n\t\t\t\t\t\t\t\t  language\n\t\t\t\t\t\t\t  }\n\t\t\t\t\t\t  }\n\t\t\t\t\t\t  beds {\n\t\t\t\t\t\t\t  type\n\t\t\t\t\t\t\t  count\n\t\t\t\t\t\t\t  shared\n\t\t\t\t\t\t  }\n\t\t\t\t\t  }\n\t\t\t\t  }\n\t\t\t  }\n\t\t  }\n\t  }\n  }",i='{\n\t"criteria": {\n\t\t"access": "2",\n\t\t"maxSize": 15\n\t},\n\t"token": ""\n}',l='{\n\t"criteria": {\n\t\t"access": "2",\n\t\t"maxSize": 15,\n\t\t"roomCodes": [\n\t\t\t"2269"\n\t\t]\n\t},\n\t"token": ""\n}',s={sidebar_position:5},p="Rooms",u={unversionedId:"apis/for-buyers/hotel-x-pull-buyers-api/content/rooms",id:"apis/for-buyers/hotel-x-pull-buyers-api/content/rooms",title:"Rooms",description:"The Rooms Query returns a comprehensive room list from a supplier's access that may include translations to other languages, granting you access to all the rooms configured by the Seller for a given set of credentials. The returned fields include:",source:"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/rooms.mdx",sourceDirName:"apis/for-buyers/hotel-x-pull-buyers-api/content",slug:"/apis/for-buyers/hotel-x-pull-buyers-api/content/rooms",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/rooms",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/rooms.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Destinations",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/destinations"},next:{title:"Boards",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/boards"}},m={},c=[{value:"Inputs",id:"inputs",level:2},{value:"1. Criteria",id:"1-criteria",level:3},{value:"2. Token",id:"2-token",level:3},{value:"Requests Examples",id:"requests-examples",level:3},{value:"Search for the complete rooms list from a supplier",id:"search-for-the-complete-rooms-list-from-a-supplier",level:4},{value:"Search for a specific room list from a supplier",id:"search-for-a-specific-room-list-from-a-supplier",level:4},{value:"Response",id:"response",level:2},{value:"Mapping",id:"mapping",level:3}],d=(h="GraphqlSample",function(e){return console.warn("Component "+h+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var h;const y={toc:c},f="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,o.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rooms"},"Rooms"),(0,r.kt)("p",null,"The Rooms Query returns a comprehensive room list from a supplier's access that may include translations to other languages, granting you access to all the rooms configured by the Seller for a given set of credentials. The returned fields include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"roomCode")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"source")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"occupancies")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"amenities")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"medias")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"views")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"beds"))),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("p",null,"When creating your rooms query, you have two different inputs to fill based on your specific needs:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Criteria"),(0,r.kt)("li",{parentName:"ol"},"Token")),(0,r.kt)("h3",{id:"1-criteria"},"1. Criteria"),(0,r.kt)("p",null,"This query offers versatility, with certain fields marked as mandatory (",(0,r.kt)("inlineCode",{parentName:"p"},"access"),") and others as optional (",(0,r.kt)("inlineCode",{parentName:"p"},"roomCodes"),"). This flexibility empowers you to create a personalized Rooms Query, tailoring the requested fields to your specific needs. Consequently, the response will only include information that is highly relevant to you, streamlining the retrieval process and ensuring the data you receive meets your exact requirements."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "criteria": {\n        "access": "2",\n        "maxSize": 5,\n        "roomCodes": [\n            "2269"\n        ]\n    },\n    "token": ""\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Mandatory criteria")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"access"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Optional criteria")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"roomCodes")," (Search by room type)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"maxSize")," (Paginate response)")),(0,r.kt)("h3",{id:"2-token"},"2. Token"),(0,r.kt)("p",null,"The Hotel-X API provides paginated responses to handle cases where the number of rooms from the selected provider exceeds 5000. The default response page contains a maximum of 5000 rooms, but you can specify the number of objects returned per page using the ",(0,r.kt)("inlineCode",{parentName:"p"},"maxSize")," field in the query criteria to retrieve between 1 and 5000 rooms."),(0,r.kt)("p",null,"To include the token in your request, all you need to do is:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the ",(0,r.kt)("inlineCode",{parentName:"p"},"token")," object to the fields and arguments. Moreover, you have the flexibility to specify the number of objects returned per page by utilizing the ",(0,r.kt)("inlineCode",{parentName:"p"},"maxSize")," tag in your arguments.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After receiving a response, you will only receive a portion of the full list. To access the next page, simply copy the ",(0,r.kt)("inlineCode",{parentName:"p"},"token")," tag from the response and include it in your next request. This will allow you to obtain a new set of objects in the following response.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Repeat these steps until the ",(0,r.kt)("inlineCode",{parentName:"p"},"token")," is no longer included in the response, the query will return \u201cRooms not found\u201d."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Query variables")),(0,r.kt)("p",null,"First, in your rooms query you won't indicate any ",(0,r.kt)("inlineCode",{parentName:"p"},"token"),"input:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "criteria" : {\n        "access" : "2",\n        "maxSize" : 5\n    },\n    "token" : ""\n}\n')),(0,r.kt)("p",null,"You will obtain a response with 5 rooms per page:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n    "data": {\n        "hotelX": {\n            "rooms": {\n                "token": "FGluY2x1ZGVfY29udGV4dF91dWlkDnF1ZXJ5FGhlbkZldGNoAhZMN2w2SlZYaVNaaXhYeXHwdm1GWjlBAAAAAATLRLQWeXZ3cU12MkpSbTY3WkF6QzJraWJWZxZFX3NZYkQ1UFN6fWFaQjlXMXBSbmhBAAAAABCavEoWWFltUDMwVXRUT0ctUWY5Y3FDX39vQQ=="\n                "edges": [\n')),(0,r.kt)("p",null,"This token should be used as input in your next rooms query, inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"token")," input:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "criteria" : {\n        "access" : "2",\n        "maxSize" : 5\n    },\n    "token" : "FGluY2x1ZGVfY29udGV4dF91dWlkDnF1ZXJ5FGhlbkZldGNoAhZMN2w2SlZYaVNaaXhYeXHwdm1GWjlBAAAAAATLRLQWeXZ3cU12MkpSbTY3WkF6QzJraWJWZxZFX3NZYkQ1UFN6fWFaQjlXMXBSbmhBAAAAABCavEoWWFltUDMwVXRUT0ctUWY5Y3FDX39vQQ=="\n}\n')),(0,r.kt)("h3",{id:"requests-examples"},"Requests Examples"),(0,r.kt)("h4",{id:"search-for-the-complete-rooms-list-from-a-supplier"},"Search for the complete rooms list from a supplier"),(0,r.kt)(d,{query:a,variables:i,mdxType:"GraphqlSample"}),(0,r.kt)("h4",{id:"search-for-a-specific-room-list-from-a-supplier"},"Search for a specific room list from a supplier"),(0,r.kt)("p",null,"When utilizing the Rooms List Query, for more personalized results, filter specific rooms based on your interests. For example, to focus solely on the twin room inventory of a Seller, add the ",(0,r.kt)("inlineCode",{parentName:"p"},"roomCodes"),' field with "2269" (this is the code that this Seller has assigned for the "Double Standard" room) in your criteria. This will provide you with highly targeted and relevant information.'),(0,r.kt)(d,{query:a,variables:l,mdxType:"GraphqlSample"}),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The amount of information and content returned might vary between Sellers."),(0,r.kt)("p",{parentName:"admonition"},"Hotel-X supports all languages, but receiving room descriptions in one or another depends entirely on the languages supported by the Seller.")),(0,r.kt)("h3",{id:"mapping"},"Mapping"),(0,r.kt)("p",null,"When utilizing the Room List Query, you will receive the Seller's native room codes. Connecting with a new Seller doesn't always mean that you are interested in the whole rooms portfolio, maybe you are just interested in some specific rooms. Since mapping depends entirely on your side, you can map only those rooms you are interested in."),(0,r.kt)("p",null,"Additionally, you can upload your own mapping files to our FTP (credentials should be provided by our Customer Care team), and we will use your own room codes in the booking flow."),(0,r.kt)("p",null,"You can find all the necessary information in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping"},"mapping section"),"."))}k.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[15699],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),c=n,m=d["".concat(l,".").concat(c)]||d[c]||h[c]||o;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},17912:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const o={sidebar_position:6},i="What headers should I add to my Hotel-X requests?",s={unversionedId:"our-products/are-you-a-buyer/getting-started-with-hotel-x-buyers-api/what-headers-should-i-add-to-my-hotel-x-requests",id:"our-products/are-you-a-buyer/getting-started-with-hotel-x-buyers-api/what-headers-should-i-add-to-my-hotel-x-requests",title:"What headers should I add to my Hotel-X requests?",description:"What are the different types of headers that can be included in a Hotel-X request?\ud83d\udca1",source:"@site/kb/our-products/are-you-a-buyer/getting-started-with-hotel-x-buyers-api/what-headers-should-i-add-to-my-hotel-x-requests.md",sourceDirName:"our-products/are-you-a-buyer/getting-started-with-hotel-x-buyers-api",slug:"/our-products/are-you-a-buyer/getting-started-with-hotel-x-buyers-api/what-headers-should-i-add-to-my-hotel-x-requests",permalink:"/kb/our-products/are-you-a-buyer/getting-started-with-hotel-x-buyers-api/what-headers-should-i-add-to-my-hotel-x-requests",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"kbSidebar",previous:{title:"Resources and Best Practices",permalink:"/kb/our-products/are-you-a-buyer/getting-started-with-hotel-x-buyers-api/resources-and-best-practices"},next:{title:"What languages does Hotel-X API support?",permalink:"/kb/our-products/are-you-a-buyer/getting-started-with-hotel-x-buyers-api/what-languages-does-hotel-x-api-support"}},l={},u=[{value:"What are the different types of headers that can be included in a Hotel-X request?\ud83d\udca1",id:"what-are-the-different-types-of-headers-that-can-be-included-in-a-hotel-x-request",level:3},{value:"Which headers are mandatory for my Hotel-X request?\ud83d\udd0e",id:"which-headers-are-mandatory-for-my-hotel-x-request",level:3},{value:"Which headers are optional for my Hotel-X request?\ud83d\udd0e",id:"which-headers-are-optional-for-my-hotel-x-request",level:3}],p={toc:u},d="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"what-headers-should-i-add-to-my-hotel-x-requests"},"What headers should I add to my Hotel-X requests?"),(0,n.kt)("h3",{id:"what-are-the-different-types-of-headers-that-can-be-included-in-a-hotel-x-request"},"What are the different types of headers that can be included in a Hotel-X request?\ud83d\udca1"),(0,n.kt)("p",null,"There are 2 different types of headers:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Mandatory headers"),": they should be added to your Hotel-X request."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Optional headers"),": they are not mandatory but might be added to your Hotel-X, for instance, to improve performance.")),(0,n.kt)("h3",{id:"which-headers-are-mandatory-for-my-hotel-x-request"},"Which headers are mandatory for my Hotel-X request?\ud83d\udd0e"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Gzip Compression"),(0,n.kt)("br",{parentName:"p"}),"\n","In order to increase performance and save bandwidth, all the live traffic must enable GZIP compression in the HTTP header:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"```\nimage\n```\n")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"API Key Authorization"),(0,n.kt)("br",{parentName:"p"}),"\n","Authentication is necessary for every request made to the TravelgateX GraphQL API. To authenticate the user agent with the server, an API Key must be included in the HTTP Authorization request header."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"```\nimage\n```\n")))),(0,n.kt)("h3",{id:"which-headers-are-optional-for-my-hotel-x-request"},"Which headers are optional for my Hotel-X request?\ud83d\udd0e"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Keep-Alive"),(0,n.kt)("br",{parentName:"p"}),"\n","To enhance performance and optimize response times in Search, you have the option to include the Connection: keep-alive header in all your transactions."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"```\nimage\n```\n")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"GraphQL To Rest"),(0,n.kt)("br",{parentName:"li"}),"To ensure optimal performance when expecting more than 5,000 options per search response, we recommend utilizing our GraphQL to Rest feature. To implement this feature, please follow the steps below:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"- Verify that your JSON parser is updated to the latest schema, as Array Fields that were previously defined as single Scalars may result in unexpected JSON marshalling.\n- Include the following HTTP header in your request(s): TGX-Content-Type: graphqlx/json.\n- Test a sample call for each request using the provided header.\n")),"Sit back and enjoy the enhanced performance!")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Don't forget to explore our ",(0,n.kt)("a",{parentName:"p",href:"https://api.travelgatex.com/playground"},"Hotel-X API Schema and Playground")," for comprehensive details and additional Documentation!\ud83d\ude80")))}h.isMDXComponent=!0}}]);
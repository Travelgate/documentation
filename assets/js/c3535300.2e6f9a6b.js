/*! For license information please see c3535300.2e6f9a6b.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1057],{5302:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=r(74848),s=r(28453);const a={sidebar_position:6},o="Hotel-X API Headers",i={id:"our-products/are-you-a-buyer/getting-started-with-hotel-x-buyers-api/what-headers-should-i-add-to-my-hotel-x-requests",title:"Hotel-X API Headers",description:"What are the different types of headers that can be included in a Hotel-X request?\ud83d\udca1",source:"@site/kb/our-products/are-you-a-buyer/getting-started-with-hotel-x-buyers-api/what-headers-should-i-add-to-my-hotel-x-requests.md",sourceDirName:"our-products/are-you-a-buyer/getting-started-with-hotel-x-buyers-api",slug:"/our-products/are-you-a-buyer/getting-started-with-hotel-x-buyers-api/what-headers-should-i-add-to-my-hotel-x-requests",permalink:"/kb/our-products/are-you-a-buyer/getting-started-with-hotel-x-buyers-api/what-headers-should-i-add-to-my-hotel-x-requests",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"kbSidebar",previous:{title:"Resources and Best Practices",permalink:"/kb/our-products/are-you-a-buyer/getting-started-with-hotel-x-buyers-api/resources-and-best-practices"},next:{title:"Hotel-X API Languages",permalink:"/kb/our-products/are-you-a-buyer/getting-started-with-hotel-x-buyers-api/what-languages-does-hotel-x-api-support"}},h={},d=[{value:"What are the different types of headers that can be included in a Hotel-X request?\ud83d\udca1",id:"what-are-the-different-types-of-headers-that-can-be-included-in-a-hotel-x-request",level:3},{value:"Which headers are mandatory for my Hotel-X request?",id:"which-headers-are-mandatory-for-my-hotel-x-request",level:3},{value:"Which headers are optional for my Hotel-X request?",id:"which-headers-are-optional-for-my-hotel-x-request",level:3}];function l(e){const t={a:"a",admonition:"admonition",br:"br",h1:"h1",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"hotel-x-api-headers",children:"Hotel-X API Headers"}),"\n",(0,n.jsx)(t.h3,{id:"what-are-the-different-types-of-headers-that-can-be-included-in-a-hotel-x-request",children:"What are the different types of headers that can be included in a Hotel-X request?\ud83d\udca1"}),"\n",(0,n.jsx)(t.p,{children:"There are 2 different types of headers:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Mandatory headers"}),": they should be added to your Hotel-X request."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Optional headers"}),": they are not mandatory but might be added to your Hotel-X, for instance, to improve performance."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"which-headers-are-mandatory-for-my-hotel-x-request",children:"Which headers are mandatory for my Hotel-X request?"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Gzip Compression"}),(0,n.jsx)(t.br,{}),"\n","In order to increase performance and save bandwidth, all the live traffic must enable GZIP compression in the HTTP header:",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.img,{src:"https://storage.travelgate.com/kbase/hotelx_headers_1.jpg",alt:"hotelx_headers_1"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"API Key Authorization"}),(0,n.jsx)(t.br,{}),"\n","Authentication is necessary for every request made to the TravelgateX GraphQL API. To authenticate the user agent with the server, an API Key must be included in the HTTP Authorization request header.\n",(0,n.jsx)(t.img,{src:"https://storage.travelgate.com/kbase/hotelx_headers_2.jpg",alt:"hotelx_headers_2"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"which-headers-are-optional-for-my-hotel-x-request",children:"Which headers are optional for my Hotel-X request?"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Keep-Alive"}),(0,n.jsx)(t.br,{}),"\n","To enhance performance and optimize response times in Search, you have the option to include the Connection: keep-alive header in all your transactions.\n",(0,n.jsx)(t.img,{src:"https://storage.travelgate.com/kbase/hotelx_headers_3.jpg",alt:"hotelx_headers_3"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"GraphQL To Rest"}),(0,n.jsx)(t.br,{}),"\n","To ensure optimal performance when expecting more than 5,000 options per search response, we recommend utilizing our GraphQL to Rest feature. To implement this feature, please follow the steps below:"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Verify that your JSON parser is updated to the latest schema, as Array Fields that were previously defined as single Scalars may result in unexpected JSON marshalling."}),"\n",(0,n.jsx)(t.li,{children:"Include the following HTTP header in your request(s): TGX-Content-Type: graphqlx/json."}),"\n",(0,n.jsx)(t.li,{children:"Test a sample call for each request using the provided header."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Sit back and enjoy the enhanced performance!"})}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["Don't forget to explore our ",(0,n.jsx)(t.a,{href:"/playground",children:"Playground"})," for comprehensive details and additional Documentation!\ud83d\ude80"]})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},21020:(e,t,r)=>{var n=r(96540),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var n,a={},d=null,l=null;for(n in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)o.call(t,n)&&!h.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:s,type:e,key:d,ref:l,props:a,_owner:i.current}}t.Fragment=a,t.jsx=d,t.jsxs=d},74848:(e,t,r)=>{e.exports=r(21020)},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>i});var n=r(96540);const s={},a=n.createContext(s);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);
/*! For license information please see d6984870.3861a4a0.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[25207],{62574:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var s=n(74848),t=n(28453);const a={title:"GraphQL API",sidebar_position:3},i="Inventory Set Up GraphQL API",o={id:"apis/for-sellers/inventory-sellers/inventory-push-graphql-api/making-requests/graphql-api",title:"GraphQL API",description:"Unlike XML Soap APIs, GraphQL allows to request and receive only the necessary data. Our Gateway, written in NodeJS, is the sole endpoint for all our APIs.",source:"@site/docs/apis/for-sellers/inventory-sellers/inventory-push-graphql-api/making-requests/graphql-api.mdx",sourceDirName:"apis/for-sellers/inventory-sellers/inventory-push-graphql-api/making-requests",slug:"/apis/for-sellers/inventory-sellers/inventory-push-graphql-api/making-requests/graphql-api",permalink:"/docs/apis/for-sellers/inventory-sellers/inventory-push-graphql-api/making-requests/graphql-api",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-sellers/inventory-sellers/inventory-push-graphql-api/making-requests/graphql-api.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"GraphQL API",sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Request Headers",permalink:"/docs/apis/for-sellers/inventory-sellers/inventory-push-graphql-api/making-requests/request-headers"},next:{title:"Overview",permalink:"/docs/apis/for-sellers/inventory-sellers/inventory-push-graphql-api/product-load/overview"}},l={},d=[{value:"Queries and Mutations",id:"queries-and-mutations",level:3},{value:"Queries",id:"queries",level:4},{value:"Mutations",id:"mutations",level:4},{value:"GraphQL Playground",id:"graphql-playground",level:3},{value:"GraphQL Resources",id:"graphql-resources",level:3}];function p(e){const r={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"inventory-set-up-graphql-api",children:"Inventory Set Up GraphQL API"})}),"\n",(0,s.jsx)(r.p,{children:"Unlike XML Soap APIs, GraphQL allows to request and receive only the necessary data. Our Gateway, written in NodeJS, is the sole endpoint for all our APIs."}),"\n",(0,s.jsx)(r.h3,{id:"queries-and-mutations",children:"Queries and Mutations"}),"\n",(0,s.jsx)(r.p,{children:"There are two types of allowed operations in the Travelgate GraphQL APIs:"}),"\n",(0,s.jsx)(r.h4,{id:"queries",children:"Queries"}),"\n",(0,s.jsxs)(r.p,{children:["Queries are \u201cread only\u201d and are used to get data from our system. For example, getting a list of hotels created in our Inventory is a ",(0,s.jsx)(r.code,{children:"Query"}),"."]}),"\n",(0,s.jsx)(r.p,{children:"This operation reads values from the server using a GraphQL Object and returns JSON text as a response."}),"\n",(0,s.jsx)(r.h4,{id:"mutations",children:"Mutations"}),"\n",(0,s.jsxs)(r.p,{children:["Mutations change, add or delete the data in our system. For example, creating a new rate for a existing hotel is a ",(0,s.jsx)(r.code,{children:"Mutation"}),"."]}),"\n",(0,s.jsx)(r.p,{children:"This operation can include inserting a new object in a database, or deleting, or updating a data record."}),"\n",(0,s.jsx)(r.h3,{id:"graphql-playground",children:"GraphQL Playground"}),"\n",(0,s.jsxs)(r.p,{children:["Get to know our ",(0,s.jsx)(r.a,{href:"/playground/",children:"API Playground"})," \u2013 a fun and interactive tool for getting to know our Inventory Set Up GraphQL API! In the API Playground, you can easily customize your API requests by adding headers and variables. As you start typing your query, our Playground will even suggest fields and options, making it a breeze to build your queries."]}),"\n",(0,s.jsxs)(r.p,{children:["To learn more about our data model and discover all the query possibilities, you can also explore our ",(0,s.jsx)(r.a,{href:"/api/",children:"GraphQL API Reference"}),". And don't forget, you can tailor the response to your needs by setting query variables and fields. This way, you'll only get the information you're interested in."]}),"\n",(0,s.jsx)(r.h3,{id:"graphql-resources",children:"GraphQL Resources"}),"\n",(0,s.jsx)(r.p,{children:"GraphQL is a powerful query language and it offers several advantages for developers when it comes to flexibility and efficiency."}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"What is GraphQL?"})}),"\n",(0,s.jsx)(r.p,{children:"GraphQL is an open-source data query language and runtime for your API. It allows you to request only the data you need, making your API calls more efficient and reducing over-fetching or under-fetching of data."}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Advantages of GraphQL:"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Precise Data Retrieval:"})," With GraphQL, you can request specific fields and related data, avoiding overloading your app with unnecessary information."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Reduced API Calls:"})," GraphQL enables you to retrieve multiple types of data in a single request, reducing the number of API calls."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Flexibility:"})," Clients can define their data requirements, allowing for more flexible and dynamic applications."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Backward Compatibility:"})," Adding new fields or types won't break existing queries, ensuring backward compatibility."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Resources to Learn GraphQL:"})}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsxs)(r.strong,{children:[(0,s.jsx)(r.a,{href:"https://graphql.org/learn/",children:"Official GraphQL Documentation"}),":"]})," Start with the official documentation to understand the fundamentals of GraphQL. It provides a step-by-step guide and examples."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsxs)(r.strong,{children:[(0,s.jsx)(r.a,{href:"https://graphql.org/code/",children:"GraphQL Code Libraries"}),":"]})," Choose the programming language that suits your project best and explore the available GraphQL libraries to simplify API integration."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsxs)(r.strong,{children:[(0,s.jsx)(r.a,{href:"https://www.howtographql.com/",children:"How to GraphQL"}),":"]})," This comprehensive tutorial covers everything you need to know about GraphQL, from basic concepts to advanced techniques. It's a great resource to become a GraphQL pro."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},21020:(e,r,n)=>{var s=n(96540),t=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,n){var s,a={},d=null,p=null;for(s in void 0!==n&&(d=""+n),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(p=r.ref),r)i.call(r,s)&&!l.hasOwnProperty(s)&&(a[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===a[s]&&(a[s]=r[s]);return{$$typeof:t,type:e,key:d,ref:p,props:a,_owner:o.current}}r.Fragment=a,r.jsx=d,r.jsxs=d},74848:(e,r,n)=>{e.exports=n(21020)},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>o});var s=n(96540);const t={},a=s.createContext(t);function i(e){const r=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);
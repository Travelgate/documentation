"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6182],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=i,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},50097:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={sidebar_position:3},a="Key concepts",s={unversionedId:"get-started/key-concepts",id:"get-started/key-concepts",title:"Key concepts",description:"In order to successfully embark on the journey of finding and booking hotel rooms through the Travelgate APIs and APPs, it is essential to familiarize yourself with a few important concepts. By understanding these fundamental ideas, you will gain the necessary knowledge and skills to navigate through this process effortlessly.",source:"@site/docs/get-started/key-concepts.md",sourceDirName:"get-started",slug:"/get-started/key-concepts",permalink:"/docs/get-started/key-concepts",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/get-started/key-concepts.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Connectivity products",permalink:"/docs/get-started/connectivity-products"},next:{title:"Overview",permalink:"/docs/apis/overview"}},l={},c=[{value:"Seller",id:"seller",level:3},{value:"<code>Supplier</code>",id:"supplier",level:3},{value:"Buyer",id:"buyer",level:3},{value:"<code>Client</code>",id:"client",level:3},{value:"<code>Context</code>",id:"context",level:3},{value:"<code>Access</code>",id:"access",level:3},{value:"<code>API Key</code>",id:"api-key",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"key-concepts"},"Key concepts"),(0,i.kt)("p",null,"In order to successfully embark on the journey of finding and booking hotel rooms through the Travelgate APIs and APPs, it is essential to familiarize yourself with a few important concepts. By understanding these fundamental ideas, you will gain the necessary knowledge and skills to navigate through this process effortlessly."),(0,i.kt)("h3",{id:"seller"},"Seller"),(0,i.kt)("p",null,"A Seller uses the TravelgateX platform to sell travel services such as hotels for their customers. Sellers include DMCs, channel managers, hotels, tour operators, niche travel service providers."),(0,i.kt)("h3",{id:"supplier"},(0,i.kt)("inlineCode",{parentName:"h3"},"Supplier")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"supplier")," refers to the API integration used by the Seller to establish a connection, enabling the Seller to offer accommodation services. Each ",(0,i.kt)("inlineCode",{parentName:"p"},"supplier")," is assigned a unique supplier code, which serves as a distinct identifier. It's important to note that one Seller can have multiple supplier codes. For instance, a Seller might have separate supplier codes if they provide their product via both PULL and PUSH integrations at the same time."),(0,i.kt)("h3",{id:"buyer"},"Buyer"),(0,i.kt)("p",null,"A Buyer uses the TravelgateX platform to book travel services such as hotels for their customers. Buyers include online travel agents, tour operators, niche travel service providers, and travel and pricing apps."),(0,i.kt)("h3",{id:"client"},(0,i.kt)("inlineCode",{parentName:"h3"},"Client")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"client")," is a tag or label that Buyers use to categorize their traffic. The ",(0,i.kt)("inlineCode",{parentName:"p"},"client")," is the entity that purchases accommodation services via the Hotel-X API. These codes also ensure that the business has a designated configuration assigned to it."),(0,i.kt)("p",null,"You can have multiple client codes, for instance, to separate traffic for B2B and B2C (e.g., client_b2b, client_b2c). All accesses work with any client code, so choose according to your needs. You can check this information in your ",(0,i.kt)("a",{parentName:"p",href:"https://app.travelgatex.com/connections/settings"},"Connections Settings"),"."),(0,i.kt)("h3",{id:"context"},(0,i.kt)("inlineCode",{parentName:"h3"},"Context")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Context")," is a term used to describe the content codes used by both Buyers and Sellers. Every Supplier has their own unique ",(0,i.kt)("inlineCode",{parentName:"p"},"context"),", which consists of specific codes for items like hotels, boards, and rooms. Buyers can either adopt their own ",(0,i.kt)("inlineCode",{parentName:"p"},"context")," or the ones provided by the Supplier. When employing their own ",(0,i.kt)("inlineCode",{parentName:"p"},"context"),", Buyers can either apply their own codes or engage a content provider (e.g. GIATA), in both cases creating their own ",(0,i.kt)("inlineCode",{parentName:"p"},"context")," using our ",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping"},"Mapping Plugin"),"."),(0,i.kt)("h3",{id:"access"},(0,i.kt)("inlineCode",{parentName:"h3"},"Access")),(0,i.kt)("p",null,"An ",(0,i.kt)("inlineCode",{parentName:"p"},"access")," is the set of credentials and the authentication configuration that enables a Buyer to connect to a Seller. It is used to differentiate among Sellers and also to filter different credentials and configurations from the same Seller (e.g. B2B and B2C feeds). "),(0,i.kt)("p",null,"For Hotel-X implementation and testing purposes, we recommend using the following\naccesses:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"TGX Test Seller"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"Access")," 2 with ",(0,i.kt)("inlineCode",{parentName:"li"},"context")," HOTELTEST"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Smyrooms Test"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"Access")," 5647 with ",(0,i.kt)("inlineCode",{parentName:"li"},"context")," LOGITEST")),(0,i.kt)("p",null,"These have already been activated on your account and are ready to use."),(0,i.kt)("h3",{id:"api-key"},(0,i.kt)("inlineCode",{parentName:"h3"},"API Key")),(0,i.kt)("p",null,"An ",(0,i.kt)("inlineCode",{parentName:"p"},"Apikey")," is a unique alphanumeric code that serves as a form of authentication required for accessing Hotel-X API. This key must be included in the HTTP Authorization request header to verify and authenticate the user agent with the server. It acts as a secure identifier, ensuring that only authorized users can make requests and access the API's functionalities. You can find your API Key on the Travelgate website in Connections > ",(0,i.kt)("a",{parentName:"p",href:"https://app.travelgatex.com/connections/settings"},"Connections Settings"),"."))}d.isMDXComponent=!0}}]);
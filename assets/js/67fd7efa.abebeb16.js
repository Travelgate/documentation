"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[24689],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),u=n,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return r?a.createElement(f,i(i({ref:t},l),{},{components:r})):a.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},61685:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={sidebar_position:4},i="Understanding Data Discrepancies",s={unversionedId:"apps/monitoring-apps/stats/understanding-data-discrepancies",id:"apps/monitoring-apps/stats/understanding-data-discrepancies",title:"Understanding Data Discrepancies",description:"Why do the statistics in my system differ from the data provided by TravelgateX?\ud83d\udd22",source:"@site/kb/apps/monitoring-apps/stats/understanding-data-discrepancies.mdx",sourceDirName:"apps/monitoring-apps/stats",slug:"/apps/monitoring-apps/stats/understanding-data-discrepancies",permalink:"/kb/apps/monitoring-apps/stats/understanding-data-discrepancies",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"kbSidebar",previous:{title:"'Search Traffic Type'",permalink:"/kb/apps/monitoring-apps/stats/what-does-search-traffic-mean"},next:{title:"Stats: WhatsApp and Slack Bot (Beta)",permalink:"/kb/apps/monitoring-apps/stats/stats-whatsapp-slackbot"}},p={},c=[{value:"Why do the statistics in my system differ from the data provided by TravelgateX?\ud83d\udd22",id:"why-do-the-statistics-in-my-system-differ-from-the-data-provided-by-travelgatex",level:3}],l=(d="TipContactCustomerCare",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var d;const m={toc:c},u="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"understanding-data-discrepancies"},"Understanding Data Discrepancies"),(0,n.kt)("h3",{id:"why-do-the-statistics-in-my-system-differ-from-the-data-provided-by-travelgatex"},"Why do the statistics in my system differ from the data provided by TravelgateX?\ud83d\udd22"),(0,n.kt)("p",null,"We often receive inquiries from our Partners regarding discrepancies between the data in our Stats App and their own system's information. Specifically, they notice variations in the number of requests per method. As you know, TravelgateX Booking Flow involves the following methods:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Search")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Quote")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Book")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"However, it's worth mentioning that certain integrations developed at TravelgateX (not all of them) require ",(0,n.kt)("strong",{parentName:"p"},"multiple transactions per method to accommodate the Seller's API workflow"),". For example, our Quote method may need 2 or 3 calls to the Seller's system to verify availability, rates, etc."))),(0,n.kt)("p",null,"Despite these additional calls to the Seller's system, our Stats will only reflect a single transaction for that specific method (TravelgateX method transaction). This can lead to differences between the transaction count in our Stats and the actual number of calls made to the Seller's system."),(0,n.kt)(l,{mdxType:"TipContactCustomerCare"}))}f.isMDXComponent=!0}}]);
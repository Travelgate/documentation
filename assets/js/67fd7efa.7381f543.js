"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[24689],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),u=a,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},57321:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:4},i="Understanding Data Discrepancies",s={unversionedId:"apps/monitoring-apps/stats/understanding-data-discrepancies",id:"apps/monitoring-apps/stats/understanding-data-discrepancies",title:"Understanding Data Discrepancies",description:"Why do the statistics in my system differ from the data provided by TravelgateX?\ud83d\udd22",source:"@site/kb/apps/monitoring-apps/stats/understanding-data-discrepancies.mdx",sourceDirName:"apps/monitoring-apps/stats",slug:"/apps/monitoring-apps/stats/understanding-data-discrepancies",permalink:"/kb/apps/monitoring-apps/stats/understanding-data-discrepancies",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"kbSidebar",previous:{title:"How to Differentiate between Traffic Types",permalink:"/kb/apps/monitoring-apps/stats/what-does-search-traffic-mean"},next:{title:"Stats: WhatsApp and Slack Bot (Beta)",permalink:"/kb/apps/monitoring-apps/stats/stats-whatsapp-slackbot"}},p={},c=[{value:"Why do the statistics in my system differ from the data provided by TravelgateX?\ud83d\udd22",id:"why-do-the-statistics-in-my-system-differ-from-the-data-provided-by-travelgatex",level:3}],l=(d="TipContactCustomerCare",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var d;const m={toc:c},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"understanding-data-discrepancies"},"Understanding Data Discrepancies"),(0,a.kt)("h3",{id:"why-do-the-statistics-in-my-system-differ-from-the-data-provided-by-travelgatex"},"Why do the statistics in my system differ from the data provided by TravelgateX?\ud83d\udd22"),(0,a.kt)("p",null,"We often receive inquiries from our Partners regarding discrepancies between the data in our Stats App and their own system's information. Specifically, they notice variations in the number of requests per method. As you know, TravelgateX Booking Flow involves the following methods:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Search")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Quote")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Book")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"However, it's worth mentioning that certain integrations developed at TravelgateX (not all of them) require ",(0,a.kt)("strong",{parentName:"p"},"multiple transactions per method to accommodate the Seller's API workflow"),". For example, our Quote method may need 2 or 3 calls to the Seller's system to verify availability, rates, etc."))),(0,a.kt)("p",null,"Despite these additional calls to the Seller's system, our Stats will only reflect a single transaction for that specific method (TravelgateX method transaction). This can lead to differences between the transaction count in our Stats and the actual number of calls made to the Seller's system."),(0,a.kt)(l,{mdxType:"TipContactCustomerCare"}))}f.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[79711],{3905:(r,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>m});var o=t(67294);function n(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function a(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,o)}return t}function i(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){n(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function s(r,e){if(null==r)return{};var t,o,n=function(r,e){if(null==r)return{};var t,o,n={},a=Object.keys(r);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||(n[t]=r[t]);return n}(r,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(n[t]=r[t])}return n}var u=o.createContext({}),d=function(r){var e=o.useContext(u),t=e;return r&&(t="function"==typeof r?r(e):i(i({},e),r)),t},p=function(r){var e=d(r.components);return o.createElement(u.Provider,{value:e},r.children)},c="mdxType",l={inlineCode:"code",wrapper:function(r){var e=r.children;return o.createElement(o.Fragment,{},e)}},f=o.forwardRef((function(r,e){var t=r.components,n=r.mdxType,a=r.originalType,u=r.parentName,p=s(r,["components","mdxType","originalType","parentName"]),c=d(t),f=n,m=c["".concat(u,".").concat(f)]||c[f]||l[f]||a;return t?o.createElement(m,i(i({ref:e},p),{},{components:t})):o.createElement(m,i({ref:e},p))}));function m(r,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof r||n){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=r,s[c]="string"==typeof r?r:n,i[1]=s;for(var d=2;d<a;d++)i[d]=t[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},91147:(r,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=t(87462),n=(t(67294),t(3905));const a={sidebar_position:2},i="102 error - Provider error",s={unversionedId:"our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/error-provider",id:"our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/error-provider",title:"102 error - Provider error",description:"What does a 102 error mean?\ud83d\udca1",source:"@site/kb/our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/102-error-provider.md",sourceDirName:"our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings",slug:"/our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/error-provider",permalink:"/kb/our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/error-provider",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"kbSidebar",previous:{title:"101 error - System Exception",permalink:"/kb/our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/error-integration"},next:{title:"103 error - Too many requests to the supplier",permalink:"/kb/our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/too-many-requests"}},u={},d=[{value:"What does a 102 error mean?\ud83d\udca1",id:"what-does-a-102-error-mean",level:3},{value:"Example of a 102 error description: &quot;The start date must be a future date&quot;\ud83d\udd0e",id:"example-of-a-102-error-description-the-start-date-must-be-a-future-date",level:3},{value:"What can I do if I receive a 102 error in my response?\u2714\ufe0f",id:"what-can-i-do-if-i-receive-a-102-error-in-my-response\ufe0f",level:3}],p={toc:d},c="wrapper";function l(r){let{components:e,...t}=r;return(0,n.kt)(c,(0,o.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"102-error---provider-error"},"102 error - Provider error"),(0,n.kt)("h3",{id:"what-does-a-102-error-mean"},"What does a 102 error mean?\ud83d\udca1"),(0,n.kt)("p",null,"The 102 error is classified as ",(0,n.kt)("strong",{parentName:"p"},"provider error")," and it occurs when a Seller returns a particular code/description for an error, which is then transmitted to you in our response."),(0,n.kt)("p",null,"If the Seller does not provide an error description, it will be typified as a 102 error type without description."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<applicationErrors>\n    <code>provider_error_code</code>\n    <type>102</type>\n    <description>provider_error_description</description>\n    <httpStatusCode>0</httpStatusCode>\n</applicationErrors>\n\n")),(0,n.kt)("h3",{id:"example-of-a-102-error-description-the-start-date-must-be-a-future-date"},'Example of a 102 error description: "The start date must be a future date"\ud83d\udd0e'),(0,n.kt)("p",null,'"The start date must be a future date" means that the Buyer is searching for a date in the past and the Seller cannot respond with any availability for past dates. The solution here is to adjust the search to reflect dates in the future.'),(0,n.kt)("h3",{id:"what-can-i-do-if-i-receive-a-102-error-in-my-response\ufe0f"},"What can I do if I receive a 102 error in my response?\u2714\ufe0f"),(0,n.kt)("p",null,"We strongly recommend you ",(0,n.kt)("strong",{parentName:"p"},"contact your Seller")," directly if the 102 error description is not clear for you and for further information regarding the cause of the error."))}l.isMDXComponent=!0}}]);
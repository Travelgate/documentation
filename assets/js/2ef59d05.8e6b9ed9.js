"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[16817],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(o),b=n,m=u["".concat(l,".").concat(b)]||u[b]||f[b]||a;return o?r.createElement(m,i(i({ref:t},p),{},{components:o})):r.createElement(m,i({ref:t},p))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}b.displayName="MDXCreateElement"},24378:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=o(87462),n=(o(67294),o(3905));const a={sidebar_position:1},i="Overview",s={unversionedId:"apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/overview",id:"apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/overview",title:"Overview",description:"In order to book a hotel room, booking flow methods must be executed sequentially: search, quote and book.",source:"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/overview.md",sourceDirName:"apis/for-buyers/hotel-x-pull-buyers-api/booking-flow",slug:"/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/overview",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/overview",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Metadata",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/metadata"},next:{title:"Search",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/search"}},l={},c=[],p={toc:c},u="wrapper";function f(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("p",null,"In order to book a hotel room, booking flow methods must be executed sequentially: ",(0,n.kt)("inlineCode",{parentName:"p"},"search"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"quote")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"book"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://storage.travelgate.com/docs/hotel-x_shopping_flow.svg",alt:"Hotel-X Shopping Flow"})),(0,n.kt)("div",{className:"shortcuts-overview"},(0,n.kt)("div",{className:"shortcuts-overview__content"},(0,n.kt)("a",{className:"item",href:"search"},(0,n.kt)("icon",{icon:"fa-brands fa-github",size:"lg"}),(0,n.kt)("p",{className:"item__title"},"Search"),(0,n.kt)("p",{className:"item__subtitle"},"Start by checking availability for your desired dates and number of guests. You can search for one or multiple Sellers' access.")),(0,n.kt)("a",{className:"item",href:"quote"},(0,n.kt)("icon",{icon:"fa-brands fa-github",size:"lg"}),(0,n.kt)("p",{className:"item__title"},"Quote"),(0,n.kt)("p",{className:"item__subtitle"},"Evaluate the rate before making a final booking decision. It provides you with the same information as the Search response, including the most up-to-date pricing, rate details, and cancellation policies.")),(0,n.kt)("a",{className:"item",href:"book"},(0,n.kt)("icon",{icon:"fa-brands fa-github",size:"lg"}),(0,n.kt)("p",{className:"item__title"},"Book"),(0,n.kt)("p",{className:"item__subtitle"},"When you're ready, proceed with the Book operation. It requests a reservation confirmation using the specific optionId obtained from the Quote step.")))))}f.isMDXComponent=!0}}]);
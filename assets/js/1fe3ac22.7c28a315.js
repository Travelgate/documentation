"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7664],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=p(n),k=r,c=m["".concat(s,".").concat(k)]||m[k]||d[k]||l;return n?a.createElement(c,i(i({ref:e},u),{},{components:n})):a.createElement(c,i({ref:e},u))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[m]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},28588:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={sidebar_position:3},i="Email",o={unversionedId:"apps/inventory/api/inventory-content-service/email",id:"apps/inventory/api/inventory-content-service/email",title:"Email",description:"This method facilitates the retrieval of all the emails set up within your hotels.",source:"@site/docs/apps/inventory/api/inventory-content-service/email.md",sourceDirName:"apps/inventory/api/inventory-content-service",slug:"/apps/inventory/api/inventory-content-service/email",permalink:"/docs/apps/inventory/api/inventory-content-service/email",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apps/inventory/api/inventory-content-service/email.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"XML API",permalink:"/docs/apps/inventory/api/inventory-content-service/making-requests/xml-api"},next:{title:"Quickstart",permalink:"/docs/apps/distribution/quickstart"}},s={},p=[{value:"Request",id:"request",level:2},{value:"Request Data Breakdown",id:"request-data-breakdown",level:3},{value:"Response",id:"response",level:2},{value:"Success",id:"success",level:3},{value:"Success Data Breakdown",id:"success-data-breakdown",level:4},{value:"Error",id:"error",level:3},{value:"Error Data Breakdown",id:"error-data-breakdown",level:4}],u={toc:p},m="wrapper";function d(t){let{components:e,...n}=t;return(0,r.kt)(m,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"email"},"Email"),(0,r.kt)("p",null,"This method facilitates the retrieval of all the emails set up within your hotels."),(0,r.kt)("h2",{id:"request"},"Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'{\n    "criteria": {\n        "hotels": [\n            "HotelCode1",\n            "HotelCode2"\n        ]\n    },\n    "settings": {\n        "supplier": "INVENTORY SUPPLIER CODE",\n        "client": "BUYER INVENTORY CODE",\n        "authentication": {\n            "userName": "***********",\n            "password": "***********"\n        },\n        "timeout": "00:00:15"\n    }\n}\n')),(0,r.kt)("h3",{id:"request-data-breakdown"},"Request Data Breakdown"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Element"),(0,r.kt)("th",{parentName:"tr",align:null},"Rel"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"criteria"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"criteria/hotels"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Array String"),(0,r.kt)("td",{parentName:"tr",align:null},"List of the hotel codes that you want to retrieve the emails information.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"settings"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"settings/supplier"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The inventory supplier code that you want to get the information.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"settings/client"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Your inventory client code.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"settings/authentication"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"authentication/userName"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Your inventory user name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"authentication/password"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Your inventory password.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"settings/timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Time"),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum time (\u201chh:mm:ss\u201d) that you will wait for our response.")))),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,"After each request, Travelgate will process the data and provide you with a response. The response options include either ",(0,r.kt)("strong",{parentName:"p"},"success")," or an ",(0,r.kt)("strong",{parentName:"p"},"error"),"."),(0,r.kt)("h3",{id:"success"},"Success"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'{\n    "hotels": [\n        {\n            "code": "HotelCode1",\n            "name": "Hotel One Name",\n            "isActive": true,\n            "mustSendNotification": true,\n            "email": "hotel1@email.es",\n            "emailNotification": "hotel1@email.es",\n            "emailNotificationCC": "CarbonCopy@email.es",\n            "emailNotificationInfo": "FromAddress@email.es"\n        },\n        {\n            "code": "HotelCode2",\n            "name": "Hotel Two Name",\n            "isActive": true,\n            "mustSendNotification": true,\n            "email": "hotel2@email.es",\n            "emailNotification": "hotel2@email.es",\n            "emailNotificationCC": "CarbonCopy@email.es",\n            "emailNotificationInfo": "FromAddress@email.es"\n        }\n    ]\n}\n')),(0,r.kt)("h4",{id:"success-data-breakdown"},"Success Data Breakdown"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Element"),(0,r.kt)("th",{parentName:"tr",align:null},"Rel"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hotels"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Array"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hotels/code"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Hotel's Inventory code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hotels/name"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Hotel's name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hotels/isActive"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"The hotel is active (true) or not (false) in your Inventory.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hotels/mustSendNotification"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Inventory system has to send an email notification or not.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hotels/email"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Default list of emails between commas for this hotel.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hotels/emailNotification"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"List of emails between commas where Inventory system send the notifications for the present hotel.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hotels/emailNotificationCC"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"List of emails between commas where Inventory system send a carbon copy email of the notification for the present hotel.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hotels/emailNotificationInfo"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"List of emails between commas that Inventory system use as email from address in the notifications.")))),(0,r.kt)("h3",{id:"error"},"Error"),(0,r.kt)("p",null,"If an error occurs during the request, the response should appear as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'{\n    "adviseMessages": [\n        {\n            "code": "BadRequest",\n            "level": "Error",\n            "description": "The Timeout field is required."\n        }\n    ]\n}\n')),(0,r.kt)("h4",{id:"error-data-breakdown"},"Error Data Breakdown"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Element"),(0,r.kt)("th",{parentName:"tr",align:null},"Rel"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"adviseMessages"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Array"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"adviseMessages/code"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Error code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"adviseMessages/level"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The posible values are Warning, Error, Info")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"adviseMessages/description"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Brief description of the error")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Error codes you could receive in the response while setting up and loading the product"),(0,r.kt)("div",null,(0,r.kt)("div",null,(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,(0,r.kt)("strong",null,"Error Code")),(0,r.kt)("th",null,(0,r.kt)("strong",null,"Error Description")))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"BadRequest"),(0,r.kt)("td",null,"Something is wrong with the request")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"InternalError"),(0,r.kt)("td",null,"Something unexpected happened in our system")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Unauthorized"),(0,r.kt)("td",null,"You are not authorized to use the service or your credentials are wrong"))))))))}d.isMDXComponent=!0}}]);
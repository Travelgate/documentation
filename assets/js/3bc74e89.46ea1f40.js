"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5581],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,f=m["".concat(s,".").concat(c)]||m[c]||d[c]||i;return a?n.createElement(f,l(l({ref:t},u),{},{components:a})):n.createElement(f,l({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},44770:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={sidebar_position:10},l="Safety Margin",o={unversionedId:"apis/for-buyers/hotel-x-pull-buyers-api/plugins/safety-margin",id:"apis/for-buyers/hotel-x-pull-buyers-api/plugins/safety-margin",title:"Safety Margin",description:"Safety Margin plugin allows discarding options that have a commission lower than expected. Only options that have a commission over gross, equal or lower than those reported in the file will be returned.",source:"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/safety-margin.mdx",sourceDirName:"apis/for-buyers/hotel-x-pull-buyers-api/plugins",slug:"/apis/for-buyers/hotel-x-pull-buyers-api/plugins/safety-margin",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/safety-margin",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/safety-margin.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Preference",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/preference"},next:{title:"Virtual Credit Card",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/virtual-credit-card"}},s={},p=[{value:"1.Create and upload your Safety Margin file",id:"1create-and-upload-your-safety-margin-file",level:2},{value:"File format specification",id:"file-format-specification",level:3},{value:"Check some of the most common use cases",id:"check-some-of-the-most-common-use-cases",level:3},{value:"2. Execute Safety Margin plugin in your query",id:"2-execute-safety-margin-plugin-in-your-query",level:2}],u=(m="BrowserWindow",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var m;const d={toc:p},c="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"safety-margin"},"Safety Margin"),(0,r.kt)("p",null,"Safety Margin plugin allows discarding options that have a commission lower than expected. Only options that have a commission over gross, equal or lower than those reported in the file will be returned. "),(0,r.kt)("p",null,"The expected commission has to be loaded in a safety-margin file. Sequentially, the rules will be evaluated until a match is found, upon finding it, the process will be stopped and the commission will be evaluated. In the same way, if the rule is not found, the option will be validated."),(0,r.kt)("p",null,"The matching process uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"clientTokens")," field, which identify the provided by the client and it is used to filter which business rules can be applied in the request sent."),(0,r.kt)("p",null,"To get started with the Preference plugin, follow these simple steps:"),(0,r.kt)("h2",{id:"1create-and-upload-your-safety-margin-file"},"1.Create and upload your Safety Margin file"),(0,r.kt)("p",null,"First, create your safety margin file in the correct format and then upload it to your FTP account. To assist you with this process, you can download the template file below, add your own rules, save it in CSV format, and then upload it to the corresponding folder in your FTP."),(0,r.kt)(u,{mdxType:"BrowserWindow"},(0,r.kt)("p",null,"\ud83d\udcc1F0","_","0000",(0,r.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0"," \ud83d\udcc1HotelX_0000",(0,r.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"," \ud83d\udcc1BusinessRules",(0,r.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"," \ud83d\udcc4","[[","Buyer Context","]","_","sequential","_","safetymargin.csv]","(../../../../../static/files/hotel-x/","[Buyer Context]","_sequential_safetymargin.csv)")),(0,r.kt)("h3",{id:"file-format-specification"},"File format specification"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"File Name:")," ","[Buyer Context]","_sequential_safetymargin.csv"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Directory:")," F0_0000/HotelX0000/BusinessRules"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Delimiter:")," Comma (",(0,r.kt)("inlineCode",{parentName:"li"},","),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Header Row:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RuleId (mandatory):")," Rule identifier"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ClientTokens (mandatory):"),"  Identifier provided by the client that is used to filter which business rules can be applied for the sent request",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Separator for multiples codes in the same row: Semicolon ",(0,r.kt)("inlineCode",{parentName:"li"},";")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SupplierCodes (mandatory):")," Supplier code",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Separator for multiples codes in the same row: Semicolon ",(0,r.kt)("inlineCode",{parentName:"li"},";")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"NotSupplierCodes (mandatory):")," Supplier code",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Separator for multiples codes in the same row: Semicolon ",(0,r.kt)("inlineCode",{parentName:"li"},";")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"CreationDateFrom:")," Start creation date (yyyy-mm-dd)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"CreationDateTo:")," End creation date (yyyy-mm-dd)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"CheckInFrom:")," Check in from date (yyyy-mm-dd)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"CheckInTo:")," Check in to date (yyyy-mm-dd)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"HotelCodes:")," Hotel code",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Separator for multiples codes in the same row: Semicolon ",(0,r.kt)("inlineCode",{parentName:"li"},";")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"NothotelCodes:")," Hotel code",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Separator for multiples codes in the same row: Semicolon ",(0,r.kt)("inlineCode",{parentName:"li"},";")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ChainsCodes:")," Chain code",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Separator for multiples codes in the same row: Semicolon ",(0,r.kt)("inlineCode",{parentName:"li"},";")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"NotChainCodes:")," Chain code",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Separator for multiples codes in the same row: Semicolon ",(0,r.kt)("inlineCode",{parentName:"li"},";")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"DestinationCodes:")," Destination code",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Separator for multiples codes in the same row: Semicolon ",(0,r.kt)("inlineCode",{parentName:"li"},";")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"NotDestinationCodes:")," Destination code",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Separator for multiples codes in the same row: Semicolon ",(0,r.kt)("inlineCode",{parentName:"li"},";")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Percentage (mandatory):")," Commission value, decimal separator must be point ",(0,r.kt)("inlineCode",{parentName:"li"},"."))))),(0,r.kt)("h3",{id:"check-some-of-the-most-common-use-cases"},"Check some of the most common use cases"),(0,r.kt)("p",null,"Here are some common use cases for the Safety Margin plugin, along with the CSV template file to use:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Use Case"),(0,r.kt)("th",{parentName:"tr",align:null},"CSV Template file"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Simple value field"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udcc4",(0,r.kt)("a",{parentName:"td",href:"#"},"[","Buyer Context","]","_","sequential","_","safetymargin.csv"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Multi value field"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udcc4",(0,r.kt)("a",{parentName:"td",href:"#"},"[","Buyer Context","]","_","sequential","_","safetymargin.csv"))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\ud83d\udcf9Learn how to change the format of the csv file in order to edit and save it"),(0,r.kt)("div",null,(0,r.kt)("div",null,"[A\xf1adir v\xeddeo]"))),(0,r.kt)("h2",{id:"2-execute-safety-margin-plugin-in-your-query"},"2. Execute Safety Margin plugin in your query"),(0,r.kt)("p",null,"Once you've uploaded your safety margin file, to use the plugin add the following field to the ",(0,r.kt)("inlineCode",{parentName:"p"},"settings")," node of your request. Note that safety margin plugin can just be executed in search query. In order to successfully execute the safety margin plugin, you will need to create the request with the following variables."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"step"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"RESPONSE_OPTION")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"PRE_STEP")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"safety_margin"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"settings": {\n    "plugins": [\n        {\n            "step": "RESPONSE_OPTION",\n            "pluginsType": {\n                "type": "PRE_STEP",\n                "name": "safety_margin"\n            }\n        }\n    ]\n}\n')))}f.isMDXComponent=!0}}]);
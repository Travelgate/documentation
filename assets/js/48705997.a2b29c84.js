"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[90688],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var i=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=i.createContext({}),m=function(e){var t=i.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=m(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=m(o),d=n,h=u["".concat(l,".").concat(d)]||u[d]||c[d]||r;return o?i.createElement(h,a(a({ref:t},p),{},{components:o})):i.createElement(h,a({ref:t},p))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,a=new Array(r);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,a[1]=s;for(var m=2;m<r;m++)a[m]=o[m];return i.createElement.apply(null,a)}return i.createElement.apply(null,o)}d.displayName="MDXCreateElement"},61625:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var i=o(87462),n=(o(67294),o(3905));const r={sidebar_position:5},a="Commission",s={unversionedId:"apis/for-buyers/hotel-x-pull-buyers-api/plugins/commision",id:"apis/for-buyers/hotel-x-pull-buyers-api/plugins/commision",title:"Commission",description:"Commission plugin defines the contracted/expected commission in cases where the Supplier is not able to send it via integration. The commission loaded in the FTP is considered as a Gross commission, meaning that the commission or profit is already included in the price.",source:"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/commision.mdx",sourceDirName:"apis/for-buyers/hotel-x-pull-buyers-api/plugins",slug:"/apis/for-buyers/hotel-x-pull-buyers-api/plugins/commision",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/commision",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/commision.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Cheapest Price",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/cheapest-price"},next:{title:"Add Parameter",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/add-parameter"}},l={},m=[{value:"1. Create and Upload your Commission File",id:"1-create-and-upload-your-commission-file",level:2},{value:"File Format Specification",id:"file-format-specification",level:3},{value:"Check Some of the Most Common Use Cases",id:"check-some-of-the-most-common-use-cases",level:3},{value:"2.  Execute Commission Plugin in your Request",id:"2--execute-commission-plugin-in-your-request",level:2}],p=(u="BrowserWindow",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var u;const c={toc:m},d="wrapper";function h(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,i.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"commission"},"Commission"),(0,n.kt)("p",null,"Commission plugin defines the contracted/expected commission in cases where the Supplier is not able to send it via integration. The commission loaded in the FTP is considered as a Gross commission, meaning that the commission or profit is already included in the price."),(0,n.kt)("p",null,"To get started with the Commission plugin, follow these simple steps:"),(0,n.kt)("h2",{id:"1-create-and-upload-your-commission-file"},"1. Create and Upload your Commission File"),(0,n.kt)("p",null,"To get started, create your commission file in the correct format and then upload it to your FTP account. We've provided a template file below \u2b07\ufe0f to help you with this process. Just click on the file name, add your own rules, save it in CSV format, and then upload it to the corresponding folder in your FTP."),(0,n.kt)(p,{mdxType:"BrowserWindow"},(0,n.kt)("p",null,"\ud83d\udcc1F0  _0000",(0,n.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0"," \ud83d\udcc1HotelX_0000",(0,n.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"," \ud83d\udcc1BusinessRules",(0,n.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"," ",(0,n.kt)("strong",{parentName:"p"},"\ud83d\udcc4",(0,n.kt)("a",{parentName:"strong",href:"https://storage.travelgate.com/docs/BuyerContext_sequential_commission.csv"},"BuyerContext_sequential_commission.csv")))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If you need assistance with requesting your credentials to access the FTP server, determining the endpoint and directory format, or learning how to upload, update, and delete FTP files, please refer to the ",(0,n.kt)("a",{parentName:"p",href:"../plugins/overview"},"overview")," section of Plugins.")),(0,n.kt)("h3",{id:"file-format-specification"},"File Format Specification"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"File Name:")," BuyerContext_sequential_commission.csv"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Directory:")," F0_0000/HotelX0000/BusinessRules"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Delimiter:")," Comma (",(0,n.kt)("inlineCode",{parentName:"li"},","),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Header Row:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"RuleId (mandatory):")," Unique identifier of the rule (assign one)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"ClientTokens:")," Client token used for index the rule"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"SupplierCodes (mandatory):")," List of the supplier codes you want the commission to be applied to. ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Separator for multiples codes in the same row: Semicolon (\u201c;\u201d)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"NotSupplierCodes (mandatory):")," List of the supplier codes you don't want the commission to be applied to. ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Separator for multiples codes in the same row: Semicolon (\u201c;\u201d)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"CreationDateFrom:")," Start creation date (yyyy-mm-dd)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"CreationDateTo:")," End creation date (yyyy-mm-dd)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"CheckInFrom:")," Checkin date (yyyy-mm-dd)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"CheckInTo:")," Checkout date (yyyy-mm-dd)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"HotelCodes:")," List of the hotel codes you want the commission to be applied to. ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Separator for multiples codes in the same row: Semicolon (\u201c;\u201d)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"NothotelCodes:")," List of the hotel codes you don't want the commission to be applied to. ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Separator for multiples codes in the same row: Semicolon (\u201c;\u201d)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"ChainsCodes:")," List of the chain codes you want the commission to be applied to. ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Separator for multiples codes in the same row: Semicolon (\u201c;\u201d)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"NotChainCodes:")," List of the chain codes you don't want the commission to be applied to. ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Separator for multiples codes in the same row: Semicolon (\u201c;\u201d)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"DestinationCodes:")," List of the destination codes you want the commission to be applied to. ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Separator for multiples codes in the same row: Semicolon (\u201c;\u201d)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"NotDestinationCodes:")," List of the destination codes you don't want the commission to be applied to. ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Separator for multiples codes in the same row: Semicolon (\u201c;\u201d)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Percentage (mandatory):")," Commission value (decimal separator must be point (\u201c.\u201d))"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Force (mandatory):")," Boolean value true/false",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"True:")," The rule will be applied if matching all its conditions criteria, regardless of a commission being received or not from the supplier through the integration."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"False:")," The rule will not be applied despite of matching all its conditions criteria if a commission is received from the supplier through the integration.")))))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"\ud83d\udcf9Learn how to change the format of the csv file in order to edit and save it"),(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/XkOk3SkZ0Sg?si=TYhN1QfMwYE1fusw&controls=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})))),(0,n.kt)("h3",{id:"check-some-of-the-most-common-use-cases"},"Check Some of the Most Common Use Cases"),(0,n.kt)("p",null,"Here are some common use cases for the Commission plugin, along with the CSV template file to use:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Use Case"),(0,n.kt)("th",{parentName:"tr",align:null},"CSV Template file"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},'File for error \u201c"WRONG_FIELD" - "PLUGIN_ERROR" - some of the options have been discarded because we don\'t know if price is gross or net\u201d'),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\udcc4",(0,n.kt)("a",{parentName:"td",href:"https://storage.travelgate.com/docs/BuyerContext_sequential_commission-1.csv"},"BuyerContext","_","sequential","_","commision.csv"))))),(0,n.kt)("h2",{id:"2--execute-commission-plugin-in-your-request"},"2.  Execute Commission Plugin in your Request"),(0,n.kt)("p",null,"In the case of the commission plugin, there is no need to indicate it in the requests. Simply uploading the file to the FTP it will start working, no further action is required."))}h.isMDXComponent=!0}}]);
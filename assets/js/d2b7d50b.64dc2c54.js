"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[18877],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(r),d=a,f=c["".concat(u,".").concat(d)]||c[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},96257:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:8},i="Markets Group",l={unversionedId:"apis/for-buyers/hotel-x-pull-buyers-api/plugins/markets-group",id:"apis/for-buyers/hotel-x-pull-buyers-api/plugins/markets-group",title:"Markets Group",description:"Markets Group plugin groups the input markets from Search depending on the agrupations you\u2019ve decided beforehand. In order to be able to use the plugin, you\u2019ll have to decide which markets to join for which supplier. This way the Search will only process as many transactions as groups have been formed by the plugin, since all of the markets of a same group would return the same options.",source:"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/markets-group.mdx",sourceDirName:"apis/for-buyers/hotel-x-pull-buyers-api/plugins",slug:"/apis/for-buyers/hotel-x-pull-buyers-api/plugins/markets-group",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/markets-group",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/markets-group.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Commission",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/commision"},next:{title:"Preference",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/preference"}},u={},s=[{value:"1. Create and upload your Markets Group file",id:"1-create-and-upload-your-markets-group-file",level:2},{value:"File format specification",id:"file-format-specification",level:3},{value:"2. Execute Markets Group plugin in your query",id:"2-execute-markets-group-plugin-in-your-query",level:2}],p=(c="BrowserWindow",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var c;const m={toc:s},d="wrapper";function f(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"markets-group"},"Markets Group"),(0,a.kt)("p",null,"Markets Group plugin groups the input markets from Search depending on the agrupations you\u2019ve decided beforehand. In order to be able to use the plugin, you\u2019ll have to decide which markets to join for which supplier. This way the Search will only process as many transactions as groups have been formed by the plugin, since all of the markets of a same group would return the same options."),(0,a.kt)("p",null,"To get started with the Markets Group plugin, follow these simple steps:"),(0,a.kt)("h2",{id:"1-create-and-upload-your-markets-group-file"},"1. Create and upload your Markets Group file"),(0,a.kt)("p",null,"First, create your markets group file in the correct format and then upload it to your FTP account. To assist you with this process, you can download the template file below, add your own rules, save it in CSV format, and then upload it to the corresponding folder in your FTP."),(0,a.kt)(p,{mdxType:"BrowserWindow"},(0,a.kt)("p",null,"\ud83d\udcc1F0","_","0000",(0,a.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0"," \ud83d\udcc1HotelX_0000",(0,a.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"," \ud83d\udcc1BusinessRules",(0,a.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"," \ud83d\udcc4",(0,a.kt)("a",{target:"_blank",href:r(7058).Z},"markets_groups.csv"))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Keep in mind that this plugin is only available in Search step and the markets groups will not be recalculated after Search step. So if you take an option from Search that has been executed with market groups, those groups will remain the same through all the booking flow, even if you change those groups via ftp.")),(0,a.kt)("h3",{id:"file-format-specification"},"File format specification"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"File Name:")," markets_group.csv"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Directory:")," F0_0000/HotelX0000/BusinessRules"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Delimiter:")," Comma (",(0,a.kt)("inlineCode",{parentName:"li"},","),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Header Row:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Supplier:")," Supplier code"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Markets:")," List of groups of markets",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Each group will be separated by ",(0,a.kt)("inlineCode",{parentName:"li"},";")," and each market will be separated by ",(0,a.kt)("inlineCode",{parentName:"li"},"#")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Other:")," Boolean value true/false",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"True:")," The Search input markets (",(0,a.kt)("inlineCode",{parentName:"li"},"HotelCriteriaSearchInput"),") not found in this configuration file, will be joined together and we will launch a query to the provider searching for options in these markets."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"False:")," These markets will be discarded.")))))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\ud83d\udcf9Learn how to change the format of the csv file in order to edit and save it"),(0,a.kt)("div",null,(0,a.kt)("div",null,"[A\xf1adir v\xeddeo]"))),(0,a.kt)("h2",{id:"2-execute-markets-group-plugin-in-your-query"},"2. Execute Markets Group plugin in your query"),(0,a.kt)("p",null,"Once you've uploaded your markets group file, to use the plugin add the following field to the ",(0,a.kt)("inlineCode",{parentName:"p"},"settings")," node of your request. Note that markets group plugin can just be executed in search query. In order to successfully execute the markets group plugin, you will need to create the request with the following variables."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"step"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"REQUEST_ACCESS")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"type"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"PRE_STEP")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"markets_group"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"settings": {\n    "plugins": [\n        {\n            "step": "REQUEST_ACCESS",\n            "pluginsType": {\n                "type": "PRE_STEP",\n                "name": "markets_group"\n            }\n        }\n    ]\n}\n')))}f.isMDXComponent=!0},7058:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/files/markets_group-6cfd1217b8b6c4df76b34261398af12f.csv"}}]);
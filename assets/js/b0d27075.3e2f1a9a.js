"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[16640],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),u=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(o.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=u(n),c=a,g=d["".concat(o,".").concat(c)]||d[c]||m[c]||l;return n?r.createElement(g,i(i({ref:e},p),{},{components:n})):r.createElement(g,i({ref:e},p))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=c;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[d]="string"==typeof t?t:a,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},78052:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={sidebar_position:10},i="Currency List",s={unversionedId:"apis/for-buyers/legacy-pull-buyers-api/content/currency-list",id:"apis/for-buyers/legacy-pull-buyers-api/content/currency-list",title:"Currency List",description:"The Currency List method returns a comprehensive currencies list a supplier's supports in Avail method. The returned fields include:",source:"@site/docs/apis/for-buyers/legacy-pull-buyers-api/content/currency-list.mdx",sourceDirName:"apis/for-buyers/legacy-pull-buyers-api/content",slug:"/apis/for-buyers/legacy-pull-buyers-api/content/currency-list",permalink:"/docs/apis/for-buyers/legacy-pull-buyers-api/content/currency-list",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/legacy-pull-buyers-api/content/currency-list.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"docsSidebar",previous:{title:"Market List",permalink:"/docs/apis/for-buyers/legacy-pull-buyers-api/content/market-list"},next:{title:"Runtime Configuration",permalink:"/docs/apis/for-buyers/legacy-pull-buyers-api/content/runtime-configuration"}},o={},u=[{value:"Request",id:"request",level:2},{value:"Request Data Breakdown",id:"request-data-breakdown",level:3},{value:"Response",id:"response",level:2},{value:"Response Data Breakdown",id:"response-data-breakdown",level:3}],p={toc:u},d="wrapper";function m(t){let{components:e,...n}=t;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"currency-list"},"Currency List"),(0,a.kt)("p",null,"The Currency List method returns a comprehensive currencies list a supplier's supports in Avail method. The returned fields include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Currency ",(0,a.kt)("inlineCode",{parentName:"li"},"code")),(0,a.kt)("li",{parentName:"ul"},"Currency ",(0,a.kt)("inlineCode",{parentName:"li"},"name"))),(0,a.kt)("h2",{id:"request"},"Request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<soapenv:Envelope xmlns:soapenv = "http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns = "http://schemas.xmltravelgate.com/hub/2012/06" xmlns:wsse = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">\n    <soapenv:Header>\n        <wsse:Security>\n            <wsse:UsernameToken>\n                <wsse:Username>username</wsse:Username>\n                <wsse:Password>password</wsse:Password>\n            </wsse:UsernameToken>\n        </wsse:Security>\n    </soapenv:Header>\n    <soapenv:Body>\n        <ns:CurrencyList>\n            <ns:currencyListRQ>\n                <ns:timeoutMilliseconds>180000</ns:timeoutMilliseconds>\n                <ns:version>1</ns:version>\n                <ns:providerRQ>\n                    <ns:code>code</ns:code>\n                    <ns:id>1</ns:id>\n                    <ns:rqXML>\n                        <CurrencyListRQ xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd = "http://www.w3.org/2001/XMLSchema">\n                           <timeoutMilliseconds>20000</timeoutMilliseconds>\n                            <source>\n                                <languageCode>en</languageCode>\n                            </source>\n                            <filterAuditData>\n                                <registerTransactions>false</registerTransactions>\n                            </filterAuditData>\n                            <Configuration>\n                                <User>user</User>\n                                <Password>password</Password>\n                                <UrlGeneric>www.supplier.com</UrlGeneric>\n                                <Parameters>\n                                    <Parameter key = "SegundoPW" value = "PWXML"></Parameter>\n                                </Parameters>\n                            </Configuration>\n                        </CurrencyListRQ>\n                    </ns:rqXML>\n                </ns:providerRQ>\n            </ns:currencyListRQ>\n        </ns:CurrencyList>\n    </soapenv:Body>\n</soapenv:Envelope>\n')),(0,a.kt)("h3",{id:"request-data-breakdown"},"Request Data Breakdown"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Element"),(0,a.kt)("th",{parentName:"tr",align:null},"Rel"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RuntimeConfigurationRQ"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RuntimeConfigurationRQ/timeoutMilliseconds"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Maximum time for a response from the supplier\u2019s system.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RuntimeCOnfigurationRQ/source"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"source/languageCode"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Language code (ISO 3166-1 alpha-2) format lowercase.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RuntimeConfigurationRQ/filterAuditData"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Activates transaction data sent & received in the supplier\u2019s native format.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"filterAuditData/registerTransactions"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"Returns all the transactions (XMLs) exchanged with the supplier.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RuntimeConfigurationRQ/Configuration"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"The info required to access the supplier\u2019s system.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Configuration/User"),(0,a.kt)("td",{parentName:"tr",align:null},"0..1"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"User code to connect to supplier.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Configuration/Password"),(0,a.kt)("td",{parentName:"tr",align:null},"0..1"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Password for the connection.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Configuration/UrlGeneric"),(0,a.kt)("td",{parentName:"tr",align:null},"0..1"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Supplier URL used for multiple methods.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Configuration/Parameters"),(0,a.kt)("td",{parentName:"tr",align:null},"0..1"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Parameters for additional information.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Parameters/Parameter"),(0,a.kt)("td",{parentName:"tr",align:null},"0..n"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@key"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Contains the keyword/Id to identify a parameter.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@value"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Contains the parameter values.")))),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<CurrencyListRS>\n    <UpgradeUTCDate>2016-10-18T13:18:03+02:00</UpgradeUTCDate>\n    <Currencies>\n        <Currency>\n            <Code>EUR</Code>\n            <Name>Euro</Name>\n        </Currency>\n        <Currency>\n            <Code>USD</Code>\n            <Name>Dollar</Name>\n        </Currency>\n    </Currencies>\n</CurrencyListRS>\n")),(0,a.kt)("h3",{id:"response-data-breakdown"},"Response Data Breakdown"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Element"),(0,a.kt)("th",{parentName:"tr",align:null},"Rel"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CurrencyListRS/UpgradeUTCDate"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"DateTime"),(0,a.kt)("td",{parentName:"tr",align:null},"Indicates the update date of the information in UTC format.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CurrencyListRS/Currencies"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Root node, list of currencies.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Currencies/Currency"),(0,a.kt)("td",{parentName:"tr",align:null},"0..n"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@code"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"ISO - 3 Code.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@Name"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Name of the currency.")))))}m.isMDXComponent=!0}}]);
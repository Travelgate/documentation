"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[13523],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>g});var l=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var d=l.createContext({}),u=function(t){var e=l.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return l.createElement(d.Provider,{value:e},t.children)},s="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},m=l.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),s=u(n),m=a,g=s["".concat(d,".").concat(m)]||s[m]||k[m]||r;return n?l.createElement(g,i(i({ref:e},p),{},{components:n})):l.createElement(g,i({ref:e},p))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[s]="string"==typeof t?t:a,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9661:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var l=n(87462),a=(n(67294),n(3905));const r={sidebar_position:2},i="Hotel List",o={unversionedId:"apis/for-sellers/hotel-pull-sellers-api/content/hotel-list",id:"apis/for-sellers/hotel-pull-sellers-api/content/hotel-list",title:"Hotel List",description:"The Hotel List method returns a comprehensive hotel list from a supplier's access to the Buyer, granting access to all the properties configured by the Seller for a given set of credentials. The returned fields include: Hotel Code, GiataId, Name, Address, ZipCode, Contact, CategoryCode etc.",source:"@site/docs/apis/for-sellers/hotel-pull-sellers-api/content/hotel-list.mdx",sourceDirName:"apis/for-sellers/hotel-pull-sellers-api/content",slug:"/apis/for-sellers/hotel-pull-sellers-api/content/hotel-list",permalink:"/docs/apis/for-sellers/hotel-pull-sellers-api/content/hotel-list",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-sellers/hotel-pull-sellers-api/content/hotel-list.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Overview",permalink:"/docs/apis/for-sellers/hotel-pull-sellers-api/content/overview"},next:{title:"Descriptive Info",permalink:"/docs/apis/for-sellers/hotel-pull-sellers-api/content/descriptive-info"}},d={},u=[{value:"Request",id:"request",level:2},{value:"Request Data Breakdown",id:"request-data-breakdown",level:3},{value:"Response",id:"response",level:2},{value:"Success",id:"success",level:3},{value:"Response Data Breakdown",id:"response-data-breakdown",level:3},{value:"Error",id:"error",level:3}],p={toc:u},s="wrapper";function k(t){let{components:e,...n}=t;return(0,a.kt)(s,(0,l.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hotel-list"},"Hotel List"),(0,a.kt)("p",null,"The Hotel List method returns a comprehensive hotel list from a supplier's access to the Buyer, granting access to all the properties configured by the Seller for a given set of credentials. The returned fields include: ",(0,a.kt)("inlineCode",{parentName:"p"},"Hotel Code"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"GiataId"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Name"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Address"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ZipCode"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Contact"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"CategoryCode")," etc."),(0,a.kt)("h2",{id:"request"},"Request"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The maximum time permitted in our system before the connection is closed is 240000 milliseconds.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<soapenv:Envelope xmlns:soapenv = "http://schemas.xmlsoap.org/soap/envelope/" \n   xmlns:ns = "http://schemas.xmltravelgate.com/hub/2012/06" \n   xmlns:wsse = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">\n     <soapenv:Header>\n       <wsse:Security>\n         <wsse:UsernameToken>\n           <wsse:Username>username</wsse:Username>\n           <wsse:Password>password</wsse:Password>\n         </wsse:UsernameToken>\n       </wsse:Security>\n     </soapenv:Header>\n     <soapenv:Body>\n       <ns:HotelList>\n         <ns:hotelListRQ>\n           <ns:timeoutMilliseconds>180000</ns:timeoutMilliseconds>\n           <ns:version>1</ns:version>\n           <ns:providerRQ>\n             <ns:code>code</ns:code>\n             <ns:id>1</ns:id>\n             <ns:rqXML>\n               <HotelListRQ xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd = "http://www.w3.org/2001/XMLSchema">\n                  <timeoutMilliseconds>20000</timeoutMilliseconds>\n                  <source>\n                    <languageCode>en</languageCode>\n                  </source>\n                  <filterAuditData>\n                    <registerTransactions>false</registerTransactions>\n                  </filterAuditData>\n                  <ContinuationToken expectedRange = "6000"></ContinuationToken>\n                  <Configuration>\n                    <User>user</User>\n                    <Password>password</Password>\n                    <UrlGeneric>www.supplier.com</UrlGeneric>\n                    <Parameters>\n                      <Parameter key = "SegundoPW" value = "PWXML"></Parameter>\n                    </Parameters>\n                  </Configuration>\n               </HotelListRQ>\n             </ns:rqXML>\n           </ns:providerRQ>\n         </ns:hotelListRQ>\n        </ns:HotelList>\n     </soapenv:Body>\n</soapenv:Envelope>\n')),(0,a.kt)("h3",{id:"request-data-breakdown"},"Request Data Breakdown"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Element"),(0,a.kt)("th",{parentName:"tr",align:null},"Rel"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RuntimeConfigurationRQ"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RuntimeConfigurationRQ/timeoutMilliseconds"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Maximum time for a response from the supplier\u2019s system.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RuntimeCOnfigurationRQ/source"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"source/languageCode"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Language code (ISO 3166-1 alpha-2) format lowercase.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RuntimeConfigurationRQ/filterAuditData"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Activates transaction data sent & received in the supplier\u2019s native format.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"filterAuditData/registerTransactions"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"Returns all the transactions (XMLs) exchanged with the supplier.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ContinuationToken"),(0,a.kt)("td",{parentName:"tr",align:null},"0..1"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Internal Token to identify the next set of HotelList or RoomList.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@expectedRange"),(0,a.kt)("td",{parentName:"tr",align:null},"0..1"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of hotels expected in HotelList call.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RuntimeConfigurationRQ/Configuration"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"The info required to access the supplier\u2019s system.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Configuration/User"),(0,a.kt)("td",{parentName:"tr",align:null},"0..1"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"User code to connect to supplier.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Configuration/Password"),(0,a.kt)("td",{parentName:"tr",align:null},"0..1"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Password for the connection.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Configuration/UrlGeneric"),(0,a.kt)("td",{parentName:"tr",align:null},"0..1"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Supplier URL used for multiple methods.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Configuration/Parameters"),(0,a.kt)("td",{parentName:"tr",align:null},"0..1"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Parameters for additional information.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Parameters/Parameter"),(0,a.kt)("td",{parentName:"tr",align:null},"0..n"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@key"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Contains the keyword/Id to identify a parameter.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@value"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Contains the parameter values.")))),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,"After each request, you will have to process the data and provide a response. Upon receiving a ",(0,a.kt)("inlineCode",{parentName:"p"},"HotelList")," request, you will send you a corresponding ",(0,a.kt)("inlineCode",{parentName:"p"},"HotelList")," response. The response options include either success or an error."),(0,a.kt)("h3",{id:"success"},"Success"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<HotelListRS>\n        <UpgradeUTCDate>2016-10-18T13:18:03+02:00</UpgradeUTCDate>\n        <Hotels>\n            <Hotel>\n                <Code>5</Code>  \n                <ProviderCode>27</ProviderCode>                          \n                <GiataId source = "http://urlGiata">1200</GiataId>\n                <Name>BADAJOZ</Name>\n                <Address>CTRA.NACIONAL V, KM 393</Address>\n                <Airports>\n                    <Airport>\n                        <IATACode>BJZ</IATACode>\n                    </Airport>\n                </Airports>\n                <Town>BADAJOZ</Town>\n                <ZipCode>06002</ZipCode>\n                <CountryISOCode>ES</CountryISOCode>\n                <AvailDestination code = "06" name = "BADAJOZ"/>\n                <GeographicDestination code = "06" name = "BADAJOZ" avail = "true"/>\n                <Latitude>38.893839</Latitude>\n                <Longitude>-7.014112</Longitude>\n                <Contact>\n                    <Email>badajoz@xxx.com</Email>\n                    <Telephone>91425891</Telephone>\n                    <Fax>910200200</Fax>\n                </Contact>\n                <CategoryCode>4 Estrellas</CategoryCode>\n                <PaymentOptions cash="false" bankAcct="false">\n                    <Cards>\n                        <Card code="VI"/>\n                        <Card code="AX"/>\n                        <Card code="CA"/>  \n                    </Cards> \n                </PaymentOptions>               \n                <ExclusiveDeal>true</ExclusiveDeal>     \n                <PropertyCategory>\n                     <Code>1</Code>\n                     <Name>Hotel</Name>             \n                </PropertyCategory>                 \n            </Hotel>\n        </Hotels>\n    </HotelListRS>\n')),(0,a.kt)("h3",{id:"response-data-breakdown"},"Response Data Breakdown"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Element"),(0,a.kt)("th",{parentName:"tr",align:null},"Rel"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"HotelListRS/UpgradeUTCDate"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"DateTime"),(0,a.kt)("td",{parentName:"tr",align:null},"Indicates the update date of the information in UTC format.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"HotelListRS/Hotels"),(0,a.kt)("td",{parentName:"tr",align:null},"0..n"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Hotels/Hotel"),(0,a.kt)("td",{parentName:"tr",align:null},"0..n"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Hotel/Code"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Internal code to perform availability and/or supplier code.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Hotel/ProviderCode"),(0,a.kt)("td",{parentName:"tr",align:null},"0..1"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Internal code established by the supplier (see MetaData).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Hotel/GiataId"),(0,a.kt)("td",{parentName:"tr",align:null},"0..1"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@source"),(0,a.kt)("td",{parentName:"tr",align:null},"0..1"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Giata url")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@value"),(0,a.kt)("td",{parentName:"tr",align:null},"0..1"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Giata code")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Hotel/Name"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Hotel name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Hotel/Address"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Hotel address")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Hotel/Airports"),(0,a.kt)("td",{parentName:"tr",align:null},"0..1"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Airports/Airport"),(0,a.kt)("td",{parentName:"tr",align:null},"1..n"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Airport/IATACode"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"IATA airport Code (airport near the hotel).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Hotel/Town"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Town")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Hotel/ZipCode"),(0,a.kt)("td",{parentName:"tr",align:null},"0..1"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"ZipCode")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Hotel/CountryISOCode"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"CountryISOCode")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Hotel/AvailDestination"),(0,a.kt)("td",{parentName:"tr",align:null},"0..1"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@code"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Avail destination code (lowest destination level).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@name"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Avail destination name (lowest destination level).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Hotel/GeographicDestination"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@code"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Geographic Destination code (lowest destination level).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@name"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Geographic Destination name (lowest destination level).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@avail"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"Indicates if it is allowed in availability.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Hotel/Latitude"),(0,a.kt)("td",{parentName:"tr",align:null},"0..1"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Latitude. Format is Decimal Degrees (e.g. 37.207295).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Hotel/Longitude"),(0,a.kt)("td",{parentName:"tr",align:null},"0..1"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Longitude. Format is Decimal Degrees (e.g. -7.23768).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Hotel/Contact"),(0,a.kt)("td",{parentName:"tr",align:null},"0..1"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Contact/Email"),(0,a.kt)("td",{parentName:"tr",align:null},"0..1"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Contact email")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Contact/Telephone"),(0,a.kt)("td",{parentName:"tr",align:null},"0..1"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Contact telephone")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Contact/Fax"),(0,a.kt)("td",{parentName:"tr",align:null},"0..1"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Contact fax")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Hotel/CategoryCode"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Hotel category code.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"????Type"),(0,a.kt)("td",{parentName:"tr",align:null},"0..1"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("details",null,"     ",(0,a.kt)("summary",null,"Hotel Type codes"),"     ",(0,a.kt)("div",null,"         ",(0,a.kt)("div",null,"          ",(0,a.kt)("table",null,"   \t\t\t\t  ",(0,a.kt)("thead",null,"   \t\t\t\t\t  ",(0,a.kt)("tr",null,"   \t\t\t\t\t\t  ",(0,a.kt)("th",null,"   \t\t\t\t\t\t\t  ",(0,a.kt)("strong",null,"Code"),"   \t\t\t\t\t\t  "),"   \t\t\t\t\t\t  ",(0,a.kt)("th",null,"   \t\t\t\t\t\t\t  ",(0,a.kt)("strong",null,"Name"),"   \t\t\t\t\t\t  "),"   \t\t\t\t\t  "),"   \t\t\t\t  "),"   \t\t\t\t  ",(0,a.kt)("tbody",null,"   \t\t\t\t\t  ",(0,a.kt)("tr",null,"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"H"),"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"Hotel"),"   \t\t\t\t\t  "),"   \t\t\t\t\t  ",(0,a.kt)("tr",null,"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"A"),"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"Apartment"),"   \t\t\t\t\t  "),"                     ",(0,a.kt)("tr",null,"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"AH"),"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"Apartment Hotel"),"   \t\t\t\t\t  "),"   \t\t\t\t\t  ",(0,a.kt)("tr",null,"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"C"),"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"Club"),"   \t\t\t\t\t  "),"   \t\t\t\t\t  ",(0,a.kt)("tr",null,"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"AT"),"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"Agrotourism"),"   \t\t\t\t\t  "),"                     ",(0,a.kt)("tr",null,"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"HS"),"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"Hostel"),"   \t\t\t\t\t  "),"   \t\t\t\t\t  ",(0,a.kt)("tr",null,"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"CA"),"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"House"),"   \t\t\t\t\t  "),"   \t\t\t\t\t  ",(0,a.kt)("tr",null,"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"V"),"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"Ville"),"   \t\t\t\t\t  "),"                     ",(0,a.kt)("tr",null,"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"B"),"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"Bungalows"),"   \t\t\t\t\t  "),"                     ",(0,a.kt)("tr",null,"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"D"),"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"Disco Club"),"   \t\t\t\t\t  "),"\t\t\t \t\t\t\t   "),"   \t\t\t"),"         "),"     ")," "))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Hotel/PaymentOptions"),(0,a.kt)("td",{parentName:"tr",align:null},"0..1"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Type of cards allowed by the supplier. This tag is only mandatory if payment type is different than MerchantPay.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@cash"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@bankAcct"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PaymentOptions/Cards"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Cards/Card"),(0,a.kt)("td",{parentName:"tr",align:null},"1..n"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Type of card allowed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@code"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("details",null,"     ",(0,a.kt)("summary",null,"Credit Card codes"),"     ",(0,a.kt)("div",null,"         ",(0,a.kt)("div",null,"          ",(0,a.kt)("table",null,"   \t\t\t\t  ",(0,a.kt)("thead",null,"   \t\t\t\t\t  ",(0,a.kt)("tr",null,"   \t\t\t\t\t\t  ",(0,a.kt)("th",null,"   \t\t\t\t\t\t\t  ",(0,a.kt)("strong",null,"Code"),"   \t\t\t\t\t\t  "),"   \t\t\t\t\t\t  ",(0,a.kt)("th",null,"   \t\t\t\t\t\t\t  ",(0,a.kt)("strong",null,"Name"),"   \t\t\t\t\t\t  "),"   \t\t\t\t\t  "),"   \t\t\t\t  "),"   \t\t\t\t  ",(0,a.kt)("tbody",null,"   \t\t\t\t\t  ",(0,a.kt)("tr",null,"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"VI"),"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"Visa"),"   \t\t\t\t\t  "),"   \t\t\t\t\t  ",(0,a.kt)("tr",null,"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"AX"),"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"American Express"),"   \t\t\t\t\t  "),"                     ",(0,a.kt)("tr",null,"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"BC"),"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"BC Card"),"   \t\t\t\t\t  "),"   \t\t\t\t\t  ",(0,a.kt)("tr",null,"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"CA"),"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"MasterCard"),"   \t\t\t\t\t  "),"   \t\t\t\t\t  ",(0,a.kt)("tr",null,"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"CB"),"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"Carte Blanche"),"   \t\t\t\t\t  "),"                     ",(0,a.kt)("tr",null,"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"CU"),"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"China Union Pay"),"   \t\t\t\t\t  "),"   \t\t\t\t\t  ",(0,a.kt)("tr",null,"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"DS"),"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"Discover"),"   \t\t\t\t\t  "),"   \t\t\t\t\t  ",(0,a.kt)("tr",null,"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"DC"),"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"Diners Club"),"   \t\t\t\t\t  "),"                     ",(0,a.kt)("tr",null,"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"T"),"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"Carta Si"),"   \t\t\t\t\t  "),"                     ",(0,a.kt)("tr",null,"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"R"),"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"Carte Bleue"),"   \t\t\t\t\t  "),"                     ",(0,a.kt)("tr",null,"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"N"),"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"Dankort"),"   \t\t\t\t\t  "),"                     ",(0,a.kt)("tr",null,"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"L"),"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"Delta"),"   \t\t\t\t\t  "),"                     ",(0,a.kt)("tr",null,"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"E"),"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"Electron"),"   \t\t\t\t\t  "),"                     ",(0,a.kt)("tr",null,"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"JC"),"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"Japan Credit Bureau"),"   \t\t\t\t\t  "),"                     ",(0,a.kt)("tr",null,"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"TO"),"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"Maestro"),"   \t\t\t\t\t  "),"                     ",(0,a.kt)("tr",null,"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"S"),"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"Switch"),"   \t\t\t\t\t  "),"                     ",(0,a.kt)("tr",null,"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"EC"),"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"Electronic Cash"),"   \t\t\t\t\t  "),"                     ",(0,a.kt)("tr",null,"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"EU"),"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"EuroCard"),"   \t\t\t\t\t  "),"                     ",(0,a.kt)("tr",null,"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"TP"),"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"Universal air travel card"),"   \t\t\t\t\t  "),"                     ",(0,a.kt)("tr",null,"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"OP"),"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"optima"),"   \t\t\t\t\t  "),"                     ",(0,a.kt)("tr",null,"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"ER"),"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"Air Canada/RnRoute"),"   \t\t\t\t\t  "),"                     ",(0,a.kt)("tr",null,"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"XS"),"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"access"),"   \t\t\t\t\t  "),"                     ",(0,a.kt)("tr",null,"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"O"),"   \t\t\t\t\t\t  ",(0,a.kt)("td",null,"others"),"   \t\t\t\t\t  "),"   \t\t\t\t  "),"   \t\t\t"),"         "),"     ")," "))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Hotel/ExclusiveDeal"),(0,a.kt)("td",{parentName:"tr",align:null},"0..1"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"Indicates that the Hotel has an Exclusive Deal.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Hotel/PropertyCategory"),(0,a.kt)("td",{parentName:"tr",align:null},"0..1"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Hotels property type. Similar to Type, but on supplier\u2019s side.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PropertyCategory/Code"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Supplier\u2019s property code.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PropertyCategory/Name"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Supplier\u2019s property name.")))),(0,a.kt)("h3",{id:"error"},"Error"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" xmlns:U="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">\n    <s:Header>\n        <wsse:Security>\n            <U:Timestamp>\n                <U:Created>2023-11-10T11:15:37.445</U:Created>\n                <U:Expires>2023-11-10T11:45:37.445</U:Expires>\n            </U:Timestamp>\n        </wsse:Security>\n    </s:Header>\n    <s:Body>\n        <HotelListResponse>\n            <HotelListResult>\n                <applicationErrors>\n                   <type>103</type>\n                   <code>103</code>\n                   <description>Too many requests to the supplier.</description>\n                </applicationErrors>\n            </HotelListResult>\n        </HotelListResponse>\n    </s:Body>\n</s:Envelope>\n')),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Error codes that should be included in the response in the event of an error"),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,(0,a.kt)("strong",null,"Error Code")),(0,a.kt)("th",null,(0,a.kt)("strong",null,"Error Description")))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"101"),(0,a.kt)("td",null,"System Exception (Exception not controlled or not classified as general exception).")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"102"),(0,a.kt)("td",null,"Supplier Error.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"103"),(0,a.kt)("td",null,"Too many requests to the supplier.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"104"),(0,a.kt)("td",null,"Timeout (Timeout during the execution of an operation (look in the common attribute timeout )).")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"105"),(0,a.kt)("td",null,"Communication Error.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"204"),(0,a.kt)("td",null,"Supplier returns 0 results in availability.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"205"),(0,a.kt)("td",null,"The Supplier doesn\u2019t accept the distribution RQ.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"206"),(0,a.kt)("td",null,"The Supplier doesn\u2019t accept the dates RQ.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"207"),(0,a.kt)("td",null,"The Supplier doesn\u2019t accept the request RQ.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"301"),(0,a.kt)("td",null,"Option not found in policies.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"302"),(0,a.kt)("td",null,"Hotel Not Found in DescriptiveInfo.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"303"),(0,a.kt)("td",null,"Booking not confirmed in the supplier\u2019s system."))))))))}k.isMDXComponent=!0}}]);
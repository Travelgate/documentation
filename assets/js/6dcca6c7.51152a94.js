"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[73137],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),s=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(r),g=n,f=p["".concat(d,".").concat(g)]||p[g]||u[g]||i;return r?a.createElement(f,l(l({ref:t},c),{},{components:r})):a.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=g;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[p]="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},41357:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>u,Bullet:()=>c,Details:()=>f,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>o,default:()=>b,frontMatter:()=>l,metadata:()=>d,toc:()=>g});var a=r(87462),n=r(67294),i=r(3905);const l={id:"flight-origin-dest-criteria-input",title:"FlightOriginDestCriteriaInput",hide_table_of_contents:!1},o=void 0,d={unversionedId:"inputs/flight-origin-dest-criteria-input",id:"inputs/flight-origin-dest-criteria-input",title:"FlightOriginDestCriteriaInput",description:"The Origin and Destination airport/city pair wich restrict a passenger journey or a flight.",source:"@site/api/inputs/flight-origin-dest-criteria-input.mdx",sourceDirName:"inputs",slug:"/inputs/flight-origin-dest-criteria-input",permalink:"/api/inputs/flight-origin-dest-criteria-input",draft:!1,tags:[],version:"current",frontMatter:{id:"flight-origin-dest-criteria-input",title:"FlightOriginDestCriteriaInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"FlightOfferWhereInput",permalink:"/api/inputs/flight-offer-where-input"},next:{title:"FlightSegmentWhereInput",permalink:"/api/inputs/flight-segment-where-input"}},s={},c=()=>(0,i.kt)(n.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,i.kt)(n.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,i.kt)(n.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>FlightOriginDestCriteriaInput.<b>departure</b></code><Bullet /><code>Departure!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-flightorigindestcriteriainputbdeparturebcodedeparture--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FlightOriginDestCriteriaInput.<b>arrival</b></code><Bullet /><code>Arrival!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-flightorigindestcriteriainputbarrivalbcodearrival--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FlightOriginDestCriteriaInput.<b>departureAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-flightorigindestcriteriainputbdepartureatbcodedatetime--",level:4},{value:"Member of",id:"member-of",level:3}],f=e=>{let{dataOpen:t,dataClose:r,children:l,startOpen:o=!1}=e;const[d,s]=(0,n.useState)(o);return(0,i.kt)("details",(0,a.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},d?t:r),d&&l)},m={Bullet:c,SpecifiedBy:p,Badge:u,toc:g,Details:f},h="wrapper";function b(e){let{components:t,...r}=e;return(0,i.kt)(h,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Origin and Destination airport/city pair wich restrict a passenger journey or a flight."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input FlightOriginDestCriteriaInput {\n  departure: Departure!\n  arrival: Arrival!\n  departureAt: DateTime!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-flightorigindestcriteriainputbdeparturebcodedeparture--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"FlightOriginDestCriteriaInput.",(0,i.kt)("b",null,"departure"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/scalars/departure"},(0,i.kt)("inlineCode",{parentName:"a"},"Departure!"))," ",(0,i.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-flightorigindestcriteriainputbarrivalbcodearrival--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"FlightOriginDestCriteriaInput.",(0,i.kt)("b",null,"arrival"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/scalars/arrival"},(0,i.kt)("inlineCode",{parentName:"a"},"Arrival!"))," ",(0,i.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-flightorigindestcriteriainputbdepartureatbcodedatetime--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"FlightOriginDestCriteriaInput.",(0,i.kt)("b",null,"departureAt"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,i.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/inputs/flight-offer-where-input"},(0,i.kt)("inlineCode",{parentName:"a"},"FlightOfferWhereInput"))," ",(0,i.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);
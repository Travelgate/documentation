"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[18190],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),i=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=i(n),u=o,b=p["".concat(d,".").concat(u)]||p[u]||g[u]||r;return n?a.createElement(b,l(l({ref:t},c),{},{components:n})):a.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[p]="string"==typeof e?e:o,l[1]=s;for(var i=2;i<r;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},13642:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>g,Bullet:()=>c,Details:()=>b,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var a=n(87462),o=n(67294),r=n(3905);const l={id:"passenger-book-input",title:"PassengerBookInput",hide_table_of_contents:!1},s=void 0,d={unversionedId:"inputs/passenger-book-input",id:"inputs/passenger-book-input",title:"PassengerBookInput",description:"No description",source:"@site/api/inputs/passenger-book-input.mdx",sourceDirName:"inputs",slug:"/inputs/passenger-book-input",permalink:"/api/inputs/passenger-book-input",draft:!1,tags:[],version:"current",frontMatter:{id:"passenger-book-input",title:"PassengerBookInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PartnerWhereUniqueInput",permalink:"/api/inputs/partner-where-unique-input"},next:{title:"PassengerInput",permalink:"/api/inputs/passenger-input"}},i={},c=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PassengerBookInput.<b>index</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-passengerbookinputbindexbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PassengerBookInput.<b>name</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-passengerbookinputbnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PassengerBookInput.<b>surname</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-passengerbookinputbsurnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PassengerBookInput.<b>documentNumber</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-passengerbookinputbdocumentnumberbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PassengerBookInput.<b>documentExpiration</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-passengerbookinputbdocumentexpirationbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PassengerBookInput.<b>documentType</b></code><Bullet /><code>DocumentType!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-passengerbookinputbdocumenttypebcodedocumenttype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PassengerBookInput.<b>gender</b></code><Bullet /><code>GenderType!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-passengerbookinputbgenderbcodegendertype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PassengerBookInput.<b>birthDate</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-passengerbookinputbbirthdatebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PassengerBookInput.<b>nationality</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-passengerbookinputbnationalitybcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PassengerBookInput.<b>cityResident</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-passengerbookinputbcityresidentbcodestring-",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:s=!1}=e;const[d,i]=(0,o.useState)(s);return(0,r.kt)("details",(0,a.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},d?t:n),d&&l)},m={Bullet:c,SpecifiedBy:p,Badge:g,toc:u,Details:b},k="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input PassengerBookInput {\n  index: Int!\n  name: String\n  surname: String\n  documentNumber: String\n  documentExpiration: String\n  documentType: DocumentType!\n  gender: GenderType!\n  birthDate: String\n  nationality: String\n  cityResident: String\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-passengerbookinputbindexbcodeint--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PassengerBookInput.",(0,r.kt)("b",null,"index"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Used to match with requested passengers in search.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-passengerbookinputbnamebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PassengerBookInput.",(0,r.kt)("b",null,"name"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-passengerbookinputbsurnamebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PassengerBookInput.",(0,r.kt)("b",null,"surname"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-passengerbookinputbdocumentnumberbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PassengerBookInput.",(0,r.kt)("b",null,"documentNumber"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Identification document number.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-passengerbookinputbdocumentexpirationbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PassengerBookInput.",(0,r.kt)("b",null,"documentExpiration"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Passenger identification expiration date, ISO 8601 Format.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-passengerbookinputbdocumenttypebcodedocumenttype--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PassengerBookInput.",(0,r.kt)("b",null,"documentType"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/enums/document-type"},(0,r.kt)("inlineCode",{parentName:"a"},"DocumentType!"))," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-passengerbookinputbgenderbcodegendertype--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PassengerBookInput.",(0,r.kt)("b",null,"gender"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/enums/gender-type"},(0,r.kt)("inlineCode",{parentName:"a"},"GenderType!"))," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-passengerbookinputbbirthdatebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PassengerBookInput.",(0,r.kt)("b",null,"birthDate"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Passenger birth day, ISO 8601 Format.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-passengerbookinputbnationalitybcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PassengerBookInput.",(0,r.kt)("b",null,"nationality"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Alpha 2 Code, ISO 3166-1 Format.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-passengerbookinputbcityresidentbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PassengerBookInput.",(0,r.kt)("b",null,"cityResident"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The city where the passenger resides, Is mandatory to apply the resident discount")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/inputs/traveller-book-input"},(0,r.kt)("inlineCode",{parentName:"a"},"TravellerBookInput"))," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);
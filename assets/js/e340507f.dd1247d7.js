"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[31486],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=d(a),b=r,g=s["".concat(p,".").concat(b)]||s[b]||u[b]||l;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},54250:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>c,Details:()=>g,SpecifiedBy:()=>s,assets:()=>d,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>p,toc:()=>b});var n=a(87462),r=a(67294),l=a(3905);const o={id:"supplier-create-input",title:"SupplierCreateInput",hide_table_of_contents:!1},i=void 0,p={unversionedId:"inputs/supplier-create-input",id:"inputs/supplier-create-input",title:"SupplierCreateInput",description:"Create new Supplier input",source:"@site/api/inputs/supplier-create-input.mdx",sourceDirName:"inputs",slug:"/inputs/supplier-create-input",permalink:"/api/inputs/supplier-create-input",draft:!1,tags:[],version:"current",frontMatter:{id:"supplier-create-input",title:"SupplierCreateInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SupplierContextInput",permalink:"/api/inputs/supplier-context-input"},next:{title:"SupplierFilter",permalink:"/api/inputs/supplier-filter"}},d={},c=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierCreateInput.<b>code</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-suppliercreateinputbcodebcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierCreateInput.<b>name</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-suppliercreateinputbnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierCreateInput.<b>providerCode</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-suppliercreateinputbprovidercodebcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierCreateInput.<b>groupCode</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-suppliercreateinputbgroupcodebcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierCreateInput.<b>serviceApi</b></code><Bullet /><code>ID</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-suppliercreateinputbserviceapibcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierCreateInput.<b>isActive</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-suppliercreateinputbisactivebcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierCreateInput.<b>groupContentCode</b></code><Bullet /><code>ID</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-suppliercreateinputbgroupcontentcodebcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierCreateInput.<b>id</b></code><Bullet /><code>ID</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-suppliercreateinputbidbcodeid-",level:4}],g=e=>{let{dataOpen:t,dataClose:a,children:o,startOpen:i=!1}=e;const[p,d]=(0,r.useState)(i);return(0,l.kt)("details",(0,n.Z)({},p?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},p?t:a),p&&o)},m={Bullet:c,SpecifiedBy:s,Badge:u,toc:b,Details:g},k="wrapper";function y(e){let{components:t,...a}=e;return(0,l.kt)(k,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Create new Supplier input"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"input SupplierCreateInput {\n  code: ID!\n  name: String!\n  providerCode: ID!\n  groupCode: ID!\n  serviceApi: ID\n  isActive: Boolean\n  groupContentCode: ID\n  id: ID\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-suppliercreateinputbcodebcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SupplierCreateInput.",(0,l.kt)("b",null,"code"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"No blank, no special characters")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-suppliercreateinputbnamebcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SupplierCreateInput.",(0,l.kt)("b",null,"name"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Supplier name")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-suppliercreateinputbprovidercodebcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SupplierCreateInput.",(0,l.kt)("b",null,"providerCode"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Provider code")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-suppliercreateinputbgroupcodebcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SupplierCreateInput.",(0,l.kt)("b",null,"groupCode"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"IAM Group code. The group must exist.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-suppliercreateinputbserviceapibcodeid-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SupplierCreateInput.",(0,l.kt)("b",null,"serviceApi"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"ServiceAPI indicates the type of the connection (integer), hotel by default"),(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},"hotel"),(0,l.kt)("li",{parentName:"ol"},"transportation"),(0,l.kt)("li",{parentName:"ol"},"car"),(0,l.kt)("li",{parentName:"ol"},"transfers"),(0,l.kt)("li",{parentName:"ol"},"activities"),(0,l.kt)("li",{parentName:"ol"},"virtualaccount"),(0,l.kt)("li",{parentName:"ol"},"payment"),(0,l.kt)("li",{parentName:"ol"},"package"))),(0,l.kt)("h4",{id:"code-style-fontweight-normal-suppliercreateinputbisactivebcodeboolean-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SupplierCreateInput.",(0,l.kt)("b",null,"isActive"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Indicates whether a Supplier is active or inactive, true by default")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-suppliercreateinputbgroupcontentcodebcodeid-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SupplierCreateInput.",(0,l.kt)("b",null,"groupContentCode"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"GroupContent code.\nUse allGroupContents to get a list of valid GroupContents or create a new one with createGroupContent")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-suppliercreateinputbidbcodeid-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SupplierCreateInput.",(0,l.kt)("b",null,"id"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Optional, use it only if a specific ID has to be specified")))}y.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[51953],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>y});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,y=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return a?n.createElement(y,l(l({ref:t},d),{},{components:a})):n.createElement(y,l({ref:t},d))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},76935:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>y,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=a(87462),r=a(67294),o=a(3905);const l={id:"create-system-input",title:"CreateSystemInput",hide_table_of_contents:!1},s=void 0,i={unversionedId:"inputs/create-system-input",id:"inputs/create-system-input",title:"CreateSystemInput",description:"System input for CreateSystem",source:"@site/api/inputs/create-system-input.mdx",sourceDirName:"inputs",slug:"/inputs/create-system-input",permalink:"/api/inputs/create-system-input",draft:!1,tags:[],version:"current",frontMatter:{id:"create-system-input",title:"CreateSystemInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CreateOrganizationInput",permalink:"/api/inputs/create-organization-input"},next:{title:"CriteriaBookingDatesInput",permalink:"/api/inputs/criteria-booking-dates-input"}},c={},d=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CreateSystemInput.<b>name</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-createsysteminputbnamebcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateSystemInput.<b>isActive</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-createsysteminputbisactivebcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateSystemInput.<b>group</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-createsysteminputbgroupbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateSystemInput.<b>owner</b></code><Bullet /><code>ID</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-createsysteminputbownerbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateSystemInput.<b>suppliers</b></code><Bullet /><code>[ID]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-createsysteminputbsuppliersbcodeid--",level:4}],y=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:s=!1}=e;const[i,c]=(0,r.useState)(s);return(0,o.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&l)},b={Bullet:d,SpecifiedBy:p,Badge:u,toc:m,Details:y},g="wrapper";function f(e){let{components:t,...a}=e;return(0,o.kt)(g,(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"System input for CreateSystem"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input CreateSystemInput {\n  name: ID!\n  isActive: Boolean\n  group: ID!\n  owner: ID\n  suppliers: [ID]\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-createsysteminputbnamebcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CreateSystemInput.",(0,o.kt)("b",null,"name"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-createsysteminputbisactivebcodeboolean-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CreateSystemInput.",(0,o.kt)("b",null,"isActive"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-createsysteminputbgroupbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CreateSystemInput.",(0,o.kt)("b",null,"group"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-createsysteminputbownerbcodeid-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CreateSystemInput.",(0,o.kt)("b",null,"owner"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-createsysteminputbsuppliersbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CreateSystemInput.",(0,o.kt)("b",null,"suppliers"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"[ID]"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null))}f.isMDXComponent=!0}}]);
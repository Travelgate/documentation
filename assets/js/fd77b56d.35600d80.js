"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[97028],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,p=function(e,t){if(null==e)return{};var n,a,p={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,p=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),g=p,m=u["".concat(o,".").concat(g)]||u[g]||c[g]||i;return n?a.createElement(m,r(r({ref:t},s),{},{components:n})):a.createElement(m,r({ref:t},s))}));function m(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var i=n.length,r=new Array(i);r[0]=g;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:p,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},26377:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>c,Bullet:()=>s,Details:()=>m,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>r,metadata:()=>o,toc:()=>g});var a=n(87462),p=n(67294),i=n(3905);const r={id:"set-supplier-mapping-input",title:"SetSupplierMappingInput",hide_table_of_contents:!1},l=void 0,o={unversionedId:"inputs/set-supplier-mapping-input",id:"inputs/set-supplier-mapping-input",title:"SetSupplierMappingInput",description:"No description",source:"@site/api/inputs/set-supplier-mapping-input.mdx",sourceDirName:"inputs",slug:"/inputs/set-supplier-mapping-input",permalink:"/api/inputs/set-supplier-mapping-input",draft:!1,tags:[],version:"current",frontMatter:{id:"set-supplier-mapping-input",title:"SetSupplierMappingInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ServiceApiFilter",permalink:"/api/inputs/service-api-filter"},next:{title:"SettingsBaseInput",permalink:"/api/inputs/settings-base-input"}},d={},s=()=>(0,i.kt)(p.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,i.kt)(p.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),c=e=>(0,i.kt)(p.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SetSupplierMappingInput.<b>entity</b></code><Bullet /><code>MappingEntityType!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-setsuppliermappinginputbentitybcodemappingentitytype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SetSupplierMappingInput.<b>entityCode</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-setsuppliermappinginputbentitycodebcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SetSupplierMappingInput.<b>supplierCode</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-setsuppliermappinginputbsuppliercodebcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SetSupplierMappingInput.<b>mappings</b></code><Bullet /><code>[ContextedCodeInput!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-setsuppliermappinginputbmappingsbcodecontextedcodeinput--",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:r,startOpen:l=!1}=e;const[o,d]=(0,p.useState)(l);return(0,i.kt)("details",(0,a.Z)({},o?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},o?t:n),o&&r)},y={Bullet:s,SpecifiedBy:u,Badge:c,toc:g,Details:m},b="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(b,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input SetSupplierMappingInput {\n  entity: MappingEntityType!\n  entityCode: ID!\n  supplierCode: ID!\n  mappings: [ContextedCodeInput!]!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-setsuppliermappinginputbentitybcodemappingentitytype--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"SetSupplierMappingInput.",(0,i.kt)("b",null,"entity"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/enums/mapping-entity-type"},(0,i.kt)("inlineCode",{parentName:"a"},"MappingEntityType!"))," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"entity whose the codes are identifiers")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-setsuppliermappinginputbentitycodebcodeid--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"SetSupplierMappingInput.",(0,i.kt)("b",null,"entityCode"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"supplier entity code")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-setsuppliermappinginputbsuppliercodebcodeid--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"SetSupplierMappingInput.",(0,i.kt)("b",null,"supplierCode"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"supplier code")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-setsuppliermappinginputbmappingsbcodecontextedcodeinput--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"SetSupplierMappingInput.",(0,i.kt)("b",null,"mappings"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/inputs/contexted-code-input"},(0,i.kt)("inlineCode",{parentName:"a"},"[ContextedCodeInput!]!"))," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"list of mappings")),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/inputs/inscribe-set-mapping-input"},(0,i.kt)("inlineCode",{parentName:"a"},"InscribeSetMappingInput"))," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);
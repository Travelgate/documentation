"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[94908],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>p});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),o=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},s=function(e){var t=o(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=o(a),g=n,p=m["".concat(l,".").concat(g)]||m[g]||b[g]||c;return a?r.createElement(p,d(d({ref:t},s),{},{components:a})):r.createElement(p,d({ref:t},s))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,d=new Array(c);d[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:n,d[1]=i;for(var o=2;o<c;o++)d[o]=a[o];return r.createElement.apply(null,d)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},49514:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>b,Bullet:()=>s,Details:()=>p,SpecifiedBy:()=>m,assets:()=>o,contentTitle:()=>i,default:()=>y,frontMatter:()=>d,metadata:()=>l,toc:()=>g});var r=a(87462),n=a(67294),c=a(3905);const d={id:"search-criteria",title:"SearchCriteria",hide_table_of_contents:!1},i=void 0,l={unversionedId:"objects/search-criteria",id:"objects/search-criteria",title:"SearchCriteria",description:"No description",source:"@site/api/objects/search-criteria.mdx",sourceDirName:"objects",slug:"/objects/search-criteria",permalink:"/api/objects/search-criteria",draft:!1,tags:[],version:"current",frontMatter:{id:"search-criteria",title:"SearchCriteria",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SearchCriteriaStaticDates",permalink:"/api/objects/search-criteria-static-dates"},next:{title:"SearchOption",permalink:"/api/objects/search-option"}},o={},s=()=>(0,c.kt)(n.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,c.kt)(n.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,c.kt)(n.Fragment,null,(0,c.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SearchCriteria.<b>code</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-searchcriteriabcodebcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SearchCriteria.<b>searchCriteriaData</b></code><Bullet /><code>SearchCriteriaData</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-searchcriteriabsearchcriteriadatabcodesearchcriteriadata-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SearchCriteria.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-searchcriteriabcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SearchCriteria.<b>updatedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-searchcriteriabupdatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SearchCriteria.<b>deletedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-searchcriteriabdeletedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SearchCriteria.<b>adviseMessage</b></code><Bullet /><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-searchcriteriabadvisemessagebcodeadvisemessage--",level:4},{value:"Member Of",id:"member-of",level:3}],p=e=>{let{dataOpen:t,dataClose:a,children:d,startOpen:i=!1}=e;const[l,o]=(0,n.useState)(i);return(0,c.kt)("details",(0,r.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,c.kt)("summary",{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"}},l?t:a),l&&d)},h={Bullet:s,SpecifiedBy:m,Badge:b,toc:g,Details:p},u="wrapper";function y(e){let{components:t,...a}=e;return(0,c.kt)(u,(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"No description"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type SearchCriteria {\n  code: ID!\n  searchCriteriaData: SearchCriteriaData\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  deletedAt: DateTime!\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-searchcriteriabcodebcodeid--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SearchCriteria.",(0,c.kt)("b",null,"code"))),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,c.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,c.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-searchcriteriabsearchcriteriadatabcodesearchcriteriadata-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SearchCriteria.",(0,c.kt)("b",null,"searchCriteriaData"))),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/objects/search-criteria-data"},(0,c.kt)("inlineCode",{parentName:"a"},"SearchCriteriaData"))," ",(0,c.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-searchcriteriabcreatedatbcodedatetime--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SearchCriteria.",(0,c.kt)("b",null,"createdAt"))),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,c.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,c.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-searchcriteriabupdatedatbcodedatetime--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SearchCriteria.",(0,c.kt)("b",null,"updatedAt"))),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,c.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,c.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-searchcriteriabdeletedatbcodedatetime--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SearchCriteria.",(0,c.kt)("b",null,"deletedAt"))),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,c.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,c.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-searchcriteriabadvisemessagebcodeadvisemessage--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SearchCriteria.",(0,c.kt)("b",null,"adviseMessage"))),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/objects/advise-message"},(0,c.kt)("inlineCode",{parentName:"a"},"[AdviseMessage!]"))," ",(0,c.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,c.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-searchcriteriaadvisemessageblevelbcodeadvisemessagelevel--"},(0,c.kt)("a",{parentName:"h5",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SearchCriteria.adviseMessage.",(0,c.kt)("b",null,"level"))),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h5",href:"/api/enums/advise-message-level"},(0,c.kt)("inlineCode",{parentName:"a"},"[AdviseMessageLevel]"))," ",(0,c.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,c.kt)(b,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"}))),(0,c.kt)("h3",{id:"member-of"},"Member Of"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api/objects/search-criteria-edge"},(0,c.kt)("inlineCode",{parentName:"a"},"SearchCriteriaEdge"))," ",(0,c.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/search-criteria-mutation"},(0,c.kt)("inlineCode",{parentName:"a"},"SearchCriteriaMutation"))," ",(0,c.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);
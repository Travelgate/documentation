"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[41089],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>y});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),i=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(d.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=i(a),p=r,y=g["".concat(d,".").concat(p)]||g[p]||u[p]||o;return a?n.createElement(y,s(s({ref:t},c),{},{components:a})):n.createElement(y,s({ref:t},c))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[g]="string"==typeof e?e:r,s[1]=l;for(var i=2;i<o;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},88236:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>c,Details:()=>y,SpecifiedBy:()=>g,assets:()=>i,contentTitle:()=>l,default:()=>k,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var n=a(87462),r=a(67294),o=a(3905);const s={id:"stats-query",title:"StatsQuery",hide_table_of_contents:!1},l=void 0,d={unversionedId:"objects/stats-query",id:"objects/stats-query",title:"StatsQuery",description:"No description",source:"@site/api/objects/stats-query.mdx",sourceDirName:"objects",slug:"/objects/stats-query",permalink:"/api/objects/stats-query",draft:!1,tags:[],version:"current",frontMatter:{id:"stats-query",title:"StatsQuery",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"StatsInfo",permalink:"/api/objects/stats-info"},next:{title:"StatsRealTimeRangeData",permalink:"/api/objects/stats-real-time-range-data"}},i={},c=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),g=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>StatsQuery.<b>report</b></code><Bullet /><code>StatsConnection!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-statsquerybreportbcodestatsconnection--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StatsQuery.report.<b>first</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-statsqueryreportbfirstbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>StatsQuery.report.<b>last</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-statsqueryreportblastbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>StatsQuery.report.<b>before</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-statsqueryreportbbeforebcodestring-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>StatsQuery.report.<b>after</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-statsqueryreportbafterbcodestring-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>StatsQuery.<b>getAggregationStats</b></code><Bullet /><code>StatsAggregationConnection!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-statsquerybgetaggregationstatsbcodestatsaggregationconnection--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StatsQuery.getAggregationStats.<b>groupBy</b></code><Bullet /><code>StatsAggregationConnectionGroupByInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-statsquerygetaggregationstatsbgroupbybcodestatsaggregationconnectiongroupbyinput--",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>StatsQuery.<b>getRealTimeRangeStats</b></code><Bullet /><code>StatsRealTimeRange!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-statsquerybgetrealtimerangestatsbcodestatsrealtimerange--",level:4},{value:"Returned by",id:"returned-by",level:3}],y=e=>{let{dataOpen:t,dataClose:a,children:s,startOpen:l=!1}=e;const[d,i]=(0,r.useState)(l);return(0,o.kt)("details",(0,n.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},d?t:a),d&&s)},b={Bullet:c,SpecifiedBy:g,Badge:u,toc:p,Details:y},m="wrapper";function k(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type StatsQuery {\n  report(\n    filter: StatsFilterInput!\n    first: Int\n    last: Int\n    before: String\n    after: String\n  ): StatsConnection!\n  getAggregationStats(\n    where: StatsAggregationConnectionWhereInput!\n    groupBy: StatsAggregationConnectionGroupByInput!\n  ): StatsAggregationConnection!\n  getRealTimeRangeStats(\n    where: StatsRealTimeRangeWhereInput!\n  ): StatsRealTimeRange!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-statsquerybreportbcodestatsconnection--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StatsQuery.",(0,o.kt)("b",null,"report"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/stats-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"StatsConnection!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The report query, represents all of the entry points into our object graph"),(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-statsqueryreportbfilterbcodestatsfilterinput--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StatsQuery.report.",(0,o.kt)("b",null,"filter"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/inputs/stats-filter-input"},(0,o.kt)("inlineCode",{parentName:"a"},"StatsFilterInput!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}))),(0,o.kt)("h5",{id:"code-style-fontweight-normal-statsqueryreportbfirstbcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StatsQuery.report.",(0,o.kt)("b",null,"first"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h5",{id:"code-style-fontweight-normal-statsqueryreportblastbcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StatsQuery.report.",(0,o.kt)("b",null,"last"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h5",{id:"code-style-fontweight-normal-statsqueryreportbbeforebcodestring-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StatsQuery.report.",(0,o.kt)("b",null,"before"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h5",{id:"code-style-fontweight-normal-statsqueryreportbafterbcodestring-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StatsQuery.report.",(0,o.kt)("b",null,"after"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-statsquerybgetaggregationstatsbcodestatsaggregationconnection--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StatsQuery.",(0,o.kt)("b",null,"getAggregationStats"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/stats-aggregation-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"StatsAggregationConnection!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Query to retrieve Stats Aggregated"),(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-statsquerygetaggregationstatsbwherebcodestatsaggregationconnectionwhereinput--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StatsQuery.getAggregationStats.",(0,o.kt)("b",null,"where"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/inputs/stats-aggregation-connection-where-input"},(0,o.kt)("inlineCode",{parentName:"a"},"StatsAggregationConnectionWhereInput!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}))),(0,o.kt)("h5",{id:"code-style-fontweight-normal-statsquerygetaggregationstatsbgroupbybcodestatsaggregationconnectiongroupbyinput--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StatsQuery.getAggregationStats.",(0,o.kt)("b",null,"groupBy"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/inputs/stats-aggregation-connection-group-by-input"},(0,o.kt)("inlineCode",{parentName:"a"},"StatsAggregationConnectionGroupByInput!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-statsquerybgetrealtimerangestatsbcodestatsrealtimerange--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StatsQuery.",(0,o.kt)("b",null,"getRealTimeRangeStats"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/stats-real-time-range"},(0,o.kt)("inlineCode",{parentName:"a"},"StatsRealTimeRange!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Query to retrieve Real Time Range will be return according to TimeRange input"),(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-statsquerygetrealtimerangestatsbwherebcodestatsrealtimerangewhereinput--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StatsQuery.getRealTimeRangeStats.",(0,o.kt)("b",null,"where"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/inputs/stats-real-time-range-where-input"},(0,o.kt)("inlineCode",{parentName:"a"},"StatsRealTimeRangeWhereInput!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}))),(0,o.kt)("h3",{id:"returned-by"},"Returned by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/queries/stats"},(0,o.kt)("inlineCode",{parentName:"a"},"stats"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"query",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);
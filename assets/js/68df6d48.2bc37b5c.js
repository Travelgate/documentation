"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[62676],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var o=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,o,l=function(e,t){if(null==e)return{};var a,o,l={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=o.createContext({}),c=function(e){var t=o.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},b="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),b=c(a),p=l,k=b["".concat(i,".").concat(p)]||b[p]||m[p]||n;return a?o.createElement(k,r(r({ref:t},s),{},{components:a})):o.createElement(k,r({ref:t},s))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,r=new Array(n);r[0]=p;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d[b]="string"==typeof e?e:l,r[1]=d;for(var c=2;c<n;c++)r[c]=a[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},89207:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>s,Details:()=>k,SpecifiedBy:()=>b,assets:()=>c,contentTitle:()=>d,default:()=>f,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=a(87462),l=a(67294),n=a(3905);const r={id:"metadata-book",title:"MetadataBook",hide_table_of_contents:!1},d=void 0,i={unversionedId:"objects/metadata-book",id:"objects/metadata-book",title:"MetadataBook",description:"Return information about book",source:"@site/api/objects/metadata-book.mdx",sourceDirName:"objects",slug:"/objects/metadata-book",permalink:"/api/objects/metadata-book",draft:!1,tags:[],version:"current",frontMatter:{id:"metadata-book",title:"MetadataBook",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"MetadataBeds",permalink:"/api/objects/metadata-beds"},next:{title:"MetadataBooking",permalink:"/api/objects/metadata-booking"}},c={},s=()=>(0,n.kt)(l.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),b=e=>(0,n.kt)(l.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,n.kt)(l.Fragment,null,(0,n.kt)("span",{className:e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>MetadataBook.<b>allowsDeltaPrice</b></code><Bullet /><code>ReviewedBool!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-metadatabookballowsdeltapricebcodereviewedbool--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MetadataBook.<b>requiredAllPassengers</b></code><Bullet /><code>ReviewedBool!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-metadatabookbrequiredallpassengersbcodereviewedbool--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MetadataBook.<b>allowsRemarks</b></code><Bullet /><code>ReviewedBool!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-metadatabookballowsremarksbcodereviewedbool--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MetadataBook.<b>informBillingSupplier</b></code><Bullet /><code>ReviewedBool!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-metadatabookbinformbillingsupplierbcodereviewedbool--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MetadataBook.<b>informHotelReference</b></code><Bullet /><code>ReviewedBool!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-metadatabookbinformhotelreferencebcodereviewedbool--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MetadataBook.<b>informPrice</b></code><Bullet /><code>ReviewedBool!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-metadatabookbinformpricebcodereviewedbool--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MetadataBook.<b>requiredNationality</b></code><Bullet /><code>ReviewedBool</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-metadatabookbrequirednationalitybcodereviewedbool-",level:4},{value:"Member of",id:"member-of",level:3}],k=e=>{let{dataOpen:t,dataClose:a,children:r,startOpen:d=!1}=e;const[i,c]=(0,l.useState)(d);return(0,n.kt)("details",(0,o.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,n.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&r)},u={Bullet:s,SpecifiedBy:b,Badge:m,toc:p,Details:k},g="wrapper";function f(e){let{components:t,...a}=e;return(0,n.kt)(g,(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Return information about book"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type MetadataBook {\n  allowsDeltaPrice: ReviewedBool!\n  requiredAllPassengers: ReviewedBool!\n  allowsRemarks: ReviewedBool!\n  informBillingSupplier: ReviewedBool!\n  informHotelReference: ReviewedBool!\n  informPrice: ReviewedBool!\n  requiredNationality: ReviewedBool\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-metadatabookballowsdeltapricebcodereviewedbool--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MetadataBook.",(0,n.kt)("b",null,"allowsDeltaPrice"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/reviewed-bool"},(0,n.kt)("inlineCode",{parentName:"a"},"ReviewedBool!"))," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Allows a margin stipulated by the client for booking with a higher price (delta).")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-metadatabookbrequiredallpassengersbcodereviewedbool--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MetadataBook.",(0,n.kt)("b",null,"requiredAllPassengers"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/reviewed-bool"},(0,n.kt)("inlineCode",{parentName:"a"},"ReviewedBool!"))," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Required data for all passengers (names and surnames).")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-metadatabookballowsremarksbcodereviewedbool--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MetadataBook.",(0,n.kt)("b",null,"allowsRemarks"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/reviewed-bool"},(0,n.kt)("inlineCode",{parentName:"a"},"ReviewedBool!"))," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Informs if the supplier allows send remarks.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-metadatabookbinformbillingsupplierbcodereviewedbool--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MetadataBook.",(0,n.kt)("b",null,"informBillingSupplier"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/reviewed-bool"},(0,n.kt)("inlineCode",{parentName:"a"},"ReviewedBool!"))," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Informs if the supplier billing code.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-metadatabookbinformhotelreferencebcodereviewedbool--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MetadataBook.",(0,n.kt)("b",null,"informHotelReference"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/reviewed-bool"},(0,n.kt)("inlineCode",{parentName:"a"},"ReviewedBool!"))," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Informs if the supplier returns the hotel reference number.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-metadatabookbinformpricebcodereviewedbool--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MetadataBook.",(0,n.kt)("b",null,"informPrice"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/reviewed-bool"},(0,n.kt)("inlineCode",{parentName:"a"},"ReviewedBool!"))," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The supplier informs the book price.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-metadatabookbrequirednationalitybcodereviewedbool-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MetadataBook.",(0,n.kt)("b",null,"requiredNationality"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/reviewed-bool"},(0,n.kt)("inlineCode",{parentName:"a"},"ReviewedBool"))," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Informs if the supplier requires nationality")),(0,n.kt)("h3",{id:"member-of"},"Member of"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/objects/metadata-data"},(0,n.kt)("inlineCode",{parentName:"a"},"MetadataData"))," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);
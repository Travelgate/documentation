"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[69807],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var o=a(67294);function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){d(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,o,d=function(e,t){if(null==e)return{};var a,o,d={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(d[a]=e[a]);return d}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(d[a]=e[a])}return d}var c=o.createContext({}),s=function(e){var t=o.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},i="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var a=e.components,d=e.mdxType,n=e.originalType,c=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),i=s(a),k=d,g=i["".concat(c,".").concat(k)]||i[k]||b[k]||n;return a?o.createElement(g,l(l({ref:t},m),{},{components:a})):o.createElement(g,l({ref:t},m))}));function g(e,t){var a=arguments,d=t&&t.mdxType;if("string"==typeof e||d){var n=a.length,l=new Array(n);l[0]=k;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[i]="string"==typeof e?e:d,l[1]=r;for(var s=2;s<n;s++)l[s]=a[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}k.displayName="MDXCreateElement"},64457:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>b,Bullet:()=>m,Details:()=>g,SpecifiedBy:()=>i,assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>k});var o=a(87462),d=a(67294),n=a(3905);const l={id:"metadata-data",title:"MetadataData",hide_table_of_contents:!1},r=void 0,c={unversionedId:"objects/metadata-data",id:"objects/metadata-data",title:"MetadataData",description:"MetadataData provides information about the metadata of the supplier so that it can be effectively configured.",source:"@site/api/objects/metadata-data.mdx",sourceDirName:"objects",slug:"/objects/metadata-data",permalink:"/api/objects/metadata-data",draft:!1,tags:[],version:"current",frontMatter:{id:"metadata-data",title:"MetadataData",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"MetadataContent",permalink:"/api/objects/metadata-content"},next:{title:"MetadataEdge",permalink:"/api/objects/metadata-edge"}},s={},m=()=>(0,n.kt)(d.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),i=e=>(0,n.kt)(d.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,n.kt)(d.Fragment,null,(0,n.kt)("span",{className:e.class},e.text)),k=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>MetadataData.<b>supplierCode</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-metadatadatabsuppliercodebcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MetadataData.<b>search</b></code><Bullet /><code>MetadataSearch!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-metadatadatabsearchbcodemetadatasearch--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MetadataData.<b>quote</b></code><Bullet /><code>MetadataQuote!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-metadatadatabquotebcodemetadataquote--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MetadataData.<b>book</b></code><Bullet /><code>MetadataBook!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-metadatadatabbookbcodemetadatabook--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MetadataData.<b>booking</b></code><Bullet /><code>MetadataBooking!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-metadatadatabbookingbcodemetadatabooking--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MetadataData.<b>cancel</b></code><Bullet /><code>MetadataCancel!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-metadatadatabcancelbcodemetadatacancel--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MetadataData.<b>amendBoard</b></code><Bullet /><code>MetadataAmendBoard</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-metadatadatabamendboardbcodemetadataamendboard-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MetadataData.<b>amendDates</b></code><Bullet /><code>MetadataAmendDates</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-metadatadatabamenddatesbcodemetadataamenddates-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MetadataData.<b>amendPaxes</b></code><Bullet /><code>MetadataAmendPaxes</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-metadatadatabamendpaxesbcodemetadataamendpaxes-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MetadataData.<b>amendRemarks</b></code><Bullet /><code>MetadataAmendRemarks</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-metadatadatabamendremarksbcodemetadataamendremarks-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MetadataData.<b>hotels</b></code><Bullet /><code>MetadataContent</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-metadatadatabhotelsbcodemetadatacontent-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MetadataData.<b>destinations</b></code><Bullet /><code>MetadataContent</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-metadatadatabdestinationsbcodemetadatacontent-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MetadataData.<b>rooms</b></code><Bullet /><code>MetadataContent</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-metadatadatabroomsbcodemetadatacontent-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MetadataData.<b>boards</b></code><Bullet /><code>MetadataContent</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-metadatadatabboardsbcodemetadatacontent-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MetadataData.<b>categories</b></code><Bullet /><code>MetadataContent</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-metadatadatabcategoriesbcodemetadatacontent-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MetadataData.<b>markets</b></code><Bullet /><code>MetadataContent</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-metadatadatabmarketsbcodemetadatacontent-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MetadataData.<b>currencies</b></code><Bullet /><code>MetadataContent</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-metadatadatabcurrenciesbcodemetadatacontent-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MetadataData.<b>amenities</b></code><Bullet /><code>MetadataContent</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-metadatadatabamenitiesbcodemetadatacontent-",level:4},{value:"Member of",id:"member-of",level:3}],g=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:r=!1}=e;const[c,s]=(0,d.useState)(r);return(0,n.kt)("details",(0,o.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,n.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&l)},p={Bullet:m,SpecifiedBy:i,Badge:b,toc:k,Details:g},u="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"MetadataData provides information about the metadata of the supplier so that it can be effectively configured."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type MetadataData {\n  supplierCode: ID!\n  search: MetadataSearch!\n  quote: MetadataQuote!\n  book: MetadataBook!\n  booking: MetadataBooking!\n  cancel: MetadataCancel!\n  amendBoard: MetadataAmendBoard\n  amendDates: MetadataAmendDates\n  amendPaxes: MetadataAmendPaxes\n  amendRemarks: MetadataAmendRemarks\n  hotels: MetadataContent\n  destinations: MetadataContent\n  rooms: MetadataContent\n  boards: MetadataContent\n  categories: MetadataContent\n  markets: MetadataContent\n  currencies: MetadataContent\n  amenities: MetadataContent\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-metadatadatabsuppliercodebcodeid--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MetadataData.",(0,n.kt)("b",null,"supplierCode"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Requested supplier code")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-metadatadatabsearchbcodemetadatasearch--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MetadataData.",(0,n.kt)("b",null,"search"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/metadata-search"},(0,n.kt)("inlineCode",{parentName:"a"},"MetadataSearch!"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Search metadata")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-metadatadatabquotebcodemetadataquote--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MetadataData.",(0,n.kt)("b",null,"quote"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/metadata-quote"},(0,n.kt)("inlineCode",{parentName:"a"},"MetadataQuote!"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Quote metadata")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-metadatadatabbookbcodemetadatabook--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MetadataData.",(0,n.kt)("b",null,"book"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/metadata-book"},(0,n.kt)("inlineCode",{parentName:"a"},"MetadataBook!"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Book metadata")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-metadatadatabbookingbcodemetadatabooking--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MetadataData.",(0,n.kt)("b",null,"booking"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/metadata-booking"},(0,n.kt)("inlineCode",{parentName:"a"},"MetadataBooking!"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Booking metadata")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-metadatadatabcancelbcodemetadatacancel--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MetadataData.",(0,n.kt)("b",null,"cancel"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/metadata-cancel"},(0,n.kt)("inlineCode",{parentName:"a"},"MetadataCancel!"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Cancel metadata")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-metadatadatabamendboardbcodemetadataamendboard-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MetadataData.",(0,n.kt)("b",null,"amendBoard"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/metadata-amend-board"},(0,n.kt)("inlineCode",{parentName:"a"},"MetadataAmendBoard"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Amend Board metadata")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-metadatadatabamenddatesbcodemetadataamenddates-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MetadataData.",(0,n.kt)("b",null,"amendDates"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/metadata-amend-dates"},(0,n.kt)("inlineCode",{parentName:"a"},"MetadataAmendDates"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Amend Dates metadata")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-metadatadatabamendpaxesbcodemetadataamendpaxes-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MetadataData.",(0,n.kt)("b",null,"amendPaxes"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/metadata-amend-paxes"},(0,n.kt)("inlineCode",{parentName:"a"},"MetadataAmendPaxes"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Amend Paxes metadata")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-metadatadatabamendremarksbcodemetadataamendremarks-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MetadataData.",(0,n.kt)("b",null,"amendRemarks"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/metadata-amend-remarks"},(0,n.kt)("inlineCode",{parentName:"a"},"MetadataAmendRemarks"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Amend Remarks metadata")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-metadatadatabhotelsbcodemetadatacontent-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MetadataData.",(0,n.kt)("b",null,"hotels"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/metadata-content"},(0,n.kt)("inlineCode",{parentName:"a"},"MetadataContent"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Contains information regarding Hotels, Hotels returns a list of hotels all information available (code, name,\naddress, phone, etc.) for each hotel. Return null is not implemented")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-metadatadatabdestinationsbcodemetadatacontent-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MetadataData.",(0,n.kt)("b",null,"destinations"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/metadata-content"},(0,n.kt)("inlineCode",{parentName:"a"},"MetadataContent"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Contains information regarding Destinations, Destinations returns the supplier s destination list.\nReturn null is not implemented")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-metadatadatabroomsbcodemetadatacontent-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MetadataData.",(0,n.kt)("b",null,"rooms"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/metadata-content"},(0,n.kt)("inlineCode",{parentName:"a"},"MetadataContent"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Contains information regarding Rooms, RoomList aims to return a list of rooms, their codes as well as descriptions.\nReturn null is not implemented")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-metadatadatabboardsbcodemetadatacontent-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MetadataData.",(0,n.kt)("b",null,"boards"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/metadata-content"},(0,n.kt)("inlineCode",{parentName:"a"},"MetadataContent"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Contains information regarding Boards, Boards aims to return a list of the search boards,\nwhich will be used in the Search response. Return null is not implemented")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-metadatadatabcategoriesbcodemetadatacontent-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MetadataData.",(0,n.kt)("b",null,"categories"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/metadata-content"},(0,n.kt)("inlineCode",{parentName:"a"},"MetadataContent"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Contains information regarding Categories, Categories returns a list of categories (codes and descriptions)\nused in Hotels List. Return null is not implemented")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-metadatadatabmarketsbcodemetadatacontent-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MetadataData.",(0,n.kt)("b",null,"markets"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/metadata-content"},(0,n.kt)("inlineCode",{parentName:"a"},"MetadataContent"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Contains information regarding Markets, Markets return a list of the available Markets, which will be\nused in the Search request. Return null is not implemented")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-metadatadatabcurrenciesbcodemetadatacontent-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MetadataData.",(0,n.kt)("b",null,"currencies"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/metadata-content"},(0,n.kt)("inlineCode",{parentName:"a"},"MetadataContent"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Contains information regarding Currencies, Currencies returns a list of currencies the supplier in booking flow.\nReturn null is not implemented")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-metadatadatabamenitiesbcodemetadatacontent-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MetadataData.",(0,n.kt)("b",null,"amenities"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/metadata-content"},(0,n.kt)("inlineCode",{parentName:"a"},"MetadataContent"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Contains information regarding Amenities, Amenities is defined as something intended to make life more\npleasant or comfortable for people, Examples include: swimming pools, shopping centers, etc.\nReturn null is not implemented")),(0,n.kt)("h3",{id:"member-of"},"Member of"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/objects/metadata"},(0,n.kt)("inlineCode",{parentName:"a"},"Metadata"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);
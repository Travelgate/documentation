"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[57863],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),s=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(a),y=n,g=p["".concat(d,".").concat(y)]||p[y]||u[y]||l;return a?r.createElement(g,o(o({ref:t},c),{},{components:a})):r.createElement(g,o({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=y;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[p]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},72273:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>c,Details:()=>g,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>y});var r=a(87462),n=a(67294),l=a(3905);const o={id:"profile-create-input",title:"ProfileCreateInput",hide_table_of_contents:!1},i=void 0,d={unversionedId:"inputs/profile-create-input",id:"inputs/profile-create-input",title:"ProfileCreateInput",description:"TODO: add ProfileData input",source:"@site/api/inputs/profile-create-input.mdx",sourceDirName:"inputs",slug:"/inputs/profile-create-input",permalink:"/api/inputs/profile-create-input",draft:!1,tags:[],version:"current",frontMatter:{id:"profile-create-input",title:"ProfileCreateInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PointOfSaleFilter",permalink:"/api/inputs/point-of-sale-filter"},next:{title:"ProfileCreateOrUpdateClassificationsInput",permalink:"/api/inputs/profile-create-or-update-classifications-input"}},s={},c=()=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(n.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),y=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileCreateInput.<b>groupCode</b></code><Bullet /><code>ID</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-profilecreateinputbgroupcodebcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileCreateInput.<b>ownerCode</b></code><Bullet /><code>ID</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-profilecreateinputbownercodebcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileCreateInput.<b>Asset</b></code><Bullet /><code>AssetCreateManyAsSubEntityInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-profilecreateinputbassetbcodeassetcreatemanyassubentityinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileCreateInput.<b>classifications</b></code><Bullet /><code>ProfileCreateOrUpdateClassificationsInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-profilecreateinputbclassificationsbcodeprofilecreateorupdateclassificationsinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileCreateInput.<b>description</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-profilecreateinputbdescriptionbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileCreateInput.<b>name</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-profilecreateinputbnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileCreateInput.<b>order</b></code><Bullet /><code>Float</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-profilecreateinputborderbcodefloat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileCreateInput.<b>slug</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-profilecreateinputbslugbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileCreateInput.<b>status</b></code><Bullet /><code>Status</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-profilecreateinputbstatusbcodestatus-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileCreateInput.<b>websiteUrl</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-profilecreateinputbwebsiteurlbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileCreateInput.<b>buyerPartnerStatus</b></code><Bullet /><code>PartnerStatusType</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-profilecreateinputbbuyerpartnerstatusbcodepartnerstatustype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileCreateInput.<b>sellerPartnerStatus</b></code><Bullet /><code>PartnerStatusType</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-profilecreateinputbsellerpartnerstatusbcodepartnerstatustype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileCreateInput.<b>buyerOnboardingStart</b></code><Bullet /><code>Date</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-profilecreateinputbbuyeronboardingstartbcodedate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileCreateInput.<b>buyerOnboardingEnd</b></code><Bullet /><code>Date</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-profilecreateinputbbuyeronboardingendbcodedate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileCreateInput.<b>sellerIntegrationType</b></code><Bullet /><code>[SellerIntegrationType!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-profilecreateinputbsellerintegrationtypebcodesellerintegrationtype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileCreateInput.<b>buyerIntegrationType</b></code><Bullet /><code>[BuyerIntegrationType!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-profilecreateinputbbuyerintegrationtypebcodebuyerintegrationtype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileCreateInput.<b>buyerOrgType</b></code><Bullet /><code>BuyerCompanyType</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-profilecreateinputbbuyerorgtypebcodebuyercompanytype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileCreateInput.<b>sellerOrgType</b></code><Bullet /><code>SellerCompanyType</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-profilecreateinputbsellerorgtypebcodesellercompanytype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileCreateInput.<b>buyerTechPlatformOrgType</b></code><Bullet /><code>BuyerTechSolutionCompanyType</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-profilecreateinputbbuyertechplatformorgtypebcodebuyertechsolutioncompanytype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileCreateInput.<b>sellerTechPlatformOrgType</b></code><Bullet /><code>SellerTechSolutionCompanyType</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-profilecreateinputbsellertechplatformorgtypebcodesellertechsolutioncompanytype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileCreateInput.<b>buyerTechBridge</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-profilecreateinputbbuyertechbridgebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileCreateInput.<b>sellerTechBridge</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-profilecreateinputbsellertechbridgebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileCreateInput.<b>country</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-profilecreateinputbcountrybcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileCreateInput.<b>crmId</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-profilecreateinputbcrmidbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileCreateInput.<b>mainMarkets</b></code><Bullet /><code>[String!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-profilecreateinputbmainmarketsbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileCreateInput.<b>buyerCategoryPropertiesInput</b></code><Bullet /><code>BuyerCategoryPropertiesInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-profilecreateinputbbuyercategorypropertiesinputbcodebuyercategorypropertiesinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileCreateInput.<b>sellerCategoryPropertiesInput</b></code><Bullet /><code>SellerCategoryPropertiesInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-profilecreateinputbsellercategorypropertiesinputbcodesellercategorypropertiesinput-",level:4}],g=e=>{let{dataOpen:t,dataClose:a,children:o,startOpen:i=!1}=e;const[d,s]=(0,n.useState)(i);return(0,l.kt)("details",(0,r.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},d?t:a),d&&o)},b={Bullet:c,SpecifiedBy:p,Badge:u,toc:y,Details:g},f="wrapper";function m(e){let{components:t,...a}=e;return(0,l.kt)(f,(0,r.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"TODO: add ProfileData input"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"input ProfileCreateInput {\n  groupCode: ID\n  ownerCode: ID\n  Asset: AssetCreateManyAsSubEntityInput\n  classifications: ProfileCreateOrUpdateClassificationsInput\n  description: String\n  name: String\n  order: Float\n  slug: String\n  status: Status\n  websiteUrl: String\n  buyerPartnerStatus: PartnerStatusType\n  sellerPartnerStatus: PartnerStatusType\n  buyerOnboardingStart: Date\n  buyerOnboardingEnd: Date\n  sellerIntegrationType: [SellerIntegrationType!]\n  buyerIntegrationType: [BuyerIntegrationType!]\n  buyerOrgType: BuyerCompanyType\n  sellerOrgType: SellerCompanyType\n  buyerTechPlatformOrgType: BuyerTechSolutionCompanyType\n  sellerTechPlatformOrgType: SellerTechSolutionCompanyType\n  buyerTechBridge: String\n  sellerTechBridge: String\n  country: String\n  crmId: String!\n  mainMarkets: [String!]\n  buyerCategoryPropertiesInput: BuyerCategoryPropertiesInput\n  sellerCategoryPropertiesInput: SellerCategoryPropertiesInput\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-profilecreateinputbgroupcodebcodeid-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProfileCreateInput.",(0,l.kt)("b",null,"groupCode"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-profilecreateinputbownercodebcodeid-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProfileCreateInput.",(0,l.kt)("b",null,"ownerCode"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-profilecreateinputbassetbcodeassetcreatemanyassubentityinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProfileCreateInput.",(0,l.kt)("b",null,"Asset"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/inputs/asset-create-many-as-sub-entity-input"},(0,l.kt)("inlineCode",{parentName:"a"},"AssetCreateManyAsSubEntityInput"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-profilecreateinputbclassificationsbcodeprofilecreateorupdateclassificationsinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProfileCreateInput.",(0,l.kt)("b",null,"classifications"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/inputs/profile-create-or-update-classifications-input"},(0,l.kt)("inlineCode",{parentName:"a"},"ProfileCreateOrUpdateClassificationsInput"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-profilecreateinputbdescriptionbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProfileCreateInput.",(0,l.kt)("b",null,"description"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-profilecreateinputbnamebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProfileCreateInput.",(0,l.kt)("b",null,"name"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-profilecreateinputborderbcodefloat-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProfileCreateInput.",(0,l.kt)("b",null,"order"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/float"},(0,l.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-profilecreateinputbslugbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProfileCreateInput.",(0,l.kt)("b",null,"slug"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-profilecreateinputbstatusbcodestatus-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProfileCreateInput.",(0,l.kt)("b",null,"status"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/enums/status"},(0,l.kt)("inlineCode",{parentName:"a"},"Status"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-profilecreateinputbwebsiteurlbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProfileCreateInput.",(0,l.kt)("b",null,"websiteUrl"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-profilecreateinputbbuyerpartnerstatusbcodepartnerstatustype-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProfileCreateInput.",(0,l.kt)("b",null,"buyerPartnerStatus"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/enums/partner-status-type"},(0,l.kt)("inlineCode",{parentName:"a"},"PartnerStatusType"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-profilecreateinputbsellerpartnerstatusbcodepartnerstatustype-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProfileCreateInput.",(0,l.kt)("b",null,"sellerPartnerStatus"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/enums/partner-status-type"},(0,l.kt)("inlineCode",{parentName:"a"},"PartnerStatusType"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-profilecreateinputbbuyeronboardingstartbcodedate-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProfileCreateInput.",(0,l.kt)("b",null,"buyerOnboardingStart"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/date"},(0,l.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-profilecreateinputbbuyeronboardingendbcodedate-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProfileCreateInput.",(0,l.kt)("b",null,"buyerOnboardingEnd"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/date"},(0,l.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-profilecreateinputbsellerintegrationtypebcodesellerintegrationtype--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProfileCreateInput.",(0,l.kt)("b",null,"sellerIntegrationType"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/enums/seller-integration-type"},(0,l.kt)("inlineCode",{parentName:"a"},"[SellerIntegrationType!]"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-profilecreateinputbbuyerintegrationtypebcodebuyerintegrationtype--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProfileCreateInput.",(0,l.kt)("b",null,"buyerIntegrationType"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/enums/buyer-integration-type"},(0,l.kt)("inlineCode",{parentName:"a"},"[BuyerIntegrationType!]"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-profilecreateinputbbuyerorgtypebcodebuyercompanytype-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProfileCreateInput.",(0,l.kt)("b",null,"buyerOrgType"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/enums/buyer-company-type"},(0,l.kt)("inlineCode",{parentName:"a"},"BuyerCompanyType"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-profilecreateinputbsellerorgtypebcodesellercompanytype-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProfileCreateInput.",(0,l.kt)("b",null,"sellerOrgType"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/enums/seller-company-type"},(0,l.kt)("inlineCode",{parentName:"a"},"SellerCompanyType"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-profilecreateinputbbuyertechplatformorgtypebcodebuyertechsolutioncompanytype-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProfileCreateInput.",(0,l.kt)("b",null,"buyerTechPlatformOrgType"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/enums/buyer-tech-solution-company-type"},(0,l.kt)("inlineCode",{parentName:"a"},"BuyerTechSolutionCompanyType"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-profilecreateinputbsellertechplatformorgtypebcodesellertechsolutioncompanytype-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProfileCreateInput.",(0,l.kt)("b",null,"sellerTechPlatformOrgType"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/enums/seller-tech-solution-company-type"},(0,l.kt)("inlineCode",{parentName:"a"},"SellerTechSolutionCompanyType"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-profilecreateinputbbuyertechbridgebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProfileCreateInput.",(0,l.kt)("b",null,"buyerTechBridge"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-profilecreateinputbsellertechbridgebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProfileCreateInput.",(0,l.kt)("b",null,"sellerTechBridge"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-profilecreateinputbcountrybcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProfileCreateInput.",(0,l.kt)("b",null,"country"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-profilecreateinputbcrmidbcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProfileCreateInput.",(0,l.kt)("b",null,"crmId"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-profilecreateinputbmainmarketsbcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProfileCreateInput.",(0,l.kt)("b",null,"mainMarkets"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"[String!]"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-profilecreateinputbbuyercategorypropertiesinputbcodebuyercategorypropertiesinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProfileCreateInput.",(0,l.kt)("b",null,"buyerCategoryPropertiesInput"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/inputs/buyer-category-properties-input"},(0,l.kt)("inlineCode",{parentName:"a"},"BuyerCategoryPropertiesInput"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-profilecreateinputbsellercategorypropertiesinputbcodesellercategorypropertiesinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProfileCreateInput.",(0,l.kt)("b",null,"sellerCategoryPropertiesInput"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/inputs/seller-category-properties-input"},(0,l.kt)("inlineCode",{parentName:"a"},"SellerCategoryPropertiesInput"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null))}m.isMDXComponent=!0}}]);
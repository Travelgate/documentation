/*! For license information please see 26d6e204.a931f6df.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[62516],{19015:(e,o,s)=>{s.r(o),s.d(o,{Badge:()=>b,Bullet:()=>i,Details:()=>g,SpecifiedBy:()=>h,assets:()=>t,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>x});var a=s(74848),d=s(28453),n=s(96540);const r={id:"room",title:"Room",hide_table_of_contents:!1},c=void 0,l={id:"objects/room",title:"Room",description:"Contains the room information of the option returned.",source:"@site/api/objects/room.mdx",sourceDirName:"objects",slug:"/objects/room",permalink:"/api/objects/room",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"room",title:"Room",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"RoomStatic",permalink:"/api/objects/room-static"},next:{title:"Rule",permalink:"/api/objects/rule"}},t={},i=()=>{const e={span:"span",...(0,d.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const o={a:"a",...(0,d.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(o.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},b=e=>{const o={span:"span",...(0,d.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(o.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:o,children:s,startOpen:r=!1})=>{const c={details:"details",summary:"summary",...(0,d.R)()},[l,t]=(0,n.useState)(r);return(0,a.jsxs)(c.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(c.summary,{onClick:e=>{e.preventDefault(),t((e=>!e))},style:{listStyle:"none"},children:l?e:o}),l&&s]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>Room.<b>occupancyRefId</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"roomoccupancyrefidint--",level:4},{value:'<code>Room.<b>legacyRoomId</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"roomlegacyroomidstring--",level:4},{value:'<code>Room.<b>code</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"roomcodestring--",level:4},{value:'<code>Room.<b>supplierCode</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"roomsuppliercodestring--",level:4},{value:'<code>Room.<b>description</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"roomdescriptionstring-",level:4},{value:'<code>Room.<b>refundable</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"roomrefundableboolean-",level:4},{value:'<code>Room.<b>units</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"roomunitsint-",level:4},{value:'<code>Room.<b>roomPrice</b></code><Bullet></Bullet><code>RoomPrice!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"roomroompriceroomprice--",level:4},{value:'<code>Room.<b>beds</b></code><Bullet></Bullet><code>[Bed!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"roombedsbed--",level:4},{value:'<code>Room.<b>ratePlans</b></code><Bullet></Bullet><code>[RatePlan!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"roomrateplansrateplan--",level:4},{value:'<code>Room.<b>promotions</b></code><Bullet></Bullet><code>[Promotion!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"roompromotionspromotion--",level:4},{value:'<code>Room.<b>surcharges</b></code><Bullet></Bullet><code>[Surcharge!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"roomsurchargessurcharge--",level:4},{value:'<code>Room.<b>features</b></code><Bullet></Bullet><code>[Feature!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"roomfeaturesfeature--",level:4},{value:'<code>Room.<b>amenities</b></code><Bullet></Bullet><code>[Amenity!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"roomamenitiesamenity--",level:4},{value:"Member of",id:"member-of",level:3}];function j(e){const o={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.p,{children:"Contains the room information of the option returned."}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-graphql",children:"type Room {\n  occupancyRefId: Int!\n  legacyRoomId: String!\n  code: String!\n  supplierCode: String!\n  description: String\n  refundable: Boolean\n  units: Int\n  roomPrice: RoomPrice!\n  beds: [Bed!]\n  ratePlans: [RatePlan!]\n  promotions: [Promotion!]\n  surcharges: [Surcharge!]\n  features: [Feature!]\n  amenities: [Amenity!]\n}\n"})}),"\n",(0,a.jsx)(o.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(o.h4,{id:"roomoccupancyrefidint--",children:[(0,a.jsx)(o.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Room.",(0,a.jsx)("b",{children:"occupancyRefId"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(o.a,{href:"/api/scalars/int",children:(0,a.jsx)(o.code,{children:"Int!"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsx)(o.p,{children:"ID reference to the occupancy"}),"\n"]}),"\n",(0,a.jsxs)(o.h4,{id:"roomlegacyroomidstring--",children:[(0,a.jsx)(o.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Room.",(0,a.jsx)("b",{children:"legacyRoomId"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(o.a,{href:"/api/scalars/string",children:(0,a.jsx)(o.code,{children:"String!"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsx)(o.p,{children:"Identifies the legacy room ID"}),"\n"]}),"\n",(0,a.jsxs)(o.h4,{id:"roomcodestring--",children:[(0,a.jsx)(o.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Room.",(0,a.jsx)("b",{children:"code"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(o.a,{href:"/api/scalars/string",children:(0,a.jsx)(o.code,{children:"String!"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsx)(o.p,{children:"Indicates the room code"}),"\n"]}),"\n",(0,a.jsxs)(o.h4,{id:"roomsuppliercodestring--",children:[(0,a.jsx)(o.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Room.",(0,a.jsx)("b",{children:"supplierCode"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(o.a,{href:"/api/scalars/string",children:(0,a.jsx)(o.code,{children:"String!"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsx)(o.p,{children:"Supplier s room code."}),"\n"]}),"\n",(0,a.jsxs)(o.h4,{id:"roomdescriptionstring-",children:[(0,a.jsx)(o.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Room.",(0,a.jsx)("b",{children:"description"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(o.a,{href:"/api/scalars/string",children:(0,a.jsx)(o.code,{children:"String"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsx)(o.p,{children:"Description about the room"}),"\n"]}),"\n",(0,a.jsxs)(o.h4,{id:"roomrefundableboolean-",children:[(0,a.jsx)(o.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Room.",(0,a.jsx)("b",{children:"refundable"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(o.a,{href:"/api/scalars/boolean",children:(0,a.jsx)(o.code,{children:"Boolean"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsx)(o.p,{children:"Identifies if the room is refundable or not."}),"\n"]}),"\n",(0,a.jsxs)(o.h4,{id:"roomunitsint-",children:[(0,a.jsx)(o.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Room.",(0,a.jsx)("b",{children:"units"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(o.a,{href:"/api/scalars/int",children:(0,a.jsx)(o.code,{children:"Int"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsx)(o.p,{children:"Number of rooms available with the same type."}),"\n"]}),"\n",(0,a.jsxs)(o.h4,{id:"roomroompriceroomprice--",children:[(0,a.jsx)(o.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Room.",(0,a.jsx)("b",{children:"roomPrice"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(o.a,{href:"/api/objects/room-price",children:(0,a.jsx)(o.code,{children:"RoomPrice!"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsx)(o.p,{children:"Specifies the room price."}),"\n"]}),"\n",(0,a.jsxs)(o.h4,{id:"roombedsbed--",children:[(0,a.jsx)(o.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Room.",(0,a.jsx)("b",{children:"beds"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(o.a,{href:"/api/objects/bed",children:(0,a.jsx)(o.code,{children:"[Bed!]"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsx)(o.p,{children:"List of beds."}),"\n"]}),"\n",(0,a.jsxs)(o.h4,{id:"roomrateplansrateplan--",children:[(0,a.jsx)(o.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Room.",(0,a.jsx)("b",{children:"ratePlans"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(o.a,{href:"/api/objects/rate-plan",children:(0,a.jsx)(o.code,{children:"[RatePlan!]"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsx)(o.p,{children:"List of the daily breakdowns of the specific rate plan"}),"\n"]}),"\n",(0,a.jsxs)(o.h4,{id:"roompromotionspromotion--",children:[(0,a.jsx)(o.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Room.",(0,a.jsx)("b",{children:"promotions"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(o.a,{href:"/api/objects/promotion",children:(0,a.jsx)(o.code,{children:"[Promotion!]"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsx)(o.p,{children:"List of daily breakdowns for the promotions of the room."}),"\n"]}),"\n",(0,a.jsxs)(o.h4,{id:"roomsurchargessurcharge--",children:[(0,a.jsx)(o.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Room.",(0,a.jsx)("b",{children:"surcharges"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(o.a,{href:"/api/objects/surcharge",children:(0,a.jsx)(o.code,{children:"[Surcharge!]"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsx)(o.p,{children:"List of surcharges of the option returned."}),"\n"]}),"\n",(0,a.jsxs)(o.h4,{id:"roomfeaturesfeature--",children:[(0,a.jsx)(o.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Room.",(0,a.jsx)("b",{children:"features"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(o.a,{href:"/api/objects/feature",children:(0,a.jsx)(o.code,{children:"[Feature!]"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsx)(o.p,{children:"List of features of this room"}),"\n"]}),"\n",(0,a.jsxs)(o.h4,{id:"roomamenitiesamenity--",children:[(0,a.jsx)(o.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Room.",(0,a.jsx)("b",{children:"amenities"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(o.a,{href:"/api/objects/amenity",children:(0,a.jsx)(o.code,{children:"[Amenity!]"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsx)(o.p,{children:"Room level amenities provide information about features intended to enhance comfort and enjoyment.\nExamples include swimming pools, shopping centers, etc."}),"\n"]}),"\n",(0,a.jsx)(o.h3,{id:"member-of",children:"Member of"}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.a,{href:"/api/objects/hotel-option-search",children:(0,a.jsx)(o.code,{children:"HotelOptionSearch"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"object"})]})]})}function m(e={}){const{wrapper:o}={...(0,d.R)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(j,{...e})}):j(e)}},21020:(e,o,s)=>{var a=s(96540),d=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,c=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function t(e,o,s){var a,n={},t=null,i=null;for(a in void 0!==s&&(t=""+s),void 0!==o.key&&(t=""+o.key),void 0!==o.ref&&(i=o.ref),o)r.call(o,a)&&!l.hasOwnProperty(a)&&(n[a]=o[a]);if(e&&e.defaultProps)for(a in o=e.defaultProps)void 0===n[a]&&(n[a]=o[a]);return{$$typeof:d,type:e,key:t,ref:i,props:n,_owner:c.current}}o.Fragment=n,o.jsx=t,o.jsxs=t},74848:(e,o,s)=>{e.exports=s(21020)},28453:(e,o,s)=>{s.d(o,{R:()=>r,x:()=>c});var a=s(96540);const d={},n=a.createContext(d);function r(e){const o=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),a.createElement(n.Provider,{value:o},e.children)}}}]);
/*! For license information please see 589c6c02.cee66a13.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[32035],{82858:(e,a,s)=>{s.r(a),s.d(a,{Badge:()=>x,Bullet:()=>r,Details:()=>h,SpecifiedBy:()=>g,assets:()=>i,contentTitle:()=>l,default:()=>j,frontMatter:()=>n,metadata:()=>d,toc:()=>m});const d=JSON.parse('{"id":"types/objects/room-data","title":"RoomData","description":"Room data","source":"@site/api/types/objects/room-data.mdx","sourceDirName":"types/objects","slug":"/types/objects/room-data","permalink":"/api/types/objects/room-data","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"room-data","title":"RoomData"},"sidebar":"schemaSidebar","previous":{"title":"RoomCriteria","permalink":"/api/types/objects/room-criteria"},"next":{"title":"RoomEdge","permalink":"/api/types/objects/room-edge"}}');var t=s(74848),o=s(28453),c=s(96540);const n={id:"room-data",title:"RoomData"},l=void 0,i={},r=()=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),g=e=>(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),x=e=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{className:e.class,children:e.text})}),h=({dataOpen:e,dataClose:a,children:s,startOpen:d=!1})=>{const[o,n]=(0,c.useState)(d);return(0,t.jsxs)("details",{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)("summary",{onClick:e=>{e.preventDefault(),n((e=>!e))},style:{listStyle:"none"},children:o?e:a}),o&&s]})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>RoomData.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"roomdatacodeid--",level:4},{value:'<code>RoomData.<b>roomCode</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"roomdataroomcodestring--",level:4},{value:'<code>RoomData.<b>texts</b></code><Bullet></Bullet><code>[Text!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"roomdatatextstext--",level:4},{value:'<code>RoomData.texts.<b>languages</b></code><Bullet></Bullet><code>[Language!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"roomdatatextslanguageslanguage--",level:5},{value:'<code>RoomData.<b>source</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"roomdatasourcestring-",level:4},{value:'<code>RoomData.<b>occupancies</b></code><Bullet></Bullet><code>OccupancyStatic</code> <Badge class="badge badge--secondary"></Badge>',id:"roomdataoccupanciesoccupancystatic-",level:4},{value:'<code>RoomData.<b>amenities</b></code><Bullet></Bullet><code>[AmenityStatic!]</code> <Badge class="badge badge--deprecated badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"roomdataamenitiesamenitystatic---",level:4},{value:'<code>RoomData.<b>views</b></code><Bullet></Bullet><code>[View!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"roomdataviewsview--",level:4},{value:'<code>RoomData.<b>medias</b></code><Bullet></Bullet><code>[Media!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"roomdatamediasmedia--",level:4},{value:'<code>RoomData.<b>beds</b></code><Bullet></Bullet><code>[BedStatic!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"roomdatabedsbedstatic--",level:4},{value:'<code>RoomData.<b>area</b></code><Bullet></Bullet><code>Area</code> <Badge class="badge badge--secondary"></Badge>',id:"roomdataareaarea-",level:4},{value:'<code>RoomData.<b>allAmenities</b></code><Bullet></Bullet><code>HotelXAmenityConnection</code> <Badge class="badge badge--secondary"></Badge>',id:"roomdataallamenitieshotelxamenityconnection-",level:4},{value:'<code>RoomData.allAmenities.<b>mapOptions</b></code><Bullet></Bullet><code>[HotelXMapOptionInput!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"roomdataallamenitiesmapoptionshotelxmapoptioninput--",level:5},{value:"Member Of",id:"member-of",level:3}];function b(e){const a={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"Room data"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-graphql",children:"type RoomData {\n  code: ID!\n  roomCode: String!\n  texts(languages: [Language!]): [Text!]\n  source: String\n  occupancies: OccupancyStatic\n  amenities: [AmenityStatic!] @deprecated\n  views: [View!]\n  medias: [Media!]\n  beds: [BedStatic!]\n  area: Area\n  allAmenities(mapOptions: [HotelXMapOptionInput!]): HotelXAmenityConnection\n}\n"})}),"\n",(0,t.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(a.h4,{id:"roomdatacodeid--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["RoomData.",(0,t.jsx)("b",{children:"code"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(a.a,{href:"/api/types/scalars/id",children:(0,t.jsx)(a.code,{children:"ID!"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.p,{children:"Internal code for checking availability"}),"\n",(0,t.jsxs)(a.h4,{id:"roomdataroomcodestring--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["RoomData.",(0,t.jsx)("b",{children:"roomCode"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(a.a,{href:"/api/types/scalars/string",children:(0,t.jsx)(a.code,{children:"String!"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.p,{children:"Code of the hotel in the Supplier selected"}),"\n",(0,t.jsxs)(a.h4,{id:"roomdatatextstext--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["RoomData.",(0,t.jsx)("b",{children:"texts"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(a.a,{href:"/api/types/objects/text",children:(0,t.jsx)(a.code,{children:"[Text!]"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(a.p,{children:"Label"}),"\n",(0,t.jsxs)(a.h5,{id:"roomdatatextslanguageslanguage--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["RoomData.texts.",(0,t.jsx)("b",{children:"languages"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(a.a,{href:"/api/types/scalars/language",children:(0,t.jsx)(a.code,{children:"[Language!]"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(a.h4,{id:"roomdatasourcestring-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["RoomData.",(0,t.jsx)("b",{children:"source"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(a.a,{href:"/api/types/scalars/string",children:(0,t.jsx)(a.code,{children:"String"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.p,{children:"Room source"}),"\n",(0,t.jsxs)(a.h4,{id:"roomdataoccupanciesoccupancystatic-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["RoomData.",(0,t.jsx)("b",{children:"occupancies"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(a.a,{href:"/api/types/objects/occupancy-static",children:(0,t.jsx)(a.code,{children:"OccupancyStatic"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(a.p,{children:"Room occupancies"}),"\n",(0,t.jsxs)(a.h4,{id:"roomdataamenitiesamenitystatic---",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["RoomData.",(0,t.jsx)("b",{children:"amenities"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(a.a,{href:"/api/types/objects/amenity-static",children:(0,t.jsx)(a.code,{children:"[AmenityStatic!]"})})," ",(0,t.jsx)(x,{class:"badge badge--deprecated badge--secondary",text:"deprecated"})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(a.admonition,{title:"DEPRECATED",type:"warning",children:(0,t.jsx)(a.p,{children:"deprecated from 2021-09-17. Please, use allAmenities"})}),"\n",(0,t.jsx)(a.p,{children:"Room amenities"}),"\n",(0,t.jsxs)(a.h4,{id:"roomdataviewsview--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["RoomData.",(0,t.jsx)("b",{children:"views"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(a.a,{href:"/api/types/objects/view",children:(0,t.jsx)(a.code,{children:"[View!]"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(a.p,{children:"Room views"}),"\n",(0,t.jsxs)(a.h4,{id:"roomdatamediasmedia--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["RoomData.",(0,t.jsx)("b",{children:"medias"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(a.a,{href:"/api/types/objects/media",children:(0,t.jsx)(a.code,{children:"[Media!]"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(a.p,{children:"Room medias"}),"\n",(0,t.jsxs)(a.h4,{id:"roomdatabedsbedstatic--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["RoomData.",(0,t.jsx)("b",{children:"beds"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(a.a,{href:"/api/types/objects/bed-static",children:(0,t.jsx)(a.code,{children:"[BedStatic!]"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(a.p,{children:"Room beds"}),"\n",(0,t.jsxs)(a.h4,{id:"roomdataareaarea-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["RoomData.",(0,t.jsx)("b",{children:"area"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(a.a,{href:"/api/types/scalars/area",children:(0,t.jsx)(a.code,{children:"Area"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.p,{children:"Room area in square meters."}),"\n",(0,t.jsxs)(a.h4,{id:"roomdataallamenitieshotelxamenityconnection-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["RoomData.",(0,t.jsx)("b",{children:"allAmenities"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(a.a,{href:"/api/types/objects/hotel-xamenity-connection",children:(0,t.jsx)(a.code,{children:"HotelXAmenityConnection"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(a.p,{children:"Amenities with mapping"}),"\n",(0,t.jsxs)(a.h5,{id:"roomdataallamenitiesmapoptionshotelxmapoptioninput--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["RoomData.allAmenities.",(0,t.jsx)("b",{children:"mapOptions"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(a.a,{href:"/api/types/inputs/hotel-xmap-option-input",children:(0,t.jsx)(a.code,{children:"[HotelXMapOptionInput!]"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,t.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"/api/types/objects/room-static",children:(0,t.jsx)(a.code,{children:"RoomStatic"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},21020:(e,a,s)=>{var d=s(96540),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,n=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function i(e,a,s){var d,o={},i=null,r=null;for(d in void 0!==s&&(i=""+s),void 0!==a.key&&(i=""+a.key),void 0!==a.ref&&(r=a.ref),a)c.call(a,d)&&!l.hasOwnProperty(d)&&(o[d]=a[d]);if(e&&e.defaultProps)for(d in a=e.defaultProps)void 0===o[d]&&(o[d]=a[d]);return{$$typeof:t,type:e,key:i,ref:r,props:o,_owner:n.current}}a.Fragment=o,a.jsx=i,a.jsxs=i},74848:(e,a,s)=>{e.exports=s(21020)},28453:(e,a,s)=>{s.d(a,{R:()=>c,x:()=>n});var d=s(96540);const t={},o=d.createContext(t);function c(e){const a=d.useContext(o);return d.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function n(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),d.createElement(o.Provider,{value:a},e.children)}}}]);
/*! For license information please see 1b14535d.0c7c7853.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[38946],{52610:(e,a,t)=>{t.r(a),t.d(a,{Badge:()=>x,Bullet:()=>r,Details:()=>h,SpecifiedBy:()=>g,assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>n,toc:()=>b});const n=JSON.parse('{"id":"types/objects/destination-data","title":"DestinationData","description":"Information about destinantion","source":"@site/api/types/objects/destination-data.mdx","sourceDirName":"types/objects","slug":"/types/objects/destination-data","permalink":"/api/types/objects/destination-data","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"destination-data","title":"DestinationData"},"sidebar":"schemaSidebar","previous":{"title":"DestinationConnection","permalink":"/api/types/objects/destination-connection"},"next":{"title":"DestinationEdge","permalink":"/api/types/objects/destination-edge"}}');var s=t(74848),d=t(28453),i=t(96540);const o={id:"destination-data",title:"DestinationData"},l=void 0,c={},r=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),g=e=>(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),x=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{className:e.class,children:e.text})}),h=({dataOpen:e,dataClose:a,children:t,startOpen:n=!1})=>{const[d,o]=(0,i.useState)(n);return(0,s.jsxs)("details",{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)("summary",{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:d?e:a}),d&&t]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>DestinationData.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"destinationdatacodeid--",level:4},{value:'<code>DestinationData.<b>available</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"destinationdataavailableboolean--",level:4},{value:'<code>DestinationData.<b>destinationLeaf</b></code><Bullet></Bullet><code>[String!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"destinationdatadestinationleafstring--",level:4},{value:'<code>DestinationData.<b>texts</b></code><Bullet></Bullet><code>[Text!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"destinationdatatextstext--",level:4},{value:'<code>DestinationData.texts.<b>languages</b></code><Bullet></Bullet><code>[Language!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"destinationdatatextslanguageslanguage--",level:5},{value:'<code>DestinationData.<b>closestDestinations</b></code><Bullet></Bullet><code>[String!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"destinationdataclosestdestinationsstring--",level:4},{value:'<code>DestinationData.<b>parent</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"destinationdataparentstring-",level:4},{value:'<code>DestinationData.<b>type</b></code><Bullet></Bullet><code>DestinationType</code> <Badge class="badge badge--secondary"></Badge>',id:"destinationdatatypedestinationtype-",level:4},{value:"Member Of",id:"member-of",level:3},{value:"Implemented By",id:"implemented-by",level:3}];function j(e){const a={a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:"Information about destinantion"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-graphql",children:"type DestinationData {\n  code: ID!\n  available: Boolean!\n  destinationLeaf: [String!]\n  texts(languages: [Language!]): [Text!]!\n  closestDestinations: [String!]\n  parent: String\n  type: DestinationType\n}\n"})}),"\n",(0,s.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(a.h4,{id:"destinationdatacodeid--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["DestinationData.",(0,s.jsx)("b",{children:"code"})]})}),(0,s.jsx)(r,{}),(0,s.jsx)(a.a,{href:"/api/types/scalars/id",children:(0,s.jsx)(a.code,{children:"ID!"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(a.p,{children:"Destination Code"}),"\n",(0,s.jsxs)(a.h4,{id:"destinationdataavailableboolean--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["DestinationData.",(0,s.jsx)("b",{children:"available"})]})}),(0,s.jsx)(r,{}),(0,s.jsx)(a.a,{href:"/api/types/scalars/boolean",children:(0,s.jsx)(a.code,{children:"Boolean!"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(a.p,{children:"Indicates if you can search by destination"}),"\n",(0,s.jsxs)(a.h4,{id:"destinationdatadestinationleafstring--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["DestinationData.",(0,s.jsx)("b",{children:"destinationLeaf"})]})}),(0,s.jsx)(r,{}),(0,s.jsx)(a.a,{href:"/api/types/scalars/string",children:(0,s.jsx)(a.code,{children:"[String!]"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(a.p,{children:"Returns destination leafs of the destination."}),"\n",(0,s.jsxs)(a.h4,{id:"destinationdatatextstext--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["DestinationData.",(0,s.jsx)("b",{children:"texts"})]})}),(0,s.jsx)(r,{}),(0,s.jsx)(a.a,{href:"/api/types/objects/text",children:(0,s.jsx)(a.code,{children:"[Text!]!"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsx)(a.p,{children:"Contains the destination name"}),"\n",(0,s.jsxs)(a.h5,{id:"destinationdatatextslanguageslanguage--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["DestinationData.texts.",(0,s.jsx)("b",{children:"languages"})]})}),(0,s.jsx)(r,{}),(0,s.jsx)(a.a,{href:"/api/types/scalars/language",children:(0,s.jsx)(a.code,{children:"[Language!]"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(a.h4,{id:"destinationdataclosestdestinationsstring--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["DestinationData.",(0,s.jsx)("b",{children:"closestDestinations"})]})}),(0,s.jsx)(r,{}),(0,s.jsx)(a.a,{href:"/api/types/scalars/string",children:(0,s.jsx)(a.code,{children:"[String!]"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(a.p,{children:"Closest destinations, indicates destinations in proximity"}),"\n",(0,s.jsxs)(a.h4,{id:"destinationdataparentstring-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["DestinationData.",(0,s.jsx)("b",{children:"parent"})]})}),(0,s.jsx)(r,{}),(0,s.jsx)(a.a,{href:"/api/types/scalars/string",children:(0,s.jsx)(a.code,{children:"String"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(a.p,{children:"Parent destination code"}),"\n",(0,s.jsxs)(a.h4,{id:"destinationdatatypedestinationtype-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["DestinationData.",(0,s.jsx)("b",{children:"type"})]})}),(0,s.jsx)(r,{}),(0,s.jsx)(a.a,{href:"/api/types/enums/destination-type",children:(0,s.jsx)(a.code,{children:"DestinationType"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,s.jsx)(a.p,{children:"Indicates destination type, zone or city"}),"\n",(0,s.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"/api/types/objects/destination",children:(0,s.jsx)(a.code,{children:"Destination"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(r,{}),(0,s.jsx)(a.a,{href:"/api/types/objects/location",children:(0,s.jsx)(a.code,{children:"Location"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsx)(a.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"/api/types/unions/destination-search-result",children:(0,s.jsx)(a.code,{children:"DestinationSearchResult"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"union"})]})]})}function p(e={}){const{wrapper:a}={...(0,d.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},21020:(e,a,t)=>{var n=t(96540),s=Symbol.for("react.element"),d=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,a,t){var n,d={},c=null,r=null;for(n in void 0!==t&&(c=""+t),void 0!==a.key&&(c=""+a.key),void 0!==a.ref&&(r=a.ref),a)i.call(a,n)&&!l.hasOwnProperty(n)&&(d[n]=a[n]);if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===d[n]&&(d[n]=a[n]);return{$$typeof:s,type:e,key:c,ref:r,props:d,_owner:o.current}}a.Fragment=d,a.jsx=c,a.jsxs=c},74848:(e,a,t)=>{e.exports=t(21020)},28453:(e,a,t)=>{t.d(a,{R:()=>i,x:()=>o});var n=t(96540);const s={},d=n.createContext(s);function i(e){const a=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(d.Provider,{value:a},e.children)}}}]);
/*! For license information please see 09824bd2.1e784ef6.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[23428],{82777:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>u,Bullet:()=>d,Details:()=>m,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var r=t(74848),a=t(28453),s=t(96540);const o={id:"room-input",title:"RoomInput",hide_table_of_contents:!1},i=void 0,c={id:"inputs/room-input",title:"RoomInput",description:"Occupancy for a room. It contains a list of pax ages.",source:"@site/api/inputs/room-input.mdx",sourceDirName:"inputs",slug:"/inputs/room-input",permalink:"/api/inputs/room-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"room-input",title:"RoomInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"RemoveMemberFromOrganizationInput",permalink:"/api/inputs/remove-member-from-organization-input"},next:{title:"SearchCriteriaCodeWhereInput",permalink:"/api/inputs/search-criteria-code-where-input"}},l={},d=()=>{const e={span:"span",...(0,a.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const n={a:"a",...(0,a.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,a.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(n.span,{className:e.class,children:e.text})})},m=({dataOpen:e,dataClose:n,children:t,startOpen:o=!1})=>{const i={details:"details",summary:"summary",...(0,a.R)()},[c,l]=(0,s.useState)(o);return(0,r.jsxs)(i.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(i.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:n}),c&&t]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>RoomInput.<b>paxes</b></code><Bullet></Bullet><code>[PaxInput!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"roominputpaxespaxinput--",level:4},{value:"Member of",id:"member-of",level:3}];function x(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Occupancy for a room. It contains a list of pax ages."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"input RoomInput {\n  paxes: [PaxInput!]!\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(n.h4,{id:"roominputpaxespaxinput--",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["RoomInput.",(0,r.jsx)("b",{children:"paxes"})]})}),(0,r.jsx)(d,{}),(0,r.jsx)(n.a,{href:"/api/inputs/pax-input",children:(0,r.jsx)(n.code,{children:"[PaxInput!]!"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Array of paxes ages. The number of items in the array will indicate the pax occupancy."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"member-of",children:"Member of"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/inputs/hotel-criteria-search-input",children:(0,r.jsx)(n.code,{children:"HotelCriteriaSearchInput"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,r.jsx)(d,{}),(0,r.jsx)(n.a,{href:"/api/inputs/search-criteria-create-input",children:(0,r.jsx)(n.code,{children:"SearchCriteriaCreateInput"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,r.jsx)(d,{}),(0,r.jsx)(n.a,{href:"/api/inputs/search-criteria-update-input",children:(0,r.jsx)(n.code,{children:"SearchCriteriaUpdateInput"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function f(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},21020:(e,n,t)=>{var r=t(96540),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,s={},l=null,d=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,r)&&!c.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:a,type:e,key:l,ref:d,props:s,_owner:i.current}}n.Fragment=s,n.jsx=l,n.jsxs=l},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var r=t(96540);const a={},s=r.createContext(a);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);
/*! For license information please see c363af19.25230d1c.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[13039],{32403:(e,s,a)=>{a.r(s),a.d(s,{Badge:()=>x,Bullet:()=>o,Details:()=>h,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=a(74848),t=a(28453),r=a(96540);const i={id:"pax",title:"Pax"},l=void 0,c={id:"types/objects/pax",title:"Pax",description:"This specifies the passenger's information. The optional information only will be returned if the supplier provides it.",source:"@site/api/types/objects/pax.mdx",sourceDirName:"types/objects",slug:"/types/objects/pax",permalink:"/api/types/objects/pax",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"pax",title:"Pax"},sidebar:"schemaSidebar",previous:{title:"Password",permalink:"/api/types/objects/password"},next:{title:"Paxes",permalink:"/api/types/objects/paxes"}},d={},o=()=>{const e={span:"span",...(0,t.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const s={a:"a",...(0,t.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},x=e=>{const s={span:"span",...(0,t.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(s.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:s,children:a,startOpen:i=!1})=>{const l={details:"details",summary:"summary",...(0,t.R)()},[c,d]=(0,r.useState)(i);return(0,n.jsxs)(l.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(l.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:c?e:s}),c&&a]})},u=[{value:"Fields",id:"fields",level:3},{value:'<code>Pax.<b>age</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"paxageint--",level:4},{value:'<code>Pax.<b>name</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"paxnamestring-",level:4},{value:'<code>Pax.<b>surname</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"paxsurnamestring-",level:4},{value:'<code>Pax.<b>title</b></code><Bullet></Bullet><code>PersonalTitleType</code> <Badge class="badge badge--secondary"></Badge>',id:"paxtitlepersonaltitletype-",level:4},{value:"Member Of",id:"member-of",level:3}];function g(e){const s={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"This specifies the passenger's information. The optional information only will be returned if the supplier provides it."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-graphql",children:"type Pax {\n  age: Int!\n  name: String\n  surname: String\n  title: PersonalTitleType\n}\n"})}),"\n",(0,n.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(s.h4,{id:"paxageint--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Pax.",(0,n.jsx)("b",{children:"age"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(s.a,{href:"/api/types/scalars/int",children:(0,n.jsx)(s.code,{children:"Int!"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(s.p,{children:"Passenger age on the day of check-in, which can vary for adults, infants, or babies depending on each supplier's particular age range."}),"\n",(0,n.jsxs)(s.h4,{id:"paxnamestring-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Pax.",(0,n.jsx)("b",{children:"name"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(s.a,{href:"/api/types/scalars/string",children:(0,n.jsx)(s.code,{children:"String"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(s.p,{children:"Specifies the pax name."}),"\n",(0,n.jsxs)(s.h4,{id:"paxsurnamestring-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Pax.",(0,n.jsx)("b",{children:"surname"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(s.a,{href:"/api/types/scalars/string",children:(0,n.jsx)(s.code,{children:"String"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(s.p,{children:"Specifies the pax surname."}),"\n",(0,n.jsxs)(s.h4,{id:"paxtitlepersonaltitletype-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Pax.",(0,n.jsx)("b",{children:"title"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(s.a,{href:"/api/types/enums/personal-title-type",children:(0,n.jsx)(s.code,{children:"PersonalTitleType"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsx)(s.p,{children:"Specifies the pax title."}),"\n",(0,n.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/api/types/objects/occupancy",children:(0,n.jsx)(s.code,{children:"Occupancy"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,n.jsx)(o,{}),(0,n.jsx)(s.a,{href:"/api/types/objects/room-criteria",children:(0,n.jsx)(s.code,{children:"RoomCriteria"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"object"})]})]})}function f(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}},21020:(e,s,a)=>{var n=a(96540),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,s,a){var n,r={},d=null,o=null;for(n in void 0!==a&&(d=""+a),void 0!==s.key&&(d=""+s.key),void 0!==s.ref&&(o=s.ref),s)i.call(s,n)&&!c.hasOwnProperty(n)&&(r[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===r[n]&&(r[n]=s[n]);return{$$typeof:t,type:e,key:d,ref:o,props:r,_owner:l.current}}s.Fragment=r,s.jsx=d,s.jsxs=d},74848:(e,s,a)=>{e.exports=a(21020)},28453:(e,s,a)=>{a.d(s,{R:()=>i,x:()=>l});var n=a(96540);const t={},r=n.createContext(t);function i(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);
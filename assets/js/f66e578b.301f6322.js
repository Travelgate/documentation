/*! For license information please see f66e578b.301f6322.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[89094],{23173:(e,r,s)=>{s.r(r),s.d(r,{Badge:()=>g,Bullet:()=>i,Details:()=>h,SpecifiedBy:()=>y,assets:()=>d,contentTitle:()=>o,default:()=>x,frontMatter:()=>c,metadata:()=>n,toc:()=>f});const n=JSON.parse('{"id":"types/objects/ferry-segment","title":"FerrySegment","description":"No description","source":"@site/api/types/objects/ferry-segment.mdx","sourceDirName":"types/objects","slug":"/types/objects/ferry-segment","permalink":"/api/types/objects/ferry-segment","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"ferry-segment","title":"FerrySegment"},"sidebar":"schemaSidebar","previous":{"title":"FerrySearchEdge","permalink":"/api/types/objects/ferry-search-edge"},"next":{"title":"FullStay","permalink":"/api/types/objects/full-stay"}}');var t=s(74848),a=s(28453),l=s(96540);const c={id:"ferry-segment",title:"FerrySegment"},o=void 0,d={},i=()=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),y=e=>(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),g=e=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{className:e.class,children:e.text})}),h=({dataOpen:e,dataClose:r,children:s,startOpen:n=!1})=>{const[a,c]=(0,l.useState)(n);return(0,t.jsxs)("details",{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:a?e:r}),a&&s]})},f=[{value:"Fields",id:"fields",level:3},{value:'<code>FerrySegment.<b>departure</b></code><Bullet></Bullet><code>FerryLocation</code> <Badge class="badge badge--secondary"></Badge>',id:"ferrysegmentdepartureferrylocation-",level:4},{value:'<code>FerrySegment.<b>arrival</b></code><Bullet></Bullet><code>FerryLocation</code> <Badge class="badge badge--secondary"></Badge>',id:"ferrysegmentarrivalferrylocation-",level:4},{value:'<code>FerrySegment.<b>availableFerryBus</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"ferrysegmentavailableferrybusboolean-",level:4},{value:'<code>FerrySegment.<b>carrierCode</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"ferrysegmentcarriercodestring-",level:4},{value:'<code>FerrySegment.<b>carrierTransportCode</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"ferrysegmentcarriertransportcodestring-",level:4},{value:'<code>FerrySegment.<b>paxesFerryBus</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"ferrysegmentpaxesferrybusint-",level:4},{value:"Member Of",id:"member-of",level:3}];function p(e){const r={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"No description"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-graphql",children:"type FerrySegment {\n  departure: FerryLocation\n  arrival: FerryLocation\n  availableFerryBus: Boolean\n  carrierCode: String\n  carrierTransportCode: String\n  paxesFerryBus: Int\n}\n"})}),"\n",(0,t.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(r.h4,{id:"ferrysegmentdepartureferrylocation-",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["FerrySegment.",(0,t.jsx)("b",{children:"departure"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(r.a,{href:"/api/types/objects/ferry-location",children:(0,t.jsx)(r.code,{children:"FerryLocation"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(r.h4,{id:"ferrysegmentarrivalferrylocation-",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["FerrySegment.",(0,t.jsx)("b",{children:"arrival"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(r.a,{href:"/api/types/objects/ferry-location",children:(0,t.jsx)(r.code,{children:"FerryLocation"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(r.h4,{id:"ferrysegmentavailableferrybusboolean-",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["FerrySegment.",(0,t.jsx)("b",{children:"availableFerryBus"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(r.a,{href:"/api/types/scalars/boolean",children:(0,t.jsx)(r.code,{children:"Boolean"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(r.h4,{id:"ferrysegmentcarriercodestring-",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["FerrySegment.",(0,t.jsx)("b",{children:"carrierCode"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(r.a,{href:"/api/types/scalars/string",children:(0,t.jsx)(r.code,{children:"String"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(r.h4,{id:"ferrysegmentcarriertransportcodestring-",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["FerrySegment.",(0,t.jsx)("b",{children:"carrierTransportCode"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(r.a,{href:"/api/types/scalars/string",children:(0,t.jsx)(r.code,{children:"String"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(r.h4,{id:"ferrysegmentpaxesferrybusint-",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["FerrySegment.",(0,t.jsx)("b",{children:"paxesFerryBus"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(r.a,{href:"/api/types/scalars/int",children:(0,t.jsx)(r.code,{children:"Int"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(r.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/api/types/objects/journey",children:(0,t.jsx)(r.code,{children:"Journey"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},21020:(e,r,s)=>{var n=s(96540),t=Symbol.for("react.element"),a=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,s){var n,a={},d=null,i=null;for(n in void 0!==s&&(d=""+s),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(i=r.ref),r)l.call(r,n)&&!o.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:t,type:e,key:d,ref:i,props:a,_owner:c.current}}r.Fragment=a,r.jsx=d,r.jsxs=d},74848:(e,r,s)=>{e.exports=s(21020)},28453:(e,r,s)=>{s.d(r,{R:()=>l,x:()=>c});var n=s(96540);const t={},a=n.createContext(t);function l(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);
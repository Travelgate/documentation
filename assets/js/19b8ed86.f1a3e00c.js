/*! For license information please see 19b8ed86.f1a3e00c.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[52690],{92107:(e,a,s)=>{s.r(a),s.d(a,{Badge:()=>u,Bullet:()=>i,Details:()=>b,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>r,default:()=>y,frontMatter:()=>l,metadata:()=>n,toc:()=>f});const n=JSON.parse('{"id":"types/objects/cancel-payload","title":"CancelPayload","description":"No description","source":"@site/api/types/objects/cancel-payload.mdx","sourceDirName":"types/objects","slug":"/types/objects/cancel-payload","permalink":"/api/types/objects/cancel-payload","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"cancel-payload","title":"CancelPayload"},"sidebar":"schemaSidebar","previous":{"title":"BusinessRules","permalink":"/api/types/objects/business-rules"},"next":{"title":"CancelPenalty","permalink":"/api/types/objects/cancel-penalty"}}');var o=s(74848),t=s(28453),c=s(96540);const l={id:"cancel-payload",title:"CancelPayload"},r=void 0,d={},i=()=>(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),u=e=>(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("span",{className:e.class,children:e.text})}),b=({dataOpen:e,dataClose:a,children:s,startOpen:n=!1})=>{const[t,l]=(0,c.useState)(n);return(0,o.jsxs)("details",{...t?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:t?e:a}),t&&s]})},f=[{value:"Fields",id:"fields",level:3},{value:'<code>CancelPayload.<b>adviseMessages</b></code><Bullet></Bullet><code>[AdviseMessage]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cancelpayloadadvisemessagesadvisemessage--",level:4},{value:'<code>CancelPayload.<b>bookReference</b></code><Bullet></Bullet><code>BookReference</code> <Badge class="badge badge--secondary"></Badge>',id:"cancelpayloadbookreferencebookreference-",level:4},{value:'<code>CancelPayload.<b>bookStatus</b></code><Bullet></Bullet><code>PackageBookStatus</code> <Badge class="badge badge--secondary"></Badge>',id:"cancelpayloadbookstatuspackagebookstatus-",level:4},{value:"Member Of",id:"member-of",level:3}];function h(e){const a={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.p,{children:"No description"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-graphql",children:"type CancelPayload {\n  adviseMessages: [AdviseMessage]\n  bookReference: BookReference\n  bookStatus: PackageBookStatus\n}\n"})}),"\n",(0,o.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(a.h4,{id:"cancelpayloadadvisemessagesadvisemessage--",children:[(0,o.jsx)(a.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["CancelPayload.",(0,o.jsx)("b",{children:"adviseMessages"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(a.a,{href:"/api/types/objects/advise-message",children:(0,o.jsx)(a.code,{children:"[AdviseMessage]"})})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsx)(a.p,{children:"List of errors"}),"\n",(0,o.jsxs)(a.h4,{id:"cancelpayloadbookreferencebookreference-",children:[(0,o.jsx)(a.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["CancelPayload.",(0,o.jsx)("b",{children:"bookReference"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(a.a,{href:"/api/types/objects/book-reference",children:(0,o.jsx)(a.code,{children:"BookReference"})})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsx)(a.p,{children:"Client and supplier locators of the booking"}),"\n",(0,o.jsxs)(a.h4,{id:"cancelpayloadbookstatuspackagebookstatus-",children:[(0,o.jsx)(a.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["CancelPayload.",(0,o.jsx)("b",{children:"bookStatus"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(a.a,{href:"/api/types/enums/package-book-status",children:(0,o.jsx)(a.code,{children:"PackageBookStatus"})})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,o.jsx)(a.p,{children:"Status of the booking (OK, Cancelled...)"}),"\n",(0,o.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.a,{href:"/api/types/objects/package-mutation",children:(0,o.jsx)(a.code,{children:"PackageMutation"})})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function y(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},21020:(e,a,s)=>{var n=s(96540),o=Symbol.for("react.element"),t=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function d(e,a,s){var n,t={},d=null,i=null;for(n in void 0!==s&&(d=""+s),void 0!==a.key&&(d=""+a.key),void 0!==a.ref&&(i=a.ref),a)c.call(a,n)&&!r.hasOwnProperty(n)&&(t[n]=a[n]);if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===t[n]&&(t[n]=a[n]);return{$$typeof:o,type:e,key:d,ref:i,props:t,_owner:l.current}}a.Fragment=t,a.jsx=d,a.jsxs=d},74848:(e,a,s)=>{e.exports=s(21020)},28453:(e,a,s)=>{s.d(a,{R:()=>c,x:()=>l});var n=s(96540);const o={},t=n.createContext(o);function c(e){const a=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(t.Provider,{value:a},e.children)}}}]);
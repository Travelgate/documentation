/*! For license information please see b4dc3d2d.7e5ebdb4.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[37657],{32923:(e,n,a)=>{a.r(n),a.d(n,{Badge:()=>b,Bullet:()=>d,Details:()=>h,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>s,default:()=>y,frontMatter:()=>r,metadata:()=>t,toc:()=>f});const t=JSON.parse('{"id":"types/objects/recon-cancellation-data","title":"ReconCancellationData","description":"No description","source":"@site/api/types/objects/recon-cancellation-data.mdx","sourceDirName":"types/objects","slug":"/types/objects/recon-cancellation-data","permalink":"/api/types/objects/recon-cancellation-data","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"recon-cancellation-data","title":"ReconCancellationData"},"sidebar":"schemaSidebar","previous":{"title":"ReconBooking","permalink":"/api/types/objects/recon-booking"},"next":{"title":"ReconCancellationPolicyPenalty","permalink":"/api/types/objects/recon-cancellation-policy-penalty"}}');var c=a(74848),o=a(28453),l=a(96540);const r={id:"recon-cancellation-data",title:"ReconCancellationData"},s=void 0,i={},d=()=>(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,c.jsxs)(c.Fragment,{children:["Specification",(0,c.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),b=e=>(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("span",{className:e.class,children:e.text})}),h=({dataOpen:e,dataClose:n,children:a,startOpen:t=!1})=>{const[o,r]=(0,l.useState)(t);return(0,c.jsxs)("details",{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,c.jsx)("summary",{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:o?e:n}),o&&a]})},f=[{value:"Fields",id:"fields",level:3},{value:'<code>ReconCancellationData.<b>canceledAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge>',id:"reconcancellationdatacanceledatdatetime-",level:4},{value:'<code>ReconCancellationData.<b>netPayable</b></code><Bullet></Bullet><code>ReconNetPayable</code> <Badge class="badge badge--secondary"></Badge>',id:"reconcancellationdatanetpayablereconnetpayable-",level:4},{value:"Member Of",id:"member-of",level:3}];function u(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:"No description"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-graphql",children:"type ReconCancellationData {\n  canceledAt: DateTime\n  netPayable: ReconNetPayable\n}\n"})}),"\n",(0,c.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,c.jsxs)(n.h4,{id:"reconcancellationdatacanceledatdatetime-",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["ReconCancellationData.",(0,c.jsx)("b",{children:"canceledAt"})]})}),(0,c.jsx)(d,{}),(0,c.jsx)(n.a,{href:"/api/types/scalars/date-time",children:(0,c.jsx)(n.code,{children:"DateTime"})})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(n.h4,{id:"reconcancellationdatanetpayablereconnetpayable-",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["ReconCancellationData.",(0,c.jsx)("b",{children:"netPayable"})]})}),(0,c.jsx)(d,{}),(0,c.jsx)(n.a,{href:"/api/types/objects/recon-net-payable",children:(0,c.jsx)(n.code,{children:"ReconNetPayable"})})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,c.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/api/types/objects/recon-booking",children:(0,c.jsx)(n.code,{children:"ReconBooking"})})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"object"})]})]})}function y(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(u,{...e})}):u(e)}},21020:(e,n,a)=>{var t=a(96540),c=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,r=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,a){var t,o={},i=null,d=null;for(t in void 0!==a&&(i=""+a),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(d=n.ref),n)l.call(n,t)&&!s.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===o[t]&&(o[t]=n[t]);return{$$typeof:c,type:e,key:i,ref:d,props:o,_owner:r.current}}n.Fragment=o,n.jsx=i,n.jsxs=i},74848:(e,n,a)=>{e.exports=a(21020)},28453:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>r});var t=a(96540);const c={},o=t.createContext(c);function l(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);
/*! For license information please see c4e05f7a.1f482302.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[25276],{97467:(e,a,t)=>{t.r(a),t.d(a,{Badge:()=>p,Bullet:()=>i,Details:()=>u,SpecifiedBy:()=>m,assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>f});var n=t(74848),r=t(28453),s=t(96540);const d={id:"metadata-amend-remarks",title:"MetadataAmendRemarks",hide_table_of_contents:!1},o=void 0,l={id:"objects/metadata-amend-remarks",title:"MetadataAmendRemarks",description:"No description",source:"@site/api/objects/metadata-amend-remarks.mdx",sourceDirName:"objects",slug:"/objects/metadata-amend-remarks",permalink:"/api/objects/metadata-amend-remarks",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"metadata-amend-remarks",title:"MetadataAmendRemarks",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"MetadataAmendPaxes",permalink:"/api/objects/metadata-amend-paxes"},next:{title:"MetadataBeds",permalink:"/api/objects/metadata-beds"}},c={},i=()=>{const e={span:"span",...(0,r.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},m=e=>{const a={a:"a",...(0,r.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const a={span:"span",...(0,r.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(a.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:a,children:t,startOpen:d=!1})=>{const o={details:"details",summary:"summary",...(0,r.R)()},[l,c]=(0,s.useState)(d);return(0,n.jsxs)(o.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(o.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:l?e:a}),l&&t]})},f=[{value:"Fields",id:"fields",level:3},{value:'<code>MetadataAmendRemarks.<b>allowsAmendRemarks</b></code><Bullet></Bullet><code>ReviewedBool!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"metadataamendremarksallowsamendremarksreviewedbool--",level:4},{value:"Member of",id:"member-of",level:3}];function b(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"No description"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-graphql",children:"type MetadataAmendRemarks {\n  allowsAmendRemarks: ReviewedBool!\n}\n"})}),"\n",(0,n.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(a.h4,{id:"metadataamendremarksallowsamendremarksreviewedbool--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MetadataAmendRemarks.",(0,n.jsx)("b",{children:"allowsAmendRemarks"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(a.a,{href:"/api/objects/reviewed-bool",children:(0,n.jsx)(a.code,{children:"ReviewedBool!"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(a.blockquote,{children:"\n"}),"\n",(0,n.jsx)(a.h3,{id:"member-of",children:"Member of"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"/api/objects/metadata-data",children:(0,n.jsx)(a.code,{children:"MetadataData"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function h(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(b,{...e})}):b(e)}},21020:(e,a,t)=>{var n=t(96540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,a,t){var n,s={},c=null,i=null;for(n in void 0!==t&&(c=""+t),void 0!==a.key&&(c=""+a.key),void 0!==a.ref&&(i=a.ref),a)d.call(a,n)&&!l.hasOwnProperty(n)&&(s[n]=a[n]);if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===s[n]&&(s[n]=a[n]);return{$$typeof:r,type:e,key:c,ref:i,props:s,_owner:o.current}}a.Fragment=s,a.jsx=c,a.jsxs=c},74848:(e,a,t)=>{e.exports=t(21020)},28453:(e,a,t)=>{t.d(a,{R:()=>d,x:()=>o});var n=t(96540);const r={},s=n.createContext(r);function d(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);
/*! For license information please see 1c6d8233.72e91eed.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[26745],{16725:(e,r,t)=>{t.r(r),t.d(r,{Badge:()=>d,Bullet:()=>c,Details:()=>m,SpecifiedBy:()=>u,assets:()=>o,contentTitle:()=>p,default:()=>f,frontMatter:()=>i,metadata:()=>n,toc:()=>y});const n=JSON.parse('{"id":"types/enums/markup-rule-type","title":"MarkupRuleType","description":"Indicates what type of value is the markup, by percentage or is an import.","source":"@site/api/types/enums/markup-rule-type.mdx","sourceDirName":"types/enums","slug":"/types/enums/markup-rule-type","permalink":"/api/types/enums/markup-rule-type","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"markup-rule-type","title":"MarkupRuleType"},"sidebar":"schemaSidebar","previous":{"title":"MappingType","permalink":"/api/types/enums/mapping-type"},"next":{"title":"MediumType","permalink":"/api/types/enums/medium-type"}}');var a=t(74848),s=t(28453),l=t(96540);const i={id:"markup-rule-type",title:"MarkupRuleType"},p=void 0,o={},c=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),u=e=>(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),d=e=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{className:e.class,children:e.text})}),m=({dataOpen:e,dataClose:r,children:t,startOpen:n=!1})=>{const[s,i]=(0,l.useState)(n);return(0,a.jsxs)("details",{...s?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:s?e:r}),s&&t]})},y=[{value:"Values",id:"values",level:3},{value:"<code>MarkupRuleType.<b>PERCENT</b></code>",id:"markupruletypepercent",level:4},{value:"<code>MarkupRuleType.<b>IMPORT</b></code>",id:"markupruletypeimport",level:4},{value:"Member Of",id:"member-of",level:3}];function h(e){const r={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.p,{children:"Indicates what type of value is the markup, by percentage or is an import."}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-graphql",children:"enum MarkupRuleType {\n  PERCENT\n  IMPORT\n}\n"})}),"\n",(0,a.jsx)(r.h3,{id:"values",children:"Values"}),"\n",(0,a.jsx)(r.h4,{id:"markupruletypepercent",children:(0,a.jsx)(r.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["MarkupRuleType.",(0,a.jsx)("b",{children:"PERCENT"})]})})}),"\n",(0,a.jsx)(r.p,{children:"Indicates the percentage applied by a rule."}),"\n",(0,a.jsx)(r.h4,{id:"markupruletypeimport",children:(0,a.jsx)(r.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["MarkupRuleType.",(0,a.jsx)("b",{children:"IMPORT"})]})})}),"\n",(0,a.jsx)(r.p,{children:"Indicates the exact amount applied by a rule."}),"\n",(0,a.jsx)(r.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"/api/types/objects/rule",children:(0,a.jsx)(r.code,{children:"Rule"})})," ",(0,a.jsx)(d,{class:"badge badge--secondary",text:"object"})]})]})}function f(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},21020:(e,r,t)=>{var n=t(96540),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function o(e,r,t){var n,s={},o=null,c=null;for(n in void 0!==t&&(o=""+t),void 0!==r.key&&(o=""+r.key),void 0!==r.ref&&(c=r.ref),r)l.call(r,n)&&!p.hasOwnProperty(n)&&(s[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===s[n]&&(s[n]=r[n]);return{$$typeof:a,type:e,key:o,ref:c,props:s,_owner:i.current}}r.Fragment=s,r.jsx=o,r.jsxs=o},74848:(e,r,t)=>{e.exports=t(21020)},28453:(e,r,t)=>{t.d(r,{R:()=>l,x:()=>i});var n=t(96540);const a={},s=n.createContext(a);function l(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);
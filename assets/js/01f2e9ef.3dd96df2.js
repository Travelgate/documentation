/*! For license information please see 01f2e9ef.3dd96df2.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[42733],{10201:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>m,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>y});const r=JSON.parse('{"id":"types/enums/alert-event-type","title":"AlertEventType","description":"No description","source":"@site/api/types/enums/alert-event-type.mdx","sourceDirName":"types/enums","slug":"/types/enums/alert-event-type","permalink":"/api/types/enums/alert-event-type","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"alert-event-type","title":"AlertEventType"},"sidebar":"schemaSidebar","previous":{"title":"AlertEmailType","permalink":"/api/types/enums/alert-email-type"},"next":{"title":"AlertGroups","permalink":"/api/types/enums/alert-groups"}}');var l=n(74848),s=n(28453),a=n(96540);const o={id:"alert-event-type",title:"AlertEventType"},i=void 0,c={},d=()=>(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,l.jsxs)(l.Fragment,{children:["Specification",(0,l.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),u=e=>(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("span",{className:e.class,children:e.text})}),m=({dataOpen:e,dataClose:t,children:n,startOpen:r=!1})=>{const[s,o]=(0,a.useState)(r);return(0,l.jsxs)("details",{...s?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,l.jsx)("summary",{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:s?e:t}),s&&n]})},y=[{value:"Values",id:"values",level:3},{value:"<code>AlertEventType.<b>OK</b></code>",id:"alerteventtypeok",level:4},{value:"<code>AlertEventType.<b>ALERTING</b></code>",id:"alerteventtypealerting",level:4},{value:"Member Of",id:"member-of",level:3}];function f(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.p,{children:"No description"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-graphql",children:"enum AlertEventType {\n  OK\n  ALERTING\n}\n"})}),"\n",(0,l.jsx)(t.h3,{id:"values",children:"Values"}),"\n",(0,l.jsx)(t.h4,{id:"alerteventtypeok",children:(0,l.jsx)(t.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertEventType.",(0,l.jsx)("b",{children:"OK"})]})})}),"\n",(0,l.jsx)(t.h4,{id:"alerteventtypealerting",children:(0,l.jsx)(t.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertEventType.",(0,l.jsx)("b",{children:"ALERTING"})]})})}),"\n",(0,l.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.a,{href:"/api/types/objects/alert-event-data",children:(0,l.jsx)(t.code,{children:"AlertEventData"})})," ",(0,l.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(f,{...e})}):f(e)}},21020:(e,t,n)=>{var r=n(96540),l=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,s={},c=null,d=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,r)&&!i.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:l,type:e,key:c,ref:d,props:s,_owner:o.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var r=n(96540);const l={},s=r.createContext(l);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);
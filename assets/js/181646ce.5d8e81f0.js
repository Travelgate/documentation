/*! For license information please see 181646ce.5d8e81f0.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[55347],{87904:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>p,SpecifiedBy:()=>h,assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>a,toc:()=>g});var i=n(74848),r=n(28453),s=n(96540);const l={id:"flight-segment-where-input",title:"FlightSegmentWhereInput",hide_table_of_contents:!1},o=void 0,a={id:"inputs/flight-segment-where-input",title:"FlightSegmentWhereInput",description:"No description",source:"@site/api/inputs/flight-segment-where-input.mdx",sourceDirName:"inputs",slug:"/inputs/flight-segment-where-input",permalink:"/api/inputs/flight-segment-where-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"flight-segment-where-input",title:"FlightSegmentWhereInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"FlightOriginDestCriteriaInput",permalink:"/api/inputs/flight-origin-dest-criteria-input"},next:{title:"FloatFilter",permalink:"/api/inputs/float-filter"}},c={},d=()=>{const e={span:"span",...(0,r.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const t={a:"a",...(0,r.R)()};return(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,r.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(t.span,{className:e.class,children:e.text})})},p=({dataOpen:e,dataClose:t,children:n,startOpen:l=!1})=>{const o={details:"details",summary:"summary",...(0,r.R)()},[a,c]=(0,s.useState)(l);return(0,i.jsxs)(o.details,{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)(o.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:a?e:t}),a&&n]})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>FlightSegmentWhereInput.<b>isOrigin</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"flightsegmentwhereinputisoriginboolean-",level:4},{value:'<code>FlightSegmentWhereInput.<b>isDestination</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"flightsegmentwhereinputisdestinationboolean-",level:4}];function f(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"No description"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:"input FlightSegmentWhereInput {\n  isOrigin: Boolean\n  isDestination: Boolean\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(t.h4,{id:"flightsegmentwhereinputisoriginboolean-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["FlightSegmentWhereInput.",(0,i.jsx)("b",{children:"isOrigin"})]})}),(0,i.jsx)(d,{}),(0,i.jsx)(t.a,{href:"/api/scalars/boolean",children:(0,i.jsx)(t.code,{children:"Boolean"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(t.blockquote,{children:"\n"}),"\n",(0,i.jsxs)(t.h4,{id:"flightsegmentwhereinputisdestinationboolean-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["FlightSegmentWhereInput.",(0,i.jsx)("b",{children:"isDestination"})]})}),(0,i.jsx)(d,{}),(0,i.jsx)(t.a,{href:"/api/scalars/boolean",children:(0,i.jsx)(t.code,{children:"Boolean"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(t.blockquote,{children:"\n"})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(f,{...e})}):f(e)}},21020:(e,t,n)=>{var i=n(96540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var i,s={},c=null,d=null;for(i in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)l.call(t,i)&&!a.hasOwnProperty(i)&&(s[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===s[i]&&(s[i]=t[i]);return{$$typeof:r,type:e,key:c,ref:d,props:s,_owner:o.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var i=n(96540);const r={},s=i.createContext(r);function l(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);
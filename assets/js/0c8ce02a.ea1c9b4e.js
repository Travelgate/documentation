/*! For license information please see 0c8ce02a.ea1c9b4e.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[75935],{35816:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amendments","title":"Overview","description":"The Amendment operations allow you to amend different aspects of a booking. There are currently five amendment operations available:","source":"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amendments.mdx","sourceDirName":"apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments","slug":"/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/","permalink":"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/","draft":false,"unlisted":false,"editUrl":"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amendments.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Cancel","permalink":"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/cancel"},"next":{"title":"Amend Dates","permalink":"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amend-dates"}}');var o=n(74848),a=n(28453),s=n(99563),i=n(89791);const l={sidebar_position:1},c="Overview",m={},u=[];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"overview",children:"Overview"})}),"\n",(0,o.jsx)(t.p,{children:"The Amendment operations allow you to amend different aspects of a booking. There are currently five amendment operations available:"}),"\n","\n",(0,o.jsx)(s.A,{items:(0,i.$S)().items.filter(((e,t)=>t>0))}),"\n",(0,o.jsxs)(t.p,{children:["Each amendment type must be performed in two steps, ",(0,o.jsx)(t.code,{children:"Query"})," (quotes the amendment) and ",(0,o.jsx)(t.code,{children:"Mutation"})," (commits the amendment). In both steps the returned fields include:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"The booking detail with the amendment applied"}),"\n",(0,o.jsx)(t.li,{children:"Amendment fees if applicable"}),"\n",(0,o.jsx)(t.li,{children:"AmendmentID (Only returned in the query response)"}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{type:"warning",children:(0,o.jsxs)(t.p,{children:["Please note that amendments are not available for all suppliers. To verify whether your supplier allows modifications, please refer to the ",(0,o.jsx)(t.a,{href:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/metadata",children:"metadata"})," configuration."]})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},99563:(e,t,n)=>{n.d(t,{A:()=>g});var r=n(96540),o=n(18215),a=n(93751),s=n(56289),i=n(81430),l=n(22887),c=n(50539),m=n(9303);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:t,children:n}=e;return r.createElement(s.A,{href:t,className:(0,o.A)("card padding--lg",u.cardContainer)},n)}function p(e){let{href:t,icon:n,title:a,description:s}=e;return r.createElement(d,{href:t},r.createElement(m.A,{as:"h2",className:(0,o.A)("text--truncate",u.cardTitle),title:a},n," ",a),s&&r.createElement("p",{className:(0,o.A)("text--truncate",u.cardDescription),title:s},s))}function f(e){let{item:t}=e;const n=(0,a.Nr)(t),o=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??o(t.items.length)}):null}function h(e){let{item:t}=e;const n=(0,l.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,a.cC)(t.docId??void 0);return r.createElement(p,{href:t.href,icon:n,title:t.label,description:t.description??o?.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(h,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const n=(0,a.$S)();return r.createElement(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return r.createElement(y,e);const s=(0,a.d1)(t);return r.createElement("section",{className:(0,o.A)("row",n)},s.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(b,{item:e})))))}},81430:(e,t,n)=>{n.d(t,{W:()=>c});var r=n(96540),o=n(40797);const a=["zero","one","two","few","many","other"];function s(e){return a.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function c(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),a=n.pluralForms.indexOf(o);return r[Math.min(a,r.length-1)]}(n,t,e)}}},21020:(e,t,n)=>{var r=n(96540),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,a={},c=null,m=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(m=t.ref),t)s.call(t,r)&&!l.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:m,props:a,_owner:i.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var r=n(96540);const o={},a=r.createContext(o);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);
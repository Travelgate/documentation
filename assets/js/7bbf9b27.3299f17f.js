/*! For license information please see 7bbf9b27.3299f17f.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[31008],{72810:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(74848),o=n(28453),s=n(3514),i=n(84142);const a={sidebar_position:1},c="Overview",l={id:"apis/for-buyers/hotel-x-pull-buyers-api/content/overview",title:"Overview",description:"The Content methods provide access to essential static information from Sellers, including details like hotel and destination lists. To effectively manage these methods, familiarize yourself with calls such as hotels, categories, destinations, rooms, boards, and metadata.",source:"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/overview.mdx",sourceDirName:"apis/for-buyers/hotel-x-pull-buyers-api/content",slug:"/apis/for-buyers/hotel-x-pull-buyers-api/content/overview",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/overview.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Get Accesses",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/admin/get-accesses"},next:{title:"Hotels",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/hotels"}},u={},d=[];function m(e){const t={code:"code",h1:"h1",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(t.p,{children:["The Content methods provide access to essential static information from Sellers, including details like hotel and destination lists. To effectively manage these methods, familiarize yourself with calls such as ",(0,r.jsx)(t.code,{children:"hotels"}),", ",(0,r.jsx)(t.code,{children:"categories"}),", ",(0,r.jsx)(t.code,{children:"destinations"}),", ",(0,r.jsx)(t.code,{children:"rooms"}),", ",(0,r.jsx)(t.code,{children:"boards"}),", and ",(0,r.jsx)(t.code,{children:"metadata"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"We strongly recommend that our Buyers incorporate these content calls into their systems. This is crucial because Supplier codes might differ from those obtained through our API. This step is essential for ensuring smooth integration and accurate data retrieval. The metadata call is especially significant when establishing a connection with a Seller. It provides comprehensive information about restrictions and settings specific to that Seller, ensuring a well-informed and efficient partnership."}),"\n","\n",(0,r.jsx)(s.A,{items:(0,i.$S)().items.filter(((e,t)=>t>0))})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},3514:(e,t,n)=>{n.d(t,{A:()=>v});var r=n(96540),o=n(18215),s=n(84142),i=n(28774),a=n(53465),c=n(16654),l=n(21312),u=n(51107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:t,children:n}=e;return r.createElement(i.A,{href:t,className:(0,o.A)("card padding--lg",d.cardContainer)},n)}function p(e){let{href:t,icon:n,title:s,description:i}=e;return r.createElement(m,{href:t},r.createElement(u.A,{as:"h2",className:(0,o.A)("text--truncate",d.cardTitle),title:s},n," ",s),i&&r.createElement("p",{className:(0,o.A)("text--truncate",d.cardDescription),title:i},i))}function f(e){let{item:t}=e;const n=(0,s.Nr)(t),o=function(){const{selectMessage:e}=(0,a.W)();return t=>e(t,(0,l.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??o(t.items.length)}):null}function h(e){let{item:t}=e;const n=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,s.cC)(t.docId??void 0);return r.createElement(p,{href:t.href,icon:n,title:t.label,description:t.description??o?.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(h,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,s.$S)();return r.createElement(v,{items:n.items,className:t})}function v(e){const{items:t,className:n}=e;if(!t)return r.createElement(g,e);const i=(0,s.d1)(t);return r.createElement("section",{className:(0,o.A)("row",n)},i.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(y,{item:e})))))}},53465:(e,t,n)=>{n.d(t,{W:()=>l});var r=n(96540),o=n(44586);const s=["zero","one","two","few","many","other"];function i(e){return s.filter((t=>e.includes(t)))}const a={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),a}}),[e])}function l(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),s=n.pluralForms.indexOf(o);return r[Math.min(s,r.length-1)]}(n,t,e)}}},21020:(e,t,n)=>{var r=n(96540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,s={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,r)&&!c.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:u,props:s,_owner:a.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var r=n(96540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);
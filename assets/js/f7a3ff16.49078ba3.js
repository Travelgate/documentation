/*! For license information please see f7a3ff16.49078ba3.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[53079],{65514:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=n(74848),a=n(28453),o=n(3514),i=n(95068);const s={sidebar_position:1},l="Overview",c={id:"apps/inventory/extranet/availability-and-rates/manual-load/overview",title:"Overview",description:"The aim of the Manual Load section is to control the conditions of the rates and derived rates. It is the main tool to load allotment, conditions and prices, as well as offers and supplements in the base and derived rates. You can access this section in the Product tab.",source:"@site/docs/apps/inventory/extranet/availability-and-rates/manual-load/overview.mdx",sourceDirName:"apps/inventory/extranet/availability-and-rates/manual-load",slug:"/apps/inventory/extranet/availability-and-rates/manual-load/overview",permalink:"/docs/apps/inventory/extranet/availability-and-rates/manual-load/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apps/inventory/extranet/availability-and-rates/manual-load/overview.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Overview",permalink:"/docs/apps/inventory/extranet/availability-and-rates/overview"},next:{title:"Availability and Price Load",permalink:"/docs/apps/inventory/extranet/availability-and-rates/manual-load/availability-and-price"}},d={},u=[];function m(e){const t={h1:"h1",header:"header",img:"img",p:"p",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"overview",children:"Overview"})}),"\n",(0,r.jsx)(t.p,{children:"The aim of the Manual Load section is to control the conditions of the rates and derived rates. It is the main tool to load allotment, conditions and prices, as well as offers and supplements in the base and derived rates. You can access this section in the Product tab."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://storage.travelgate.com/docs/inventory_manual-load.png",alt:"Inventory Manual Load"})}),"\n","\n",(0,r.jsx)(o.A,{items:(0,i.$S)().items.filter(((e,t)=>t>0))})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},3514:(e,t,n)=>{n.d(t,{A:()=>g});var r=n(96540),a=n(18215),o=n(26972),i=n(28774),s=n(53465),l=n(16654),c=n(21312),d=n(51107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:t,children:n}=e;return r.createElement(i.A,{href:t,className:(0,a.A)("card padding--lg",u.cardContainer)},n)}function p(e){let{href:t,icon:n,title:o,description:i}=e;return r.createElement(m,{href:t},r.createElement(d.A,{as:"h2",className:(0,a.A)("text--truncate",u.cardTitle),title:o},n," ",o),i&&r.createElement("p",{className:(0,a.A)("text--truncate",u.cardDescription),title:i},i))}function f(e){let{item:t}=e;const n=(0,o.Nr)(t),a=function(){const{selectMessage:e}=(0,s.W)();return t=>e(t,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??a(t.items.length)}):null}function h(e){let{item:t}=e;const n=(0,l.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.cC)(t.docId??void 0);return r.createElement(p,{href:t.href,icon:n,title:t.label,description:t.description??a?.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(h,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const n=(0,o.$S)();return r.createElement(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return r.createElement(y,e);const i=(0,o.d1)(t);return r.createElement("section",{className:(0,a.A)("row",n)},i.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(v,{item:e})))))}},53465:(e,t,n)=>{n.d(t,{W:()=>c});var r=n(96540),a=n(44586);const o=["zero","one","two","few","many","other"];function i(e){return o.filter((t=>e.includes(t)))}const s={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,a.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),s}}),[e])}function c(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const a=n.select(t),o=n.pluralForms.indexOf(a);return r[Math.min(o,r.length-1)]}(n,t,e)}}},21020:(e,t,n)=>{var r=n(96540),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,o={},c=null,d=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,r)&&!l.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:a,type:e,key:c,ref:d,props:o,_owner:s.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var r=n(96540);const a={},o=r.createContext(a);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);
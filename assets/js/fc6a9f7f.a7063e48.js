/*! For license information please see fc6a9f7f.a7063e48.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2795],{36677:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"apps/monitoring-apps/stats/what-does-search-traffic-mean","title":"Traffic Types","description":"You might have noticed a handy feature in the Search tab known as the \\"Search Traffic Type\\" filter. This filter comes into play when you\'re using our Speed Cache APP. By default, traffic flows directly from the Buyer to the Seller systems, which we refer to as \\"Basic\\" traffic. However, when Speed is activated for a specific connection, the traffic is split into two types: the traffic that the Buyer sends and the Speed cache handles, and the traffic that Speed sends to the Seller system to fill its cache.","source":"@site/kb/apps/monitoring-apps/stats/what-does-search-traffic-mean.md","sourceDirName":"apps/monitoring-apps/stats","slug":"/apps/monitoring-apps/stats/what-does-search-traffic-mean","permalink":"/kb/apps/monitoring-apps/stats/what-does-search-traffic-mean","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"kbSidebar","previous":{"title":"Stats: Color Guide","permalink":"/kb/apps/monitoring-apps/stats/understanding-colors-in-stats"},"next":{"title":"Understanding Data Discrepancies","permalink":"/kb/apps/monitoring-apps/stats/understanding-data-discrepancies"}}');var r=s(74848),a=s(28453);const i={sidebar_position:3},o="Traffic Types",c={},l=[];function h(e){const t={h1:"h1",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"traffic-types",children:"Traffic Types"})}),"\n",(0,r.jsx)(t.p,{children:'You might have noticed a handy feature in the Search tab known as the "Search Traffic Type" filter. This filter comes into play when you\'re using our Speed Cache APP. By default, traffic flows directly from the Buyer to the Seller systems, which we refer to as "Basic" traffic. However, when Speed is activated for a specific connection, the traffic is split into two types: the traffic that the Buyer sends and the Speed cache handles, and the traffic that Speed sends to the Seller system to fill its cache.'}),"\n",(0,r.jsx)(t.p,{children:"To help you visualize these different traffic types, we created the diagram below:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://storage.travelgate.com/kbase/stats_traffic_type_1.jpg",alt:"stats_traffic_type_1"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"BASIC"})," (Blue): It is the standard transaction. A Buyer is connected to a Seller without any other solution to the connection."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"SPEED"})," (Green): It is the transaction sent by a Buyer when their connection uses Speed. Our cache solution blocks the request from reaching the Seller's system."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"SCHEDULER"}),' (Red): This kind of transaction only refers to static content (Hotel List, Hotel Information, etc). A transaction is tagged as "Scheduler" when the information requested is stored in Travelgate Database (Offline).']}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"OPTIMIZED"})," (Gray): These are the requests sent by Travelgate to feed our internal databases. There are two sources:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Speed"}),": When the information requested by the Buyer in a Speed connection is not already stored in our DB. Travelgate sends a request to the Seller to obtain it."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Scheduler"}),": When the time it takes to get all the static information from a Seller is too high, Travelgate downloads it asynchronously in order to return it to their Buyers in a shorter, more acceptable time frame."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"By default, Stats displays the combined traffic sent by the Buyer, regardless of whether it is handled by the Seller (Basic Traffic) or the Speed cache (Speed Traffic). However, if you're interested in viewing only the traffic that the Seller system actively manages, you can use the filter and select the 'Optimize' + 'Basic' options:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://storage.travelgate.com/kbase/stats_traffic_type_2.jpg",alt:"stats_traffic_type_2"})}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},21020:(e,t,s)=>{var n=s(96540),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,s){var n,a={},l=null,h=null;for(n in void 0!==s&&(l=""+s),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(h=t.ref),t)i.call(t,n)&&!c.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:r,type:e,key:l,ref:h,props:a,_owner:o.current}}t.Fragment=a,t.jsx=l,t.jsxs=l},74848:(e,t,s)=>{e.exports=s(21020)},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>o});var n=s(96540);const r={},a=n.createContext(r);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);
/*! For license information please see 51a06647.27a883f9.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[85265],{62406:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/connection-timeout-provider","title":"104 error - Connection Timeout With Provider","description":"This error occurs when the Seller\'s response time has exceeded the timeout set in the Buyer\'s request.","source":"@site/kb/our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/104-connection-timeout-provider.md","sourceDirName":"our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings","slug":"/our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/connection-timeout-provider","permalink":"/kb/our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/connection-timeout-provider","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"kbSidebar","previous":{"title":"103 error - Too many requests to the supplier","permalink":"/kb/our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/too-many-requests"},"next":{"title":"105 error - Communication Error","permalink":"/kb/our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/communication-error"}}');var s=o(74848),n=o(28453);const i={sidebar_position:5},a="104 error - Connection Timeout With Provider",l={},u=[{value:"Hotel-X Buyers API",id:"hotel-x-buyers-api",level:3},{value:"Legacy Buyers API",id:"legacy-buyers-api",level:3},{value:"What should I do as a Buyer if I detect an increase in timeout errors from a Seller?",id:"what-should-i-do-as-a-buyer-if-i-detect-an-increase-in-timeout-errors-from-a-seller",level:3},{value:"What should I do as a Seller if one of my Buyers reports timeout errors?",id:"what-should-i-do-as-a-seller-if-one-of-my-buyers-reports-timeout-errors",level:3}];function c(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"104-error---connection-timeout-with-provider",children:"104 error - Connection Timeout With Provider"})}),"\n",(0,s.jsx)(r.p,{children:"This error occurs when the Seller's response time has exceeded the timeout set in the Buyer's request."}),"\n",(0,s.jsx)(r.h3,{id:"hotel-x-buyers-api",children:"Hotel-X Buyers API"}),"\n",(0,s.jsxs)(r.p,{children:["You may find the timeout value at a request level (in your Settings) or at a Default Settings level (in our website>Conections>",(0,s.jsx)(r.a,{href:"/kb/connections/connections-settings",children:"Connections Settings"}),")."]}),"\n",(0,s.jsx)(r.h3,{id:"legacy-buyers-api",children:"Legacy Buyers API"}),"\n",(0,s.jsx)(r.p,{children:'This timeout is included as a Common Element ("timeoutMilliseconds") in every request:'}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:"https://storage.travelgate.com/kbase/104_error.jpg",alt:"104_error"})}),"\n",(0,s.jsx)(r.p,{children:"In the aforementioned example, the Buyer sets a timeout of 24700 milliseconds (24.7 seconds) so that will be the time that TravelgateX will wait for a response by the Seller. Error 104 will be returned if we are not able to obtain a response from the Seller's system before the established timeout:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"<applicationErrors>\n    <code/>\n    <type>104</type>\n    <description>Connection Timeout With Provider</description>\n    <httpStatusCode>0</httpStatusCode>\n</applicationErrors>\n"})}),"\n",(0,s.jsx)(r.h3,{id:"what-should-i-do-as-a-buyer-if-i-detect-an-increase-in-timeout-errors-from-a-seller",children:"What should I do as a Buyer if I detect an increase in timeout errors from a Seller?"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Increase the Seller's timeout allowed:"})," Adjust the timeout settings to give the Seller more time to respond."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Contact the Seller directly:"})," Let the Seller know about your response time expectations. They might be able to optimize their system to respond more quickly."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Reduce the number of hotels or destinations requested:"})," Requesting information for a large number of hotels or destinations at once could be slowing down the Seller's response time. Reducing the number of requests might help."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Retry the operation:"})," Network issues or temporary system problems can occasionally lead to a timeout, and retrying the operation may resolve this. Note that this approach is applicable to the Search method. For timeouts occurring in Book, ensure you restart the booking flow beginning at Search. Similarly, if you encounter an error in Book response, ensure to consult the guidelines in the 'Status in Book Response' article ",(0,s.jsx)(r.a,{href:"/kb/our-products/are-you-a-buyer/our-methods/booking-flow/book/what-status-can-be-returned-in-hotel-x-book-response",children:"here"}),"."]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"what-should-i-do-as-a-seller-if-one-of-my-buyers-reports-timeout-errors",children:"What should I do as a Seller if one of my Buyers reports timeout errors?"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Check System Performance:"})," Review your system's performance for any issues causing slow response times, such as server overload, network problems, or software inefficiencies."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Optimize Your System:"})," Consider upgrading your system to boost response times."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Communicate with the Buyer:"})," They might be able to increase the request timeout value or reduce the number of hotels or destinations in their request."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Monitor Performance:"})," Utilize monitoring tools to track your system's performance over time, helping you identify any recurring issues or trends that cause delays. You can also access Travelgate\u2019s monitoring tools (",(0,s.jsx)(r.a,{href:"/kb/apps/monitoring-apps/stats/stats-connectivity-dashboard",children:"Stats"}),", ",(0,s.jsx)(r.a,{href:"https://docs.travelgate.com/kb/apps/monitoring-apps/alerts/alerts-real-time-detection",children:"Alerts"}),") to help you keep track of the Buyer\u2019s performance."]}),"\n"]}),"\n",(0,s.jsx)(r.admonition,{type:"tip",children:(0,s.jsxs)(r.p,{children:["If you\u2019ve followed the above tips and the performance is still not optimal, consider activating ",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.a,{href:"/kb/apps/smart-traffic-apps/speed/speed-app",children:"Speed"})}),", our caching solution. Enabling Speed can help improve response times and enhance the overall performance of the Seller's system."]})})]})}function d(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},21020:(e,r,o)=>{var t=o(96540),s=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,o){var t,n={},u=null,c=null;for(t in void 0!==o&&(u=""+o),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(c=r.ref),r)i.call(r,t)&&!l.hasOwnProperty(t)&&(n[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===n[t]&&(n[t]=r[t]);return{$$typeof:s,type:e,key:u,ref:c,props:n,_owner:a.current}}r.Fragment=n,r.jsx=u,r.jsxs=u},74848:(e,r,o)=>{e.exports=o(21020)},28453:(e,r,o)=>{o.d(r,{R:()=>i,x:()=>a});var t=o(96540);const s={},n=t.createContext(s);function i(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);
/*! For license information please see 864c7d3e.d9e2b620.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[89835],{47021:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>t,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"apis/for-sellers/connectors-pull-developers-api/Shopping_Workflow/Book","title":"Book","description":"Overview","source":"@site/docs/apis/for-sellers/connectors-pull-developers-api/Shopping_Workflow/Book.mdx","sourceDirName":"apis/for-sellers/connectors-pull-developers-api/Shopping_Workflow","slug":"/apis/for-sellers/connectors-pull-developers-api/Shopping_Workflow/Book","permalink":"/docs/apis/for-sellers/connectors-pull-developers-api/Shopping_Workflow/Book","draft":false,"unlisted":false,"editUrl":"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-sellers/connectors-pull-developers-api/Shopping_Workflow/Book.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Book","sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"Quote","permalink":"/docs/apis/for-sellers/connectors-pull-developers-api/Shopping_Workflow/Quote"},"next":{"title":"Cancel","permalink":"/docs/apis/for-sellers/connectors-pull-developers-api/Shopping_Workflow/Cancel"}}');var r=o(74848),i=o(28453);const t={title:"Book",sidebar_position:4},l=void 0,c={},d=[{value:"<strong>Overview</strong>",id:"overview",level:2},{value:"<strong>Purpose</strong>",id:"purpose",level:2},{value:"<strong>When to Use</strong>",id:"when-to-use",level:2},{value:"<strong>Response Details</strong>",id:"response-details",level:2},{value:"<strong>Common Scenarios</strong>",id:"common-scenarios",level:2},{value:"<strong>Technical Details</strong>",id:"technical-details",level:2}];function a(e){const n={blockquote:"blockquote",code:"code",h2:"h2",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"overview",children:(0,r.jsx)(n.strong,{children:"Overview"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Book"})," operation is the final step in the booking workflow, used to confirm a reservation for a selected option. It involves providing detailed guest information, payment details (if required), and a client locator. Once completed, the supplier processes the reservation and returns its status."]}),"\n",(0,r.jsx)(n.h2,{id:"purpose",children:(0,r.jsx)(n.strong,{children:"Purpose"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Book"})," operation ensures:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Guest Information Submission"}),": Transfers passenger details, including names, surnames, and any additional guest-specific data, to the supplier."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Payment Validation"}),": Confirms and processes payment if the supplier requires it at the booking stage."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Reservation Confirmation"}),": Secures the selected option and generates a unique supplier locator for future management (e.g., cancellation or check bookings)."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"when-to-use",children:(0,r.jsx)(n.strong,{children:"When to Use"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Finalizing Reservations"}),": After ",(0,r.jsx)(n.code,{children:"Quote"}),", when the selected option has been validated and confirmed."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Session-Based Suppliers"}),": For suppliers requiring additional validation or token updates during the booking process."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Immediate Confirmation"}),": For suppliers offering instant booking confirmation."]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note"}),": If the booking status is returned as ",(0,r.jsx)(n.code,{children:"Unknown"}),", the client must handle further investigation or contact the supplier to confirm the booking."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"response-details",children:(0,r.jsx)(n.strong,{children:"Response Details"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Book"})," operation returns:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Booking Status"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Confirmed"}),": The booking has been successfully processed."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Unknown"}),": The supplier could not finalize the booking. Further action may be required."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Supplier Locator"}),": A unique identifier for the booking from the supplier, used for future operations like cancellation or check bookings."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Additional Details"}),": May include booking remarks or warnings specific to the supplier."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"common-scenarios",children:(0,r.jsx)(n.strong,{children:"Common Scenarios"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Payment-Required Suppliers"}),": Includes credit card information or other payment details as part of the ",(0,r.jsx)(n.code,{children:"Book"})," request."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Error Handling"}),": Common errors include:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"SupplierBookingNotConfirmed"}),": Indicates that the booking could not be processed by the supplier."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ItemNotAvailable"}),": Returned if the selected option is no longer valid at the time of booking."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"technical-details",children:(0,r.jsx)(n.strong,{children:"Technical Details"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Request Object"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Includes passenger details, payment information, client locator, and the selected option."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["[TODO inject ",(0,r.jsx)(n.code,{children:"Connectors.Pull.Hotel.Domain.Contracts.Search.Book.BookRq"}),"]"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Response Object"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Provides booking confirmation status, supplier locator, and any additional remarks or warnings."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["[TODO inject ",(0,r.jsx)(n.code,{children:"Connectors.Pull.Hotel.Domain.Contracts.Search.Book.BookRs"}),"]"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},21020:(e,n,o)=>{var s=o(96540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,o){var s,i={},d=null,a=null;for(s in void 0!==o&&(d=""+o),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(a=n.ref),n)t.call(n,s)&&!c.hasOwnProperty(s)&&(i[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===i[s]&&(i[s]=n[s]);return{$$typeof:r,type:e,key:d,ref:a,props:i,_owner:l.current}}n.Fragment=i,n.jsx=d,n.jsxs=d},74848:(e,n,o)=>{e.exports=o(21020)},28453:(e,n,o)=>{o.d(n,{R:()=>t,x:()=>l});var s=o(96540);const r={},i=s.createContext(r);function t(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);
/*! For license information please see 3622e96d.0bd8a57f.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[41312],{7056:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"apis/for-sellers/connectors-pull-developers-api/Access_Data/AccessData","title":"Access Data","description":"An Access represents a connection between a Buyer and a Seller integrated into Travelgate. It contains all the credentials and custom parameters (specific to the supplier) required for successful communication.","source":"@site/docs/apis/for-sellers/connectors-pull-developers-api/Access_Data/AccessData.mdx","sourceDirName":"apis/for-sellers/connectors-pull-developers-api/Access_Data","slug":"/apis/for-sellers/connectors-pull-developers-api/Access_Data/AccessData","permalink":"/docs/apis/for-sellers/connectors-pull-developers-api/Access_Data/AccessData","draft":false,"unlisted":false,"editUrl":"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-sellers/connectors-pull-developers-api/Access_Data/AccessData.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Overview","permalink":"/docs/apis/for-sellers/connectors-pull-developers-api/Overview/"},"next":{"title":"Overview","permalink":"/docs/apis/for-sellers/connectors-pull-developers-api/Shopping_Workflow/"}}');var i=n(74848),c=n(28453);const t={},l="Access Data",o={},d=[{value:"<strong>Access Fields</strong>",id:"access-fields",level:2},{value:"<strong>Urls Class</strong>",id:"urls-class",level:2},{value:"<strong>AccessParameters Class</strong>",id:"accessparameters-class",level:2},{value:"<strong>Example JSON</strong>",id:"example-json",level:2},{value:"<strong>Key Points</strong>",id:"key-points",level:2},{value:"Example Binder Class",id:"example-binder-class",level:2},{value:"Key Features of the Binder",id:"key-features-of-the-binder",level:3},{value:"Example JSON Access Object",id:"example-json-access-object",level:3},{value:"Benefits of a Binder",id:"benefits-of-a-binder",level:3}];function a(e){const s={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"access-data",children:"Access Data"})}),"\n",(0,i.jsxs)(s.p,{children:["An ",(0,i.jsx)(s.strong,{children:"Access"})," represents a connection between a Buyer and a Seller integrated into Travelgate. It contains all the credentials and custom parameters (specific to the supplier) required for successful communication."]}),"\n",(0,i.jsxs)(s.p,{children:["Every request made to the connector includes an ",(0,i.jsx)(s.code,{children:"Access"})," field with the following information:"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"access-fields",children:(0,i.jsx)(s.strong,{children:"Access Fields"})}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"Field"})}),(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"Type"})}),(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"Description"})})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"Code"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"int"})}),(0,i.jsx)(s.td,{children:"A unique identifier for the access configuration. This field is provided by TGX."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"User"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"string"})}),(0,i.jsx)(s.td,{children:"The username provided by the supplier for authentication."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"Password"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"string"})}),(0,i.jsx)(s.td,{children:"The password provided by the supplier for authentication."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"Urls"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"Urls"})}),(0,i.jsxs)(s.td,{children:["A collection of URLs used for specific operations like ",(0,i.jsx)(s.code,{children:"Search"}),", ",(0,i.jsx)(s.code,{children:"Quote"}),", etc."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"Parameters"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"AccessParameters"})}),(0,i.jsxs)(s.td,{children:["A dictionary of custom fields specific to the supplier (e.g., ",(0,i.jsx)(s.code,{children:"RequestorID"}),")."]})]})]})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"urls-class",children:(0,i.jsx)(s.strong,{children:"Urls Class"})}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"Field"})}),(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"Type"})}),(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"Description"})})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"Book"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"string"})}),(0,i.jsxs)(s.td,{children:["The URL endpoint for the ",(0,i.jsx)(s.code,{children:"Book"})," operation."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"Search"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"string"})}),(0,i.jsxs)(s.td,{children:["The URL endpoint for the ",(0,i.jsx)(s.code,{children:"Search"})," operation."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"Quote"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"string"})}),(0,i.jsxs)(s.td,{children:["The URL endpoint for the ",(0,i.jsx)(s.code,{children:"Quote"})," operation."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"Generic"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"string"})}),(0,i.jsx)(s.td,{children:"A generic URL endpoint that can be used for other operations or as a fallback."})]})]})]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Note"}),": Each URL must be a valid and complete endpoint conforming to the supplier's API specifications."]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"accessparameters-class",children:(0,i.jsx)(s.strong,{children:"AccessParameters Class"})}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"AccessParameters"})," class is a dictionary where custom fields specific to the supplier can be added. For instance, fields like ",(0,i.jsx)(s.code,{children:"RequestorID"}),", ",(0,i.jsx)(s.code,{children:"ClientID"}),", or ",(0,i.jsx)(s.code,{children:"Version"}),", which are common in many APIs, can be defined here. These fields provide flexibility for supplier-specific configurations."]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"example-json",children:(0,i.jsx)(s.strong,{children:"Example JSON"})}),"\n",(0,i.jsxs)(s.p,{children:["Below is an example ",(0,i.jsx)(s.code,{children:"Access"})," configuration with fictitious values:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-json",children:'{\n  "Code": 1234,\n  "User": "supplier_user",\n  "Password": "secure_password",\n  "Urls": {\n    "Book": "https://api.supplier.com/book",\n    "Search": "https://api.supplier.com/search",\n    "Quote": "https://api.supplier.com/quote",\n    "Generic": "https://api.supplier.com/generic"\n  },\n  "Parameters": {\n    "RequestorID": "TravelgateX",\n    "ClientID": "Client123",\n    "Version": "v1.0"\n  }\n}\n'})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"key-points",children:(0,i.jsx)(s.strong,{children:"Key Points"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["The ",(0,i.jsx)(s.code,{children:"Access"})," object centralizes all connection-related data for seamless integration with suppliers."]}),"\n",(0,i.jsxs)(s.li,{children:["Custom fields in ",(0,i.jsx)(s.code,{children:"Parameters"})," allow suppliers to extend the standard functionality based on their API requirements."]}),"\n",(0,i.jsxs)(s.li,{children:["Proper configuration of ",(0,i.jsx)(s.code,{children:"Urls"})," and authentication details (",(0,i.jsx)(s.code,{children:"User"})," and ",(0,i.jsx)(s.code,{children:"Password"}),") is essential for successful communication."]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h1,{id:"connectors-binder",children:"Connector's Binder"}),"\n",(0,i.jsx)(s.p,{children:"Each connector defines a class responsible for validating and binding access information. This layer ensures that the access credentials and parameters are valid before proceeding with any operations. It acts as the first validation layer to prevent errors later in the process."}),"\n",(0,i.jsx)(s.p,{children:"The binder is crucial for ensuring seamless communication between the Travelgate Marketplace and suppliers by verifying that all required fields and parameters are correctly set."}),"\n",(0,i.jsx)(s.h2,{id:"example-binder-class",children:"Example Binder Class"}),"\n",(0,i.jsx)(s.p,{children:"Below is an example implementation of a binder class:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-csharp",children:'public class CntAccessModel : IBindAccessModel\n{\n    public string User { get; private set; }\n    public string Password { get; private set; }\n    public Uri Url { get; private set; }\n    public string RequestorID { get; private set; }\n    public int ClientId { get; private set; }\n    public bool UseVersion22 { get; private set; } // This field is optional\n\n    public void Bind(string supplier, Access access)\n    {\n        if (string.IsNullOrEmpty(access.User))\n        {\n            throw new ArgumentException("User cannot be null or empty.", nameof(access.User));\n        }\n        User = access.User;\n\n        if (string.IsNullOrEmpty(access.Password))\n        {\n            throw new ArgumentException("Password cannot be null or empty.", nameof(access.Password));\n        }\n        Password = access.Password;\n\n        if (access.Urls?.Generic == null)\n        {\n            throw new ArgumentException("Generic URL cannot be null.", nameof(access.Urls.Generic));\n        }\n\n        RequestorID = access.Parameters.GetRequiredOrException("RequestorID");\n        ClientId = access.Parameters.GetRequiredOrExceptionAsInt("ClientId");\n        UseVersion22 = access.Parameters.GetOrFalse("UseVersion22");\n    }\n}\n'})}),"\n",(0,i.jsx)(s.h3,{id:"key-features-of-the-binder",children:"Key Features of the Binder"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Validation of Required Fields"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Ensures that fields such as ",(0,i.jsx)(s.code,{children:"User"}),", ",(0,i.jsx)(s.code,{children:"Password"}),", and ",(0,i.jsx)(s.code,{children:"Generic URL"})," are not null or empty."]}),"\n",(0,i.jsx)(s.li,{children:"Throws clear and descriptive exceptions for missing or invalid fields."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Extraction of Custom Parameters"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Custom parameters like ",(0,i.jsx)(s.code,{children:"RequestorID"})," and ",(0,i.jsx)(s.code,{children:"ClientId"})," are fetched from the ",(0,i.jsx)(s.code,{children:"AccessParameters"})," dictionary using helper methods."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Optional Parameters"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Includes support for optional parameters like ",(0,i.jsx)(s.code,{children:"UseVersion22"}),", which defaults to ",(0,i.jsx)(s.code,{children:"false"})," if not explicitly set."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Centralized Access Management"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Centralizes the logic for binding and validating access credentials, reducing duplication across the connector."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"example-json-access-object",children:"Example JSON Access Object"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-json",children:'{\n  "User": "SupplierUser123",\n  "Password": "SecurePassword",\n  "Urls": {\n    "Book": "https://api.supplier.com/book",\n    "Search": "https://api.supplier.com/search",\n    "Quote": "https://api.supplier.com/quote",\n    "Generic": "https://api.supplier.com"\n  },\n  "Parameters": {\n    "RequestorID": "REQ-12345",\n    "ClientId": "789",\n    "UseVersion22": "true"\n  }\n}\n'})}),"\n",(0,i.jsx)(s.h3,{id:"benefits-of-a-binder",children:"Benefits of a Binder"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Error Prevention"}),": Ensures early detection of invalid access details."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Consistency"}),": Establishes a uniform validation mechanism across all connectors."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Scalability"}),": Easily extendable to include new parameters or requirements."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"This approach ensures that access validation is handled efficiently, maintaining the integrity of the connector's operations."})]})}function h(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},21020:(e,s,n)=>{var r=n(96540),i=Symbol.for("react.element"),c=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,s,n){var r,c={},d=null,a=null;for(r in void 0!==n&&(d=""+n),void 0!==s.key&&(d=""+s.key),void 0!==s.ref&&(a=s.ref),s)t.call(s,r)&&!o.hasOwnProperty(r)&&(c[r]=s[r]);if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===c[r]&&(c[r]=s[r]);return{$$typeof:i,type:e,key:d,ref:a,props:c,_owner:l.current}}s.Fragment=c,s.jsx=d,s.jsxs=d},74848:(e,s,n)=>{e.exports=n(21020)},28453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>l});var r=n(96540);const i={},c=r.createContext(i);function t(e){const s=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(c.Provider,{value:s},e.children)}}}]);
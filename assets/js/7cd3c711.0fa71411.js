/*! For license information please see 7cd3c711.0fa71411.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2938],{32220:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"apis/for-sellers/connectors-pull-developers-api/Connector_Framework/Operation_Overview","title":"Operation Overview","description":"An operation in the Travelgate Connectors framework simulates an exchange of information between Travelgate and a supplier. This process transforms a client request into the supplier\'s format, validates responses, and parses the data back into a standardized format for the client.","source":"@site/docs/apis/for-sellers/connectors-pull-developers-api/Connector_Framework/Operation_Overview.mdx","sourceDirName":"apis/for-sellers/connectors-pull-developers-api/Connector_Framework","slug":"/apis/for-sellers/connectors-pull-developers-api/Connector_Framework/Operation_Overview","permalink":"/docs/apis/for-sellers/connectors-pull-developers-api/Connector_Framework/Operation_Overview","draft":false,"unlisted":false,"editUrl":"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-sellers/connectors-pull-developers-api/Connector_Framework/Operation_Overview.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Operation Overview","sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"PlatformOptions","permalink":"/docs/apis/for-sellers/connectors-pull-developers-api/Advanced_Configuration/PlatformOptions"},"next":{"title":"PreOperation Overview","permalink":"/docs/apis/for-sellers/connectors-pull-developers-api/Connector_Framework/PreOperation_Overview"}}');var t=s(74848),i=s(28453);const o={title:"Operation Overview",sidebar_position:2},a="Operation Overview",l={},c=[{value:"<strong>Purpose of an Operation</strong>",id:"purpose-of-an-operation",level:2},{value:"<strong>Components of an Operation</strong>",id:"components-of-an-operation",level:2},{value:"<strong>1. TryValidateModelRequest</strong>",id:"1-tryvalidatemodelrequest",level:3},{value:"<strong>2. BuildRequests</strong>",id:"2-buildrequests",level:3},{value:"<strong>3. TryValidateSupplierResponses</strong>",id:"3-tryvalidatesupplierresponses",level:3},{value:"<strong>4. ParseResponses</strong>",id:"4-parseresponses",level:3},{value:"<strong>Adding Operations to the Connector</strong>",id:"adding-operations-to-the-connector",level:2},{value:"<strong>1. Define the Operation</strong>",id:"1-define-the-operation",level:3},{value:"<strong>2. Add the Operation to the Connector</strong>",id:"2-add-the-operation-to-the-connector",level:3},{value:"<strong>3. Configure Serialization</strong>",id:"3-configure-serialization",level:3},{value:"<strong>Key Takeaways</strong>",id:"key-takeaways",level:2}];function p(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"operation-overview",children:(0,t.jsx)(n.strong,{children:"Operation Overview"})})}),"\n",(0,t.jsxs)(n.p,{children:["An operation in the ",(0,t.jsx)(n.strong,{children:"Travelgate Connectors"})," framework simulates an exchange of information between Travelgate and a supplier. This process transforms a client request into the supplier's format, validates responses, and parses the data back into a standardized format for the client."]}),"\n",(0,t.jsxs)(n.p,{children:["Operations are essential building blocks of any connector, ensuring seamless integration for functionalities like ",(0,t.jsx)(n.strong,{children:"Search"}),", ",(0,t.jsx)(n.strong,{children:"Quote"}),", ",(0,t.jsx)(n.strong,{children:"Book"}),", and more. They abstract the complexity of different supplier APIs and offer a unified interface to clients."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"purpose-of-an-operation",children:(0,t.jsx)(n.strong,{children:"Purpose of an Operation"})}),"\n",(0,t.jsxs)(n.p,{children:["Operations bridge the gap between the ",(0,t.jsx)(n.strong,{children:"Travelgate system"})," and the supplier's API. Their main goals are:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Validation"}),": Ensuring the request and response are valid and meet all requirements."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Transformation"}),": Converting data between formats (Travelgate and supplier-specific)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Error Handling"}),": Detecting and managing issues in the supplier's response."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Consistency"}),": Providing clients with reliable and standardized data formats."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"components-of-an-operation",children:(0,t.jsx)(n.strong,{children:"Components of an Operation"})}),"\n",(0,t.jsxs)(n.p,{children:["Every operation is divided into ",(0,t.jsx)(n.strong,{children:"four key steps"}),":"]}),"\n",(0,t.jsx)(n.h3,{id:"1-tryvalidatemodelrequest",children:(0,t.jsx)(n.strong,{children:"1. TryValidateModelRequest"})}),"\n",(0,t.jsxs)(n.p,{children:["This step validates the incoming request from the client. While most validation is defined in the metadata, this step is used for ",(0,t.jsx)(n.strong,{children:"specific edge cases"})," that cannot be generalized."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Example Use Case"}),": In a ",(0,t.jsx)(n.code,{children:"Book"})," operation, validating that all passengers share the same last name. This type of validation would not be covered by metadata."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"public bool TryValidateModelRequest(\n    SearchConnectorRequest connectorsRequest, \n    SearchParameters<CntAccessModel> connectorParameters,\n    out IEnumerable<AdviseMessage> adviseMessages)\n{\n    adviseMessages = default;\n    return true; // Validation passes if no issues are found.\n}\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Important"}),": This step is optional and often not required for most operations."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"2-buildrequests",children:(0,t.jsx)(n.strong,{children:"2. BuildRequests"})}),"\n",(0,t.jsxs)(n.p,{children:["Transforms the client request (in ",(0,t.jsx)(n.strong,{children:"Connector format"}),") into the supplier's format. This ensures compatibility with the supplier's API."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Details"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"BuildRequests"})," method may map multiple fields, such as hotel codes, date ranges, or room types, into the supplier's required format."]}),"\n",(0,t.jsxs)(n.li,{children:["It wraps the supplier request into a ",(0,t.jsx)(n.code,{children:"SupplierRequestWrapper"}),", which includes the supplier's endpoint URL."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"public IEnumerable<SupplierRequestWrapper<SearchRequest>> BuildRequests(\n    SearchConnectorRequest connectorsRequest, \n    SearchParameters<CntAccessModel> connectorParameters)\n{\n    return\n    [\n        new SupplierRequestWrapper<SearchRequest>(\n            MapRequest(connectorsRequest, connectorParameters), // Maps the data to the supplier's format.\n            connectorParameters.ParametersModel.Url // Defines the target URL for the request.\n        )\n    ];\n}\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"This step ensures that the supplier receives a request in the format it expects, avoiding compatibility issues."}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"3-tryvalidatesupplierresponses",children:(0,t.jsx)(n.strong,{children:"3. TryValidateSupplierResponses"})}),"\n",(0,t.jsx)(n.p,{children:"Once the supplier's response is received, this step validates it for errors or anomalies. Suppliers may return incomplete or erroneous data, so this step ensures only valid responses are processed further."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Details"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Check for supplier-specific error fields."}),"\n",(0,t.jsx)(n.li,{children:"Ensure required fields (e.g., hotel list) are present."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Example Use Case"}),": A supplier might return a response with an error code or an empty hotel list. This step would detect and handle such cases."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"public bool TryValidateSupplierResponses(\n    SearchParameters<CntAccessModel> connectorParameters,\n    IEnumerable<SupplierResponseWrapper<SearchResponse>> supplierResponses,\n    out IEnumerable<AdviseMessage> adviseMessages)\n{\n    var supplierResponseWrappers = supplierResponses as SupplierResponseWrapper<SearchResponse>[] ?? supplierResponses.ToArray();\n    \n    var success = ResponseValidator.TryValidateSupplierResponses(supplierResponseWrappers, out adviseMessages);\n\n    if (!success) return false;\n    \n    if (supplierResponseWrappers.ElementAt(0).Response.ListaHoteles?.Hotel is null)\n    {\n        adviseMessages =\n        [\n            AdviseMessage.BuildSupplierNoResults() // Indicates no results from the supplier.\n        ];\n\n        return false;\n    }\n\n    return true; // Validation passes if no issues are found.\n}\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"4-parseresponses",children:(0,t.jsx)(n.strong,{children:"4. ParseResponses"})}),"\n",(0,t.jsxs)(n.p,{children:["Transforms the supplier's response back into the ",(0,t.jsx)(n.strong,{children:"Connector format"}),". This step ensures clients receive standardized data, regardless of the supplier's API structure."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Details"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Extracts key information from the supplier's response, such as hotel details, pricing, and availability."}),"\n",(0,t.jsx)(n.li,{children:"Combines results if necessary (e.g., when multiple responses are merged)."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"public SearchConnectorResponse ParseResponses(\n    SearchConnectorRequest connectorsRequest,\n    SearchParameters<CntAccessModel> connectorParameters,\n    IEnumerable<SupplierResponseWrapper<SearchResponse>> supplierResponses,\n    CancellationToken cancellationToken)\n{\n    var firstResponse = supplierResponses.ElementAt(0);\n\n    MapAccommodations(\n        new SearchWrapper(connectorsRequest, connectorParameters, firstResponse.Response));\n\n    var accommodations = connectorParameters.OptionsFromRoomsGenerator.Combine();\n\n    return new SearchConnectorResponse(new SearchRs(accommodations)); // Returns standardized results.\n}\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Parsing ensures clients receive consistent data, regardless of the supplier's data structure or peculiarities."}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"adding-operations-to-the-connector",children:(0,t.jsx)(n.strong,{children:"Adding Operations to the Connector"})}),"\n",(0,t.jsxs)(n.p,{children:["To add a new operation, the Connector uses extensions. For example, to implement a ",(0,t.jsx)(n.code,{children:"Search"})," operation:"]}),"\n",(0,t.jsx)(n.h3,{id:"1-define-the-operation",children:(0,t.jsx)(n.strong,{children:"1. Define the Operation"})}),"\n",(0,t.jsxs)(n.p,{children:["Define the class for the operation by inheriting from the appropriate interface. For a search operation, inherit from ",(0,t.jsx)(n.code,{children:"ISearchOperation"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"public partial class SearchOperation : ISearchOperation<SearchRequest, SearchResponse, CntAccessModel>\n{\n    // Implement the methods for TryValidateModelRequest, BuildRequests, etc.\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"2-add-the-operation-to-the-connector",children:(0,t.jsx)(n.strong,{children:"2. Add the Operation to the Connector"})}),"\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.code,{children:"Extensions"})," class, add the operation using the relevant helper method. Ensure that the appropriate serializer (e.g., JSON, XML) is also configured."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"public static IServiceCollection AddSearchServices(this IServiceCollection services,\n    IConfiguration configuration)\n{\n    services.AddSearchOperation<SearchOperation, SearchRequest, SearchResponse, CntAccessModel>(\n        TgxPlatform.PlatformName,\n        configuration);\n    \n    services.AddJsonSerializer<SearchRequest, SearchResponse>(_ => { });\n\n    return services;\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"3-configure-serialization",children:(0,t.jsx)(n.strong,{children:"3. Configure Serialization"})}),"\n",(0,t.jsx)(n.p,{children:"Depending on the supplier, the operation may require JSON or XML serialization. Use the appropriate serializer:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"services.AddJsonSerializer<...>()"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"services.AddXmlSerializer<...>()"})}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"key-takeaways",children:(0,t.jsx)(n.strong,{children:"Key Takeaways"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Operations provide a unified framework for handling supplier integrations."}),"\n",(0,t.jsx)(n.li,{children:"Each step ensures the operation is robust, reliable, and standardized."}),"\n",(0,t.jsx)(n.li,{children:"Serialization and extensions are critical for integrating operations into the Connector."}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},21020:(e,n,s)=>{var r=s(96540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,s){var r,i={},c=null,p=null;for(r in void 0!==s&&(c=""+s),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(p=n.ref),n)o.call(n,r)&&!l.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:t,type:e,key:c,ref:p,props:i,_owner:a.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},74848:(e,n,s)=>{e.exports=s(21020)},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var r=s(96540);const t={},i=r.createContext(t);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);
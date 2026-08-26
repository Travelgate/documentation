"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["10398"],{26623(e,i,s){s.r(i),s.d(i,{metadata:()=>n,default:()=>j,frontMatter:()=>h,contentTitle:()=>d,toc:()=>p,assets:()=>u});var n=JSON.parse('{"id":"apis/for-buyers/hotel-x-pull-buyers-api/content/chains","title":"Chains","description":"The Chains Query allows you to retrieve hotel chain master data in two ways:","source":"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/chains.mdx","sourceDirName":"apis/for-buyers/hotel-x-pull-buyers-api/content","slug":"/apis/for-buyers/hotel-x-pull-buyers-api/content/chains","permalink":"/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/chains","draft":false,"unlisted":false,"editUrl":"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/chains.mdx","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"sidebar_position":8},"sidebar":"docsSidebar","previous":{"title":"Rooms","permalink":"/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/rooms"},"next":{"title":"Metadata","permalink":"/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/metadata"}}'),r=s(74848),t=s(28453);let c=`query ($criteria: HotelXChainQueryInput!) {
  hotelX {
    chains(criteria: $criteria) {
      edges {
        node {
          createdAt
          updatedAt
          chainData {
            chainCode
            texts {
              text
              language
            }
          }
        }
      }
    }
  }
}`,a=`{
  "criteria": {
    "access": "2"
  }
}`,l=`{
  "criteria": {
    "access": "34538"
  }
}`,o=`{
  "criteria": {
    "access": "34538",
    "chainCodes": [
      "MARR",
      "HYAT"
    ]
  }
}`,h={sidebar_position:8},d="Chains",u={},p=[{value:"Query Overview",id:"query-overview",level:2},{value:"1. Criteria",id:"1-criteria",level:3},{value:"Use Cases",id:"use-cases",level:2},{value:"FastX master chain list",id:"fastx-master-chain-list",level:3},{value:"Supplier chain list",id:"supplier-chain-list",level:3},{value:"Chain list for specific chain codes",id:"chain-list-for-specific-chain-codes",level:3}];function x(e){let i={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{GraphqlSample:s}=i;return s||function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("GraphqlSample",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"chains",children:"Chains"})}),"\n",(0,r.jsx)(i.p,{children:"The Chains Query allows you to retrieve hotel chain master data in two ways:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["The ",(0,r.jsx)(i.strong,{children:"FastX Chain List"}),", which returns standardized chain values from Travelgate."]}),"\n",(0,r.jsxs)(i.li,{children:["The ",(0,r.jsx)(i.strong,{children:"Supplier Chain List"}),", which returns native chain values configured by each connected Seller."]}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["In the Hotels list response, you receive ",(0,r.jsx)(i.code,{children:"chainCode"})," for each property. The list of possible chain values depends on the access used in the query (FastX access or Supplier access)."]}),"\n",(0,r.jsx)(i.p,{children:"The returned fields include:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"chainCode"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"text"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"language"})}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"query-overview",children:"Query Overview"}),"\n",(0,r.jsxs)(i.p,{children:["To retrieve chain values, use the Chains Query with the ",(0,r.jsx)(i.code,{children:"criteria"})," input."]}),"\n",(0,r.jsx)(i.p,{children:"When creating your chains query, you have one input to fill based on your needs:"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsx)(i.li,{children:"Criteria"}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"1-criteria",children:"1. Criteria"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Mandatory criteria"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"access"})}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Optional criteria"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"chainCodes"})," (Search by chain code)"]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"use-cases",children:"Use Cases"}),"\n",(0,r.jsx)(i.h3,{id:"fastx-master-chain-list",children:"FastX master chain list"}),"\n",(0,r.jsxs)(i.p,{children:["To retrieve chain values from the FastX scope, run the query using your FastX access (Seller ",(0,r.jsx)(i.strong,{children:'"Travelgate"'})," in ",(0,r.jsx)(i.em,{children:"MyConnections"}),")."]}),"\n",(0,r.jsx)(s,{query:c,variables:l}),"\n",(0,r.jsx)(i.h3,{id:"supplier-chain-list",children:"Supplier chain list"}),"\n",(0,r.jsxs)(i.p,{children:["To retrieve chain values from one Supplier scope, run the query using that Supplier access (for example, access ",(0,r.jsx)(i.code,{children:"2"})," for Travelgate Test supplier)."]}),"\n",(0,r.jsx)(s,{query:c,variables:a}),"\n",(0,r.jsx)(i.h3,{id:"chain-list-for-specific-chain-codes",children:"Chain list for specific chain codes"}),"\n",(0,r.jsxs)(i.p,{children:["Use the Chains Query to filter specific chain values. For example, include ",(0,r.jsx)(i.code,{children:"chainCodes"})," in your criteria to retrieve only selected chain codes from the chosen Supplier scope."]}),"\n",(0,r.jsx)(s,{query:c,variables:o}),"\n",(0,r.jsxs)(i.admonition,{type:"note",children:[(0,r.jsxs)(i.p,{children:["The values in ",(0,r.jsx)(i.code,{children:"chainCode"})," come from the selected scope (FastX or Supplier, depending on access)."]}),(0,r.jsxs)(i.p,{children:["Some hotels may not include a ",(0,r.jsx)(i.code,{children:"chainCode"})," in the hotel list response."]})]})]})}function j(e={}){let{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},28453(e,i,s){s.d(i,{R:()=>c,x:()=>a});var n=s(96540);let r={},t=n.createContext(r);function c(e){let i=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(t.Provider,{value:i},e.children)}}}]);
/*! For license information please see 24c35fdd.62ea59e0.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[60994],{70606:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=s(74848),t=s(28453),r=s(31819);const i={sidebar_position:2},d="Update Rooms",l={id:"apis/for-buyers/inventory-buyers/inventory-set-up-graphql-api/set-up/rooms-set-up/update-rooms-set-up",title:"Update Rooms",description:"The updateRoomsSetUp mutation allows you to update existing rooms' properties (except the room code). The returned fields include:",source:"@site/docs/apis/for-buyers/inventory-buyers/inventory-set-up-graphql-api/set-up/rooms-set-up/update-rooms-set-up.mdx",sourceDirName:"apis/for-buyers/inventory-buyers/inventory-set-up-graphql-api/set-up/rooms-set-up",slug:"/apis/for-buyers/inventory-buyers/inventory-set-up-graphql-api/set-up/rooms-set-up/update-rooms-set-up",permalink:"/docs/apis/for-buyers/inventory-buyers/inventory-set-up-graphql-api/set-up/rooms-set-up/update-rooms-set-up",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/inventory-buyers/inventory-set-up-graphql-api/set-up/rooms-set-up/update-rooms-set-up.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Rooms",permalink:"/docs/apis/for-buyers/inventory-buyers/inventory-set-up-graphql-api/set-up/rooms-set-up/"},next:{title:"Create Rooms",permalink:"/docs/apis/for-buyers/inventory-buyers/inventory-set-up-graphql-api/set-up/rooms-set-up/create-rooms-set-up"}},c={},u=[{value:"Mutation Inputs",id:"mutation-inputs",level:2},{value:"1. Input",id:"1-input",level:3},{value:"Requests Examples",id:"requests-examples",level:3},{value:"Update a room",id:"update-a-room",level:4}];function p(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{GraphqlSample:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("GraphqlSample",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"update-rooms",children:"Update Rooms"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"updateRoomsSetUp"})," mutation allows you to update existing rooms' properties (except the room code). The returned fields include:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"code"})}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"master"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"id"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"code"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"name"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"active"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"externalCode"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"standard"})}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"uses"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"numberOfGuests"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"minAge"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"maxAge"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"paxType"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"mutation-inputs",children:"Mutation Inputs"}),"\n",(0,o.jsxs)(n.p,{children:["When creating your ",(0,o.jsx)(n.code,{children:"updateRoomsSetUp"})," mutation, you have 1 input to fill based on your specific needs:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Input"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"1-input",children:"1. Input"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Mandatory input"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"clientCode"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"supplierCode"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"hotelCode"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"rateCode"})}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"rooms"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"code"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Optional input"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"contextCode"})}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"rooms"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"masterCode"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"active"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"standard"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"externalCode"})}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"uses"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"numberOfGuests"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"paxType"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"requests-examples",children:"Requests Examples"}),"\n",(0,o.jsx)(n.h4,{id:"update-a-room",children:"Update a room"}),"\n",(0,o.jsx)(n.p,{children:"With the following mutation, we are going to update the room standard occupancy"}),"\n",(0,o.jsx)(s,{query:r.A4,variables:r.gE})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},31819:(e,n,s)=>{s.d(n,{A4:()=>o,HX:()=>i,dv:()=>r,gE:()=>t,kF:()=>l,sP:()=>d});const o="mutation ($input: InventoryRoomsSetupUpdateInput!) {\n  inventory {\n    updateRoomsSetup(roomsSetupUpdateInput: $input) {\n      rooms {\n        code\n        master {\n            id\n            code\n            name\n        }\n        active\n        externalCode\n        standard\n        uses {\n            numberOfGuests\n            paxType\n        }\n      }\n      success\n      adviseMessages {\n        code\n        description\n        level\n        external {\n          code\n          message\n        }\n      }\n    }\n  }\n}",t='{\n    "input": {\n        "clientCode": "CDOC",\n        "supplierCode": "PDOC",\n        "hotelCode": "2",\n        "contextCode": "TGX_PUSH",\n        "rateCode": "BAR",\n        "rooms": [\n            {\n                "code": "STD",\n                "standard": 3\n            }\n        ]\n    }\n}',r="mutation ($input: InventoryRoomsSetupCreateInput!) {\n  inventory {\n    createRoomsSetup(roomsSetupCreateInput: $input) {\n      rooms {\n        code\n        master {\n            id\n            code\n            name\n        }\n        active\n        externalCode\n        standard\n        uses {\n            numberOfGuests\n            minAge\n            maxAge\n            paxType\n        }\n      }\n      success\n      adviseMessages {\n        code\n        description\n        level\n        external {\n          code\n          message\n        }\n      }\n    }\n  }\n}",i='{\n    "input": {\n        "clientCode": "CDOC",\n        "supplierCode": "PDOC",\n        "hotelCode": "2",\n        "contextCode": "TGX_PUSH",\n        "rateCode": "BAR",\n        "rooms": [\n            {\n                "code": "STD",\n                "masterCode": "STD",\n                "active": true,\n                "standard": 2,\n                "uses": [\n                    [\n                        {\n                            "numberOfGuests": 1,\n                            "paxType": "ADULT"\n                        }\n                    ],\n                    [\n                        {\n                            "numberOfGuests": 2,\n                            "paxType": "ADULT"\n                        }\n                    ],\n                    [\n                        {\n                            "numberOfGuests": 1,\n                            "paxType": "ADULT"\n                        },\n                        {\n                            "numberOfGuests": 1,\n                            "paxType": "CHILD"\n                        }\n                    ],\n                    [\n                        {\n                            "numberOfGuests": 1,\n                            "paxType": "ADULT"\n                        },\n                        {\n                            "numberOfGuests": 1,\n                            "paxType": "INFANT"\n                        }\n                    ],\n                    [\n                        {\n                            "numberOfGuests": 1,\n                            "paxType": "ADULT"\n                        },\n                        {\n                            "numberOfGuests": 1,\n                            "paxType": "CHILD"\n                        },\n                        {\n                            "numberOfGuests": 1,\n                            "paxType": "INFANT"\n                        }\n                    ]\n                ]\n            }\n        ]\n    }\n}',d="mutation ($input: InventoryRoomSetupDeleteInput!) {\n  inventory {\n    deleteRoomsSetup(roomsSetupDeleteInput: $input) {\n      success\n      adviseMessages {\n        code\n        description\n        level\n        external {\n          code\n          message\n        }\n      }\n    }\n  }\n}",l='{\n    "input": {\n        "clientCode": "CDOC",\n        "supplierCode": "PDOC",\n        "hotelCode": "2",\n        "contextCode": "TGX_PUSH",\n        "rateCode": "BAR",\n        "roomCodes": ["STD"]\n    }\n}'},21020:(e,n,s)=>{var o=s(96540),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,s){var o,r={},c=null,u=null;for(o in void 0!==s&&(c=""+s),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(u=n.ref),n)i.call(n,o)&&!l.hasOwnProperty(o)&&(r[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===r[o]&&(r[o]=n[o]);return{$$typeof:t,type:e,key:c,ref:u,props:r,_owner:d.current}}n.Fragment=r,n.jsx=c,n.jsxs=c},74848:(e,n,s)=>{e.exports=s(21020)},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>d});var o=s(96540);const t={},r=o.createContext(t);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);
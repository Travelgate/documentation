/*! For license information please see 115c84ee.9ffe1e45.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[52735],{38772:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var t=r(74848),o=r(28453);const s={sidebar_position:2},i="Create Room Master",a={id:"apis/for-buyers/inventory-buyers/inventory-set-up-graphql-api/masters/rooms-master/create-rooms-master",title:"Create Room Master",description:"The createRoomMaster mutation allows you to create a new room master in Inventory. The returned fields include:",source:"@site/docs/apis/for-buyers/inventory-buyers/inventory-set-up-graphql-api/masters/rooms-master/create-rooms-master.mdx",sourceDirName:"apis/for-buyers/inventory-buyers/inventory-set-up-graphql-api/masters/rooms-master",slug:"/apis/for-buyers/inventory-buyers/inventory-set-up-graphql-api/masters/rooms-master/create-rooms-master",permalink:"/docs/apis/for-buyers/inventory-buyers/inventory-set-up-graphql-api/masters/rooms-master/create-rooms-master",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/inventory-buyers/inventory-set-up-graphql-api/masters/rooms-master/create-rooms-master.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Rooms Master",permalink:"/docs/apis/for-buyers/inventory-buyers/inventory-set-up-graphql-api/masters/rooms-master/"},next:{title:"Overview",permalink:"/docs/apis/for-buyers/inventory-buyers/inventory-set-up-graphql-api/static-data/overview"}},c={},d=[{value:"Mutation Inputs",id:"mutation-inputs",level:2},{value:"1. Input",id:"1-input",level:3},{value:"Example response",id:"example-response",level:2}];function l(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"create-room-master",children:"Create Room Master"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"createRoomMaster"})," mutation allows you to create a new room master in Inventory. The returned fields include:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"id"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"code"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"name"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"mutation ($input: InventoryRoomMasterCreateInput!) {\n  inventory {\n    createRoomMaster(roomMasterCreateInput: $input) {\n      rooms {\n        id\n        code\n        name\n      }\n      success\n      adviseMessages {\n        code\n        description\n        level\n        external{\n            code\n            message\n        }\n      }\n    }\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"mutation-inputs",children:"Mutation Inputs"}),"\n",(0,t.jsx)(n.p,{children:"When building your mutation, you have 1 input to fill:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Input"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"1-input",children:"1. Input"}),"\n",(0,t.jsxs)(n.p,{children:["To build your ",(0,t.jsx)(n.code,{children:"createRoomMaster"})," input you need to fill your client code in the field ",(0,t.jsx)(n.code,{children:"clientCode"})," and the ",(0,t.jsx)(n.code,{children:"code"})," and ",(0,t.jsx)(n.code,{children:"name"})," you wish to set for the new room type."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Your ",(0,t.jsx)(n.code,{children:"ClientCode"})," can be retrieved from any TravelgateX's access with a Channel Manager.",(0,t.jsx)(n.br,{}),"\n","See ",(0,t.jsx)(n.a,{href:"https://app.travelgate.com/connections/myconnections",children:"My Connections"}),' and click "Get form data" in the selected access, the code in ',(0,t.jsx)(n.code,{children:"Password"})," is equivalent to the ",(0,t.jsx)(n.code,{children:"ClientCode"}),"."]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'{\n  "input":{\n    "clientCode": "CDOC",\n    "code": "STD",\n    "name": "Standard"\n  }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Mandatory input"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"clientCode"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"code"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"name"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example-response",children:"Example response"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'{\n  "data": {\n    "inventory": {\n      "roomsMaster": {\n        "rooms": [\n          {\n            "id": 47915,\n            "code": "STD",\n            "name": "Standard"\n          }\n        ]\n      }\n    }\n  }\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},21020:(e,n,r)=>{var t=r(96540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,r){var t,s={},d=null,l=null;for(t in void 0!==r&&(d=""+r),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)i.call(n,t)&&!c.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:o,type:e,key:d,ref:l,props:s,_owner:a.current}}n.Fragment=s,n.jsx=d,n.jsxs=d},74848:(e,n,r)=>{e.exports=r(21020)},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>a});var t=r(96540);const o={},s=t.createContext(o);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);
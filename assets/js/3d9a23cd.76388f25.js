/*! For license information please see 3d9a23cd.76388f25.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[47248],{7302:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var n=i(74848),s=i(28453);const r={sidebar_position:4},o="Destination",a={id:"apps/distribution/files/master-files/destinations",title:"Destination",description:"Distribution Master files contain the product you will buy and sell in our Marketplace: hotels, mealplans and other required data to apply your business rules subsequently.",source:"@site/docs/apps/distribution/files/master-files/destinations.mdx",sourceDirName:"apps/distribution/files/master-files",slug:"/apps/distribution/files/master-files/destinations",permalink:"/docs/apps/distribution/files/master-files/destinations",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apps/distribution/files/master-files/destinations.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Hotel Info",permalink:"/docs/apps/distribution/files/master-files/hotels-info"},next:{title:"Room List",permalink:"/docs/apps/distribution/files/master-files/room-list"}},l={},d=[{value:"Create and Upload your Destinations Master File",id:"create-and-upload-your-destinations-master-file",level:2},{value:"File Format Specification",id:"file-format-specification",level:3},{value:"Create and Upload your Destination Group Master File",id:"create-and-upload-your-destination-group-master-file",level:2},{value:"File Format Specification",id:"file-format-specification-1",level:3}];function c(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{BrowserWindow:i,Details:r}=t;return i||u("BrowserWindow",!0),r||u("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"destination",children:"Destination"}),"\n",(0,n.jsx)(t.p,{children:"Distribution Master files contain the product you will buy and sell in our Marketplace: hotels, mealplans and other required data to apply your business rules subsequently."}),"\n",(0,n.jsx)(t.p,{children:"Create and update your destinations and destinations groups."}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["On the Destination Code you'll need to add the same codes that you have specified or will specify in the ",(0,n.jsx)(t.a,{href:"hotels",children:"Hotel Master File"}),". This code should be match the city code in the Hotel Master File."]})}),"\n",(0,n.jsx)(t.h2,{id:"create-and-upload-your-destinations-master-file",children:"Create and Upload your Destinations Master File"}),"\n",(0,n.jsx)(t.p,{children:"To get started, create your destinations master file in the correct format and then upload it to your FTP account. We've provided a template file below \u2b07\ufe0f to help you with this process. Just click on the file name, add your data, save it in CSV format, and then upload it to the corresponding folder in your FTP."}),"\n",(0,n.jsx)(i,{children:(0,n.jsxs)(t.p,{children:["\ud83d\udcc1Distribution",(0,n.jsx)(t.br,{}),"\n","\xa0\xa0\xa0\xa0 ",(0,n.jsxs)(t.strong,{children:["\ud83d\udcc4",(0,n.jsx)(t.a,{href:"https://storage.travelgate.com/docs/Master_Destinations.csv",children:"Master_Destinations.csv"})]})]})}),"\n",(0,n.jsx)(t.h3,{id:"file-format-specification",children:"File Format Specification"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"File Name:"})," Master_Destinations.csv"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Directory:"})," Distribution"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Delimiter:"})," Hashtag (",(0,n.jsx)(t.code,{children:"#"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Data:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Destination Code (mandatory)"}),": It can\u2019t be set to zero value. It is the code of the destination and it will be used for reference the node on the tree."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Empty Field (mandatory)"}),": It will be ignored."]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"Destination Name (mandatory)"})}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"ISO Country Code (mandatory)"}),": 2 chars"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Parent Festination Code (mandatory)"}),": If the destination has no parent then it has to be set to zero."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Note:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The first line is not a header line: it contains data directly."}),"\n",(0,n.jsx)(t.li,{children:'The data of the fields is not encapsulated by " or any other character.'}),"\n",(0,n.jsx)(t.li,{children:"Each line represents a unique destination and contains all the information (fields) about it."}),"\n",(0,n.jsx)(t.li,{children:"Any blank line will be skipped."}),"\n",(0,n.jsx)(t.li,{children:"All fields are mandatory."}),"\n",(0,n.jsx)(t.li,{children:"The file and its data have to be encoded using UTF-8. Otherwise there can be stored strange characters."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"\ud83d\udcf9 Learn how to change the format of the csv file in order to edit and save it"}),(0,n.jsx)("div",{children:(0,n.jsx)("div",{children:(0,n.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/XkOk3SkZ0Sg?si=TYhN1QfMwYE1fusw&controls=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})})})]}),"\n",(0,n.jsx)(t.admonition,{title:"TAKE INTO CONSIDERATION",type:"tip",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"If a destination exists then it is updated."}),"\n",(0,n.jsx)(t.li,{children:"If a destination does not exist then it is created."}),"\n",(0,n.jsx)(t.li,{children:"Existing destination that are not referenced are not removed."}),"\n",(0,n.jsx)(t.li,{children:"If an existing destination has to be removed from system then you have to contact with Travelgate."}),"\n",(0,n.jsx)(t.li,{children:"If there is any problem with a destination's information then it is omitted (and logged) but the load continues."}),"\n"]})}),"\n",(0,n.jsx)(t.h2,{id:"create-and-upload-your-destination-group-master-file",children:"Create and Upload your Destination Group Master File"}),"\n",(0,n.jsx)(t.p,{children:"To get started, create your destination group master file in the correct format and then upload it to your FTP account. We've provided a template file below \u2b07\ufe0f to help you with this process. Just click on the file name, add your own rules, save it in CSV format, and then upload it to the corresponding folder in your FTP."}),"\n",(0,n.jsx)(i,{children:(0,n.jsxs)(t.p,{children:["\ud83d\udcc1Distribution",(0,n.jsx)(t.br,{}),"\n","\xa0\xa0\xa0\xa0 ",(0,n.jsxs)(t.strong,{children:["\ud83d\udcc4",(0,n.jsx)(t.a,{href:"https://storage.travelgate.com/docs/Master_DestinationsGroups.csv",children:"Master_DestinationsGroups.csv"})]})]})}),"\n",(0,n.jsx)(t.h3,{id:"file-format-specification-1",children:"File Format Specification"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"File Name:"})," Master_DestinationsGroups.csv"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Directory:"})," Distribution"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Delimiter:"})," Hashtag (",(0,n.jsx)(t.code,{children:"#"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Data:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Group ID (mandatory)"}),": Unique group identifier."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Group Name/Description (mandatory)"}),": If not given then it will be used the group ID as name."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Destination List (mandatory)"}),": List of destinations that belong to the corresponding group.","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The list of destinations stored in this value are separated by default with \u201c;\u201d."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Note:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The first line is not a header line: it contains data directly."}),"\n",(0,n.jsx)(t.li,{children:'The data of the fields is not encapsulated by " or any other character.'}),"\n",(0,n.jsx)(t.li,{children:"Each line represents a unique destination group and contains all the information (fields) about it."}),"\n",(0,n.jsx)(t.li,{children:"Any blank line will be skipped."}),"\n",(0,n.jsx)(t.li,{children:"All fields are mandatory."}),"\n",(0,n.jsx)(t.li,{children:"The file and its data have to be encoded using UTF-8. Otherwise there can be stored strange characters."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"\ud83d\udcf9 Learn how to change the format of the csv file in order to edit and save it"}),(0,n.jsx)("div",{children:(0,n.jsx)("div",{children:(0,n.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/XkOk3SkZ0Sg?si=TYhN1QfMwYE1fusw&controls=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})})})]}),"\n",(0,n.jsx)(t.admonition,{title:"TAKE INTO CONSIDERATION",type:"tip",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"If a destination exists then it is updated."}),"\n",(0,n.jsx)(t.li,{children:"If a destination does not exist then it is created."}),"\n",(0,n.jsx)(t.li,{children:"Existing destination that are not referenced are not removed."}),"\n",(0,n.jsx)(t.li,{children:"If an existing destination has to be removed from system then you have to contact with Travelgate."}),"\n",(0,n.jsx)(t.li,{children:"If there is any problem with a destination's information then it is omitted (and logged) but the load continues."}),"\n"]})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},21020:(e,t,i)=>{var n=i(96540),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,i){var n,r={},d=null,c=null;for(n in void 0!==i&&(d=""+i),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,n)&&!l.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===r[n]&&(r[n]=t[n]);return{$$typeof:s,type:e,key:d,ref:c,props:r,_owner:a.current}}t.Fragment=r,t.jsx=d,t.jsxs=d},74848:(e,t,i)=>{e.exports=i(21020)},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>a});var n=i(96540);const s={},r=n.createContext(s);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);
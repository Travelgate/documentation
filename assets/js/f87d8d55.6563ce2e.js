/*! For license information please see f87d8d55.6563ce2e.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[28206],{49864:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var n=r(74848),i=r(28453);const s={sidebar_position:11},l="Virtual Credit Card",c={id:"apis/for-buyers/hotel-x-pull-buyers-api/plugins/virtual-credit-card",title:"Virtual Credit Card",description:"The Virtual Credit Card plugin allows you to connect with a VCC supplier who can create virtual credit cards for you at the time of reservation. For each hotel booking where you indicate the plugin, our system will connect with your VCC supplier to obtain the virtual credit card and use this information to complete the reservation with the hotel supplier.",source:"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/virtual-credit-card.mdx",sourceDirName:"apis/for-buyers/hotel-x-pull-buyers-api/plugins",slug:"/apis/for-buyers/hotel-x-pull-buyers-api/plugins/virtual-credit-card",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/virtual-credit-card",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/virtual-credit-card.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"docsSidebar",previous:{title:"Safety Margin",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/safety-margin"},next:{title:"Search by Destination",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/search-by-destination"}},d={},o=[{value:"1.Create and Upload your GenVCC File",id:"1create-and-upload-your-genvcc-file",level:2},{value:"File format specification",id:"file-format-specification",level:3},{value:"2. Execute Virtual Credit Card Plugin in your Mutation",id:"2-execute-virtual-credit-card-plugin-in-your-mutation",level:2},{value:"GenVCC",id:"genvcc",level:3},{value:"CanVCC",id:"canvcc",level:3}];function a(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{BrowserWindow:r,Details:s}=t;return r||u("BrowserWindow",!0),s||u("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"virtual-credit-card",children:"Virtual Credit Card"}),"\n",(0,n.jsx)(t.p,{children:"The Virtual Credit Card plugin allows you to connect with a VCC supplier who can create virtual credit cards for you at the time of reservation. For each hotel booking where you indicate the plugin, our system will connect with your VCC supplier to obtain the virtual credit card and use this information to complete the reservation with the hotel supplier."}),"\n",(0,n.jsx)(t.p,{children:"Virtual Credit Card plugin adds the possibility to:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Create a virtual credit card (VCCGen):"})," The VCC generator plugin empowers Buyers to generate virtual credit cards featuring activation and expiration dates of their choosing. You can apply rules using the ",(0,n.jsx)(t.code,{children:"genvcc.csv"})," rules file to determine whether or not to utilize a specific VCC. This decision is based on the rules defined within the file and the parameters specified in the request."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Cancel a virtual credit card (VCCCan):"})," The VCC cancel plugin is responsible for cancelling a virtual credit card identified by the id returned in the book response. The service will return the status of the payment card inside status field. This plugin should be utilized exclusively within the ",(0,n.jsx)(t.a,{href:"../booking-management/cancel",children:"Cancel"})," operation, contingent on the successful completion of the booking cancellation. To specify the virtual credit card to be used for cancellation, a rule that returns an access key will be employed, utilizing the same rule file as the VCC generator. You can establish rules within the ",(0,n.jsx)(t.code,{children:"genvcc.csv"})," rule file to determine the utilization of a particular VCC based on rules within the file and request parameters."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{title:"Bear in mind",type:"warning",children:(0,n.jsxs)(t.p,{children:["You need to have an agreement with a VCC supplier integrated with TravelgateX to start using this plugin. Please check our ",(0,n.jsx)(t.a,{href:"/kb/our-products/are-you-a-buyer/getting-started-as-a-new-buyer/how-to-activate-vcc-payments",children:"VCC Payments article"})," to learn all the steps before configuring the plugin in your book mutations."]})}),"\n",(0,n.jsx)(t.p,{children:"To get started with the VCC plugin, follow these simple steps:"}),"\n",(0,n.jsx)(t.h2,{id:"1create-and-upload-your-genvcc-file",children:"1.Create and Upload your GenVCC File"}),"\n",(0,n.jsx)(t.p,{children:"To get started, create your credit card file in the correct format and then upload it to your SFTP account. We've provided a template file below \u2b07\ufe0f to help you with this process. Just click on the file name, add your own rules, save it in CSV format, and then upload it to the corresponding folder in your SFTP."}),"\n",(0,n.jsx)(r,{children:(0,n.jsxs)(t.p,{children:["\ud83d\udcc1HotelX",(0,n.jsx)(t.br,{}),"\n","\xa0\xa0\xa0\xa0 \ud83d\udcc1HotelX_0000",(0,n.jsx)(t.br,{}),"\n","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \ud83d\udcc1BusinessRules",(0,n.jsx)(t.br,{}),"\n","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 ",(0,n.jsxs)(t.strong,{children:["\ud83d\udcc4",(0,n.jsx)(t.a,{href:"https://storage.travelgate.com/docs/BuyerContext_sequential_genvcc.csv",children:"BuyerContext_sequential_genvcc.csv"})]})]})}),"\n",(0,n.jsx)(t.h3,{id:"file-format-specification",children:"File format specification"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"File Name:"})," BuyerContext_sequential_genvcc.csv"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Directory:"})," HotelX/HotelX_0000/BusinessRules"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Delimiter:"})," Comma (",(0,n.jsx)(t.code,{children:","}),")"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Header Row:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"IdRule:"})," Rule\u2019s identifier"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"ClientToken:"})," List of clientTokens allowed for this rule"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"NoClientToken:"})," List of clientTokens not allowed for this rule"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Supplier:"})," List of hotel suppliers allowed for this rule"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"NoSupplier:"})," List of hotel suppliers not allowed for this rule"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Hotels:"})," List of hotels for this rule which codes are in Context_Source context"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"NotHotels:"})," List of hotels not allowed for this rule which codes are in Context_Source context"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Access:"})," List of accesses allowed for this rule"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"NoAccess"})," List of accesses not allowed for this rule"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Currencies:"})," List of currencies allowed for this rule"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"NoCurrencies"})," List of currencies not allowed for this rule"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"CardType:"})," The CardType to be utilized for generating the virtual credit card"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"VccAccess"})," Payment access used to generate the virtual credit card with the VCC supplier"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"All lists are represented as a unique string separated by semicolons (';'). Each element within a list is a distinct value relevant to the specific criterion. For instance, a list of permissible currencies may include multiple currency codes, and each currency code is separated by a semicolon within the string representation.\nExample:\nCurrency list => \"EUR;USD;MXN\""})}),"\n",(0,n.jsxs)(s,{children:[(0,n.jsx)("summary",{children:"List of available card types"}),(0,n.jsx)("div",{children:(0,n.jsx)("div",{children:(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)("strong",{children:"Codes"})}),(0,n.jsx)("th",{children:(0,n.jsx)("strong",{children:"Names"})})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"VI"}),(0,n.jsx)("td",{children:"Visa"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"AX"}),(0,n.jsx)("td",{children:"American Express"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"BC"}),(0,n.jsx)("td",{children:"BC Card"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"CA"}),(0,n.jsx)("td",{children:"MasterCard"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"CB"}),(0,n.jsx)("td",{children:"Carte Blanche"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"CU"}),(0,n.jsx)("td",{children:"China Union Pay"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"DS"}),(0,n.jsx)("td",{children:"Discover"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"DC"}),(0,n.jsx)("td",{children:"Diners Club"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"T"}),(0,n.jsx)("td",{children:"Carta Si"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"R"}),(0,n.jsx)("td",{children:"Carte Bleue"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"N"}),(0,n.jsx)("td",{children:"Dankort"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"L"}),(0,n.jsx)("td",{children:"Delta"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"E"}),(0,n.jsx)("td",{children:"Electron"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"JC"}),(0,n.jsx)("td",{children:"Japan Credit Bureau"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"TO"}),(0,n.jsx)("td",{children:"Maestro"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"S"}),(0,n.jsx)("td",{children:"Switch"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"EC"}),(0,n.jsx)("td",{children:"Electronic Cash"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"EU"}),(0,n.jsx)("td",{children:"EuroCard"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"TP"}),(0,n.jsx)("td",{children:"Universal air travel card"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"OP"}),(0,n.jsx)("td",{children:"Optima"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"ER"}),(0,n.jsx)("td",{children:"Air Canada/RnRoute"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"XS"}),(0,n.jsx)("td",{children:"Access"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"O"}),(0,n.jsx)("td",{children:"Others"})]})]})]})})})]}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsxs)(t.p,{children:["Bear in mind that this file is a collection of rules and we chose in every Book ",(0,n.jsx)(t.strong,{children:"the first rule that matches the criteria sent in the Query"}),". You should specify the more restrictive rules on the top of the file. If there is no value for any rule criteria row, it means that any value in the request matches this row. It is important to indicate the contexts used in values on the rule criteria to improve rule matching."]})}),"\n",(0,n.jsxs)(s,{children:[(0,n.jsx)("summary",{children:"\ud83d\udcf9Learn how to change the format of the csv file in order to edit and save it"}),(0,n.jsx)("div",{children:(0,n.jsx)("div",{children:(0,n.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/XkOk3SkZ0Sg?si=TYhN1QfMwYE1fusw&controls=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})})})]}),"\n",(0,n.jsx)(t.h2,{id:"2-execute-virtual-credit-card-plugin-in-your-mutation",children:"2. Execute Virtual Credit Card Plugin in your Mutation"}),"\n",(0,n.jsx)(t.h3,{id:"genvcc",children:"GenVCC"}),"\n",(0,n.jsxs)(t.p,{children:["Once you've uploaded your genvcc file, to use the plugin add the following field to the ",(0,n.jsx)(t.code,{children:"settings"})," node of your request. Note that genvcc plugin can just be executed in ",(0,n.jsx)(t.code,{children:"book"})," ",(0,n.jsx)(t.code,{children:"mutation"}),". In order to successfully execute the genvcc plugin, you will need to create the request with the following variables."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"step"})}),': "REQUEST"']}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"type"})}),': "PRE_STEP"']}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"name"})}),': "genvcc"']}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"parameters"})}),":"]}),"\n"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Key"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default Value (if not sent)"}),(0,n.jsx)(t.th,{children:"Mandatory"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"activationDate"})}),(0,n.jsx)(t.td,{children:"yyyy/mm/dd"}),(0,n.jsx)(t.td,{children:"Represents the date when the virtual credit card will be activated"}),(0,n.jsx)(t.td,{children:"Same day as the book"}),(0,n.jsx)(t.td,{children:"NO"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"expirationDate"})}),(0,n.jsx)(t.td,{children:"yyyy/mm/dd"}),(0,n.jsx)(t.td,{children:"Represents the date when the virtual credit card will expire"}),(0,n.jsx)(t.td,{children:"One month after check in"}),(0,n.jsx)(t.td,{children:"NO"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"useGross"})}),(0,n.jsx)(t.td,{children:"true or false"}),(0,n.jsx)(t.td,{children:"Allows to choose the origin of the card amount. The option\u2019s gross or the net."}),(0,n.jsx)(t.td,{children:"Net option\u2019s value"}),(0,n.jsx)(t.td,{children:"NO"})]})]})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'"settings": {\n    "plugins" : [\n        {\n            "step" : "REQUEST",\n            "pluginsType" : {\n                "type" : "PRE_STEP",\n                "name" : "genvcc",\n                "parameters" : [\n                    {\n                        "key" : "activationDate",\n                        "value" : "yyyy-mm-dd"\n                    },\n                    {\n                        "key" : "expirationDate",\n                        "value" : "yyyy-mm-dd"\n                    },\n                    {\n                        "key" : "useGross",\n                        "value" : "true"\n                    }\n                ]\n            }\n        }\n    ]\n}\n'})}),"\n",(0,n.jsx)(t.admonition,{type:"danger",children:(0,n.jsx)(t.p,{children:"Please note, if your reservation fails due to connection or supplier error, a VCC (Virtual Credit Card) might still be created. If you need to cancel this VCC, contact with your VCC supplier promptly."})}),"\n",(0,n.jsx)(t.h3,{id:"canvcc",children:"CanVCC"}),"\n",(0,n.jsxs)(t.p,{children:["In the case of canvcc, since it is a cancellation, there is no need to upload any file. You just have to indicate it in the request. Please note that the canvcc plugin can only be executed in the ",(0,n.jsx)(t.code,{children:"cancel"})," ",(0,n.jsx)(t.code,{children:"mutation"}),". To successfully execute the canvcc plugin, you will need to create the request with the following variables."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"step"})}),": ",(0,n.jsx)(t.code,{children:"RESPONSE"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"type"})}),": ",(0,n.jsx)(t.code,{children:"PRE_STEP"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"name"})}),": ",(0,n.jsx)(t.code,{children:"canvcc"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"parameters"})}),":","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"id"})}),": The id of the virtual credit card that you want to cancel."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"currency"})}),": (Optional) A currency can be added. This is particularly useful if you use different VCC accesses depending on the currency used. Currency code format must be ISO4217 code format (i.e. \u201cEUR\u201d, \u201cUSD\u201d, \u201cGBP\u201d,\u2026)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'"settings" : {\n    "plugins" : [\n        {\n            "step" : "RESPONSE",\n            "pluginsType" : {\n                "type" : "PRE_STEP",\n                "name" : "canvcc",\n                "parameters" : [\n                    {\n                        "key" : "id",\n                        "value" : "virtualCreditCardID"\n                    },\n                    {\n                        "key" : "currency",\n                        "value" : "USD"\n                    }\n                ]\n            }\n        }\n    ]\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}function u(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},21020:(e,t,r)=>{var n=r(96540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,r){var n,s={},o=null,a=null;for(n in void 0!==r&&(o=""+r),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(a=t.ref),t)l.call(t,n)&&!d.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:i,type:e,key:o,ref:a,props:s,_owner:c.current}}t.Fragment=s,t.jsx=o,t.jsxs=o},74848:(e,t,r)=>{e.exports=r(21020)},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>c});var n=r(96540);const i={},s=n.createContext(i);function l(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[83350],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=m(n),u=r,k=s["".concat(p,".").concat(u)]||s[u]||c[u]||o;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},19703:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>v,frontMatter:()=>l,metadata:()=>m,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o="\n    query {\n      hotelX {\n        hotels(criteria: {access: 1}, relay: {}) {\n          edges {\n            node {\n              hotelData {\n                hotelName\n                hotelCode\n                categoryCode\n              }\n            }\n          }\n        }\n      }\n    }\n";var i=n(97199);const l={},p="Examples",m={unversionedId:"examples",id:"examples",title:"Examples",description:"REST playground",source:"@site/api/examples.mdx",sourceDirName:".",slug:"/examples",permalink:"/api/examples",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"schemaSidebar",previous:{title:"EntityData",permalink:"/api/unions/entity-data"}},d={},s=[{value:"REST playground",id:"rest-playground",level:2},{value:"A component for contacting customer care",id:"a-component-for-contacting-customer-care",level:2},{value:"Details element example",id:"details-element-example",level:3},{value:"Youtube Video",id:"youtube-video",level:3},{value:"BrowserWindow",id:"browserwindow",level:3},{value:"Public Image Sharing from Google Drive",id:"public-image-sharing-from-google-drive",level:3},{value:"I Am What I Am",id:"i-am-what-i-am",level:3}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=c("RestPlayground"),k=c("TipContactCustomerCare"),h=c("GraphqlSample"),g=c("BrowserWindow"),y={toc:s},f="wrapper";function v(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"examples"},"Examples"),(0,r.kt)("h2",{id:"rest-playground"},"REST playground"),(0,r.kt)(u,{mdxType:"RestPlayground"}),(0,r.kt)("h2",{id:"a-component-for-contacting-customer-care"},"A component for contacting customer care"),(0,r.kt)(k,{mdxType:"TipContactCustomerCare"}),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"<TipContactCustomerCare />\n")),(0,r.kt)("p",null,"This component can only be used with MDX files."),(0,r.kt)("h1",{id:"props-global"},"Props global"),(0,r.kt)("p",null,"Here is an example of hotel list query"),(0,r.kt)(h,{query:o,variables:'{"foo": "bar"}',mdxType:"GraphqlSample"}),(0,r.kt)("admonition",{title:"Tesing",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Some ",(0,r.kt)("strong",{parentName:"p"},"content")," with ",(0,r.kt)("em",{parentName:"p"},"Markdown")," ",(0,r.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,r.kt)("a",{parentName:"p",href:"#"},"this ",(0,r.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Easy to maintain open source documentation websites."),(0,r.kt)("p",{parentName:"blockquote"},"\u2014 Docusaurus")),(0,r.kt)("h3",{id:"details-element-example"},"Details element example"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Toggle me!"),(0,r.kt)("div",null,(0,r.kt)("div",null,"This is the detailed content"),(0,r.kt)("br",null),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Nested toggle! Some surprise inside..."),(0,r.kt)("div",null,"\ud83d\ude32\ud83d\ude32\ud83d\ude32\ud83d\ude32\ud83d\ude32")))),(0,r.kt)("h3",{id:"youtube-video"},"Youtube Video"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<YoutubeVideo id="dqWHwf988HE" />\n')),(0,r.kt)("p",null,"You can copy the video Id from the browser URL. If for example this is\nthe video URL ",(0,r.kt)("inlineCode",{parentName:"p"},"https://www.youtube.com/watch?v=dqWHwf988HE")," then the video Id is ",(0,r.kt)("inlineCode",{parentName:"p"},"dqWHwf988HE"),"."),(0,r.kt)(i.Z,{id:"dqWHwf988HE",mdxType:"YoutubeVideo"}),(0,r.kt)("h3",{id:"browserwindow"},"BrowserWindow"),(0,r.kt)(g,{mdxType:"BrowserWindow"},(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Some ",(0,r.kt)("strong",{parentName:"p"},"content")," with ",(0,r.kt)("em",{parentName:"p"},"Markdown")," ",(0,r.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,r.kt)("a",{parentName:"p",href:"#"},"this ",(0,r.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Some ",(0,r.kt)("strong",{parentName:"p"},"content")," with ",(0,r.kt)("em",{parentName:"p"},"Markdown")," ",(0,r.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,r.kt)("a",{parentName:"p",href:"#"},"this ",(0,r.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Some ",(0,r.kt)("strong",{parentName:"p"},"content")," with ",(0,r.kt)("em",{parentName:"p"},"Markdown")," ",(0,r.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,r.kt)("a",{parentName:"p",href:"#"},"this ",(0,r.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Some ",(0,r.kt)("strong",{parentName:"p"},"content")," with ",(0,r.kt)("em",{parentName:"p"},"Markdown")," ",(0,r.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,r.kt)("a",{parentName:"p",href:"#"},"this ",(0,r.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Some ",(0,r.kt)("strong",{parentName:"p"},"content")," with ",(0,r.kt)("em",{parentName:"p"},"Markdown")," ",(0,r.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,r.kt)("a",{parentName:"p",href:"#"},"this ",(0,r.kt)("inlineCode",{parentName:"a"},"api")),"."))),(0,r.kt)("h3",{id:"public-image-sharing-from-google-drive"},"Public Image Sharing from Google Drive"),(0,r.kt)("p",null,"This image is stored on Google Drive. There is a small trick to get the image URL. You need to replace the original URL:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"https://drive.google.com/file/d/1NfKgI4G7aW0W0yb5MyshfEoalDKq7FjY/view?usp=drive_link")),(0,r.kt)("p",null,"with"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"https://drive.google.com/uc?export=view&id=1NfKgI4G7aW0W0yb5MyshfEoalDKq7FjY")),(0,r.kt)("p",null,"So:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"https://drive.google.com/file/d/[IMAGE_ID]/view?usp=drive_link")),(0,r.kt)("p",null,"becomes"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"https://drive.google.com/uc?export=view&id=[IMAGE_ID]")),(0,r.kt)("p",null,"Of course, you need to make sure the image is shared with the public."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://drive.google.com/uc?export=view&id=12KCTE3drVajTYyErwzyi65Wi_yrqR33h",alt:"Public Image"})),(0,r.kt)("h3",{id:"i-am-what-i-am"},"I Am What I Am"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://drive.google.com/uc?export=view&id=1NfKgI4G7aW0W0yb5MyshfEoalDKq7FjY",alt:"I Am What I Am"})))}v.isMDXComponent=!0},97199:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294);const r=e=>{let{id:t}=e;return a.createElement("iframe",{style:{aspectRatio:"16 / 9",width:"100%"},src:`https://www.youtube.com/embed/${t}?controls=0`,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}}}]);
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[32004],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),b=a,m=s["".concat(c,".").concat(b)]||s[b]||d[b]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},21297:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>u,Details:()=>m,SpecifiedBy:()=>s,assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>c,toc:()=>b});var r=n(87462),a=n(67294),o=n(3905);const i={id:"phone-input",title:"PhoneInput",hide_table_of_contents:!1},l=void 0,c={unversionedId:"inputs/phone-input",id:"inputs/phone-input",title:"PhoneInput",description:"Phone number accomplishing standard E.164 (Max. 15 digits) Example: +16175551212",source:"@site/api/inputs/phone-input.mdx",sourceDirName:"inputs",slug:"/inputs/phone-input",permalink:"/api/inputs/phone-input",draft:!1,tags:[],version:"current",frontMatter:{id:"phone-input",title:"PhoneInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PetInput",permalink:"/api/inputs/pet-input"},next:{title:"PluginStepInput",permalink:"/api/inputs/plugin-step-input"}},p={},u=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PhoneInput.<b>countryCode</b></code><Bullet /><code>DialingCountryCode!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-phoneinputbcountrycodebcodedialingcountrycode--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PhoneInput.<b>number</b></code><Bullet /><code>PhoneSubscriberNumber!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-phoneinputbnumberbcodephonesubscribernumber--",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:i,startOpen:l=!1}=e;const[c,p]=(0,a.useState)(l);return(0,o.kt)("details",(0,r.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&i)},g={Bullet:u,SpecifiedBy:s,Badge:d,toc:b,Details:m},f="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Phone number accomplishing standard E.164 (Max. 15 digits) Example: +16175551212"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input PhoneInput {\n  countryCode: DialingCountryCode!\n  number: PhoneSubscriberNumber!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-phoneinputbcountrycodebcodedialingcountrycode--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PhoneInput.",(0,o.kt)("b",null,"countryCode"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/dialing-country-code"},(0,o.kt)("inlineCode",{parentName:"a"},"DialingCountryCode!"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The combination of one, two or three digits identifying a specific country, countries in an integrated numbering plan, or a specific geographic area (1 to 3 digits)")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-phoneinputbnumberbcodephonesubscribernumber--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PhoneInput.",(0,o.kt)("b",null,"number"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/phone-subscriber-number"},(0,o.kt)("inlineCode",{parentName:"a"},"PhoneSubscriberNumber!"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Identifies a subscriber for a particular global service")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/inputs/contact-info-input"},(0,o.kt)("inlineCode",{parentName:"a"},"ContactInfoInput"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[18527],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var m=n.createContext({}),s=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,m=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(r),b=o,u=d["".concat(m,".").concat(b)]||d[b]||p[b]||a;return r?n.createElement(u,l(l({ref:t},c),{},{components:r})):n.createElement(u,l({ref:t},c))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=b;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},66102:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>p,Bullet:()=>c,Details:()=>u,SpecifiedBy:()=>d,assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>m,toc:()=>b});var n=r(87462),o=r(67294),a=r(3905);const l={id:"members-role",title:"MembersRole",hide_table_of_contents:!1},i=void 0,m={unversionedId:"enums/members-role",id:"enums/members-role",title:"MembersRole",description:"No description",source:"@site/api/enums/members-role.mdx",sourceDirName:"enums",slug:"/enums/members-role",permalink:"/api/enums/members-role",draft:!1,tags:[],version:"current",frontMatter:{id:"members-role",title:"MembersRole",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"MembersOrderByEnum",permalink:"/api/enums/members-order-by-enum"},next:{title:"MembersType",permalink:"/api/enums/members-type"}},s={},c=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{className:e.class},e.text)),b=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>MembersRole.<b>ADMIN</b></code>",id:"code-style-fontweight-normal-membersrolebadminbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>MembersRole.<b>VIEWER</b></code>",id:"code-style-fontweight-normal-membersrolebviewerbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>MembersRole.<b>OWNER</b></code>",id:"code-style-fontweight-normal-membersrolebownerbcode",level:4},{value:"Member of",id:"member-of",level:3}],u=e=>{let{dataOpen:t,dataClose:r,children:l,startOpen:i=!1}=e;const[m,s]=(0,o.useState)(i);return(0,a.kt)("details",(0,n.Z)({},m?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},m?t:r),m&&l)},f={Bullet:c,SpecifiedBy:d,Badge:p,toc:b,Details:u},y="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(y,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum MembersRole {\n  ADMIN\n  VIEWER\n  OWNER\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-membersrolebadminbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"MembersRole.",(0,a.kt)("b",null,"ADMIN")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-membersrolebviewerbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"MembersRole.",(0,a.kt)("b",null,"VIEWER")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-membersrolebownerbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"MembersRole.",(0,a.kt)("b",null,"OWNER")))),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/inputs/member-data-in-organization"},(0,a.kt)("inlineCode",{parentName:"a"},"MemberDataInOrganization"))," ",(0,a.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,a.kt)(c,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/api/objects/member-organizations"},(0,a.kt)("inlineCode",{parentName:"a"},"MemberOrganizations"))," ",(0,a.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(c,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/api/inputs/members-where-input"},(0,a.kt)("inlineCode",{parentName:"a"},"MembersWhereInput"))," ",(0,a.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,a.kt)(c,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/api/objects/organization-members"},(0,a.kt)("inlineCode",{parentName:"a"},"OrganizationMembers"))," ",(0,a.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);
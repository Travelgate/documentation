/*! For license information please see 5b1ea9b2.5b079bb9.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[75558],{53385:(e,a,s)=>{s.r(a),s.d(a,{Badge:()=>b,Bullet:()=>n,Details:()=>u,SpecifiedBy:()=>g,assets:()=>i,contentTitle:()=>r,default:()=>x,frontMatter:()=>l,metadata:()=>t,toc:()=>y});const t=JSON.parse('{"id":"types/objects/social-sub-category","title":"SocialSubCategory","description":"No description","source":"@site/api/types/objects/social-sub-category.mdx","sourceDirName":"types/objects","slug":"/types/objects/social-sub-category","permalink":"/api/types/objects/social-sub-category","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"social-sub-category","title":"SocialSubCategory"},"sidebar":"schemaSidebar","previous":{"title":"SocialSubCategoryEdge","permalink":"/api/types/objects/social-sub-category-edge"},"next":{"title":"SpeedAccessCollection","permalink":"/api/types/objects/speed-access-collection"}}');var c=s(74848),d=s(28453),o=s(96540);const l={id:"social-sub-category",title:"SocialSubCategory"},r=void 0,i={},n=()=>(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),g=e=>(0,c.jsxs)(c.Fragment,{children:["Specification",(0,c.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),b=e=>(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("span",{className:e.class,children:e.text})}),u=({dataOpen:e,dataClose:a,children:s,startOpen:t=!1})=>{const[d,l]=(0,o.useState)(t);return(0,c.jsxs)("details",{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,c.jsx)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:d?e:a}),d&&s]})},y=[{value:"Fields",id:"fields",level:3},{value:'<code>SocialSubCategory.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"socialsubcategorycodeid--",level:4},{value:'<code>SocialSubCategory.<b>subCategoryData</b></code><Bullet></Bullet><code>SocialSubCategoryData</code> <Badge class="badge badge--secondary"></Badge>',id:"socialsubcategorysubcategorydatasocialsubcategorydata-",level:4},{value:'<code>SocialSubCategory.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"socialsubcategoryadvisemessageadvisemessage--",level:4},{value:'<code>SocialSubCategory.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"socialsubcategoryadvisemessageleveladvisemessagelevel--",level:5},{value:'<code>SocialSubCategory.<b>createdAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge>',id:"socialsubcategorycreatedatdatetime-",level:4},{value:'<code>SocialSubCategory.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge>',id:"socialsubcategoryupdatedatdatetime-",level:4},{value:"Member Of",id:"member-of",level:3}];function h(e){const a={a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a.p,{children:"No description"}),"\n",(0,c.jsx)(a.pre,{children:(0,c.jsx)(a.code,{className:"language-graphql",children:"type SocialSubCategory {\n  code: ID!\n  subCategoryData: SocialSubCategoryData\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  createdAt: DateTime\n  updatedAt: DateTime\n}\n"})}),"\n",(0,c.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,c.jsxs)(a.h4,{id:"socialsubcategorycodeid--",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["SocialSubCategory.",(0,c.jsx)("b",{children:"code"})]})}),(0,c.jsx)(n,{}),(0,c.jsx)(a.a,{href:"/api/types/scalars/id",children:(0,c.jsx)(a.code,{children:"ID!"})})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(a.h4,{id:"socialsubcategorysubcategorydatasocialsubcategorydata-",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["SocialSubCategory.",(0,c.jsx)("b",{children:"subCategoryData"})]})}),(0,c.jsx)(n,{}),(0,c.jsx)(a.a,{href:"/api/types/objects/social-sub-category-data",children:(0,c.jsx)(a.code,{children:"SocialSubCategoryData"})})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,c.jsxs)(a.h4,{id:"socialsubcategoryadvisemessageadvisemessage--",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["SocialSubCategory.",(0,c.jsx)("b",{children:"adviseMessage"})]})}),(0,c.jsx)(n,{}),(0,c.jsx)(a.a,{href:"/api/types/objects/advise-message",children:(0,c.jsx)(a.code,{children:"[AdviseMessage!]"})})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"list"})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,c.jsxs)(a.h5,{id:"socialsubcategoryadvisemessageleveladvisemessagelevel--",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["SocialSubCategory.adviseMessage.",(0,c.jsx)("b",{children:"level"})]})}),(0,c.jsx)(n,{}),(0,c.jsx)(a.a,{href:"/api/types/enums/advise-message-level",children:(0,c.jsx)(a.code,{children:"[AdviseMessageLevel]"})})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"list"})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,c.jsxs)(a.h4,{id:"socialsubcategorycreatedatdatetime-",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["SocialSubCategory.",(0,c.jsx)("b",{children:"createdAt"})]})}),(0,c.jsx)(n,{}),(0,c.jsx)(a.a,{href:"/api/types/scalars/date-time",children:(0,c.jsx)(a.code,{children:"DateTime"})})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(a.h4,{id:"socialsubcategoryupdatedatdatetime-",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["SocialSubCategory.",(0,c.jsx)("b",{children:"updatedAt"})]})}),(0,c.jsx)(n,{}),(0,c.jsx)(a.a,{href:"/api/types/scalars/date-time",children:(0,c.jsx)(a.code,{children:"DateTime"})})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,c.jsxs)(a.p,{children:[(0,c.jsx)(a.a,{href:"/api/types/objects/social-mutation",children:(0,c.jsx)(a.code,{children:"SocialMutation"})})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(n,{}),(0,c.jsx)(a.a,{href:"/api/types/objects/social-sub-category-edge",children:(0,c.jsx)(a.code,{children:"SocialSubCategoryEdge"})})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:a}={...(0,d.R)(),...e.components};return a?(0,c.jsx)(a,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},21020:(e,a,s)=>{var t=s(96540),c=Symbol.for("react.element"),d=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function i(e,a,s){var t,d={},i=null,n=null;for(t in void 0!==s&&(i=""+s),void 0!==a.key&&(i=""+a.key),void 0!==a.ref&&(n=a.ref),a)o.call(a,t)&&!r.hasOwnProperty(t)&&(d[t]=a[t]);if(e&&e.defaultProps)for(t in a=e.defaultProps)void 0===d[t]&&(d[t]=a[t]);return{$$typeof:c,type:e,key:i,ref:n,props:d,_owner:l.current}}a.Fragment=d,a.jsx=i,a.jsxs=i},74848:(e,a,s)=>{e.exports=s(21020)},28453:(e,a,s)=>{s.d(a,{R:()=>o,x:()=>l});var t=s(96540);const c={},d=t.createContext(c);function o(e){const a=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),t.createElement(d.Provider,{value:a},e.children)}}}]);
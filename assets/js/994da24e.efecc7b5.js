/*! For license information please see 994da24e.efecc7b5.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5553],{28502:(e,r,n)=>{n.r(r),n.d(r,{Badge:()=>p,Bullet:()=>d,Details:()=>u,SpecifiedBy:()=>m,assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>b});var i=n(74848),t=n(28453),a=n(96540);const s={id:"member-service-role-in-organization",title:"MemberServiceRoleInOrganization"},o=void 0,l={id:"types/inputs/member-service-role-in-organization",title:"MemberServiceRoleInOrganization",description:"No description",source:"@site/api/types/inputs/member-service-role-in-organization.mdx",sourceDirName:"types/inputs",slug:"/types/inputs/member-service-role-in-organization",permalink:"/api/types/inputs/member-service-role-in-organization",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"member-service-role-in-organization",title:"MemberServiceRoleInOrganization"},sidebar:"schemaSidebar",previous:{title:"MemberDataInOrganization",permalink:"/api/types/inputs/member-data-in-organization"},next:{title:"MemberToOrganizationInput",permalink:"/api/types/inputs/member-to-organization-input"}},c={},d=()=>{const e={span:"span",...(0,t.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},m=e=>{const r={a:"a",...(0,t.R)()};return(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const r={span:"span",...(0,t.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:r,children:n,startOpen:s=!1})=>{const o={details:"details",summary:"summary",...(0,t.R)()},[l,c]=(0,a.useState)(s);return(0,i.jsxs)(o.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)(o.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:l?e:r}),l&&n]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>MemberServiceRoleInOrganization.<b>role</b></code><Bullet></Bullet><code>MembersRole!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"memberserviceroleinorganizationrolemembersrole--",level:4},{value:'<code>MemberServiceRoleInOrganization.<b>service</b></code><Bullet></Bullet><code>MemberService!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"memberserviceroleinorganizationservicememberservice--",level:4}];function g(e){const r={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.p,{children:"No description"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-graphql",children:"input MemberServiceRoleInOrganization {\n  role: MembersRole!\n  service: MemberService!\n}\n"})}),"\n",(0,i.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(r.h4,{id:"memberserviceroleinorganizationrolemembersrole--",children:[(0,i.jsx)(r.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["MemberServiceRoleInOrganization.",(0,i.jsx)("b",{children:"role"})]})}),(0,i.jsx)(d,{}),(0,i.jsx)(r.a,{href:"/api/types/enums/members-role",children:(0,i.jsx)(r.code,{children:"MembersRole!"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,i.jsxs)(r.h4,{id:"memberserviceroleinorganizationservicememberservice--",children:[(0,i.jsx)(r.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["MemberServiceRoleInOrganization.",(0,i.jsx)("b",{children:"service"})]})}),(0,i.jsx)(d,{}),(0,i.jsx)(r.a,{href:"/api/types/enums/member-service",children:(0,i.jsx)(r.code,{children:"MemberService!"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"enum"})]})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},21020:(e,r,n)=>{var i=n(96540),t=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,n){var i,a={},c=null,d=null;for(i in void 0!==n&&(c=""+n),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(d=r.ref),r)s.call(r,i)&&!l.hasOwnProperty(i)&&(a[i]=r[i]);if(e&&e.defaultProps)for(i in r=e.defaultProps)void 0===a[i]&&(a[i]=r[i]);return{$$typeof:t,type:e,key:c,ref:d,props:a,_owner:o.current}}r.Fragment=a,r.jsx=c,r.jsxs=c},74848:(e,r,n)=>{e.exports=n(21020)},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>o});var i=n(96540);const t={},a=i.createContext(t);function s(e){const r=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(a.Provider,{value:r},e.children)}}}]);
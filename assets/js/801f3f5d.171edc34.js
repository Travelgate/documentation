"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["83659"],{72310(e,t,a){a.d(t,{A:()=>g});var i=a(74848);a(44819);var l=a(96540),r=a(9526),n=a(1080),s=a(20299),c=a(19863),o=a(91289),d=a(29637);let u=`
    query {
      hotelX {
        hotels(criteria: {access: 7245}) {
          edges {
            node {
              hotelData {
                hotelName
                hotelCode
                categoryCode
                location {
                  city
                  country
                  coordinates {
                    latitude
                    longitude
                  }
                }
              }
            }
          }
        }
      }
    }
`,h=null;h=o.A.canUseDOM?(0,n.a)({url:"https://api.travelgate.com/",headers:{Authorization:"Apikey test0000-0000-0000-0000-000000000000"}}):null;let g=(0,d.A)(({token:e,query:t,variables:a})=>{let n=(0,c.A)(),[o,d]=(0,l.useState)(`{
        "Authorization": "Apikey test0000-0000-0000-0000-000000000000"
    }`),[g,p]=(0,l.useState)(a);return(0,l.useEffect)(()=>{e&&d(`{"Authorization": "Bearer ${e}"}`)},[e]),(0,l.useEffect)(()=>{var e;let t;a&&p((e=localStorage.getItem("client")??"client_demo",t=JSON.parse(a),t?.settings?.client?(t.settings.client=e,JSON.stringify(t,null,2)):a))},[a]),(0,i.jsx)(i.Fragment,{children:n&&h&&o&&(0,i.jsx)(r.A,{fallback:(0,i.jsx)("div",{children:"Loading interactive playground..."}),children:()=>(0,i.jsxs)("div",{className:"graphql-sample-interactive","aria-label":"Interactive GraphQL playground",children:[(0,i.jsx)("p",{children:(0,i.jsx)("strong",{children:"Interactive playground:"})}),(0,i.jsx)(s.J,{fetcher:h,initialHeaders:o,initialQuery:t??u,initialVariables:g??"",children:(0,i.jsx)(s.J.Logo,{children:(0,i.jsx)(i.Fragment,{})})})]})})})})},14523(e,t,a){a.r(t),a.d(t,{default:()=>c});var i=a(74848);a(96540);var l=a(10898),r=a(28790),n=a(29637),s=a(72310);let c=(0,n.A)(e=>{let{siteConfig:t}=(0,l.A)();return(0,i.jsx)(r.A,{title:t.title,description:"GraphQL Explorer",children:(0,i.jsx)("div",{className:"g-playground",children:(0,i.jsx)(s.A,{...e})})})})}}]);
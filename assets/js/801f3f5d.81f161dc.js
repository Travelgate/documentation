"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["83659"],{72310(e,t,i){i.d(t,{A:()=>g});var a=i(74848);i(44819);var l=i(96540),r=i(9526),n=i(1080),s=i(20299),o=i(19863),c=i(91289),d=i(29637);let u=`
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
`,h=null;h=c.A.canUseDOM?(0,n.a)({url:"https://api.travelgate.com/",headers:{Authorization:"Apikey test0000-0000-0000-0000-000000000000"}}):null;let g=(0,d.A)(({token:e,query:t,variables:i})=>{let n=(0,o.A)(),[c,d]=(0,l.useState)(`{
        "Authorization": "Apikey test0000-0000-0000-0000-000000000000"
    }`),[g,A]=(0,l.useState)(i);return(0,l.useEffect)(()=>{e&&d(`{"Authorization": "Bearer ${e}"}`)},[e]),(0,l.useEffect)(()=>{var e;let t;i&&A((e=localStorage.getItem("client")??"client_demo",t=JSON.parse(i),t?.settings?.client?(t.settings.client=e,JSON.stringify(t,null,2)):i))},[i]),(0,a.jsx)(a.Fragment,{children:n&&h&&c&&(0,a.jsx)(r.A,{fallback:(0,a.jsx)("div",{children:"Loading..."}),children:()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.J,{fetcher:h,initialHeaders:c,initialQuery:t??u,initialVariables:g??"",children:(0,a.jsx)(s.J.Logo,{children:(0,a.jsx)(a.Fragment,{})})})})})})})},14523(e,t,i){i.r(t),i.d(t,{default:()=>o});var a=i(74848);i(96540);var l=i(10898),r=i(28790),n=i(29637),s=i(72310);let o=(0,n.A)(e=>{let{siteConfig:t}=(0,l.A)();return(0,a.jsx)(r.A,{title:t.title,description:"GraphQL Explorer",children:(0,a.jsx)("div",{className:"g-playground",children:(0,a.jsx)(s.A,{...e})})})})}}]);
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["83659"],{72310(e,t,a){a.d(t,{A:()=>g});var r=a(74848);a(44819);var i=a(96540),l=a(9526),n=a(77781),s=a(54873),c=a(19863),o=a(91289),d=a(29637);let h=`
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
`,u=null;u=o.A.canUseDOM?(0,n.createGraphiQLFetcher)({url:"https://api.travelgate.com/",headers:{Authorization:"Apikey test0000-0000-0000-0000-000000000000"}}):null;let g=(0,d.A)(({token:e,query:t,variables:a,showLabel:n=!0})=>{let o=(0,c.A)(),[d,g]=(0,i.useState)(`{
        "Authorization": "Apikey test0000-0000-0000-0000-000000000000"
    }`),[p,v]=(0,i.useState)(a);return(0,i.useEffect)(()=>{e&&g(`{"Authorization": "Bearer ${e}"}`)},[e]),(0,i.useEffect)(()=>{var e;let t;a&&v((e=localStorage.getItem("client")??"client_demo",t=JSON.parse(a),t?.settings?.client?(t.settings.client=e,JSON.stringify(t,null,2)):a))},[a]),(0,r.jsx)(r.Fragment,{children:o&&u&&d&&(0,r.jsx)(l.A,{fallback:(0,r.jsx)("div",{children:"Loading interactive playground..."}),children:()=>(0,r.jsxs)("div",{className:"graphql-sample-interactive","aria-label":"Interactive GraphQL playground",children:[n&&(0,r.jsx)("p",{children:(0,r.jsx)("strong",{children:"Interactive playground:"})}),(0,r.jsx)(s.J,{fetcher:u,initialHeaders:d,initialQuery:t??h,initialVariables:p??"",children:(0,r.jsx)(s.J.Logo,{children:(0,r.jsx)(r.Fragment,{})})})]})})})})},14523(e,t,a){a.r(t),a.d(t,{default:()=>c});var r=a(74848);a(96540);var i=a(10898),l=a(55883);a(26645);var n=a(29637),s=a(72310);let c=(0,n.A)(e=>{let{siteConfig:t}=(0,i.A)();return(0,r.jsx)(l.A,{title:t.title,description:"GraphQL Explorer",children:(0,r.jsx)("div",{className:"g-playground",children:(0,r.jsx)(s.A,{...e,showLabel:!1})})})})}}]);
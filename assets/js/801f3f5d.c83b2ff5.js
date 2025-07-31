"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["12075"],{63296:function(e,t,i){i.d(t,{Z:()=>g});var n=i(85893);i(48842);var l=i(67294),r=i(70144),a=i(94345),s=i(18748),o=i(7227),c=i(57565),u=i(44891);let d=`
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
`,h=null;h=c.Z.canUseDOM?(0,a.n)({url:"https://api.travelgate.com/",headers:{Authorization:"Apikey test0000-0000-0000-0000-000000000000"}}):null;let g=(0,u.Z)(({token:e,query:t,variables:i})=>{let a=(0,o.Z)(),[c,u]=(0,l.useState)(`{
        "Authorization": "Apikey test0000-0000-0000-0000-000000000000"
    }`),[g,f]=(0,l.useState)(i);return(0,l.useEffect)(()=>{e&&u(`{"Authorization": "Bearer ${e}"}`)},[e]),(0,l.useEffect)(()=>{i&&f(function(e,t){let i=JSON.parse(e);return i?.settings?.client?(i.settings.client=t,JSON.stringify(i,null,2)):e}(i,localStorage.getItem("client")??"client_demo"))},[i]),(0,n.jsx)(n.Fragment,{children:a&&h&&c&&(0,n.jsx)(r.Z,{fallback:(0,n.jsx)("div",{children:"Loading..."}),children:()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(s.y,{fetcher:h,initialHeaders:c,initialQuery:t??d,variables:g??"",children:(0,n.jsx)(s.y.Logo,{children:(0,n.jsx)(n.Fragment,{})})})})})})})},70398:function(e,t,i){i.r(t),i.d(t,{default:()=>o});var n=i(85893);i(67294);var l=i(2933),r=i(98153),a=i(44891),s=i(63296);let o=(0,a.Z)(e=>{let{siteConfig:t}=(0,l.Z)();return(0,n.jsx)(r.Z,{title:t.title,description:"GraphQL Explorer",children:(0,n.jsx)("div",{className:"g-playground",children:(0,n.jsx)(s.Z,{...e})})})})}}]);
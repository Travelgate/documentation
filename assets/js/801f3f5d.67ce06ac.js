"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["12075"],{63296:function(e,t,n){n.d(t,{Z:()=>g});var a=n(85893),l=n(67294),r=n(70144),i=n(49156),s=n(11403),c=n(7227),o=n(57565),u=n(44891);let d=`
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
`,h=null;h=o.Z.canUseDOM?(0,i.n)({url:"https://api.travelgate.com/"}):null;let g=(0,u.Z)(({token:e,query:t,variables:n})=>{let i=(0,c.Z)(),[o,u]=(0,l.useState)(`{
    "Authorization": "Apikey test0000-0000-0000-0000-000000000000"
}`),[g,f]=(0,l.useState)(n);return(0,l.useEffect)(()=>{e&&u(`{"Authorization": "Bearer ${e}"}`)},[e]),(0,l.useEffect)(()=>{n&&f(function(e,t){let n=JSON.parse(e);return n?.settings?.client?(n.settings.client=t,JSON.stringify(n,null,2)):e}(n,localStorage.getItem("client")??"client_demo"))},[n]),(0,a.jsx)(a.Fragment,{children:i&&h&&(0,a.jsx)(r.Z,{fallback:(0,a.jsx)("div",{children:"Loading..."}),children:()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.y,{fetcher:h,headers:o,query:t??d,variables:g??"",onTabChange:e=>(e.tabs=[],!1),children:(0,a.jsx)(s.y.Logo,{children:(0,a.jsx)(a.Fragment,{})})})})})})})},70398:function(e,t,n){n.r(t),n.d(t,{default:()=>d});var a=n(85893);n(67294);var l=n(2933),r=n(98153),i=n(49156),s=n(7227),c=n(57565),o=n(44891),u=n(63296);c.Z.canUseDOM&&(0,i.n)({url:"https://api.travelgate.com/"});let d=(0,o.Z)(e=>{let{siteConfig:t}=(0,l.Z)();return(0,s.Z)(),(0,a.jsx)(r.Z,{title:t.title,description:"GraphQL Explorer",children:(0,a.jsx)("div",{className:"g-playground",children:(0,a.jsx)(u.Z,{...e})})})})}}]);
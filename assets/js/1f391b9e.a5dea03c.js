"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[66061],{67973:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var n=a(96540),l=a(18215),r=a(1003),s=a(17559),o=a(91922),c=a(77910),i=a(67763),m=a(86896),u=a(12153);const d={mdxPageWrapper:"mdxPageWrapper_j9I6"};function p(e){const{content:t}=e,{metadata:a,assets:p}=t,{title:g,editUrl:h,description:E,frontMatter:y,lastUpdatedBy:v,lastUpdatedAt:b}=a,{keywords:f,wrapperClassName:w,hide_table_of_contents:A}=y,N=p.image??y.image,_=!!(h||b||v);return n.createElement(r.e3,{className:(0,l.A)(w??s.G.wrapper.mdxPages,s.G.page.mdxPage)},n.createElement(o.A,null,n.createElement(r.be,{title:g,description:E,keywords:f,image:N}),n.createElement("main",{className:"container container--fluid margin-vert--lg"},n.createElement("div",{className:(0,l.A)("row",d.mdxPageWrapper)},n.createElement("div",{className:(0,l.A)("col",!A&&"col--8")},n.createElement(m.A,{metadata:a}),n.createElement("article",null,n.createElement(c.A,null,n.createElement(t,null))),_&&n.createElement(u.A,{className:(0,l.A)("margin-top--sm",s.G.pages.pageFooterEditMetaRow),editUrl:h,lastUpdatedAt:b,lastUpdatedBy:v})),!A&&t.toc.length>0&&n.createElement("div",{className:"col col--2"},n.createElement(i.A,{toc:t.toc,minHeadingLevel:y.toc_min_heading_level,maxHeadingLevel:y.toc_max_heading_level}))))))}},39285:(e,t,a)=>{a.d(t,{A:()=>u});var n=a(96540),l=a(78478),r=a(48126),s=a(57416),o=a(92303),c=a(38193),i=a(27549);let m=null;m=c.A.canUseDOM?(0,r.a)({url:"https://api.travelgatex.com/"}):null;const u=(0,i.A)((e=>{let{token:t,query:a,variables:r}=e;const c=(0,o.A)(),[i,u]=(0,n.useState)('{\n    "Authorization": "Apikey test0000-0000-0000-0000-000000000000"\n}'),[d,p]=(0,n.useState)(r);return(0,n.useEffect)((()=>{t&&u(`{"Authorization": "Bearer ${t}"}`)}),[t]),(0,n.useEffect)((()=>{r&&p(function(e,t){const a=JSON.parse(e);return a?.settings?.client?(a.settings.client=t,JSON.stringify(a,null,2)):e}(r,localStorage.getItem("client")??"client_demo"))}),[r]),n.createElement(n.Fragment,null,c&&m&&n.createElement(l.A,{fallback:n.createElement("div",null,"Loading...")},(()=>n.createElement(n.Fragment,null,n.createElement(s.Jd,{fetcher:m,headers:i,query:a??"\n    query {\n      hotelX {\n        hotels(criteria: {access: 7245}) {\n          edges {\n            node {\n              hotelData {\n                hotelName\n                hotelCode\n                categoryCode\n                location {\n                  city\n                  country\n                  coordinates {\n                    latitude\n                    longitude\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n",variables:d??"",onTabChange:e=>(e.tabs=[],!1)},n.createElement(s.Jd.Logo,null,n.createElement(n.Fragment,null)))))))}))},65066:(e,t,a)=>{a.d(t,{A:()=>x});var n=a(96540),l=a(21278),r=a(46784),s=a(37107),o=a(37875),c=a(66188),i=a(39285),m=a(20053);const u="browserWindow_my1Q",d="browserWindowHeader_jXSR",p="buttons_uHc7",g="browserWindowAddressBar_Pd8y",h="dot_giz1",E="browserWindowMenuIcon_Vhuh",y="bar_rrRL",v="browserWindowBody_Idgs";var b=a(27293);const f=()=>n.createElement(n.Fragment,null,n.createElement(b.A,{type:"info"},"Have any doubts or inquiries? Our amazing Customer Care team is just a ticket away. Reach out to them via ",n.createElement("a",{href:"https://app.travelgatex.com/tickets",target:"_blank"},"Tickets"),", and they will be more than happy to help you out \ud83d\ude80")),w=()=>n.createElement(n.Fragment,null,n.createElement(b.A,{type:"caution",title:"Remember"},'It\'s important to note that even if certain fields in the "criteria" or "settings" inputs are labeled as optional, we still need to use some value internally. This value will either come from your query/mutation request or your ',n.createElement("a",{href:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/making-requests/settings",target:"_blank"},"default settings"),". You have the ability to manage your default API settings by visiting the ",n.createElement("a",{href:"https://app.travelgatex.com/connections/settings",target:"_blank"},"API Settings section")," on our website.")),A=e=>{let{id:t}=e;return n.createElement("iframe",{style:{aspectRatio:"16 / 9",width:"100%"},src:`https://www.youtube.com/embed/${t}?controls=0`,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})};var N=a(21432),_=a(31070),k=a(31876),S=a(65579);const C=function(){const[e,t]=(0,n.useState)("https://api.travelgate.com"),[a,l]=(0,n.useState)("POST"),[r,s]=(0,n.useState)(""),[o,c]=(0,n.useState)(""),i=n.useCallback(((e,t)=>{console.log("val:",e),s(e)}),[]);return n.createElement("div",{className:"playground-wrap"},n.createElement("div",null,"Method & URL"),n.createElement("div",{className:"post-method"},n.createElement("select",{id:"method",value:a,onChange:e=>l(e.target.value),className:"playground-select"},n.createElement("option",null,"GET"),n.createElement("option",null,"POST"))),n.createElement("div",{className:"endpoint"},n.createElement("input",{id:"endpoint",type:"text",placeholder:"https://api.travelgate.com",value:e,onChange:e=>t(e.target.value)})),n.createElement("div",null,n.createElement("label",{htmlFor:"requestData"},"Request Data (for POST, PUT, etc.):"),n.createElement(_.Ay,{value:r,height:"300px",extensions:[(0,k.Pq)()],theme:S.Ts,onChange:i})),n.createElement("div",null,n.createElement("button",{onClick:async()=>{try{const t=await fetch(e,{method:a,headers:{"Content-Type":"application/json"},body:"GET"===a?null:r}),n=await t.json();c(JSON.stringify(n,null,2))}catch(t){c("Error: "+t.toString())}},className:"playground-btn"},"Send Request")),n.createElement("div",{className:o?"":"hidden"},n.createElement(N.A,{language:"jsx",title:`Response from ${e}`,showLineNumbers:!0},o)))};s.Yv.add(o.Cvc,c.X7I);const x={...l.A,icon:r.g,GraphqlSample:i.A,BrowserWindow:function(e){let{children:t,minHeight:a,url:l="sftp.xmltravelgate.com",style:r,bodyStyle:s}=e;return n.createElement("div",{className:u,style:{...r,minHeight:a}},n.createElement("div",{className:d},n.createElement("div",{className:p},n.createElement("span",{className:h,style:{background:"#f25f58"}}),n.createElement("span",{className:h,style:{background:"#fbbe3c"}}),n.createElement("span",{className:h,style:{background:"#58cb42"}})),n.createElement("div",{className:(0,m.A)(g,"text--truncate")},l),n.createElement("div",{className:E},n.createElement("div",null,n.createElement("span",{className:y}),n.createElement("span",{className:y}),n.createElement("span",{className:y})))),n.createElement("div",{className:v,style:s},t))},TipContactCustomerCare:f,CautionSettingsHotelX:w,YoutubeVideo:A,RestPlayground:C}}}]);
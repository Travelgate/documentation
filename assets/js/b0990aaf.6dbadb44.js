"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["61112"],{86069(e,t,s){s.r(t),s.d(t,{metadata:()=>i,default:()=>m,frontMatter:()=>c,contentTitle:()=>h,toc:()=>u,assets:()=>g});var i=JSON.parse('{"id":"monitoring-api/stats-api/stats","title":"Stats","description":"Overview","source":"@site/docs/monitoring-api/stats-api/stats.mdx","sourceDirName":"monitoring-api/stats-api","slug":"/monitoring-api/stats-api/stats","permalink":"/docs/monitoring-api/stats-api/stats","draft":false,"unlisted":false,"editUrl":"https://github.com/Travelgate/documentation/tree/main/docs/monitoring-api/stats-api/stats.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Stats"},"sidebar":"docsSidebar","previous":{"title":"Webhooks","permalink":"/docs/apps/reconciliation/webhooks"},"next":{"title":"Overview","permalink":"/docs/security/overview"}}'),r=s(74848),n=s(28453);let a=`query getAggregatedStats($where: StatsAggregationConnectionWhereInput!, $groupBy: StatsAggregationConnectionGroupByInput!) {
  stats {
    getAggregationStats(where: $where, groupBy: $groupBy) {
      totalCount
      adviseMessage {
        code
        description
        level
      }
      edges {
        node {
          aggregationData {
            hits
            time
            totalTime
            errorType
            errorCode
            operationType
            operation {
              code
            }
            seller {
              code
            }
            buyer {
              code
            }
            access {
              code
            }
            client {
              clientData {
                code
                name
              }
            }
            supplier {
              code
            }
          }
        }
      }
    }
  }
}`,o=`{
  "where": {
    "mode": "BUYER",
    "buyer_in": ["BUYER_CODE"],
    "trafficType_in": ["BASIC", "SPEED"],
    "api_in": ["hotel"],
    "timeRange": {
      "absolute": {
        "from": "2026-04-14 00:00:00",
        "to": "2026-04-14 12:00:00"
      }
    }
  },
  "groupBy": {
    "data": ["OPERATION_TYPE"]
  }
}`,l=`query getRealTimeStats($where: StatsRealTimeRangeWhereInput!) {
  stats {
    getRealTimeRangeStats(where: $where) {
      realTimeRangeData {
        from
        to
      }
      adviseMessage {
        code
        description
        level
      }
    }
  }
}`,d=`{
  "where": {
    "timeRange": {
      "absolute": {
        "from": "2026-04-14 15:00:00",
        "to": "2026-04-14 16:00:00"
      }
    },
    "groupByTime": "MINUTE"
  }
}`,c={sidebar_position:2,title:"Stats"},h="Stats API",g={},u=[{value:"Overview",id:"overview",level:2},{value:"Considerations &amp; Business Rules",id:"considerations--business-rules",level:2},{value:"Query Overview",id:"query-overview",level:2},{value:"1. getAggregationStats",id:"1-getaggregationstats",level:3},{value:"2. getRealTimeRangeStats",id:"2-getrealtimerangestats",level:3},{value:"A. Where (Filters)",id:"a-where-filters",level:4},{value:"B. Group By",id:"b-group-by",level:4},{value:"Examples",id:"examples",level:2},{value:"Example 1: Aggregation Stats (<code>getAggregationStats</code>)",id:"example-1-aggregation-stats-getaggregationstats",level:3},{value:"Example 2: Real Time Stats (<code>getRealTimeRangeStats</code>)",id:"example-2-real-time-stats-getrealtimerangestats",level:3}];function p(e){let t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components},{GraphqlSample:s}=t;return s||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("GraphqlSample",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"stats-api",children:"Stats API"})}),"\n",(0,r.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/kb/platform/app-features/monitoring-tools/stats/stats-details",children:"Stats"})," is the real-time connectivity performance dashboard of Travelgate. It is designed to monitor connection performance and quickly troubleshoot traffic issues by providing detailed data per connection and method."]}),"\n",(0,r.jsxs)(t.p,{children:["This document details the steps to extract and query metrics using the ",(0,r.jsx)(t.strong,{children:"Travelgate Stats API"}),"."]}),"\n",(0,r.jsx)(t.admonition,{title:"Authentication",type:"info",children:(0,r.jsxs)(t.p,{children:["For all Stats API calls, it is required to first retrieve the bearer token using the ",(0,r.jsx)(t.code,{children:"admin { jwt }"})," query. The returned token must be included in the header of subsequent requests: ",(0,r.jsx)(t.code,{children:"Authorization: Bearer <your_jwt>"}),"."]})}),"\n",(0,r.jsx)(t.h2,{id:"considerations--business-rules",children:"Considerations & Business Rules"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:'"OK" Status vs. Reservation Status:'}),' The "OK" data in Stats ',(0,r.jsx)(t.em,{children:"only"})," indicates that the transaction was technically successful. ",(0,r.jsxs)(t.strong,{children:["It does not reflect the actual ",(0,r.jsx)(t.a,{href:"/kb/connectivity-products/for-buyers/hotel-x/booking-flow/book/book-status",children:"booking status"})," of a reservation."]})," To know the real status, you must perform a ",(0,r.jsx)(t.a,{href:"https://docs.travelgate.com/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/booking-read/",children:"BookingRead"})," operation."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:'The "Other" Operation:'})," The ",(0,r.jsx)(t.code,{children:"OTHER"})," category covers operations outside the standard booking flow. For HotelX, these are equivalent to:","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/hotels",children:"Hotels Query"})," (HotelList, DescriptiveInfo)"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://docs.travelgate.com/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/booking-read/",children:"Booking Read and Booking List"})," (ReservationRead, ReservationList)"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/rooms",children:"Rooms Query"})," and ",(0,r.jsx)(t.a,{href:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/boards",children:"Boards Query"})," (RoomList, MealPlanList)"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Traffic Types:"})," When filtering your Stats, you can use the ",(0,r.jsx)(t.code,{children:"trafficType_in"})," parameter: ",(0,r.jsx)(t.code,{children:"BASIC"}),", ",(0,r.jsx)(t.code,{children:"SPEED"}),", ",(0,r.jsx)(t.code,{children:"SCHEDULER"}),", or ",(0,r.jsx)(t.code,{children:"OPTIMIZED"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"query-overview",children:"Query Overview"}),"\n",(0,r.jsx)(t.p,{children:"The Stats API offers several methods to retrieve information, depending on the level of detail and grouping you need:"}),"\n",(0,r.jsx)(t.h3,{id:"1-getaggregationstats",children:"1. getAggregationStats"}),"\n",(0,r.jsx)(t.p,{children:"Primary query used to retrieve grouped statistical data (hits, time, errors) based on specific criteria. It is commonly used to render charts, graphs, and aggregated data tables."}),"\n",(0,r.jsx)(t.h3,{id:"2-getrealtimerangestats",children:"2. getRealTimeRangeStats"}),"\n",(0,r.jsx)(t.p,{children:"Used for real-time monitoring of requests and metrics in updated, smaller time blocks."}),"\n",(0,r.jsx)(t.h4,{id:"a-where-filters",children:"A. Where (Filters)"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"where"})," input allows you to precisely filter the statistics based on time range, buyers, APIs, or traffic types."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'{\n  "where": {\n    "mode": "BUYER",\n    "buyer_in": ["BUYER_CODE"],\n    "operationType_in": ["SEARCH"],\n    "timeRange": {\n      "absolute": {\n        "from": "2026-04-14 00:00:00",\n        "to": "2026-04-14 12:00:00"\n      }\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Mandatory criteria:"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"mode"})," (Search perspective, either ",(0,r.jsx)(t.code,{children:"BUYER"})," or ",(0,r.jsx)(t.code,{children:"SELLER"}),")."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"timeRange"})," (Absolute date range using the format ",(0,r.jsx)(t.code,{children:'"YYYY-MM-DD HH:mm:ss"'}),")."]}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"b-group-by",children:"B. Group By"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"groupBy"})," input defines how the returned data will be aggregated."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'{\n  "groupBy": {\n    "data": ["OPERATION_TYPE"]\n  }\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Optional grouping:"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"data"}),": Fields by which to group the results (e.g., ",(0,r.jsx)(t.code,{children:"OPERATION_TYPE"}),", ",(0,r.jsx)(t.code,{children:"BUYER"}),", ",(0,r.jsx)(t.code,{children:"SELLER"}),")."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"time"}),": Temporal grouping like ",(0,r.jsx)(t.code,{children:"MINUTE"}),", ",(0,r.jsx)(t.code,{children:"HOUR"}),", ",(0,r.jsx)(t.code,{children:"DAY"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.p,{children:"In the following examples, you can see how to extract different types of stats using the interactive playground."}),"\n",(0,r.jsxs)(t.h3,{id:"example-1-aggregation-stats-getaggregationstats",children:["Example 1: Aggregation Stats (",(0,r.jsx)(t.code,{children:"getAggregationStats"}),")"]}),"\n",(0,r.jsx)(t.p,{children:"Primary query used to retrieve grouped statistical data based on specific criteria."}),"\n",(0,r.jsx)(s,{query:a,variables:o}),"\n",(0,r.jsx)(t.p,{children:"\xa0"}),"\n",(0,r.jsxs)(t.h3,{id:"example-2-real-time-stats-getrealtimerangestats",children:["Example 2: Real Time Stats (",(0,r.jsx)(t.code,{children:"getRealTimeRangeStats"}),")"]}),"\n",(0,r.jsx)(t.p,{children:"Used for real-time monitoring of requests and metrics in small time blocks."}),"\n",(0,r.jsx)(s,{query:l,variables:d}),"\n",(0,r.jsx)(t.p,{children:"\xa0"})]})}function m(e={}){let{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},28453(e,t,s){s.d(t,{R:()=>a,x:()=>o});var i=s(96540);let r={},n=i.createContext(r);function a(e){let t=i.useContext(n);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);
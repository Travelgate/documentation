/*! For license information please see 38edb09e.751dd09f.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9929],{78335:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>y,Bullet:()=>c,Details:()=>p,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>o,default:()=>x,frontMatter:()=>i,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"types/objects/inventory-query","title":"InventoryQuery","description":"The Query class represents the query for the GraphQL server.","source":"@site/api/types/objects/inventory-query.mdx","sourceDirName":"types/objects","slug":"/types/objects/inventory-query","permalink":"/api/types/objects/inventory-query","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"inventory-query","title":"InventoryQuery"},"sidebar":"schemaSidebar","previous":{"title":"InventoryPaymentPolicies","permalink":"/api/types/objects/inventory-payment-policies"},"next":{"title":"InventoryRateSetup","permalink":"/api/types/objects/inventory-rate-setup"}}');var n=r(74848),a=r(28453),l=r(96540);const i={id:"inventory-query",title:"InventoryQuery"},o=void 0,d={},c=()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),u=e=>(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),y=e=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{className:e.class,children:e.text})}),p=({dataOpen:e,dataClose:t,children:r,startOpen:s=!1})=>{const[a,i]=(0,l.useState)(s);return(0,n.jsxs)("details",{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:a?e:t}),a&&r]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>InventoryQuery.<b>availDerivedRates</b></code><Bullet></Bullet><code>AvailDerivedRatesRs</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryqueryavailderivedratesavailderivedratesrs-",level:4},{value:'<code>InventoryQuery.availDerivedRates.<b>availDerivedRatesInput</b></code><Bullet></Bullet><code>InventoryAvailDerivedRatesInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventoryqueryavailderivedratesavailderivedratesinputinventoryavailderivedratesinput--",level:5},{value:'<code>InventoryQuery.<b>availOffers</b></code><Bullet></Bullet><code>AvailRetrieveRs</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryqueryavailoffersavailretrievers-",level:4},{value:'<code>InventoryQuery.availOffers.<b>availOffersInput</b></code><Bullet></Bullet><code>InventoryAvailOffersInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventoryqueryavailoffersavailoffersinputinventoryavailoffersinput--",level:5},{value:'<code>InventoryQuery.<b>availRates</b></code><Bullet></Bullet><code>AvailRatesRs</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryqueryavailratesavailratesrs-",level:4},{value:'<code>InventoryQuery.availRates.<b>availRatesInput</b></code><Bullet></Bullet><code>InventoryAvailRatesInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventoryqueryavailratesavailratesinputinventoryavailratesinput--",level:5},{value:'<code>InventoryQuery.<b>hotelCategories</b></code><Bullet></Bullet><code>CategoriesRs</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryqueryhotelcategoriescategoriesrs-",level:4},{value:'<code>InventoryQuery.hotelCategories.<b>hotelCategoriesFilterInput</b></code><Bullet></Bullet><code>InventoryHotelCategoriesFilterInput</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryqueryhotelcategorieshotelcategoriesfilterinputinventoryhotelcategoriesfilterinput-",level:5},{value:'<code>InventoryQuery.<b>inventoryContexts</b></code><Bullet></Bullet><code>InventoryContextsRs</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryqueryinventorycontextsinventorycontextsrs-",level:4},{value:'<code>InventoryQuery.inventoryContexts.<b>inventoryContextsFilterInput</b></code><Bullet></Bullet><code>InventoryContextsFilterInput</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryqueryinventorycontextsinventorycontextsfilterinputinventorycontextsfilterinput-",level:5},{value:'<code>InventoryQuery.<b>hotelsSetup</b></code><Bullet></Bullet><code>HotelsSetupRs</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryqueryhotelssetuphotelssetuprs-",level:4},{value:'<code>InventoryQuery.hotelsSetup.<b>hotelsSetupFilterInput</b></code><Bullet></Bullet><code>InventoryHotelSetupFilterInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventoryqueryhotelssetuphotelssetupfilterinputinventoryhotelsetupfilterinput--",level:5},{value:'<code>InventoryQuery.<b>hotelsMaster</b></code><Bullet></Bullet><code>HotelsRs</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryqueryhotelsmasterhotelsrs-",level:4},{value:'<code>InventoryQuery.hotelsMaster.<b>hotelsMasterFilterInput</b></code><Bullet></Bullet><code>InventoryHotelMasterFilterInput</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryqueryhotelsmasterhotelsmasterfilterinputinventoryhotelmasterfilterinput-",level:5},{value:'<code>InventoryQuery.<b>searchHotelsMaster</b></code><Bullet></Bullet><code>HotelsRs</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryquerysearchhotelsmasterhotelsrs-",level:4},{value:'<code>InventoryQuery.searchHotelsMaster.<b>hotelsMasterSearchFilterInput</b></code><Bullet></Bullet><code>InventoryHotelsMasterSearchFilterInput</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryquerysearchhotelsmasterhotelsmastersearchfilterinputinventoryhotelsmastersearchfilterinput-",level:5},{value:'<code>InventoryQuery.<b>localities</b></code><Bullet></Bullet><code>LocalitiesRs</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryquerylocalitieslocalitiesrs-",level:4},{value:'<code>InventoryQuery.localities.<b>localitiesFilterInput</b></code><Bullet></Bullet><code>InventoryLocalitiesFilterInput</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryquerylocalitieslocalitiesfilterinputinventorylocalitiesfilterinput-",level:5},{value:'<code>InventoryQuery.<b>searchLocalities</b></code><Bullet></Bullet><code>LocalitiesRs</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryquerysearchlocalitieslocalitiesrs-",level:4},{value:'<code>InventoryQuery.searchLocalities.<b>localitiesSearchFilterInput</b></code><Bullet></Bullet><code>InventoryLocalitiesSearchFilterInput</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryquerysearchlocalitieslocalitiessearchfilterinputinventorylocalitiessearchfilterinput-",level:5},{value:'<code>InventoryQuery.<b>mealPlans</b></code><Bullet></Bullet><code>GetMealPlansRs</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryquerymealplansgetmealplansrs-",level:4},{value:'<code>InventoryQuery.<b>offersSetup</b></code><Bullet></Bullet><code>OffersRs</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryqueryofferssetupoffersrs-",level:4},{value:'<code>InventoryQuery.offersSetup.<b>offersSetupFilterInput</b></code><Bullet></Bullet><code>InventoryOffersSetupFilterInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventoryqueryofferssetupofferssetupfilterinputinventoryofferssetupfilterinput--",level:5},{value:'<code>InventoryQuery.<b>priceDerivedRates</b></code><Bullet></Bullet><code>PriceDerivedRatesRs</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryquerypricederivedratespricederivedratesrs-",level:4},{value:'<code>InventoryQuery.priceDerivedRates.<b>priceDerivedRatesInput</b></code><Bullet></Bullet><code>InventoryPriceDerivedRatesInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventoryquerypricederivedratespricederivedratesinputinventorypricederivedratesinput--",level:5},{value:'<code>InventoryQuery.<b>priceMealPlanSupplements</b></code><Bullet></Bullet><code>PriceMealPlanSupplementsRs</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryquerypricemealplansupplementspricemealplansupplementsrs-",level:4},{value:'<code>InventoryQuery.priceMealPlanSupplements.<b>priceMealPlanSupplementsInput</b></code><Bullet></Bullet><code>InventoryPriceMealPlanSupplementsInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventoryquerypricemealplansupplementspricemealplansupplementsinputinventorypricemealplansupplementsinput--",level:5},{value:'<code>InventoryQuery.<b>priceRates</b></code><Bullet></Bullet><code>PriceRatesRs</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryquerypriceratespriceratesrs-",level:4},{value:'<code>InventoryQuery.priceRates.<b>priceRatesInput</b></code><Bullet></Bullet><code>InventoryPriceRatesInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventoryquerypriceratespriceratesinputinventorypriceratesinput--",level:5},{value:'<code>InventoryQuery.<b>ratesSetup</b></code><Bullet></Bullet><code>RatesRs</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryqueryratessetupratesrs-",level:4},{value:'<code>InventoryQuery.ratesSetup.<b>ratesSetupFilterInput</b></code><Bullet></Bullet><code>InventoryRatesSetupFilterInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventoryqueryratessetupratessetupfilterinputinventoryratessetupfilterinput--",level:5},{value:'<code>InventoryQuery.<b>roomsSetup</b></code><Bullet></Bullet><code>RoomsSetUpRs</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryqueryroomssetuproomssetuprs-",level:4},{value:'<code>InventoryQuery.roomsSetup.<b>roomsSetupFilterInput</b></code><Bullet></Bullet><code>InventoryRoomsSetupFilterInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventoryqueryroomssetuproomssetupfilterinputinventoryroomssetupfilterinput--",level:5},{value:'<code>InventoryQuery.<b>roomsMaster</b></code><Bullet></Bullet><code>RoomsRs</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryqueryroomsmasterroomsrs-",level:4},{value:'<code>InventoryQuery.roomsMaster.<b>roomsMasterFilterInput</b></code><Bullet></Bullet><code>InventoryRoomsMasterFilterInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventoryqueryroomsmasterroomsmasterfilterinputinventoryroomsmasterfilterinput--",level:5},{value:"Returned By",id:"returned-by",level:3}];function v(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"The Query class represents the query for the GraphQL server."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"type InventoryQuery {\n  availDerivedRates(\n    availDerivedRatesInput: InventoryAvailDerivedRatesInput!\n  ): AvailDerivedRatesRs\n  availOffers(availOffersInput: InventoryAvailOffersInput!): AvailRetrieveRs\n  availRates(availRatesInput: InventoryAvailRatesInput!): AvailRatesRs\n  hotelCategories(\n    hotelCategoriesFilterInput: InventoryHotelCategoriesFilterInput\n  ): CategoriesRs\n  inventoryContexts(\n    inventoryContextsFilterInput: InventoryContextsFilterInput\n  ): InventoryContextsRs\n  hotelsSetup(\n    hotelsSetupFilterInput: InventoryHotelSetupFilterInput!\n  ): HotelsSetupRs\n  hotelsMaster(\n    hotelsMasterFilterInput: InventoryHotelMasterFilterInput\n  ): HotelsRs\n  searchHotelsMaster(\n    hotelsMasterSearchFilterInput: InventoryHotelsMasterSearchFilterInput\n  ): HotelsRs\n  localities(\n    localitiesFilterInput: InventoryLocalitiesFilterInput\n  ): LocalitiesRs\n  searchLocalities(\n    localitiesSearchFilterInput: InventoryLocalitiesSearchFilterInput\n  ): LocalitiesRs\n  mealPlans: GetMealPlansRs\n  offersSetup(\n    offersSetupFilterInput: InventoryOffersSetupFilterInput!\n  ): OffersRs\n  priceDerivedRates(\n    priceDerivedRatesInput: InventoryPriceDerivedRatesInput!\n  ): PriceDerivedRatesRs\n  priceMealPlanSupplements(\n    priceMealPlanSupplementsInput: InventoryPriceMealPlanSupplementsInput!\n  ): PriceMealPlanSupplementsRs\n  priceRates(priceRatesInput: InventoryPriceRatesInput!): PriceRatesRs\n  ratesSetup(ratesSetupFilterInput: InventoryRatesSetupFilterInput!): RatesRs\n  roomsSetup(\n    roomsSetupFilterInput: InventoryRoomsSetupFilterInput!\n  ): RoomsSetUpRs\n  roomsMaster(roomsMasterFilterInput: InventoryRoomsMasterFilterInput!): RoomsRs\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.h4,{id:"inventoryqueryavailderivedratesavailderivedratesrs-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryQuery.",(0,n.jsx)("b",{children:"availDerivedRates"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/api/types/objects/avail-derived-rates-rs",children:(0,n.jsx)(t.code,{children:"AvailDerivedRatesRs"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(t.p,{children:"Query to retrieve derived rates availability"}),"\n",(0,n.jsxs)(t.h5,{id:"inventoryqueryavailderivedratesavailderivedratesinputinventoryavailderivedratesinput--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryQuery.availDerivedRates.",(0,n.jsx)("b",{children:"availDerivedRatesInput"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/api/types/inputs/inventory-avail-derived-rates-input",children:(0,n.jsx)(t.code,{children:"InventoryAvailDerivedRatesInput!"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,n.jsxs)(t.h4,{id:"inventoryqueryavailoffersavailretrievers-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryQuery.",(0,n.jsx)("b",{children:"availOffers"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/api/types/objects/avail-retrieve-rs",children:(0,n.jsx)(t.code,{children:"AvailRetrieveRs"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(t.p,{children:"Query to retrieve offers availability"}),"\n",(0,n.jsxs)(t.h5,{id:"inventoryqueryavailoffersavailoffersinputinventoryavailoffersinput--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryQuery.availOffers.",(0,n.jsx)("b",{children:"availOffersInput"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/api/types/inputs/inventory-avail-offers-input",children:(0,n.jsx)(t.code,{children:"InventoryAvailOffersInput!"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,n.jsxs)(t.h4,{id:"inventoryqueryavailratesavailratesrs-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryQuery.",(0,n.jsx)("b",{children:"availRates"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/api/types/objects/avail-rates-rs",children:(0,n.jsx)(t.code,{children:"AvailRatesRs"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(t.p,{children:"Query to retrieve rates availability"}),"\n",(0,n.jsxs)(t.h5,{id:"inventoryqueryavailratesavailratesinputinventoryavailratesinput--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryQuery.availRates.",(0,n.jsx)("b",{children:"availRatesInput"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/api/types/inputs/inventory-avail-rates-input",children:(0,n.jsx)(t.code,{children:"InventoryAvailRatesInput!"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,n.jsxs)(t.h4,{id:"inventoryqueryhotelcategoriescategoriesrs-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryQuery.",(0,n.jsx)("b",{children:"hotelCategories"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/api/types/objects/categories-rs",children:(0,n.jsx)(t.code,{children:"CategoriesRs"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(t.p,{children:"Get hotel categories query. This method is used to retrieve categories master by their Ids."}),"\n",(0,n.jsxs)(t.h5,{id:"inventoryqueryhotelcategorieshotelcategoriesfilterinputinventoryhotelcategoriesfilterinput-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryQuery.hotelCategories.",(0,n.jsx)("b",{children:"hotelCategoriesFilterInput"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/api/types/inputs/inventory-hotel-categories-filter-input",children:(0,n.jsx)(t.code,{children:"InventoryHotelCategoriesFilterInput"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,n.jsxs)(t.h4,{id:"inventoryqueryinventorycontextsinventorycontextsrs-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryQuery.",(0,n.jsx)("b",{children:"inventoryContexts"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/api/types/objects/inventory-contexts-rs",children:(0,n.jsx)(t.code,{children:"InventoryContextsRs"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(t.p,{children:"Get Inventory Contexts query."}),"\n",(0,n.jsxs)(t.h5,{id:"inventoryqueryinventorycontextsinventorycontextsfilterinputinventorycontextsfilterinput-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryQuery.inventoryContexts.",(0,n.jsx)("b",{children:"inventoryContextsFilterInput"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/api/types/inputs/inventory-contexts-filter-input",children:(0,n.jsx)(t.code,{children:"InventoryContextsFilterInput"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,n.jsxs)(t.h4,{id:"inventoryqueryhotelssetuphotelssetuprs-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryQuery.",(0,n.jsx)("b",{children:"hotelsSetup"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/api/types/objects/hotels-setup-rs",children:(0,n.jsx)(t.code,{children:"HotelsSetupRs"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(t.p,{children:"Get hotel setup query."}),"\n",(0,n.jsxs)(t.h5,{id:"inventoryqueryhotelssetuphotelssetupfilterinputinventoryhotelsetupfilterinput--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryQuery.hotelsSetup.",(0,n.jsx)("b",{children:"hotelsSetupFilterInput"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/api/types/inputs/inventory-hotel-setup-filter-input",children:(0,n.jsx)(t.code,{children:"InventoryHotelSetupFilterInput!"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,n.jsxs)(t.h4,{id:"inventoryqueryhotelsmasterhotelsrs-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryQuery.",(0,n.jsx)("b",{children:"hotelsMaster"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/api/types/objects/hotels-rs",children:(0,n.jsx)(t.code,{children:"HotelsRs"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(t.p,{children:"Get hotels master query. This method is used to retrieve hotels master by their Codes, locationId or country."}),"\n",(0,n.jsxs)(t.h5,{id:"inventoryqueryhotelsmasterhotelsmasterfilterinputinventoryhotelmasterfilterinput-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryQuery.hotelsMaster.",(0,n.jsx)("b",{children:"hotelsMasterFilterInput"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/api/types/inputs/inventory-hotel-master-filter-input",children:(0,n.jsx)(t.code,{children:"InventoryHotelMasterFilterInput"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,n.jsxs)(t.h4,{id:"inventoryquerysearchhotelsmasterhotelsrs-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryQuery.",(0,n.jsx)("b",{children:"searchHotelsMaster"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/api/types/objects/hotels-rs",children:(0,n.jsx)(t.code,{children:"HotelsRs"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(t.p,{children:"Search hotels master query. This method is used to retrieve hotels master by hotel name or geo coordinates."}),"\n",(0,n.jsxs)(t.h5,{id:"inventoryquerysearchhotelsmasterhotelsmastersearchfilterinputinventoryhotelsmastersearchfilterinput-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryQuery.searchHotelsMaster.",(0,n.jsx)("b",{children:"hotelsMasterSearchFilterInput"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/api/types/inputs/inventory-hotels-master-search-filter-input",children:(0,n.jsx)(t.code,{children:"InventoryHotelsMasterSearchFilterInput"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,n.jsxs)(t.h4,{id:"inventoryquerylocalitieslocalitiesrs-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryQuery.",(0,n.jsx)("b",{children:"localities"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/api/types/objects/localities-rs",children:(0,n.jsx)(t.code,{children:"LocalitiesRs"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(t.p,{children:"Get localities query. This method is used to retrieve localities by their country."}),"\n",(0,n.jsxs)(t.h5,{id:"inventoryquerylocalitieslocalitiesfilterinputinventorylocalitiesfilterinput-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryQuery.localities.",(0,n.jsx)("b",{children:"localitiesFilterInput"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/api/types/inputs/inventory-localities-filter-input",children:(0,n.jsx)(t.code,{children:"InventoryLocalitiesFilterInput"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,n.jsxs)(t.h4,{id:"inventoryquerysearchlocalitieslocalitiesrs-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryQuery.",(0,n.jsx)("b",{children:"searchLocalities"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/api/types/objects/localities-rs",children:(0,n.jsx)(t.code,{children:"LocalitiesRs"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(t.p,{children:"Search localities query. This method is used to search localities by their country or name."}),"\n",(0,n.jsxs)(t.h5,{id:"inventoryquerysearchlocalitieslocalitiessearchfilterinputinventorylocalitiessearchfilterinput-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryQuery.searchLocalities.",(0,n.jsx)("b",{children:"localitiesSearchFilterInput"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/api/types/inputs/inventory-localities-search-filter-input",children:(0,n.jsx)(t.code,{children:"InventoryLocalitiesSearchFilterInput"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,n.jsxs)(t.h4,{id:"inventoryquerymealplansgetmealplansrs-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryQuery.",(0,n.jsx)("b",{children:"mealPlans"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/api/types/objects/get-meal-plans-rs",children:(0,n.jsx)(t.code,{children:"GetMealPlansRs"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(t.p,{children:"Get meal plans query."}),"\n",(0,n.jsxs)(t.h4,{id:"inventoryqueryofferssetupoffersrs-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryQuery.",(0,n.jsx)("b",{children:"offersSetup"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/api/types/objects/offers-rs",children:(0,n.jsx)(t.code,{children:"OffersRs"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(t.p,{children:"Get offers setup query."}),"\n",(0,n.jsxs)(t.h5,{id:"inventoryqueryofferssetupofferssetupfilterinputinventoryofferssetupfilterinput--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryQuery.offersSetup.",(0,n.jsx)("b",{children:"offersSetupFilterInput"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/api/types/inputs/inventory-offers-setup-filter-input",children:(0,n.jsx)(t.code,{children:"InventoryOffersSetupFilterInput!"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,n.jsxs)(t.h4,{id:"inventoryquerypricederivedratespricederivedratesrs-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryQuery.",(0,n.jsx)("b",{children:"priceDerivedRates"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/api/types/objects/price-derived-rates-rs",children:(0,n.jsx)(t.code,{children:"PriceDerivedRatesRs"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(t.p,{children:"Query to retrieve derived rates price"}),"\n",(0,n.jsxs)(t.h5,{id:"inventoryquerypricederivedratespricederivedratesinputinventorypricederivedratesinput--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryQuery.priceDerivedRates.",(0,n.jsx)("b",{children:"priceDerivedRatesInput"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/api/types/inputs/inventory-price-derived-rates-input",children:(0,n.jsx)(t.code,{children:"InventoryPriceDerivedRatesInput!"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,n.jsxs)(t.h4,{id:"inventoryquerypricemealplansupplementspricemealplansupplementsrs-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryQuery.",(0,n.jsx)("b",{children:"priceMealPlanSupplements"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/api/types/objects/price-meal-plan-supplements-rs",children:(0,n.jsx)(t.code,{children:"PriceMealPlanSupplementsRs"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(t.p,{children:"Query to retrieve meal plan supplements price"}),"\n",(0,n.jsxs)(t.h5,{id:"inventoryquerypricemealplansupplementspricemealplansupplementsinputinventorypricemealplansupplementsinput--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryQuery.priceMealPlanSupplements.",(0,n.jsx)("b",{children:"priceMealPlanSupplementsInput"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/api/types/inputs/inventory-price-meal-plan-supplements-input",children:(0,n.jsx)(t.code,{children:"InventoryPriceMealPlanSupplementsInput!"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,n.jsxs)(t.h4,{id:"inventoryquerypriceratespriceratesrs-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryQuery.",(0,n.jsx)("b",{children:"priceRates"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/api/types/objects/price-rates-rs",children:(0,n.jsx)(t.code,{children:"PriceRatesRs"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(t.p,{children:"Query to retrieve rates price"}),"\n",(0,n.jsxs)(t.h5,{id:"inventoryquerypriceratespriceratesinputinventorypriceratesinput--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryQuery.priceRates.",(0,n.jsx)("b",{children:"priceRatesInput"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/api/types/inputs/inventory-price-rates-input",children:(0,n.jsx)(t.code,{children:"InventoryPriceRatesInput!"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,n.jsxs)(t.h4,{id:"inventoryqueryratessetupratesrs-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryQuery.",(0,n.jsx)("b",{children:"ratesSetup"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/api/types/objects/rates-rs",children:(0,n.jsx)(t.code,{children:"RatesRs"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(t.p,{children:"Get rates setup query."}),"\n",(0,n.jsxs)(t.h5,{id:"inventoryqueryratessetupratessetupfilterinputinventoryratessetupfilterinput--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryQuery.ratesSetup.",(0,n.jsx)("b",{children:"ratesSetupFilterInput"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/api/types/inputs/inventory-rates-setup-filter-input",children:(0,n.jsx)(t.code,{children:"InventoryRatesSetupFilterInput!"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,n.jsxs)(t.h4,{id:"inventoryqueryroomssetuproomssetuprs-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryQuery.",(0,n.jsx)("b",{children:"roomsSetup"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/api/types/objects/rooms-set-up-rs",children:(0,n.jsx)(t.code,{children:"RoomsSetUpRs"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(t.p,{children:"Get rooms setup query."}),"\n",(0,n.jsxs)(t.h5,{id:"inventoryqueryroomssetuproomssetupfilterinputinventoryroomssetupfilterinput--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryQuery.roomsSetup.",(0,n.jsx)("b",{children:"roomsSetupFilterInput"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/api/types/inputs/inventory-rooms-setup-filter-input",children:(0,n.jsx)(t.code,{children:"InventoryRoomsSetupFilterInput!"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,n.jsxs)(t.h4,{id:"inventoryqueryroomsmasterroomsrs-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryQuery.",(0,n.jsx)("b",{children:"roomsMaster"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/api/types/objects/rooms-rs",children:(0,n.jsx)(t.code,{children:"RoomsRs"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(t.p,{children:"Get rooms master query."}),"\n",(0,n.jsxs)(t.h5,{id:"inventoryqueryroomsmasterroomsmasterfilterinputinventoryroomsmasterfilterinput--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryQuery.roomsMaster.",(0,n.jsx)("b",{children:"roomsMasterFilterInput"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/api/types/inputs/inventory-rooms-master-filter-input",children:(0,n.jsx)(t.code,{children:"InventoryRoomsMasterFilterInput!"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,n.jsx)(t.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/api/operations/queries/inventory",children:(0,n.jsx)(t.code,{children:"inventory"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"query"})]})]})}function x(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(v,{...e})}):v(e)}},21020:(e,t,r)=>{var s=r(96540),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var s,a={},d=null,c=null;for(s in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)l.call(t,s)&&!o.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===a[s]&&(a[s]=t[s]);return{$$typeof:n,type:e,key:d,ref:c,props:a,_owner:i.current}}t.Fragment=a,t.jsx=d,t.jsxs=d},74848:(e,t,r)=>{e.exports=r(21020)},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>i});var s=r(96540);const n={},a=s.createContext(n);function l(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);
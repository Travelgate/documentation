(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["83659"],{98542(e,t,r){"use strict";r.d(t,{Cj:()=>i,Cn:()=>c,Sr:()=>s,Td:()=>o});var a=r(74848),n=r(96540);function i(e){let[t,r]=(0,n.useState)(!1);return(0,n.useEffect)(()=>r(!1),[e]),(0,n.useEffect)(()=>{if(!t)return;let e=setTimeout(()=>r(!1),2e3);return()=>clearTimeout(e)},[t]),[t,async()=>{try{await navigator.clipboard.writeText(e),r(!0)}catch{r(!1)}}]}let o=({size:e=16})=>(0,a.jsxs)("svg",{viewBox:"0 0 24 24",width:e,height:e,fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,a.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),(0,a.jsx)("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]}),s=({size:e=16})=>(0,a.jsx)("svg",{viewBox:"0 0 24 24",width:e,height:e,fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:(0,a.jsx)("path",{d:"M20 6 9 17l-5-5"})}),c=({copied:e,message:t})=>(0,a.jsx)("span",{className:"copy-status",role:"status",children:e?t:""})},91001(e,t,r){"use strict";r.d(t,{A:()=>b});var a=r(74848);r(44819);let n=globalThis.MonacoEnvironment;"function"==typeof n?.getWorker&&(globalThis.MonacoEnvironment={...n,getWorker(e,t){let r=n.getWorker(e,t),a=!1,i=r.terminate.bind(r);return r.terminate=()=>{a=!0,i()},r.addEventListener("error",e=>{a&&e.preventDefault()}),r}});var i=r(96540),o=r(9526),s=r(52918),c=r(77781),l=r(54873),d=r(19863),u=r(91289),p=r(29637),g=r(98542),h=r(43700),y=r(80059);let m="travelgate-playground:request-headers",v=JSON.stringify({Authorization:"Bearer <YOUR_TRAVELGATE_BEARER_TOKEN>"},null,2),x=({label:e,endpoint:t})=>{let[r,n]=(0,g.Cj)(t);return(0,a.jsxs)("div",{className:"graphql-sample-interactive__bar",children:[(0,a.jsx)("code",{className:"graphql-sample-interactive__url",children:t}),(0,a.jsxs)("button",{type:"button",className:"graphql-sample-interactive__copy",onClick:n,title:`Copy ${e} endpoint URL`,"aria-label":r?`${e} endpoint URL copied`:`Copy ${e} endpoint URL ${t}`,children:[r?(0,a.jsx)(g.Sr,{size:14}):(0,a.jsx)(g.Td,{size:14}),r?"Copied":"Copy"]}),(0,a.jsx)(g.Cn,{copied:r,message:`${e} endpoint URL copied`})]})},S=({token:e,query:t,variables:r,api:n="generic",showLabel:s=!0})=>{let p=(0,d.A)(),{label:g,endpoint:S}=(0,y.getGraphqlApi)(n),b=void 0===t,f=b?h.V:t,C=b?h.y:r,[k,j]=(0,i.useState)(()=>{if(e)return JSON.stringify({Authorization:`Bearer ${e}`},null,2);if("u">typeof window)try{let e=window.sessionStorage.getItem(m),t=e&&JSON.parse(e);if(t&&"object"==typeof t&&!Array.isArray(t))return e}catch{}return v}),[_,A]=(0,i.useState)(()=>JSON.parse(k)),I=(0,i.useRef)(null),E=(0,i.useMemo)(()=>u.A.canUseDOM?(0,c.createGraphiQLFetcher)({url:S,headers:_}):null,[S,_]),N=(0,i.useMemo)(()=>u.A.canUseDOM?(0,y.createPlaygroundStorage)(n,localStorage):void 0,[n]),[P,R]=(0,i.useState)(C),T=(0,i.useMemo)(()=>e?JSON.stringify({Authorization:`Bearer ${e}`},null,2):JSON.stringify(JSON.parse(k),null,2),[k,e]),$=(0,i.useMemo)(()=>P?JSON.stringify(JSON.parse(P),null,2):"",[P]);(0,i.useEffect)(()=>{e&&(j(`{"Authorization": "Bearer ${e}"}`),A({Authorization:`Bearer ${e}`}))},[e]),(0,i.useEffect)(()=>()=>clearTimeout(I.current),[]);let O=e=>{let t;clearTimeout(I.current);try{t=JSON.parse(e)}catch{return}if(!(!t||"object"!=typeof t||Array.isArray(t))){try{window.sessionStorage.setItem(m,e)}catch{}I.current=setTimeout(()=>A(t),500)}};return(0,i.useEffect)(()=>{var e;let t;C&&R((e=localStorage.getItem("client")??"client_demo",t=JSON.parse(C),t?.settings?.client?(t.settings.client=e,JSON.stringify(t,null,2)):C))},[C]),(0,a.jsx)(a.Fragment,{children:p&&E&&k&&(0,a.jsx)(o.A,{fallback:(0,a.jsx)("div",{children:"Loading interactive playground..."}),children:()=>(0,a.jsxs)("div",{className:"graphql-sample-interactive","aria-label":"Interactive GraphQL playground",children:[s&&(0,a.jsx)(x,{label:g,endpoint:S}),(0,a.jsx)(l.J,{fetcher:E,storage:N,initialHeaders:T,onEditHeaders:O,initialQuery:f,initialVariables:$,children:(0,a.jsx)(l.J.Logo,{children:(0,a.jsx)(a.Fragment,{})})},`${n}:${e?"authenticated":"anonymous"}`)]})})})},b=(0,p.A)(({collapsible:e=!0,...t})=>{let[r,n]=(0,i.useState)(!1),{label:o}=(0,y.getGraphqlApi)(t.api??"generic");return e?(0,a.jsx)(s.B,{className:"graphql-example",summary:(0,a.jsxs)("summary",{className:"graphql-example__summary",children:[(0,a.jsx)("span",{className:"graphql-example__title",children:"Try this example"}),(0,a.jsx)("span",{className:"graphql-sample-interactive__api",children:o})]}),onToggle:e=>{e.currentTarget.open&&n(!0)},children:(0,a.jsx)("div",{className:"graphql-example__content",children:r&&(0,a.jsx)(S,{...t})})}):(0,a.jsx)(S,{...t})})},56803(e,t,r){"use strict";r.d(t,{U:()=>n,b:()=>a});let a=`query($where: APIWhereUniqueInput!) {
	admin {
		api(where: $where) {
			adviseMessage {
				code
				description
				level
			}
			apiData {
				code
				label
				errorCatalog {
					code
					description
					type
					level
				}
				operations {
					edges {
						node {
							operationData {
								code
								label
								types
							}
						}
					}
				}
			}
		}
	}
}`,n=`{
  "where": {
    "searchBy": "CODE",
    "search": "hotel"
  }
}`},30096(e,t,r){"use strict";r.d(t,{Oy:()=>a,P5:()=>n,ZX:()=>o,_S:()=>s,ej:()=>i,hL:()=>c});let a=`query (
	$criteriaSearch: HotelCriteriaSearchInput
	$settings: HotelSettingsInput
	$filterSearch: HotelXFilterSearchInput
) {
	hotelX {
		search(
			criteria: $criteriaSearch
			settings: $settings
			filterSearch: $filterSearch
		) {
			options {
				id
				accessCode
				supplierCode
				hotelCode
				hotelCodeSupplier
				hotelName
				boardCode
				boardCodeSupplier
				paymentType
				status
				occupancies {
					id
					paxes {
						age
					}
				}
				rooms {
					occupancyRefId
					code
					supplierCode
					description
					descriptionSupplier
					refundable
					roomPrice {
						price {
							currency
							binding
							net
							gross
							exchange {
								currency
								rate
							}
						}
						breakdown {
							start
							end
							price {
								currency
								binding
								net
								gross
								exchange {
									currency
									rate
								}
								minimumSellingPrice
							}
						}
					}
					beds {
						type
						count
					}
					ratePlans {
						start
						end
						code
						name
					}
					promotions{
						start
						end
						code
						name
					}
				}
				price {
					currency
					binding
					net
					gross
					exchange {
						currency
						rate
					}
					minimumSellingPrice
					markups {
						channel
						currency
						binding
						net
						gross
						exchange {
							currency
							rate
						}
						rules {
							id
							name
							type
							value
						}
					}
				}
				supplements {
					start
					end
					code
					name
					description
					supplementType
					chargeType
					mandatory
					durationType
					quantity
					unit
					resort {
						code
						name
						description
					}
					price {
						currency
						binding
						net
						gross
						exchange {
							currency
							rate
						}
					}
				}
				surcharges {
					code
					chargeType
					description
					mandatory
					price {
						currency
						binding
						net
						gross
						exchange {
							currency
							rate
						}
						markups {
							channel
							currency
							binding
							net
							gross
							exchange {
								currency
								rate
							}
						}
					}
				}
				rateRules
				cancelPolicy {
					refundable
					cancelPenalties {
						deadline
						isCalculatedDeadline
						penaltyType
						currency
						value
					}
				}
				remarks
			}
			errors {
				code
				type
				description
			}
			warnings {
				code
				type
				description
			}
		}
	}
}`,n=`{
    "criteriaSearch" : {
        "checkIn" : "2027-05-28",
        "checkOut" : "2027-05-29",
        "occupancies" : [
            {
                "paxes" : [
                    {
                        "age" : 30
                    },
                    {
                        "age" : 30
                    }
                ]
            }
        ],
        "hotels" : [
            "BR1518"
        ],
        "currency" : "EUR",
        "markets" : [
            "ES"
        ],
        "language" : "en",
        "nationality" : "ES"
    },
    "filterSearch" : {
        "access" : {
            "includes" : [
                "2",
                "5647"
            ]
        }
    },
    "settings" : {
        "client" : "client_demo",
        "testMode" : true,
        "timeout" : 25000,
        "plugins" : [
            {
                "pluginsType" : [
                    {
                        "name" : "preference",
                        "parameters" : [
                            {
                                "key" : "primaryKey",
                                "value" : "hotel,board,room,rateRules"
                            },
                            {
                                "key" : "optionsPerKey",
                                "value" : "1"
                            },
                            {
                                "key" : "internalCurrencyConversion",
                                "value" : "true"
                            }
                        ]
                    }
                ]
            }
        ]
    }
}`,i=`{
    "criteriaSearch" : {
        "checkIn" : "2027-05-28",
        "checkOut" : "2027-05-29",
        "occupancies" : [
            {
                "paxes" : [
                    {
                        "age" : 30
                    },
                    {
                        "age" : 30
                    }
                ]
            }
        ],
        "hotels" : [
            "ES284122",
            "BR1518"
        ],
        "currency" : "EUR",
        "markets" : [
            "ES"
        ],
        "language" : "en",
        "nationality" : "ES"
    },
    "settings" : {
        "client" : "client_demo",
        "testMode" : true,
        "timeout" : 25000,
        "plugins" : [
            {
                "pluginsType" : [
                    {
                        "name" : "preference",
                        "parameters" : [
                            {
                                "key" : "primaryKey",
                                "value" : "hotel,board,room,rateRules"
                            },
                            {
                                "key" : "optionsPerKey",
                                "value" : "1"
                            },
                            {
                                "key" : "internalCurrencyConversion",
                                "value" : "true"
                            }
                        ]
                    }
                ]
            }
        ]
    }
}`,o=`{
    "criteriaSearch" : {
        "checkIn" : "2027-05-28",
        "checkOut" : "2027-05-29",
        "occupancies" : [
            {
                "paxes" : [
                    {
                        "age" : 30
                    },
                    {
                        "age" : 30
                    }
                ]
            }
        ],
        "hotels" : [
            "ES284122"
        ],
        "currency" : "EUR",
        "markets" : [
            "ES"
        ],
        "language" : "en",
        "nationality" : "ES"
    },
    "filterSearch" : {
        "access" : {
            "includes" : [
                "2"
            ]
        }
    },
    "settings" : {
        "client" : "client_demo",
        "testMode" : true,
        "timeout" : 25000,
        "plugins" : [
            {
                "pluginsType" : [
                    {
                        "name" : "preference",
                        "parameters" : [
                            {
                                "key" : "primaryKey",
                                "value" : "hotel,board,room,rateRules"
                            },
                            {
                                "key" : "optionsPerKey",
                                "value" : "1"
                            },
                            {
                                "key" : "internalCurrencyConversion",
                                "value" : "true"
                            }
                        ]
                    }
                ]
            }
        ]
    }
}`,s=`{
    "criteriaSearch" : {
        "checkIn" : "2027-05-28",
        "checkOut" : "2027-05-29",
        "occupancies" : [
            {
                "paxes" : [
                    {
                        "age" : 30
                    },
                    {
                        "age" : 30
                    }
                ]
            },
            {
                "paxes" : [
                    {
                        "age" : 30
                    },
                    {
                        "age" : 8
                    }
                ]
            }
        ],
        "hotels" : [
            "BR1518"
        ],
        "currency" : "EUR",
        "markets" : [
            "ES"
        ],
        "language" : "en",
        "nationality" : "ES"
    },
    "filterSearch" : {
        "access" : {
            "includes" : [
                "2",
                "5647"
            ]
        }
    },
    "settings" : {
        "client" : "client_demo",
        "testMode" : true,
        "timeout" : 25000,
        "plugins" : [
            {
                "pluginsType" : [
                    {
                        "name" : "preference",
                        "parameters" : [
                            {
                                "key" : "primaryKey",
                                "value" : "hotel,board,room,rateRules"
                            },
                            {
                                "key" : "optionsPerKey",
                                "value" : "1"
                            },
                            {
                                "key" : "internalCurrencyConversion",
                                "value" : "true"
                            }
                        ]
                    }
                ]
            }
        ]
    }
}`,c=`{
    "criteriaSearch" : {
        "checkIn" : "2027-05-28",
        "checkOut" : "2027-05-29",
        "occupancies" : [
            {
                "paxes" : [
                    {
                        "age" : 30
                    },
                    {
                        "age" : 30
                    }
                ]
            }
        ],
        "hotels" : [
            "BR1518",
            "ES284122",
            "US2",
            "GB1"
        ],
        "currency" : "EUR",
        "markets" : [
            "ES"
        ],
        "language" : "en",
        "nationality" : "ES"
    },
    "filterSearch" : {
        "access" : {
            "includes" : [
                "2",
                "5647"
            ]
        }
    },
    "settings" : {
        "client" : "client_demo",
        "testMode" : true,
        "timeout" : 25000,
        "plugins" : [
            {
                "pluginsType" : [
                    {
                        "name" : "preference",
                        "parameters" : [
                            {
                                "key" : "primaryKey",
                                "value" : "hotel,board,room,rateRules"
                            },
                            {
                                "key" : "optionsPerKey",
                                "value" : "1"
                            },
                            {
                                "key" : "internalCurrencyConversion",
                                "value" : "true"
                            }
                        ]
                    }
                ]
            }
        ]
    }
}`},27100(e,t,r){"use strict";r.d(t,{A8:()=>o,Co:()=>n,GT:()=>i,_y:()=>a,aJ:()=>c,bX:()=>l,jx:()=>s,mV:()=>d});let a=`query($criteria: InventoryHotelMasterFilterInput) {
    inventory {
      hotelsMaster(hotelsMasterFilterInput: $criteria) {
        hotels {
          id
          name
          hotelCode
          contextCode
          email
          phones
          fax
          address
          postalCode
          latitude
          longitude
          category {
            id
            name
          }
          locality {
            id
            name
            countryCode
          }
        }
        success
        adviseMessages {
            code
            description
            level
            external{
              code
              message
            }
        }
      }
    }
}`,n=`query($criteria: InventoryHotelsMasterSearchFilterInput) {
    inventory {
      searchHotelsMaster(hotelsMasterSearchFilterInput: $criteria) {
        hotels {
          id
          name
          hotelCode
          contextCode
          email
          phones
          fax
          address
          postalCode
          latitude
          longitude
          category {
            id
            name
          }
          locality {
            id
            name
            countryCode
          }
        }
        success
        adviseMessages {
            code
            description
            level
            external{
              code
              message
            }
        }
      }
    }
}`,i=`{
    "criteria":{
        "hotelCodes": ["1"],
        "contextCode": "TGX_PUSH"
    }
}`,o=`{
    "criteria":{
        "contextCode": "TGX_PUSH"
    }
}`,s=`{
    "criteria":{
        "countryCode": "ES"
    }
}`,c=`{
    "criteria":{
        "localityId": 31104
    }
}`,l=`{
    "criteria":{ 
        "geoCoordinates": {
            "latitude": 39.63683121527604,
            "longitude": 2.6315027423287223,
            "radiusKm": 10
        }
    }
}`,d=`{
    "criteria":{ 
        "geoCoordinates": {
            "latitude": 39.63683121527604,
            "longitude": 2.6315027423287223,
            "radiusKm": 10
        },
        "hotelName": "mar"
    }
}`},80059(e){let t={shopping:{label:"Shopping API",description:"Search, quote, book, cancel, booking, amendments, oneStepBook and oneStepQuote",endpoint:"https://api-shopping.travelgate.com/graphql"},content:{label:"Content API",description:"Hotels, boards, destinations, chains, rooms and other static master data",endpoint:"https://api-content.travelgate.com/graphql"},inventory:{label:"Inventory API",description:"All buyer and seller inventory operations",endpoint:"https://api-inventory.travelgate.com/graphql"},generic:{label:"Generic API",description:"Stats, logging, admin and other shared operations",endpoint:"https://api.travelgate.com/"}},r=Object.entries(t).map(([e,{label:t}])=>({label:t,to:`/playground?api=${e}`}));function a(e){if(!Object.hasOwn(t,e))throw Error(`Unknown GraphQL API: ${e}`);return t[e]}e.exports={GRAPHQL_APIS:t,PLAYGROUND_LINKS:r,getGraphqlApi:a,createPlaygroundStorage:function(e,t){a(e);let r="generic"===e?"":`travelgate-playground:${e}:`,n=()=>Array.from({length:t.length},(e,r)=>t.key(r)).filter(e=>e?.startsWith(`${r}graphiql:`));return{getItem:e=>t.getItem(r+e),setItem:(e,a)=>t.setItem(r+e,a),removeItem:e=>t.removeItem(r+e),get length(){return n().length},clear:()=>n().forEach(e=>t.removeItem(e))}}}},43700(e,t,r){"use strict";r.d(t,{V:()=>a,y:()=>n});let a=`query($criteria: HotelXHotelListInput!) {
  hotelX {
    hotels(criteria: $criteria) {
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
}`,n=`{
  "criteria": {
    "access": "34538"
  }
}`},14523(e,t,r){"use strict";r.r(t),r.d(t,{default:()=>x});var a=r(74848),n=r(10898),i=r(55883);r(26645);var o=r(29637),s=r(98542),c=r(91001),l=r(95310),d=r(56347),u=r(80059),p=r(43700),g=r(30096),h=r(27100),y=r(56803);let m={shopping:{query:g.Oy,variables:g.P5},content:{query:p.V,variables:p.y},inventory:{query:h._y,variables:h.A8},generic:{query:y.b,variables:y.U}},v=({endpoint:e})=>{let[t,r]=(0,s.Cj)(e);return(0,a.jsxs)("div",{className:"g-playground__endpoint",children:[(0,a.jsx)("span",{className:"g-playground__endpoint-label",children:"Endpoint"}),(0,a.jsx)("code",{className:"g-playground__endpoint-url",children:e}),(0,a.jsx)("button",{type:"button",className:"g-playground__copy",onClick:r,title:t?"Copied!":"Copy endpoint URL","aria-label":t?"Endpoint URL copied":`Copy endpoint URL ${e}`,children:t?(0,a.jsx)(s.Sr,{}):(0,a.jsx)(s.Td,{})}),(0,a.jsx)(s.Cn,{copied:t,message:"Endpoint URL copied"})]})},x=(0,o.A)(e=>{let{siteConfig:t}=(0,n.A)(),r=new URLSearchParams((0,d.zy)().search).get("api")??"generic",o=Object.hasOwn(u.GRAPHQL_APIS,r);return(0,a.jsx)(i.A,{title:t.title,description:"GraphQL Explorer",children:(0,a.jsxs)("div",{className:"g-playground",children:[(0,a.jsxs)("div",{className:"g-playground__toolbar",children:[(0,a.jsx)("nav",{className:"g-playground__tabs","aria-label":"GraphQL API",children:Object.entries(u.GRAPHQL_APIS).map(([e,{label:t,description:n}])=>(0,a.jsx)(l.A,{to:`/playground?api=${e}`,className:"g-playground__tab",title:n,"aria-current":o&&e===r?"page":void 0,children:t},e))}),o&&(0,a.jsx)(v,{endpoint:u.GRAPHQL_APIS[r].endpoint})]}),o?(0,a.jsx)(c.A,{...e,...m[r],api:r,showLabel:!1,collapsible:!1},r):(0,a.jsxs)("p",{role:"alert",children:["Unknown GraphQL API: ",r,". Choose one of the APIs above."]})]})})})}}]);
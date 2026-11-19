(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["83659"],{98542(e,r,t){"use strict";t.d(r,{Cj:()=>i,Cn:()=>l,Sr:()=>o,Td:()=>s});var a=t(74848),n=t(96540);function i(e){let[r,t]=(0,n.useState)(!1);return(0,n.useEffect)(()=>t(!1),[e]),(0,n.useEffect)(()=>{if(!r)return;let e=setTimeout(()=>t(!1),2e3);return()=>clearTimeout(e)},[r]),[r,async()=>{try{await navigator.clipboard.writeText(e),t(!0)}catch{t(!1)}}]}let s=({size:e=16})=>(0,a.jsxs)("svg",{viewBox:"0 0 24 24",width:e,height:e,fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,a.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),(0,a.jsx)("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]}),o=({size:e=16})=>(0,a.jsx)("svg",{viewBox:"0 0 24 24",width:e,height:e,fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:(0,a.jsx)("path",{d:"M20 6 9 17l-5-5"})}),l=({copied:e,message:r})=>(0,a.jsx)("span",{className:"copy-status",role:"status",children:e?r:""})},91001(e,r,t){"use strict";t.d(r,{A:()=>j});var a=t(74848);t(44819);let n=globalThis.MonacoEnvironment;"function"==typeof n?.getWorker&&(globalThis.MonacoEnvironment={...n,getWorker(e,r){let t=n.getWorker(e,r),a=!1,i=t.terminate.bind(t);return t.terminate=()=>{a=!0,i()},t.addEventListener("error",e=>{a&&e.preventDefault()}),t}});var i=t(96540),s=t(9526),o=t(52918),l=t(9011),c=t(77781),u=t(54873),p=t(19863),d=t(91289),h=t(29637),g=t(98542),y=t(43700),m=t(80059);let v="travelgate-playground:request-headers",x=JSON.stringify({Authorization:"Bearer <YOUR_TRAVELGATE_BEARER_TOKEN>"},null,2),S=({label:e,endpoint:r})=>{let[t,n]=(0,g.Cj)(r);return(0,a.jsxs)("div",{className:"graphql-sample-interactive__bar",children:[(0,a.jsx)("code",{className:"graphql-sample-interactive__url",children:r}),(0,a.jsxs)("button",{type:"button",className:"graphql-sample-interactive__copy",onClick:n,title:`Copy ${e} endpoint URL`,"aria-label":t?`${e} endpoint URL copied`:`Copy ${e} endpoint URL ${r}`,children:[t?(0,a.jsx)(g.Sr,{size:14}):(0,a.jsx)(g.Td,{size:14}),t?"Copied":"Copy"]}),(0,a.jsx)(g.Cn,{copied:t,message:`${e} endpoint URL copied`})]})},b=({response:e})=>{let r=(0,i.useMemo)(()=>JSON.stringify(e,null,2),[e]);return(0,a.jsx)(o.B,{className:"graphql-sample-response",summary:(0,a.jsx)("summary",{className:"graphql-sample-response__summary",children:(0,a.jsx)("span",{className:"graphql-sample-response__title",children:"View sample response"})}),children:(0,a.jsx)(l.A,{language:"json",children:r})})},C=({token:e,query:r,variables:t,api:n="generic",showLabel:o=!0})=>{let l=(0,p.A)(),{label:h,endpoint:g}=(0,m.getGraphqlApi)(n),b=void 0===r,C=b?y.V:r,j=b?y.y:t,[f,k]=(0,i.useState)(()=>{if(e)return JSON.stringify({Authorization:`Bearer ${e}`},null,2);if("u">typeof window)try{let e=window.sessionStorage.getItem(v),r=e&&JSON.parse(e);if(r&&"object"==typeof r&&!Array.isArray(r))return e}catch{}return x}),[_,I]=(0,i.useState)(()=>JSON.parse(f)),E=(0,i.useRef)(null),A=(0,i.useMemo)(()=>d.A.canUseDOM?(0,c.createGraphiQLFetcher)({url:g,headers:_}):null,[g,_]),N=(0,i.useMemo)(()=>d.A.canUseDOM?(0,m.createPlaygroundStorage)(n,localStorage):void 0,[n]),[R,T]=(0,i.useState)(j),O=(0,i.useMemo)(()=>e?JSON.stringify({Authorization:`Bearer ${e}`},null,2):JSON.stringify(JSON.parse(f),null,2),[f,e]),L=(0,i.useMemo)(()=>R?JSON.stringify(JSON.parse(R),null,2):"",[R]);(0,i.useEffect)(()=>{e&&(k(`{"Authorization": "Bearer ${e}"}`),clearTimeout(E.current),I({Authorization:`Bearer ${e}`}))},[e]),(0,i.useEffect)(()=>()=>clearTimeout(E.current),[]);let P=e=>{let r;clearTimeout(E.current);try{e=e.trim()||"{}",r=JSON.parse(e)}catch{return}if(!(!r||"object"!=typeof r||Array.isArray(r))){try{window.sessionStorage.setItem(v,e)}catch{}E.current=setTimeout(()=>I(r),500)}};return(0,i.useEffect)(()=>{var e;let r;j&&T((e=localStorage.getItem("client")??"<YOUR_CLIENT>",r=JSON.parse(j),r?.settings?.client?(r.settings.client=e,JSON.stringify(r,null,2)):j))},[j]),(0,a.jsx)(a.Fragment,{children:l&&A&&f&&(0,a.jsx)(s.A,{fallback:(0,a.jsx)("div",{children:"Loading interactive playground..."}),children:()=>(0,a.jsxs)("div",{className:"graphql-sample-interactive","aria-label":"Interactive GraphQL playground",children:[o&&(0,a.jsx)(S,{label:h,endpoint:g}),(0,a.jsx)(u.J,{fetcher:A,storage:N,initialHeaders:O,onEditHeaders:P,initialQuery:C,initialVariables:L,children:(0,a.jsx)(u.J.Logo,{children:(0,a.jsx)(a.Fragment,{})})},`${n}:${e?"authenticated":"anonymous"}`)]})})})},j=(0,h.A)(({collapsible:e=!0,response:r,...t})=>{let[n,s]=(0,i.useState)(!1),{label:l}=(0,m.getGraphqlApi)(t.api??"generic");return e?(0,a.jsx)(o.B,{className:"graphql-example",summary:(0,a.jsxs)("summary",{className:"graphql-example__summary",children:[(0,a.jsx)("span",{className:"graphql-example__title",children:"Try this example"}),(0,a.jsx)("span",{className:"graphql-sample-interactive__api",children:l})]}),onToggle:e=>{e.currentTarget.open&&s(!0)},children:(0,a.jsx)("div",{className:"graphql-example__content",children:n&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(C,{...t}),r&&(0,a.jsx)(b,{response:r})]})})}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(C,{...t}),r&&(0,a.jsx)(b,{response:r})]})})},56803(e,r,t){"use strict";t.d(r,{U:()=>n,b:()=>a});let a=`query($where: APIWhereUniqueInput!) {
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
}`},8027(e,r,t){"use strict";t.d(r,{Oy:()=>a,P5:()=>n,ZX:()=>s,_S:()=>o,ej:()=>i,hL:()=>l});let a=`query (
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
        "client" : "<YOUR_CLIENT>",
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
        "client" : "<YOUR_CLIENT>",
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
        "client" : "<YOUR_CLIENT>",
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
        "client" : "<YOUR_CLIENT>",
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
}`,l=`{
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
        "client" : "<YOUR_CLIENT>",
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
}`},27100(e,r,t){"use strict";t.d(r,{A8:()=>s,Co:()=>n,GT:()=>i,_y:()=>a,aJ:()=>l,bX:()=>c,jx:()=>o,mV:()=>u});let a=`query($criteria: InventoryHotelMasterFilterInput) {
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
}`,s=`{
    "criteria":{
        "contextCode": "TGX_PUSH"
    }
}`,o=`{
    "criteria":{
        "countryCode": "ES"
    }
}`,l=`{
    "criteria":{
        "localityId": 31104
    }
}`,c=`{
    "criteria":{ 
        "geoCoordinates": {
            "latitude": 39.63683121527604,
            "longitude": 2.6315027423287223,
            "radiusKm": 10
        }
    }
}`,u=`{
    "criteria":{ 
        "geoCoordinates": {
            "latitude": 39.63683121527604,
            "longitude": 2.6315027423287223,
            "radiusKm": 10
        },
        "hotelName": "mar"
    }
}`},80059(e){let r={shopping:{label:"Shopping API",description:"Search, quote, book, cancel, booking, amendments, oneStepBook and oneStepQuote",endpoint:"https://api-shopping.travelgate.com/graphql"},content:{label:"Content API",description:"Hotels, boards, destinations, chains, rooms and other static master data",endpoint:"https://api-content.travelgate.com/graphql"},inventory:{label:"Inventory API",description:"All buyer and seller inventory operations",endpoint:"https://api-inventory.travelgate.com/graphql"},generic:{label:"Generic API",description:"Stats, logging, admin and other shared operations",endpoint:"https://api.travelgate.com/"}},t=Object.entries(r).map(([e,{label:r}])=>({label:r,to:`/playground?api=${e}`}));function a(e){if(!Object.hasOwn(r,e))throw Error(`Unknown GraphQL API: ${e}`);return r[e]}e.exports={GRAPHQL_APIS:r,PLAYGROUND_LINKS:t,getGraphqlApi:a,createPlaygroundStorage:function(e,r){a(e);let t="generic"===e?"":`travelgate-playground:${e}:`,n=()=>Array.from({length:r.length},(e,t)=>r.key(t)).filter(e=>e?.startsWith(`${t}graphiql:`));return{getItem:e=>r.getItem(t+e),setItem:(e,a)=>r.setItem(t+e,a),removeItem:e=>r.removeItem(t+e),get length(){return n().length},clear:()=>n().forEach(e=>r.removeItem(e))}}}},43700(e,r,t){"use strict";t.d(r,{V:()=>a,y:()=>n});let a=`query($criteria: HotelXHotelListInput!) {
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
    "access": "34769"
  }
}`},14523(e,r,t){"use strict";t.r(r),t.d(r,{default:()=>x});var a=t(74848),n=t(10898),i=t(55883);t(26645);var s=t(29637),o=t(98542),l=t(91001),c=t(95310),u=t(56347),p=t(80059),d=t(43700),h=t(8027),g=t(27100),y=t(56803);let m={shopping:{query:h.Oy,variables:h.P5},content:{query:d.V,variables:d.y},inventory:{query:g._y,variables:g.A8},generic:{query:y.b,variables:y.U}},v=({endpoint:e})=>{let[r,t]=(0,o.Cj)(e);return(0,a.jsxs)("div",{className:"g-playground__endpoint",children:[(0,a.jsx)("span",{className:"g-playground__endpoint-label",children:"Endpoint"}),(0,a.jsx)("code",{className:"g-playground__endpoint-url",children:e}),(0,a.jsx)("button",{type:"button",className:"g-playground__copy",onClick:t,title:r?"Copied!":"Copy endpoint URL","aria-label":r?"Endpoint URL copied":`Copy endpoint URL ${e}`,children:r?(0,a.jsx)(o.Sr,{}):(0,a.jsx)(o.Td,{})}),(0,a.jsx)(o.Cn,{copied:r,message:"Endpoint URL copied"})]})},x=(0,s.A)(e=>{let{siteConfig:r}=(0,n.A)(),t=new URLSearchParams((0,u.zy)().search).get("api")??"generic",s=Object.hasOwn(p.GRAPHQL_APIS,t);return(0,a.jsx)(i.A,{title:r.title,description:"GraphQL Explorer",children:(0,a.jsxs)("div",{className:"g-playground",children:[(0,a.jsxs)("div",{className:"g-playground__toolbar",children:[(0,a.jsx)("nav",{className:"g-playground__tabs","aria-label":"GraphQL API",children:Object.entries(p.GRAPHQL_APIS).map(([e,{label:r,description:n}])=>(0,a.jsx)(c.A,{to:`/playground?api=${e}`,className:"g-playground__tab",title:n,"aria-current":s&&e===t?"page":void 0,children:r},e))}),s&&(0,a.jsx)(v,{endpoint:p.GRAPHQL_APIS[t].endpoint})]}),s?(0,a.jsx)(l.A,{...e,...m[t],api:t,showLabel:!1,collapsible:!1},t):(0,a.jsxs)("p",{role:"alert",children:["Unknown GraphQL API: ",t,". Choose one of the APIs above."]})]})})})}}]);
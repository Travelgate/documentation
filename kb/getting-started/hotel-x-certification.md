---
sidebar_position: 3
---

# Hotel-X Certification

### When to Apply
You should apply once you've completed implementing the relevant methods.

### Is It Necessary to Complete All Certification Cases?
No. Case 3 (Direct Payment) is not mandatory if it is not relevant to your business. However, Cases 1 and 2 (Refundable Option and Non-Refundable Option) are always required.

### What Information Will We Check?
The certification aims to verify that the Hotel-X API user makes requests correctly. This is done by reviewing request and response logs for the following methods:


| Method       | Request Requirement                                                                 | Response Requirement                                                                 |
|--------------|--------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| **Hotels**   | —                                                                                    | At least one hotel with the requested `hotelCode` should be present in the response. |
| **C1 Search**| 3 rooms:&nbsp;<br />- 1 room with 3 ADT&nbsp;<br />- 1 room with 2 ADT + 1 CHILD (5yo)&nbsp;<br />- 1 room with 2 ADT&nbsp;<br /> | - Errors need to be requested in response but empty&nbsp;<br />- Number of Options > 0&nbsp;<br />- At least one refundable option present in response |
| **C2 Search**| 2 rooms:&nbsp;<br />- 1 room with 2 ADT + 1 CHILD (5yo)&nbsp;<br />- 1 room with 2 ADT&nbsp;<br /> | - Errors need to be requested in response but empty&nbsp;<br />- Number of Options > 0&nbsp;<br />- At least one non-refundable option present in response |
| **C3 Search**| 1 room with 2 ADT&nbsp;<br /> | - Errors need to be requested in response but empty&nbsp;<br />- Number of Options > 0&nbsp;<br />- At least one `DIRECT` payment type option (`option.PaymentType`) present in response |
| **C1 Quote** | Valid refundable `optionID`&nbsp;<br /> | - Errors need to be requested in response but empty&nbsp;<br />- `rq.HotelX.Quote.OptionQuote.CancelPolicy.Refundable = true` |
| **C2 Quote** | Valid non-refundable `optionID`&nbsp;<br /> | - Errors need to be requested in response but empty&nbsp;<br />- `rq.HotelX.Quote.OptionQuote.CancelPolicy.Refundable = false` |
| **C3 Quote** | Valid `optionID` with payment type `DIRECT`&nbsp;<br /> | - Errors need to be requested in response but empty&nbsp;<br />- `rq.HotelX.Quote.OptionQuote.PaymentType = DIRECT` |
| **C1 Book**  | Valid refundable `optionID`&nbsp;<br /> | Errors need to be requested in response but empty |
| **C2 Book**  | Valid non-refundable `optionID`&nbsp;<br /> | Errors need to be requested in response but empty |
| **C3 Book**  | Valid `optionID` with payment type `DIRECT`&nbsp;<br /> | Errors need to be requested in response but empty |
| **Cancellation** | One of these two cases:&nbsp;<br />- Cancel by `bookingID`&nbsp;<br />- Cancel by client or supplier `reference` &nbsp;<br /> | - Errors need to be requested in response but empty&nbsp;<br />- In Cancel by reference, `HotelCancelInput.reference` and `HotelCancelInput.hotelCode` should be requested |
| **Booking Read/List** | One of these three cases:&nbsp;<br />- Booking by `bookingID`&nbsp;<br />- Booking with `typeSearch = "DATES"` → requires `rq.Criteria.Dates`&nbsp;<br />- Booking with `typeSearch = "REFERENCES"` → requires `rq.Criteria.References`&nbsp;<br /> | - Errors need to be requested in response but empty&nbsp;<br />- At least one booking must be found in the response&nbsp;<br />- `Booking Status` in the booking object must be requested |


#### For the Booking Flow, we have three possible cases:
1. C1: Refundable Option.
2. C2: Non-Refundable Option.
3. C3: Direct Payment Option.

Travelgate has implemented an automated certification system to ensure the key points of the methods are correctly covered according to the Hotel-X Pull Buyers API. This system requires the certification files to be **uploaded in a specific name and format**: the format should be “.json”and the name should indicate the corresponding certification.

The following table outlines the names corresponding to each part of the certification process:

| Method                       | Request                  | Response              |
| ---------------------------- | ------------------------ | --------------------- |
| Content > Hotels RQ and RS   | Not required              | rs_hotels.json        |
| C1 Booking Flow > Search RQ and RS | rq_search_rf.json     | rs_search_rf.json     |
| C2 Booking Flow > Search RQ and RS | rq_search_nrf.json    | rs_search_nrf.json    |
| C3 Booking Flow > Search RQ and RS | rq_search_direct.json | rs_search_direct.json |
| C1 Booking Flow > Quote RQ and RS  | rq_quote_rf.json      | rs_quote_rf.json      |
| C2 Booking Flow > Quote RQ and RS  | rq_quote_nrf.json     | rs_quote_nrf.json     |
| C3 Booking Flow > Quote RQ and RS  | rq_quote_direct.json  | rs_quote_direct.json  |
| C1 Booking Flow > Book RQ and RS   | rq_book_rf.json       | rs_book_rf.json       |
| C2 Booking Flow > Book RQ and RS   | rq_book_nrf.json      | rs_book_nrf.json      |
| C3 Booking Flow > Book RQ and RS   | rq_book_direct.json   | rs_book_direct.json   |
| Booking Management > Cancel RQ and RS | rq_cancel_rf.json | rs_cancel_rf.json     |

### Example of a Search Query Request and Response

<details>
<summary>**Query Logs**</summary>
<div>
    Be sure to check our [**Hotel-X API Documentation**](/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/search) for complete details and examples of queries and mutations.
</div>
<br></br>

<details>
<summary>Search Request</summary>

<details>
<summary>Search Query</summary>

```js
query (
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
}
```
</details>


<details>
<summary>Search Request Variables</summary>



```js
{
  "criteriaSearch": {
    "checkIn": "2027-05-28",
    "checkOut": "2027-05-29",
    "occupancies": [
      {
        "paxes": [
          {
            "age": 30
          },
          {
            "age": 30
          }
        ]
      }
    ],
    "hotels": [
      "BR1518"
    ],
    "currency": "EUR",
    "markets": [
      "ES"
    ],
    "language": "en",
    "nationality": "ES"
  },
  "settings": {
    "client": "client_demo",
    "testMode": true,
    "timeout": 25000,
    "plugins": [
      {
        "step": "RESPONSE",
        "pluginsType": [
          {
            "type": "PRE_STEP",
            "name": "preference",
            "parameters": [
              {
                "key": "primaryKey",
                "value": "hotel,board,room,rateRules"
              },
              {
                "key": "optionsPerKey",
                "value": "1"
              },
              {
                "key": "internalCurrencyConversion",
                "value": "true"
              }
            ]
          }
        ]
      }
    ]
  }
}
```
</details>
</details>
<details>
<summary>Search Response</summary>


```js
{
  "data": {
    "hotelX": {
      "search": {
        "options": [
          {
            "id": "33!~|a0!~|b270528!~|c270529!~|d101930!~|e3!~|f0!~|gES!~|hES!~|ien!~|jEUR!~|k0!~|l2!~|mBR1518!~|n19!~|nTGX!~|o0!~|p1!~|x07050945!~|r!~|sBARTEST!~|M625!~|N0!~|Ofalse!~|PEUR!~|Q!~|R0!~|S!~|T!~|z1|30#30|101930|2027-05-28|1|7556761|7591854|3|11|0!~|A116216!~|Bprmsu---Aw--1k-!~|C30|30!~|EPremium Suite Jacuzzi 1 King Bed!~|Fsuite premium with jacuzzi and king bed!~|G1!~|U2,625,1811239200!~|H1!~|I1|30#30|101930|2027-05-28|1|7556761|7591854|3|11|0!~|J1!~|K1!~|L1!~|H2!~|IES!~|J1!~|K0!~|L1!~|H703!~|I1#3@#!~|J0!~|K1!~|L0!~|H710!~|I1250!~|J0!~|K0!~|L0!~|H708!~|I3759f074-5aed-46f8-8401-6ae7935fd9e4!~|J0!~|K0!~|L0!~|H709!~|Ien!~|J0!~|K0!~|L0!~|tOK!~|uConnectors!~|v0!~|w!~|yPACKAGE!~|q!~|q1!~|y!~|",
            "accessCode": "2",
            "supplierCode": "HOTELTEST",
            "hotelCode": "BR1518",
            "hotelCodeSupplier": "101930",
            "hotelName": "Hotel Nord Easy Patos",
            "boardCode": "19",
            "boardCodeSupplier": "3",
            "paymentType": "MERCHANT",
            "status": "OK",
            "occupancies": [
              {
                "id": 1,
                "paxes": [
                  {
                    "age": 30
                  },
                  {
                    "age": 30
                  }
                ]
              }
            ],
            "rooms": [
              {
                "occupancyRefId": 1,
                "code": "prmsu---Aw--1k-",
                "supplierCode": "116216",
                "description": "Premium Suite Jacuzzi 1 King Bed",
                "descriptionSupplier": "suite premium with jacuzzi and king bed",
                "refundable": true,
                "roomPrice": {
                  "price": {
                    "currency": "EUR",
                    "binding": false,
                    "net": 625,
                    "gross": 625,
                    "exchange": {
                      "currency": "EUR",
                      "rate": 1
                    }
                  },
                  "breakdown": [
                    {
                      "start": "2027-05-28",
                      "end": "2027-05-29",
                      "price": {
                        "currency": "EUR",
                        "binding": false,
                        "net": 625,
                        "gross": 625,
                        "exchange": {
                          "currency": "EUR",
                          "rate": 1
                        },
                        "minimumSellingPrice": null
                      }
                    }
                  ]
                },
                "beds": null,
                "ratePlans": [
                  {
                    "start": null,
                    "end": null,
                    "code": "BARTEST",
                    "name": "Test BAR Rate"
                  }
                ],
                "promotions": null
              }
            ],
            "price": {
              "currency": "EUR",
              "binding": false,
              "net": 625,
              "gross": 625,
              "exchange": {
                "currency": "EUR",
                "rate": 1
              },
              "minimumSellingPrice": null,
              "markups": null
            },
            "supplements": null,
            "surcharges": null,
            "rateRules": [
              "PACKAGE"
            ],
            "cancelPolicy": {
              "refundable": true,
              "cancelPenalties": [
                {
                  "deadline": "2027-05-25T10:00:00Z",
                  "isCalculatedDeadline": true,
                  "penaltyType": "IMPORT",
                  "currency": "EUR",
                  "value": 625
                }
              ]
            },
            "remarks": null
          },
          {
            "id": "33!~|a0!~|b270528!~|c270529!~|d101930!~|e1!~|f0!~|gES!~|hES!~|ien!~|jEUR!~|k0!~|l2!~|mBR1518!~|n1!~|nTGX!~|o0!~|p1!~|x07050945!~|r!~|sBARTEST!~|M745!~|N0!~|Ofalse!~|PEUR!~|Q!~|R0!~|S!~|T!~|z1|30#30|101930|2027-05-28|1|7556761|7591854|1|11|0!~|A116216!~|Bprmsu---Aw--1k-!~|C30|30!~|EPremium Suite Jacuzzi 1 King Bed!~|Fsuite premium with jacuzzi and king bed!~|G1!~|U2,745,1811239200!~|H1!~|I1|30#30|101930|2027-05-28|1|7556761|7591854|1|11|0!~|J1!~|K1!~|L1!~|H2!~|IES!~|J1!~|K0!~|L1!~|H703!~|I1#3@#!~|J0!~|K1!~|L0!~|H710!~|I1490!~|J0!~|K0!~|L0!~|H708!~|I3759f074-5aed-46f8-8401-6ae7935fd9e4!~|J0!~|K0!~|L0!~|H709!~|Ien!~|J0!~|K0!~|L0!~|tOK!~|uConnectors!~|v0!~|w!~|yPACKAGE!~|q!~|q1!~|y!~|",
            "accessCode": "2",
            "supplierCode": "HOTELTEST",
            "hotelCode": "BR1518",
            "hotelCodeSupplier": "101930",
            "hotelName": "Hotel Nord Easy Patos",
            "boardCode": "1",
            "boardCodeSupplier": "1",
            "paymentType": "MERCHANT",
            "status": "OK",
            "occupancies": [
              {
                "id": 1,
                "paxes": [
                  {
                    "age": 30
                  },
                  {
                    "age": 30
                  }
                ]
              }
            ],
            "rooms": [
              {
                "occupancyRefId": 1,
                "code": "prmsu---Aw--1k-",
                "supplierCode": "116216",
                "description": "Premium Suite Jacuzzi 1 King Bed",
                "descriptionSupplier": "suite premium with jacuzzi and king bed",
                "refundable": true,
                "roomPrice": {
                  "price": {
                    "currency": "EUR",
                    "binding": false,
                    "net": 745,
                    "gross": 745,
                    "exchange": {
                      "currency": "EUR",
                      "rate": 1
                    }
                  },
                  "breakdown": [
                    {
                      "start": "2027-05-28",
                      "end": "2027-05-29",
                      "price": {
                        "currency": "EUR",
                        "binding": false,
                        "net": 745,
                        "gross": 745,
                        "exchange": {
                          "currency": "EUR",
                          "rate": 1
                        },
                        "minimumSellingPrice": null
                      }
                    }
                  ]
                },
                "beds": null,
                "ratePlans": [
                  {
                    "start": null,
                    "end": null,
                    "code": "BARTEST",
                    "name": "Test BAR Rate"
                  }
                ],
                "promotions": null
              }
            ],
            "price": {
              "currency": "EUR",
              "binding": false,
              "net": 745,
              "gross": 745,
              "exchange": {
                "currency": "EUR",
                "rate": 1
              },
              "minimumSellingPrice": null,
              "markups": null
            },
            "supplements": null,
            "surcharges": null,
            "rateRules": [
              "PACKAGE"
            ],
            "cancelPolicy": {
              "refundable": true,
              "cancelPenalties": [
                {
                  "deadline": "2027-05-25T10:00:00Z",
                  "isCalculatedDeadline": true,
                  "penaltyType": "IMPORT",
                  "currency": "EUR",
                  "value": 745
                }
              ]
            },
            "remarks": null
          },
          {
            "id": "33!~|a0!~|b270528!~|c270529!~|d101930!~|e3!~|f0!~|gES!~|hES!~|ien!~|jEUR!~|k0!~|l2!~|mBR1518!~|n19!~|nTGX!~|o0!~|p1!~|x07050945!~|r!~|sBARTEST!~|M125!~|N0!~|Ofalse!~|PEUR!~|Q!~|R0!~|S!~|T!~|z1|30#30|101930|2027-05-28|1|7556761|7591166|3|11|0!~|A2269!~|Bstr----d--!~|C30|30!~|EStandard Double Room!~|FDouble Standard!~|G1!~|U2,125,1811239200!~|H1!~|I1|30#30|101930|2027-05-28|1|7556761|7591166|3|11|0!~|J1!~|K1!~|L1!~|H2!~|IES!~|J1!~|K0!~|L1!~|H703!~|I1#3@#!~|J0!~|K1!~|L0!~|H710!~|I250!~|J0!~|K0!~|L0!~|H708!~|I3759f074-5aed-46f8-8401-6ae7935fd9e4!~|J0!~|K0!~|L0!~|H709!~|Ien!~|J0!~|K0!~|L0!~|tOK!~|uConnectors!~|v0!~|w!~|yPACKAGE!~|q!~|q1!~|y!~|",
            "accessCode": "2",
            "supplierCode": "HOTELTEST",
            "hotelCode": "BR1518",
            "hotelCodeSupplier": "101930",
            "hotelName": "Hotel Nord Easy Patos",
            "boardCode": "19",
            "boardCodeSupplier": "3",
            "paymentType": "MERCHANT",
            "status": "OK",
            "occupancies": [
              {
                "id": 1,
                "paxes": [
                  {
                    "age": 30
                  },
                  {
                    "age": 30
                  }
                ]
              }
            ],
            "rooms": [
              {
                "occupancyRefId": 1,
                "code": "str----d--",
                "supplierCode": "2269",
                "description": "Standard Double Room",
                "descriptionSupplier": "Double Standard",
                "refundable": true,
                "roomPrice": {
                  "price": {
                    "currency": "EUR",
                    "binding": false,
                    "net": 125,
                    "gross": 125,
                    "exchange": {
                      "currency": "EUR",
                      "rate": 1
                    }
                  },
                  "breakdown": [
                    {
                      "start": "2027-05-28",
                      "end": "2027-05-29",
                      "price": {
                        "currency": "EUR",
                        "binding": false,
                        "net": 125,
                        "gross": 125,
                        "exchange": {
                          "currency": "EUR",
                          "rate": 1
                        },
                        "minimumSellingPrice": null
                      }
                    }
                  ]
                },
                "beds": null,
                "ratePlans": [
                  {
                    "start": null,
                    "end": null,
                    "code": "BARTEST",
                    "name": "Test BAR Rate"
                  }
                ],
                "promotions": null
              }
            ],
            "price": {
              "currency": "EUR",
              "binding": false,
              "net": 125,
              "gross": 125,
              "exchange": {
                "currency": "EUR",
                "rate": 1
              },
              "minimumSellingPrice": null,
              "markups": null
            },
            "supplements": null,
            "surcharges": null,
            "rateRules": [
              "PACKAGE"
            ],
            "cancelPolicy": {
              "refundable": true,
              "cancelPenalties": [
                {
                  "deadline": "2027-05-25T10:00:00Z",
                  "isCalculatedDeadline": true,
                  "penaltyType": "IMPORT",
                  "currency": "EUR",
                  "value": 125
                }
              ]
            },
            "remarks": null
          },
          {
            "id": "33!~|a0!~|b270528!~|c270529!~|d101930!~|e1!~|f0!~|gES!~|hES!~|ien!~|jEUR!~|k0!~|l2!~|mBR1518!~|n1!~|nTGX!~|o0!~|p1!~|x07050945!~|r!~|sBARTEST!~|M225!~|N0!~|Ofalse!~|PEUR!~|Q!~|R0!~|S!~|T!~|z1|30#30|101930|2027-05-28|1|7556761|7591166|1|11|0!~|A2269!~|Bstr----d--!~|C30|30!~|EStandard Double Room!~|FDouble Standard!~|G1!~|U2,225,1811239200!~|H1!~|I1|30#30|101930|2027-05-28|1|7556761|7591166|1|11|0!~|J1!~|K1!~|L1!~|H2!~|IES!~|J1!~|K0!~|L1!~|H703!~|I1#3@#!~|J0!~|K1!~|L0!~|H710!~|I450!~|J0!~|K0!~|L0!~|H708!~|I3759f074-5aed-46f8-8401-6ae7935fd9e4!~|J0!~|K0!~|L0!~|H709!~|Ien!~|J0!~|K0!~|L0!~|tOK!~|uConnectors!~|v0!~|w!~|yPACKAGE!~|q!~|q1!~|y!~|",
            "accessCode": "2",
            "supplierCode": "HOTELTEST",
            "hotelCode": "BR1518",
            "hotelCodeSupplier": "101930",
            "hotelName": "Hotel Nord Easy Patos",
            "boardCode": "1",
            "boardCodeSupplier": "1",
            "paymentType": "MERCHANT",
            "status": "OK",
            "occupancies": [
              {
                "id": 1,
                "paxes": [
                  {
                    "age": 30
                  },
                  {
                    "age": 30
                  }
                ]
              }
            ],
            "rooms": [
              {
                "occupancyRefId": 1,
                "code": "str----d--",
                "supplierCode": "2269",
                "description": "Standard Double Room",
                "descriptionSupplier": "Double Standard",
                "refundable": true,
                "roomPrice": {
                  "price": {
                    "currency": "EUR",
                    "binding": false,
                    "net": 225,
                    "gross": 225,
                    "exchange": {
                      "currency": "EUR",
                      "rate": 1
                    }
                  },
                  "breakdown": [
                    {
                      "start": "2027-05-28",
                      "end": "2027-05-29",
                      "price": {
                        "currency": "EUR",
                        "binding": false,
                        "net": 225,
                        "gross": 225,
                        "exchange": {
                          "currency": "EUR",
                          "rate": 1
                        },
                        "minimumSellingPrice": null
                      }
                    }
                  ]
                },
                "beds": null,
                "ratePlans": [
                  {
                    "start": null,
                    "end": null,
                    "code": "BARTEST",
                    "name": "Test BAR Rate"
                  }
                ],
                "promotions": null
              }
            ],
            "price": {
              "currency": "EUR",
              "binding": false,
              "net": 225,
              "gross": 225,
              "exchange": {
                "currency": "EUR",
                "rate": 1
              },
              "minimumSellingPrice": null,
              "markups": null
            },
            "supplements": null,
            "surcharges": null,
            "rateRules": [
              "PACKAGE"
            ],
            "cancelPolicy": {
              "refundable": true,
              "cancelPenalties": [
                {
                  "deadline": "2027-05-25T10:00:00Z",
                  "isCalculatedDeadline": true,
                  "penaltyType": "IMPORT",
                  "currency": "EUR",
                  "value": 225
                }
              ]
            },
            "remarks": null
          },
          {
            "id": "33!~|a0!~|b270528!~|c270529!~|d101930!~|e3!~|f0!~|gES!~|hES!~|ien!~|jEUR!~|k0!~|l2!~|mBR1518!~|n19!~|nTGX!~|o0!~|p1!~|x07050945!~|r!~|sBARTEST!~|M356!~|N0!~|Ofalse!~|PEUR!~|Q!~|R0!~|S!~|T!~|z1|30#30|101930|2027-05-28|1|7556761|7556762|3|11|0!~|A33841!~|Bjusu------!~|C30|30!~|EJunior Suite!~|FJunior Suite!~|G1!~|U2,356,1811239200!~|H1!~|I1|30#30|101930|2027-05-28|1|7556761|7556762|3|11|0!~|J1!~|K1!~|L1!~|H2!~|IES!~|J1!~|K0!~|L1!~|H703!~|I1#3@#!~|J0!~|K1!~|L0!~|H710!~|I712!~|J0!~|K0!~|L0!~|H708!~|I3759f074-5aed-46f8-8401-6ae7935fd9e4!~|J0!~|K0!~|L0!~|H709!~|Ien!~|J0!~|K0!~|L0!~|tOK!~|uConnectors!~|v0!~|w!~|yPACKAGE!~|q!~|q1!~|y!~|",
            "accessCode": "2",
            "supplierCode": "HOTELTEST",
            "hotelCode": "BR1518",
            "hotelCodeSupplier": "101930",
            "hotelName": "Hotel Nord Easy Patos",
            "boardCode": "19",
            "boardCodeSupplier": "3",
            "paymentType": "MERCHANT",
            "status": "OK",
            "occupancies": [
              {
                "id": 1,
                "paxes": [
                  {
                    "age": 30
                  },
                  {
                    "age": 30
                  }
                ]
              }
            ],
            "rooms": [
              {
                "occupancyRefId": 1,
                "code": "jusu------",
                "supplierCode": "33841",
                "description": "Junior Suite",
                "descriptionSupplier": "Junior Suite",
                "refundable": true,
                "roomPrice": {
                  "price": {
                    "currency": "EUR",
                    "binding": false,
                    "net": 356,
                    "gross": 356,
                    "exchange": {
                      "currency": "EUR",
                      "rate": 1
                    }
                  },
                  "breakdown": [
                    {
                      "start": "2027-05-28",
                      "end": "2027-05-29",
                      "price": {
                        "currency": "EUR",
                        "binding": false,
                        "net": 356,
                        "gross": 356,
                        "exchange": {
                          "currency": "EUR",
                          "rate": 1
                        },
                        "minimumSellingPrice": null
                      }
                    }
                  ]
                },
                "beds": null,
                "ratePlans": [
                  {
                    "start": null,
                    "end": null,
                    "code": "BARTEST",
                    "name": "Test BAR Rate"
                  }
                ],
                "promotions": null
              }
            ],
            "price": {
              "currency": "EUR",
              "binding": false,
              "net": 356,
              "gross": 356,
              "exchange": {
                "currency": "EUR",
                "rate": 1
              },
              "minimumSellingPrice": null,
              "markups": null
            },
            "supplements": null,
            "surcharges": null,
            "rateRules": [
              "PACKAGE"
            ],
            "cancelPolicy": {
              "refundable": true,
              "cancelPenalties": [
                {
                  "deadline": "2027-05-25T10:00:00Z",
                  "isCalculatedDeadline": true,
                  "penaltyType": "IMPORT",
                  "currency": "EUR",
                  "value": 356
                }
              ]
            },
            "remarks": null
          },
          {
            "id": "33!~|a0!~|b270528!~|c270529!~|d101930!~|e1!~|f0!~|gES!~|hES!~|ien!~|jEUR!~|k0!~|l2!~|mBR1518!~|n1!~|nTGX!~|o0!~|p1!~|x07050945!~|r!~|sBARTEST!~|M456!~|N0!~|Ofalse!~|PEUR!~|Q!~|R0!~|S!~|T!~|z1|30#30|101930|2027-05-28|1|7556761|7556762|1|11|0!~|A33841!~|Bjusu------!~|C30|30!~|EJunior Suite!~|FJunior Suite!~|G1!~|U2,456,1811239200!~|H1!~|I1|30#30|101930|2027-05-28|1|7556761|7556762|1|11|0!~|J1!~|K1!~|L1!~|H2!~|IES!~|J1!~|K0!~|L1!~|H703!~|I1#3@#!~|J0!~|K1!~|L0!~|H710!~|I912!~|J0!~|K0!~|L0!~|H708!~|I3759f074-5aed-46f8-8401-6ae7935fd9e4!~|J0!~|K0!~|L0!~|H709!~|Ien!~|J0!~|K0!~|L0!~|tOK!~|uConnectors!~|v0!~|w!~|yPACKAGE!~|q!~|q1!~|y!~|",
            "accessCode": "2",
            "supplierCode": "HOTELTEST",
            "hotelCode": "BR1518",
            "hotelCodeSupplier": "101930",
            "hotelName": "Hotel Nord Easy Patos",
            "boardCode": "1",
            "boardCodeSupplier": "1",
            "paymentType": "MERCHANT",
            "status": "OK",
            "occupancies": [
              {
                "id": 1,
                "paxes": [
                  {
                    "age": 30
                  },
                  {
                    "age": 30
                  }
                ]
              }
            ],
            "rooms": [
              {
                "occupancyRefId": 1,
                "code": "jusu------",
                "supplierCode": "33841",
                "description": "Junior Suite",
                "descriptionSupplier": "Junior Suite",
                "refundable": true,
                "roomPrice": {
                  "price": {
                    "currency": "EUR",
                    "binding": false,
                    "net": 456,
                    "gross": 456,
                    "exchange": {
                      "currency": "EUR",
                      "rate": 1
                    }
                  },
                  "breakdown": [
                    {
                      "start": "2027-05-28",
                      "end": "2027-05-29",
                      "price": {
                        "currency": "EUR",
                        "binding": false,
                        "net": 456,
                        "gross": 456,
                        "exchange": {
                          "currency": "EUR",
                          "rate": 1
                        },
                        "minimumSellingPrice": null
                      }
                    }
                  ]
                },
                "beds": null,
                "ratePlans": [
                  {
                    "start": null,
                    "end": null,
                    "code": "BARTEST",
                    "name": "Test BAR Rate"
                  }
                ],
                "promotions": null
              }
            ],
            "price": {
              "currency": "EUR",
              "binding": false,
              "net": 456,
              "gross": 456,
              "exchange": {
                "currency": "EUR",
                "rate": 1
              },
              "minimumSellingPrice": null,
              "markups": null
            },
            "supplements": null,
            "surcharges": null,
            "rateRules": [
              "PACKAGE"
            ],
            "cancelPolicy": {
              "refundable": true,
              "cancelPenalties": [
                {
                  "deadline": "2027-05-25T10:00:00Z",
                  "isCalculatedDeadline": true,
                  "penaltyType": "IMPORT",
                  "currency": "EUR",
                  "value": 456
                }
              ]
            },
            "remarks": null
          }
        ],
        "errors": null,
        "warnings": [
          {
            "code": "",
            "type": "204",
            "description": "Access `5647` returned:  No results found"
          }
        ]
      }
    }
  }
}
```


</details>
</details>

### What Connections Should I Use for Certification?
It is recommended to always use the [demo connections provided](/kb/connectivity-products/for-buyers/hotel-x/hotel-x-credentials) (Travelgate test and Smyrooms test) along with your client and API Key.

### Which Credentials and Hotels Can I Use for Certification Cases?
For certification cases, you can use the following credentials and hotel:
- **Apikey:** "Apikey test0000-0000-0000-0000-000000000000".
- **Client:** “client_demo”.
- **Hotel** "BR1518".
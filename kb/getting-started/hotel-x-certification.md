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
			context
			options {
				id
				accessCode
				supplierCode
				hotelCode
				hotelName
				boardCode
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
					description
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
      },
      {
        "paxes": [
          {
            "age": 30
          },
          {
            "age": 8
          }
        ]
      }
    ],
    "hotels": [
      "1"
    ],
    "currency": "EUR",
    "markets": [
      "ES"
    ],
    "language": "es",
    "nationality": "ES"
  },
  "settings": {
    "client": "client_demo",
    "context": "HOTELTEST",
    "testMode": true,
    "timeout": 25000
  },
  "filterSearch": {
    "access": {
      "includes": [
        "2"
      ]
    }
  }
}
```
</details>
</details>
<details>
<summary>Search Response</summary>


```js
{
    "hotelX": {
      "search": {
        "context": "HOTELTEST",
        "options": [
          {
            "id": "33!~|a0!~|b270528!~|c270529!~|d1!~|e14!~|f0!~|gES!~|hES!~|ies!~|jEUR!~|k0!~|l2!~|m1!~|n14!~|o0!~|p0!~|x30090856!~|rBARRF!~|sBARRF!~|rBARRF!~|sBARRF!~|M213!~|N0!~|Ofalse!~|PEUR!~|Q!~|R0!~|S!~|T!~|z1|30#30/30#8|1|2027-05-28|1|4247163|4247164|14|11|0!~|A5683!~|B5683!~|C30|30!~|EDouble Suite Deluxe!~|FDouble Suite Deluxe!~|G1!~|z2|30#30/30#8|1|2027-05-28|1|4247163|4247164|14|11|0!~|A5683!~|B5683!~|C30|8!~|EDouble Suite Deluxe!~|FDouble Suite Deluxe!~|G2!~|H1!~|I1|30#30/30#8|1|2027-05-28|1|4247163|4247164|14|11|0!~|J1!~|K1!~|L1!~|H2!~|IES!~|J1!~|K0!~|L1!~|H1!~|I2|30#30/30#8|1|2027-05-28|1|4247163|4247164|14|11|0!~|J1!~|K1!~|L2!~|H703!~|I1#3@#!~|J0!~|K1!~|L0!~|H708!~|I99b6129f-7356-417c-9977-1e22de1b674a!~|J0!~|K0!~|L0!~|tOK!~|uConnectors!~|v0!~|w!~|yPACKAGE!~|q!~|q0!~|y!~|",
            "accessCode": "2",
            "supplierCode": "HOTELTEST",
            "hotelCode": "1",
            "hotelName": "Hotel Test",
            "boardCode": "14",
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
              },
              {
                "id": 2,
                "paxes": [
                  {
                    "age": 30
                  },
                  {
                    "age": 8
                  }
                ]
              }
            ],
            "rooms": [
              {
                "occupancyRefId": 1,
                "code": "5683",
                "description": "Double Suite Deluxe",
                "refundable": true,
                "roomPrice": {
                  "price": {
                    "currency": "EUR",
                    "binding": false,
                    "net": 122,
                    "gross": 122,
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
                        "net": 120,
                        "gross": 120,
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
                    "code": "BARRF",
                    "name": "BAR TEST RF"
                  }
                ],
                "promotions": null
              },
              {
                "occupancyRefId": 2,
                "code": "5683",
                "description": "Double Suite Deluxe",
                "refundable": true,
                "roomPrice": {
                  "price": {
                    "currency": "EUR",
                    "binding": false,
                    "net": 91,
                    "gross": 91,
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
                        "net": 89,
                        "gross": 89,
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
                    "code": "BARRF",
                    "name": "BAR TEST RF"
                  }
                ],
                "promotions": null
              }
            ],
            "price": {
              "currency": "EUR",
              "binding": false,
              "net": 213,
              "gross": 213,
              "exchange": {
                "currency": "EUR",
                "rate": 1
              },
              "minimumSellingPrice": null,
              "markups": null
            },
            "supplements": null,
            "surcharges": [
              {
                "code": "0",
                "chargeType": "INCLUDE",
                "description": "City",
                "mandatory": true,
                "price": {
                  "currency": "EUR",
                  "binding": true,
                  "net": 2,
                  "gross": 2,
                  "exchange": {
                    "currency": "EUR",
                    "rate": 1
                  },
                  "markups": null
                }
              },
              {
                "code": "0",
                "chargeType": "INCLUDE",
                "description": "City",
                "mandatory": true,
                "price": {
                  "currency": "EUR",
                  "binding": true,
                  "net": 2,
                  "gross": 2,
                  "exchange": {
                    "currency": "EUR",
                    "rate": 1
                  },
                  "markups": null
                }
              }
            ],
            "rateRules": [
              "PACKAGE"
            ],
            "cancelPolicy": {
              "refundable": true,
              "cancelPenalties": [
                {
                  "deadline": "2027-05-17T10:00:00Z",
                  "isCalculatedDeadline": false,
                  "penaltyType": "IMPORT",
                  "currency": "EUR",
                  "value": 202.35000000000002
                },
                {
                  "deadline": "2027-05-25T10:00:00Z",
                  "isCalculatedDeadline": false,
                  "penaltyType": "IMPORT",
                  "currency": "EUR",
                  "value": 213
                }
              ]
            },
            "remarks": null
          },
          {
            "id": "33!~|a0!~|b270528!~|c270529!~|d1!~|e14!~|f1!~|gES!~|hES!~|ies!~|jEUR!~|k0!~|l2!~|m1!~|n14!~|o0!~|p0!~|x30090856!~|rBARRF!~|sBARRF!~|rBARRF!~|sBARRF!~|M213!~|N0!~|Ofalse!~|PEUR!~|Q!~|R0!~|S!~|T!~|z1|30#30/30#8|1|2027-05-28|1|4247163|4247164|14|11|0!~|A5683!~|B5683!~|C30|30!~|EDouble Suite Deluxe!~|FDouble Suite Deluxe!~|G1!~|z2|30#30/30#8|1|2027-05-28|1|4247163|4247164|14|11|0!~|A5683!~|B5683!~|C30|8!~|EDouble Suite Deluxe!~|FDouble Suite Deluxe!~|G2!~|H1!~|I1|30#30/30#8|1|2027-05-28|1|4247163|4247164|14|11|0!~|J1!~|K1!~|L1!~|H2!~|IES!~|J1!~|K0!~|L1!~|H1!~|I2|30#30/30#8|1|2027-05-28|1|4247163|4247164|14|11|0!~|J1!~|K1!~|L2!~|H703!~|I1#3@#!~|J0!~|K1!~|L0!~|H708!~|I99b6129f-7356-417c-9977-1e22de1b674a!~|J0!~|K0!~|L0!~|tOK!~|uConnectors!~|v0!~|w!~|yPACKAGE!~|q!~|q0!~|y!~|",
            "accessCode": "2",
            "supplierCode": "HOTELTEST",
            "hotelCode": "1",
            "hotelName": "Hotel Test",
            "boardCode": "14",
            "paymentType": "DIRECT",
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
              },
              {
                "id": 2,
                "paxes": [
                  {
                    "age": 30
                  },
                  {
                    "age": 8
                  }
                ]
              }
            ],
            "rooms": [
              {
                "occupancyRefId": 1,
                "code": "5683",
                "description": "Double Suite Deluxe",
                "refundable": true,
                "roomPrice": {
                  "price": {
                    "currency": "EUR",
                    "binding": false,
                    "net": 122,
                    "gross": 122,
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
                        "net": 120,
                        "gross": 120,
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
                    "code": "BARRF",
                    "name": "BAR TEST RF"
                  }
                ],
                "promotions": null
              },
              {
                "occupancyRefId": 2,
                "code": "5683",
                "description": "Double Suite Deluxe",
                "refundable": true,
                "roomPrice": {
                  "price": {
                    "currency": "EUR",
                    "binding": false,
                    "net": 91,
                    "gross": 91,
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
                        "net": 89,
                        "gross": 89,
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
                    "code": "BARRF",
                    "name": "BAR TEST RF"
                  }
                ],
                "promotions": null
              }
            ],
            "price": {
              "currency": "EUR",
              "binding": false,
              "net": 213,
              "gross": 213,
              "exchange": {
                "currency": "EUR",
                "rate": 1
              },
              "minimumSellingPrice": null,
              "markups": null
            },
            "supplements": null,
            "surcharges": [
              {
                "code": "0",
                "chargeType": "INCLUDE",
                "description": "City",
                "mandatory": true,
                "price": {
                  "currency": "EUR",
                  "binding": true,
                  "net": 2,
                  "gross": 2,
                  "exchange": {
                    "currency": "EUR",
                    "rate": 1
                  },
                  "markups": null
                }
              },
              {
                "code": "0",
                "chargeType": "INCLUDE",
                "description": "City",
                "mandatory": true,
                "price": {
                  "currency": "EUR",
                  "binding": true,
                  "net": 2,
                  "gross": 2,
                  "exchange": {
                    "currency": "EUR",
                    "rate": 1
                  },
                  "markups": null
                }
              }
            ],
            "rateRules": [
              "PACKAGE"
            ],
            "cancelPolicy": {
              "refundable": true,
              "cancelPenalties": [
                {
                  "deadline": "2027-05-17T10:00:00Z",
                  "isCalculatedDeadline": false,
                  "penaltyType": "IMPORT",
                  "currency": "EUR",
                  "value": 202.35000000000002
                },
                {
                  "deadline": "2027-05-25T10:00:00Z",
                  "isCalculatedDeadline": false,
                  "penaltyType": "IMPORT",
                  "currency": "EUR",
                  "value": 213
                }
              ]
            },
            "remarks": null
          }
        ],
        "errors": null,
        "warnings": null
      }
    }
  }

```


</details>
</details>

### What Connections Should I Use for Certification?
It is recommended to always use the [demo connections provided](/kb/connectivity-products/for-buyers/hotel-x/hotel-x-credentials) (Travelgate test and Smyrooms test) along with your client and API Key.

### Which Credentials and Hotels Can I Use for Certification Cases?
For certification cases, you can use the following credentials and hotels:
- **Apikey:** "Apikey test0000-0000-0000-0000-000000000000".
- **Client:** “client_demo”.
- **Travelgate test supplier:** Context “HOTELTEST", Access code “2”, Hotels "1", "2", and "23".
- **Smyrooms test supplier:** Hotel "27".

Those hotels are recommended, but remember that any hotel showing availability in Travelgate and Smyrooms test suppliers is valid.
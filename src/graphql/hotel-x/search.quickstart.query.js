export const searchQuickStartQuery = 
`query (
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
}`


export const searchQuickStartVariables = 
`{
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
                "step" : "RESPONSE",
                "pluginsType" : [
                    {
                        "type" : "PRE_STEP",
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
}`

export const searchWithoutFilterVariables = 
`{
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
                "step" : "RESPONSE",
                "pluginsType" : [
                    {
                        "type" : "PRE_STEP",
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
}`


export const searchWithOnlyOneAccess = 
`{
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
                "step" : "RESPONSE",
                "pluginsType" : [
                    {
                        "type" : "PRE_STEP",
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
}`


export const searchTwoRoomsVariables = 
`{
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
                "step" : "RESPONSE",
                "pluginsType" : [
                    {
                        "type" : "PRE_STEP",
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
}`


export const searchMultipleHotelsVariables = 
`{
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
                "step" : "RESPONSE",
                "pluginsType" : [
                    {
                        "type" : "PRE_STEP",
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
}`
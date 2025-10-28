export const oneStepBookMutation = 
`mutation (
	$input: HotelOneStepBookInput!
	$settings: HotelSettingsInput!
	$filter: HotelFilterInput!
) {
	hotelX {
		oneStepBook(input: $input, settings: $settings, filter: $filter) {
			booking {
				status
				reference {
					client
					supplier
					bookingID
				}
				holder {
					name
					surname
				}
				hotel {
					bookingDate
					start
					end
					hotelCode
					hotelName
					boardCode
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
						price {
							currency
							binding
							net
							gross
						}
					}
				}
				price {
					currency
					binding
					net
					gross
				}
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

			adviseMessage {
				code
				description
			}
		}
	}
}`

export const oneStepBookVariables = 
`{
    "input" : {
        "clientReference" : "test_28102025",
        "language" : "es",
        "market" : "ES",
        "nationality" : "ES",
        "checkIn" : "2027-05-28",
        "checkOut" : "2027-05-29",
        "hotel" : "1",
        "board" : "14",
        "price" : {
            "currency" : "EUR",
            "binding" : false,
            "net" : 96.04,
            "gross" : 98
        },
        "ratePlan" : "BAR",
        "rateRulesExtended" : [
            {
                "type" : "PACKAGE"
            },
            {
                "type" : "NON_REFUNDABLE"
            }
        ],
        "payment" : {
            "type" : "MERCHANT"
        },
        "holder" : {
            "title" : "MISS",
            "name" : "Jane",
            "surname" : "Doe"
        },
        "rooms" : [
            {
                "occupancyRefId" : 1,
                "code" : "2269",
                "paxes" : [
                    {
                        "title" : "MISS",
                        "name" : "Jane",
                        "surname" : "Doe",
                        "age" : 30
                    },
                    {
                        "title" : "MISS",
                        "name" : "Jane",
                        "surname" : "Doe",
                        "age" : 30
                    }
                ]
            }
        ],
        "cancelPolicy" : {
            "refundable" : false
        }
    },
    "settings" : {
        "testMode" : true,
        "client" : "client_demo",
        "context" : "HOTELTEST",
        "timeout" : 180000
    },
    "filter" : {
        "access" : "2",
        "excludeComparisonFields" : [
            "SURCHARGES"
        ]
    }
}`
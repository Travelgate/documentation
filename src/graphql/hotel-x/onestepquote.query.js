export const oneStepQuoteQuery = 
`query (
	$input: HotelOneStepQuoteInput!
	$settings: HotelSettingsInput!
	$filter: HotelFilterInput!
) {
	hotelX {
		oneStepQuote(input: $input, settings: $settings, filter: $filter) {
			optionQuote {
				optionRefId
				cardTypes
				paymentType
				price {
					binding
					currency
					gross
					net
					minimumSellingPrice
				}
				remarks
				rooms {
					code
					description
					occupancyRefId
				}
				surcharges {
					chargeType
					code
					description
				}
				cancelPolicy {
					description
					refundable
					cancelPenalties {
						currency
						deadline
						isCalculatedDeadline
						penaltyType
						value
					}
				}
			}
			adviseMessage {
				code
				description
			}
		}
	}
}`

export const oneStepQuoteVariables = 
`{
    "input" : {
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
        "rooms" : [
            {
                "occupancyRefId" : 1,
                "code" : "2269",
                "paxes" : [
                ]
            }
        ],
        "rateRulesExtended" : [
            {
                "type" : "PACKAGE"
            },
            {
                "type" : "NON_REFUNDABLE"
            }
        ],
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
        "cancelPolicy" : {
            "refundable" : false,
            "cancelPenalties" : [
            ]
        }
    },
    "settings" : {
        "testMode" : true,
        "client" : "client_demo",
        "context" : "HOTELTEST",
        "timeout" : 20000
    },
    "filter" : {
        "access" : "2",
        "excludeComparisonFields" : [
            "SURCHARGES"
        ]
    }
}`
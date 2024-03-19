export const searchMultipleHotelsQuery = 
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
			context
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
			options {
				id
				accessCode
				supplierCode
				hotelCode
				hotelName
				boardCode
				paymentType
				status
				markets
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
		}
	}
}`


export const searchMultipleHotelsVariables = 
`{
	"criteriaSearch": {
		"checkIn": "2024-10-28",
		"checkOut": "2024-10-29",
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
			"1",
			"2"
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
}`
export const bookingQuery = 
`query (
	$criteriaBookingRead: HotelCriteriaBookingInput!
	$settings: HotelSettingsInput!
) {
	hotelX {
		booking(criteria: $criteriaBookingRead, settings: $settings) {
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
			bookings {
				status
				reference {
					bookingID
					client
					supplier
					hotel
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
							net
							exchange {
								currency
								rate
							}
						}
					}
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
		}
	}
}`


export const bookingByBookingIDVariables = 
`{
	"criteriaBookingRead": {
		"bookingID": "1@1[241028[241029[231010[1[en[EUR[2[test_01234567890[2636944"
	},
	"settings": {
		"client": "client_demo",
		"context": "HOTELTEST",
		"testMode": true,
		"timeout": 60000
	}
}`


export const bookingByReferenceVariables = 
`{
	"criteriaBookingRead": {
		"accessCode": "2",
		"typeSearch": "REFERENCES",
		"references": {
			"hotelCode": "1",
			"currency": "EUR",
			"references": [
				{
					"client": "test_01234567890"
				}
			]
		}
	},
	"settings": {
		"client": "client_demo",
		"context": "HOTELTEST",
		"testMode": true,
		"timeout": 18000
	}
}`


export const bookingByArrivalDatesVariables = 
`{
	"criteriaBookingRead": {
		"accessCode": "2",
		"typeSearch": "DATES",
		"dates": {
			"dateType": "ARRIVAL",
			"start": "2024-10-25",
			"end": "2024-10-30"
		}
	},
	"settings": {
		"client": "client_demo",
		"context": "HOTELTEST",
		"testMode": true,
		"timeout": 180000
	}
}`

export const bookingByBookingDatesVariables = 
`{
	"criteriaBookingRead": {
		"accessCode": "2",
		"typeSearch": "DATES",
		"dates": {
			"dateType": "BOOKING",
			"start": "2023-10-01",
			"end": "2023-10-10"
		}
	},
	"settings": {
		"client": "client_demo",
		"context": "HOTELTEST",
		"testMode": true,
		"timeout": 180000
	}
}`

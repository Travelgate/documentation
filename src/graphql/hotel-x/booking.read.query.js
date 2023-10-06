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
						hoursBefore
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
		"bookingID": "1@1[241028[241029[230918[1[es[EUR[2[test_0123456789[2596391"
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
					"client": "test_0123456789"
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
			"start": "2023-08-25",
			"end": "2023-08-30"
		}
	},
	"settings": {
		"client": "client_demo",
		"context": "HOTELTEST",
		"testMode": true,
		"timeout": 180000
	}
}`

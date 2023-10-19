export const cancelMutation = 
`mutation ($cancelInput: HotelCancelInput!, $settings: HotelSettingsInput) {
	hotelX {
		cancel(input: $cancelInput, settings: $settings) {
			errors {
				type
				code
				description
			}
			warnings {
				code
				description
			}
			cancellation {
				status
				reference {
					bookingID
					client
					supplier
					hotel
				}
				cancelReference
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
				booking {
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
							code
							description
							occupancyRefId
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
					}
				}
			}
		}
	}
}`


export const cancelByBookingIDVariables = 
`{
	"cancelInput": {
		"bookingID": "1@1[241028[241029[231010[1[en[EUR[2[test_01234567890[2636944"
	},
	"settings": {
		"client": "client_demo",
		"context": "HOTELTEST",
		"testMode": true,
		"timeout": 18000
	}
}`


export const cancelByReferenceVariables = 
`{
	"cancelInput": {
		"accessCode": "2",
		"hotelCode": "1",
		"reference": {
			"supplier": "2636944"
		}
	},
	"settings": {
		"client": "client_demo",
		"context": "HOTELTEST",
		"testMode": true,
		"timeout": 60000
	}
}`
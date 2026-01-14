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
		"bookingID": "n1@1[270528[270529[251219[101930[en[EUR[2[test_0123456789_19122025_2[5015264["
	},
	"settings": {
		"client": "client_demo",
		"testMode": true,
		"timeout": 18000
	}
}`


export const cancelByReferenceVariables = 
`{
	"cancelInput": {
		"accessCode": "2",
		"hotelCode": "BR1518",
		"reference": {
			"supplier": "5015264",
			"client": "test_0123456789_19122025_2"
		}
	},
	"settings": {
		"client": "client_demo",
		"testMode": true,
		"timeout": 60000
	}
}`
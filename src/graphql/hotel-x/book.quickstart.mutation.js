export const bookQuickStartMutation = 
`mutation ($bookInput: HotelBookInput!, $settings: HotelSettingsInput) {
	hotelX {
		book(input: $bookInput, settings: $settings) {
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

			booking {
				status
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
				hotel {
					hotelCode
					hotelName
					bookingDate
					start
					end
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
}`


export const bookQuickStartVariables = 
`{
	"bookInput": {
		"optionRefId": "11!11?1$241028?241029?1?1?0?ES?ES?es?EUR?0?2?1?1?0?1?10101449?BARRF[%@BARRF?210.0$0$false$EUR$$0$?1|30#30|1|2024-10-28|1|4247163|4247164|1|11|0?5683!5683?30$30??Double Suite Deluxe?1?120$2$EUR$52.5$2024-10-22T10:00:00Z!72$2$EUR$105$2024-10-24T10:00:00Z!24$2$EUR$210$2024-10-26T10:00:00Z?After$210.0!Before$210.0!ExpireDate$29/10/2024!mercado$ES!tgx_sess$691c61a5-80b2-40a3-b6d2-4c32d5e30fca?OK?Sith?0?",
		"clientReference": "test_0123456789",
		"deltaPrice": {
			"amount": 10,
			"percent": 10,
			"applyBoth": true
		},
		"holder": {
			"name": "Jane",
			"surname": "Doe"
		},
		"remarks": "This is just a test booking! Feel free to include any extra information in the remarks section that you'd like the supplier to know.",
		"rooms": {
			"occupancyRefId": 1,
			"paxes": [
				{
					"name": "Jane",
					"surname": "Doe",
					"age": 30
				},
				{
					"name": "John",
					"surname": "Smith",
					"age": 30
				}
			]
		}
	},
	"settings": {
		"client": "client_demo",
		"context": "HOTELTEST",
		"testMode": true,
		"timeout": 60000
	}
}`
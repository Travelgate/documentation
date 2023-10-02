export const bookQuickStartMutation = `
mutation {
	hotelX {
		book(
			input: {
				optionRefId: "11!11?1$241028?241029?1?1?0?ES?ES?es?EUR?0?2?1?1?1?0?15091142?BAR[%@BAR?146.0$0$false$EUR$$0$?1|30#30|1|2024-10-28|1|4132467|4132468|1|11|0?2269!2269?30$30??Double Standard?1??After$146.0!Before$146.0!ExpireDate$29/10/2024!mercado$ES!tgx_sess$f6152cba-f792-4e81-a2c1-e73ca63ecd02?OK?Sith?0?"
				clientReference: "test_0123456789"
				deltaPrice: { amount: 10, percent: 10, applyBoth: true }
				holder: { name: "Jane", surname: "Doe" }
				remarks: "This is just a test booking! Feel free to include any extra information in the remarks section that you'd like the supplier to know."
				rooms: {
					occupancyRefId: 1
					paxes: [
						{ name: "Jane", surname: "Doe", age: 30 }
						{ name: "John", surname: "Smith", age: 30 }
					]
				}
			}
			settings: {
				client: "client_demo"
				context: "HOTELTEST"
				testMode: true
				timeout: 60000
			}
		) {
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
						hoursBefore
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
}

`
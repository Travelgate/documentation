export const datesAmendmentCommitMutation = 
`mutation (
	$data: HotelCriteriaAmendDatesCommitInput!
	$settings: HotelSettingsInput!
) {
	hotelX {
		amendDates(data: $data, settings: $settings) {
			amendFee {
				currency
				binding
				net
				gross
				exchange {
					currency
					rate
				}
			}
			amendedBookingDetail {
				status
				reference {
					client
					supplier
					hotel
					bookingID
					amendmentID
				}
				holder {
					title
					name
					surname
					contactInfo {
						email
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
				}
			}
			adviseMessage {
				code
				description
			}
		}
	}
}`

export const datesAmendmentCommitVariables = 
`{
	"data": {
		"amendmentID": "n1%1!1?1@1[271201[271204[250623[7387[en[[6847[test_09052024[31287916[[[260409@260412@251115[["
	},
	"settings": {
		"context": "HOTELTEST",
		"client": "client_demo",
		"auditTransactions": true,
		"timeout": 60000,
		"testMode": true
	}
}`
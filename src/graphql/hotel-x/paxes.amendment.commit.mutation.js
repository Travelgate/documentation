export const paxesAmendmentCommitMutation = 
`mutation (
	$data: HotelCriteriaAmendPaxesCommitInput!
	$settings: HotelSettingsInput!
) {
	hotelX {
		amendPaxes(data: $data, settings: $settings) {
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

export const paxesAmendmentCommitVariables = 
`{
	"data": {
		"amendmentID": "xxx"
	},
	"settings": {
		"context": "HOTELTEST",
		"client": "client_demo",
		"auditTransactions": true,
		"timeout": 60000,
		"testMode": true
	}
}`
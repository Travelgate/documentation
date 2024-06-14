export const boardAmendmentQuoteQuery = 
`query (
	$criteria: HotelCriteriaAmendBoardQuoteInput!
	$settings: HotelSettingsInput!
) {
	hotelX {
		quoteBoardAmendment(criteria: $criteria, settings: $settings) {
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
}
`

export const boardAmendmentQuoteVariables = 
`{
	"criteria": {
		"bookingID": "n1@1[241128[241129[240516[1[es[EUR[2[test_09052024_test[3128791[",
		"board": "AI"
	},
	"settings": {
		"context": "HOTELTEST",
		"client": "client_demo",
		"auditTransactions": true,
		"timeout": 60000,
		"testMode": true
	}
}`
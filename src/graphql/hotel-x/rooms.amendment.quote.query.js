export const roomsAmendmentQuoteQuery = 
`query (
	$criteria: HotelCriteriaAmendRoomsQuoteInput!
	$settings: HotelSettingsInput!
) {
	hotelX {
		quoteRoomsAmendment(criteria: $criteria, settings: $settings) {
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

export const roomsAmendmentQuoteVariables = 
`{
	"criteria": {
		"bookingID": "n1@1[241128[241129[240516[1[es[EUR[2[test_09052024_test[3128791[",
		"rooms": [
			{
				"occupancyID": 1,
				"code": "2269",
				"paxes": [
					{
						"age": 30,
						"name": "Juan",
						"surname": "Smith",
						"title": null
					},
					{
						"age": 30,
						"name": "Tom",
						"surname": "Jones",
						"title": null
					},
					{
						"age": 8,
						"name": "Jacob",
						"surname": "Jones",
						"title": null
					}
				]
			}
		]
	},
	"settings": {
		"context": "HOTELTEST",
		"client": "client_demo",
		"auditTransactions": true,
		"timeout": 60000,
		"testMode": true
	}
}`
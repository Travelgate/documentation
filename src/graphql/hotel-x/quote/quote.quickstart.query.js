export const quoteQuickStartQuery = 
`query (
	$criteriaQuote: HotelCriteriaQuoteInput!
	$settings: HotelSettingsInput
) {
	hotelX {
		quote(criteria: $criteriaQuote, settings: $settings) {
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
			optionQuote {
				optionRefId
				status
				hotelCode
				hotelCodeSupplier
				boardCode
				boardCodeSupplier
				price {
					currency
					binding
					net
					gross
					exchange {
						currency
						rate
					}
					minimumSellingPrice
				}
				surcharges {
					chargeType
					price {
						currency
						binding
						net
						gross
						exchange {
							currency
							rate
						}
						minimumSellingPrice
					}
					description
				}
				cancelPolicy {
					refundable
					description
					cancelPenalties {
						deadline
						isCalculatedDeadline
						penaltyType
						currency
						value
					}
				}
				paymentType
				cardTypes
				remarks
			}
		}
	}
}`

export const quoteQuickStartVariables = 
`{
	"criteriaQuote": {
		"optionRefId": "33!~|a0!~|b270528!~|c270529!~|d101930!~|e3!~|f0!~|gES!~|hES!~|ien!~|jEUR!~|k0!~|l2!~|mBR1518!~|n19!~|nTGX!~|o0!~|p1!~|x18111436!~|r!~|sBARTEST!~|M100!~|N3!~|Ofalse!~|PEUR!~|Q!~|R0!~|S!~|T!~|z1|30#30|101930|2027-05-28|1|7556761|7591854|3|11|0!~|A116216!~|Bprmsu---Aw--1k-!~|C30|30!~|EPremium Suite Jacuzzi 1 King Bed!~|Fsuite premium with jacuzzi and king bed!~|G1!~|U2,97,1811239200!~|H1!~|I1|30#30|101930|2027-05-28|1|7556761|7591854|3|11|0!~|J1!~|K1!~|L1!~|H2!~|IES!~|J1!~|K0!~|L1!~|H703!~|I1#3@#!~|J0!~|K1!~|L0!~|H710!~|I197!~|J0!~|K0!~|L0!~|H708!~|I219ce582-fa8e-499a-a98a-582b7167b482!~|J0!~|K0!~|L0!~|tOK!~|uConnectors!~|v0!~|w!~|yPACKAGE!~|q!~|q1!~|y!~|"
	},
	"settings": {
		"client": "<YOUR_CLIENT>",
		"testMode": true,
		"timeout": 5000
	}
}`
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
		"optionRefId": "33!~|a0!~|b270528!~|c270529!~|d1!~|e14!~|f0!~|gES!~|hES!~|ies!~|jEUR!~|k0!~|l2!~|m1!~|n14!~|o0!~|p0!~|x26060747!~|rBAR_USD!~|sBAR_USD!~|M79!~|N0!~|Ofalse!~|PUSD!~|Q!~|R0!~|S!~|T!~|z1|30#30|1|2027-05-28|1|5747340|5747342|14|11|0!~|A2269!~|B2269!~|C30|30!~|EDouble Standard!~|FDouble Standard!~|G1!~|H1!~|I1|30#30|1|2027-05-28|1|5747340|5747342|14|11|0!~|J1!~|K1!~|L1!~|H2!~|IES!~|J1!~|K0!~|L1!~|H703!~|I1#3@#!~|J0!~|K1!~|L0!~|H708!~|Ia8558279-a7a3-4b99-a527-dd39a37a68d6!~|J0!~|K0!~|L0!~|tOK!~|uConnectors!~|v0!~|w!~|yPACKAGE!~|"
	},
	"settings": {
		"client": "client_demo",
		"context": "TGX",
		"testMode": true,
		"timeout": 5000
	}
}`
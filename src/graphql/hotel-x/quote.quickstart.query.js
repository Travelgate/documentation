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
		"optionRefId": "13[%!03!~|3[%@241028!~|241029!~|1!~|1!~|0!~|ES!~|ES!~|es!~|EUR!~|0!~|2!~|1!~|1!~|0!~|0!~|10101446!~|BARRF[%@BARRF!~|210[%@0[%@false[%@EUR[%@[%@0[%@!~|1|30#30|1|2024-10-28|1|4247163|4247164|1|11|0!~|5683[%!5683!~|30[%@30!~|!~|Double Suite Deluxe!~|1!~|!~|mercado[%@ES[%!ExpireDate[%@29/10/2024!~|OK!~|Sith!~|0!~|"
	},
	"settings": {
		"client": "client_demo",
		"context": "HOTELTEST",
		"testMode": true,
		"timeout": 5000
	}
}`
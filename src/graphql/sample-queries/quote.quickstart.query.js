export const quoteQuickStartQuery = `
query {
	hotelX {
		quote(
			criteria: {
				optionRefId: "13[%!03!~|3[%@241028!~|241029!~|1!~|1!~|0!~|ES!~|ES!~|es!~|EUR!~|0!~|2!~|1!~|1!~|1!~|0!~|15091141!~|BAR[%@BAR!~|146[%@0[%@false[%@EUR[%@[%@0[%@!~|1|30#30|1|2024-10-28|1|4132467|4132468|1|11|0!~|2269[%!2269!~|30[%@30!~|!~|Double Standard!~|1!~|!~|mercado[%@ES[%!ExpireDate[%@29/10/2024[%!tarifaNRF[%@true[%!RateRule[%@tarifaNoRefundablePorHabitacion!~|OK!~|Sith!~|0!~|"
			}
			settings: {
				client: "client_demo"
				context: "HOTELTEST"
				testMode: true
				timeout: 5000
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
						hoursBefore
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
}
`
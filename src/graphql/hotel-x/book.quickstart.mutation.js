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
				supplierCode
				accessCode
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
		"optionRefId": "31[a1[b270528[c270529[d1[e14[f0[gES[hES[ies[jEUR[k0[l2[m1[n14[o0[p1[x26060753[M79[N0[Ofalse[PUSD[Q[R0[S[T[z1|30#30|1|2027-05-28|1|5747340|5747342|14|11|0[A2269[B2269[C30|30[EDouble Standard[FDouble Standard[G1[U96[V2[WUSD[X79[Y2027-05-23T10:00:00Z[Z0[U72[V2[WUSD[X158[Y2027-05-24T10:00:00Z[Z0[H1[I1|30#30|1|2027-05-28|1|5747340|5747342|14|11|0[J1[K1[L1[H701[I3ada5eb8-3d84-41fb-8006-c202719033a1[J0[K0[L0[H704[IClBSAAgBEiQIYBjIBiEAAAAAAMBTQCoUMjAyNy0wNS0yM1QxMDowMDowMFoSJAhIGMgGIQAAAAAAwGNAKhQyMDI3LTA1LTI0VDEwOjAwOjAwWhILCNaH8LKQpJo+EAUiFwjIBhkAAAAAAMBTQCEAAAAAAMBTQCgB[J0[K1[L0[tOK[uConnectors[v0[w[yPACKAGE[",
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
		"rooms": [
			{
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
		]
	},
	"settings": {
		"client": "client_demo",
		"testMode": true,
		"timeout": 60000
	}
}`
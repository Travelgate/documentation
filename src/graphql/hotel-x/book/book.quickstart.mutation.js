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
		"optionRefId": "31[a1[b270528[c270529[d101930[e3[f0[gES[hES[ien[jEUR[k0[l2[mBR1518[n19[nTGX[o0[p1[x18111437[M100[N3[Ofalse[PEUR[Q[R0[S[T[z1|30#30|101930|2027-05-28|1|7556761|7591854|3|11|0[A116216[Bprmsu---Aw--1k-[C30|30[EPremium Suite Jacuzzi 1 King Bed[Fsuite premium with jacuzzi and king bed[G1[U48[V2[WEUR[X97[Y2027-05-25T10:00:00Z[Z1[H1[I1|30#30|101930|2027-05-28|1|7556761|7591854|3|11|0[J1[K1[L1[H2[IES[J0[K1[L0[H20[I100[J0[K1[L0[H21[I100[J0[K1[L0[H701[I9fd880ca-650c-41e7-af8f-4eefeb865ea6[J0[K0[L0[H704[ICixSAAgBEiYIMBjSByEAAAAAAEBYQCoUMjAyNy0wNS0yNVQxMDowMDowMFowARILCLqI2p/w4uI/EAUiFwjSBxkAAAAAAEBYQCEAAAAAAABZQCgB[J0[K1[L0[tOK[uConnectors[v0[w[yPACKAGE[q[q0[y[",
		"clientReference": "test_18112026_2",
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
		"client": "<YOUR_CLIENT>",
		"testMode": true,
		"timeout": 60000
	}
}`
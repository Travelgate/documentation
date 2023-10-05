export const metadataQuery = 
`query ($criteria: HotelXMetadataQueryInput!) {
	hotelX {
		metadata(criteria: $criteria) {
			adviseMessage {
				code
				level
				description
			}
			edges {
				node {
					code
					adviseMessage {
						code
						level
						description
					}
					metadataData {
						supplierCode
						search {
							destinations {
								maxNumberHotels {
									reviewDate
									value
								}
								recommendedNumberHotels {
									reviewDate
									value
								}
							}
							allowsCurrency {
								reviewDate
								value
							}
							implementsCombination {
								reviewDate
								value
							}
							numMarketsAllowed {
								reviewDate
								value
							}
							release {
								reviewDate
								value
							}
							minimumStay {
								reviewDate
								value
							}
							maxStay {
								reviewDate
								value
							}
							roomCandidates {
								maxNumberRoomCandidates {
									reviewDate
									value
								}
								paxTypeRangeInRoomCandidates {
									reviewDate
									candidates {
										min
										max
										type
									}
								}
								maxPaxInRoomCandidates {
									reviewDate
									value
								}
								maxPaxInAllRooms {
									reviewDate
									value
								}
								requiredRoomWithSamePaxConfiguration {
									samePaxAge {
										reviewDate
										value
									}
									samePaxNumber {
										reviewDate
										value
									}
								}
								rateRules {
									reviewDate
									value
								}
								beds {
									informNumberOfUnits {
										reviewDate
										value
									}
									informSharedBed {
										reviewDate
										value
									}
									informBedType {
										reviewDate
										value
									}
									informNumberOfBeds {
										reviewDate
										value
									}
								}
								ageRange {
									reviewDate
									ages {
										min
										max
										type
									}
								}
							}
							informBindingPrice {
								reviewDate
								value
							}
							informCancelPolicies {
								reviewDate
								value
							}
							informRoomCancelPolicies {
								reviewDate
								value
							}
							informRemarks {
								reviewDate
								value
							}
							paymentTypes {
								reviewDate
								value
							}
							languages {
								reviewDate
								value
							}
							informDailyPrice {
								reviewDate
								value
							}
							informDailyRatePlan {
								reviewDate
								value
							}
							informPromotions {
								reviewDate
								value
							}
							informNRFRateByRoom {
								reviewDate
								value
							}
							informSurcharges {
								reviewDate
								value
							}
							informRoomSurcharges {
								reviewDate
								value
							}
							informHotelName {
								reviewDate
								value
							}
							requiredNationality {
								reviewDate
								value
							}
						}
						quote {
							informBindingPrice {
								reviewDate
								value
							}
							informNRFRate {
								reviewDate
								value
							}
							informRemarks {
								reviewDate
								value
							}
							informCancelPolicies {
								reviewDate
								value
							}
							informCancelPoliciesDescription {
								reviewDate
								value
							}
							informSurcharges {
								reviewDate
								value
							}
							requiredNationality {
								reviewDate
								value
							}
						}
						book {
							allowsDeltaPrice {
								reviewDate
								value
							}
							requiredAllPassengers {
								reviewDate
								value
							}
							allowsRemarks {
								reviewDate
								value
							}
							informBillingSupplier {
								reviewDate
								value
							}
							informHotelReference {
								reviewDate
								value
							}
							informPrice {
								reviewDate
								value
							}
							requiredNationality {
								reviewDate
								value
							}
						}
						booking {
							queryableBySupplierReference {
								reviewDate
								value
							}
							queryableByClientReference {
								reviewDate
								value
							}
							queryableByCreationDate {
								reviewDate
								value
							}
							queryableByCheckinDate {
								reviewDate
								value
							}
							informHotelReference {
								reviewDate
								value
							}
							informCancelPolicies {
								reviewDate
								value
							}
							informPriceCancel {
								reviewDate
								value
							}
						}
						cancel {
							mutableBySupplierReference {
								reviewDate
								value
							}
							mutableByClientReference {
								reviewDate
								value
							}
							informPriceCancel {
								reviewDate
								value
							}
						}
						hotels {
							languages {
								reviewDate
								value
							}
						}
						destinations {
							languages {
								reviewDate
								value
							}
						}
						rooms {
							languages {
								reviewDate
								value
							}
						}
						boards {
							languages {
								reviewDate
								value
							}
						}
						categories {
							languages {
								reviewDate
								value
							}
						}
						markets {
							languages {
								reviewDate
								value
							}
						}
						currencies {
							languages {
								reviewDate
								value
							}
						}
						amenities {
							languages {
								reviewDate
								value
							}
						}
					}
					createdAt
					updatedAt
				}
			}
		}
	}
}`


export const metadataVariables = 
`{
	"criteria": {
		"supplierCodes": [
			"HOTELTEST"
		]
	}
}`






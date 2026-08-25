export const hotelsQuery = 
`query ($criteriaHotels: HotelXHotelListInput!, $token: String, $filterHotel: HotelXHotelFilterInput) {
  hotelX {
    hotels(criteria: $criteriaHotels, token: $token, filter: $filterHotel) {
      token
      count
      edges {
        node {
          createdAt
          updatedAt
          hotelData {
            hotelCode
            hotelName
            categoryCode
            chainCode
            location {
              address
              zipCode
              city
              state
              country
              coordinates {
                latitude
                longitude
              }
              airports {
                airportData {
                  code
                }
              }
            }
            contact {
              email
              telephone
              fax
              web
            }
						cardTypes
            checkIn {
              minAge
              schedule {
                startTime
                endTime
              }
              instructions {
                language
                text
              }
              specialInstructions {
                language
                text
              }
            }
            checkOut {
              minAge
              schedule {
                startTime
                endTime
              }
              instructions {
                language
                text
              }
              specialInstructions {
                language
                text
              }
            }
            mandatoryFees {
              mandatoryFeeCode
              duration
              scope
              name
              text
              included
              price {
                amount
                currency
              }
            }
            descriptions {
              type
              texts {
                language
                text
              }
            }
            medias {
              type
              url
			  texts{
					language
					text
				}
            }
            allAmenities {
              edges {
                node {
                  amenityData {
                    code
                    amenityCode
                    texts {
                      language
                      text
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}`


export const hotelsVariables = 
`{
	"criteriaHotels": {
		"access": "2",
		"maxSize": 25
	},
	"token": ""
}`


export const hotelsByCountryVariables = 
`{
	"criteriaHotels": {
		"access": "34538",
		"countries": [
			"GR"
		],
		"maxSize": 5
	},
	"token": ""
}`


export const hotelsByDestinationCodeVariables = 
`{
	"criteriaHotels": {
		"access": "2",
		"destinationCodes": [
			"101402"
		],
		"maxSize": 5
	},
	"token": ""
}`


export const hotelsByHotelCodeVariables = 
`{
	"criteriaHotels": {
		"access": "34538",
		"hotelCodes": [
			"BR1518",
			"US2028"
		]
	},
	"token": ""
}`


export const hotelsFastXVariables = 
`{
	"criteriaHotels": {
		"access": "34538"
	},
	"token": ""
}`

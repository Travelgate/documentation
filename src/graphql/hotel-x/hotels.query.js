export const hotelsQuery = 
`query ($criteriaHotels: HotelXHotelListInput!, $token: String) {
	hotelX {
	  hotels(criteria: $criteriaHotels, token: $token) {
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
							  country
							  coordinates {
								  latitude
								  longitude
							  }
							  closestDestination {
								  code
								  available
								  texts {
									  text
									  language
								  }
								  type
								  parent
							  }
						  }
						  contact {
							  email
							  telephone
							  fax
							  web
						  }
						  propertyType {
							  propertyCode
							  name
						  }
						  descriptions {
							  type
							  texts {
								  language
								  text
							  }
						  }
						  medias {
							  code
							  url
						  }
						  rooms {
							  edges {
								  node {
									  code
									  roomData {
										  code
										  roomCode
										  allAmenities {
											  edges {
												  node {
													  amenityData {
														  code
														  amenityCode
													  }
												  }
											  }
										  }
									  }
								  }
							  }
						  }
						  allAmenities {
							  edges {
								  node {
									  amenityData {
										  code
										  amenityCode
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
		"access": "2",
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
		"access": "2",
		"hotelCodes": [
			"1",
			"2"
		]
	},
	"token": ""
}`

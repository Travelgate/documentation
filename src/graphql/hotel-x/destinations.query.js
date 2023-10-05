export const destinationsQuery = 
`query ($criteria: HotelXDestinationListInput!, $token: String) {
	hotelX {
	  destinations(criteria: $criteria, token: $token) {
			  token
			  edges {
				  node {
					  createdAt
					  updatedAt
					  destinationData {
						  code
						  available
						  destinationLeaf
						  closestDestinations
						  parent
						  type
						  texts {
							  language
							  text
						  }
					  }
				  }
			  }
		  }
	  }
  }`


export const destinationsVariables = 
`{
	"criteria": {
		"access": "2",
		"maxSize": 15
	},
	"token": ""
}`


export const destinationsByDestinationCodeVariables = 
`{
	"criteria": {
		"access": "2",
		"maxSize": 15,
		"destinationCodes": [
			"ES"
		]
	},
	"token": ""
}`

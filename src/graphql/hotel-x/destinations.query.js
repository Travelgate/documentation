export const destinationsQuery = 
`query ($criteria: HotelXDestinationListInput!, $relay: RelayInput!, $token: String) {
	hotelX {
	  destinations(criteria: $criteria, relay: $relay, token: $token) {
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
	"token": "",
	"relay": {}
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
	"token": "",
	"relay": {}
}`

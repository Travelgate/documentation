export const roomsQuery = 
`query ($criteria: HotelXRoomQueryInput!, $token: String) {
	hotelX {
	  rooms(criteria: $criteria, token: $token) {
			  edges {
				  node {
					  createdAt
					  updatedAt
					  roomData {
						  roomCode
						  texts {
							  text
							  language
						  }
						  views {
							  viewCode
							  texts {
								  text
								  language
							  }
						  }
						  medias {
							  code
							  url
							  texts {
								  text
								  language
							  }
						  }
						  beds {
							  type
							  count
							  shared
						  }
					  }
				  }
			  }
		  }
	  }
  }`


export const roomsVariables = 
`{
	"criteria": {
		"access": "2",
		"maxSize": 15
	},
	"token": ""
}`


export const roomsByRoomCodeVariables = 
`{
	"criteria": {
		"access": "2",
		"maxSize": 15,
		"roomCodes": [
			"2269"
		]
	},
	"token": ""
}`

export const boardsQuery = 
`query ($criteria: HotelXBoardQueryInput!) {
	hotelX {
		boards(criteria: $criteria) {
			edges {
				node {
					createdAt
					updatedAt
					boardData {
						boardCode
						texts {
							text
							language
						}
					}
				}
			}
		}
	}
}`


export const boardsVariables = 
`{
	"criteria": {
		"access": "5647"
	}
}`

export const boardsFastXVariables = 
`{
	"criteria": {
		"access": "34538"
	}
}`

export const boardsByBoardCodeVariables = 
`{
	"criteria": {
		"access": "2",
		"boardCodes": [
			"12",
			"256"
		]
	}
}`



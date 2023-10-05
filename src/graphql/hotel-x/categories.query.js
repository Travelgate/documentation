export const categoriesQuery = 
`query ($criteria: HotelXCategoryQueryInput!) {
	hotelX {
	  categories(criteria: $criteria) {
			  edges {
				  cursor
				  node {
					  createdAt
					  updatedAt
					  categoryData {
						  categoryCode
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


export const categoriesVariables = 
`{
	"criteria": {
		"access": "2"
	}
}`


export const categoriesByCategoryCodeVariables = 
`{
	"criteria": {
		"access": "2",
        "categoryCodes" : [
            "4",
            "5"
        ]
	}
}`



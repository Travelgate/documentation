export const allAccessesListQuery = 
`{
	admin {
		allAccesses {
			edges {
				node {
					accessData {
						name
						isActive
						code
					}
				}
			}
		}
	}
}`


export const allAccessesDetailQuery = 
`{
	admin{
	  allAccesses{
		edges{
		  node{
			accessData{
			  name
			  isActive
			  code
			  supplier{
				supplierData{
				  code
				  name
				  isActive
				  provider{
					code
					name
					isActive
				  }
				  context
				}
			  }
			  isTest
			  user
			  password
						  urls{
							  generic
							  search
							  quote
							  book
						  }
			  parameters{
				key
				value
			  }
			}
		  }
		}
	  }
	}
  }`




export const allOrganizationsListQuery = 
`query {
	admin {
		allOrganizations(where: {code_in: "code_org"}) {
			edges {
				node {
					organizationsData {
						code
						isActive
						owner {
							code
						}
					}
				}
			}
		}
	}
}`

export const allOrganizationsListQuery = 
`query($where: OrganizationsWhereInput) {
	admin {
		allOrganizations(where: $where) {
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

export const allOrganizationsListVariables = `{
  "where": {
    "code_in": ["code_org"]
  }
}`

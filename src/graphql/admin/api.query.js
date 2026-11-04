export const apiByCodeQuery =
`query($where: APIWhereUniqueInput!) {
	admin {
		api(where: $where) {
			adviseMessage {
				code
				description
				level
			}
			apiData {
				code
				label
				errorCatalog {
					code
					description
					type
					level
				}
				operations {
					edges {
						node {
							operationData {
								code
								label
								types
							}
						}
					}
				}
			}
		}
	}
}`

export const apiByCodeVariables = `{
  "where": {
    "searchBy": "CODE",
    "search": "hotel"
  }
}`
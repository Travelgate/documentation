export const apiByCodeQuery =
`{
	admin {
		api(where: {searchBy: CODE, search: "hotel"}) {
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
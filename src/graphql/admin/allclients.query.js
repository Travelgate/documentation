export const allClientsListQuery =
    `query {
	admin {
		allClients {
			edges {
				node {
					clientData {
						name
					}
				}
			}
		}
	}
}`
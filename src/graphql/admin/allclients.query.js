export const allClientsListQuery =
    `{
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
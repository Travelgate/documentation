export const allSuppliersListQuery =
`query {
	admin {
		allSuppliers {
			edges {
				node {
					supplierData {
						code
						name
						isActive
					}
				}
			}
		}
	}
}`
export const allSuppliersListQuery =
`{
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
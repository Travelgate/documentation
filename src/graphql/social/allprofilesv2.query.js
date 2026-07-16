export const allProfilesV2ListQuery = 
`query {
  social {
    allProfilesV2(where: {ownerCode: {equals: "example-owner"}}) {
      edges {
        node {
          profileData {
            name
            owner {
              code
            }
            websiteUrl
            sellerIntegrationType
            buyerIntegrationType
            buyerCategory
            sellerCategory
            buyerSubCategory
            sellerSubCategory
          }
        }
      }
    }
  }
}`

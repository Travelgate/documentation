export const allProfilesV2ListQuery = 
`query($where: ProfileWhereInput) {
  social {
    allProfilesV2(where: $where) {
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

export const allProfilesV2ListVariables = `{
  "where": {
    "ownerCode": {
      "equals": "example-owner"
    }
  }
}`

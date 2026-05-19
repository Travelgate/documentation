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
            status
            order
            slug
            country
            description
            classifications
            websiteUrl
            mainMarkets
            buyerPartnerStatus
            sellerPartnerStatus
            sellerIntegrationType
            buyerIntegrationType
            buyerOrgType
            sellerOrgType
            buyerKeyContacts {
              email
              contactType
            }
            sellerKeyContacts {
              email
              contactType
            }
            buyerCategory
            sellerCategory
            buyerSubCategory
            sellerSubCategory
            isDemandBridge
            isSupplyBridge
            buyerLifecycleStage
            sellerLifecycleStage
          }
        }
      }
    }
  }
}`

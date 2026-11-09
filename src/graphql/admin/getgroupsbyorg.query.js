export const getGroupsByOrgQuery =
`query getGroupsByOrg {
  admin {
    allGroups(orgCode: "<orgBuyerCode>", codeStartsWith: "HotelX") {
      adviseMessage {
        code
        description
      }
      edges {
        node {
          code
        }
      }
    }
  }
}`

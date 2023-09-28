export const testQuerySampleA = `
    query {
      hotelX {
        hotels(criteria: {access: 1}, relay: {}) {
          edges {
            node {
              hotelData {
                hotelName
                hotelCode
                categoryCode
              }
            }
          }
        }
      }
    }
`
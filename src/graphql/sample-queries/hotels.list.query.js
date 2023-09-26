export const hotelsListQuerySampleA = `
    query {
      hotelX {
        hotels(criteria: {access: 7245}, relay: {}) {
          edges {
            node {
              hotelData {
                hotelName
                hotelCode
                categoryCode
                location {
                  city
                  country
                  coordinates {
                    latitude
                    longitude
                  }
                }
              }
            }
          }
        }
      }
    }
`
export const hotelsListQuerySampleA = `query($criteria: HotelXHotelListInput!) {
  hotelX {
    hotels(criteria: $criteria) {
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
}`;

export const hotelsListQuerySampleAVariables = `{
  "criteria": {
    "access": "34538"
  }
}`;
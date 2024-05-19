export const hotelsMasterQuery = 
`query($criteria: InventoryHotelMasterFilterInput) {
    inventory {
      hotelsMaster(hotelsMasterFilterInput: $criteria) {
        hotels {
          id
          name
          hotelCode
          contextCode
          email
          phones
          fax
          address
          postalCode
          latitude
          longitude
          category {
            id
            name
          }
          locality {
            id
            name
            countryCode
          }
        }
        success
        adviseMessages {
            code
            description
            level
            external{
              code
              message
            }
        }
      }
    }
}`

export const hotelsMasterSearchQuery = 
`query($criteria: InventoryHotelsMasterSearchFilterInput) {
    inventory {
      searchHotelsMaster(hotelsMasterSearchFilterInput: $criteria) {
        hotels {
          id
          name
          hotelCode
          contextCode
          email
          phones
          fax
          address
          postalCode
          latitude
          longitude
          category {
            id
            name
          }
          locality {
            id
            name
            countryCode
          }
        }
        success
        adviseMessages {
            code
            description
            level
            external{
              code
              message
            }
        }
      }
    }
}`

export const hotelsMasterByHotelCodesVariables = 
`{
    "criteria":{
        "hotelCodes": ["1"],
        "contextCode": "TGX_PUSH"
    }
}`

export const hotelsMasterByContextCodeVariables = 
`{
    "criteria":{
        "contextCode": "TGX_PUSH"
    }
}`


export const hotelsMasterByCountryCodeVariables = 
`{
    "criteria":{
        "countryCode": "ES"
    }
}`

export const hotelsMasterByLocalityIdVariables = 
`{
    "criteria":{
        "localityId": 31104
    }
}`

export const hotelsMasterSearchVariables =
`{
    "criteria":{ 
        "geoCoordinates": {
            "latitude": 39.63683121527604,
            "longitude": 2.6315027423287223,
            "radiusKm": 10
        }
    }
}`

export const hotelsMasterSearchHotelNameVariables =
`{
    "criteria":{ 
        "geoCoordinates": {
            "latitude": 39.63683121527604,
            "longitude": 2.6315027423287223,
            "radiusKm": 10
        },
        "hotelName": "mar"
    }
}`
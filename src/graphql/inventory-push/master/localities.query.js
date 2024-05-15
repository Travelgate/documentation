export const localitiesQuery = 
`query($criteria: InventoryLocalitiesFilterInput){
    inventory {
      localities(localitiesFilterInput: $criteria) {
        localities {
          name
          countryCode
          id
          unLocode
        }
      }
    }
}`

export const localitiesSearchQuery = 
`query($criteria: InventoryLocalitiesSearchFilterInput) {
    inventory {
      searchLocalities(localitiesSearchFilterInput: $criteria) {
        localities {
          name
          countryCode
          id
          unLocode
        }
      }
    }
}`

export const localitiesVariables = 
`{
    "criteria":{
      "countryCodes": []
    }
}`


export const localitiesByCountryCodesVariables = 
`{
    "criteria":{
        "countryCodes": ["ES"]
    }
}`

export const localitiesSearchVariables =
`{
    "criteria":{ 
      "localityName": "Washington",
      "countryCode": "US"
    }
}`
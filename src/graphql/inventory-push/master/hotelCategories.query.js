export const hotelCategoriesQuery = 
`query($criteria: InventoryHotelCategoriesFilterInput!) {
    inventory {
      hotelCategories(hotelCategoriesFilterInput: $criteria) {
        categories {
          id
          name
        }
      }
    }
}`


export const hotelCategoriesVariables = 
`{
  "criteria":{}
}`


export const hotelCategoriesByCategoryIdsVariables = 
`{
    "criteria":{
      "categoryIds": [1, 2, 3, 4, 5, 6, 7, 19, 20]
    }
}`
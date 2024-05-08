export const mealplansQuery = 
`query {
    inventory {
      mealPlans {
        mealPlans {
          name
          code
        }
      }
    }
}`
export const mealplansQuery = 
`query {
    inventory {
      mealPlans {
        mealPlans {
          name
          code
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
export const chainsQuery =
`query ($criteria: HotelXChainQueryInput!) {
  hotelX {
    chains(criteria: $criteria) {
      edges {
        node {
          createdAt
          updatedAt
          chainData {
            chainCode
            texts {
              text
              language
            }
          }
        }
      }
    }
  }
}`

export const chainsVariables =
`{
  "criteria": {
    "access": "2"
  }
}`

export const chainsFastXVariables =
`{
  "criteria": {
    "access": "34769"
  }
}`

export const chainsByChainCodeVariables =
`{
  "criteria": {
    "access": "34769",
    "chainCodes": [
      "RIUHOTELS",
      "MC"
    ]
  }
}`

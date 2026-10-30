export const activationsQuery =
`query Activations($data: ActivationReadInput!) {
  activation {
    activations(data: $data) {
      edges {
        node {
          code
          activationData {
            access { code }
            buyer { code }
            seller { code }
            status
          }
        }
      }
      totalCount
    }
  }
}`

export const activationsVariables =
`{
  "data": {
    "organizationBuyerCode": "BUYER_ORG_CODE",
    "organizationSellerCode": "SELLER_ORG_CODE"
  }
}`

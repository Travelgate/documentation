export const activationConnectMutation =
`mutation Connect($data: ActivationConnectInput!) {
  activation {
    connect(data: $data) {
      code
      activationData {
        access { code }
        buyer { code }
        seller { code }
        status
      }
      adviseMessage {
        code
        level
        description
        correlationID
      }
    }
  }
}`

export const activationConnectVariables =
`{
  "data": {
    "organizationBuyerCode": "BUYER_ORG_CODE",
    "notificationEmail": ["ops@example.com"],
    "accessConfiguration": {
      "supplier": "SUPPLIER_CODE",
      "name": "SUPPLIER_ACCESS_NAME",
      "user": "SUPPLIER_USER",
      "password": "SUPPLIER_PASSWORD",
      "isTest": false,
      "urls": {
        "generic": "https://api.supplier.com",
        "search": "https://api.supplier.com/search",
        "quote": "https://api.supplier.com/quote",
        "book": "https://api.supplier.com/book"
      },
      "parameters": [
        { "key": "PARAM_KEY", "value": "PARAM_VALUE" }
      ]
    }
  }
}`

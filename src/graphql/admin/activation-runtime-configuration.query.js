export const runtimeConfigurationQuery =
`query RuntimeConfiguration($supplierCode: ID!) {
  hotelX {
    runtimeConfiguration(supplierCode: $supplierCode) {
      hotelRuntimeConfigurationData {
        hotelRuntimeParameters {
          key
          mandatory
          type
          defaultValue
          possibleValues
          pattern
          patternDescription
        }
      }
      adviseMessage {
        code
        description
        level
      }
    }
  }
}`

export const runtimeConfigurationVariables =
`{
  "supplierCode": "SUPPLIER_CODE"
}`

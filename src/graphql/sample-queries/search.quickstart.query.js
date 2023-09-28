export const searchQuickStartQuery = `
query {
  hotelX {
    search(
      criteria: { 
        checkIn: "2023-09-28",
        checkOut: "2023-09-29",
        occupancies: [{ paxes: [{age: 30}, {age: 30}] }],
        hotels: ["1"],
        currency: "EUR",
        markets: "ES",
        language: "es",
        nationality: "ES"
      },
      settings: {
        client: "client_demo",
        context: "HOTELTEST",
        auditTransactions: false,
        testMode: true,
        timeout: 25000
      },
      filterSearch: {
        access: {
          includes: ["2"]
        }
      }) {
           context
      errors{
        code
        type
        description
      }
      warnings{
        code
        type
        description
      }
      options {
        id
        accessCode
        supplierCode
        hotelCode
        hotelName
        boardCode
        paymentType
        status
        occupancies {
          id
          paxes {
            age
          }
        }
        rooms {
          occupancyRefId
          code
          description
          refundable
          roomPrice {
            price {
              currency
              binding
              net
              gross
              exchange {
                currency
                rate
              }
            }
            breakdown {
              price {
                currency
                binding
                net
                gross
                exchange {
                  currency
                  rate
                }
                markups {
                  channel
                  currency
                  binding
                  net
                  gross
                  exchange {
                    currency
                    rate
                  }
                  rules {
                    id
                    name
                    type
                    value
                  }
                }
              }
            }
          }
          beds {
            type
            count
          }
          ratePlans {
            code
          }
        }
        price {
          currency
          binding
          net
          gross
          exchange {
            currency
            rate
          }
          markups {
            channel
            currency
            binding
            net
            gross
            exchange {
              currency
              rate
            }
            rules {
              id
              name
              type
              value
            }
          }
        }
        supplements {
          code
          name
          description
          supplementType
          chargeType
          mandatory
          durationType
          quantity
          unit
          resort {
            code
            name
            description
          }
          price {
            currency
            binding
            net
            gross
            exchange {
              currency
              rate
            }
            markups {
              channel
              currency
              binding
              net
              gross
              exchange {
                currency
                rate
              }
            }
          }
        }
        surcharges {
          chargeType
          description
          price {
            currency
            binding
            net
            gross
            exchange {
              currency
              rate
            }
            markups {
              channel
              currency
              binding
              net
              gross
              exchange {
                currency
                rate
              }
            }
          }
        }
        rateRules
        cancelPolicy {
          refundable
          cancelPenalties {
            hoursBefore
            penaltyType
            currency
            value
          }
        }
        remarks
      }
    }
  }
}
`
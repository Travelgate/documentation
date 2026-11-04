export const mizeQuickStartQuery = 
`query ($criteriaQuote: HotelCriteriaQuoteInput!, $settings: HotelSettingsInput) {
  hotelX {
    quote(criteria: $criteriaQuote, settings: $settings) {
      auditData {
        transactions {
          request
          response
        }
        timeStamp
      }
      optionQuote {
        optionRefId
        status
        hotelCode
        boardCode
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
        surcharges {
          code
          mandatory
          chargeType
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
          description
        }
        cancelPolicy {
          refundable
          cancelPenalties {
            deadline
            penaltyType
            currency
            value
          }
        }
        rooms {
          occupancyRefId
          legacyRoomId
          code
          supplierCode
          description
          features {
            code
          }
        }
        cardTypes
        remarks
        paymentType
      }
      errors {
        code
        type
        description
      }
      warnings {
        code
        type
        description
      }
      apps {
        requote {
          appSupplierCode
          options {
            savings {
              value
              currency
            }
            optionQuote {
              optionRefId
              boardCode
              accessCode
              hotelCode
              hotelCodeSupplier
              supplierCode
              status
              paymentType
              price {
                currency
                binding
                net
                gross
                
              }
              surcharges {
                chargeType
                mandatory
                price {
                  currency
									binding
									net
									gross
									
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
                description
              }
              cancelPolicy {
                refundable
                cancelPenalties {
                  deadline
									currency
									value
                }
              }
              rooms {
                occupancyRefId
                legacyRoomId
                code
                supplierCode
                description
                features {
                  code
                }
              }
              cardTypes
              remarks
            }
          }
        }
      }
    }
  }
}`

export const mizeQuickStartVariables = 
`{
	"criteriaQuote": {
		"optionRefId": "33!~|a0!~|b270528!~|c270529!~|d1!~|e14!~|f0!~|gES!~|hES!~|ien!~|jEUR!~|k0!~|l42021!~|mES284122!~|n14!~|nTGX!~|o0!~|p1!~|x28101610!~|r!~|sBARRF!~|M122!~|N0!~|Ofalse!~|PEUR!~|Q!~|R0!~|S!~|T!~|z1|30#30|1|2027-05-28|1|4247163|4247164|14|11|0!~|A5683!~|Bdesu----d--!~|C30|30!~|EDeluxe Double Suite!~|FDouble Suite Deluxe!~|G1!~|U2,115.90,1810548000|2,122,1811239200!~|H1!~|I1|30#30|1|2027-05-28|1|4247163|4247164|14|11|0!~|J1!~|K1!~|L1!~|H2!~|IES!~|J1!~|K0!~|L1!~|H703!~|I1#3@#!~|J0!~|K1!~|L0!~|H710!~|I244!~|J0!~|K0!~|L0!~|H708!~|I2816ca56-2b01-47dc-958d-837dbe4bde88!~|J0!~|K0!~|L0!~|tOK!~|uConnectors!~|v0!~|w!~|yPACKAGE!~|q!~|q0!~|y!~|"
	},
	"settings": {
		"client": "client_demo",
		"testMode": false,
		"timeout": 5000
	}
}`

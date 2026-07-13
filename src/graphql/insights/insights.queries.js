// bookingsReport
export const bookingsReportQuery = `query BookingsReportExample {
  insights {
    bookingsReport(
      where: {
        requestMode: BUYER
        bookingAt: {
          gte: "2026-06-01 00:00:00"
          lte: "2026-06-30 23:59:59"
        }
        clientCode_in: ["client_demo"]
        supplierCode_in: ["SUPPLIER_CODE"]
        marketCode_in: ["ES"]
        countryCode_in: ["PT"]
        bookingStatus_in: [OK, CANCELLED]
      }
      orderBy: amountEur_DES
      groupBy: [clientCode, supplierCode, bookingAt]
      limit: 50
    ) {
      bookingsDetails {
        edges {
          node {
            InsightsXBookingDetailData {
              reference {
                client
                supplier
                hotel
              }
              hotel {
                bookingDate
                start
                end
                hotelCode
                hotelName
              }
              status
              price {
                net
                gross
                exchange {
                  currency
                  rate
                }
              }
            }
          }
        }
      }
      bookingsAggregation {
        edges {
          node {
            InsightsXBookingAggregationData {
              bookingAt
              amount
              amountEur
              numBookings
            }
          }
        }
      }
    }
  }
}`;

export const bookingsReportVariables = `{}`;


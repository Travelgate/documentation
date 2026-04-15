// 1. getLogs
export const getLogsQuery = `query getLogs($input: LoggingLogsWhereInput!) {
  logging {
    getLogs(limit: 1000, where: $input) {
      totalCount
      adviseMessage {
        code
        description
        level
      }
      edges {
        node {
          logData {
            timestamp
            execTime
            api
            buyer { code }
            seller { code }
            access {
              accessData { code }
            }
            client {
              clientData { name code }
            }
            errorCode
            errorType
            operationCode
            operationType
            sessionID
            trafficType
            files {
              hotelX
              legacy
              connector
              connectorUnencrypted
            }
          }
        }
      }
    }
  }
}`;

export const getLogsVariables = `{
  "input": {
    "api": "hotel",
    "timeRange": {
      "absolute": {
        "from": "2026-04-14 09:38:00",
        "to": "2026-04-14 10:38:00"
      }
    },
    "mode": "BUYER",
    "errorCode_in": [0, 102],
    "operationType_in": ["BOOKING"],
    "buyer_in": ["BUYER_CODE"],
    "seller_in": ["SELLER_CODE"]
  }
}`;

// 2. getLogsByReference
export const getLogsByRefQuery = `query getLogsByRef($where: LoggingLogsByReferenceWhereInput!) {
  logging {
    getLogsByReference(where: $where) {
      edges {
        node {
          logData {
             sessionID
             timestamp
             operationType
             files {
               hotelX
               legacy
               connector
             }
          }
        }
      }
    }
  }
}`;

export const getLogsByRefVariables = `{
  "where": {
    "api": "hotel",
    "mode": "BUYER",
    "timeRange": {
      "absolute": {
        "from": "2026-04-14 00:00:00",
        "to": "2026-04-15 00:00:00"
      }
    },
    "reference": {
      "client": "YOUR_LOCATOR_HERE"
    }
  }
}`;

// 3. getQuoteLogsFromBook
export const getQuoteLogsFromBookQuery = `query getQuoteLogsFromBook($input: LoggingQuoteLogFromBookInput!) {
  logging {
    getQuoteLogsFromBook(where: $input) {
      adviseMessage {
        code
        description
        correlationID
        level
        external {
          code
          message
        }
      }
      logData {
        files {
          legacy
          hotelX
          connector
        }
      }
    }
  }
}`;

export const getQuoteLogsFromBookVariables = `{
  "input": {
    "timeRange": {
      "absolute": {
        "from": "2026-04-14 00:00:00",
        "to": "2026-04-15 00:00:00"
      }
    },
    "sessionId": "9ffb5416-249f-4916-b9f0-88c2198804dc",
    "buyer": "BUYER_CODE",
    "seller": "SELLER_CODE",
    "mode": "BUYER",
    "api": "hotel"
  }
}`;
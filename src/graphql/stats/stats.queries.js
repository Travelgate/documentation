// 1. getAggregationStats 
export const getAggregationStatsQuery = `query getAggregatedStats($where: StatsAggregationConnectionWhereInput!, $groupBy: StatsAggregationConnectionGroupByInput!) {
  stats {
    getAggregationStats(where: $where, groupBy: $groupBy) {
      totalCount
      adviseMessage {
        code
        description
        level
      }
      edges {
        node {
          aggregationData {
            hits
            time
            totalTime
            errorType
            errorCode
            operationType
            operation {
              code
            }
            seller {
              code
            }
            buyer {
              code
            }
            access {
              code
            }
            client {
              clientData {
                code
                name
              }
            }
            supplier {
              code
            }
          }
        }
      }
    }
  }
}`;

export const getAggregationStatsVariables = `{
  "where": {
    "mode": "BUYER",
    "buyer_in": ["BUYER_CODE"],
    "trafficType_in": ["BASIC", "SPEED"],
    "api_in": ["hotel"],
    "excludeTestSupplier": true,
    "timeRange": {
      "absolute": {
        "from": "2026-04-14 00:00:00",
        "to": "2026-04-14 12:00:00"
      }
    }
  },
  "groupBy": {
    "data": ["OPERATION_TYPE"]
  }
}`;

// 2. RealTime
export const getRealTimeStatsQuery = `query getRealTimeStats($where: StatsRealTimeRangeWhereInput!) {
  stats {
    getRealTimeRangeStats(where: $where) {
      realTimeRangeData {
        from
        to
      }
      adviseMessage {
        code
        description
        level
      }
    }
  }
}`;

export const getRealTimeStatsVariables = `{
  "where": {
    "timeRange": {
      "absolute": {
        "from": "2026-04-14 15:00:00",
        "to": "2026-04-14 16:00:00"
      }
    },
    "groupByTime": "MINUTE"
  }
}`;
export const getAggregationStatsQuery = `query getAggregatedStats($where: StatsAggregationConnectionWhereInput!, $groupBy: StatsAggregationConnectionGroupByInput!) {
  stats {
    getAggregationStats(where: $where, groupBy: $groupBy) {
      totalCount
      edges {
        node {
          aggregationData {
            hits
            time
            totalTime
            operationType
            seller { code }
            buyer { code }
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
    "operationType_in": ["SEARCH"],
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
        "from": "2026-04-14 10:00:00",
        "to": "2026-04-14 11:00:00"
      }
    },
    "groupByTime": "MINUTE"
  }
}`;
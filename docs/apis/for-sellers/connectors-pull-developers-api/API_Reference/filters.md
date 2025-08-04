# Filters

Represents a collection of filters that can be applied to hotel Search requests.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **Status** | [StatusFilter](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/statusfilter) | Filter for hotel statuses to include or exclude specific booking statuses in the Search results. |
| **Status/Includes** | Array&lt;[Status](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/status)&gt; | The statuses to include in the response. |
| **Status/Excludes** | Array&lt;[Status](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/status)&gt; | The statuses to exclude from the response. |
| **RateRuleFilter** | [RateRuleFilter](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/raterulefilter) | Filter for rate rules to include or exclude specific rate restrictions in the Search results. |
| **RateRuleFilter/Excludes** | Array&lt;[RateRule](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/raterule)&gt; | The collection of rate rules that should be excluded from the Search results. |
| **RateRuleFilter/Includes** | Array&lt;[RateRule](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/raterule)&gt; | The collection of rate rules that should be included in the Search results. |
| **RateRuleFilter/**<br />**IncludeEmptyRateRulesOptions** | Boolean | Specifies whether options without rate rules should be included in the results when Includes is null. |

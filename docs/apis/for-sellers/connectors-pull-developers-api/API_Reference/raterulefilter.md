# RateRuleFilter

Filter for rate rules, which represent sales restrictions such as "Canary resident," "senior," etc.
This filter allows specifying which rate rules to include or exclude in Search results.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **Excludes** | Array&lt;[RateRule](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/raterule)&gt; | The collection of rate rules that should be excluded from the Search results. |
| **Includes** | Array&lt;[RateRule](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/raterule)&gt; | The collection of rate rules that should be included in the Search results. |
| **IncludeEmptyRateRulesOptions** | Boolean | Specifies whether options without rate rules should be included in the results when Includes is null. |

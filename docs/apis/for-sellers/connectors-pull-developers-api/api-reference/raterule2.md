# RateRule2

Represents a rate rule, which defines specific conditions or restrictions associated with a hotel booking option.
Rate rules may include eligibility criteria, geographical restrictions, or promotional constraints.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **RateRuleType** | [RateRule](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/raterule) | Selling restrictions applied to the room. These define specific conditions or eligibility requirements that must be met to sell the room. Possible restrictions include: |
| **Code** | String | Represents a unique identifier for the rate rule, typically defined by the supplier.This code is used to reference and distinguish the rule from others. |
| **Name** | String | Provides a human-readable name or label for the rate rule.This name is typically used in user interfaces or reports to describe the rule. |
| **Restrictions** | Array&lt;[Restriction](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/restriction)&gt; | Defines a collection of additional restrictions that further specify the conditions of the rate rule.Restrictions can include age limits, regional requirements, or special eligibility conditions. |
| **Restrictions/Code** | String | A unique identifier for the restriction. |
| **Restrictions/Name** | String | A descriptive name for the restriction. |
| **Restrictions/RestrictionType** | [RestrictionType](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/restrictiontype) | The type of the restriction, categorizing its purpose or application. |

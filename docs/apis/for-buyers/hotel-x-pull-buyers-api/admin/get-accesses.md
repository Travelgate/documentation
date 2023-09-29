---
sidebar_position: 3
---

# Get Accesses

### Simple Accesses Request

When performing a simple Admin request, the following fields will be returned for all your accesses:

* `name`
* `isActive`
* `code`

```graphql
{
  admin{
    allAccesses{
      edges{
        node{
          accessData{
            name
            isActive
            code
            }
            }
          }
        }
      }
}
```

### Advanced Accesses Request

When performing an advanced Admin request, the following fields will be returned for all your accesses:

* `name`
* `isActive`
* `code`
* `supplier`
* `isTest`
* `user`
* `password`
* `urls`
* `parameters`

```graphql
{
  admin{
    allAccesses{
      edges{
        node{
          accessData{
            name
            isActive
            code
            supplier{
              supplierData{
                code
                name
                isActive
                provider{
                  code
                  name
                  isActive
                }
                context
              }
            }
            isTest
            user
            password
						urls{
							generic
							search
							quote
							book
						}
            parameters{
              key
              value
            }
          }
        }
      }
    }
  }
}
```
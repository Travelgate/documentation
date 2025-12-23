---
sidebar_position: 14
---

# 302 Error - Hotel Not Found

## What Does a 302 Error Mean?
A **302 error** occurs when our system is unable to locate the requested hotel in your [Hotels query](/kb/connectivity-products/for-buyers/hotel-x/content/hotels) (Descriptive Info) content method.

#### Example:
```xml
<applicationErrors>
    <type>302</type>
    <description>Hotel not found</description>
    <httpStatusCode>0</httpStatusCode>
</applicationErrors>
```

## What Can I Do If I Receive a 302 Error?

1. **Verify Credentials**  
   - Ensure that your Hotel-X Access Code is active and that its [credentials](/kb/platform/app-features/connections/my-connections/managing-connections/connections-details) (user, password, URLs, etc.) match those configured by the Seller in their system.
   - If you are using our Legacy Pull Buyers API, verify that your request configurations match the access configurations associated with your credentials in [My Connections](/kb/platform/app-features/connections/my-connections/managing-connections/connections-details) and it includes the "HotelXAccessCode" parameter.
2. **Ensure Your Portfolio Is Updated**
   - Verify that your hotel portfolio is up to date. If it is outdated, update it accordingly. You can refer to the 'How can I use the ["Force update now" functionality'](/kb/platform/app-features/connections/connections-content/content-management#how-can-i-use-the-force-update-now-functionality) article.
3. **Contact the Seller**
   - Reach out to the Seller to confirm whether the property causing the error has been included in the portfolio generated for your account.
4. **Seek Assistance**
   - If the issue persists after checking the above steps, contact our [Customer Support team](https://app.travelgate.com/support). We are here to assist you!

---
sidebar_position: 3
---

# Content Discrepancies

### Why Am I Not Receiving the Expected Content from a Seller?

There are a few possible reasons why you may not be receiving the expected content from a Seller:

1. **Content Has Not Been Updated**: If your content hasn’t been updated yet, you can review and manage your content using our "Force Update Now" Functionality. [Learn more here](/kb/platform/app-features/connections/connections-content/content-management).
   
2. **Zero Hotels in the "My Connections Content" Section**: If you see "0 hotels" or "There is no data to display," it may be due to a deactivated access or an incomplete update. In this case, use the [“Force Content Now”](/kb/platform/app-features/connections/connections-content/content-management#how-can-i-use-the-force-update-now-functionality) tool to manually refresh your content. If you've reactivated an access that was previously deactivated, it will show 0 properties until the next scheduled update or until you manually trigger an update.

   - **Note**: Content updates are only processed for [active accesses](/kb/platform/app-features/connections/my-connections/managing-connections/connections-details#what-can-i-find-in-my-connections) on the platform.

3. **Missing Mandatory Fields from the Seller**: If the Seller has not provided certain required fields, some content (e.g., hotels or destinations) might be excluded.

4. **Seller Has Not Sent Specific Items**: It's also possible that the Seller simply has not provided the particular content you're expecting.

### How Can I Manage This Discrepancy?

If you're experiencing discrepancies in the content you're receiving, try the following steps:

1. **Reach Out to the Seller**: Confirm that the Seller is sending all the necessary information, including any required fields for integration.

2. **Force an Update**: If the issue persists, try [forcing an update](/kb/platform/app-features/connections/connections-content/content-management#how-can-i-use-the-force-update-now-functionality) to refresh your content.

3. **Open a Case with Support**: If the problem continues after forcing an update, you can [open a case](/kb/platform/support-portal/case-guidelines) with our Customer Support Team for further assistance.

### What Should I Do if I Encounter an Error or an Empty Response When Downloading My Content?

If you're receiving an error or an empty response while downloading content, try these steps:

1. **Verify Your Credentials**: Ensure that the credentials in your request (e.g., Hotel-X Access Code or Legacy Configuration) are active and working properly.

2. **Check API Request Compliance**: Make sure that your request adheres to our API requirements. If you're querying hotel information for portfolios with concatenated hotel codes, ensure the codes are included with the proper concatenation. For more details, read about [concatenated hotel codes here](/kb/connectivity-products/for-buyers/hotel-x/content/hotels/#what-is-the-difference-between-hotelcode-and-hotelcodesupplier%EF%B8%8F).

3. **Consult the Error and Warning List**: Check our [list of errors and warnings](/kb/connectivity-products/for-buyers/errors-and-warnings/overview) for additional troubleshooting steps.

4. **Force an Update**: If you’re still encountering issues, try [forcing an update](/kb/platform/app-features/connections/connections-content/content-management#how-can-i-use-the-force-update-now-functionality). After the update is complete, restart the download process.

5. **Open a Case with Support**: If the error persists or if you receive an unlisted error code, [open a case](/kb/platform/support-portal/case-guidelines) with our Support Team for further investigation.

:::info Force Content Updates 
When performing a "Force Content Now" update to refresh a Seller's portfolio, keep in mind that the duration of the update depends on the **size of the content**. The update is processed through a **queue system** and will begin once it reaches its turn. This could take anywhere from a few minutes to 72 hours.

- If the update hasn't completed after 72 hours, you may attempt the update again.
- Updates within the 72-hour window are considered normal, and there’s no need to contact support until this period has passed.
- **Large updates** (e.g., updating multiple accesses for a Supplier across all Buyers) will result in a longer queue and may take additional time.

If you've followed all the steps and still do not have the most up-to-date content, feel free to [contact our Support Team](/kb/platform/support-portal/case-guidelines). We’re here to ensure you have the best possible experience!
:::

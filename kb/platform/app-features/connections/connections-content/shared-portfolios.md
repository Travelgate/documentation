---
sidebar_position: 2
---

# Shared portfolios

Shared portfolios let a Seller use one master access to synchronize a static hotel catalog and share it with multiple Buyer accesses. This avoids downloading the same hotel list separately for every Buyer.

:::info Seller view only
The **Shared portfolios** tab is available in **Connections > Connections Content** when you are viewing the platform as a Seller. It is **not available in Buyer view**, so Buyers cannot view or manage shared portfolios.  

![Connections Content in Seller view with the Shared portfolios tab highlighted](https://storage.travelgate.com/kbase/tg-sharedportfolios-seller-tab.png)
:::

## How a shared portfolio works

A shared portfolio contains one **master access** and one or more **linked accesses**:

- The master access belongs to Travelgate and uses the Seller's credentials to download the hotel's static content. It is the only access that synchronizes the portfolio.
- A linked access belongs to a Buyer and inherits the hotel's static content from the master.
- Only the static hotel catalog (Hotel List) is shared. Each Buyer access keeps its own credentials and transactional configuration, including search, booking, prices, and availability.

Each portfolio belongs to one Supplier. Only existing Buyer accesses for that same Supplier can be linked. An access can be linked to only one master at a time; master accesses cannot be linked as Buyer accesses.

## View portfolios

Open **Connections > Connections Content** and select **Shared portfolios**. The list is scoped to the currently selected organization; changing organizations loads that organization's portfolios.

![Shared portfolios tab with the Create shared portfolio button and the portfolio list](https://storage.travelgate.com/kbase/tg-sharedportfolios-list.png)

The table shows:

| Column | Description |
|---|---|
| **Portfolio name** | The master access name and code, with a status label when applicable. |
| **Connections** | Number of distinct Buyers with linked or pending accesses. |
| **Linked accesses** | Number of linked and pending Buyer accesses. |
| **Hotels** | Number of hotels in the master's catalog, when available. |
| **Last successful update** | Date and time of the last successful catalog update. |
| **Actions** | Available management actions for the portfolio. |

A dash means that the value is unavailable or there are no linked or pending accesses; it does not necessarily mean that the catalog is empty.

### Status labels

The label describes the most recent catalog download attempt:

| Label | Meaning |
|---|---|
| **Pending** | The download is queued or in progress. |
| **Error** | The most recent download attempt failed. |
| No label | There is no download in progress and the latest attempt did not fail. |

The page does not refresh automatically. Reload it or reopen the section to see an updated status.

Select a portfolio row or its expand arrow to see its linked and pending accesses. The details include the Buyer, access name and code, and the master's hotel count and last update. Only one portfolio can be expanded at a time.

## Create a shared portfolio

Select **Create shared portfolio** and complete the three steps:

1. **Portfolio details**: choose a Supplier and enter a name. The generated master name follows `shared_{supplier_code}_{name}`; for example, `shared_SUPPA_europe`.
2. **Portfolio access configuration**: enter the credentials and parameters required by the Supplier. These credentials are used only to synchronize static content, not for bookings.
3. **Link Buyer accesses**: select one or more Buyer connections and the eligible accesses to include. Selecting a connection does not automatically select its accesses.

![Create a shared portfolio and select Buyer accesses](https://storage.travelgate.com/kbase/tg-sharedportfolios-create-accesses.png)

Nothing is saved until you select **Create shared portfolio**. The platform creates the master and queues its first hotel-list download. Until that download succeeds, the selected Buyer accesses stay pending, and the portfolio's actions and unlink controls are disabled.

When creation succeeds, the message confirms that the download was queued; it does not mean that the download has finished or that the accesses are already linked. Reload the page to check the result:

- If the download succeeds, the Buyer accesses become linked and the portfolio shows the hotel count and successful update time.
- If it fails, the accesses are not linked and the portfolio shows **Error**. Review the master credentials and its catalog before linking the Buyer accesses.

If the master was created but the download request failed, retry from the same open wizard. Do not start a new wizard, which would create another master.

## Manage a portfolio

Use the portfolio's **Actions** menu to manage its accesses and master configuration.

### Add Buyer accesses

Choose **Link accesses**, select the Buyer connections and eligible accesses, and confirm with **Link accesses**. Only accesses for the portfolio's Supplier that are not already linked to another master are available.

Adding accesses links them to the existing catalog; it does not trigger a new download or change the master's credentials. If an operation partially fails, accesses already linked remain linked. Retry to link the remaining accesses.

### Edit configuration or linked accesses

Choose **Edit portfolio access configuration** to change the portfolio name, master credentials or parameters, and linked Buyer accesses. The Supplier cannot be changed. Only values that differ from the saved configuration are submitted.

Changing the master credentials does not immediately start another download; the new credentials are used for a later update. Removing linked accesses requires confirmation. Changes that succeeded before an error remain saved, so retry to apply any remaining changes.

### Unlink an access

Select the unlink control for an access in the expanded portfolio details and confirm **Yes, unlink this access**. The access stops inheriting the master's catalog and resumes independent content synchronization.

![Unlink access from shared portfolio confirmation dialog](https://storage.travelgate.com/kbase/tg-sharedportfolios-unlink-confirmation.png)

Unlinking does not delete the Buyer access or its connection, and it does not change its transactional configuration. An access cannot be unlinked while the portfolio's first download is pending. To move an access to another portfolio, unlink it first, then link it to a portfolio for the same Supplier.

### Remove a portfolio

Choose **Remove shared portfolio** to deactivate the master, if it is active, and archive it. You must unlink all Buyer accesses first; portfolios with linked or pending accesses cannot be removed. If recent traffic means deactivation could interrupt requests, the platform asks for an additional confirmation.

Removing a portfolio does not delete Buyer accesses or connections. The master is archived, not permanently deleted, and cannot be restored from this screen.

## How it appears in other sections

### Connections Content: Hotels by access

When you select a master or linked access in **Hotels by access**, the page identifies its role in the shared portfolio and provides a link to manage it:

- The **master** is the source of the catalog. **Customize hotel list** remains available and changes apply to the master catalog shared with its linked accesses.
- A **linked access** identifies the master it inherits from. Its individual hotel-list customization is disabled because it uses the shared catalog.
- An independent access continues to work as before.

The management links open the **Shared portfolios** tab.

### My Connections

In Seller view, masters and linked accesses are marked with a link icon. The master links to its portfolio in **Shared portfolios**, and each linked access shows a message identifying its master.

See [Connections Details](/kb/platform/app-features/connections/my-connections/managing-connections/connections-details) for more about the My Connections page.

## Permissions

Permissions are controlled by the **Connectivity Management** permission group:

| Action | Minimum role |
|---|---|
| View the tab and portfolio list | Access to Connections Content in a Seller organization |
| Create or remove a portfolio | Admin |
| Link accesses, edit configuration, or unlink an access | Editor |

Higher roles include the permissions of lower roles. An action can also be disabled while the first download is pending or while an operation is in progress.

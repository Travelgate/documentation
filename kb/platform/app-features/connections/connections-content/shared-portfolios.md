---
sidebar_position: 2
---

# Shared portfolios

Shared portfolios let a Seller download the static hotel catalog (Hotel List) once through a master access and share that catalog with multiple Buyer accesses. No other content or transactional configuration is shared.

:::info Seller view only
The **Shared portfolios** tab is available in **Connections > Connections Content** when you are viewing the platform as a Seller. It is **not available in Buyer view**, so Buyers cannot view or manage shared portfolios.  

![Connections Content in Seller view with the Shared portfolios tab highlighted](https://storage.travelgate.com/kbase/tg-sharedportfolios-seller-tab.png)
:::

## How a shared portfolio works

A shared portfolio contains one **master access** and its **linked accesses**:

- The master is a new access owned by Travelgate (tgx), marked as a shared-content master, and created with the Supplier's credentials. It is used only to download the Hotel List.
- A linked access belongs to a Buyer and uses the master's Hotel List instead of downloading its own.
- Each Buyer access keeps its own credentials and transactional configuration, including search, booking, prices, and availability.

Each portfolio belongs to one Supplier, which cannot be changed later. Only existing Buyer accesses for that same Supplier can be linked. An access can be linked to only one master at a time; master accesses cannot be linked as Buyer accesses.

Masters created from this screen are named `shared_{supplier_code}_{name}`, but the prefix is only a naming convention. The master is identified by its Travelgate ownership and shared-content master setting.

## View portfolios

Open **Connections > Connections Content** and select **Shared portfolios**. The list is scoped to the currently selected organization; changing organizations loads that organization's portfolios.

Only masters owned by Travelgate, marked as shared-content masters, and with the scheduler active are listed. Masters with an inactive, missing, or unknown scheduler status are not shown; this does not mean they were deleted or archived. The **Connections > Travelgate** connection is not offered when linking accesses because masters cannot be linked to other masters.

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

A dash in **Connections** or **Linked accesses** means there are no linked or pending accesses. A dash in **Hotels** means the count is missing or zero; a dash in **Last successful update** means there is no date or the first download is in progress. A dash does not by itself confirm that the catalog is empty.

### Status labels

The label describes the most recent catalog download attempt:

| Label | Meaning |
|---|---|
| **Pending** | The download is queued or in progress. |
| **Error** | The most recent download attempt failed. |
| No label | There is no download in progress and the latest attempt did not fail. |

The page does not refresh automatically. Reload it or reopen the section to see an updated status.

Select a portfolio row or its expand arrow to see its linked and pending accesses. The details include the Buyer, access name and code, and the master's hotel count and last update. Only one portfolio can be expanded at a time.

Linked accesses appear before pending accesses. Each list has its own pagination, with 10 accesses per page.

## Create a shared portfolio

Select **Create shared portfolio** and complete the three steps:

1. **Portfolio details**: choose a Supplier and enter a name. The generated master name follows `shared_{supplier_code}_{name}`; for example, `shared_SUPPA_europe`.
2. **Portfolio access configuration**: enter the required and optional credentials and parameters for the Supplier. The master is always a live access. These credentials are used only to download the Hotel List, not for bookings. If you change the Supplier in step 1, the credentials form is regenerated and must be completed again.
3. **Link Buyer accesses**: select one or more Buyer connections and the eligible accesses to include. Only Buyers with at least one eligible access appear. Selecting a connection does not automatically select its accesses; removing a Buyer also removes its selected accesses. The final button remains disabled until at least one access is selected.

![Create a shared portfolio and select Buyer accesses](https://storage.travelgate.com/kbase/tg-sharedportfolios-create-accesses.png)

Nothing is saved until you select **Create shared portfolio**. The platform creates the master and queues its first hotel-list download. Until that download succeeds, the selected Buyer accesses stay pending, and the portfolio's actions and unlink controls are disabled.

When creation and the download request succeed, the wizard closes and the message **Hotel list download queued. Accesses will be linked if it succeeds. You will receive a notification with the result.** confirms that the download was queued; it does not mean that it has finished or that the accesses are already linked. The new portfolio is shown as **Pending**, with the selected accesses listed as pending. The row is dimmed, its **Actions** menu is disabled, and accesses cannot be unlinked until the first download finishes. The page does not refresh automatically; reload it or reopen the section to check the result:

- If the download succeeds, the Buyer accesses become linked and the portfolio shows the hotel count and successful update time.
- If it fails, the accesses are not linked and the portfolio shows **Error**. The pending accesses are no longer listed. Review the master credentials, wait for a successful catalog update, then use **Link accesses**.

If master creation fails, nothing is created and the wizard stays open so you can correct the details and retry. If the master is created but the download request fails, the wizard stays open and the list reloads; retry from that same wizard, which reuses the master. You cannot return to steps 1 or 2 after the master exists. Closing the wizard does not remove the master; it remains in the list and you can finish by using **Link accesses**. Do not start a new wizard, which would create another master.

## Manage a portfolio

Use the portfolio's **Actions** menu to manage its accesses and master configuration. It includes **Link accesses**, **Edit portfolio access configuration**, **View logs**, and **Remove shared portfolio**, subject to role permissions and the portfolio state. The entire menu is disabled during the first download.

### Add Buyer accesses

Choose **Link accesses**, select the Buyer connections and eligible accesses, and confirm with **Link accesses**. Only accesses for the portfolio's Supplier that are not already linked to a master are available. Accesses already linked to this portfolio are not offered again.

Adding accesses links them to the existing catalog; it does not trigger a new download or change the master's credentials. If an operation partially fails, accesses already linked remain linked. Retry to link the remaining accesses.

### Edit configuration or linked accesses

Choose **Edit portfolio access configuration** to change the portfolio name, master credentials or parameters, and linked Buyer accesses. The Supplier cannot be changed. The name can be changed while retaining its `shared_{supplier_code}_` prefix; portfolios created before this naming convention keep their existing name format. Credentials and parameters load when you open step 2, and are not changed if you do not open that step. Only differences from the saved configuration are submitted: optional parameters cleared in the form are removed, unchecked accesses are unlinked, and newly selected accesses are linked.

Changes are applied in this order: master configuration, unlinking accesses, then linking new accesses. Changing credentials does not immediately start another download; the new credentials are used for a later update. If there are no changes, **There are no changes to save.** appears and the wizard stays open. Removing accesses requires a second confirmation with **Confirm and save**; changing the access selection clears that confirmation. All accesses can be removed while keeping the portfolio. Changes that succeeded before an error remain saved, so retry to apply any remaining changes; closing the wizard keeps saved changes and discards the rest.

### Unlink an access

Select the unlink control for an access in the expanded portfolio details. Confirm **Yes, unlink this access**, or cancel with **No, I don't want to unlink this access**. The confirmation explains that the access stops inheriting the master's catalog and resumes independent content synchronization. On success, **Shared access removed successfully.** appears and the list updates. If the operation fails, the dialog remains open so you can retry.

![Unlink access from shared portfolio confirmation dialog](https://storage.travelgate.com/kbase/tg-sharedportfolios-unlink-confirmation.png)

Unlinking does not delete the Buyer access or its connection, and it does not change its transactional configuration. An access cannot be unlinked while the portfolio's first download is pending. To move an access to another portfolio, unlink it first, then link it to a portfolio for the same Supplier.

### Remove a portfolio

Choose **Remove shared portfolio** to deactivate the master, if it is active, and archive it. You must unlink all Buyer accesses first; portfolios with linked or pending accesses cannot be removed. The disabled action explains how many child accesses must be removed. If the user lacks the required role, its help text identifies the required role. Confirm **Yes, remove shared content**. If the access had traffic in the last 7 days, the platform warns that deactivation can block that traffic and requires **Confirm deactivation and archive**. Deactivation happens before archiving.

If deactivation fails, the master remains active and the dialog stays open. If deactivation succeeds but archiving fails, the master remains inactive and unarchived; retrying only attempts the archive. On success, **Shared content archived successfully.** appears and the portfolio disappears from the list. Removing a portfolio does not delete Buyer accesses or connections. The master is archived, not permanently deleted, and cannot be restored from this screen.

## How it appears in other sections

### Connections Content: Hotels by access

When you select a master or linked access in **Hotels by access**, the page identifies its role in the shared portfolio and provides a link to manage it:

- The **master** is the source of the catalog. The **Master Shared Portfolio** notice explains that catalog customizations affect all linked accesses. **Manage linked accesses** opens Shared portfolios, and **Customize hotel list** is available.
- A **linked access** identifies the master it inherits from in a **Shared Portfolio** notice. **Manage shared portfolio** opens Shared portfolios. **Customize hotel list** is disabled, with the explanation **This access is shared, so hotel content cannot be blacklisted.**
- An independent access continues to work as before.

The management links open the **Shared portfolios** tab.

### My Connections

In Seller view, master accesses are not shown in My Connections, either in cards or in the access list. Their management actions, including **View logs**, are available from the **Shared portfolios** table. Linked Buyer accesses remain visible with their usual access actions and are marked with a link icon and an information message: **This access inherits its hotel content from shared portfolio: `{master}`.**

See [Connections Details](/kb/platform/app-features/connections/my-connections/managing-connections/connections-details) for more about the My Connections page.

## Permissions

Permissions are controlled by the **Connectivity Management** permission group:

| Action | Minimum role |
|---|---|
| View the tab and portfolio list | Access to Connections Content in a Seller organization |
| Create or remove a portfolio | Admin |
| Link accesses, edit configuration, or unlink an access | Editor |

Roles are Viewer, Editor, Admin, and Owner; each higher role includes the permissions below it. An action can also be disabled during the first download, when linked or pending accesses prevent removal, when no access is selected, or while an operation is in progress. Required-field validation also disables **Continue** in the creation steps.

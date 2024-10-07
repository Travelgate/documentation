﻿---
sidebar_position: 2
---

# Two-factor Authentication (2FA)

:::warning Important
Starting from **September 10th, 2024**, our website requires 2FA for all users. Please be advised that we are no longer liable for any issues, losses, or damages arising from the use of shared accounts. To ensure uninterrupted access and maintain security, all users must have transitioned to individual accounts by this date. Non-compliance may result in service disruptions or restricted access.
:::

### What is the Two-factor Authentication?

Two-factor authentication (2FA) is a security feature that adds an extra layer of protection to your Travelgate account. Once enabled, you will be required to enter a security code in addition to your password whenever you sign in.

This code will be newly generated each time by an authenticator application (we call it a “One-Time Password”). This is why a prerequisite is that you have an authenticator app already installed (we recommend having Google Authenticator in your phone, but this is only one of many existing apps). Some examples:
- **Mobile apps**:
   - Google Authenticator ([Android](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2) & [iOS](https://apps.apple.com/us/app/google-authenticator/id388497605)).
   - Microsoft Authenticator ([Android](https://play.google.com/store/apps/details?id=com.azure.authenticator) & [iOS](https://apps.apple.com/es/app/microsoft-authenticator/id983156458)).
   - Cisco Duo Mobile ([Android](https://play.google.com/store/apps/details?id=com.duosecurity.duomobile) & [iOS](https://apps.apple.com/us/app/duo-mobile/id422663827)).
- **Browser extensions**:
   - Google Chrome ([Chrome Extensions](https://chromewebstore.google.com/detail/authenticator/bhghoamapcdpbohphigoooaddinpkbai?pli=1)).
   - Microsoft Edge ([Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/authenticator-2fa-client/ocglkepbibnalbgmbachknglpdipeoio)).
   - Mozilla Firefox ([Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/auth-helper/?utm_source=addons.mozilla.org)).

### My authenticator app is ready. How do I start?

1. **Log into our [Portal](https://www.travelgate.com/).**

		![2FA_1](https://storage.travelgate.com/kbase/2FA_1.jpg)

2. **QR Code**: After logging in, a screen with a QR code will be displayed.  

	![2FA_2](https://storage.travelgate.com/kbase/2FA_2.jpg)
3. **Open Authenticator App**: Open your authenticator app and select the option to add a new configuration key.
4. **Scan or Manually Enter Key**:
   1. The app will usually ask if you want to scan a QR code or manually enter the configuration key. The easiest way to proceed is by scanning the QR code.
   2. If you cannot scan the QR code, click on the link "Trouble Scanning?". A new screen will appear with the configuration key for manual entry in your app.  

		![2FA_3](https://storage.travelgate.com/kbase/2FA_3.jpg)
5. **Complete Setup**:
   1. That's all you need to set up our 2FA for the first time.
   2. The next screen will confirm that everything is set up correctly and you will be redirected to your new log-in page.  

		![2FA_4](https://storage.travelgate.com/kbase/2FA_4.jpg)

### My 2FA method is set up. How can I reset it?
If you need to change your device or have lost it, it's possible to reset your 2FA method to add a new one. For more information, please refer to the support [page](/kb/account-settings/users-management/how-to-add-manage-users-to-organization).

:::info
For comprehensive guidance on how to add and manage new users in your Organization, don’t miss this [article](/kb/account-settings/users-management/how-to-add-manage-users-to-organization)!
:::

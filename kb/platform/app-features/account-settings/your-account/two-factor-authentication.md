---
sidebar_position: 3
---

# Two-Factor Authentication (2FA)

:::warning Important
Starting from **September 10th, 2024,** our website requires 2FA for all users. Please be advised that we are no longer liable for any issues, losses, or damages arising from the use of shared accounts. To ensure uninterrupted access and maintain security, all users must have transitioned to individual accounts by this date. Non-compliance may result in service disruptions or restricted access.
:::

## What Is Two-Factor Authentication?
Two-factor authentication (2FA) is a security feature that enhances account protection by requiring a secondary verification step in addition to your password when signing in.

A unique security code, known as a **One-Time Password (OTP)**, is generated each time you log in using an authenticator application. To use 2FA, you must have an authenticator app installed. We recommend **Google Authenticator**, but there are multiple options available:

### Recommended Authenticator APPs:
- **Mobile APPs:**
   - [Google Authenticator - Android](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2) | [iOS](https://apps.apple.com/us/app/google-authenticator/id388497605)
   - [Microsoft Authenticator - Android](https://play.google.com/store/apps/details?id=com.azure.authenticator) | [iOS](https://apps.apple.com/es/app/microsoft-authenticator/id983156458)
   - [Cisco Duo Mobile - Android](https://play.google.com/store/apps/details?id=com.duosecurity.duomobile) | [iOS](https://apps.apple.com/us/app/duo-mobile/id422663827)
- **Browser Extensions:**
   - [Google Chrome Extension](https://chromewebstore.google.com/detail/authenticator/bhghoamapcdpbohphigoooaddinpkbai?pli=1)
   - [Microsoft Edge Add-on](https://microsoftedge.microsoft.com/addons/detail/authenticator-2fa-client/ocglkepbibnalbgmbachknglpdipeoio)
   - [Mozilla Firefox Add-on](https://addons.mozilla.org/en-US/firefox/addon/auth-helper/?utm_source=addons.mozilla.org)

## How to Set Up Two-Factor Authentication

1. **Log into our [Platform](https://www.travelgate.com/).**

   ![2FA_1](https://storage.travelgate.com/kbase/2FA_1.jpg)

2. **Scan the QR Code**
   - After logging in, a QR code will be displayed.

   ![2FA_2](https://storage.travelgate.com/kbase/2FA_2.jpg)

3. **Open Your Authenticator APP**
   - Select the option to add a new account.

4. **Scan or Manually Enter the Key**
   - Scan the QR code with your authenticator APP.
   - If scanning is not possible, click **"Trouble Scanning?"** to manually enter the key provided.

   ![2FA_3](https://storage.travelgate.com/kbase/2FA_3.jpg)

5. **Complete Setup**
   - Once configured, a confirmation screen will appear.
   - You will then be redirected to your new login page.

   ![2FA_4](https://storage.travelgate.com/kbase/2FA_4.jpg)


## Common Issue When Signing In With 2FA

### Error message: “The credentials have expired. Looks like something went wrong. Please try logging again from the application.”

This error commonly occurs when **your computer or device's clock is not properly synchronized**. Most authenticator apps (such as Google Authenticator, Authy, etc.) rely on accurate time synchronization to generate valid 2FA codes. If your system time is out of sync with the standard time, the generated codes may be considered invalid or "expired".

#### What Can I Do If I Receive this 2FA Authentication error?  

Ensure your device's clock is **automatically synchronized** with an internet time server. Here's how to do it:
   - **Windows:** Go to Settings > Time & Language > Date & Time and enable "Set time automatically".
   - **macOS:** Go to System Preferences > Date & Time and check "Set date and time automatically".
- **Linux:** Make sure ntpd or systemd-timesyncd is enabled, depending on your distribution.

Once the time is properly synchronized, try logging in again from the application.

## How to Reset Your 2FA Method
If you need to switch devices or have lost access, you can reset your 2FA settings. For detailed steps, please see this [article](/kb/platform/app-features/account-settings/users-management/reset-user-two-factor-authentication).
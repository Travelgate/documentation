---
sidebar_position: 3
---

# Updating to TLS 1.2 or Later

## Overview

As part of our commitment to maintaining the highest levels of security and encryption for your data, Travelgate is requiring all Partners to use Transport Layer Security (TLS) version 1.2 or later when interacting with our services. By **January 31, 2025**, support for TLS versions 1.0 and 1.1 will be discontinued.

This document outlines the steps needed to update your systems to TLS 1.2 or later to ensure uninterrupted service and enhanced security.

## Why is this important?

Transport Layer Security (TLS) is a widely used protocol that secures data communication over the internet. While TLS 1.0 and 1.1 have been reliable in the past, they are now outdated and do not provide the same level of protection as newer versions.

### Key benefits
- **Improved Security**: TLS 1.2 includes stronger encryption algorithms and features like perfect forward secrecy, which provides greater data protection.
- **Compliance with Modern Standards**: Many regulatory standards and industry best practices now mandate the use of TLS 1.2 or later.
- **Future-proofing**: As older versions become deprecated, transitioning now ensures that your services remain compliant and secure in the long term.

## Recommended Actions

To ensure that your systems remain secure and your service with Travelgate continues without disruption, please follow these steps:

1. **Identify Systems Using TLS 1.0 or 1.1**  
   Review your infrastructure to determine which of your systems currently rely on TLS 1.0 or 1.1 for communication with Travelgate services. These could include APIs, websites, or other services.

2. **Update to TLS 1.2 or Later**  
   Transition any systems that still use TLS 1.0 or 1.1 to TLS 1.2 or later. This may involve updating configurations, software, or libraries that handle TLS connections.

3. **Test Your Configuration**  
   After updating, test your systems to ensure they are correctly communicating with Travelgate using TLS 1.2 or later. We recommend using tools such as [SSL Labs' SSL Test](https://www.ssllabs.com/ssltest/) to verify your TLS setup.

4. **Monitor for Security Updates**  
   Stay updated with the latest security patches and TLS improvements. Regularly review and update your TLS configurations as newer versions (like TLS 1.3) become more widely supported.

## Common Issues and Solutions

- **Older Operating Systems or Libraries**  
  Some older systems or libraries may not support TLS 1.2. In such cases, you may need to upgrade the underlying operating system, library, or API to ensure compatibility with TLS 1.2 or later.

- **Configuration Errors**  
  Misconfigurations can lead to failures when upgrading to TLS 1.2. Be sure to review documentation for any services or libraries you are using to ensure proper TLS 1.2 implementation.

- **API Clients**  
  Ensure that any API clients or third-party integrations that communicate with Travelgate are also using TLS 1.2 or later.

## Testing Your Implementation

To verify that your systems are correctly configured, you can:
- Use `openssl` to check TLS support:
  ```bash
  openssl s_client -connect yourservice.com:443 -tls1_2
  ```
- Run external tools like SSL Labs' test to ensure your services are properly supporting TLS 1.2 or later.

## Deadline

- **Final Deadline**: TLS 1.0 and 1.1 will no longer be supported after **January 31, 2025**. Systems that have not been updated to TLS 1.2 or later by this date will experience disruptions in service when connecting to Travelgate services.

## Contact Us

If you have any questions or need assistance with upgrading to TLS 1.2 or later, please contact our Support Team through the [Support Portal](https://app.travelgate.com/support).

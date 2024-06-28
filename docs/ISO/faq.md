---
sidebar_position: 4
---

# FAQs


#### Is there a security policy approved by management?
Of course! We have an ISO 27001 certification.

#### Since when have you had the certification?
The certification was approved in April 2024.

#### Are there regulations and safety procedures in relation to the use of equipment, services and facilities used for the provision of the service?
Since TravelGateX has deployed the bulk of its architecture on cloud services, these types of controls only apply to:
* **Offices**
* **Remote workstations**
We have procedures for physical and personnel controls as well as an information security policy and regulations.

#### Are information security risk analyses performed on a regular basis?
There is a risk analysis procedure in place, along with a tool to develop it. This analysis takes into account assets, threats, risks, etc.

#### Does the supplier have an information security management system (ISMS)?
TravelGateX has an ISMS certified with ISO 27K, which continuously feeds its objectives and opportunities by identifying possible points of improvement that may arise from activities such as: 
* **Internal audits**
* **Internal and external reports**

#### Are safety analyses performed on the systems, products or equipment used in providing the service?
TravelGateX has processes that have been drafted as procedures for each of the controls applied to them from Annex A of the standard.

TravelGateX also has tools that allow them to identify all points of improvement and gaps identified in a deviation log related to ISO. These deviations are transformed into goals and opportunities that TravelGateX can set out to achieve.

Following this, a risk analysis is conducted, at least annually, where security controls are proposed based on these identified deviations to mitigate or reduce them.

The aforementioned risk analysis takes into account service providers who have outsourced many elements that compose TravelGateX's ISMS.

#### Except in justified and documented cases, does each individual have an associated unique user ID?
Each internal employee has a unique identifier, which is their first name dot last name.

#### Is there appropriate segregation of duties based on the activities and functions performed by users? (e.g. "Development vs. operation" and "Configuration vs. operation").
Yes. We have defined policies and access permission procedures that allow us to control the review, deletion, modification, or proper handling of access permissions.
We have organizational procedures in place that define the processes for exchanging information, both internally and with related third parties.
Information security documents are classified according to their usage.

#### Is the assignment / modification of user permissions on access, process or storage of information carried out under the principle of minimum privilege, need to know and is duly authorized?
Of course, all permissions are granted based on the specific user's needs.

#### Do the systems used by the provider in providing the service contain at least one authentication factor?
We are currently working to implement two-factor authentication (2FA) across all our services, although we already have it implemented for some of them.

#### The solution supports Multi-factor Authentication (MFA).
It's done on-demand.

#### Are the changes announced by the manufacturer / supplier analyzed and the suitability of your application determined?
We are protected and kept up to date by using cloud services. Both Google and Azure regularly publish security patches, which are applied automatically. Furthermore, we always ensure that we are up to date to have official support. 

#### Are new versions (for example patches) of manufacturer tested out of production before application?
We are protected and kept up to date by using cloud services. Both Google and Azure regularly publish security patches, which are applied automatically. Furthermore, we always ensure that we are up to date to have official support. 

#### Do you have an easily detectable way for external researchers to report security vulnerabilities in your systems?
At Travelgate, we provide the option to get in touch via a public email address, which is included in the contracts or when signing our privacy policy.
You can send any additional information, questions, or report vulnerabilities to this email. Our team reviews these messages, categorizes them, and forwards them to the relevant department for a swift resolution.
The email address is dpo@travelgate.com.

#### The solution supports Single-Sign-On (SSO) protocols such as SAML2.0 or OAuth/OIDC and that this can be enforced as the only login method.
The OAuth system is implemented on our side, but it is not integrated with the client's OAuth (both for Buyer and Seller).

#### Are there established mechanisms for handling sensitive customer information securely?
We have a comprehensive information security policy that is available to all members of the company. This policy sets clear and specific guidelines for the proper handling of sensitive customer information. It details the protocols and procedures that must be followed to ensure the security and confidentiality of this data. Additionally, we provide regular training to our staff to ensure they are aware of best practices in information security. Our goal is to maintain a secure and protected environment for our customers' confidential information at all times.

#### If the service has been outsourced, has the required incident and disaster management strategy been established and provided?
The incident management procedure is publicly available through our Confluence platform. Similarly, an annual communication is sent to the entire company detailing all information security policies and where they are published.

#### Are intrusion detection or prevention tools (IDS/IPS) available?
In order to identify/stop intrusion attempts, TravelGateX utilizes IDS/IPS (Intrusion Detection Systems and Intrusion Prevention Systems) tools listed below. These tools compare network traffic against known signatures or behaviors associated with thousands of types of exposures (cybercriminal tools, trojans, and other malicious software) and send alerts or halt the attempt when detected. TravelGateX employs Sentinel tools for Google, Azure, and Github.

TravelGateX monitors all traffic within the perimeter of its environment and at critical points. It also keeps all intrusion detection and prevention engines, databases, and signatures updated.

#### Are there surveillance and access controls in the different areas?
We have a security control system on the doors managed through SaltoKS.

#### Are entries and exits of individuals registered in your premises?
We have a security control system on the doors managed through SaltoKS.

#### Are penetration tests performed?
To conduct penetration testing in our environment, TravelGateX has partnered with the service provider A2Secure to ensure that the methodology for performing penetration tests meets the following requirements:

* **It is based on industry-accepted penetration testing approaches (e.g., NIST SP800-115).**
* **It includes coverage of the entire perimeter of TravelGateX's ISO27001 environment and critical systems.**
* **It includes tests of both internal and external network environments.**
* **It includes tests to validate any segmentation and scope reduction controls.**
* **It defines penetration tests at the network layer to encompass components supporting network functions and operating systems.**
* **It includes review and assessment of threats and vulnerabilities occurring in the past 12 months.**
* **It specifies retention of penetration test results and corrective action outcomes.**
* **It verifies the operational effectiveness of segmentation methods, ensuring that all systems are isolated outside the scope of systems.**
The analysis conducted on external penetration testing can be found in the following report: A2SECURE - External Pen Test April 2023.pdf


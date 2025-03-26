---
sidebar_position: 3
---

# Travelgate Fixed IP Lists

### How Travelgate IPs Work with Sellers

When you partner with Travelgate as a Seller, the requests we send to your system originate from various IP addresses. Depending on your system’s configuration, these IPs can be handled in different ways:

- **No IP Filtering:** If your system does not restrict specific IP addresses, our dynamic cloud-based environment allows requests to come from different, scalable IPs that may change as needed.
- **IP Filtering:** If your system allows only specific IPs, we provide a fixed list of IP addresses. This ensures all requests consistently originate from the same IPs. Any updates to this list will be communicated promptly so you can update your system accordingly.

If you do not currently filter by IP but would like traffic to come from fixed addresses, contact our Customer Support team. We’ll assess your requirements and explore possible solutions.

### Fixed IP List for Hotel Suppliers

Below is the current list of IP addresses that Hotel Suppliers should allow (Updated on 16/12/2024):


| **IP Address**                     |   Explanation (if needed)               |  
| :--------------------------------: |  :------------------------------------: |  
| 13.94.250.159                      |                                         |  
| 23.99.178.8                        |                                         |  
| 23.100.6.214                       |                                         |  
| 23.100.57.116                      |                                         |  
| 34.21.96.120/29                    | from `34.21.96.120` to `34.21.96.127`   |  
| 35.193.109.73                      |                                         |  
| 35.192.57.119                      |                                         |  
| 40.113.198.242                     |                                         |  
| 40.118.12.91                       |                                         |  
| 52.48.131.154                      |                                         |  
| 79.98.220.55                       |                                         |  
| 95.217.46.57                       |                                         |  
| 101.46.136.21 - 101.46.136.32      | from `101.46.136.21` to `101.46.136.32` |  
| 104.43.214.41                      |                                         |  
| 104.45.18.110                      |                                         |  
| 104.45.19.173                      |                                         |  
| 104.45.23.211                      |                                         |  
| 104.155.75.74                      |                                         |  
| 104.155.96.34                      |                                         |  
| 144.76.195.49                      |                                         |  
| 146.148.17.151                     |                                         |  
| 146.148.21.32                      |                                         |  
| 172.98.36.0/27                     | from `172.98.36.0` to `172.98.36.31`    |  
| 191.233.87.117                     |                                         |  
| 216.59.58.52                       |                                         |  
| 216.59.58.248/29                   | from `216.59.58.248` to `216.59.58.255` |  
| 216.59.61.160/27                   | from `216.59.61.160` to `216.59.61.191` |
| 101.46.140.136                     |                                         |
| 101.46.142.234                     |                                         |

### Understanding IP Ranges

Some IP addresses are provided as ranges, such as `172.98.36.0/27`. These ranges encompass multiple IP addresses. If you're unfamiliar with how IP ranges work, refer to this [technical explanation](https://www.cloudflare.com/learning/network-layer/what-is-an-ip-address/).

### Fixed IP List for Inventory Push

Please add **only** these IPs (Updated on 29/10/2024):


| **IP Address**         |  
| :--------------------: |  
| 13.81.113.68           |  
| 13.94.250.159          |  
| 40.68.193.47           |  
| 40.68.197.218          |  
| 79.98.220.55           |
| 20.234.226.0           |
| 51.144.2.130           |  
| 52.148.208.57          |  
| 108.143.13.154         |

### Fixed IP List as a Channel-X Buyer
Please add **only** these IPs (Updated on 03/10/2024):

| **IP Address**         |    
| :--------------------: |  
| 13.94.250.159          | 
| 20.234.226.0           |
| 52.157.105.119         |  
| 52.178.68.49           |  
| 79.98.220.55           | 
| 108.143.13.154         |

### Fixed IP List as a Payment/VCC Supplier
Please add **only** these IPs (Updated on 29/08/2024):

| **IP Address**         |  
| :--------------------: |  
| 13.94.250.159          |   
| 74.234.224.26          |  
| 79.98.220.55           |  
| 98.71.173.241          |  
| 104.40.178.121         |  
| 108.142.130.32         |

## Does Travelgate Need to Whitelist My IPs?
At Travelgate, we ensure that all our IPs are whitelisted in your system. However, our system **does not filter by IP**, meaning there's no need for us to whitelist your IPs. If you experience connectivity issues, they are unlikely to be caused by IP filtering.
---
sidebar_position: 4
---

# Travelgate's Business Model

Travelgate's pull API business model is designed to simplify access to the Marketplace. With a single request using a unique FastX hotel code, Buyers can access the portfolio of one or more Suppliers connected to the platform. This eliminates the need to manage individual Supplier codes and mappings, streamlining integration.

The responses are fundamentally centered around the concept of **options**, which serve as comprehensive "packages" encapsulating all information required for a Buyer to understand and confirm a booking. Each option includes crucial details such as price, policies, and board information.

Additionally, Travelgate returns both **FastX codes** (unique Travelgate identifiers for hotels, boards, and rooms) and **Supplier native codes** in the API responses. Buyers can use the standardized FastX codes for simplified integration, while still having access to original Supplier identifiers for transparency and advanced use cases.

## Structure of Options

**Options** are hierarchically structured to provide granular booking details:

**Boards**: Every option is associated with a single board. This node contains information such as:
    - **Code**: A unique identifier for the board (**both FastX code and Supplier's native code**).
    - **Name**: The descriptive name of the meal plan (e.g., "Full Board," "Half Board") (**both FastX and Supplier names**).
    - **Rooms**: Information about the rooms included within this specific board.

**Rooms**: Each board can include one or more rooms. The room node provides essential details, such as:
    - **Code**: A unique identifier for the room type (**both FastX code and Supplier's native code**).
    - **Name**: The descriptive name of the room (e.g., "Double Room," "Suite") (**both FastX and Supplier names**).
    - **Room Information**: Additional specifics about the room's features and capacity.

This structure ensures all necessary information is clearly presented, enabling Buyers to make informed booking decisions.


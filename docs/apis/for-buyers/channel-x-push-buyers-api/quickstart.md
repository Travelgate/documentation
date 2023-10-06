---
sidebar_position: 1
---

# Quickstart

## Introduction

Channel-X extracts the product loaded by Channel Managers into our Inventory system and sends it to a third party. Buyers have two options for loading product into their system: they can select the Full Copy tab in Inventory's extranet to load all the product, or they can select specific hotels to copy.

When the Channel Manager makes an update, Channel-X sends a smaller product request (Delta) to notify buyers of the change. This is because Channel-X only sends information that has changed, and it is able to detect what information has changed and which is duplicated.

Please note that connecting with Channel Managers through TravelgateX requires a previous step in which the buyer configures the setup of the hotels, rates, and rooms contracted with the hoteliers in the Inventory extranet. This configuration allows the Channel Manager to map all this information and load availability and prices for the buyer.

:::caution

Channel-X Push Buyers API is a non-standalone API that exclusively retrieves products that have been previously pushed by the Supplier to your system. To enable bookings, it is essential to also develop Hotel-X Pull Buyers API.

:::

### Prerequisites

#### API Endpoint

#### Request Headers

#### Supported Operations

### Step 1 Inventory

### Step 2 HotelRatePlanInventoryNotif

### Step 3 HotelAvailNotif

### Step 4 HotelRatePlanNotif

### Next steps

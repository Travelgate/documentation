---
sidebar_position: 4
---

# Travelgate's Business Model

Travelgate's pull API business model and its responses are fundamentally centered around the concept of options. These options serve as comprehensive "packages," encapsulating all pertinent information required for a buyer to understand and confirm a booking.

Each **option** provides crucial details, including:

    - **Price**: The total cost associated with the option.<br></br>
    - **Policies**: All relevant policies, such as cancellation deadlines and values.<br></br>
    - **Board Information**: Details about the meal plan included.<br></br>

## Structure of Options

**Options** are hierarchically structured to provide granular details about the booking. Below "options," you'll find:

**Boards**: Every option is associated with a single board. This node contains information such as:
    - **Code**: A unique identifier for the board.
    - **Name**: The descriptive name of the meal plan (e.g., "Full Board," "Half Board").
    - **Rooms**: Information about the rooms included within this specific board.

**Rooms**: Each board can include one or more rooms. The room node provides essential details, such as:
    - **Code**: A unique identifier for the room type.
    - **Name**: The descriptive name of the room (e.g., "Double Room," "Suite").
    - **Room Information**: Additional specifics about the room's features and capacity.
This structured approach ensures that all necessary information is clearly presented, enabling buyers to make informed booking decisions.

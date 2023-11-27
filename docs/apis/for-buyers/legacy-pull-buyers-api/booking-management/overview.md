---
sidebar_position: 1
---

# Overview

The Booking Management operations provide a streamlined approach to handle bookings with a specific Seller. These operations include `Reservation List`, `Reservation Read`, and `Cancel`. The Booking Read and List facilitates retrieval of detailed booking information. Cancellation offers a straightforward way to cancel bookings when needed. Utilizing these operations streamlines the booking process and empowers you to manage bookings effectively with your designated Seller.

EJEMPLO CARDS ACTUAL 

<div className="shortcuts-overview">
    <div className="shortcuts-overview__content">
        <a className="item" href="reservation-list">
            <icon icon="fa-brands fa-github" size="lg" />
            <p className="item__title">Reservation List</p>
            <p className="item__subtitle">Retrieves a list of bookings.</p>
        </a>
        <a className="item" href="reservation-read">
            <icon icon="fa-brands fa-github" size="lg" />
            <p className="item__title">Reservation Read</p>
            <p className="item__subtitle">Retrieves booking details.</p>
        </a>
        <a className="item" href="cancel">
            <icon icon="fa-brands fa-github" size="lg" />
            <p className="item__title">Cancel</p>
            <p className="item__subtitle">Cancels a booking.</p>
        </a>
    </div> 
</div>

EJEMPLO CARDS 3

## Category Content

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
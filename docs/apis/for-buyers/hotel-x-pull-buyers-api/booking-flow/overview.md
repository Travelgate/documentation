---
sidebar_position: 1
---

# Overview

In order to book a hotel room, booking flow methods must be executed sequentially: `search`, `quote` and `book`.

![Hotel-X Shopping Flow](https://storage.travelgate.com/docs/hotel-x_shopping_flow.svg)


<div className="shortcuts-overview">
    <div className="shortcuts-overview__content">
        <a className="item" href="search">
            <icon icon="fa-brands fa-github" size="lg" />
            <p className="item__title">Search</p>
            <p className="item__subtitle">Start by checking availability for your desired dates and number of guests. You can search for one or multiple Sellers' access.</p>
        </a>
        <a className="item" href="quote">
            <icon icon="fa-brands fa-github" size="lg" />
            <p className="item__title">Quote</p>
            <p className="item__subtitle">Evaluate the rate before making a final booking decision. It provides you with the same information as the Search response, including the most up-to-date pricing, rate details, and cancellation policies.</p>
        </a>
        <a className="item" href="book">
            <icon icon="fa-brands fa-github" size="lg" />
            <p className="item__title">Book</p>
            <p className="item__subtitle">When you're ready, proceed with the Book operation. It requests a reservation confirmation using the specific optionId obtained from the Quote step.</p>
        </a>
    </div> 
</div>
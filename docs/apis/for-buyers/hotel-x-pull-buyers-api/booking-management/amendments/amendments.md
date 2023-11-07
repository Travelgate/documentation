---
sidebar_position: 1
---

# Overview

The Amendment operations allow you to amend different aspects of a booking. There are currently five amendment operations available:

<div className="shortcuts-overview">
    <div className="shortcuts-overview__content">
        <a className="item" href="amend-dates">
            <icon icon="fa-brands fa-github" size="lg" />
            <p className="item__title">Amend Dates</p>
            <p className="item__subtitle">Amend the checkin and/or the checkout of a booking.</p>
        </a>
        <a className="item" href="amend-board">
            <icon icon="fa-brands fa-github" size="lg" />
            <p className="item__title">Amend Board</p>
            <p className="item__subtitle">Amend the board of a booking.</p>
        </a>
        <a className="item" href="amend-rooms">
            <icon icon="fa-brands fa-github" size="lg" />
            <p className="item__title">Amend Rooms</p>
            <p className="item__subtitle">Amend the room of a booking.</p>
        </a>
        <a className="item" href="amend-paxes">
            <icon icon="fa-brands fa-github" size="lg" />
            <p className="item__title">Amend Paxes</p>
            <p className="item__subtitle">Amend the paxes of a booking.</p>
        </a>
        <a className="item" href="amend-remarks">
            <icon icon="fa-brands fa-github" size="lg" />
            <p className="item__title">Amend Remarks</p>
            <p className="item__subtitle">Add a special request/remark on a booking.</p>
        </a>
    </div> 
</div>

Each amendment type must be performed in two steps, `Query` (quotes the amendment) and `Mutation` (commits the amendment). In both steps the returned fields include:

* The booking detail with the amendment applied
* Amendment fees if applicable
* AmendmentID (Only returned in the query response)

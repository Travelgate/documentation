import React from 'react';
import Admonition from '@theme/Admonition';

const CautionSettingsHotelX = () => {

    return (
        <>
            <Admonition type={`caution`} title={`Remember`}>
            It's important to note that even if certain fields in the "criteria" or "settings" inputs are labeled as optional, we still need to use some value internally.
            This value will either come from your query/mutation request or your <a href={`/docs/apis/for-buyers/hotel-x-pull-buyers-api/making-requests/settings`} target={`_blank`}>default settings</a>.
            You have the ability to manage your default API settings by visiting the <a href={`https://app.travelgatex.com/connections/settings`} target={`_blank`}>API Settings section</a> on our website.
            </Admonition>
        </>
    )
}

export default CautionSettingsHotelX;

import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the FontAwesomeIcon component.
import { library } from '@fortawesome/fontawesome-svg-core'; // Import the library component.
import { fab } from '@fortawesome/free-brands-svg-icons'; // Import all brands icons.
import { fas } from '@fortawesome/free-solid-svg-icons'; // Import all solid icons.

library.add(fab, fas); // Add all icons to the library so you can use them without importing them individually.

// Our custom components
import GraphqlSample from "../components/GraphqlSample";
import BrowserWindow from "../components/BrowserWindow";
import TipContactCustomerCare from "../components/Admonitions/TipContactCustomerCare";
import CautionSettingsHotelX from "../components/Admonitions/CautionSettingsHotelX";
import YoutubeVideo from "../components/Youtube";
import RestPlayground from "../components/RestPlayground";


export default {
    // Re-use the default mapping
    ...MDXComponents,
    icon: FontAwesomeIcon,
    GraphqlSample,
    BrowserWindow,
    TipContactCustomerCare,
    CautionSettingsHotelX,
    YoutubeVideo,
    RestPlayground
};

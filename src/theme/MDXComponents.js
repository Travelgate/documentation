import React from 'react';
import withToken from "../components/WithToken";
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';


export default withToken({
    // Re-use the default mapping
    ...MDXComponents,
    // Map the "<Highlight>" tag to our Highlight component
    // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
});

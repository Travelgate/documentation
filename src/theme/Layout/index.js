import React, {useEffect} from 'react';
import Layout from '@theme-original/Layout';
import withToken from "../../components/WithToken";

function LayoutWrapper(props) {
  return (
    <>
      <Layout {...props} />
    </>
  );
}

export default withToken(LayoutWrapper);
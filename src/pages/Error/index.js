import React from 'react';
import Layout from '../../components/Layout';

const Error = ({errorMessage}) => {
    return <Layout
        title={`React Gallery - Error Page`}
        >
        <h1>{errorMessage || `Something went wrong`}</h1>
    </Layout>
};

export default Error;
import React from 'react';

import { Helmet } from 'react-helmet-async';

const Layout = ({links, title, description, children}) => {
    return <main className="main">
        <Helmet>
            {links}
            <title>{title}</title>
            <meta name="description" content={description} />
        </Helmet>
        {children}
    </main>
}

export default Layout;
import React, { Fragment } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { Home, NotFound } from '../pages';
import ErrorBoundary from '../components/ErrorBoundary';

function Routes() {
    const { pathname } = useLocation();
    return (
        <Fragment>
            <ErrorBoundary key={pathname}>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route component={NotFound} />
                </Switch>
            </ErrorBoundary>
        </Fragment>
    );
}

export default Routes;

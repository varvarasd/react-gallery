import React, { Fragment } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Home, NotFound } from '../pages';
import ErrorBoundary from '../components/ErrorBoundary';

function AppRoutes() {
    const { pathname } = useLocation();
    return (
        <Fragment>
            <ErrorBoundary key={pathname}>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route element={<NotFound />} />
                </Routes>
            </ErrorBoundary>
        </Fragment>
    );
}

export default AppRoutes;

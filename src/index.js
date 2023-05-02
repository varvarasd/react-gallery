import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import { HelmetProvider } from 'react-helmet-async';
import { ImagesProvider } from './context/ImagesContext';
import AppRoutes from './appRoutes';
import './index.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
            <ErrorBoundary>
                <HelmetProvider>
                    <ImagesProvider>
                        <Router>
                            <AppRoutes />
                        </Router>
                    </ImagesProvider>
                </HelmetProvider>
            </ErrorBoundary>
    </React.StrictMode>
);

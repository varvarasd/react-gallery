import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import { HelmetProvider } from 'react-helmet-async';
import { ImagesProvider } from './context/ImagesContext';
import Routes from './routes';
import './index.scss';

const App = () => {
    return (
        <ErrorBoundary>
            <HelmetProvider>
                <ImagesProvider>
                    <Router>
                        <Routes />
                    </Router>
                </ImagesProvider>
            </HelmetProvider>
        </ErrorBoundary>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));


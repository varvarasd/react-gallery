import React from 'react';
import { render } from '@testing-library/react';
jest.mock('react-helmet-async');
import ErrorBoundary from '.';


describe('ErrorBoundary', () => {
    it('renders children if no error', () => {
        const { getByText } = render(<ErrorBoundary><div>Some child</div></ErrorBoundary>);
        expect(getByText(/Some child/)).toBeInTheDocument();
    });
    it('renders Error component on error with error message', () => {
        const ErrorComponent = () => { throw new Error('Some error') };
        const { container, getByText } = render(
            <ErrorBoundary>
                <ErrorComponent />
            </ErrorBoundary>
        );
        
        expect(getByText(/Error: Some error/)).toBeInTheDocument();
    });
})
import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from '.';
jest.mock('react-helmet-async');


describe('ErrorBoundary', () => {
    it('renders children if no error', () => {
        render(<ErrorBoundary><div>Some child</div></ErrorBoundary>);
        expect(screen.getByText('Some child')).toBeInTheDocument();
    });
    it('renders Error component on error with error message', () => {
        const ErrorComponent = () => { throw new Error('Some error') };
        render(
            <ErrorBoundary>
                <ErrorComponent />
            </ErrorBoundary>
        );
        
        expect(screen.getByText('Error: Some error')).toBeInTheDocument();
    });
})
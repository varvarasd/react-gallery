import React from 'react';
import { render } from '@testing-library/react';
import NotFound from '.';
jest.mock('react-helmet-async');

describe('NotFound', () => {
    it('renders', () => {
        const { getByText } = render(<NotFound />);
        expect(getByText(/Page Not Found/)).toBeInTheDocument();
    });
});
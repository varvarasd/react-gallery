import React from 'react';
import { render } from '@testing-library/react';
import Layout from '.';
jest.mock('react-helmet-async');

describe('Layout', () => {
    it('renders', () => {
        const { container } = render(<Layout />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders children', () => {
        const { getByText } = render(<Layout><div>Layout child</div></Layout>);
        expect(getByText(/Layout child/)).toBeInTheDocument();
    });
});
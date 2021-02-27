import React from 'react';
import { render } from '@testing-library/react';
import Loading from '.';

describe('Loading', () => {
    it('renders', () => {
        const { container } = render(<Loading />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders children', () => {
        const { getByText } = render(<Loading text='some text' />);
        expect(getByText(/some text/)).toBeInTheDocument();
    });
});
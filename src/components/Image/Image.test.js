import React from 'react';
import { render, screen } from '@testing-library/react';
import Image from '.';

describe('Image', () => {
    it('renders', () => {
        const { container } = render(<Image />);
        // eslint-disable-next-line testing-library/no-node-access
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders with given props', () => {
        render(<Image url='some/url' alt='some alt'/>);
        expect(screen.getByAltText('some alt')).toBeTruthy();
        expect(screen.getByAltText('some alt').src.includes('some/url')).toBe(true);
    });
});
import React from 'react';
import { render } from '@testing-library/react';
import Image from '.';

describe('Image', () => {
    it('renders', () => {
        const { container } = render(<Image />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders with given props', () => {
        const { getByAltText } = render(<Image url='some/url' alt='some alt'/>);
        expect(getByAltText('some alt')).toBeTruthy();
        expect(getByAltText('some alt').src.includes('some/url')).toBe(true);
    });
});
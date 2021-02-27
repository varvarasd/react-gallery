import React from 'react';
import { render } from '@testing-library/react';
import { LeftArrow, RightArrow } from '.';

describe('LeftArrow', () => {
    it('renders with given width', () => {
        const { container } = render(<LeftArrow width={'10px'}/>);
        expect(container.firstChild).toMatchSnapshot();
    });
});

describe('RightArrow', () => {
    it('renders with given width', () => {
        const { container } = render(<RightArrow width={'10px'}/>);
        expect(container.firstChild).toMatchSnapshot();
    });
});
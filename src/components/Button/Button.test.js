import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '.';

describe('Button', () => {
    it('renders', () => {
        const { container } = render(<Button />);
        expect(container).toMatchSnapshot();
    });

    it('renders with given params', () => {
        const someFunction = jest.fn();

        const { container } = render(
                <Button addClass='some-class'
                    labelName='some-label'
                    action={() => someFunction()} />
            );

        expect(container.firstChild).toHaveClass('some-class');
        expect(container.firstChild.getAttribute('label')).toBe('some-label');

        fireEvent.click(container.firstChild);
        expect(someFunction).toHaveBeenCalledTimes(1);
    });

    it('renders children', () => {
        const { getByText } = render(<Button><div>button child</div></Button>);
        expect(getByText(/button child/)).toBeInTheDocument();
    });
})
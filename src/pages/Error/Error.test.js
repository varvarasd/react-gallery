import React from 'react';
import { render } from '@testing-library/react';
import Error from '.';
jest.mock('react-helmet-async');

describe('Error', () => {
    it('renders default message if no given message present', () => {
        const { getByText } = render(<Error />);
        expect(getByText(/Something went wrong/)).toBeInTheDocument();
    });
    it('renders given message if present', () => {
        const errorMessage = 'Some error message';
        const { getByText } = render(<Error errorMessage={errorMessage}/>);
        expect(getByText(/Some error message/)).toBeInTheDocument();
    });
});
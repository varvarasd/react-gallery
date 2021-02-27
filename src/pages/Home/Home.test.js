import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Home from '.';
jest.mock('react-helmet-async');

import ImagesContext from '../../context/ImagesContext';

describe('Home', () => {
    const mockContextValues = {
        images: [{ url: 'image/url', author: 'some author'}],
        image: { url: 'current/image/url', author: 'some author current image'},
        isLoading: false,
        dispatch: jest.fn()
    };

    it('renders Home content if isLoading is false', () => {

        const { container, getByText } = render(
            <ImagesContext.Provider value={mockContextValues}>
                <Home />
            </ImagesContext.Provider>
            );
        expect(getByText(/By some author current image/)).toBeInTheDocument();
        expect(container).toMatchSnapshot();
    });

    it('calls dispatch with NEXT_IMAGE', () => {
        const spy = jest.spyOn(mockContextValues, 'dispatch')

        const { getByRole } = render(
            <ImagesContext.Provider value={mockContextValues}>
                <Home />
            </ImagesContext.Provider>
            );
        const nextButton = getByRole(/next/);
        fireEvent.click(nextButton);
        expect(spy).toHaveBeenCalledWith({"type": "NEXT_IMAGE"});
    });

    it('calls dispatch with PREVIOUS_IMAGE', () => {
        const spy = jest.spyOn(mockContextValues, 'dispatch')

        const { getByRole } = render(
            <ImagesContext.Provider value={mockContextValues}>
                <Home />
            </ImagesContext.Provider>
            );
        const previousButton = getByRole(/previous/);
        fireEvent.click(previousButton);
        expect(spy).toHaveBeenCalledWith({"type": "PREVIOUS_IMAGE"});
    });

    it('renders loading component if isLoading is true', () => {
        mockContextValues.isLoading = true;

        const { getByText } = render(
            <ImagesContext.Provider value={mockContextValues}>
                <Home />
            </ImagesContext.Provider>
            );
        expect(getByText(/Loading/)).toBeInTheDocument()
    });
});
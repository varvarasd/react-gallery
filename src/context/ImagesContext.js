import React, { useEffect, createContext, useReducer } from 'react';
import { getImages } from '../services';
import reducer from './reducer';

const ImagesContext = createContext();


const ImagesProvider = ({ children }) => {
    const initialState = { 
        images: [{ url: '', author: ''}], 
        index: 0, 
        isLoading: true 
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        getImages(dispatch);
    }, []);

    const contextValues = {
        failedFetch: state.failedFetch,
        images: state.images || [],
        image: state.images && state.images[state.index],
        isLoading: state.isLoading, 
        dispatch
    };

    return <ImagesContext.Provider value={contextValues}>
        {children}
    </ImagesContext.Provider>
}

export { 
    ImagesContext as default,
    ImagesProvider
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_IMAGES_FAIL':
            return { failedFetch: action.payload, isLoading: false};
        case 'SET_IMAGES':
            return { 
                ...state, 
                images: action.payload, 
                isLoading: false 
            };

        case 'NEXT_IMAGE':
            state.index = state.index + 1 === state.images.length
                ? 0
                : state.index + 1;
            return { ...state };

        case 'PREVIOUS_IMAGE':
                state.index = state.index - 1 === -1
                    ? state.images.length - 1
                    : state.index - 1;
            return { ...state };

        default:
            return {...state};
    }
}

export default reducer;
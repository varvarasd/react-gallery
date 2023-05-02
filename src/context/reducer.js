const reducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_IMAGES_FAIL':
        return { 
          ...state,
          failedFetch: action.payload,
          isLoading: false
        };
      case 'SET_IMAGES':
        return {
          ...state,
          images: action.payload,
          isLoading: false
        };
      case 'NEXT_IMAGE':
        const nextIndex = state.index + 1 === state.images.length ? 0 : state.index + 1;
        return {
          ...state,
          index: nextIndex
        };
      case 'PREVIOUS_IMAGE':
        const prevIndex = state.index - 1 === -1 ? state.images.length - 1 : state.index - 1;
        return {
          ...state,
          index: prevIndex
        };
      default:
        return state;
    }
  };
  
  export default reducer;
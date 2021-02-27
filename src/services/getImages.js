const getImages = async (dispatch) => {
    const url = process.env.REACT_APP_IMAGES_API;
    const result = await fetch(url, {
            headers: {
                authorization: process.env.REACT_APP_ACCESS 
            }
        })
        .then(handleErrors)
        .then(res => res.json())
        .catch((err) => {
            dispatch({type: 'FETCH_IMAGES_FAIL', payload: err.toString()})
            return null
        }
    );
    if(result) dispatch({type: 'SET_IMAGES', payload: result})
};

function handleErrors(res) {
    if (!res.ok) {
        throw Error(res.statusText);
    }
    return res;
}

export default getImages;
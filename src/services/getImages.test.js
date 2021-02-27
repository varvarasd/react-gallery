import getImages from './getImages';

describe('getImages', () => {
    const spyOnFetch = jest.spyOn(window, 'fetch');
    const obj = {
        dispatch: jest.fn()
    };
    const spyOnDispatch = jest.spyOn(obj, 'dispatch');

    it('fetches images and calls dispatch with SET_IMAGES', async () => {
        window.fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => ([{"author": "some image", "url": 'some url'}]),
        });
        
        await getImages(obj.dispatch);
        expect(spyOnDispatch).toHaveBeenCalledWith({"payload": [{"author": "some image", "url": "some url"}], "type": "SET_IMAGES"})
        expect(spyOnFetch).toHaveBeenCalledWith("https://infinite-reef-04495.herokuapp.com/", {"headers": {"authorization": "someaccesstoken2130"}})
    });

    it('dispatches FETCH_IMAGES_FAIL if fetch response is not ok with the error stringified as payload', async () => {
        window.fetch.mockResolvedValueOnce({
            ok: false,
        });

        await getImages(obj.dispatch);
        expect(spyOnDispatch).toHaveBeenCalledWith({"payload": "Error", "type": "FETCH_IMAGES_FAIL"})
    });
});
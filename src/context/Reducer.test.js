import reducer from './reducer';

describe('reducer', () => {
    const state = { index: 0 };
    const action = {};

    it('returns state by default', () => {
        action.type = 'some type';

        const result = reducer(state, action);
        expect(result).toEqual({"index": 0});
    });

    it('adds images payload to state on SET_IMAGES action type', () => {
        action.type = 'SET_IMAGES';
        action.payload = [{}, {}];

        const result = reducer(state, action);
        expect(result.images.length).toEqual(2);
    });

    it('increases index on NEXT_IMAGE action type', () => {
        state.images = [{}, {}];
        action.type = 'NEXT_IMAGE';

        const result = reducer(state, action);
        expect(result.index).toBe(1);
    });

    it('decrease index on PREVIOUS_IMAGE action type', () => {
        state.images = [{}, {}];
        action.type = 'PREVIOUS_IMAGE';

        const result = reducer(state, action);
        expect(result.index).toBe(1);
    });

    it('if index is 0 (first image), PREVIOUS_IMAGE action type sets index to last image', () => {
        state.images = [{}, {}, {}];
        state.index = 0;
        action.type = 'PREVIOUS_IMAGE';

        const result = reducer(state, action);
        expect(result.index).toBe(2);
    });

    it('if index is images length (last image), NEXT_IMAGE action type sets index to first image', () => {
        state.images = [{}, {}, {}];
        state.index = 2;
        action.type = 'NEXT_IMAGE';

        const result = reducer(state, action);
        expect(result.index).toBe(0);
    });
});
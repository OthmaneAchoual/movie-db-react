export function reduce(initialState, reducers) {
    return function(state = initialState, action) {
        const reducer = reducers[action.type];
        return reducer ? reducer(state, action) : state;
    }
}
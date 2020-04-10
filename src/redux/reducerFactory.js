
export default reducers => (state = {}, action = {}) => {
    return {
    ...state,
    ...(typeof reducers[action.type] === 'function' && reducers[action.type](state, action) || {})
    }
}

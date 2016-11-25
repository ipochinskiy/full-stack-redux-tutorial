import { setEntries, next, vote, INITIAL_STATE } from './core';

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_ENTRIES':
            return setEntries(state, action.entries);
        case 'NEXT':
            return next(state);
        case 'VOTE':
            return state.update(
                'vote',
                (stateState) => vote(stateState, action.entry)
            );
        default:
            return state;
    }
}

export default reducer;
